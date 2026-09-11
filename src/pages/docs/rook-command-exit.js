import { Redirect, useLocation } from '@docusaurus/router';

const anchors = {};

export default function RookDocumentationRedirect() {
  const { hash } = useLocation();
  const key = hash.slice(1);
  const section = Object.prototype.hasOwnProperty.call(anchors, key) ? anchors[key] : "exit";
  return <Redirect to={"/support/docs/agent-assurance-command-reference/#" + section} />;
}
