import React, { useState } from 'react';
import styles from './AgentSkillCallout.module.css';

/**
 * Browserbase-style "coding agent" callout. Injected just below each doc's
 * title on every docs page by the docs remark plugin
 * (plugins/remark-agent-callout.js), and made available to MDX via
 * src/theme/MDXComponents.js. Tells users on Claude Code, Cursor, or any other
 * coding agent how to load the TestMu AI Skill into their prompt.
 *
 * The snippet points at the canonical, git-tracked Skill file served as a
 * static asset at /support/docs/SKILL.md (see scripts/generate-skill-index.js).
 */
const SKILL_URL = 'https://www.testmuai.com/support/docs/SKILL.md';
const PROMPT = `Read ${SKILL_URL} to set up TestMu AI (formerly LambdaTest) cloud testing.`;

export default function AgentSkillCallout() {
  const [copied, setCopied] = useState(false);

  async function copyPrompt() {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(PROMPT);
      } else if (typeof document !== 'undefined') {
        // Fallback for non-secure contexts / older browsers.
        const ta = document.createElement('textarea');
        ta.value = PROMPT;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable; noop */
    }
  }

  return (
    <aside className={styles.callout} aria-label="Using a coding agent">
      <div className={styles.iconCol} aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </div>

      <div className={styles.body}>
        <p className={styles.lead}>
          <strong>Using Claude Code, Cursor, or another coding agent?</strong>{' '}
          Paste this into your prompt to run cross-browser and real-device tests,
          debug sessions, and wire up CI on the TestMu AI cloud:
        </p>

        <div className={styles.snippet}>
          <code className={styles.snippetText}>{PROMPT}</code>
          <button
            type="button"
            className={styles.copyBtn}
            onClick={copyPrompt}
            aria-label="Copy prompt"
            title="Copy prompt"
          >
            {copied ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            )}
          </button>
        </div>

        {/* Announce copy success to assistive tech (the icon swap is visual-only). */}
        <span className={styles.srOnly} role="status" aria-live="polite">
          {copied ? 'Prompt copied to clipboard' : ''}
        </span>
      </div>
    </aside>
  );
}
