import { Redirect, useLocation } from '@docusaurus/router';

const anchors = {
  "syntax": "rook-whoami-syntax",
  "real-world-uses": "rook-whoami-real-world-uses",
  "state-and-errors": "rook-whoami-state-and-errors"
};

export default function RookDocumentationRedirect() {
  const { hash } = useLocation();
  const key = hash.slice(1);
  const section = Object.prototype.hasOwnProperty.call(anchors, key) ? anchors[key] : "rook-whoami";
  return <Redirect to={"/support/docs/agent-assurance-command-reference/#" + section} />;
}
