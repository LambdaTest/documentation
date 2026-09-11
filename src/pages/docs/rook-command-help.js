import { Redirect, useLocation } from '@docusaurus/router';

const anchors = {
  "syntax": "help-syntax"
};

export default function RookDocumentationRedirect() {
  const { hash } = useLocation();
  const key = hash.slice(1);
  const section = Object.prototype.hasOwnProperty.call(anchors, key) ? anchors[key] : "help";
  return <Redirect to={"/support/docs/agent-assurance-command-reference/#" + section} />;
}
