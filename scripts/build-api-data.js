/**
 * Fetches live OpenAPI YAML specs and builds src/data/api/all-apis.json
 * Run automatically via: npm run prebuild / npm run prestart
 *
 * No local files needed — specs are fetched directly from public Swagger servers.
 */

'use strict';
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const yaml = require('js-yaml');

const OUT = path.join(__dirname, '..', 'src', 'data', 'api', 'all-apis.json');

// Live OpenAPI YAML spec URLs — one per API section
const API_SPECS = [
  { name: 'Selenium Automation API',           url: 'https://swagger-api-support.lambdatest.com/openapi.yaml' },
  { name: 'Automated Screenshots API',         url: 'https://falcon-screenshot-public-api.lambdatest.com/openapi.yaml' },
  { name: 'App Automation API (Real Devices)', url: 'https://app-automation-apis-docs.lambdatest.com/mobile_automation.yaml' },
  { name: 'Smart UI',                          url: 'https://swagger-api-support.lambdatest.com/smartui/openapi.yaml' },
  { name: 'Cypress Automation',                url: 'https://swagger-api-support.lambdatest.com/cypress/openapi.yaml' },
  { name: 'User Management',                   url: 'https://swagger-api-support.lambdatest.com/user_management/openapi.yaml' },
  { name: 'Test Manager',                      url: 'https://swagger-api-support.lambdatest.com/test_management/openapi.yaml' },
  { name: 'HyperExecute',                      url: 'https://swagger-api-support.lambdatest.com/hyperexecute/openapi.yaml' },
  { name: 'Accessibility Testing',             url: 'https://swagger-api-support.lambdatest.com/accessibility/openapi.yaml' },
  { name: 'Analytics',                         url: 'https://swagger-api-support.lambdatest.com/analytics/openapi.yaml' },
  { name: 'Performance Testing',               url: 'https://swagger-api-support.lambdatest.com/performance_testing/openapi.yaml' },
  { name: 'Audit logs',                        url: 'https://swagger-api-support.lambdatest.com/audit-logs/openapi.yaml' },
];

// Fetch a URL and return the body as a string (follows redirects)
function fetchText(url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    lib.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchText(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        res.destroy();
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
      res.on('error', reject);
    }).on('error', reject);
  });
}

// ─── OpenAPI helpers (unchanged) ────────────────────────────────────────────

function extractSecurityAuth(op, spec) {
  const schemes = (spec.components && spec.components.securitySchemes)
    || (spec.securityDefinitions) || {};
  const securityReqs = op.security || spec.security || [];
  if (!securityReqs.length) return [];
  const auth = [];
  for (const req of securityReqs) {
    for (const [schemeName] of Object.entries(req)) {
      const scheme = schemes[schemeName];
      if (!scheme) continue;
      if (scheme.type === 'http' && scheme.scheme === 'basic') {
        auth.push({ name: 'Authorization', type: 'string', in: 'header', required: true,
          description: 'Basic authentication header of the form `Basic <encoded-value>`, where `<encoded-value>` is the base64-encoded string `username:password`.' });
      } else if (scheme.type === 'apiKey') {
        auth.push({ name: scheme.name || 'Authorization', type: 'string', in: scheme.in || 'header', required: true, description: scheme.description || '' });
      } else if (scheme.type === 'basic') {
        auth.push({ name: 'Authorization', type: 'string', in: 'header', required: true,
          description: 'Basic authentication header of the form `Basic <encoded-value>`, where `<encoded-value>` is the base64-encoded string `username:password`.' });
      }
    }
  }
  return auth;
}

function flattenSpec(spec) {
  if (!spec || !spec.paths) return [];
  const baseUrl = (spec.servers && spec.servers[0] && spec.servers[0].url) || '';
  const endpoints = [];
  for (const [pth, methods] of Object.entries(spec.paths)) {
    for (const [method, op] of Object.entries(methods)) {
      if (!['get', 'post', 'put', 'delete', 'patch'].includes(method)) continue;
      endpoints.push({
        method: method.toUpperCase(),
        path: pth.startsWith('/') ? pth : `/${pth}`,
        summary: op.summary || '',
        description: op.description || op.summary || '',
        deprecated: !!op.deprecated,
        tags: op.tags || [],
        parameters: op.parameters || [],
        requestBody: op.requestBody || null,
        responses: op.responses || {},
        securityAuth: extractSecurityAuth(op, spec),
        baseUrl,
      });
    }
  }
  return endpoints;
}

function categorizeParams(parameters) {
  const auth = [], pathParams = [], queryParams = [];
  for (const p of parameters || []) {
    const entry = {
      name: p.name,
      type: (p.schema && p.schema.type) || 'string',
      in: p.in,
      required: !!p.required,
      description: p.description || '',
    };
    if (p.in === 'header' && /authorization/i.test(p.name)) auth.push(entry);
    else if (p.in === 'path') pathParams.push(entry);
    else if (p.in === 'query') queryParams.push(entry);
  }
  return { auth, pathParams, queryParams };
}

