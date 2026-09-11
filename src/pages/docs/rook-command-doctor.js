import { Redirect, useLocation } from '@docusaurus/router';

const anchors = {
  "syntax": "doctor-syntax",
  "output": "doctor-output"
};

export default function RookDocumentationRedirect() {
  const { hash } = useLocation();
  const key = hash.slice(1);
  const section = Object.prototype.hasOwnProperty.call(anchors, key) ? anchors[key] : "doctor";
  return <Redirect to={"/support/docs/agent-assurance-command-reference/#" + section} />;
}
