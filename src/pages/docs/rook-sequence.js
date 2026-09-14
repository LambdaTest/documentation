import { Redirect, useLocation } from '@docusaurus/router';

const anchors = {
  "first-run-sequence": "test-your-first-agent",
  "interactive-and-shell-surfaces": "continue-after-your-first-test",
  "ask-in-plain-language": "ask-in-plain-language",
  "local-changes-and-sync": "local-changes-and-sync",
  "when-to-repeat-a-step": "when-to-repeat-a-step"
};

export default function RookDocumentationRedirect() {
  const { hash } = useLocation();
  const key = hash.slice(1);
  const section = Object.prototype.hasOwnProperty.call(anchors, key) ? anchors[key] : "continue-after-your-first-test";
  return <Redirect to={"/support/docs/agent-assurance-quickstart/#" + section} />;
}
