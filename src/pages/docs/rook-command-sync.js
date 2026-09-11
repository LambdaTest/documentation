import { Redirect, useLocation } from '@docusaurus/router';

const anchors = {
  "syntax": "sync-syntax",
  "what-sync-records": "sync-what-sync-records",
  "no-op-and-conflict-behavior": "sync-no-op-and-conflict-behavior",
  "run-requirement": "sync-run-requirement"
};

export default function RookDocumentationRedirect() {
  const { hash } = useLocation();
  const key = hash.slice(1);
  const section = Object.prototype.hasOwnProperty.call(anchors, key) ? anchors[key] : "sync";
  return <Redirect to={"/support/docs/agent-assurance-command-reference/#" + section} />;
}
