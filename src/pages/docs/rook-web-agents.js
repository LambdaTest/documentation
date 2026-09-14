import { Redirect, useLocation } from '@docusaurus/router';

const anchors = {
  "read-the-inventory": "agents-read-the-inventory",
  "resolve-missing-setup": "agents-resolve-missing-setup",
  "agents": "agents"
};

export default function RookDocumentationRedirect() {
  const { hash } = useLocation();
  const key = hash.slice(1);
  const section = Object.prototype.hasOwnProperty.call(anchors, key) ? anchors[key] : "agents";
  return <Redirect to={"/support/docs/rook-web-ui/#" + section} />;
}
