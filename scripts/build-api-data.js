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

// Extract lowercase word set from a string
function toWordSet(str) {
  return new Set(
    String(str).toLowerCase()
      .replace(/[^a-z0-9]+/g, ' ')
      .trim()
      .split(/\s+/)
      .filter(Boolean)
  );
}

// Extract words from a URL path, splitting camelCase segments
function pathWordSet(pth) {
  const words = new Set();
  for (const seg of pth.split('/').filter(Boolean)) {
    const cleaned = seg.replace(/[{}]/g, '');
    const spaced = cleaned.replace(/([a-z])([A-Z])/g, '$1 $2');
    for (const w of spaced.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean)) {
      words.add(w);
    }
  }
  return words;
}

// How many words in `query` appear in `candidate`
// Exact match = 1.0 credit; prefix match = 0.7 credit (exact beats prefix in ties)
// Prefix rules:
//   cw.startsWith(w): candidate is a longer form of query word — always allowed (e.g. 'log'→'logs')
//   w.startsWith(cw): query is longer than candidate — only allowed when candidate is ≥60% of query
//                     length (prevents 'appium'.startsWith('app') false match)
function coverage(query, candidate) {
  if (query.size === 0) return 0;
  let matches = 0;
  for (const w of query) {
    if (candidate.has(w)) { matches += 1.0; continue; }
    if (w.length >= 4) {
      for (const cw of candidate) {
        if (cw.length >= 3 && cw.startsWith(w)) { matches += 0.7; break; }
        if (cw.length >= 3 && w.startsWith(cw) && cw.length / w.length >= 0.6) { matches += 0.7; break; }
      }
    }
  }
  return matches / query.size;
}

// Jaccard similarity between two word sets (strict — no prefix)
function jaccard(a, b) {
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  const unionSize = new Set([...a, ...b]).size;
  return unionSize === 0 ? 0 : inter / unionSize;
}

// Infer likely HTTP methods from slug words
const METHOD_HINTS = {
  upload: ['POST'], create: ['POST'], add: ['POST'], execute: ['POST'], post: ['POST'],
  get: ['GET'], fetch: ['GET'], list: ['GET'], retrieve: ['GET'],
  update: ['PUT', 'PATCH'], edit: ['PUT', 'PATCH'], patch: ['PATCH'],
  delete: ['DELETE'], remove: ['DELETE'],
  stop: ['PUT', 'POST'],
};
function inferMethods(words) {
  const out = new Set();
  for (const w of words) {
    const hints = METHOD_HINTS[w];
    if (hints) hints.forEach((m) => out.add(m));
  }
  return out;
}

// Combined score: max of coverage and Jaccard against summary + path words,
// with a +0.15 boost when the endpoint's HTTP method matches slug-implied method
function scoreEndpoint(e, slugWordSet) {
  const combined = new Set([...toWordSet(e.summary), ...pathWordSet(e.path)]);
  let score = Math.max(coverage(slugWordSet, combined), jaccard(slugWordSet, combined));
  const implied = inferMethods(slugWordSet);
  if (implied.size > 0 && implied.has(e.method)) score = Math.min(1.0, score + 0.15);
  return score;
}

// Return all scored candidates for a slug, sorted best-first.
// Used by rankCandidates() to build a global match table.
function rankCandidates(endpoints, groupName, slug) {
  const tagged = endpoints.filter((e) =>
    e.tags.some((t) => slugify(t) === slugify(groupName))
  );
  const pool = tagged.length > 0 ? tagged : endpoints;
  const slugWords = toWordSet(slug.replace(/-/g, ' '));

  const candidates = [];

  // Exact slug match on summary (score 2.0 — always wins)
  const exact = pool.find((e) => slugify(e.summary) === slug);
  if (exact) return [{ e: exact, score: 2.0 }];

  // Summary slug containment (score 1.5)
  const contained = pool.find((e) => {
    const s = slugify(e.summary);
    return s.includes(slug) || slug.includes(s);
  });
  if (contained) return [{ e: contained, score: 1.5 }];

  // Entire spec has only 1 endpoint (e.g. single-endpoint APIs)
  if (endpoints.length === 1) return [{ e: endpoints[0], score: 1.0 }];

  // Score-based: return all candidates ≥ 0.50 threshold
  for (const e of pool) {
    const score = scoreEndpoint(e, slugWords);
    if (score >= 0.50) candidates.push({ e, score });
  }
  candidates.sort((a, b) => b.score - a.score);
  return candidates;
}

// Match slugs to endpoints for a group, resolving collisions greedily:
// build a ranked candidate list per slug, then assign best-score first,
// preventing two slugs from claiming the same endpoint.
function matchSlugsToEndpoints(allEndpoints, groupName, slugs) {
  // Build candidates for each slug (index matches slugs array)
  const ranked = slugs.map((slug) => rankCandidates(allEndpoints, groupName, slug));

  // Greedy assignment: pick the globally highest (slug, candidate) pair first
  const assigned = new Array(slugs.length).fill(null); // endpoint or null
  const usedKey = new Set(); // "method:path" keys already claimed

  // Flatten all first-choices into a priority queue
  let changed = true;
  while (changed) {
    changed = false;
    // Find the unassigned slug with the highest-scored available candidate
    let bestScore = -1, bestSlugIdx = -1, bestCand = null;
    for (let i = 0; i < slugs.length; i++) {
      if (assigned[i] !== null) continue; // already assigned (null = stub is also "assigned")
      // Find the first available candidate for this slug
      for (const cand of ranked[i]) {
        const key = `${cand.e.method}:${cand.e.path}`;
        if (!usedKey.has(key)) {
          if (cand.score > bestScore) {
            bestScore = cand.score;
            bestSlugIdx = i;
            bestCand = cand;
          }
          break; // only consider top available candidate per slug
        }
      }
    }
    if (bestSlugIdx === -1) break; // no more assignable slugs

    const key = `${bestCand.e.method}:${bestCand.e.path}`;
    usedKey.add(key);
    assigned[bestSlugIdx] = bestCand.e;
    changed = true;
  }

  return assigned; // null entries are stubs
}

// Legacy wrapper used for flat (no-heading) pages — still matches single slug
function findEndpointBySlug(endpoints, groupName, slug) {
  const cands = rankCandidates(endpoints, groupName, slug);
  return cands.length > 0 ? cands[0].e : null;
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
      const slugs = (item.pages || []).map((pg) => String(pg).split('/').pop());
      // Use collision-aware matching for the whole group at once
      const matched = matchSlugsToEndpoints(allEndpoints, groupName, slugs);
      slugs.forEach((slug, i) => {
        const endpoint = matched[i];
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
      });
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
