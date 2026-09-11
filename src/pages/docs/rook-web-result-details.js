import { Redirect, useLocation } from '@docusaurus/router';

const anchors = {
  "request-what-was-sent": "results-request-what-was-sent",
  "response-what-came-back": "results-response-what-came-back",
  "verdict-how-was-it-judged": "results-verdict-how-was-it-judged",
  "artefacts-what-files-support-the-result": "results-artefacts-what-files-support-the-result",
  "share-the-right-context": "results-share-the-right-context"
};

export default function RookDocumentationRedirect() {
  const { hash } = useLocation();
  const key = hash.slice(1);
  const section = Object.prototype.hasOwnProperty.call(anchors, key) ? anchors[key] : "results";
  return <Redirect to={"/support/docs/rook-web-ui/#" + section} />;
}