// Local patches for known-wrong examples in upstream specs.
// Each function takes the raw example and returns the corrected one.
// Remove the matching entry once the upstream YAML is fixed.
const REQUEST_BODY_EXAMPLE_OVERRIDES = {
  // TE-17800: upstream uses `parent_folder_id`, real API expects `parent_id`.
  // Rename both the key and its self-referential placeholder value.
  'Test Manager|POST|/api/v1/folder': (ex) => {
    if (!ex || !Array.isArray(ex.folders)) return ex;
    return {
      ...ex,
      folders: ex.folders.map((f) => {
        if (!f || typeof f !== 'object' || !('parent_folder_id' in f)) return f;
        const { parent_folder_id, ...rest } = f;
        return { ...rest, parent_id: 'parent_id' };
      }),
    };
  },
  // PUT /api/v1/folder is now in REQUEST_BODY_VARIANTS_OVERRIDES below — the
  // upstream example omits the `action` discriminator and conflates rename/move.
};

// Variant overrides expose multiple body shapes for one endpoint. The modal
// renders a tab per variant; each variant has its own example + derived fields.
// Use this when an endpoint accepts distinct payload shapes selected by a
// discriminator (e.g. PUT /api/v1/folder uses `action: "update"` vs "move").
const REQUEST_BODY_VARIANTS_OVERRIDES = {
  // TE-17800: PUT /api/v1/folder serves two operations:
  //  - Rename: action="update", no parent_id/entity_type/serial_no
  //  - Move:   action="move",   adds parent_id + entity_type + serial_no
  // The upstream YAML ships a single example that matches neither real payload.
  'Test Manager|PUT|/api/v1/folder': () => ([
    {
      name: 'Rename',
      example: {
        id: 'folder_id',
        action: 'update',
        entity_id: 'project_id',
        name: 'Test Folder - LambdaTest Demo',
      },
    },
    {
      name: 'Move',
      example: {
        id: 'folder_id',
        action: 'move',
        entity_id: 'project_id',
        entity_type: 'project',
        name: 'Test Folder - LambdaTest Demo',
        parent_id: 'parent_id',
        serial_no: 1,
      },
    },
  ]),
};

// Infer flat field metadata from a primitive-only example object — same logic
// used by the legacy schema-less-fallback path, factored out for variant reuse.
function inferFieldsFromExample(example) {
  if (!example || typeof example !== 'object' || Array.isArray(example)) return [];
  return Object.entries(example).map(([name, value]) => {
    let type = 'string';
    if (typeof value === 'number') type = Number.isInteger(value) ? 'integer' : 'number';
    else if (typeof value === 'boolean') type = 'boolean';
    else if (Array.isArray(value)) type = 'array';
    else if (typeof value === 'object' && value !== null) type = 'object';
    return { name, type, required: false, description: '' };
  });
}

function resolveRef(ref, spec) {
  if (!ref || !ref.startsWith('#/')) return null;
  const parts = ref.slice(2).split('/');
  let node = spec;
  for (const p of parts) {
    if (!node) return null;
    node = node[p];
  }
  return node || null;
}

