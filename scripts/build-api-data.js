// Build src/data/api/all-apis.json from the OpenAPI YAML specs and Mintlify docs.json
// Usage: node scripts/build-api-data.js
//
// Inputs (from /tmp/, populated via `git show origin/stage-mintlify:<file>`):
//   /tmp/stage-docs.json  -- Mintlify navigation (defines API → group → endpoint slug ordering)
//   /tmp/<file>.yaml      -- OpenAPI 3.0 specs
// Output: src/data/api/all-apis.json

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const TMP = '/tmp';
const OUT = path.join(__dirname, '..', 'src', 'data', 'api', 'all-apis.json');

// Map API section name → YAML file path
// (If a YAML doesn't exist for an API, that section's endpoints will be empty.)
const API_TO_YAML = {
  'Selenium Automation API': 'support-openapi.yaml',
  'Automated Screenshots API': 'falcon-screenshot-openapi.yaml',
  'App Automation API (Real Devices)': 'mobile_automation.yaml',
  'Smart UI': 'Smart-UI.yaml',
  'Cypress Automation': 'cypress.yaml',
  'User Management': 'openapiOne.yaml',
  'Test Manager': 'test_manager.yaml',
  'HyperExecute': 'hyperexecute-openapi.yaml',
  'Accessibility Testing': 'accessibility-testing.yaml',
  'Analytics': 'analytics-openapi.yaml',
  'Performance Testing': 'performance.yaml',
  'Audit logs': 'audit-logs.yaml',
};

