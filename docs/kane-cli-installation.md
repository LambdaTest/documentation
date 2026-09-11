---
id: kane-cli-installation
title: Installing Kane CLI
sidebar_label: Installation
description: Install Kane CLI using npm or Homebrew. Supports macOS (Apple Silicon and Intel), Linux (x64 and arm64), and Windows (x64).
keywords:
  - kane cli
  - install kane cli
  - kaneai
  - testmu ai
  - npm install
  - brew install kane cli
  - homebrew
url: https://www.testmuai.com/support/docs/kane-cli-installation/
site_name: TestMu AI
slug: kane-cli-installation/
canonical: https://www.testmuai.com/support/docs/kane-cli-installation/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.testmuai.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.testmuai.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Kane CLI",
          "item": "https://www.testmuai.com/support/docs/kane-cli-introduction/"
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
      "@id": "https://www.testmuai.com/support/docs/kane-cli-installation/"
    },
    "headline": "Installing Kane CLI",
    "description": "Install Kane CLI using npm or Homebrew. Supports macOS (Apple Silicon and Intel), Linux (x64 and arm64), and Windows (x64).",
    "url": "https://www.testmuai.com/support/docs/kane-cli-installation/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Kane CLI",
    "keywords": [
      "kane cli",
      "install kane cli",
      "kaneai"
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
        "name": "Install (npm)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm install -g @testmuai/kane-cli"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install (Homebrew)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "brew install LambdaTest/kane/kane-cli"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Verify",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "kane-cli --version"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Expected output",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "0.1.0"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Upgrade with",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm install -g @testmuai/kane-cli@latest"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Uninstall",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm uninstall -g @testmuai/kane-cli"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "To wipe that state as well",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "rm -rf ~/.testmuai/kaneai"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Find it and add it",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "# Find your npm global bin directory\nnpm config get prefix\n\n# The kane-cli binary lives in <prefix>/bin on macOS/Linux, and <prefix> on Windows\n# Add it to your PATH in ~/.zshrc or ~/.bashrc\nexport PATH=\"$(npm config get prefix)/bin:$PATH\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Check your version and upgrade if needed",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "node --version"
      }
    ],
    "dateModified": "2026-09-03T14:41:00+05:30"
  }) }}
/>

Kane CLI is published to the public npm registry as `@testmuai/kane-cli` and to a Homebrew tap. Install it with `npm` or `brew` to get the `kane-cli` command on your `PATH`.

## Install

<VerifiedTag value="Verified" />

<Tabs>
<TabItem value="npm" label="npm" default>

Requires Node.js 18 or higher.

```bash
npm install -g @testmuai/kane-cli
```

Platform-specific native binaries are installed automatically for your OS. No additional configuration is needed.

</TabItem>
<TabItem value="homebrew" label="Homebrew">

For macOS and Linux. Node.js is not required.

```bash
brew install LambdaTest/kane/kane-cli
```

Homebrew also installs Google Chrome automatically through the `google-chrome` cask, so no additional setup is needed.

</TabItem>
</Tabs>

:::note
Kane CLI requires **Google Chrome** installed on your system. Chrome is used as the automation browser and is launched automatically when you run a test. The npm install additionally requires **Node.js 18 or higher**. The Homebrew install bundles Chrome for you and needs no Node.js.
:::

## Verify

<VerifiedTag value="Verified" />

```bash
kane-cli --version
```

Expected output:

<VerifiedTag value="Verified" />

```text
0.1.0
```

If the command is not found, your shell is not seeing the npm global `bin` directory. Open a new terminal or update `PATH`, then try again.

## Platform Support

| Platform | Architecture | Supported |
|----------|-------------|-----------|
| macOS | Apple Silicon (ARM) | ✅ |
| macOS | Intel (x64) | ✅ |
| Linux | x64 | ✅ |
| Windows | x64 | ✅ |

:::note
**Mobile testing**, the iOS Simulator and the Android Emulator, is supported on **macOS Apple Silicon (arm64) only** for the initial release. See [Mobile Testing](/support/docs/kane-cli-mobile/) for the simulator and emulator prerequisites.
:::

## Update

Kane CLI checks the npm registry once every 24 hours when you launch it. When a newer version is available, the CLI prints a one-line notification on startup with the current and latest versions. The check runs in the background and never blocks startup.

Upgrade with:

<VerifiedTag value="Verified" />

```bash
npm install -g @testmuai/kane-cli@latest
```

After upgrading, run `kane-cli --version` to confirm the new version is active.

## Uninstall

<VerifiedTag value="Verified" />

```bash
npm uninstall -g @testmuai/kane-cli
```

This removes the `kane-cli` binary but leaves your local data in place. Kane CLI stores credentials, configuration, sessions, and Chrome profile data under `~/.testmuai/kaneai/`. To wipe that state as well:

<VerifiedTag value="Verified" />

```bash
rm -rf ~/.testmuai/kaneai
```

Only do this if you want a clean reset, it logs you out of all profiles and deletes saved configuration, session history, and command history.

## Troubleshooting Installation

**`kane-cli: command not found` after install**

Your npm global bin directory is not in your PATH. Find it and add it:

<VerifiedTag value="Verified" />

```bash
# Find your npm global bin directory
npm config get prefix

# The kane-cli binary lives in <prefix>/bin on macOS/Linux, and <prefix> on Windows
# Add it to your PATH in ~/.zshrc or ~/.bashrc
export PATH="$(npm config get prefix)/bin:$PATH"
```

**Installation fails on Node 16**

Kane CLI requires Node.js 18+. Check your version and upgrade if needed:

<VerifiedTag value="Verified" />

```bash
node --version
```

## Next Step

[Quick Start](/support/docs/kane-cli-quickstart/): Authenticate and run your first test.
