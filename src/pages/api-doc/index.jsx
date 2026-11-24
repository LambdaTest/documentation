import React from 'react';
import { Redirect } from '@docusaurus/router';
import allApisData from '@site/src/data/api/all-apis.json';
import { slugify } from './_ApiDocPage';

function getFirstEndpointPath() {
  for (const api of allApisData.apis) {
    for (const group of api.groups) {
      if (group.endpoints && group.endpoints.length > 0) {
        const ep = group.endpoints[0];
        const apiSlug = slugify(api.name);
        const groupSlug = slugify(group.noHeading ? api.name : group.name);
        const epSlug = slugify(ep.name);
        return `/support/api-doc/${apiSlug}/${groupSlug}/${epSlug}/`;
      }
    }
  }
  return '/support/api-doc/';
}

export default function ApiDoc() {
  return <Redirect to={getFirstEndpointPath()} />;
}
