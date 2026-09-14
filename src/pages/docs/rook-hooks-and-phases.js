import { Redirect, useLocation } from '@docusaurus/router';

const anchors = {
  "run-and-hook-phases": "lifecycle",
  "define-hooks-in-a-profile": "profile-file",
  "hook-input-contract": "hook-inputs",
  "hook-output-contract": "hook-output",
  "timeouts-delays-and-concurrency": "timeouts-and-delayed-evidence",
  "state-between-phases": "state-between-phases",
  "run-only-part-of-the-lifecycle": "run-only-part-of-the-lifecycle"
};

export default function RookDocumentationRedirect() {
  const { hash } = useLocation();
  const key = hash.slice(1);
  const section = Object.prototype.hasOwnProperty.call(anchors, key) ? anchors[key] : "lifecycle";
  return <Redirect to={"/support/docs/rook-profiles-and-hooks/#" + section} />;
}