function extractRequestBody(requestBody, spec, ctx = {}) {
  if (!requestBody) return null;
  const content = requestBody.content || {};
  const contentType = Object.keys(content)[0] || 'application/json';
  const bodyContent = content[contentType];
  if (!bodyContent || !bodyContent.schema) return null;
  let schema = bodyContent.schema;
  if (schema.$ref) schema = resolveRef(schema.$ref, spec) || schema;
  if (Array.isArray(schema.allOf)) {
    const merged = { properties: {}, required: [] };
    for (const sub of schema.allOf) {
      const resolved = sub.$ref ? resolveRef(sub.$ref, spec) || sub : sub;
      if (resolved.properties) Object.assign(merged.properties, resolved.properties);
      if (resolved.required) merged.required = merged.required.concat(resolved.required);
    }
    schema = merged;
  }
  // Resolve the example up front (with local override) so derived property names
  // from the example fallback below also pick up the correction.
  const rawExample = bodyContent.example ?? schema.example;
  const overrideKey = (ctx.specName && ctx.method && ctx.path)
    ? `${ctx.specName}|${ctx.method}|${ctx.path}`
    : null;
  const overrideFn = overrideKey ? REQUEST_BODY_EXAMPLE_OVERRIDES[overrideKey] : null;
  const exampleValue = overrideFn ? overrideFn(rawExample) : rawExample;

  const props = schema.properties || {};
  const required = schema.required || [];
  let properties = Object.entries(props).map(([name, propSchema]) => {
    let resolved = propSchema.$ref ? resolveRef(propSchema.$ref, spec) || propSchema : propSchema;
    const hasEnum = Array.isArray(resolved.enum) && resolved.enum.length > 0;
    const type = resolved.type || 'string';
    const format = resolved.format || null;
    const displayType = hasEnum ? `enum<${type}>` : (format ? `${type}<${format}>` : type);
    return { name, type: displayType, required: required.includes(name), description: resolved.description || '', ...(hasEnum && { enum: resolved.enum }) };
  });

  // Fallback for specs that declare `type: object` without `properties` —
  // derive fields from the example block so the Try It modal can render
  // editable inputs. Inferred types and required flags are best-effort;
  // long-term fix is for spec authors to add proper `properties`.
  if (properties.length === 0) {
    properties = inferFieldsFromExample(exampleValue);
    if (properties.length > 0) {
      const loc = ctx.method && ctx.path ? `${ctx.method} ${ctx.path}` : '(unknown endpoint)';
      const src = ctx.specName ? ` [${ctx.specName}]` : '';
      console.warn(`⚠️  ${loc}${src}: requestBody has no schema.properties; derived ${properties.length} field(s) from example. Spec should declare properties for accurate types/required/descriptions.`);
    }
  }

  // Variant overrides: attach per-tab examples + derived fields when an
  // endpoint serves multiple payload shapes (e.g. PUT folder rename vs move).
  const variantsFn = overrideKey ? REQUEST_BODY_VARIANTS_OVERRIDES[overrideKey] : null;
  const variants = variantsFn
    ? variantsFn().map((v) => ({
        name: v.name,
        example: v.example,
        properties: inferFieldsFromExample(v.example),
      }))
    : null;

  // When variants are present, the first one becomes the canonical top-level
  // example + properties so non-variant-aware consumers (e.g. the static
  // CodeExamples panel) show a sensible default instead of stale spec data.
  const finalExample = variants && variants.length > 0 ? variants[0].example : exampleValue;
  const finalProperties = variants && variants.length > 0 ? variants[0].properties : properties;

  return {
    contentType,
    description: requestBody.description || '',
    properties: finalProperties,
    ...(finalExample !== undefined && { example: finalExample }),
    ...(variants && variants.length > 0 && { variants }),
  };
}

function schemaToExample(schema, spec, seen = new Set()) {
  if (!schema) return null;
  if (schema.$ref) {
    if (seen.has(schema.$ref)) return null;
    seen.add(schema.$ref);
    return schemaToExample(resolveRef(schema.$ref, spec), spec, seen);
  }
  if (schema.example !== undefined) return schema.example;
  if (schema.default !== undefined) return schema.default;
  if (Array.isArray(schema.enum) && schema.enum.length) return schema.enum[0];
  if (Array.isArray(schema.allOf)) {
    const merged = {};
    for (const sub of schema.allOf) {
      const ex = schemaToExample(sub, spec, new Set(seen));
      if (ex && typeof ex === 'object' && !Array.isArray(ex)) Object.assign(merged, ex);
    }
    if (Object.keys(merged).length) return merged;
  }
  if (Array.isArray(schema.oneOf) && schema.oneOf[0]) return schemaToExample(schema.oneOf[0], spec, new Set(seen));
  if (Array.isArray(schema.anyOf) && schema.anyOf[0]) return schemaToExample(schema.anyOf[0], spec, new Set(seen));
  const type = schema.type || (schema.properties ? 'object' : schema.items ? 'array' : 'string');
  if (type === 'object') {
    const obj = {};
    for (const [k, v] of Object.entries(schema.properties || {})) obj[k] = schemaToExample(v, spec, new Set(seen));
    return obj;
  }
  if (type === 'array') return [schemaToExample(schema.items || {}, spec, new Set(seen))];
  if (type === 'integer' || type === 'number') return schema.example ?? 123;
  if (type === 'boolean') return true;
  if (type === 'string') {
    if (schema.format === 'date') return '2018-03-15';
    if (schema.format === 'date-time') return '2018-03-15T12:00:00Z';
    if (schema.format === 'email') return 'user@example.com';
    if (schema.format === 'uri' || schema.format === 'url') return 'https://example.com';
    return '<string>';
  }
  return null;
}

