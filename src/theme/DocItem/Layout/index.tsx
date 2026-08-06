import React, {type ReactNode} from 'react';
import Layout from '@theme-original/DocItem/Layout';
import Head from '@docusaurus/Head';
import CopyPageButton from '@site/src/component/CopyPageButton/CopyPageButton';
import type LayoutType from '@theme/DocItem/Layout';
import type {WrapperProps} from '@docusaurus/types';
import {useLocation} from '@docusaurus/router';
import styles from './styles.module.css';

type Props = WrapperProps<typeof LayoutType>;

function isDocsHomePage(pathname: string): boolean {
  return /^\/support\/docs\/?$/.test(pathname);
}

export default function LayoutWrapper(props: Props): ReactNode {
  const location = useLocation();
  const hideCopyButton = isDocsHomePage(location.pathname);

  // Build canonical using testmu.ai + current path
  const canonical = `https://www.testmuai.com${location.pathname}`;
  return (
    <>
      {canonical && (
        <Head>
          <link rel="canonical" href={canonical} />
        </Head>
      )}
      <div className={styles.docLayoutWrapper}>
        {!hideCopyButton && (
          <div className={styles.copyBtnRow}>
            <CopyPageButton />
          </div>
        )}
        <Layout {...props} />
      </div>
    </>
  );
}