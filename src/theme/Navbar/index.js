import React, { useState, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import SearchBar from '@theme/SearchBar';
import { useAIChat } from '../../component/AskAI/AIChatContext';
import styles from './styles.module.css';

function getStoredTheme() {
  if (typeof document === 'undefined') return 'light';
  return document.documentElement.getAttribute('data-theme') || 'light';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  try { localStorage.setItem('theme', theme); } catch {}
}

const NAV_LINKS = [
  { to: '/support/', label: 'Home', icon: HomeIcon },
  { to: '/support/docs/getting-started-with-lambdatest-automation/', label: 'Docs', icon: DocsIcon },
  { to: '/support/api-doc/', label: 'API Reference', icon: ApiIcon },
  { to: '/support/faq/', label: 'FAQ', icon: FaqIcon },
];

function HomeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function DocsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  );
}

function ApiIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function FaqIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function isActiveLink(pathname, to) {
  if (to === '/support/') return pathname === '/support/' || pathname === '/support';
  return pathname.startsWith(to);
}

function HamburgerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export default function Navbar() {
  const location = useLocation();
  const [colorMode, setColorModeState] = useState(getStoredTheme);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setColorModeState(getStoredTheme());
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  function toggleColorMode() {
    const next = colorMode === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    setColorModeState(next);
  }

  let openPanel;
  try {
    openPanel = useAIChat().openPanel;
  } catch {
    openPanel = () => {};
  }

  return (
    <nav className={styles.navbar}>
      {/* Hidden sentinel for Docusaurus scroll offset calculation */}
      <div className="navbar" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100px', pointerEvents: 'none', visibility: 'hidden', zIndex: -1 }} aria-hidden="true" />

      {/* ── Desktop Row 1 ── */}
      <div className={styles.row1}>
        <a href="https://www.testmuai.com" className={styles.logoLink}>
          <img src="/support/img/testmuai-logo-light.svg" alt="TestMu AI" className={`${styles.logoLight} no-zoom`} height="28" />
          <img src="/support/img/testmuai-logo-dark.svg" alt="TestMu AI" className={`${styles.logoDark} no-zoom`} height="28" />
        </a>

        {/* Search + Ask AI — hidden on mobile */}
        <div className={styles.searchGroup}>
          <div className={styles.searchWrapper}>
            <SearchBar />
          </div>
          <button className={styles.askAiBtn} onClick={openPanel} aria-label="Ask AI">
            <SparkleIcon />
            <span>Ask AI</span>
          </button>
        </div>

        {/* Right buttons — hidden on mobile */}
        <div className={styles.row1Right}>
          <a href="https://github.com/LambdaTest" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <GithubIcon />
            <span>Github</span>
          </a>
          <a href="https://accounts.lambdatest.com/login" className={styles.loginLink}>Login</a>
          <a id="signbtn" href="https://accounts.lambdatest.com/register" className={styles.getStartedBtn}>
            <span>Get Started Free</span> <span className={styles.arrow}>&rsaquo;</span>
          </a>
          <button className={styles.gearBtn} onClick={toggleColorMode} aria-label="Toggle dark mode">
            {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>

        {/* Mobile-only: search + sparkle + menu icons (right side) */}
        <div className={styles.mobileRight}>
          <button className={styles.mobileIconBtn} onClick={openPanel} aria-label="Ask AI">
            <SparkleIcon />
          </button>
          <button className={styles.mobileIconBtn} onClick={toggleColorMode} aria-label="Toggle dark mode">
            {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className={styles.mobileIconBtn}
            onClick={() => setMobileMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      {/* ── Desktop Row 2 (nav links) ── */}
      <div className={styles.row2}>
        <div className={styles.row2Inner}>
          {NAV_LINKS.map(({ to, label, icon: Icon }) => (
            <a
              key={to}
              href={to}
              className={`${styles.navLink} ${isActiveLink(location.pathname, to) ? styles.navLinkActive : ''}`}
            >
              <Icon />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* ── Mobile menu overlay ── */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map(({ to, label, icon: Icon }) => (
            <a
              key={to}
              href={to}
              className={`${styles.mobileMenuLink} ${isActiveLink(location.pathname, to) ? styles.mobileMenuLinkActive : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Icon />
              <span>{label}</span>
            </a>
          ))}
          <div className={styles.mobileMenuDivider} />
          <a href="https://accounts.lambdatest.com/login" className={styles.mobileMenuLink}>Login</a>
          <a id="signbtn-mobile" href="https://accounts.lambdatest.com/register" className={styles.mobileMenuGetStarted}>
            Get Started Free &rsaquo;
          </a>
        </div>
      )}
    </nav>
  );
}
