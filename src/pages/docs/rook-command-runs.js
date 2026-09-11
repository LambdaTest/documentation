import { Redirect, useLocation } from '@docusaurus/router';

const anchors = {
  "syntax": "runs-syntax",
  "what-it-does": "runs-what-it-does"
};

export default function RookDocumentationRedirect() {
  const { hash } = useLocation();
  const key = hash.slice(1);
  const section = Object.prototype.hasOwnProperty.call(anchors, key) ? anchors[key] : "runs";
  return <Redirect to={"/support/docs/agent-assurance-command-reference/#" + section} />;
}
