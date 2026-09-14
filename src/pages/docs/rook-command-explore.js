import { Redirect, useLocation } from '@docusaurus/router';

const anchors = {
  "syntax": "explore-syntax",
  "real-world-examples": "explore-real-world-examples",
  "step-by-step": "explore-step-by-step",
  "state-and-evidence": "explore-state-and-evidence",
  "limitations-and-errors": "explore-limitations-and-errors"
};

export default function RookDocumentationRedirect() {
  const { hash } = useLocation();
  const key = hash.slice(1);
  const section = Object.prototype.hasOwnProperty.call(anchors, key) ? anchors[key] : "explore";
  return <Redirect to={"/support/docs/agent-assurance-command-reference/#" + section} />;
}
