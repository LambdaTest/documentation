import React, {type ReactNode} from 'react';
import Layout from '@theme-original/DocItem/Layout';
import Head from '@docusaurus/Head';
import type LayoutType from '@theme/DocItem/Layout';
import type {WrapperProps} from '@docusaurus/types';
import {useLocation} from '@docusaurus/router';

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): ReactNode {
  const location = useLocation();

  // Build canonical using testmu.ai + current path
  const canonical = `https://www.testmuai.com${location.pathname}`;
  return (
    <>
    {canonical && (
        <Head>
          <link rel="canonical" href={canonical} />
        </Head>
      )}
      <Layout {...props} />
    </>
  );
}
