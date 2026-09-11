import { Redirect, useLocation } from '@docusaurus/router';

const anchors = {
  "syntax": "env-syntax",
  "subcommands": "env-subcommands",
  "recommended-secret-flow": "env-recommended-secret-flow",
  "storage-and-scope": "env-storage-and-scope",
  "common-problems": "env-common-problems"
};

export default function RookDocumentationRedirect() {
  const { hash } = useLocation();
  const key = hash.slice(1);
  const section = Object.prototype.hasOwnProperty.call(anchors, key) ? anchors[key] : "env";
  return <Redirect to={"/support/docs/agent-assurance-command-reference/#" + section} />;
}
