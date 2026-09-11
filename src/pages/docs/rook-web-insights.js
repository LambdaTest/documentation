import { Redirect, useLocation } from '@docusaurus/router';

const anchors = {
  "read-each-panel": "insights-read-each-panel",
  "turn-a-summary-into-an-action": "insights-turn-a-summary-into-an-action",
  "when-there-is-no-trend": "insights-when-there-is-no-trend",
  "insights": "insights"
};

export default function RookDocumentationRedirect() {
  const { hash } = useLocation();
  const key = hash.slice(1);
  const section = Object.prototype.hasOwnProperty.call(anchors, key) ? anchors[key] : "insights";
  return <Redirect to={"/support/docs/rook-web-ui/#" + section} />;
}
