/**
 * Swizzled from @docusaurus/theme-classic DocRoot/Layout/Sidebar.
 *
 * The Skills doc (/support/docs/agent-skills/) is given the SAME dedicated
 * sidebar as the FAQ page: the SharedSidebar (Status / Community / Blog) with a
 * highlighted "Skills" link in place of FAQ's "FAQ" link. Every other doc keeps
 * the default Docusaurus sidebar untouched.
 */
import React from 'react';
import { useLocation } from '@docusaurus/router';
import OriginalDocRootLayoutSidebar from '@theme-original/DocRoot/Layout/Sidebar';
import SharedSidebar from '@site/src/component/SharedSidebar/SharedSidebar';

const SKILLS_PATH = '/support/docs/agent-skills';

// Mirrors FaqSidebarLink from src/pages/faq/index.jsx, relabelled "Skills".
function SkillsSidebarLink() {
  return (
    <a
      href="/support/docs/agent-skills/"
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '6px 16px',
        borderRadius: '6px',
        background: 'rgba(237,95,0,0.08)',
        color: '#ED5F00',
        fontWeight: 600,
        fontSize: '14px',
        textDecoration: 'none',
        lineHeight: '1.5rem',
      }}
    >
      Skills
    </a>
  );
}

export default function DocRootLayoutSidebar(props) {
  const { pathname } = useLocation();
  const normalized = (pathname || '').replace(/\/+$/, '').toLowerCase();

  if (normalized === SKILLS_PATH) {
    return (
      <SharedSidebar>
        <SkillsSidebarLink />
      </SharedSidebar>
    );
  }

  return <OriginalDocRootLayoutSidebar {...props} />;
}
