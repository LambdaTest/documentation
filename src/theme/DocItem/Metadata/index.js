import React from 'react';
import Head from '@docusaurus/Head';
import { PageMetadata } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/plugin-content-docs/client';

// Swizzled to drop the " | <siteConfig.title>" suffix that useTitleFormatter
// appends. The doc's own title is emitted verbatim; PageMetadata still handles
// description/keywords/image (no `title` prop, so it emits no title/og:title).
export default function DocItemMetadata() {
  const { metadata, frontMatter, assets } = useDoc();
  return (
    <>
      <PageMetadata
        description={metadata.description}
        keywords={frontMatter.keywords}
        image={assets.image ?? frontMatter.image}
      />
      <Head>
        {metadata.title && <title>{metadata.title}</title>}
        {metadata.title && <meta property="og:title" content={metadata.title} />}
      </Head>
    </>
  );
}
