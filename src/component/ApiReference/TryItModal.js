import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { Highlight, themes } from 'prism-react-renderer';
import MethodBadge from './MethodBadge';
import InlineText from './InlineText';
import styles from './TryItModal.module.css';
import { LANGUAGES, generateCodeExample, LangDropdownPortal, LangSelectorButton, coerceBodyValue, detectFlattenedArrayBody } from './langUtils';

const githubWithGreenKeys = {
  ...themes.github,
  styles: [
    ...themes.github.styles,
    { types: ['property'], style: { color: '#1a7f64' } },
  ],
};

const JETBRAINS_MONO = "'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'SF Mono', Menlo, monospace";

// btoa only handles Latin1 — encode to UTF-8 bytes first to support any character
function safeBase64(str) {
  try {
    return btoa(unescape(encodeURIComponent(str)));
  } catch {
    return btoa(str.replace(/[^\x00-\xFF]/g, '?'));
  }
}

function useDarkMode() {
  const [dark, setDark] = useState(() =>
    typeof document !== 'undefined' && document.documentElement.getAttribute('data-theme') === 'dark'
  );
  useEffect(() => {
    const obs = new MutationObserver(() => {
      setDark(document.documentElement.getAttribute('data-theme') === 'dark');
    });
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => obs.disconnect();
  }, []);
  return dark;
}

