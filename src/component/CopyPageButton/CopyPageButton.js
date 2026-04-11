import React, { useState, useRef, useEffect } from 'react';
import styles from './CopyPageButton.module.css';
import { usePageContent } from './PageContentContext';

function usePageUrl() {
  if (typeof window !== 'undefined') return window.location.href;
  return '';
}

const ITEMS = [
  {
    id: 'copy-page',
    label: 'Copy page',
    subtitle: 'Copy page as Markdown for LLMs',
    external: false,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </svg>
    ),
  },
  {
    id: 'view-markdown',
    label: 'View as Markdown',
    subtitle: 'View this page as plain text',
    external: true,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 15V9l3 3 3-3v6M17 9v6" />
      </svg>
    ),
  },
  {
    id: 'open-chatgpt',
    label: 'Open in ChatGPT',
    subtitle: 'Ask questions about this page',
    external: true,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a9.96 9.96 0 0 1 7.07 2.93A9.96 9.96 0 0 1 22 12a9.96 9.96 0 0 1-2.93 7.07A9.96 9.96 0 0 1 12 22a9.96 9.96 0 0 1-7.07-2.93A9.96 9.96 0 0 1 2 12a9.96 9.96 0 0 1 2.93-7.07A9.96 9.96 0 0 1 12 2z" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    id: 'open-claude',
    label: 'Open in Claude',
    subtitle: 'Ask questions about this page',
    external: true,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    id: 'open-perplexity',
    label: 'Open in Perplexity',
    subtitle: 'Ask questions about this page',
    external: true,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="2" x2="12" y2="22" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    id: 'connect-cursor',
    label: 'Connect to Cursor',
    subtitle: 'Install MCP Server on Cursor',
    external: true,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
  {
    id: 'connect-vscode',
    label: 'Connect to VS Code',
    subtitle: 'Install MCP Server on VS Code',
    external: true,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
];

export default function CopyPageButton() {
  const pageContent = usePageContent();
  const [showDropdown, setShowDropdown] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  async function handleCopyPage() {
    try {
      const markdown = await getPageMarkdown();
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* noop */ }
  }

  const MCP_SERVER_URL = 'https://mcp.testmuai.com/sse/lambdatest';

  async function getPageMarkdown() {
    // If the current page registered a custom content provider, use it
    if (pageContent && typeof pageContent.getMarkdown === 'function') {
      return pageContent.getMarkdown();
    }
    // Fallback: collect visible text from main content preserving structure
    const main = document.querySelector('main') || document.querySelector('article') || document.body;
    const parts = [];
    main.querySelectorAll('h1,h2,h3,h4,h5,h6,p,pre,li').forEach((el) => {
      const tag = el.tagName.toLowerCase();
      const text = el.innerText.trim();
      if (!text) return;
      if (tag === 'h1') parts.push(`# ${text}`);
      else if (tag === 'h2') parts.push(`## ${text}`);
      else if (tag === 'h3') parts.push(`### ${text}`);
      else if (tag === 'h4') parts.push(`#### ${text}`);
      else if (tag === 'h5') parts.push(`##### ${text}`);
      else if (tag === 'h6') parts.push(`###### ${text}`);
      else if (tag === 'pre') parts.push('```\n' + text + '\n```');
      else if (tag === 'li') parts.push(`- ${text}`);
      else parts.push(text);
    });
    return parts.join('\n\n');
  }

  async function handleItem(id) {
    const rawUrl = typeof window !== 'undefined' ? window.location.href : '';
    // API reference provides a real .md URL; for Docusaurus doc pages use the page URL as-is
    // (Docusaurus doesn't serve raw .md at runtime).
    const aiUrl = (pageContent && pageContent.getMdUrl)
      ? pageContent.getMdUrl()
      : rawUrl.replace(/\/$/, '');

    setShowDropdown(false);
    switch (id) {
      case 'copy-page': {
        const markdown = await getPageMarkdown();
        await navigator.clipboard.writeText(markdown).catch(() => {});
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
      }
      case 'view-markdown': {
        // Show page content as plain markdown text in a new tab
        const markdown = await getPageMarkdown();
        const blob = new Blob([markdown], { type: 'text/plain;charset=utf-8' });
        window.open(URL.createObjectURL(blob), '_blank');
        break;
      }
      case 'open-chatgpt':
        window.open(`https://chatgpt.com/?q=${encodeURIComponent(aiUrl)}`, '_blank');
        break;
      case 'open-claude':
        window.open(`https://claude.ai/new?q=${encodeURIComponent(aiUrl)}`, '_blank');
        break;
      case 'open-perplexity':
        window.open(`https://www.perplexity.ai/search?q=${encodeURIComponent(aiUrl)}`, '_blank');
        break;
      case 'copy-mcp':
        await navigator.clipboard.writeText(MCP_SERVER_URL).catch(() => {});
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
      case 'connect-cursor':
        window.open(`cursor://anysphere.cursor-deeplink/mcp/install?url=${encodeURIComponent(MCP_SERVER_URL)}`, '_blank');
        break;
      case 'connect-vscode':
        window.open(`vscode://vscode.vscode-mcp/install?url=${encodeURIComponent(MCP_SERVER_URL)}`, '_blank');
        break;
      default:
        break;
    }
  }

  return (
    <div className={styles.wrapper} ref={ref}>
      {/* Split button */}
      <div className={styles.splitBtn}>
        <button className={styles.mainBtn} onClick={handleCopyPage} title="Copy page as Markdown">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          <span>{copied ? 'Copied!' : 'Copy page'}</span>
        </button>
        <button
          className={styles.chevronBtn}
          onClick={() => setShowDropdown((v) => !v)}
          aria-label="More copy options"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transition: 'transform 0.15s', transform: showDropdown ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>

      {showDropdown && (
        <div className={styles.dropdown}>
          {ITEMS.map((item) => (
            <button
              key={item.id}
              className={styles.dropdownItem}
              onClick={() => handleItem(item.id)}
            >
              <span className={styles.itemIcon}>{item.icon}</span>
              <span className={styles.itemText}>
                <span className={styles.itemLabel}>
                  {item.label}
                  {item.external && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px', verticalAlign: 'middle' }}>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  )}
                </span>
                <span className={styles.itemSubtitle}>{item.subtitle}</span>
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
