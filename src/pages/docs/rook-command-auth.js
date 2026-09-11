import { Redirect, useLocation } from '@docusaurus/router';

const anchors = {
  "syntax": "auth-syntax",
  "step-by-step": "auth-step-by-step",
  "state-and-privacy": "auth-state-and-privacy",
  "common-problems": "auth-common-problems"
};

export default function RookDocumentationRedirect() {
  const { hash } = useLocation();
  const key = hash.slice(1);
  const section = Object.prototype.hasOwnProperty.call(anchors, key) ? anchors[key] : "auth";
  return <Redirect to={"/support/docs/agent-assurance-command-reference/#" + section} />;
}