function CodeHighlight({ code, language }) {
  const dark = useDarkMode();
  return (
    <Highlight code={code} language={language} theme={dark ? themes.vsDark : githubWithGreenKeys}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            color: style.color,
            background: 'transparent',
            fontFamily: JETBRAINS_MONO,
            fontSize: '12px',
            margin: 0,
            padding: '16px 20px',
            overflowX: 'auto',
            lineHeight: '1.8',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-all',
          }}
        >
          {tokens.map((line, i) => {
            const { className: lineCls, ...lineRest } = getLineProps({ line });
            return (
              <div key={i} {...lineRest} className={lineCls || ''} style={{ display: 'block' }}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
}

function buildCurl(endpoint, username, password, params, baseUrl) {
  let url = `${(baseUrl || endpoint.baseUrl || '').replace(/\/+$/, '')}${endpoint.path}`;
  if (endpoint.pathParams) {
    endpoint.pathParams.forEach((p) => {
      url = url.replace(`{${p.name}}`, params[p.name] || `{${p.name}}`);
    });
  }
  const queryParts = (endpoint.queryParams || [])
    .filter((p) => params[p.name])
    .map((p) => `${encodeURIComponent(p.name)}=${encodeURIComponent(params[p.name])}`);
  if (queryParts.length) url += `?${queryParts.join('&')}`;

  const hasAuth = endpoint.auth && endpoint.auth.length > 0;
  const authHeader = username && password
    ? `Basic ${safeBase64(`${username}:${password}`)}`
    : 'Basic <encoded-value>';
  const authLine = hasAuth ? ` \\\n  --header 'Authorization: ${authHeader}'` : '';

  const bodyProps = endpoint.requestBody?.properties || [];
  const rawExample = endpoint.requestBody?.example;
  const contentType = endpoint.requestBody?.contentType || 'application/json';
  const isMultipart = contentType === 'multipart/form-data';
  const flattenedBody = !isMultipart ? detectFlattenedArrayBody(endpoint) : null;
  const userFilledBody = flattenedBody
    ? flattenedBody.innerFields.some((f) => params[`__body__${f.name}`])
    : bodyProps.some((p) => params[`__body__${p.name}`]);
  const useRawExample = !isMultipart && !flattenedBody && !userFilledBody
    && rawExample != null && typeof rawExample === 'object';
  let bodyLine = '';
  if (bodyProps.length > 0 || useRawExample || flattenedBody) {
    if (isMultipart) {
      const bodyEntries = bodyProps.map((p) => [p.name, coerceBodyValue(params[`__body__${p.name}`] || '', p.type)]);
      bodyLine = bodyEntries
        .filter(([, v]) => v)
        .map(([k, v]) => ` \\\n  --form '${k}=${v}'`)
        .join('');
    } else if (flattenedBody) {
      // Assemble inner object from per-field inputs (with example fallback),
      // wrap under the spec's array key.
      const inner = {};
      for (const f of flattenedBody.innerFields) {
        const raw = params[`__body__${f.name}`];
        const fromEx = flattenedBody.innerExample[f.name];
        const val = (raw !== undefined && raw !== '') ? raw : fromEx;
        if (val !== undefined && val !== '') inner[f.name] = val;
      }
      const bodyJson = { [flattenedBody.wrapperKey]: [inner] };
      bodyLine = ` \\\n  --header 'Content-Type: application/json' \\\n  --data '${JSON.stringify(bodyJson, null, 2)}'`;
    } else {
      let bodyJson;
      if (useRawExample) {
        bodyJson = rawExample;
      } else {
        // Untyped fields fall back to the spec example so editing one field
        // doesn't blank out the others.
        const fromExample = (p) => (rawExample && typeof rawExample === 'object') ? rawExample[p.name] : undefined;
        const bodyEntries = bodyProps.map((p) => {
          const raw = params[`__body__${p.name}`] || '';
          if (!raw) {
            const ex = fromExample(p);
            return [p.name, ex !== undefined ? ex : ''];
          }
          return [p.name, coerceBodyValue(raw, p.type)];
        });
        const bodyObj = Object.fromEntries(bodyEntries.filter(([, v]) => v !== '' && v !== undefined));
        if (Object.keys(bodyObj).length) bodyJson = bodyObj;
      }
      if (bodyJson !== undefined) {
        bodyLine = ` \\\n  --header 'Content-Type: application/json' \\\n  --data '${JSON.stringify(bodyJson, null, 2)}'`;
      }
    }
  }

  return `curl --request ${endpoint.method} \\\n  --url ${url}${authLine}${bodyLine}`;
}

function CollapsibleSection({ title, defaultOpen = true, description, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={styles.collapsibleSection}>
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          display: 'flex', alignItems: 'center', gap: '8px', width: '100%',
          background: 'none', border: 'none', cursor: 'pointer', padding: '16px 20px',
          fontSize: '15px', fontWeight: 700, color: 'var(--ifm-color-emphasis-900)', textAlign: 'left',
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
          style={{ transition: 'transform 0.15s', transform: open ? 'rotate(0deg)' : 'rotate(-90deg)', flexShrink: 0 }}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
        {title}
      </button>
      {open && (
        <>
          {description && (
            <div style={{ padding: '0 20px 16px', fontSize: '13.5px', color: 'var(--ifm-color-emphasis-700)', lineHeight: '1.7', borderBottom: '1px solid var(--ifm-color-emphasis-200)' }}>
              {description}
            </div>
          )}
          <div>{children}</div>
        </>
      )}
    </div>
  );
}

function InlineCode({ children }) {
  return (
    <code style={{
      fontFamily: 'monospace', fontSize: '12.5px', background: 'var(--ifm-color-emphasis-100)',
      border: '1px solid var(--ifm-color-emphasis-200)', borderRadius: '4px', padding: '1px 6px', color: 'var(--ifm-color-emphasis-900)',
    }}>
      {children}
    </code>
  );
}

function ParamField({ label, sublabel, type, required, description, value, onChange, placeholder, inputType = 'text', enumValues }) {
  const inputStyle = {
    width: '100%', boxSizing: 'border-box', padding: '10px 14px',
    border: '1px solid var(--ifm-color-emphasis-200)', borderRadius: '8px', fontSize: '13px',
    fontFamily: 'monospace', color: 'var(--ifm-color-emphasis-800)', background: 'var(--ifm-color-emphasis-100)', outline: 'none',
  };
  const focusHandlers = {
    onFocus: (e) => { e.target.style.borderColor = '#ED5F00'; e.target.style.background = 'var(--ifm-background-color)'; },
    onBlur: (e) => { e.target.style.borderColor = 'var(--ifm-color-emphasis-200)'; e.target.style.background = 'var(--ifm-color-emphasis-100)'; },
  };

  const normalizedType = (type || '').toLowerCase();
  const isBoolean = normalizedType === 'boolean';
  const isInteger = normalizedType === 'integer' || normalizedType === 'number';

  function renderInput() {
    if (enumValues && enumValues.length > 0) {
      return (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{ ...inputStyle, cursor: 'pointer', appearance: 'auto' }}
          {...focusHandlers}
        >
          <option value="">-- select --</option>
          {enumValues.map((v) => (
            <option key={v} value={v}>{String(v)}</option>
          ))}
        </select>
      );
    }
    if (isBoolean) {
      return (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{ ...inputStyle, cursor: 'pointer', appearance: 'auto' }}
          {...focusHandlers}
        >
          <option value="">select {sublabel || label}</option>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
      );
    }
    if (isInteger) {
      return (
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder || `enter ${sublabel || label}`}
          style={inputStyle}
          {...focusHandlers}
        />
      );
    }
    return (
      <input
        type={inputType}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || `enter ${sublabel || label}`}
        style={inputStyle}
        {...focusHandlers}
      />
    );
  }

  return (
    <div className={styles.paramField}>
      {/* Left: label + type + required + description */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px' }}>
          <span style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '13.5px', color: 'var(--ifm-color-emphasis-900)' }}>
            {label}
            {sublabel && <span style={{ fontWeight: 700 }}>.{sublabel}</span>}
          </span>
          {type && (
            <span style={{ fontSize: '12px', color: 'var(--ifm-color-emphasis-500)', fontFamily: 'monospace' }}>
              {type}
            </span>
          )}
        </div>
        {required && (
          <span style={{
            display: 'inline-block', fontSize: '12px', background: 'rgba(229,57,53,0.1)',
            borderRadius: '20px', padding: '2px 10px', color: '#c4490d', fontWeight: 500,
            marginBottom: description ? '6px' : 0,
          }}>
            required
          </span>
        )}
        {description && (
          <p style={{ margin: required ? '6px 0 0' : '0', fontSize: '12.5px', color: 'var(--ifm-color-emphasis-600)', lineHeight: '1.6' }}>
            <InlineText text={description} />
          </p>
        )}
      </div>
      {/* Right: input based on type */}
      <div>{renderInput()}</div>
    </div>
  );
}

