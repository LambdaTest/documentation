import React, { useState, useRef } from 'react';
import MethodBadge from './MethodBadge';
import styles from './EndpointDetail.module.css';

// ─── Small reusable badge components ────────────────────────────────────────

function TypeBadge({ type }) {
  if (!type) return null;
  return (
    <span
      className="px-1.5 py-0.5 text-xs font-mono bg-gray-100 text-gray-600 rounded border border-gray-200"
      style={{ display: 'inline-block' }}
    >
      {type}
    </span>
  );
}

function RequiredBadge() {
  return (
    <span
      className="px-2 py-0.5 text-xs bg-red-50 text-red-600 rounded-full border border-red-200"
      style={{ display: 'inline-block' }}
    >
      required
    </span>
  );
}

function DefaultBadge({ value }) {
  if (value === undefined || value === null) return null;
  return (
    <span
      className="px-1.5 py-0.5 text-xs font-mono bg-gray-100 text-gray-500 rounded border border-gray-200"
      style={{ display: 'inline-block' }}
    >
      default:{String(value)}
    </span>
  );
}

// Render text with `backtick` segments as inline code elements
function InlineText({ text }) {
  if (!text || !text.includes('`')) return <>{text}</>;
  const parts = text.split(/(`[^`]+`)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('`') && part.endsWith('`') ? (
          <code
            key={i}
            style={{
              background: '#f3f4f6',
              border: '1px solid #e5e7eb',
              borderRadius: '4px',
              padding: '1px 5px',
              fontSize: '12px',
              fontFamily: 'monospace',
              color: '#374151',
            }}
          >
            {part.slice(1, -1)}
          </code>
        ) : (
          part
        )
      )}
    </>
  );
}

// ─── Single parameter row ────────────────────────────────────────────────────

function EnumPills({ values }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '8px' }}>
      {values.map((v) => (
        <span
          key={v}
          style={{
            display: 'inline-block',
            padding: '2px 8px',
            fontSize: '12px',
            fontFamily: 'monospace',
            background: '#f3f4f6',
            border: '1px solid #e5e7eb',
            borderRadius: '4px',
            color: '#374151',
          }}
        >
          {String(v)}
        </span>
      ))}
    </div>
  );
}

function ParamRow({ param }) {
  return (
    <div className={styles.paramRow}>
      {/* Row 1: name + badges */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
        <span className="font-mono font-semibold" style={{ color: '#ED5F00', fontSize: '14px' }}>
          {param.name}
        </span>
        <TypeBadge type={param.type} />
        {param.in && param.in !== 'query' && param.in !== 'path' && (
          <TypeBadge type={param.in} />
        )}
        {param.required && <RequiredBadge />}
        {param.default !== undefined && param.default !== null && (
          <DefaultBadge value={param.default} />
        )}
      </div>
      {/* Row 2: description */}
      {param.description && (
        <p className="text-sm text-gray-600" style={{ margin: '8px 0 0', lineHeight: '1.6' }}>
          <InlineText text={param.description} />
        </p>
      )}
      {/* Row 3: enum values */}
      {param.enum && param.enum.length > 0 && (
        <EnumPills values={param.enum} />
      )}
    </div>
  );
}

// ─── Derive schema from example JSON ─────────────────────────────────────────
// Recursively turns an example response object into a schema array with dotted names.

function deriveSchemaFromExample(obj, prefix = '') {
  if (!obj || typeof obj !== 'object') return [];
  const source = Array.isArray(obj) ? (obj[0] || {}) : obj;
  if (typeof source !== 'object' || Array.isArray(source)) return [];

  return Object.entries(source).map(([key, value]) => {
    const name = prefix ? `${prefix}.${key}` : key;
    let type;
    let children = [];
    let exampleValue = undefined;
    if (Array.isArray(value)) {
      if (value.length > 0 && typeof value[0] === 'object') {
        type = 'object[]';
        children = deriveSchemaFromExample(value[0], name);
      } else if (value.length > 0) {
        type = `${typeof value[0]}[]`; // e.g. "string[]", "number[]"
        exampleValue = value; // store array for display
      } else {
        type = 'array';
      }
    } else if (value !== null && typeof value === 'object') {
      type = 'object';
      children = deriveSchemaFromExample(value, name);
    } else {
      type = value === null ? 'null' : typeof value;
      exampleValue = value;
    }
    return { name, type, children, hasChildren: children.length > 0, exampleValue };
  });
}

// ─── Collapsible "Show child attributes" ────────────────────────────────────

function ShowChildAttributes({ defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      style={{
        marginTop: '8px',
        border: '1px solid #e5e7eb',
        borderRadius: '6px',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          width: '100%',
          padding: '6px 10px',
          background: '#f9fafb',
          border: 'none',
          cursor: 'pointer',
          fontSize: '12px',
          color: '#374151',
          textAlign: 'left',
        }}
      >
        <span style={{ display: 'inline-block', transition: 'transform 0.2s', transform: open ? 'rotate(90deg)' : 'rotate(0deg)', fontSize: '10px' }}>
          ▶
        </span>
        {open ? 'Hide child attributes' : 'Show child attributes'}
      </button>
      {open && (
        <div style={{ padding: '0 10px', background: '#fff' }}>
          {children}
        </div>
      )}
    </div>
  );
}

// ─── Response schema property row (recursive) ────────────────────────────────

function ResponsePropRow({ prop, depth = 0 }) {
  // Split dotted name: show prefix in gray, last segment in orange bold
  const lastDot = prop.name.lastIndexOf('.');
  const namePrefix = lastDot >= 0 ? prop.name.slice(0, lastDot + 1) : '';
  const nameLast = lastDot >= 0 ? prop.name.slice(lastDot + 1) : prop.name;

  // Format example value for display — skip placeholder values (e.g. 123 used throughout the spec)
  const isArrayExample = Array.isArray(prop.exampleValue);
  const hasExample =
    prop.exampleValue !== undefined &&
    prop.exampleValue !== null &&
    prop.exampleValue !== 123 &&
    (!isArrayExample || prop.exampleValue.length > 0);
  const exampleDisplay = hasExample
    ? isArrayExample
      ? JSON.stringify(prop.exampleValue)
      : typeof prop.exampleValue === 'string'
        ? `"${prop.exampleValue}"`
        : String(prop.exampleValue)
    : null;

  return (
    <div className={styles.paramRow} style={depth > 0 ? { paddingLeft: `${depth * 12}px` } : {}}>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontFamily: 'monospace', fontSize: '14px' }}>
          {namePrefix && (
            <span style={{ color: '#9ca3af', fontWeight: 400 }}>{namePrefix}</span>
          )}
          <span style={{ color: '#ED5F00', fontWeight: 600 }}>{nameLast}</span>
        </span>
        <TypeBadge type={prop.type} />
        {prop.required && <RequiredBadge />}
      </div>
      {prop.description && (
        <p className="text-sm text-gray-600" style={{ margin: '8px 0 0', lineHeight: '1.6' }}>
          <InlineText text={prop.description} />
        </p>
      )}
      {exampleDisplay && (
        <div style={{ margin: '6px 0 0', fontSize: '13px', color: '#6b7280' }}>
          <span>Example:</span>
          {isArrayExample ? (
            <div style={{
              marginTop: '6px',
              padding: '10px 14px',
              background: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontFamily: 'monospace',
              fontSize: '13px',
              color: '#374151',
            }}>
              {exampleDisplay}
            </div>
          ) : (
            <>
              {' '}
              <code style={{ fontFamily: 'monospace', fontWeight: 600, color: '#374151', background: 'none', padding: 0 }}>
                {exampleDisplay}
              </code>
            </>
          )}
        </div>
      )}
      {prop.hasChildren && prop.children && prop.children.length > 0 && (
        <ShowChildAttributes defaultOpen={depth === 0}>
          {prop.children.map((child, i) => (
            <ResponsePropRow key={i} prop={child} depth={depth + 1} />
          ))}
        </ShowChildAttributes>
      )}
    </div>
  );
}

// ─── Response section ────────────────────────────────────────────────────────

function ResponseSection({ responses, responseSchema }) {
  // Build status code list from responses map; always include '200'
  const statusCodes = responses && Object.keys(responses).length > 0
    ? Object.keys(responses)
    : ['200'];

  const [selectedCode, setSelectedCode] = useState(statusCodes[0] || '200');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Sync selectedCode when the endpoint changes and it no longer exists
  React.useEffect(() => {
    if (!statusCodes.includes(selectedCode)) {
      setSelectedCode(statusCodes[0] || '200');
    }
  }, [responses]);

  const is2xx = selectedCode.startsWith('2');
  const btnStyle = is2xx
    ? { background: '#f0fdf4', color: '#15803d', border: '1px solid #bbf7d0' }
    : { background: 'transparent', color: '#ED5F00', border: '1.5px solid #ED5F00' };

  // Determine what content to show for the selected code
  const rawData = responses ? responses[selectedCode] : undefined;

  // Support both new format { description, example, type } and old format (plain value)
  let description = null;
  let exampleValue = undefined;
  let responseType = null;

  if (rawData !== null && rawData !== undefined) {
    if (typeof rawData === 'object' && !Array.isArray(rawData) && ('description' in rawData || 'example' in rawData)) {
      description = rawData.description || null;
      exampleValue = rawData.example;
      responseType = rawData.type || null;
    } else if (typeof rawData === 'string') {
      description = rawData;
    } else {
      // It's an example JSON value
      exampleValue = rawData;
    }
  }

  if (is2xx && !description) description = 'successful operation';

  // Derive enriched schema: use responseSchema as base, but populate children
  // from the 200 example JSON via deriveSchemaFromExample when children are missing.
  let enrichedSchema = null;
  if (is2xx) {
    // Get the 200 example data (support both wrapped { example } and plain value)
    const raw200 = responses ? responses['200'] : undefined;
    let example200 = undefined;
    if (raw200 !== null && raw200 !== undefined) {
      if (typeof raw200 === 'object' && !Array.isArray(raw200) && 'example' in raw200) {
        example200 = raw200.example;
      } else if (typeof raw200 === 'object' || Array.isArray(raw200)) {
        example200 = raw200;
      }
    }

    if (responseSchema && responseSchema.length > 0 && example200 && typeof example200 === 'object') {
      // Enrich each top-level schema entry with children derived from example
      enrichedSchema = responseSchema.map((prop) => {
        if (prop.hasChildren && (!prop.children || prop.children.length === 0)) {
          const exampleVal = Array.isArray(example200) ? (example200[0] || {})[prop.name] : example200[prop.name];
          if (exampleVal !== undefined && exampleVal !== null && typeof exampleVal === 'object') {
            const derivedChildren = deriveSchemaFromExample(exampleVal, prop.name);
            // Fix type: if stored as "array" but example shows array of objects, use "object[]"
            const updatedType =
              Array.isArray(exampleVal) && exampleVal.length > 0 && typeof exampleVal[0] === 'object'
                ? 'object[]'
                : prop.type;
            return { ...prop, type: updatedType, children: derivedChildren };
          }
        }
        return prop;
      });
    } else if (responseSchema && responseSchema.length > 0) {
      enrichedSchema = responseSchema;
    } else if (example200 && typeof example200 === 'object') {
      // No responseSchema at all — derive full schema from example
      enrichedSchema = deriveSchemaFromExample(example200);
    }
  }

  const hasSchema = is2xx && enrichedSchema && enrichedSchema.length > 0;
  const hasJsonContent = rawData !== null && rawData !== undefined;

  return (
    <section className={styles.section}>
      {/* Heading row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '16px',
          paddingBottom: '8px',
          borderBottom: '1px solid #e5e7eb',
          flexWrap: 'wrap',
        }}
      >
        <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 600, color: 'var(--ifm-color-emphasis-900, #111827)' }}>
          Response
        </h2>

        {/* Status code dropdown */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setDropdownOpen((v) => !v)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              fontSize: '13px',
              fontWeight: 600,
              borderRadius: '20px',
              cursor: 'pointer',
              ...btnStyle,
            }}
          >
            {selectedCode}
            <span style={{ fontSize: '9px' }}>▼</span>
          </button>
          {dropdownOpen && (
            <div
              style={{
                position: 'absolute',
                top: '110%',
                left: 0,
                background: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                zIndex: 20,
                minWidth: '100px',
                overflow: 'hidden',
              }}
            >
              {statusCodes.map((code) => (
                <button
                  key={code}
                  onClick={() => { setSelectedCode(code); setDropdownOpen(false); }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '8px 14px',
                    textAlign: 'left',
                    fontSize: '13px',
                    fontWeight: code === selectedCode ? 600 : 400,
                    color: code.startsWith('2') ? '#15803d' : '#374151',
                    background: code === selectedCode ? '#f9fafb' : 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {code}
                  {code === selectedCode && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* application/json label — show when there's JSON content */}
        {hasJsonContent && (
          <span style={{ fontSize: '12px', color: '#6b7280', fontFamily: 'monospace' }}>
            application/json
          </span>
        )}
      </div>

      {/* Description */}
      {description && (
        <p className="text-sm text-gray-600" style={{ marginBottom: '12px' }}>
          {description}
        </p>
      )}

      {/* Type info for non-object responses */}
      {responseType && responseType !== 'object' && responseType !== 'array' && (
        <p className="text-sm text-gray-600" style={{ marginBottom: '8px' }}>
          The response is of type{' '}
          <code
            style={{
              background: '#f3f4f6',
              border: '1px solid #e5e7eb',
              borderRadius: '4px',
              padding: '1px 6px',
              fontSize: '12px',
              fontFamily: 'monospace',
              color: '#374151',
            }}
          >
            {responseType}
          </code>{' '}
          .
        </p>
      )}

      {/* Example for non-2xx or simple-type responses */}
      {!is2xx && exampleValue !== undefined && exampleValue !== null && (
        <p className="text-sm text-gray-600" style={{ marginBottom: '16px' }}>
          Example:{' '}
          <code
            style={{
              background: '#f3f4f6',
              border: '1px solid #e5e7eb',
              borderRadius: '4px',
              padding: '2px 8px',
              fontSize: '12px',
              fontFamily: 'monospace',
              color: '#374151',
            }}
          >
            {typeof exampleValue === 'string' ? exampleValue : JSON.stringify(exampleValue)}
          </code>
        </p>
      )}

      {/* Schema properties for 2xx */}
      {hasSchema && (
        <div>
          {enrichedSchema.map((prop, i) => (
            <ResponsePropRow key={i} prop={prop} />
          ))}
        </div>
      )}

      {/* No schema fallback */}
      {is2xx && !hasSchema && !description && (
        <p className="text-sm text-gray-500">No schema available for this response.</p>
      )}
    </section>
  );
}

// ─── URL bar with base-URL dropdown + path-param pills ───────────────────────

function parsePathSegments(path) {
  // Split "/builds/{build_id}/sessions" into ["builds", "{build_id}", "sessions"]
  return path.replace(/^\//, '').split('/').filter(Boolean);
}

function getBaseUrlLabel(baseUrl) {
  try {
    const u = new URL(baseUrl);
    // Show "..host/path" e.g. "..lambdatest.com/automation/api/v1"
    const path = u.pathname.replace(/\/$/, '');
    return `..${u.hostname}${path}`;
  } catch {
    return baseUrl;
  }
}

const METHOD_COLORS = {
  get: '#16a34a',
  post: '#2563eb',
  put: '#d97706',
  patch: '#7c3aed',
  delete: '#dc2626',
};

function UrlBar({ endpoint, onTryIt }) {
  // Build server list: use endpoint.servers if present, else fall back to single baseUrl
  const servers = endpoint.servers && endpoint.servers.length > 0
    ? endpoint.servers
    : [{ url: endpoint.baseUrl, description: '' }];

  const [selectedBase, setSelectedBase] = useState(servers[0].url);
  const [copied, setCopied] = useState(false);

  function copyUrl() {
    const url = `${selectedBase}${endpoint.path}`;
    navigator.clipboard.writeText(url).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  // Keep selectedBase in sync when endpoint changes
  React.useEffect(() => {
    setSelectedBase(servers[0].url);
  }, [endpoint.path, endpoint.method]);

  const segments = parsePathSegments(endpoint.path || '');
  const btnColor = METHOD_COLORS[(endpoint.method || 'get').toLowerCase()] || '#ED5F00';

  // Build the effective endpoint for Try It (with selected base URL)
  const effectiveEndpoint = { ...endpoint, baseUrl: selectedBase };

  return (
    <div className={styles.urlBar}>
      <MethodBadge method={endpoint.method} />

      {/* URL area — horizontally scrollable */}
      <div className={styles.urlScrollArea}>
        <div className={styles.urlScrollInner}>
          {/* Base URL select */}
          <select
            value={selectedBase}
            onChange={(e) => setSelectedBase(e.target.value)}
            style={{
              fontFamily: 'monospace',
              fontSize: '13px',
              color: 'var(--ifm-color-emphasis-700)',
              background: 'transparent',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              padding: '2px 6px',
              cursor: 'pointer',
              outline: 'none',
              marginRight: '2px',
              flexShrink: 0,
            }}
          >
            {servers.map((s) => (
              <option key={s.url} value={s.url}>{s.url}</option>
            ))}
          </select>

          {/* Path segments */}
          {segments.map((seg, i) => {
            const isParam = seg.startsWith('{') && seg.endsWith('}');
            return (
              <React.Fragment key={i}>
                <span style={{ color: '#9ca3af', fontFamily: 'monospace', fontSize: '13px' }}>/</span>
                {isParam ? (
                  <span style={{ fontFamily: 'monospace', fontSize: '13px', color: '#15803d', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '6px', padding: '1px 8px' }}>
                    {seg}
                  </span>
                ) : (
                  <span style={{ fontFamily: 'monospace', fontSize: '13px', color: 'var(--ifm-color-emphasis-700)' }}>
                    {seg}
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Copy URL button */}
      <button
        onClick={copyUrl}
        title="Copy URL"
        style={{
          flexShrink: 0,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '4px',
          color: copied ? '#16a34a' : '#9ca3af',
          display: 'flex',
          alignItems: 'center',
          transition: 'color 0.15s',
        }}
        onMouseEnter={(e) => { if (!copied) e.currentTarget.style.color = '#374151'; }}
        onMouseLeave={(e) => { if (!copied) e.currentTarget.style.color = '#9ca3af'; }}
      >
        {copied ? (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        )}
      </button>

      <button
        className={styles.tryItBtn}
        style={{ background: btnColor }}
        onClick={() => onTryIt?.(effectiveEndpoint)}
      >
        Try it <span className={styles.playIcon}>&#9654;</span>
      </button>
    </div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────

export default function EndpointDetail({ endpoint, apiName, onTryIt, mobileCodeSlot }) {
  if (!endpoint) {
    return (
      <div className={styles.empty}>
        <p>Select an endpoint from the sidebar to view its details.</p>
      </div>
    );
  }

  return (
    <div className={styles.detail}>
      {/* Breadcrumb / group label */}
      {endpoint.group && (
        <div
          className="text-sm font-semibold"
          style={{ color: '#ED5F00', marginBottom: '8px' }}
        >
          {endpoint.group}
        </div>
      )}

      {/* Title */}
      <h1
        id="page-title"
        className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-200 tracking-tight mt-0 mb-4"
        style={{ fontFamily: "'SF Pro', -apple-system, BlinkMacSystemFont, sans-serif" }}
      >
        {endpoint.name}
      </h1>

      {/* Description */}
      {endpoint.description && (
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          {endpoint.description}
        </p>
      )}

      {/* URL bar */}
      <UrlBar endpoint={endpoint} onTryIt={onTryIt} />

      {/* Mobile-only code examples slot — rendered here (after URL bar, before params)
          so the right panel content appears in the correct position on narrow screens. */}
      {mobileCodeSlot && (
        <div className={styles.mobileCodeSlot}>
          {mobileCodeSlot}
        </div>
      )}

      {/* Authorizations */}
      {endpoint.auth && endpoint.auth.length > 0 && (
        <section className={styles.section}>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b border-gray-200 dark:border-white/10">
            Authorizations
          </h2>
          {endpoint.auth.map((param, i) => (
            <ParamRow key={i} param={param} />
          ))}
        </section>
      )}

      {/* Path Parameters */}
      {endpoint.pathParams && endpoint.pathParams.length > 0 && (
        <section className={styles.section}>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b border-gray-200 dark:border-white/10">
            Path Parameters
          </h2>
          {endpoint.pathParams.map((param, i) => (
            <ParamRow key={i} param={param} />
          ))}
        </section>
      )}

      {/* Query Parameters */}
      {endpoint.queryParams && endpoint.queryParams.length > 0 && (
        <section className={styles.section}>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b border-gray-200 dark:border-white/10">
            Query Parameters
          </h2>
          {endpoint.queryParams.map((param, i) => (
            <ParamRow key={i} param={param} />
          ))}
        </section>
      )}

      {/* Request Body */}
      {endpoint.requestBody && (
        <section className={styles.section}>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b border-gray-200 dark:border-white/10">
            Request Body
          </h2>
          <pre className={styles.codeBlock}>
            <code>{JSON.stringify(endpoint.requestBody, null, 2)}</code>
          </pre>
        </section>
      )}

      {/* Response section */}
      <ResponseSection responses={endpoint.responses} responseSchema={endpoint.responseSchema} />
    </div>
  );
}
