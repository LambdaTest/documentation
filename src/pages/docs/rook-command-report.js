import { Redirect, useLocation } from '@docusaurus/router';

const anchors = {
  "syntax": "rook-report-syntax",
  "automation-and-hosted-review": "rook-report-automation-and-hosted-review"
};

export default function RookDocumentationRedirect() {
  const { hash } = useLocation();
  const key = hash.slice(1);
  const section = Object.prototype.hasOwnProperty.call(anchors, key) ? anchors[key] : "rook-report";
  return <Redirect to={"/support/docs/agent-assurance-command-reference/#" + section} />;
}
