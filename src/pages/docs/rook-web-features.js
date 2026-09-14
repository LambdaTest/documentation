import { Redirect, useLocation } from '@docusaurus/router';

const anchors = {
  "connect-behaviors-to-tests": "features-connect-behaviors-to-tests",
  "read-feature-details": "features-read-feature-details",
  "add-missing-coverage": "features-add-missing-coverage",
  "features": "features"
};

export default function RookDocumentationRedirect() {
  const { hash } = useLocation();
  const key = hash.slice(1);
  const section = Object.prototype.hasOwnProperty.call(anchors, key) ? anchors[key] : "features";
  return <Redirect to={"/support/docs/rook-web-ui/#" + section} />;
}
