---
id: rook-installation
title: Install Rook
hide_title: false
sidebar_label: Install
description: Install a versioned Rook CLI build, verify its checksum and runtime, and diagnose private release download failures.
keywords:
  - install rook cli
  - rook installer
  - rook release archive
url: https://www.testmuai.com/support/docs/rook-installation/
site_name: TestMu AI
slug: rook-installation/
canonical: https://www.testmuai.com/support/docs/rook-installation/
---

# Install Rook

Rook is a single CLI binary that runs inside your agent repository. Versions install side by side so a newer build does not overwrite the previous one.

## Prerequisites

| Requirement | Why |
|---|---|
| Node.js 22 or newer | The only external Rook runtime requirement. Check with `node --version`. |
| TestMu AI account | Supplies authentication and credits. The first-use browser flow takes only a few seconds. |
| Your agent's dependencies | Rook invokes the agent exactly as you would. A CLI, local service, or supporting tool must already be available. |
| Private repository access | Pre-alpha builds are released from the private Rook repository. Use `gh` or a token with repository access. |

You do not need Docker, a cluster, or your own model API key. Model keys remain in the Rook controller.

## Install With One Command

When GitHub CLI is already authenticated:

```bash
curl -fsSL -H "Authorization: Bearer $(gh auth token)" \
  https://raw.githubusercontent.com/LambdatestIncPrivate/rook/stage/scripts/install.sh \
  | bash
```

The repository is private, so both the script fetch and release download require a GitHub token. Without `gh`, export a personal access token with repository access as `ROOK_GITHUB_TOKEN` and use it in the authorization header.

The installer unpacks the build below:

```text
~/.testmuai/rook/versions/<version>/
```

It then links `rook` onto your `PATH`. The version is the commit SHA, matching the controller image built from the same commit.

## Installer Variables

Set these before the pipe:

| Variable | Effect |
|---|---|
| `ROOK_VERSION=<sha>` | Install a specific build instead of the newest available build. |
| `ROOK_PREFIX=<directory>` | Install somewhere other than `~/.testmuai/rook`. |
| `ROOK_GITHUB_TOKEN=<token>` | Authenticate without GitHub CLI. |

## Verify the Installation

```bash
rook --version
rook doctor
```

Then enter an agent repository and start the TUI:

```bash
cd your-project
rook
```

`rook doctor` checks Node.js, the workspace, selected deployment, controller and API reachability, identity, authentication, project selection, TTY mode, and local state.

## Install From a Release Archive

Download a `rook-<sha>.tar.gz` archive from a `cli-<sha>` release tag. With GitHub CLI:

```bash
gh release download \
  --repo LambdatestIncPrivate/rook \
  --pattern '*.tar.gz'
```

Extract, verify, and link the downloaded build:

```bash
tar -xzf rook-<sha>.tar.gz
./rook-<sha>/bin/rook --version

shasum -a 256 -c rook-<sha>.tar.gz.sha256

# macOS with Homebrew
ln -sfn "$PWD/rook-<sha>/bin/rook" /opt/homebrew/bin/rook

# Other common Unix installations
ln -sfn "$PWD/rook-<sha>/bin/rook" /usr/local/bin/rook
```

Do not bypass a checksum mismatch. Delete the archive and download it again from the approved release.

## Release Download Resets

`Recv failure: Connection reset by peer` usually means the release lookup succeeded but the asset download did not. GitHub redirects assets to `release-assets.githubusercontent.com`; a VPN, proxy, or network security layer can interrupt that second hop even when GitHub status is healthy.

The installer retries over HTTP/1.1, then IPv4, and finally through `gh`. If every attempt fails:

1. Check VPN and proxy policy for the release-asset domain.
2. Retry from an approved alternate network.
3. Download the archive manually with `gh release download`.
4. Verify the supplied SHA-256 file before installation.

## Stay Current

```bash
rook update
rook --version
```

`rook update` checks for a newer build and explains how to install it. When a newer version exists, `rook --version` also reports that status.

## Next Step

Continue with [Five Minutes with Rook](/support/docs/agent-assurance-quickstart/).
