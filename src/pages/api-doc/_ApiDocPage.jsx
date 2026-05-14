/**
 * Shared layout for all API Reference endpoint pages.
 * Receives groupSlug + endpointSlug derived from the generated page file,
 * looks up the endpoint from all-apis.json, and renders the 3-column layout.
 */
import React, { useState, useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import SharedSidebar from '@site/src/component/SharedSidebar/SharedSidebar';
import ApiSidebar from '@site/src/component/ApiReference/ApiSidebar';
import EndpointDetail from '@site/src/component/ApiReference/EndpointDetail';
import CodeExamples from '@site/src/component/ApiReference/CodeExamples';
import TryItModal from '@site/src/component/ApiReference/TryItModal';
import CopyPageButton from '@site/src/component/CopyPageButton/CopyPageButton';
import PageContentContext from '@site/src/component/CopyPageButton/PageContentContext';
import styles from './styles.module.css';
import allApisData from '@site/src/data/api/all-apis.json';
import { slugify } from '@site/src/component/ApiReference/utils';
export { slugify } from '@site/src/component/ApiReference/utils';

function findEndpointBySlugs(apiSlug, groupSlug, endpointSlug) {
  for (const api of allApisData.apis) {
    if (slugify(api.name) !== apiSlug) continue;
    for (const group of api.groups) {
      const gSlug = slugify(group.noHeading ? api.name : group.name);
      if (gSlug !== groupSlug) continue;
      for (const ep of group.endpoints || []) {
        if (slugify(ep.name) === endpointSlug) {
          return { ...ep, group: group.noHeading ? api.name : group.name, baseUrl: api.baseUrl, servers: api.servers };
        }
      }
    }
  }
  return null;
}

function findFirstEndpoint() {
  for (const api of allApisData.apis) {
    for (const group of api.groups) {
      if (group.endpoints && group.endpoints.length > 0) {
        const ep = group.endpoints[0];
        return { ...ep, group: group.noHeading ? api.name : group.name, baseUrl: api.baseUrl, servers: api.servers };
      }
    }
  }
  return null;
}

const API_YAML_FILE_MAP = {
  'Selenium Automation API': 'support-openapi.yaml',
  'Automated Screenshots API': 'openapiThree.yaml',
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

const NAV_SECTIONS = [
  { label: 'Home', href: '/support/' },
  { label: 'Docs', href: '/support/docs/getting-started-with-testmu-automation/' },
  { label: 'API Reference', href: '/support/api-doc/' },
  { label: 'FAQ', href: '/support/faq/' },
];

const TOP_LINKS = [
  { label: 'Status', href: 'https://status.lambdatest.io/' },
  { label: 'Community', href: 'https://community.testmuai.com/' },
  { label: 'Blog', href: 'https://www.testmuai.com/blog/' },
];

function getStoredTheme() {
  if (typeof document === 'undefined') return 'light';
  return document.documentElement.getAttribute('data-theme') || 'light';
}

function MobileSidebarDrawer({ open, onClose, apis, activeApiSlug, activeGroupSlug, activeEndpointSlug }) {
  const drawerRef = useRef(null);
  const [theme, setTheme] = useState(getStoredTheme);
  const [section, setSection] = useState('API Reference');

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    function handleKey(e) { if (e.key === 'Escape') onClose(); }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch {}
    setTheme(next);
  }

  function handleSectionChange(e) {
    const nav = NAV_SECTIONS.find(s => s.label === e.target.value);
    if (nav) window.location.href = nav.href;
  }

  const bg = theme === 'dark' ? '#1b1b1d' : '#ffffff';
  const border = theme === 'dark' ? 'rgba(255,255,255,0.1)' : '#e5e7eb';

  return (
    <>
      {open && (
        <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 800, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(2px)' }} />
      )}
      <div
        ref={drawerRef}
        style={{
          position: 'fixed', top: 0, left: 0, bottom: 0, zIndex: 900,
          width: '85vw', maxWidth: '320px', background: bg,
          borderRight: `1px solid ${border}`,
          boxShadow: '4px 0 24px rgba(0,0,0,0.12)',
          display: 'flex', flexDirection: 'column',
          transform: open ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.25s ease',
        }}
      >
        {/* Header: logo + theme toggle + close */}
        <div style={{ display: 'flex', alignItems: 'center', padding: '14px 16px', borderBottom: `1px solid ${border}`, flexShrink: 0, gap: '8px' }}>
          <a href="https://www.testmuai.com" style={{ flex: 1, textDecoration: 'none' }}>
            <img
              src={theme === 'dark' ? '/support/img/testmuai-logo-dark.svg' : '/support/img/testmuai-logo-light.svg'}
              alt="TestMu AI" height="22" style={{ display: 'block' }}
            />
          </a>
          {/* Theme toggle pill */}
          <div style={{ display: 'flex', alignItems: 'center', border: `1px solid ${border}`, borderRadius: '20px', overflow: 'hidden', flexShrink: 0 }}>
            <button
              onClick={() => { if (theme !== 'light') toggleTheme(); }}
              style={{ background: theme === 'light' ? '#f3f4f6' : 'none', border: 'none', cursor: 'pointer', padding: '5px 8px', display: 'flex', alignItems: 'center', color: theme === 'light' ? '#374151' : '#9ca3af' }}
              aria-label="Light mode"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            </button>
            <button
              onClick={() => { if (theme !== 'dark') toggleTheme(); }}
              style={{ background: theme === 'dark' ? '#374151' : 'none', border: 'none', cursor: 'pointer', padding: '5px 8px', display: 'flex', alignItems: 'center', color: theme === 'dark' ? '#f9fafb' : '#9ca3af' }}
              aria-label="Dark mode"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            </button>
          </div>
          <button onClick={onClose} style={{ background: theme === 'dark' ? '#374151' : '#f3f4f6', border: 'none', borderRadius: '50%', cursor: 'pointer', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: theme === 'dark' ? '#f9fafb' : '#374151', flexShrink: 0 }} aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Scrollable body */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px 12px' }}>
          {/* Section dropdown */}
          <select
            value={section}
            onChange={handleSectionChange}
            style={{
              width: '100%', padding: '10px 12px', marginBottom: '16px',
              border: `1px solid ${border}`, borderRadius: '8px',
              background: bg, color: theme === 'dark' ? '#f9fafb' : '#111827',
              fontSize: '14px', fontWeight: 500, cursor: 'pointer', appearance: 'auto',
            }}
          >
            {NAV_SECTIONS.map(s => <option key={s.label} value={s.label}>{s.label}</option>)}
          </select>

          {/* Status / Community / Blog */}
          <div style={{ marginBottom: '12px' }}>
            {TOP_LINKS.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', padding: '8px 4px', fontSize: '14px', color: theme === 'dark' ? '#9ca3af' : '#6b7280', textDecoration: 'none', gap: '10px' }}>
                {label}
              </a>
            ))}
          </div>
          <div style={{ height: '1px', background: border, margin: '8px 0 16px' }} />

          {/* API navigation tree */}
          <ApiSidebar
            apis={apis}
            activeApiSlug={activeApiSlug}
            activeGroupSlug={activeGroupSlug}
            activeEndpointSlug={activeEndpointSlug}
          />
        </div>
      </div>
    </>
  );
}

