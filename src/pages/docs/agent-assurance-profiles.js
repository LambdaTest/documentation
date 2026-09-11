import { Redirect, useLocation } from '@docusaurus/router';

const anchors = {
  "return-the-answer-and-evidence": "hook-output",
  "add-phases-only-where-needed": "lifecycle",
  "before-you-start": "before-you-start",
  "add-a-profile-interactively": "add-a-profile-interactively",
  "generate-from-a-file-or-command": "generate-from-a-file-or-command",
  "inspect-and-test-the-result": "inspect-and-test-the-result",
  "repair-a-profile": "repair-a-profile",
  "keep-credentials-out-of-the-profile": "keep-credentials-out-of-the-profile",
  "review-profiles-in-the-web-ui": "review-profiles-in-the-web-ui"
};

export default function RookDocumentationRedirect() {
  const { hash } = useLocation();
  const key = hash.slice(1);
  const section = Object.prototype.hasOwnProperty.call(anchors, key) ? anchors[key] : "add-a-profile-interactively";
  return <Redirect to={"/support/docs/rook-profiles-and-hooks/#" + section} />;
}
