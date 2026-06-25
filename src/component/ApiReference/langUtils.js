import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function safeBase64(str) {
  try {
    return btoa(unescape(encodeURIComponent(str)));
  } catch {
    return btoa(str.replace(/[^\x00-\xFF]/g, '?'));
  }
}

// prism language mapping — only use languages bundled in prism-react-renderer
export const LANGUAGES = [
  { label: 'cURL',       prism: 'clike' },
  { label: 'Python',     prism: 'python' },
  { label: 'JavaScript', prism: 'javascript' },
  { label: 'PHP',        prism: 'clike' },
  { label: 'Go',         prism: 'go' },
  { label: 'Java',       prism: 'clike' },
  { label: 'Ruby',       prism: 'clike' },
];

export function generateCodeExample(endpoint, language, { username, password, params } = {}) {
  if (!endpoint) return '';
  const method = endpoint.method.toUpperCase();
  const methodLower = endpoint.method.toLowerCase();

  // Build URL with path params substituted
  let url = `${(endpoint.baseUrl || '').replace(/\/+$/, '')}${endpoint.path}`;
  if (endpoint.pathParams) {
    endpoint.pathParams.forEach((p) => {
      url = url.replace(`{${p.name}}`, (params && params[p.name]) || `{${p.name}}`);
    });
  }
  const queryParts = (endpoint.queryParams || [])
    .filter((p) => params && params[p.name])
    .map((p) => `${encodeURIComponent(p.name)}=${encodeURIComponent(params[p.name])}`);
  if (queryParts.length) url += `?${queryParts.join('&')}`;

  const authValue =
    username && password
      ? `Basic ${safeBase64(`${username}:${password}`)}`
      : 'Basic <encoded-value>';

  // Build body snippet
  const bodyProps = endpoint.requestBody?.properties || [];
  const contentType = endpoint.requestBody?.contentType || 'application/json';
  const isMultipart = contentType === 'multipart/form-data';
  const bodyExample = bodyProps.length > 0
    ? Object.fromEntries(bodyProps.map((p) => {
        const val = (params && params[`__body__${p.name}`]) ||
          (p.type.includes('integer') || p.type.includes('number') ? 0 :
           p.type.includes('boolean') ? true :
           p.type.includes('array') ? [] :
           `<${p.name}>`);
        return [p.name, val];
      }))
    : null;

  switch (language) {
    case 'cURL': {
      let curlBody = '';
      if (bodyExample) {
        if (isMultipart) {
          curlBody = bodyProps.map((p) => ` \\\n  --form '${p.name}=${bodyExample[p.name]}'`).join('');
          curlBody = ` \\\n  --header "Content-Type: multipart/form-data"` + curlBody;
        } else {
          curlBody = ` \\\n  --header "Content-Type: application/json" \\\n  --data '${JSON.stringify(bodyExample, null, 2).replace(/\n/g, '\n  ')}'`;
        }
      }
      return `curl --request ${method} \\\n  --url "${url}" \\\n  --header "Authorization: ${authValue}"${curlBody}`;
    }
    case 'Python': {
      const pyBody = bodyExample
        ? (isMultipart
            ? `, files={${bodyProps.map((p) => `"${p.name}": "${bodyExample[p.name]}"`).join(', ')}}`
            : `, json=${JSON.stringify(bodyExample, null, 4).replace(/\n/g, '\n')}`)
        : '';
      return `import requests\n\nurl = "${url}"\nheaders = {\n    "Authorization": "${authValue}"\n}\n\nresponse = requests.${methodLower}(url, headers=headers${pyBody})\nprint(response.json())`;
    }
    case 'JavaScript': {
      const jsBody = bodyExample && !isMultipart
        ? `,\n  body: JSON.stringify(${JSON.stringify(bodyExample, null, 4).replace(/\n/g, '\n  ')})`
        : '';
      return `fetch("${url}", {\n  method: "${method}",\n  headers: {\n    "Authorization": "${authValue}"${bodyExample && !isMultipart ? ',\n    "Content-Type": "application/json"' : ''}\n  }${jsBody}\n})\n  .then(res => res.json())\n  .then(data => console.log(data));`;
    }
    case 'PHP': {
      const phpBody = bodyExample
        ? (isMultipart
            ? `    'multipart' => [${bodyProps.map((p) => `\n        ['name' => '${p.name}', 'contents' => '${bodyExample[p.name]}']`).join(',')}],\n`
            : `    'json' => ${JSON.stringify(bodyExample, null, 8).replace(/\n/g, '\n    ')},\n`)
        : '';
      return `<?php\n\n$client = new \\GuzzleHttp\\Client();\n\n$response = $client->request('${method}', '${url}', [\n    'headers' => [\n        'Authorization' => '${authValue}',\n    ],\n${phpBody}]);\n\necho $response->getBody();`;
    }
    case 'Go':
      return `package main\n\nimport (\n    "fmt"\n    "net/http"\n    "io"\n)\n\nfunc main() {\n    req, _ := http.NewRequest("${method}", "${url}", nil)\n    req.Header.Add("Authorization", "${authValue}")\n\n    res, _ := http.DefaultClient.Do(req)\n    defer res.Body.Close()\n    body, _ := io.ReadAll(res.Body)\n    fmt.Println(string(body))\n}`;
    case 'Java':
      return `OkHttpClient client = new OkHttpClient();\n\nRequest request = new Request.Builder()\n    .url("${url}")\n    .method("${method}", ${method === 'GET' ? 'null' : 'RequestBody.create(null, new byte[0])'})\n    .addHeader("Authorization", "${authValue}")\n    .build();\n\nResponse response = client.newCall(request).execute();\nSystem.out.println(response.body().string());`;
    case 'Ruby':
      return `require 'uri'\nrequire 'net/http'\n\nuri = URI("${url}")\nhttp = Net::HTTP.new(uri.host, uri.port)\nhttp.use_ssl = true\n\nrequest = Net::HTTP::${method.charAt(0) + method.slice(1).toLowerCase()}.new(uri)\nrequest["Authorization"] = "${authValue}"\n\nresponse = http.request(request)\nputs response.read_body`;
    default:
      return '';
  }
}

function ChevronUpDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="7 15 12 20 17 15" />
      <polyline points="7 9 12 4 17 9" />
    </svg>
  );
}

export function LangDropdownPortal({ open, anchorRef, langs, selected, onSelect, onClose }) {
  const [rect, setRect] = useState(null);

  useEffect(() => {
    if (open && anchorRef.current) {
      setRect(anchorRef.current.getBoundingClientRect());
    }
  }, [open, anchorRef]);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (!e.target.closest('[data-lang-dropdown]')) onClose();
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open, onClose]);

  if (!open || !rect) return null;

  return ReactDOM.createPortal(
    <div
      data-lang-dropdown
      style={{
        position: 'fixed',
        top: rect.bottom + 6,
        right: window.innerWidth - rect.right,
        zIndex: 9999,
        background: 'var(--ifm-card-background-color, #ffffff)',
        border: '1px solid var(--ifm-color-emphasis-200)',
        borderRadius: 10,
        boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
        minWidth: 150,
        padding: '4px 0',
      }}
      role="listbox"
    >
      {langs.map((l) => {
        const active = selected === l.label;
        return (
          <button
            key={l.label}
            role="option"
            aria-selected={active}
            onClick={() => { onSelect(l.label); onClose(); }}
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              width: '100%', padding: '7px 12px',
              border: 'none', background: 'transparent', cursor: 'pointer',
              fontSize: 13, color: active ? '#ED5F00' : 'var(--ifm-color-emphasis-800)',
              textAlign: 'left', fontWeight: active ? 600 : 400,
              fontFamily: 'inherit',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--ifm-color-emphasis-100)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
          >
            <span style={{ flex: 1 }}>{l.label}</span>
            {active && (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ED5F00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </button>
        );
      })}
    </div>,
    document.body
  );
}

export function LangSelectorButton({ selectedLang, open, onClick, btnRef }) {
  return (
    <div data-lang-dropdown style={{ position: 'relative' }}>
      <button
        ref={btnRef}
        onClick={onClick}
        style={{
          display: 'flex', alignItems: 'center', gap: 6, padding: '4px 9px',
          borderRadius: 7, border: '1px solid var(--ifm-color-emphasis-200)',
          background: 'var(--ifm-background-color)', cursor: 'pointer',
          fontSize: 12, color: 'var(--ifm-color-primary)', whiteSpace: 'nowrap',
          fontWeight: 500, fontFamily: 'inherit',
        }}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" />
        </svg>
        <span>{selectedLang}</span>
        <ChevronUpDown />
      </button>
    </div>
  );
}
