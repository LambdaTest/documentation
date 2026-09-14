import { Redirect, useLocation } from '@docusaurus/router';

const anchors = {
  "syntax": "project-syntax",
  "behavior": "project-behavior",
  "why-selection-comes-first": "project-why-selection-comes-first"
};

export default function RookDocumentationRedirect() {
  const { hash } = useLocation();
  const key = hash.slice(1);
  const section = Object.prototype.hasOwnProperty.call(anchors, key) ? anchors[key] : "project";
  return <Redirect to={"/support/docs/agent-assurance-command-reference/#" + section} />;
}
