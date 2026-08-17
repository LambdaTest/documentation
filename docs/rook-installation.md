---
id: rook-installation
title: Install the Rook CLI
hide_title: false
sidebar_label: Install the CLI
description: Install the public Rook CLI with npm, the checksummed shell installer, or Homebrew without cloning or building Rook.
keywords:
  - install rook cli
  - rook npm
  - rook homebrew
  - rook installer
url: https://www.testmuai.com/support/docs/rook-installation/
site_name: TestMu AI
slug: rook-installation/
canonical: https://www.testmuai.com/support/docs/rook-installation/
---

# Install the Rook CLI

Rook is publicly available as an npm package, a checksummed platform archive, and a Homebrew formula. You install only the CLI. You do not need to clone the Rook source repository, build Rook, start its backend services, or provide a model API key.

The current public release is **0.1.0**. See the [Rook changelog](https://github.com/LambdaTest/rook/blob/main/CHANGELOG.md) for release notes and later fixes.

:::warning Rook 0.1.0 service availability
As verified on August 17, 2026, the production controller hostname configured in the public 0.1.0 package is not resolvable. Installation, command help, local diagnostics, and the read-only viewer work, but model-backed commands such as <code>/explore</code>, <code>/generate</code>, and <code>/run</code> cannot complete until the production service is available. After installing, use <code>rook doctor</code> and confirm controller availability before starting an end-to-end run.
:::

## Choose an Installation Method

| Method | Best for | Node.js requirement |
|---|---|---|
| npm | Developers who already manage Node.js and npm | Node.js 20 or newer and npm are required to install the package |
| Shell installer | macOS or Linux machines where you do not want to install Node.js | No system Node.js; the archive includes Node.js 24.19.0 |
| Homebrew | macOS or Linux users who manage CLIs with Homebrew | No Node.js prerequisite; the formula installs Node as a dependency but Rook runs on its bundled runtime |

Support differs by installation method:

| Operating system | npm | Shell installer | Homebrew |
|---|---|---|---|
| macOS x64 and arm64 | Supported | Supported | Supported |
| Linux x64 and arm64 | Supported | Supported | Supported |
| Windows x64 | Package published, but not fully validated in 0.1.0 | Not supported | Not supported |
| Windows arm64 | Not supported | Not supported | Not supported |

The npm package publishes a Windows x64 runtime and uses npm's Windows command shim. In version 0.1.0, resolving the bundled Windows runtime is a known gap and has not been fully validated. If you evaluate this path, install Node.js 20 or newer and do not use it as a release gate until startup is confirmed on your machine. The shell release archive contains a POSIX launcher, and the shell installer does not accept Windows. For the fully validated 0.1.0 journey, use macOS, Linux, or WSL.

## Option 1: Install with npm

### Prerequisites

Check Node.js and npm:

~~~bash
node --version
npm --version
~~~

Node.js must be version 20 or newer.

### Install and verify

~~~bash
npm install -g @testmuai/rook
rook --version
rook doctor
~~~

As verified on August 17, 2026, the current release prints:

~~~text
0.1.0
~~~

Update later with:

~~~bash
npm update -g @testmuai/rook
~~~

## Option 2: Install with the Shell Installer

:::warning v0.1.0 pipe-install defect
Do not run the published <code>curl ... | bash</code> one-liner with version 0.1.0. It exits with <code>BASH_SOURCE[0]: unbound variable</code>. Until the changelog records a fix, download the same public script and execute it as a file using the working steps below.
:::

The affected published command is <code>curl -fsSL https://raw.githubusercontent.com/LambdaTest/rook/main/install.sh | bash</code>.

### Download, inspect, and run the script

~~~bash
rook_installer="$(mktemp "${TMPDIR:-/tmp}/rook-install.XXXXXX")"
curl -fsSL https://raw.githubusercontent.com/LambdaTest/rook/main/install.sh \
  -o "$rook_installer" &&
  less "$rook_installer" &&
  bash "$rook_installer"
rm -f "$rook_installer"
~~~

The installer:

1. Detects macOS or Linux and the x64 or arm64 architecture.
2. Resolves the latest public release.
3. Downloads the matching platform archive and its SHA-256 sidecar.
4. Computes the archive checksum locally and refuses a mismatch.
5. Installs the versioned runtime under <code>~/.testmuai/rook-&lt;version&gt;</code>.
6. Creates <code>~/.local/bin/rook</code> by default.

If <code>~/.local/bin</code> is not on <code>PATH</code>, run the PATH command printed by the installer and open a new terminal.

Verify that the bundled runtime works:

~~~bash
rook --version
rook doctor
~~~

### Install a specific version

~~~bash
rook_installer="$(mktemp "${TMPDIR:-/tmp}/rook-install.XXXXXX")"
curl -fsSL https://raw.githubusercontent.com/LambdaTest/rook/main/install.sh \
  -o "$rook_installer" &&
  bash "$rook_installer" --version 0.1.0
rm -f "$rook_installer"
~~~

### Install the command link in another directory

~~~bash
rook_installer="$(mktemp "${TMPDIR:-/tmp}/rook-install.XXXXXX")"
curl -fsSL https://raw.githubusercontent.com/LambdaTest/rook/main/install.sh \
  -o "$rook_installer" &&
  bash "$rook_installer" --dir "$HOME/bin"
rm -f "$rook_installer"
~~~

The versioned runtime still lives under <code>~/.testmuai</code>; <code>--dir</code> changes where the <code>rook</code> command link is created.

## Option 3: Install with Homebrew

Add the public tap and install the fully qualified formula:

~~~bash
brew tap lambdatest/rook https://github.com/LambdaTest/rook.git
brew install lambdatest/rook/rook
~~~

On macOS arm64 and Linux x64, Homebrew pours a precompiled bottle. Intel macOS and Linux arm64 can build the formula from source, so installation takes longer on those platforms.

Rook uses the Node.js runtime bundled into the installed formula, including when Homebrew builds the formula from source. In version 0.1.0, the formula also declares Homebrew Node as a dependency used to run npm during installation, so Homebrew may install or upgrade Node and related packages even when it pours a bottle. You do not need to install Node manually before running the command.

Verify the formula:

~~~bash
rook --version
~~~

Update later with:

~~~bash
brew update
brew upgrade lambdatest/rook/rook
~~~

## Verify the First-Run Environment

Run:

~~~bash
command -v rook
rook --version
rook doctor
~~~

<img loading="lazy" src={require('../assets/images/rook/rook-install-public.png').default} alt="Public Rook 0.1.0 installation verification showing the version and doctor output" width="1280" height="720" className="doc_img"/>

<code>rook doctor</code> prints the installed Rook version, active Node.js runtime version, selected environment, controller and API URLs, workspace, cached authentication state, and TTY availability. It does not label that Node.js process as bundled or system-provided, and it does not by itself prove that the configured controller hostname is reachable. Verify DNS and connectivity if a model-backed command reports a controller error.

## Sign In to Rook

When the production controller is available, start browser authentication:

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

Authentication is global. Multiple Rook terminals on the same machine use credentials stored below <code>~/.testmuai/rook/</code>.

## Release Integrity

The public release process builds the CLI once, generates a changelog, waits for an approved human to authorize publication, and only then publishes npm, GitHub release, and Homebrew artifacts. The shell archives include a bundled runtime and a SHA-256 sidecar; the installer compares the downloaded archive with that published digest before copying release files into place. This detects corruption or unexpected rewriting in transit, but the archive and digest come from the same release origin and do not protect against that origin itself being compromised.

Use these public sources when reviewing an installation:

- [Rook repository](https://github.com/LambdaTest/rook)
- [Release notes](https://github.com/LambdaTest/rook/releases)
- [Changelog](https://github.com/LambdaTest/rook/blob/main/CHANGELOG.md)
- [npm package](https://www.npmjs.com/package/@testmuai/rook)

## Troubleshooting

| Symptom | What to do |
|---|---|
| <code>rook: command not found</code> | Open a new terminal. For the shell installer, add <code>~/.local/bin</code> to <code>PATH</code>. |
| npm reports an unsupported Node.js version | Install Node.js 20 or newer, then repeat the npm installation. |
| The piped shell command reports <code>BASH_SOURCE[0]</code> | Use the download-then-run steps on this page until a later release fixes the v0.1.0 installer. |
| Homebrew proposes Node.js and dependency upgrades | This is current 0.1.0 formula behavior. Review the proposed changes before confirming, or use the shell installer to avoid Homebrew dependencies. |
| The checksum does not match | Do not bypass the check. Delete the download and retry from the public release. |
| <code>/explore</code> reports that the controller is unreachable | Run <code>rook doctor</code> and check DNS for the printed controller host. As verified on August 17, 2026, the public 0.1.0 production endpoint was unavailable. |
| Rook account is not recognized | After the controller is available, run <code>rook login</code>, then <code>rook whoami</code>. |

## Next Step

Continue with [Test Your First Agent](/support/docs/rook-quickstart/) after <code>rook doctor</code> shows the expected environment and the controller is reachable. Your workspace only needs your own PRD, documentation, checked-out source, or live-agent connection details.