export default function ApiDocPage({ apiSlug, groupSlug, endpointSlug }) {
  const endpoint = apiSlug
    ? findEndpointBySlugs(apiSlug, groupSlug, endpointSlug)
    : findFirstEndpoint();

  const [tryItEndpoint, setTryItEndpoint] = useState(null);
  const [selectedLang, setSelectedLang] = useState('cURL');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Remove alternate links (preserved from original)
  useEffect(() => {
    const removeAlternateLinks = () => {
      document.querySelectorAll('link[rel="alternate"]').forEach((l) => l.remove());
    };
    removeAlternateLinks();
    const observer = new MutationObserver(removeAlternateLinks);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  // Lock/unlock layout for 3-column scroll behaviour
  useEffect(() => {
    const root = document.getElementById('__docusaurus');
    const mw = document.querySelector('.main-wrapper');

    function lockLayout() {
      if (root) root.style.height = '100%';
      if (mw) { mw.style.flex = '1 1 0%'; mw.style.overflow = 'hidden'; mw.style.minHeight = '0'; }
      document.body.style.overflow = 'hidden';
    }
    function unlockLayout() {
      if (root) root.style.height = '';
      if (mw) { mw.style.flex = ''; mw.style.overflow = ''; mw.style.minHeight = ''; }
      document.body.style.overflow = '';
    }

    const mql = window.matchMedia('(max-width: 996px)');
    const handleChange = (e) => e.matches ? unlockLayout() : lockLayout();
    mql.matches ? unlockLayout() : lockLayout();
    mql.addEventListener('change', handleChange);
    return () => { mql.removeEventListener('change', handleChange); unlockLayout(); };
  }, []);

  // ── Copy page content helpers ─────────────────────────────────────────────
  function yamlStr(s) {
    if (s === null || s === undefined) return 'null';
    if (typeof s === 'boolean') return s ? 'true' : 'false';
    if (typeof s === 'number') return String(s);
    if (/[:#\[\]{},\n>|&*!%@`]/.test(s) || s.trim() !== s || s === '') {
      return `'${String(s).replace(/'/g, "''")}'`;
    }
    return String(s);
  }

  function buildSchemaFromExample(obj, indent = 10) {
    if (!obj || typeof obj !== 'object') return '';
    const pad = ' '.repeat(indent);
    const lines = [];
    const source = Array.isArray(obj) ? (obj[0] || {}) : obj;
    Object.entries(source).forEach(([k, v]) => {
      if (Array.isArray(v)) {
        const itemType = v.length > 0 && typeof v[0] === 'object' ? 'object' : typeof v[0] || 'string';
        lines.push(`${pad}${k}:`, `${pad}  type: array`, `${pad}  items:`);
        if (itemType === 'object' && v[0]) {
          lines.push(`${pad}    type: object`, `${pad}    properties:`, buildSchemaFromExample(v[0], indent + 6));
        } else {
          lines.push(`${pad}    type: ${itemType}`);
          if (v.length > 0) lines.push(`${pad}  example:`, `${pad}    - ${yamlStr(v[0])}`);
        }
      } else if (v !== null && typeof v === 'object') {
        lines.push(`${pad}${k}:`, `${pad}  type: object`, `${pad}  properties:`, buildSchemaFromExample(v, indent + 4));
      } else {
        const t = v === null ? 'string' : typeof v;
        lines.push(`${pad}${k}:`, `${pad}  type: ${t}`);
        if (v !== null && v !== 123) lines.push(`${pad}  example: ${yamlStr(v)}`);
      }
    });
    return lines.join('\n');
  }

  function getEndpointMarkdown() {
    const ep = endpoint;
    if (!ep) return '';
    const parentApi = allApisData.apis.find((a) =>
      a.groups.some((g) => g.endpoints?.some((e) => e.path === ep.path && e.method === ep.method))
    );
    const apiTitle = parentApi ? `TestMu AI ${parentApi.name} Documentation` : 'TestMu AI API Documentation';
    const yamlFile = parentApi ? (API_YAML_FILE_MAP[parentApi.name] || 'openapi.yaml') : 'openapi.yaml';
    const globalServers = parentApi?.servers || [{ url: ep.baseUrl }];
    const method = (ep.method || 'get').toLowerCase();
    const params = ep.queryParams || ep.parameters || [];
    const resp200raw = ep.responses?.['200'];
    const example200 = resp200raw && typeof resp200raw === 'object' && 'example' in resp200raw
      ? resp200raw.example : (typeof resp200raw === 'object' ? resp200raw : null);

    const lines = [];
    lines.push('## Documentation Index');
    lines.push('Fetch the complete documentation index at: https://stage.testmuinternal.ai/llms.txt');
    lines.push('');
    lines.push(`# ${ep.name}`, '');
    if (ep.description) lines.push(`> ${ep.description}`, '');
    lines.push('## OpenAPI', '');
    lines.push(`\`\`\`\`yaml ${yamlFile} ${method} ${ep.path}`);
    lines.push(`openapi: 3.0.0`, `info:`, `  title: ${apiTitle}`, `  version: 1.0.1`, `servers:`);
    (globalServers.length > 0 ? globalServers : [{ url: ep.baseUrl }]).forEach((s) => {
      lines.push(`  - url: ${yamlStr(s.url)}`);
      if (s.description) lines.push(`    description: ${yamlStr(s.description)}`);
    });
    lines.push(`security: []`, `paths:`, `  ${ep.path}:`, `    ${method}:`);
    if (ep.group) lines.push(`      tags:\n        - ${ep.group}`);
    lines.push(`      summary: ${yamlStr(ep.name)}`);
    if (ep.description) lines.push(`      description: >-\n        ${ep.description.replace(/\n/g, '\n        ')}`);
    const opId = ep.path.replace(/^\//, '').replace(/\//g, '_').replace(/[{}]/g, '');
    lines.push(`      operationId: ${opId}`);
    if (params.length > 0) {
      lines.push(`      parameters:`);
      params.forEach((p) => {
        lines.push(`        - name: ${p.name}`, `          in: ${p.in || 'query'}`);
        if (p.description) lines.push(`          description: >-\n            ${p.description.replace(/\n/g, '\n            ')}`);
        lines.push(`          required: ${p.required ? 'true' : 'false'}`, `          style: form`, `          explode: true`, `          schema:`, `            type: ${p.type || 'string'}`);
        if (p.default !== undefined && p.default !== null) lines.push(`            default: ${yamlStr(p.default)}`);
      });
    }
    lines.push(`      responses:`);
    Object.entries(ep.responses || { '200': { description: 'successful operation' } }).forEach(([code, resp]) => {
      const desc = typeof resp === 'object' ? (resp.description || code) : (resp || code);
      lines.push(`        '${code}':`, `          description: ${yamlStr(desc)}`);
      if (code === '200' && example200 && typeof example200 === 'object') {
        lines.push(`          content:`, `            application/json:`, `              schema:`, `                type: object`, `                properties:`, buildSchemaFromExample(example200, 18));
      }
    });
    lines.push(`      security:`, `        - basicAuth: []`);
    lines.push(`components:`, `  securitySchemes:`, `    basicAuth:`, `      type: http`, `      scheme: basic`);
    lines.push(`\`\`\`\``, '', 'Built with [TestMu AI](https://testmuai.com).');
    return lines.join('\n');
  }

  function getEndpointMdUrl() {
    const ep = endpoint;
    if (!ep) return typeof window !== 'undefined' ? window.location.href + '.md' : '';
    const base = typeof window !== 'undefined' ? window.location.origin : '';
    return `${base}${typeof window !== 'undefined' ? window.location.pathname : ''}.md`;
  }

  const pageContentValue = { getMarkdown: getEndpointMarkdown, getMdUrl: getEndpointMdUrl };

  return (
    <PageContentContext.Provider value={pageContentValue}>
      <Layout
        noFooter
        title={endpoint ? `${endpoint.name} — TestMu AI API` : 'TestMu AI API Documentation'}
        description="Manage and organize your test builds, test sessions, tunnel status and more with TestMu AI APIs."
      >
        {/* Mobile breadcrumb row — visible only on mobile */}
        <div className={styles.mobileBreadcrumb}>
          <button
            className={styles.mobileSidebarBtn}
            onClick={() => setMobileSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          {endpoint && (
            <span className={styles.mobileBreadcrumbText}>
              <span style={{ color: 'var(--brand-amber)' }}>{endpoint.group}</span>
              <span style={{ margin: '0 6px', color: 'var(--ifm-color-emphasis-400)' }}>›</span>
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{endpoint.name}</span>
            </span>
          )}
        </div>

        <MobileSidebarDrawer
          open={mobileSidebarOpen}
          onClose={() => setMobileSidebarOpen(false)}
          apis={allApisData.apis}
          activeApiSlug={apiSlug}
          activeGroupSlug={groupSlug}
          activeEndpointSlug={endpointSlug}
        />

        <div className={styles.apiLayout}>
          <SharedSidebar>
            <ApiSidebar
              apis={allApisData.apis}
              activeApiSlug={apiSlug}
              activeGroupSlug={groupSlug}
              activeEndpointSlug={endpointSlug}
            />
          </SharedSidebar>

          <div className={styles.contentArea}>
            <main className={styles.centerPanel}>
              <div className={styles.centerHeader}>
                <div />
                <CopyPageButton />
              </div>
              <EndpointDetail
                endpoint={endpoint}
                onTryIt={setTryItEndpoint}
                mobileCodeSlot={<CodeExamples endpoint={endpoint} selectedLang={selectedLang} onLangChange={setSelectedLang} />}
              />
              <div style={{ height: '80px' }} />
            </main>

            <div className={styles.rightPanel}>
              <CodeExamples endpoint={endpoint} selectedLang={selectedLang} onLangChange={setSelectedLang} />
            </div>
          </div>
        </div>

        {tryItEndpoint && (
          <TryItModal
            key={`${tryItEndpoint.method}:${tryItEndpoint.path}`}
            endpoint={tryItEndpoint}
            onClose={() => setTryItEndpoint(null)}
            selectedLang={selectedLang}
            onLangChange={setSelectedLang}
          />
        )}
      </Layout>
    </PageContentContext.Provider>
  );
}
