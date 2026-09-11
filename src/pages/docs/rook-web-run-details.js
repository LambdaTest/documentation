import { Redirect, useLocation } from '@docusaurus/router';

const anchors = {
  "establish-the-run-context": "run-details-establish-the-run-context",
  "inspect-the-plan": "run-details-inspect-the-plan",
  "check-the-invocation-profile": "run-details-check-the-invocation-profile",
  "open-a-scenario-result": "run-details-open-a-scenario-result"
};

export default function RookDocumentationRedirect() {
  const { hash } = useLocation();
  const key = hash.slice(1);
  const section = Object.prototype.hasOwnProperty.call(anchors, key) ? anchors[key] : "run-details";
  return <Redirect to={"/support/docs/rook-web-ui/#" + section} />;
}
