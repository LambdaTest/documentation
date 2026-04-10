import React from 'react';
import TOC from '@theme-original/TOC';
import styles from './styles.module.css';

export default function TOCWrapper(props) {
  return (
    <div className={styles.tocWrapper}>
      <div className={styles.tocHeader}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="15" y2="12" />
          <line x1="3" y1="18" x2="9" y2="18" />
        </svg>
        <span>On this page</span>
      </div>
      <TOC {...props} />
    </div>
  );
}
