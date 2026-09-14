import { Redirect, useLocation } from '@docusaurus/router';

const anchors = {
  "review-before-running": "scenario-details-review-before-running",
  "optional-sections": "scenario-details-optional-sections",
  "follow-history-to-the-evidence": "scenario-details-follow-history-to-the-evidence",
  "change-or-run-the-scenario": "scenario-details-change-or-run-the-scenario",
  "scenario-details": "scenario-details"
};

export default function RookDocumentationRedirect() {
  const { hash } = useLocation();
  const key = hash.slice(1);
  const section = Object.prototype.hasOwnProperty.call(anchors, key) ? anchors[key] : "scenario-details";
  return <Redirect to={"/support/docs/rook-web-ui/#" + section} />;
}
