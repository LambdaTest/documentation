import { Redirect, useLocation } from '@docusaurus/router';

const anchors = {
  "syntax": "run-syntax",
  "examples": "run-examples",
  "lifecycle-phase-selection": "run-lifecycle-phase-selection"
};

export default function RookDocumentationRedirect() {
  const { hash } = useLocation();
  const key = hash.slice(1);
  const section = Object.prototype.hasOwnProperty.call(anchors, key) ? anchors[key] : "run";
  return <Redirect to={"/support/docs/agent-assurance-command-reference/#" + section} />;
}
