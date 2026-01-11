---
id: hyperexecute-release-notes-2-5-2
title: Version 2.5.2
hide_title: false
sidebar_label: Version 2.5.2
description: Version 2.5.2
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FAQs
url: https://www.testmu.ai/support/docs/hyperexecute-release-notes-2-5-2
site_name: LambdaTest
slug: hyperexecute-release-notes-2-5-2
---

import NewReleaseTag from '../src/component/newRelease.js';
import EnhancementTag from '../src/component/enhancementTag';
import BugFixTag from '../src/component/bugFixTag';
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
          "item": `${BRAND_URL}/support/docs/hyperexecute-release-notes-2-5-2/`
        }]
      })
    }}
></script>

## 1. Cypress Detailed Command Logs for Enhanced Debugging <NewReleaseTag value="New Release" /> 
**Detailed Cypress Command Logs** in HyperExecute generate an extensive, human-readable record of all Cypress commands and their corresponding results, both in the console and as a file. It helps narrow down test logs, making debugging and troubleshooting Cypress tests easier.

<img loading="lazy" src={require('../assets/images/hyperexecute/release-notes/detailed-cypress-logs.png').default} style={{width: '600px'}}  alt="HyperExecute" className="doc_img"/> <br /><br />

> 📕 Learn how to enable [Detailed Command Logs](/support/docs/cypress-detailed-command-logs/) for your Cypress tests.

## 2. Parameterized Report Email Handling in YAML <EnhancementTag value="Enhancement" /> 
HyperExecute now supports an enhanced approach for managing multiple email addresses within the YAML configuration file. Previously, you needed to define multiple variables for email addresses (`${email1}`, `${email2}`, etc.). With this update, a single variable can now hold multiple email addresses, separated by commas or underscores, simplifying report sharing. This enhancement eliminates the need for multiple variables, making maintaining and modifying email configurations easier.

> 📕 Check the [Reports documentation](/support/docs/hyperexecute-email-reports/#how-to-dynamically-set-your-email-address) to learn more about it.

## 3. Browser and Selenium Updates for Linux, Windows, and macOS <NewReleaseTag value="New Release" /> 
Updated the browser versions across multiple platforms and upgraded the Selenium jars. This ensures compatibility with the latest features and security updates, improving test stability across different environments.

The following updates are now live:

- **Firefox:** version 129.0
- **Chrome:** version 128.0
- **Selenium Jars:** version 4.24