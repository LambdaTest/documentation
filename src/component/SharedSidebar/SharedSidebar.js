import React from 'react';
import styles from './SharedSidebar.module.css';

const TOP_LINKS = [
  {
    label: 'Status',
    href: 'https://status.lambdatest.io/',
    icon: 'https://d3gk2c5xim1je2.cloudfront.net/v7.1.0/solid/signal.svg',
  },
  {
    label: 'Community',
    href: 'https://community.testmuai.com/',
    icon: 'https://d3gk2c5xim1je2.cloudfront.net/v7.1.0/solid/users.svg',
  },
  {
    label: 'Blog',
    href: 'https://www.testmuai.com/blog/',
    icon: 'https://d3gk2c5xim1je2.cloudfront.net/v7.1.0/solid/newspaper.svg',
  },
];

function MaskIcon({ url }) {
  return (
    <span
      className={styles.icon}
      style={{
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

export default function SharedSidebar({ children }) {
  return (
    <aside id="sidebar-content" className={styles.sidebar}>
      <div className={styles.topLinks}>
        {TOP_LINKS.map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className={styles.topLink}
          >
            <MaskIcon url={icon} />
            <span>{label}</span>
          </a>
        ))}
      </div>

      {children && (
        <>
          <div className={styles.divider} />
          <div className={styles.sidebarContent}>{children}</div>
        </>
      )}
    </aside>
  );
}
