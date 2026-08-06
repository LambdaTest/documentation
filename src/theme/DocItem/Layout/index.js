import React from 'react';
import Layout from '@theme-original/DocItem/Layout';
import CopyPageButton from '@site/src/component/CopyPageButton/CopyPageButton';
import {useLocation} from '@docusaurus/router';
import styles from './styles.module.css';

function isDocsHomePage(pathname) {
  return /^\/support\/docs\/?$/.test(pathname);
}

export default function LayoutWrapper(props) {
  const location = useLocation();
  const hideCopyButton = isDocsHomePage(location.pathname);

  return (
    <div className={styles.docLayoutWrapper}>
      {!hideCopyButton && (
        <div className={styles.copyBtnRow}>
          <CopyPageButton />
        </div>
      )}
      <Layout {...props} />
    </div>
  );
}
