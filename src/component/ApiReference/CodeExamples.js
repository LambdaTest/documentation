import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import { useAIChat } from '@site/src/component/AskAI/AIChatContext';
import { LANGUAGES, generateCodeExample, LangDropdownPortal, LangSelectorButton } from './langUtils';

// Override github theme: JSON property names (keys) in green, matching stage
const githubWithGreenKeys = {
  ...themes.github,
  styles: [
    ...themes.github.styles,
    { types: ['property'], style: { color: '#1a7f64' } },
  ],
};

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
          className={`${className} api-code-pre m-0 p-4 overflow-x-auto leading-relaxed`}
          style={{ color: style.color, background: 'transparent', fontFamily: JETBRAINS_MONO, fontSize: '12px' }}
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

export default function CodeExamples({ endpoint, selectedLang: selectedLangProp, onLangChange }) {
  const { openPanel } = useAIChat();
  const [localLang, setLocalLang] = useState('cURL');
  const selectedLang = selectedLangProp !== undefined ? selectedLangProp : localLang;
  const setSelectedLang = onLangChange || setLocalLang;
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [activeResponseTab, setActiveResponseTab] = useState(null);
  const [codeCopied, setCodeCopied] = useState(false);
  const [respCopied, setRespCopied] = useState(false);
  const langBtnRef = useRef(null);
  const closeLangDropdown = useCallback(() => setLangDropdownOpen(false), []);

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

  function copyText(text, setFn) {
    try {
      navigator.clipboard.writeText(text).catch(() => {
        const ta = document.createElement('textarea');
        ta.value = text; document.body.appendChild(ta); ta.select();
        document.execCommand('copy'); document.body.removeChild(ta);
      });
    } catch {}
    setFn(true);
    setTimeout(() => setFn(false), 1500);
  }
  function copyCode() { copyText(code, setCodeCopied); }
  function copyResp() { copyText(currentResp, setRespCopied); }

  return (
    <div className="space-y-4">
      {/* Code Examples Panel */}
      <div style={{ border: '1px solid var(--ifm-color-emphasis-200)', borderRadius: '12px', overflow: 'hidden' }}>
        <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: 'var(--ifm-color-emphasis-100)', borderBottom: '1px solid var(--ifm-color-emphasis-200)' }}>
          <span className="flex-1 text-sm font-medium text-gray-900 dark:text-gray-100 truncate">{endpoint.name}</span>
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
        <div style={{ background: 'var(--ifm-background-color)' }}>
          <CodeHighlight code={code} language={langDef.prism} />
        </div>
      </div>

      {/* Response Panel */}
      {responseTabs.length > 0 && (
        <div style={{ border: '1px solid var(--ifm-color-emphasis-200)', borderRadius: '12px', overflow: 'hidden' }}>
          <div className="flex items-center gap-1 px-2" style={{ background: 'var(--ifm-color-emphasis-100)', borderBottom: '1px solid var(--ifm-color-emphasis-200)' }}>
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
          <div className="max-h-[420px] overflow-auto" style={{ background: 'var(--ifm-background-color)' }}>
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
