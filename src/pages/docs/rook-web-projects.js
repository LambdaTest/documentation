import { Redirect, useLocation } from '@docusaurus/router';

const anchors = {
  "choose-a-project": "projects-choose-a-project",
  "first-use-and-empty-states": "projects-first-use-and-empty-states"
};

export default function RookDocumentationRedirect() {
  const { hash } = useLocation();
  const key = hash.slice(1);
  const section = Object.prototype.hasOwnProperty.call(anchors, key) ? anchors[key] : "projects";
  return <Redirect to={"/support/docs/rook-web-ui/#" + section} />;
}
