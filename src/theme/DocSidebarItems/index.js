import React from 'react';
import DocSidebarItems from '@theme-original/DocSidebarItems';

const TOP_LINKS = [
  {
    label: 'Status',
    href: 'https://status.lambdatest.io/',
    icon: 'https://d3gk2c5xim1je2.cloudfront.net/v7.1.0/solid/signal.svg',
  },
  {
    label: 'Community',
    href: 'https://community.lambdatest.com/',
    icon: 'https://d3gk2c5xim1je2.cloudfront.net/v7.1.0/solid/users.svg',
  },
  {
    label: 'Blog',
    href: 'https://www.lambdatest.com/blog/',
    icon: 'https://d3gk2c5xim1je2.cloudfront.net/v7.1.0/solid/newspaper.svg',
  },
];

function MaskIcon({ url }) {
  return (
    <svg
      style={{
        width: '16px',
        height: '16px',
        flexShrink: 0,
        backgroundColor: '#9ca3af',
        WebkitMaskImage: `url(${url})`,
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskImage: `url(${url})`,
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
        maskSize: 'contain',
      }}
    />
  );
}

function SidebarTopLinks() {
  return (
    <div style={{ marginBottom: '4px' }}>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {TOP_LINKS.map(({ label, href, icon }) => (
          <li key={label} style={{ listStyle: 'none' }}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '6px 12px',
                fontSize: '14px',
                color: 'var(--ifm-color-emphasis-700)',
                textDecoration: 'none',
                borderRadius: '6px',
                marginBottom: '2px',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--ifm-color-emphasis-900)'; e.currentTarget.style.background = 'var(--ifm-color-emphasis-100)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--ifm-color-emphasis-700)'; e.currentTarget.style.background = 'transparent'; }}
            >
              <MaskIcon url={icon} />
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
      <div style={{ height: '1px', background: 'var(--ifm-color-emphasis-200)', margin: '12px 0 16px' }} />
    </div>
  );
}

export default function DocSidebarItemsWrapper(props) {
  return (
    <>
      {props.level === 1 && <SidebarTopLinks />}
      <DocSidebarItems {...props} />
    </>
  );
}
