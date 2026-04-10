import React, { useState, useEffect } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import { useAIChat } from '@site/src/component/AskAI/AIChatContext';

// Override github theme: JSON property names (keys) in green, matching stage
const githubWithGreenKeys = {
  ...themes.github,
  styles: [
    ...themes.github.styles,
    { types: ['property'], style: { color: '#1a7f64' } },
  ],
};

const LANGUAGES = [
  { label: 'cURL', prism: 'bash' },
  { label: 'JavaScript', prism: 'javascript' },
  { label: 'Python', prism: 'python' },
  { label: 'Node.js', prism: 'javascript' },
];

function generateCodeExample(endpoint, language) {
  if (!endpoint) return '';
  const url = `${endpoint.baseUrl}${endpoint.path}`;
  const method = endpoint.method.toUpperCase();

  switch (language) {
    case 'cURL':
      return `curl --request ${method} \\\n  --url ${url} \\\n  --header 'Authorization: Basic <encoded-value>'`;
    case 'JavaScript':
      return `fetch('${url}', {\n  method: '${method}',\n  headers: {\n    'Authorization': 'Basic <encoded-value>',\n    'Content-Type': 'application/json'\n  }\n})\n  .then(response => response.json())\n  .then(data => console.log(data));`;
    case 'Python':
      return `import requests\n\nresponse = requests.${endpoint.method.toLowerCase()}(\n    '${url}',\n    headers={\n        'Authorization': 'Basic <encoded-value>'\n    }\n)\nprint(response.json())`;
    case 'Node.js':
      return `const axios = require('axios');\n\nconst response = await axios.${endpoint.method.toLowerCase()}('${url}', {\n  headers: {\n    'Authorization': 'Basic <encoded-value>'\n  }\n});\nconsole.log(response.data);`;
    default:
      return '';
  }
}

function TerminalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  );
}

function ChevronUpDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="7 15 12 20 17 15" />
      <polyline points="7 9 12 4 17 9" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L14 9L21 12L14 15L12 22L10 15L3 12L10 9L12 2Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
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

const JETBRAINS_MONO = "'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'SF Mono', Menlo, monospace";

