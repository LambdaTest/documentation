import { Redirect, useLocation } from '@docusaurus/router';

const anchors = {
  "choose-an-execution": "runs-choose-an-execution",
  "find-a-missing-run": "runs-find-a-missing-run",
  "runs": "runs"
};

export default function RookDocumentationRedirect() {
  const { hash } = useLocation();
  const key = hash.slice(1);
  const section = Object.prototype.hasOwnProperty.call(anchors, key) ? anchors[key] : "runs";
  return <Redirect to={"/support/docs/rook-web-ui/#" + section} />;
}