export default function TryItModal({ endpoint, onClose, selectedLang: selectedLangProp, onLangChange }) {
  // Determine if this is a V2 endpoint (path contains /v2/ or group name contains V2)
  const isV2Endpoint = (endpoint.path && endpoint.path.toLowerCase().includes('/v2/')) ||
    (endpoint.group && endpoint.group.toLowerCase().includes('v2'));

  // Memoize effective servers to prevent stale closures in useEffect
  const effectiveServers = useMemo(() => {
    const allServers = endpoint.servers && endpoint.servers.length > 0
      ? endpoint.servers
      : [{ url: endpoint.baseUrl || '', description: '' }];

    const filteredServers = allServers.filter((s) => {
      if (!s.url) return false;
      const urlHasV2 = s.url.toLowerCase().includes('/v2');
      return isV2Endpoint ? urlHasV2 : !urlHasV2;
    });

    return filteredServers.length > 0 ? filteredServers : allServers.slice(0, 1);
  }, [endpoint.servers, endpoint.baseUrl, isV2Endpoint]);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // Compute once at render time — both the params initializer and the body
  // section need it, and `endpoint` is stable for the modal's lifetime.
  const flattenedBody = detectFlattenedArrayBody(endpoint);
  // Prefill body fields with the spec's example so the form is usable on first
  // open. Flattened-array bodies expose inner primitive fields (each prefilled
  // with the inner example value).
  const [params, setParams] = useState(() => {
    const initial = {};
    if (flattenedBody) {
      for (const f of flattenedBody.innerFields) {
        const val = flattenedBody.innerExample[f.name];
        initial[`__body__${f.name}`] = val == null ? '' : String(val);
      }
    }
    return initial;
  });
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeResTab, setActiveResTab] = useState(null);
  const [curlCopied, setCurlCopied] = useState(false);
  const [respCopied, setRespCopied] = useState(false);
  const [liveRespCopied, setLiveRespCopied] = useState(false);
  const [localLang, setLocalLang] = useState('cURL');
  const [selectedServer, setSelectedServer] = useState((effectiveServers[0]?.url || endpoint.baseUrl || '').replace(/\/+$/, ''));
  const selectedLang = selectedLangProp !== undefined ? selectedLangProp : localLang;
  const setSelectedLang = onLangChange || setLocalLang;
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langBtnRef = useRef(null);
  const closeLangDropdown = useCallback(() => setLangDropdownOpen(false), []);

  function copyText(text, setFn) {
    try {
      navigator.clipboard.writeText(text).then(() => {
        setFn(true); setTimeout(() => setFn(false), 1500);
      }).catch(() => {
        const ta = document.createElement('textarea');
        ta.value = text; document.body.appendChild(ta); ta.select();
        document.execCommand('copy'); document.body.removeChild(ta);
        setFn(true); setTimeout(() => setFn(false), 1500);
      });
    } catch {}
  }

  useEffect(() => {
    function handleEscape(e) { if (e.key === 'Escape') onClose(); }
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Update selected server when endpoint changes
  useEffect(() => {
    setSelectedServer((effectiveServers[0]?.url || endpoint.baseUrl || '').replace(/\/+$/, ''));
  }, [effectiveServers, endpoint.baseUrl]);


  function updateParam(name, value) {
    setParams((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSend() {
    setLoading(true);
    setResponse(null);

    let url = `${selectedServer.replace(/\/+$/, '')}${endpoint.path}`;
    if (endpoint.pathParams) {
      endpoint.pathParams.forEach((p) => {
        url = url.replace(`{${p.name}}`, params[p.name] || '');
      });
    }
    const queryParts = (endpoint.queryParams || [])
      .filter((p) => params[p.name])
      .map((p) => `${encodeURIComponent(p.name)}=${encodeURIComponent(params[p.name])}`);
    if (queryParts.length) url += `?${queryParts.join('&')}`;

    const authHeader = username && password
      ? `Basic ${safeBase64(`${username}:${password}`)}`
      : '';

    const bodyProps = endpoint.requestBody?.properties || [];
    const rawExample = endpoint.requestBody?.example;
    const contentType = endpoint.requestBody?.contentType || 'application/json';
    const isMultipart = contentType === 'multipart/form-data';
    const flattenedBodyHS = !isMultipart ? detectFlattenedArrayBody(endpoint) : null;
    const userFilledBody = flattenedBodyHS
      ? flattenedBodyHS.innerFields.some((f) => params[`__body__${f.name}`])
      : bodyProps.some((p) => params[`__body__${p.name}`]);
    const useRawExample = !isMultipart && !flattenedBodyHS && !userFilledBody
      && rawExample != null && typeof rawExample === 'object';
    let fetchBody;
    let fetchHeaders = { ...(authHeader && { Authorization: authHeader }) };
    if (bodyProps.length > 0 || useRawExample || flattenedBodyHS) {
      if (isMultipart) {
        const fd = new FormData();
        bodyProps.forEach((p) => { if (params[`__body__${p.name}`]) fd.append(p.name, params[`__body__${p.name}`]); });
        fetchBody = fd;
        // Don't set Content-Type for FormData — browser sets it with boundary
      } else if (flattenedBodyHS) {
        const inner = {};
        for (const f of flattenedBodyHS.innerFields) {
          const raw = params[`__body__${f.name}`];
          const fromEx = flattenedBodyHS.innerExample[f.name];
          const val = (raw !== undefined && raw !== '') ? raw : fromEx;
          if (val !== undefined && val !== '') inner[f.name] = val;
        }
        fetchBody = JSON.stringify({ [flattenedBodyHS.wrapperKey]: [inner] });
        fetchHeaders['Content-Type'] = 'application/json';
      } else if (useRawExample) {
        fetchBody = JSON.stringify(rawExample);
        fetchHeaders['Content-Type'] = 'application/json';
      } else {
        // Untyped fields fall back to the spec example so partial edits don't
        // strip the other example values.
        const fromExample = (p) => (rawExample && typeof rawExample === 'object') ? rawExample[p.name] : undefined;
        const bodyObj = Object.fromEntries(
          bodyProps.map((p) => {
            const raw = params[`__body__${p.name}`] || '';
            if (!raw) {
              const ex = fromExample(p);
              return [p.name, ex !== undefined ? ex : ''];
            }
            return [p.name, coerceBodyValue(raw, p.type)];
          }).filter(([, v]) => v !== '' && v !== undefined)
        );
        if (Object.keys(bodyObj).length) {
          fetchBody = JSON.stringify(bodyObj);
          fetchHeaders['Content-Type'] = 'application/json';
        }
      }
    }

    try {
      const res = await fetch(url, {
        method: endpoint.method.toUpperCase(),
        headers: fetchHeaders,
        ...(fetchBody && { body: fetchBody }),
      });
      const text = await res.text();
      let body;
      try { body = JSON.parse(text); } catch { body = text; }
      setResponse({ status: res.status, body });
      setActiveResTab(String(res.status));
    } catch (err) {
      setResponse({ status: 'Error', body: err.message });
    } finally {
      setLoading(false);
    }
  }

  const curlCode = buildCurl(endpoint, username, password, params, selectedServer);
  const langDef = LANGUAGES.find((l) => l.label === selectedLang) || LANGUAGES[0];
  const codeToShow = selectedLang === 'cURL'
    ? curlCode
    : generateCodeExample(endpoint, selectedLang, { username, password, params });
  const hasAuth = endpoint.auth && endpoint.auth.length > 0;
  const hasQuery = endpoint.queryParams && endpoint.queryParams.length > 0;
  const hasPath = endpoint.pathParams && endpoint.pathParams.length > 0;
  const bodyProps = endpoint.requestBody?.properties || [];
  const hasBody = bodyProps.length > 0;

  // Static spec responses — always shown
  const specResponses = endpoint.responses || {};
  const specCodes = Object.keys(specResponses).filter(
    (code) => specResponses[code].example != null
  );
  const defaultSpecTab = specCodes.find((c) => c.startsWith('2')) || specCodes[0] || null;
  const [activeSpecTab, setActiveSpecTab] = useState(defaultSpecTab);

  function getSpecExample(code) {
    const r = specResponses[code];
    if (!r) return '';
    if (r.example !== undefined && r.example !== null) {
      return typeof r.example === 'string' ? r.example : JSON.stringify(r.example, null, 2);
    }
    return r.description || '';
  }

  const modalContent = (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

        {/* ── Top bar ── */}
        <div className={styles.topBar}>
          <div className={styles.topBarLeft}>
            <MethodBadge method={endpoint.method} />
            <span className={styles.topBarTitle}>{endpoint.name}</span>
          </div>
          <div className={styles.topBarUrl}>
            <span className={styles.topBarMethod}>{endpoint.method}</span>
            {effectiveServers.length > 1 ? (
              <select
                value={selectedServer}
                onChange={(e) => setSelectedServer(e.target.value)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  fontSize: '13px',
                  fontFamily: 'monospace',
                  color: 'var(--ifm-color-emphasis-800)',
                  cursor: 'pointer',
                  outline: 'none',
                  padding: 0,
                  maxWidth: '100%',
                }}
              >
                {effectiveServers.map((s) => {
                  const cleanUrl = s.url.replace(/\/+$/, '');
                  return <option key={cleanUrl} value={cleanUrl}>{cleanUrl}</option>;
                })}
              </select>
            ) : (
              <span style={{ fontSize: '13px', fontFamily: 'monospace', color: 'var(--ifm-color-emphasis-800)' }}>{selectedServer}</span>
            )}
            <span className={styles.topBarPath}>{endpoint.path}</span>
          </div>
          <button
            className={styles.sendBtn}
            onClick={handleSend}
            disabled={loading}
          >
            {loading ? 'Sending…' : 'Send'}
            {!loading && (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            )}
          </button>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* ── Body: two columns ── */}
        <div className={styles.body}>

          {/* Left: form */}
          <div className={styles.leftCol}>
            {/* Description */}
            {endpoint.description && (
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontWeight: 700, fontSize: '18px', margin: '0 0 8px', color: 'var(--ifm-color-emphasis-900)' }}>
                  {endpoint.name}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--ifm-color-emphasis-600)', lineHeight: '1.6', margin: 0 }}>
                  <InlineText text={endpoint.description} />
                </p>
              </div>
            )}

            {/* Authorization */}
            {hasAuth && (
              <CollapsibleSection
                title="Authorization"
                description={
                  <span>
                    Basic authentication header of the form <InlineCode>Basic &lt;encoded-value&gt;</InlineCode>, where{' '}
                    <InlineCode>&lt;encoded-value&gt;</InlineCode> is the base64-encoded string{' '}
                    <InlineCode>username:password</InlineCode>.
                  </span>
                }
              >
                <ParamField
                  label="Authorization" sublabel="username"
                  type="string" required
                  value={username} onChange={setUsername}
                  placeholder="enter username"
                />
                <ParamField
                  label="Authorization" sublabel="password"
                  type="string" required
                  value={password} onChange={setPassword}
                  placeholder="enter password"
                  inputType="password"
                />
              </CollapsibleSection>
            )}

            {/* Path Parameters */}
            {hasPath && (
              <CollapsibleSection title="Path">
                {endpoint.pathParams.map((p) => (
                  <ParamField
                    key={p.name} label={p.name}
                    type={p.type} required={p.required}
                    description={p.description}
                    enumValues={p.enum}
                    value={params[p.name] || ''} onChange={(v) => updateParam(p.name, v)}
                  />
                ))}
              </CollapsibleSection>
            )}

            {/* Query Parameters */}
            {hasQuery && (
              <CollapsibleSection title="Query">
                {endpoint.queryParams.map((p) => (
                  <ParamField
                    key={p.name} label={p.name}
                    type={p.type} required={p.required}
                    description={p.description}
                    enumValues={p.enum}
                    value={params[p.name] || ''} onChange={(v) => updateParam(p.name, v)}
                  />
                ))}
              </CollapsibleSection>
            )}

            {/* Body */}
            {hasBody && (
              <CollapsibleSection
                title="Body"
                description={endpoint.requestBody.description || null}
              >
                {flattenedBody ? (
                  flattenedBody.innerFields.map((f) => (
                    <ParamField
                      key={f.name}
                      label={f.name}
                      type={f.type}
                      required={f.required}
                      description={f.description}
                      value={params[`__body__${f.name}`] || ''}
                      onChange={(v) => updateParam(`__body__${f.name}`, v)}
                    />
                  ))
                ) : (
                  bodyProps.map((p) => (
                    <ParamField
                      key={p.name} label={p.name}
                      type={p.type} required={p.required}
                      description={p.description}
                      enumValues={p.enum}
                      value={params[`__body__${p.name}`] || ''} onChange={(v) => updateParam(`__body__${p.name}`, v)}
                      placeholder={(p.type || '').toLowerCase().includes('array') ? 'e.g. ["val1", "val2"] or val1, val2' : undefined}
                    />
                  ))
                )}
              </CollapsibleSection>
            )}
          </div>

          {/* Right: code + response */}
          <div className={styles.rightCol}>
            {/* Live response — shown at top after Send */}
            {response && (
              <div className={styles.responsePanel}>
                <div className={styles.responseTabs}>
                  <button
                    style={{
                      padding: '8px 12px', border: 'none', background: 'none', cursor: 'default',
                      fontSize: '13px', fontWeight: 600,
                      color: String(response.status).startsWith('2') ? 'var(--ifm-color-emphasis-800)' : '#c4490d',
                      borderBottom: `2px solid ${String(response.status).startsWith('2') ? 'var(--ifm-color-emphasis-800)' : '#c4490d'}`,
                    }}
                  >
                    {response.status}
                  </button>
                  <button
                    onClick={() => copyText(typeof response.body === 'string' ? response.body : JSON.stringify(response.body, null, 2), setLiveRespCopied)}
                    style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', color: liveRespCopied ? '#16a34a' : 'var(--ifm-color-emphasis-400)', padding: '4px', transition: 'color 0.15s' }}
                    title="Copy response"
                  >
                    {liveRespCopied ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                    )}
                  </button>
                </div>
                <div className={styles.responseBody} style={{ padding: 0 }}>
                  {(() => {
                    const txt = typeof response.body === 'string'
                      ? response.body
                      : JSON.stringify(response.body, null, 2);
                    const isJson = txt.trim().startsWith('{') || txt.trim().startsWith('[');
                    return isJson
                      ? <CodeHighlight code={txt} language="json" />
                      : <pre style={{ margin: 0, padding: '16px 20px', fontFamily: JETBRAINS_MONO, fontSize: '12px', whiteSpace: 'pre-wrap', wordBreak: 'break-all', lineHeight: '1.8', color: 'var(--ifm-color-emphasis-700)' }}>{txt}</pre>;
                  })()}
                </div>
              </div>
            )}

            {/* cURL panel */}
            <div className={styles.codePanel}>
              <div className={styles.codePanelHeader}>
                <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ifm-color-emphasis-700)', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{endpoint.name}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                  <LangSelectorButton
                    selectedLang={selectedLang}
                    open={langDropdownOpen}
                    onClick={() => setLangDropdownOpen((o) => !o)}
                    btnRef={langBtnRef}
                  />
                  <LangDropdownPortal
                    open={langDropdownOpen}
                    anchorRef={langBtnRef}
                    langs={LANGUAGES}
                    selected={selectedLang}
                    onSelect={setSelectedLang}
                    onClose={closeLangDropdown}
                  />
                  <button
                    title="Copy code"
                    onClick={() => copyText(codeToShow, setCurlCopied)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: curlCopied ? '#16a34a' : 'var(--ifm-color-emphasis-400)', padding: '2px', transition: 'color 0.15s' }}
                  >
                    {curlCopied ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <CodeHighlight code={codeToShow} language={langDef.prism} />
            </div>

            {/* Static spec response panel — always shown */}
            {specCodes.length > 0 && (
              <div className={styles.responsePanel}>
                <div className={styles.responseTabs}>
                  {specCodes.map((code) => {
                    const isActive = code === activeSpecTab;
                    const isError = !code.startsWith('2');
                    return (
                      <button
                        key={code}
                        onClick={() => setActiveSpecTab(code)}
                        style={{
                          padding: '8px 12px', border: 'none', background: 'none', cursor: 'pointer',
                          fontSize: '13px', fontWeight: isActive ? 600 : 400,
                          color: isActive ? (isError ? '#c4490d' : 'var(--ifm-color-emphasis-800)') : 'var(--ifm-color-emphasis-500)',
                          borderBottom: isActive ? `2px solid ${isError ? '#c4490d' : 'var(--ifm-color-emphasis-800)'}` : '2px solid transparent',
                          transition: 'color 0.12s',
                        }}
                      >
                        {code}
                      </button>
                    );
                  })}
                  <button
                    onClick={() => copyText(getSpecExample(activeSpecTab), setRespCopied)}
                    style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', color: respCopied ? '#16a34a' : 'var(--ifm-color-emphasis-400)', padding: '4px', transition: 'color 0.15s' }}
                    title="Copy response"
                  >
                    {respCopied ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                    )}
                  </button>
                </div>
                <div className={styles.responseBody} style={{ padding: 0 }}>
                  {(() => {
                    const txt = getSpecExample(activeSpecTab);
                    const isJson = txt.trim().startsWith('{') || txt.trim().startsWith('[');
                    return isJson
                      ? <CodeHighlight code={txt} language="json" />
                      : <pre style={{ margin: 0, padding: '16px 20px', fontFamily: JETBRAINS_MONO, fontSize: '12px', whiteSpace: 'pre-wrap', wordBreak: 'break-all', lineHeight: '1.8', color: 'var(--ifm-color-emphasis-700)' }}>{txt}</pre>;
                  })()}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );

  if (typeof document === 'undefined') return null;
  return ReactDOM.createPortal(modalContent, document.body);
}
