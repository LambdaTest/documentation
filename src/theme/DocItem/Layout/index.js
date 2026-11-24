import React from 'react';
import Layout from '@theme-original/DocItem/Layout';
import CopyPageButton from '@site/src/component/CopyPageButton/CopyPageButton';
import styles from './styles.module.css';

export default function LayoutWrapper(props) {
  return (
    <div className={styles.docLayoutWrapper}>
      <div className={styles.copyBtnRow}>
        <CopyPageButton />
      </div>
      <Layout {...props} />
    </div>
  );
}