function extractResponseSchema(responses, spec) {
  try {
    const resp200 = (responses || {})['200'];
    if (!resp200) return [];
    const resolvedResp = resp200.$ref ? resolveRef(resp200.$ref, spec) || resp200 : resp200;
    const json = (resolvedResp.content || {})['application/json'];
    if (!json || !json.schema) return [];
    let schema = json.schema;
    if (schema.$ref) schema = resolveRef(schema.$ref, spec) || schema;
    function unwrapSchema(s) {
      if (!s) return s;
      if (Array.isArray(s.allOf)) {
        const merged = { properties: {}, required: [] };
        for (const sub of s.allOf) {
          const u = unwrapSchema(sub.$ref ? resolveRef(sub.$ref, spec) || sub : sub);
          if (u && u.properties) Object.assign(merged.properties, u.properties);
          if (u && Array.isArray(u.required)) merged.required.push(...u.required);
        }
        return merged;
      }
      if (Array.isArray(s.oneOf) && s.oneOf[0]) return unwrapSchema(s.oneOf[0].$ref ? resolveRef(s.oneOf[0].$ref, spec) || s.oneOf[0] : s.oneOf[0]);
      if (Array.isArray(s.anyOf) && s.anyOf[0]) return unwrapSchema(s.anyOf[0].$ref ? resolveRef(s.anyOf[0].$ref, spec) || s.anyOf[0] : s.anyOf[0]);
      return s;
    }
    const unwrapped = unwrapSchema(schema);
    if (!unwrapped || !unwrapped.properties) return [];
    const requiredSet = new Set(Array.isArray(unwrapped.required) ? unwrapped.required : []);
    return Object.entries(unwrapped.properties).map(([propName, propSchema]) => {
      let resolved = propSchema && propSchema.$ref ? resolveRef(propSchema.$ref, spec) || propSchema : propSchema;
      const type = resolved ? resolved.type || (resolved.properties ? 'object' : resolved.items ? 'array' : null) : null;
      const hasChildren = resolved && (resolved.properties || resolved.allOf || resolved.oneOf || resolved.anyOf || (resolved.items && (resolved.items.properties || resolved.items.$ref)));
      return { name: propName, type: type || 'object', required: requiredSet.has(propName), description: (resolved && resolved.description) || '', hasChildren: !!hasChildren };
    });
  } catch { return []; }
}

function simplifyResponses(responses, spec) {
  const out = {};
  for (const [code, resp] of Object.entries(responses || {})) {
    const r = resp.$ref ? resolveRef(resp.$ref, spec) || resp : resp;
    const json = (r.content || {})['application/json'];
    let example = null, type = null;
    if (json) {
      if (json.example !== undefined) { example = json.example; }
      else if (json.examples) { const first = Object.values(json.examples)[0]; example = (first && first.value) !== undefined ? first.value : null; }
      else if (json.schema) {
        example = schemaToExample(json.schema, spec);
        let schema = json.schema;
        if (schema.$ref) schema = resolveRef(schema.$ref, spec) || schema;
        type = (schema && schema.type) || null;
      }
    }
    out[code] = { description: r.description || '', example, type };
  }
  return out;
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  const result = { apis: [] };
  let totalEndpoints = 0;

  for (const { name, url } of API_SPECS) {
    let spec = null;
    try {
      const text = await fetchText(url);
      spec = yaml.load(text);
      console.log(`✓ Fetched: ${name}`);
    } catch (e) {
      console.warn(`✗ Failed:  ${name} — ${e.message}`);
    }

    if (!spec || !spec.paths) {
      result.apis.push({ name, baseUrl: '', servers: [], groups: [] });
      continue;
    }

    const servers = spec.servers || [];
    const baseUrl = (servers[0] && servers[0].url) || '';
    const allEndpoints = flattenSpec(spec);

    // Group endpoints by their first tag (standard OpenAPI grouping)
    const groupMap = new Map();
    for (const ep of allEndpoints) {
      const tag = (ep.tags && ep.tags[0]) || name;
      if (!groupMap.has(tag)) groupMap.set(tag, []);
      groupMap.get(tag).push(ep);
    }

    const groups = [];
    for (const [tag, eps] of groupMap) {
      const endpoints = eps.map((ep) => {
        const { auth, pathParams, queryParams } = categorizeParams(ep.parameters);
        return {
          name: ep.summary || ep.path,
          method: ep.method,
          path: ep.path,
          description: ep.description,
          ...(ep.deprecated && { deprecated: true }),
          ...((auth.length || ep.securityAuth?.length) && { auth: [...(ep.securityAuth || []), ...auth] }),
          ...(pathParams.length && { pathParams }),
          ...(queryParams.length && { queryParams }),
          ...(ep.requestBody && { requestBody: extractRequestBody(ep.requestBody, spec, { specName: name, method: ep.method, path: ep.path }) }),
          responses: simplifyResponses(ep.responses, spec),
          responseSchema: extractResponseSchema(ep.responses, spec),
        };
      });
      totalEndpoints += endpoints.length;
      groups.push({ name: tag, endpoints });
    }

    result.apis.push({ name, baseUrl, servers, groups });
  }

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(result, null, 2));
  console.log(`\n✅ Generated ${OUT}`);
  console.log(`   APIs: ${result.apis.length}, Total endpoints: ${totalEndpoints}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
