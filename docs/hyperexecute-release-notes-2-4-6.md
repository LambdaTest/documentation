---
id: hyperexecute-release-notes-2-4-6
title: Version 2.4.6
hide_title: false
sidebar_label: Version 2.4.6
description: Version 2.4.6
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FAQs
url: https://www.testmu.ai/support/docs/hyperexecute-release-notes-2-4-6/
site_name: LambdaTest
slug: hyperexecute-release-notes-2-4-6
canonical: https://www.testmu.ai/support/docs/hyperexecute-release-notes-2-4-6/
---


import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

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
          "name": "Version",
          "item": `${BRAND_URL}/support/docs/hyperexecute-release-notes-2-4-6/`
        }]
      })
    }}
></script>

## HyperExecute CLI `--runson` flag

The HyperExecute CLI now supports a [`--runson`](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/#--runson) flag, allowing you to override the [`runson`](/support/docs/deep-dive-into-hyperexecute-yaml/#runson) value specified in the YAML configuration file.

### Key Values
- **OS Override**: Overrides the OS value defined in the YAML file's `runson` flag
- **Multi-Mode Support**: Compatible with all execution modes: [AutoSplit](/support/docs/hyperexecute-auto-split-strategy/), [Matrix](/support/docs/hyperexecute-matrix-multiplexing-strategy/), and [Hybrid](/support/docs/hyperexecute-hybrid-strategy/).
- **Multi-OS Specification**: Enables defining multiple operating systems for Matrix and Hybrid modes.

### Usage
Add the `--runson` flag to your HyperExecute CLI command, followed by the desired OS:

```bash
--runson YOUR_OS_NAME
```

> 📕 Read the documentation - [HyperExecute CLI `runson`](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/#--runson) to learn more about it.