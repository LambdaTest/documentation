---
id: hyperexecute-release-notes-3-1-2
title: Version 3.1.2
hide_title: false
sidebar_label: Version 3.1.2
description: Version 3.1.2
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FAQs
url: https://www.testmu.ai/support/docs/hyperexecute-release-notes-3-1-2
site_name: LambdaTest
slug: hyperexecute-release-notes-3-1-2
canonical: https://www.testmu.ai/support/docs/hyperexecute-release-notes-3-1-2/
---

import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "item": `${BRAND_URL}/support/docs/hyperexecute-release-notes-3-1-2/`
        }]
      })
    }}
></script>
## Rerun Failed Tests on HyperExecute
Quickly validate fixes without rerunning your entire test suite. With the new Rerun Failed Tests feature, you can relaunch only the failed scenarios or the full suite directly from the dashboard, drastically reducing execution time and improving feedback cycles. Reruns use the same YAML configuration for consistent, reproducible results, with options to pick the same or latest commit and adjust concurrency.

> **Learn more:** Refer to the detailed [Rerun Failed Tests documentation.](/support/docs/hyperexecute-rerun-failed-tests/)

## Snooper Compatibility Update
Snooper is not compatible with Alpine-based Docker images because Alpine uses musl libc instead of glibc, which Snooper requires. To avoid runtime errors or unexpected failures, ensure your images are built on a non-Alpine base that includes glibc. This helps maintain consistent behavior when updating or troubleshooting Docker environments.

> **Learn more:** Refer to the [Snooper documentation](/support/docs/hyperexecute-snooper/).

## View & Verify Code-Signed HyperExecute CLI Binaries
You can now easily verify the authenticity of downloaded HyperExecute CLI binaries using platform-specific code-signing checks. Each release is digitally signed to ensure integrity and trust, with clear instructions for Linux, macOS, and Windows users to validate the signature or certificate before use.

> **Learn more:** Refer to the [Code Signing Verification Guide](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/#verifying-the-authenticity-of-the-cli)