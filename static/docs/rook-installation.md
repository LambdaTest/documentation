# Install Rook

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Rook is publicly available from the [LambdaTest/rook repository](https://github.com/LambdaTest/rook). Install it with Homebrew, the shell installer, or npm. Use one method per machine so an older executable from another method does not take precedence on `PATH`.

The latest public release checked on September 11, 2026 was [v0.1.3](https://github.com/LambdaTest/rook/releases/tag/v0.1.3). The npm package, Homebrew formula, and GitHub release archive agree on this version.

## Prerequisites

| Requirement | Why |
|---|---|
| macOS or Linux on arm64 or x64 | These are the platforms supported by the public Homebrew and shell packages. |
| TestMu AI account | Supplies authentication and credits. You can sign in after installation. |
| Your agent's dependencies | Rook invokes the target agent as you would. A local command, service, or supporting tool must already be available. |

The Homebrew and shell packages carry a matching Node.js runtime. You do not need Docker, a cluster, the Rook source code, or your own model API key. If you choose npm, `npm` must already be available to run the install command.

## Install With Homebrew

The public formula is maintained in the [Rook Homebrew tap](https://github.com/LambdaTest/rook/blob/main/Formula/rook.rb).

```bash
brew tap LambdaTest/rook https://github.com/LambdaTest/rook.git
brew install lambdatest/rook/rook
```

Use the fully qualified `lambdatest/rook/rook` formula name. Homebrew requires a third-party tap formula to be explicitly trusted; `brew install rook` can be rejected as an untrusted formula even after adding the tap.

To upgrade a Homebrew installation:

```bash
brew update
brew upgrade lambdatest/rook/rook
```

## Install With the Shell Installer

The [public `install.sh` script](https://github.com/LambdaTest/rook/blob/main/install.sh) downloads and verifies the correct release for the current platform.

```bash
curl -fsSL https://raw.githubusercontent.com/LambdaTest/rook/main/install.sh | bash
```

The public installer:

1. Detects macOS or Linux and the arm64 or x64 architecture.
2. Finds the latest public [GitHub release](https://github.com/LambdaTest/rook/releases/latest).
3. Downloads the matching archive and its SHA-256 sidecar.
4. Verifies the archive before extracting it.
5. Installs the release under `~/.testmuai/rook-VERSION/`, where `VERSION` is the selected semantic release.
6. Links `rook` into `~/.local/bin` by default.

If `~/.local/bin` is not on `PATH`, the installer prints the exact export command to add. Run it and open a new terminal.

### Pin a release or change the binary directory

Pass installer options after `bash -s --`:

```bash
# Pin the release verified for this guide.
curl -fsSL https://raw.githubusercontent.com/LambdaTest/rook/main/install.sh \
| bash -s -- --version 0.1.3

# Link the executable into another writable directory.
curl -fsSL https://raw.githubusercontent.com/LambdaTest/rook/main/install.sh \
| bash -s -- --dir "$HOME/bin"
```

Run the installer with `--help` to list its supported options:

```bash
curl -fsSL https://raw.githubusercontent.com/LambdaTest/rook/main/install.sh \
| bash -s -- --help
```

The public installer uses `--version` and `--dir` flags and does not require GitHub authentication.

## Install With npm

The [`@testmuai/rook` package](https://www.npmjs.com/package/@testmuai/rook) is public on npm.

```bash
npm install -g @testmuai/rook
```

To upgrade an npm installation:

```bash
npm update -g @testmuai/rook
```

The npm package installs the `rook` executable and publishes platform runtime packages with it. If npm reports an engine error, update the Node.js version used to run npm to Node.js 22 or newer.

### Repair an npm 0.1.1 or 0.1.2 installation

The 0.1.3 release fixes the npm update path. If an older install cannot update normally, use the public registry explicitly:

```bash
npm install -g @testmuai/rook@0.1.3 \
--registry=https://registry.npmjs.org \
--@testmuai:registry=https://registry.npmjs.org
```

Then run command -v rook and rook --version to make sure another installation is not shadowing it.

## Verify the Installation

```bash
command -v rook
rook --version
rook doctor
```

Then enter an agent repository and start the TUI:

```bash
cd your-project
rook
```

`rook doctor` checks the CLI version, workspace, production service reachability, identity, authentication, project selection, TTY mode, and local state.

## Public Releases and Checksums

Published versions and platform archives are available on the [Rook releases page](https://github.com/LambdaTest/rook/releases). Release assets follow this pattern:

```text
rook-<version>-darwin-arm64.tar.gz
rook-<version>-darwin-x64.tar.gz
rook-<version>-linux-arm64.tar.gz
rook-<version>-linux-x64.tar.gz
```

Each archive has a matching `.sha256` file. Do not bypass a checksum mismatch; delete both downloads and fetch them again from the public release.

## Troubleshoot Installation

| Symptom | What to do |
|---|---|
| `rook: command not found` | Add the installer directory to `PATH`, open a new terminal, and run `command -v rook`. |
| Homebrew refuses to load an untrusted formula | Install the fully qualified `lambdatest/rook/rook` formula. |
| Unsupported OS or architecture | Use macOS or Linux on arm64 or x64. On Windows, run Rook from WSL. |
| Release download is reset | Allow GitHub and `release-assets.githubusercontent.com` through the VPN or proxy, then retry. |
| Checksum verification fails | Delete the archive and checksum file. Download them again; never install an unverified archive. |
| npm reports an engine mismatch | Run npm with Node.js 22 or newer, then retry the global install. |

If a public install path still fails, [open a Rook issue](https://github.com/LambdaTest/rook/issues/new/choose) with the OS, architecture, install method, and full error output.

## Next Step

Continue with [How to Get Started With Agent Assurance](/support/docs/agent-assurance-quickstart/).

## Open the Local or Hosted UI {#select-the-web-ui-environment}

The public CLI includes the local viewer: from an agent workspace, run `rook ui --local`. No separate frontend installation or browser login is needed. Open the printed loopback URL and keep the serving process running. It reads existing workspace files; follow the quickstart first if you have not created any test data.

The same public CLI works with production and stage. Its default is production; rook ui opens [rook.testmuai.com](https://rook.testmuai.com). To use the [stage Web UI](https://stage-rook.lambdatestinternal.com/), set export ROOK_ENV=stage before login and project operations. You do not need a private package or a source-repository installation.

See [local versus hosted review](/support/docs/rook-web-ui/#choose-your-ui) for the data, sign-in, and sharing differences.
