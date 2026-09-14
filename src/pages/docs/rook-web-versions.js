import { Redirect, useLocation } from '@docusaurus/router';

const anchors = {
  "read-a-version": "versions-read-a-version",
  "read-the-call-graph": "versions-read-the-call-graph",
  "when-nothing-is-shown": "versions-when-nothing-is-shown"
};

export default function RookDocumentationRedirect() {
  const { hash } = useLocation();
  const key = hash.slice(1);
  const section = Object.prototype.hasOwnProperty.call(anchors, key) ? anchors[key] : "versions";
  return <Redirect to={"/support/docs/rook-web-ui/#" + section} />;
}
