---
id: rook-installation
toc_max_heading_level: 2
title: Install Rook
hide_title: false
sidebar_label: Install
description: Install the public Rook CLI with Homebrew, npm, or the checksum-verifying shell installer on macOS and Linux.
keywords:
  - install rook cli
  - rook homebrew
  - rook npm
  - rook install script
  - rook release archive
url: https://www.testmuai.com/support/docs/rook-installation/
site_name: TestMu AI
slug: rook-installation/
canonical: https://www.testmuai.com/support/docs/rook-installation/
---
import VerifiedTag from '@site/src/component/verifiedTag';
import { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Install Rook",
          "item": `${BRAND_URL}/support/docs/rook-installation/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/rook-installation/"
    },
    "headline": "Install Rook",
    "description": "Install the public Rook CLI with Homebrew, npm, or the checksum-verifying shell installer on macOS and Linux.",
    "url": "https://www.testmuai.com/support/docs/rook-installation/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Agent Testing",
    "keywords": [
      "install rook cli",
      "rook homebrew",
      "rook npm"
    ],
    "proficiencyLevel": "Beginner",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Install With Homebrew",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/rook",
        "text": "brew tap LambdaTest/rook https://github.com/LambdaTest/rook.git\nbrew install lambdatest/rook/rook"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "To upgrade a Homebrew installation",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "brew update\nbrew upgrade lambdatest/rook/rook"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install With the Shell Installer",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "curl -fsSL https://raw.githubusercontent.com/LambdaTest/rook/main/install.sh | bash"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Pass installer options after bash -s --",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "# Install the current production release explicitly.\ncurl -fsSL https://raw.githubusercontent.com/LambdaTest/rook/main/install.sh \\\n  | bash -s -- --version 0.1.1\n\n# Link the executable into another writable directory.\ncurl -fsSL https://raw.githubusercontent.com/LambdaTest/rook/main/install.sh \\\n  | bash -s -- --dir \"$HOME/bin\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run the installer with --help to list its supported options",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "curl -fsSL https://raw.githubusercontent.com/LambdaTest/rook/main/install.sh \\\n  | bash -s -- --help"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install With npm",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm install -g @testmuai/rook"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "To upgrade an npm installation",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm update -g @testmuai/rook"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Verify the Installation",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "command -v rook\nrook --version\nrook doctor"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Then enter an agent repository and start the TUI",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "cd your-project\nrook"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Release assets follow this pattern",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "rook-<version>-darwin-arm64.tar.gz\nrook-<version>-darwin-x64.tar.gz\nrook-<version>-linux-arm64.tar.gz\nrook-<version>-linux-x64.tar.gz"
      }
    ],
    "dateModified": "2026-09-07T12:29:55+05:30"
  }) }}
/>

# Install Rook

Rook is publicly available from the [LambdaTest/rook repository](https://github.com/LambdaTest/rook). Install it with Homebrew, the shell installer, or npm. Use one method per machine so an older executable from another method does not take precedence on `PATH`.

## Prerequisites

| Requirement | Why |
|---|---|
| macOS or Linux on arm64 or x64 | These are the platforms supported by the public Homebrew and shell packages. |
| TestMu AI account | Supplies authentication and credits. You can sign in after installation. |
| Your agent's dependencies | Rook invokes the target agent as you would. A local command, service, or supporting tool must already be available. |

The Homebrew and shell packages carry a matching Node.js runtime. You do not need Docker, a cluster, the Rook source code, or your own model API key. If you choose npm, `npm` must already be available to run the install command.

## Install With Homebrew

The public formula is maintained in the [Rook Homebrew tap](https://github.com/LambdaTest/rook/blob/main/Formula/rook.rb).

<VerifiedTag value="Verified" />

```bash
brew tap LambdaTest/rook https://github.com/LambdaTest/rook.git
brew install lambdatest/rook/rook
```

Use the fully qualified `lambdatest/rook/rook` formula name. Homebrew requires a third-party tap formula to be explicitly trusted; `brew install rook` can be rejected as an untrusted formula even after adding the tap.

To upgrade a Homebrew installation:

<VerifiedTag value="Verified" />

```bash
brew update
brew upgrade lambdatest/rook/rook
```

## Install With the Shell Installer

The [public `install.sh` script](https://github.com/LambdaTest/rook/blob/main/install.sh) downloads and verifies the correct release for the current platform.

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

```bash
# Install the current production release explicitly.
curl -fsSL https://raw.githubusercontent.com/LambdaTest/rook/main/install.sh \
  | bash -s -- --version 0.1.1

# Link the executable into another writable directory.
curl -fsSL https://raw.githubusercontent.com/LambdaTest/rook/main/install.sh \
  | bash -s -- --dir "$HOME/bin"
```

Run the installer with `--help` to list its supported options:

<VerifiedTag value="Verified" />

```bash
curl -fsSL https://raw.githubusercontent.com/LambdaTest/rook/main/install.sh \
  | bash -s -- --help
```

The public installer uses `--version` and `--dir` flags and does not require GitHub authentication.

## Install With npm

The [`@testmuai/rook` package](https://www.npmjs.com/package/@testmuai/rook) is public on npm.

<VerifiedTag value="Verified" />

```bash
npm install -g @testmuai/rook
```

To upgrade an npm installation:

<VerifiedTag value="Verified" />

```bash
npm update -g @testmuai/rook
```

The npm package installs the `rook` executable and publishes platform runtime packages with it. If npm reports an engine error, update the Node.js version used to run npm to Node.js 22 or newer.

## Verify the Installation

<VerifiedTag value="Verified" />

```bash
command -v rook
rook --version
rook doctor
```

Then enter an agent repository and start the TUI:

<VerifiedTag value="Verified" />

```bash
cd your-project
rook
```

`rook doctor` checks the CLI version, workspace, production service reachability, identity, authentication, project selection, TTY mode, and local state.

## Public Releases and Checksums

Published versions and platform archives are available on the [Rook releases page](https://github.com/LambdaTest/rook/releases). Release assets follow this pattern:

<VerifiedTag value="Verified" />

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
