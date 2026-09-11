import { Redirect, useLocation } from '@docusaurus/router';

const anchors = {
  "interactive-syntax": "mcp-interactive-syntax",
  "headless-syntax": "mcp-headless-syntax",
  "real-world-verification-example": "mcp-real-world-verification-example",
  "trust-and-state": "mcp-trust-and-state",
  "mcp-targets-and-profile-hooks": "mcp-mcp-targets-and-profile-hooks"
};

export default function RookDocumentationRedirect() {
  const { hash } = useLocation();
  const key = hash.slice(1);
  const section = Object.prototype.hasOwnProperty.call(anchors, key) ? anchors[key] : "mcp";
  return <Redirect to={"/support/docs/agent-assurance-command-reference/#" + section} />;
}