function CodeHighlight({ code, language }) {
  const dark = useDarkMode();
  return (
    <Highlight code={code} language={language} theme={dark ? themes.vsDark : githubWithGreenKeys}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className} api-code-pre m-0 p-4 overflow-x-auto leading-relaxed bg-transparent`}
          style={{ ...style, background: 'transparent', fontFamily: JETBRAINS_MONO, fontSize: '12px' }}
        >
          {tokens.map((line, i) => {
            const { className: lineCls, ...lineRest } = getLineProps({ line });
            return (
              <div
                key={i}
                {...lineRest}
                className={`${lineCls || ''} api-code-line`}
                style={{ display: 'block', padding: 0, margin: 0, listStyle: 'none' }}
              >
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

function formatResponse(value) {
  if (value == null) return '';
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
      try { return JSON.stringify(JSON.parse(trimmed), null, 2); } catch {}
    }
    return trimmed;
  }
  return JSON.stringify(value, null, 2);
}

export default function CodeExamples({ endpoint }) {
  const { openPanel } = useAIChat();
  const [selectedLang, setSelectedLang] = useState('cURL');
  const [activeResponseTab, setActiveResponseTab] = useState(null);
  const [codeCopied, setCodeCopied] = useState(false);
  const [respCopied, setRespCopied] = useState(false);

  if (!endpoint) return null;

  const langDef = LANGUAGES.find((l) => l.label === selectedLang) || LANGUAGES[0];
  const code = generateCodeExample(endpoint, selectedLang);

  const responses = endpoint.responses || {};
  const responseTabs = Object.keys(responses).filter(
    (code) => responses[code].example != null
  );
  const currentTab = activeResponseTab && responseTabs.includes(activeResponseTab)
    ? activeResponseTab
    : responseTabs[0];
  const currentResp = currentTab ? formatResponse(responses[currentTab]) : '';
  const respIsJson = currentResp.startsWith('{') || currentResp.startsWith('[');

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 1500);
    } catch {}
  }
  async function copyResp() {
    try {
      await navigator.clipboard.writeText(currentResp);
      setRespCopied(true);
      setTimeout(() => setRespCopied(false), 1500);
    } catch {}
  }

  return (
    <div className="space-y-4">
      {/* Code Examples Panel */}
      <div style={{ border: '1px solid #e5e7eb', borderRadius: '12px', overflow: 'hidden' }}>
        <div className="flex items-center gap-2 px-4 py-2.5 dark:bg-[#1e1e2e]" style={{ background: '#F9F5F0', borderBottom: '1px solid #e5e7eb' }}>
          <span className="flex-1 text-sm font-medium text-gray-900 dark:text-gray-100 truncate">{endpoint.name}</span>
          <div className="relative flex items-center gap-1 px-2 py-1 rounded-md border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800 text-xs text-gray-700 dark:text-gray-300">
            <TerminalIcon />
            <select
              value={selectedLang}
              onChange={(e) => setSelectedLang(e.target.value)}
              className="appearance-none bg-transparent border-0 outline-none pr-4 cursor-pointer text-xs text-gray-700 dark:text-gray-300"
            >
              {LANGUAGES.map((l) => (
                <option key={l.label} value={l.label}>{l.label}</option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-1.5"><ChevronUpDown /></span>
          </div>
          <button
            onClick={copyCode}
            className="p-1.5 rounded-md border-0 bg-transparent appearance-none cursor-pointer text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            aria-label="Copy code"
          >
            {codeCopied ? <CheckIcon /> : <CopyIcon />}
          </button>
          <button
            onClick={openPanel}
            className="p-1.5 rounded-md border-0 bg-transparent appearance-none cursor-pointer text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            aria-label="Ask AI"
          >
            <SparkleIcon />
          </button>
        </div>
        <div className="bg-white dark:bg-[#1e1e2e]">
          <CodeHighlight code={code} language={langDef.prism} />
        </div>
      </div>

      {/* Response Panel */}
      {responseTabs.length > 0 && (
        <div style={{ border: '1px solid #e5e7eb', borderRadius: '12px', overflow: 'hidden' }}>
          <div className="flex items-center gap-1 px-2 dark:bg-[#1e1e2e]" style={{ background: '#F9F5F0', borderBottom: '1px solid #e5e7eb' }}>
            <div className="flex-1 flex items-center">
              {responseTabs.map((tab) => {
                const active = currentTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveResponseTab(tab)}
                    className={`px-3 py-2.5 text-sm border-0 bg-transparent appearance-none cursor-pointer border-b-2 -mb-px ${
                      active
                        ? 'text-primary border-primary font-medium dark:text-primary-light dark:border-primary-light'
                        : 'text-gray-500 border-transparent hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
            <button
              onClick={copyResp}
              className="p-1.5 rounded-md border-0 bg-transparent appearance-none cursor-pointer text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              aria-label="Copy response"
            >
              {respCopied ? <CheckIcon /> : <CopyIcon />}
            </button>
            <button
              onClick={openPanel}
              className="p-1.5 rounded-md border-0 bg-transparent appearance-none cursor-pointer text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              aria-label="Ask AI"
            >
              <SparkleIcon />
            </button>
          </div>
          <div className="max-h-[420px] overflow-auto bg-white dark:bg-[#1e1e2e]">
            {respIsJson ? (
              <CodeHighlight code={currentResp} language="json" />
            ) : (
              <pre className="m-0 p-4 text-[13px] leading-relaxed text-gray-700 dark:text-gray-300 bg-transparent whitespace-pre-wrap">
                <code>{currentResp}</code>
              </pre>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
