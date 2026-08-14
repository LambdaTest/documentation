---
id: rook-installation
title: Install the Rook CLI
hide_title: false
sidebar_label: Install the CLI
description: Install and authenticate the published Rook CLI without cloning or building the Rook source code.
keywords:
  - install rook cli
  - rook authentication
  - rook installer
url: https://www.testmuai.com/support/docs/rook-installation/
site_name: TestMu AI
slug: rook-installation/
canonical: https://www.testmuai.com/support/docs/rook-installation/
---

# Install the Rook CLI

This page installs the packaged Rook CLI. You do not need to clone the Rook repository, install its source dependencies, start a controller, or build any code.

:::note Current access
Rook is currently distributed from a private GitHub repository. Your GitHub account must be allowed to read <code>LambdatestIncPrivate/rook</code>. This requirement is for downloading the packaged CLI, not for accessing the source during normal use.
:::

## Prerequisites

- macOS or Linux.
- Node.js 20 or newer.
- A LambdaTest account with Rook access.
- GitHub CLI authenticated to an approved GitHub account, or a GitHub token with private-repository read access.
- The runtime needed by your own target agent. For example, a remote HTTP agent must be reachable and a local command agent must be installed on <code>PATH</code>.

Check Node.js:

~~~bash
node --version
~~~

The major version must be 20 or newer.

## Step 1: Authenticate GitHub CLI

If <code>gh</code> is already authenticated, confirm it:

~~~bash
gh auth status
~~~

Otherwise run:

~~~bash
gh auth login
~~~

This login only authorizes the package download from the private repository.

## Step 2: Install the Packaged CLI

Run:

~~~bash
curl -fsSL -H "Authorization: Bearer $(gh auth token)" \
  https://raw.githubusercontent.com/LambdatestIncPrivate/rook/stage/scripts/install.sh | bash
~~~

The installer:

1. Checks for Node.js 20 or newer.
2. Finds the newest Rook CLI release.
3. Downloads and verifies the release archive.
4. Installs it below <code>~/.testmuai/rook/versions/&lt;version&gt;</code>.
5. Links the <code>rook</code> executable into a writable directory on <code>PATH</code>.

If the final message prints a PATH command, run that exact command and open a new terminal.

## Step 3: Verify the CLI

~~~bash
rook --version
rook doctor
~~~

<code>rook doctor</code> checks the CLI version, Node.js, workspace, selected environment, controller reachability, authentication, and terminal support.

## Step 4: Sign In to Rook

Start browser authentication:

~~~bash
rook login
~~~

Or start the interactive terminal and enter <code>/login</code>:

~~~bash
rook
~~~

After the browser flow, verify the account:

~~~bash
rook whoami
~~~

Authentication is global. Multiple Rook terminals on the same machine use the credentials stored below <code>~/.testmuai/rook/</code>.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-whoami.png').default} alt="Rook whoami command help in a terminal" width="1556" height="956" className="doc_img"/>

## Install Without GitHub CLI

Use a GitHub token with repository read access:

~~~bash
export ROOK_GITHUB_TOKEN="<github-token>"

curl -fsSL -H "Authorization: Bearer $ROOK_GITHUB_TOKEN" \
  https://raw.githubusercontent.com/LambdatestIncPrivate/rook/stage/scripts/install.sh | bash
~~~

Avoid putting the token in project files, screenshots, or shared shell history.

## Install a Specific Release

Rook release identifiers use a commit SHA. Pin a known version for CI or a controlled rollout:

~~~bash
export ROOK_VERSION="<commit-sha>"

curl -fsSL -H "Authorization: Bearer $(gh auth token)" \
  https://raw.githubusercontent.com/LambdatestIncPrivate/rook/stage/scripts/install.sh | bash
~~~

Installed versions remain side by side, so installing a new build does not overwrite the previous version directory.

## Update Rook

Run the same installer again, then verify the selected version:

~~~bash
rook --version
rook doctor
~~~

## Troubleshooting

| Symptom | What to do |
|---|---|
| <code>rook: command not found</code> | Run the PATH or link command printed by the installer, then open a new terminal. |
| Node.js version error | Install Node.js 20 or newer and rerun the installer. |
| GitHub returns 401 or 404 | Confirm that the authenticated account can read the private repository. |
| Release asset connection resets | Retry outside the VPN or corporate proxy; the download uses GitHub's release asset CDN. |
| Rook account is not recognized | Run <code>rook login</code>, then <code>rook whoami</code>. |

## Next Step

Continue with [Test Your First Agent](/support/docs/rook-quickstart/). You only need your own PRD, documentation, source workspace, or live endpoint from this point onward.
