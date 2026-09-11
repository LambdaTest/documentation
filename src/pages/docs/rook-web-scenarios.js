import { Redirect, useLocation } from '@docusaurus/router';

const anchors = {
  "read-a-scenario-row": "scenarios-read-a-scenario-row",
  "use-the-filters": "scenarios-use-the-filters",
  "empty-catalog-or-empty-filter-result": "scenarios-empty-catalog-or-empty-filter-result"
};

export default function RookDocumentationRedirect() {
  const { hash } = useLocation();
  const key = hash.slice(1);
  const section = Object.prototype.hasOwnProperty.call(anchors, key) ? anchors[key] : "scenarios";
  return <Redirect to={"/support/docs/rook-web-ui/#" + section} />;
}
