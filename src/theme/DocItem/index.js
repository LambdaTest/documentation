import React from 'react';
import DocItem from '@theme-original/DocItem';
import {DocTrailContext} from '@theme/DocBreadcrumbs';

// The breadcrumb trail (src/theme/DocBreadcrumbs) reads the doc's permalink and title from this context instead of
// calling useDoc(), so that component is the same file on stage, testmuCom and lt-docs. On stage (Docusaurus 3.10.2)
// site code can't call useDoc(): a second, hoisted copy of plugin-content-docs fails SSG with
// "Hook useDoc is called outside the <DocProvider>".
export default function DocItemWrapper(props) {
  return (
    <DocTrailContext.Provider value={props.content?.metadata || null}>
      <DocItem {...props} />
    </DocTrailContext.Provider>
  );
}
