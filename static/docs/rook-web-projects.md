# Projects and First Sign-In

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

The **Projects** page is the starting point for reviewing shared Rook tests. Open [stage-rook.lambdatestinternal.com](https://stage-rook.lambdatestinternal.com/) and sign in with the account and organization used by your stage CLI workspace.

For environment selection and authentication, start with [Web UI setup](/support/docs/rook-web-ui/#open-the-right-environment). Signing in to the browser does not sign the CLI in, and vice versa.

## Choose a Project

This short viewport shows the documentation project's entry; other projects are below it. No browser toolbar or desktop is included.

Each project entry shows its name, agent count, run count, user count, and last-accessed date when available. **Last Accessed** is not the time of the latest test result. Click the project name to open its [Agents page](/support/docs/rook-web-agents/). Use pagination when the list spans multiple pages.

There is no project creation form or project search field on this Rook page. Create or select the project in the CLI, then synchronize its agent definitions. Before looking for it in the browser, check:

```bash
export ROOK_ENV=stage
rook whoami
rook project
rook status
rook sync
```

Run these from the intended workspace. If no project exists yet, follow the [quickstart](/support/docs/agent-assurance-quickstart/) to create one and explore an agent first.

## First-Use and Empty States

When no projects are returned, Rook shows a **Get started** view with installation commands, a documentation link, **Schedule a Demo**, and a GitHub link. This is an onboarding state of Projects, not a separate dashboard or a browser-based test generator. Follow [Install Rook](/support/docs/rook-installation/), then the quickstart to publish your first definition.

If you expected an existing project, first check the account, organization, and environment. Stage and production do not share a project list. Also return to the first page if you followed an old paginated URL. Do not create another project just because the expected one is missing.

A loading indicator means the request is still pending. An error with **Retry** is not an empty organization: retry the request and resolve sign-in or access problems before changing your workspace.

## Next Step

Open the project and [choose an agent](/support/docs/rook-web-agents/). To make a local run visible, use the [sync and upload checklist](/support/docs/rook-web-ui/#make-local-work-visible).
