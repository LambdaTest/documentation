import { Redirect, useLocation } from '@docusaurus/router';

const anchors = {
  "syntax": "logout-syntax",
  "when-to-use-it": "logout-when-to-use-it",
  "effect": "logout-effect",
  "real-world-account-switch": "logout-real-world-account-switch",
  "common-problems": "logout-common-problems"
};

export default function RookDocumentationRedirect() {
  const { hash } = useLocation();
  const key = hash.slice(1);
  const section = Object.prototype.hasOwnProperty.call(anchors, key) ? anchors[key] : "logout";
  return <Redirect to={"/support/docs/agent-assurance-command-reference/#" + section} />;
}
