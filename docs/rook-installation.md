---
id: rook-installation
title: Install and Authenticate Rook
hide_title: false
sidebar_label: Installation and Authentication
description: Install the Rook CLI, authenticate it, verify its environment, update it, or use an isolated local development configuration.
keywords:
  - install rook cli
  - rook authentication
  - rook github installation
  - rook local mode
url: https://www.testmuai.com/support/docs/rook-installation/
site_name: TestMu AI
slug: rook-installation/
canonical: https://www.testmuai.com/support/docs/rook-installation/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": BRAND_URL },
      { "@type": "ListItem", "position": 2, "name": "Support", "item": `${BRAND_URL}/support/docs/` },
      { "@type": "ListItem", "position": 3, "name": "Install Rook", "item": `${BRAND_URL}/support/docs/rook-installation/` }
    ]
  }) }}
/>

# Install and Authenticate Rook

Install Rook on macOS or Linux, then run it from the workspace containing the agent you want to test.

:::note Availability
Rook is currently distributed from a private GitHub repository. Your GitHub account must have access to `LambdatestIncPrivate/rook`.
:::

## Prerequisites

- Node.js 20 or newer.
- A LambdaTest account with Rook access.
- GitHub CLI (`gh`) authenticated to an account that can read the private repository, or a GitHub personal access token with repository read access.
- The runtime required by your target agent. For example, an HTTP agent must already be running, and a command profile must reference an executable available on `PATH`.

Verify Node.js and GitHub authentication:

```bash
node --version
gh auth status
```

## Install the Latest Stage Build

Run:

```bash
curl -fsSL -H "Authorization: Bearer $(gh auth token)" \
  https://raw.githubusercontent.com/LambdatestIncPrivate/rook/stage/scripts/install.sh | bash
```

The installer downloads the latest stage release and unpacks it below `~/.testmuai/rook/versions/<version>`. Installed versions sit side by side, so installing a new version does not overwrite the old directory.

When `/usr/local/bin` or `/opt/homebrew/bin` is writable, the installer links `rook` there. Otherwise, it leaves the executable at `~/.testmuai/rook/bin/rook` and prints an exact command to either add that directory to `PATH` or create a link. Run one of those printed commands; opening a new terminal alone does not change `PATH`.

Then verify the installation:

```bash
rook --version
rook doctor
```

`rook doctor` reports the CLI version, Node.js version, workspace, environment, controller URL, controller reachability, provider availability, authentication state, and TTY status.

## Install Without GitHub CLI

Export a token that can read the private repository and pass it to the download request:

```bash
export ROOK_GITHUB_TOKEN="<github-token>"

curl -fsSL -H "Authorization: Bearer ${ROOK_GITHUB_TOKEN}" \
  https://raw.githubusercontent.com/LambdatestIncPrivate/rook/stage/scripts/install.sh | bash
```

Avoid saving the token in shell history, project files, or screenshots.

## Install a Specific Version

Rook release versions use the commit SHA. Pin a known build by setting `ROOK_VERSION` before the installer:

```bash
export ROOK_VERSION="<commit-sha>"

curl -fsSL -H "Authorization: Bearer $(gh auth token)" \
  https://raw.githubusercontent.com/LambdatestIncPrivate/rook/stage/scripts/install.sh | bash
```

To install under another directory, also set `ROOK_PREFIX`:

```bash
export ROOK_VERSION="<commit-sha>"
export ROOK_PREFIX="$PWD/.tools/rook"

curl -fsSL -H "Authorization: Bearer $(gh auth token)" \
  https://raw.githubusercontent.com/LambdatestIncPrivate/rook/stage/scripts/install.sh | bash
```

## Install from a Release Tarball

Download the newest release with GitHub CLI:

```bash
gh release download --repo LambdatestIncPrivate/rook --pattern '*.tar.gz'
gh release download --repo LambdatestIncPrivate/rook --pattern '*.sha256'
```

Verify the checksum and unpack it:

```bash
shasum -a 256 -c rook-<sha>.tar.gz.sha256
tar -xzf rook-<sha>.tar.gz
./rook-<sha>/bin/rook --version
```

Link the executable onto your `PATH`:

```bash
# macOS with Homebrew
ln -sfn "$PWD/rook-<sha>/bin/rook" /opt/homebrew/bin/rook

# Common Linux location
ln -sfn "$PWD/rook-<sha>/bin/rook" /usr/local/bin/rook
```

Use a directory you can write, or run the link command with the permissions required by your environment.

## Sign In

Start the browser-based authentication flow:

```bash
rook login
```

From the interactive TUI, use:

```text
/login
```

Verify the stored token against the controller:

```bash
rook auth status
```

`rook whoami` is an alias for the same check. To view the current plan and credit balance, run:

```bash
rook plan
```

Authentication is global. Multiple Rook terminals share the state stored in `~/.testmuai/rook/`. Logging out from one terminal affects the others:

```bash
rook logout
```

## Use an Isolated Home Directory

Set `ROOK_HOME` when CI, a second account, or a documentation demo must not share your normal Rook state:

```bash
export ROOK_HOME="$PWD/.rook-ci-home"
rook auth status
```

This redirects global Rook state. Project evidence still goes to `<project>/.testmuai/rook/`.

## Local Development Mode

Local mode bypasses OAuth and uses stubbed credits. It is intended for Rook development, not production agent testing.

Start a locally configured controller, then launch the CLI with:

```bash
export ROOK_ENV=local
export ROOK_AUTH_MODE=local
rook
```

The local controller listens on `http://localhost:8080` by default and still needs at least one configured model provider. `ROOK_AUTH_MODE=local` removes authentication; it does not supply a model key.

<img loading="lazy" src={require('../assets/images/rook/rook-terminal-doctor.png').default} alt="Rook doctor output in local development mode" width="1227" height="520" className="doc_img"/>

## Update or Change Versions

Re-run the installer to install the latest stage build. Use `rook --version` afterward to confirm which version the symlink selects.

Because versions are installed side by side, you can point the symlink back to an earlier directory if a pre-alpha build regresses. Pinning `ROOK_VERSION` is recommended for CI.

## Remove Rook

Remove the executable link and the installed version directory selected by that link. Keep `~/.testmuai/rook/` if you want to preserve authentication, settings, environment values, and session history.

Delete global state only when you intentionally want to remove all Rook credentials and settings. Project evidence under `.testmuai/rook/` is separate and is not removed by uninstalling the executable.

## Next Step

Continue with [Test Your First Agent With Rook](/support/docs/rook-quickstart/).
