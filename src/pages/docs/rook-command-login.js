import { Redirect, useLocation } from '@docusaurus/router';

const anchors = {
  "syntax": "login-syntax",
  "choose-the-environment": "login-choose-the-environment",
  "unattended-authentication": "login-unattended-authentication",
  "step-by-step": "login-step-by-step",
  "state-and-security": "login-state-and-security",
  "common-problems": "login-common-problems"
};

export default function RookDocumentationRedirect() {
  const { hash } = useLocation();
  const key = hash.slice(1);
  const section = Object.prototype.hasOwnProperty.call(anchors, key) ? anchors[key] : "login";
  return <Redirect to={"/support/docs/agent-assurance-command-reference/#" + section} />;
}
