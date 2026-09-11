import { Redirect, useLocation } from '@docusaurus/router';

const anchors = {
  "syntax": "ui-syntax",
  "stage-and-production": "ui-stage-and-production"
};

export default function RookDocumentationRedirect() {
  const { hash } = useLocation();
  const key = hash.slice(1);
  const section = Object.prototype.hasOwnProperty.call(anchors, key) ? anchors[key] : "ui";
  return <Redirect to={"/support/docs/agent-assurance-command-reference/#" + section} />;
}
