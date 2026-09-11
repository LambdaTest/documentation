import { Redirect, useLocation } from '@docusaurus/router';

const anchors = {
  "syntax": "plan-syntax",
  "real-world-use": "plan-real-world-use",
  "what-changes": "plan-what-changes",
  "common-problems": "plan-common-problems"
};

export default function RookDocumentationRedirect() {
  const { hash } = useLocation();
  const key = hash.slice(1);
  const section = Object.prototype.hasOwnProperty.call(anchors, key) ? anchors[key] : "plan";
  return <Redirect to={"/support/docs/agent-assurance-command-reference/#" + section} />;
}