function slugify(str) {
  return String(str)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function loadYaml(file) {
  const fp = path.join(TMP, file);
  if (!fs.existsSync(fp)) return null;
  try {
    return yaml.load(fs.readFileSync(fp, 'utf8'));
  } catch (e) {
    console.warn(`Failed to parse ${file}:`, e.message);
    return null;
  }
}

// Extract auth entries from OpenAPI security schemes
function extractSecurityAuth(op, spec) {
  const schemes = (spec.components && spec.components.securitySchemes)
    || (spec.securityDefinitions) // OpenAPI 2
    || {};
  const securityReqs = op.security || spec.security || [];
  if (!securityReqs.length) return [];

  const auth = [];
  for (const req of securityReqs) {
    for (const [schemeName] of Object.entries(req)) {
      const scheme = schemes[schemeName];
      if (!scheme) continue;
      // OpenAPI 3: type=http, scheme=basic
      if (scheme.type === 'http' && scheme.scheme === 'basic') {
        auth.push({
          name: 'Authorization',
          type: 'string',
          in: 'header',
          required: true,
          description: `Basic authentication header of the form \`Basic <encoded-value>\`, where \`<encoded-value>\` is the base64-encoded string \`username:password\`.`,
        });
      } else if (scheme.type === 'apiKey') {
        auth.push({
          name: scheme.name || 'Authorization',
          type: 'string',
          in: scheme.in || 'header',
          required: true,
          description: scheme.description || '',
        });
      } else if (scheme.type === 'basic') {
        // OpenAPI 2
        auth.push({
          name: 'Authorization',
          type: 'string',
          in: 'header',
          required: true,
          description: `Basic authentication header of the form \`Basic <encoded-value>\`, where \`<encoded-value>\` is the base64-encoded string \`username:password\`.`,
        });
      }
    }
  }
  return auth;
}

// Build a flat list of endpoints from an OpenAPI spec
// Each entry: { method, path, summary, description, tags, parameters, requestBody, responses }
function flattenSpec(spec) {
  if (!spec || !spec.paths) return [];
  const baseUrl = (spec.servers && spec.servers[0] && spec.servers[0].url) || '';
  const endpoints = [];
  for (const [pth, methods] of Object.entries(spec.paths)) {
    for (const [method, op] of Object.entries(methods)) {
      if (!['get', 'post', 'put', 'delete', 'patch'].includes(method)) continue;
      endpoints.push({
        method: method.toUpperCase(),
        path: pth,
        summary: op.summary || '',
        description: op.description || op.summary || '',
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

// Convert OpenAPI parameters into our auth/path/query format
function categorizeParams(parameters) {
  const auth = [];
  const pathParams = [];
  const queryParams = [];
  for (const p of parameters || []) {
    const entry = {
      name: p.name,
      type: (p.schema && p.schema.type) || 'string',
      in: p.in,
      required: !!p.required,
      description: p.description || '',
    };
    if (p.in === 'header' && /authorization/i.test(p.name)) {
      auth.push(entry);
    } else if (p.in === 'path') {
      pathParams.push(entry);
    } else if (p.in === 'query') {
      queryParams.push(entry);
    }
  }
  return { auth, pathParams, queryParams };
}

// Resolve a $ref (e.g. "#/components/schemas/Foo") against the root spec
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

// Walk a schema and produce a realistic example JSON value
function schemaToExample(schema, spec, seen = new Set()) {
  if (!schema) return null;
  if (schema.$ref) {
    if (seen.has(schema.$ref)) return null; // break cycles
    seen.add(schema.$ref);
    return schemaToExample(resolveRef(schema.$ref, spec), spec, seen);
  }
  if (schema.example !== undefined) return schema.example;
  if (schema.default !== undefined) return schema.default;
  if (Array.isArray(schema.enum) && schema.enum.length) return schema.enum[0];

  // allOf / oneOf / anyOf → merge or first
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
    const props = schema.properties || {};
    for (const [k, v] of Object.entries(props)) {
      obj[k] = schemaToExample(v, spec, new Set(seen));
    }
    return obj;
  }
  if (type === 'array') {
    return [schemaToExample(schema.items || {}, spec, new Set(seen))];
  }
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

// Extract top-level properties from the 200 response schema for display in the center panel.
// Returns an array of: { name, type, required, description, hasChildren }
function extractResponseSchema(responses, spec) {
  try {
    const resp200 = (responses || {})['200'];
    if (!resp200) return [];

    // Resolve top-level $ref on the response object itself
    const resolvedResp = resp200.$ref ? resolveRef(resp200.$ref, spec) || resp200 : resp200;
    const content = resolvedResp.content || {};
    const json = content['application/json'];
    if (!json || !json.schema) return [];

    // Resolve the schema $ref if present
    let schema = json.schema;
    if (schema.$ref) {
      schema = resolveRef(schema.$ref, spec) || schema;
    }

    // Unwrap allOf / oneOf / anyOf to find properties
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
      if (Array.isArray(s.oneOf) && s.oneOf[0]) {
        const first = s.oneOf[0];
        return unwrapSchema(first.$ref ? resolveRef(first.$ref, spec) || first : first);
      }
      if (Array.isArray(s.anyOf) && s.anyOf[0]) {
        const first = s.anyOf[0];
        return unwrapSchema(first.$ref ? resolveRef(first.$ref, spec) || first : first);
      }
      return s;
    }

    const unwrapped = unwrapSchema(schema);
    if (!unwrapped || !unwrapped.properties) return [];

    const requiredSet = new Set(Array.isArray(unwrapped.required) ? unwrapped.required : []);
    const result = [];

    for (const [propName, propSchema] of Object.entries(unwrapped.properties)) {
      // Resolve $ref on individual property
      let resolved = propSchema;
      if (resolved && resolved.$ref) {
        resolved = resolveRef(resolved.$ref, spec) || resolved;
      }

      const type = resolved
        ? resolved.type ||
          (resolved.properties ? 'object' : resolved.items ? 'array' : null)
        : null;

      const hasChildren =
        resolved &&
        (resolved.properties ||
          resolved.allOf ||
          resolved.oneOf ||
          resolved.anyOf ||
          (resolved.items && (resolved.items.properties || resolved.items.$ref)));

      result.push({
        name: propName,
        type: type || 'object',
        required: requiredSet.has(propName),
        description: (resolved && resolved.description) || '',
        hasChildren: !!hasChildren,
      });
    }

    return result;
  } catch (e) {
    return [];
  }
}

// Reduce OpenAPI responses to { '200': { description, example, type }, ... }
function simplifyResponses(responses, spec) {
  const out = {};
  for (const [code, resp] of Object.entries(responses || {})) {
    const r = resp.$ref ? resolveRef(resp.$ref, spec) || resp : resp;
    const content = r.content || {};
    const json = content['application/json'];

    let example = null;
    let type = null;

    if (json) {
      if (json.example !== undefined) {
        example = json.example;
      } else if (json.examples) {
        const first = Object.values(json.examples)[0];
        example = (first && first.value) !== undefined ? first.value : null;
      } else if (json.schema) {
        const ex = schemaToExample(json.schema, spec);
        example = ex !== null && ex !== undefined ? ex : null;
        // Resolve type from schema
        let schema = json.schema;
        if (schema.$ref) schema = resolveRef(schema.$ref, spec) || schema;
        type = (schema && schema.type) || null;
      }
    }

    out[code] = {
      description: r.description || '',
      example,
      type,
    };
  }
  return out;
}

// Match a slug (e.g. "fetch-all-builds-of-an-account") to an OpenAPI endpoint by:
// 1. exact slug(summary) match within tag
// 2. fuzzy summary match
function findEndpointBySlug(endpoints, groupName, slug) {
  // First try matching by tag
  const tagged = endpoints.filter((e) =>
    e.tags.some((t) => slugify(t) === slugify(groupName))
  );
  const pool = tagged.length > 0 ? tagged : endpoints;

  // Exact slug match
  let hit = pool.find((e) => slugify(e.summary) === slug);
  if (hit) return hit;

  // Try slug containment
  hit = pool.find((e) => {
    const s = slugify(e.summary);
    return s.includes(slug) || slug.includes(s);
  });
  return hit || null;
}

function findApiRef(obj) {
  if (!obj || typeof obj !== 'object') return null;
  if (obj.tab === 'API Reference') return obj;
  if (Array.isArray(obj)) {
    for (const x of obj) {
      const r = findApiRef(x);
      if (r) return r;
    }
  }
  for (const k of Object.keys(obj)) {
    const r = findApiRef(obj[k]);
    if (r) return r;
  }
  return null;
}

// Main
const docs = JSON.parse(fs.readFileSync(path.join(TMP, 'stage-docs.json'), 'utf8'));
const apiRef = findApiRef(docs);
if (!apiRef) {
  console.error('Could not find API Reference tab in docs.json');
  process.exit(1);
}

const result = { apis: [] };
let totalEndpoints = 0;
let matchedEndpoints = 0;

for (const apiSection of apiRef.groups) {
  const apiName = apiSection.group;
  const yamlFile = API_TO_YAML[apiName];
  const spec = yamlFile ? loadYaml(yamlFile) : null;
  const allEndpoints = spec ? flattenSpec(spec) : [];
  const baseUrl = (spec && spec.servers && spec.servers[0] && spec.servers[0].url) || '';

  const apiEntry = {
    name: apiName,
    baseUrl,
    groups: [],
  };

  // pages can be an array of strings (slugs) OR an array of { group, pages } objects
  for (const item of apiSection.pages || []) {
    if (typeof item === 'string') {
      // No-heading group: a flat page directly under the API
      // Use the API name itself as the implicit group
      const slug = item.split('/').pop();
      const endpoint = findEndpointBySlug(allEndpoints, apiName, slug);
      // Look for or create a noHeading group at the apiEntry level
      let bucket = apiEntry.groups.find((g) => g.noHeading);
      if (!bucket) {
        bucket = { name: apiName, noHeading: true, endpoints: [] };
        apiEntry.groups.push(bucket);
      }
      totalEndpoints++;
      if (endpoint) {
        matchedEndpoints++;
        const { auth, pathParams, queryParams } = categorizeParams(endpoint.parameters);
        bucket.endpoints.push({
          name: endpoint.summary || slug,
          method: endpoint.method,
          path: endpoint.path,
          description: endpoint.description,
          ...((auth.length || endpoint.securityAuth?.length) && { auth: [...(endpoint.securityAuth || []), ...auth] }),
          ...(pathParams.length && { pathParams }),
          ...(queryParams.length && { queryParams }),
          ...(endpoint.requestBody && { requestBody: { schema: 'see OpenAPI spec' } }),
          responses: simplifyResponses(endpoint.responses, spec),
          responseSchema: extractResponseSchema(endpoint.responses, spec),
        });
      } else {
        bucket.endpoints.push({
          name: slug.replace(/-/g, ' '),
          method: 'GET',
          path: `/${slug}`,
        });
      }
    } else if (item && item.group) {
      const groupName = item.group;
      const groupEntry = { name: groupName, endpoints: [] };
      for (const pg of item.pages || []) {
        const slug = String(pg).split('/').pop();
        const endpoint = findEndpointBySlug(allEndpoints, groupName, slug);
        totalEndpoints++;
        if (endpoint) {
          matchedEndpoints++;
          const { auth, pathParams, queryParams } = categorizeParams(endpoint.parameters);
          groupEntry.endpoints.push({
            name: endpoint.summary || slug,
            method: endpoint.method,
            path: endpoint.path,
            description: endpoint.description,
            ...((auth.length || endpoint.securityAuth?.length) && { auth: [...(endpoint.securityAuth || []), ...auth] }),
            ...(pathParams.length && { pathParams }),
            ...(queryParams.length && { queryParams }),
            ...(endpoint.requestBody && { requestBody: { schema: 'see OpenAPI spec' } }),
            responses: simplifyResponses(endpoint.responses, spec),
            responseSchema: extractResponseSchema(endpoint.responses, spec),
          });
        } else {
          groupEntry.endpoints.push({
            name: slug.replace(/-/g, ' '),
            method: 'GET',
            path: `/${slug}`,
          });
        }
      }
      apiEntry.groups.push(groupEntry);
    }
  }

  result.apis.push(apiEntry);
}

fs.writeFileSync(OUT, JSON.stringify(result, null, 2));
console.log(`Wrote ${OUT}`);
console.log(`Matched ${matchedEndpoints} / ${totalEndpoints} endpoints to OpenAPI specs`);
console.log(`APIs: ${result.apis.length}`);
console.log(`Groups: ${result.apis.reduce((n, a) => n + a.groups.length, 0)}`);
