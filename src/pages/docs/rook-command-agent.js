import { Redirect, useLocation } from '@docusaurus/router';

const anchors = {
  "syntax": "agent-syntax",
  "example": "agent-example"
};

export default function RookDocumentationRedirect() {
  const { hash } = useLocation();
  const key = hash.slice(1);
  const section = Object.prototype.hasOwnProperty.call(anchors, key) ? anchors[key] : "agent";
  return <Redirect to={"/support/docs/agent-assurance-command-reference/#" + section} />;
}
