import { Redirect, useLocation } from '@docusaurus/router';

const anchors = {
  "structured-output-and-progress": "structured-output-and-progress",
  "exit-codes": "exit-codes",
  "user-configured-environment-variables": "user-configured-environment-variables",
  "hook-context-variables": "hook-context-variables",
  "interactive-keys": "interactive-keys",
  "defaults": "defaults",
  "headless-detection": "headless-detection"
};

export default function RookDocumentationRedirect() {
  const { hash } = useLocation();
  const key = hash.slice(1);
  const section = Object.prototype.hasOwnProperty.call(anchors, key) ? anchors[key] : "structured-output-and-progress";
  return <Redirect to={"/support/docs/agent-assurance-command-reference/#" + section} />;
}
