import React from 'react';
import DocItem from '@theme-original/DocItem';
import Head from '@docusaurus/Head';
import {DocTrailContext} from '@theme/DocBreadcrumbs';

// Overrides the doc page <title> so it is NOT suffixed with siteConfig.title.
// Docusaurus' useTitleFormatter always renders "<page> | <site>" and has no
// opt-out, so we let the original metadata render (description, keywords,
// og:image) and then re-declare the title last — Helmet keeps the last one.
//
// The title is read from props rather than the useDoc() hook on purpose:
// docusaurus-theme-search-typesense pins @docusaurus/* to ~3.7.0, so a second
// copy of plugin-content-docs is hoisted to the root of node_modules. Site code
// importing useDoc gets that copy, while DocProvider comes from the 3.10.2 copy
// nested under theme-classic — different React contexts, which fails SSG with
// "Hook useDoc is called outside the <DocProvider>".
export default function DocItemWrapper(props) {
  const title = props.content?.metadata?.title;
  // The breadcrumb trail (src/theme/DocBreadcrumbs) reads the doc's permalink and title from this context, for the
  // same reason: no useDoc() in site code.
  return (
    <>
      <DocTrailContext.Provider value={props.content?.metadata || null}>
        <DocItem {...props} />
      </DocTrailContext.Provider>
      {title && (
        <Head>
          <title>{title}</title>
          <meta property="og:title" content={title} />
        </Head>
      )}
    </>
  );
}
