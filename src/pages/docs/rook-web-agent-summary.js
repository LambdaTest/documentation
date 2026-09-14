import { Redirect, useLocation } from '@docusaurus/router';

const anchors = {
  "check-the-agent-and-source-context": "agent-summary-check-the-agent-and-source-context",
  "inspect-profiles-and-hook-phases": "agent-summary-inspect-profiles-and-hook-phases",
  "interpret-tools-and-missing-values": "agent-summary-interpret-tools-and-missing-values"
};

export default function RookDocumentationRedirect() {
  const { hash } = useLocation();
  const key = hash.slice(1);
  const section = Object.prototype.hasOwnProperty.call(anchors, key) ? anchors[key] : "agent-summary";
  return <Redirect to={"/support/docs/rook-web-ui/#" + section} />;
}
