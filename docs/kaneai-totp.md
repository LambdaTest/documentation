---
id: kaneai-totp
title: TOTP Authentication in KaneAI
hide_title: false
sidebar_label: TOTP Authentication
description: This documentation will help you to understand how to use the TOTP Authentication feature while authoring your test cases via KaneAI.
keywords:
  - authenticator
  - totp
  - MFA
  - 2FA
  - authentication
url: https://www.testmu.ai/support/docs/kaneai-totp/
site_name: LambdaTest
slug: kaneai-totp/
canonical: https://www.testmu.ai/support/docs/kaneai-totp/
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
          "name": "TOTP Authentication in KaneAI",
          "item": `${BRAND_URL}/support/docs/kaneai-totp/`
        }]
      })
    }}
></script>
## Introduction

Teams often need to test SSO or MFA‑protected applications where the second factor is a six‑digit OTP. Native TOTP support in KaneAI generates those codes on the fly from the shared secret key, keeps the entire login journey inside KaneAI with identical behavior in Replay, generated code, and CI, and lets you inject the code directly into your test steps—no external scripts or servers required.

## How it works

1. **Register the TOTP secret** once  during authoring via Secret Key.
2. At runtime KaneAI calculates the correct Time-based OTP code every 30 seconds.
3. You can reference the TOPT code as a smart variable inside any test step, assertion, or API call.

<img loading="lazy" src={require('../assets/images/kane-ai/features/SlashTOTP.jpg').default} alt="Add TOTP secret key" className="doc\_img"/>

## Prerequisites

- A TOTP‑compatible login flow (e.g., Google Authenticator, Okta Verify, Microsoft Authenticator).
- The **secret key** (base32 encoded) associated with the account you want KaneAI to log in as.

## Step‑by‑step Guide

### Add a TOTP Secret Key

1. Start a web authoring session from [here](https://www.kaneai.lambdatest.com/objective) and press **/**.
2. Choose **Add TOTP Authentication Key**.
3. Enter the Base32 secret directly or user <BrandName /> Secrets using `{{` syntax.
4. Click **Save**.
5. A **smart variable** gets generated which provides the 6-digit code based on above secret key when invoked.

<img loading="lazy" src={require('../assets/images/kane-ai/features/TOTPKey.jpg').default} alt="Add TOTP secret modal" className="doc\_img"/>

### Insert the TOTP into your test

1. Navigate to the OTP input field in your application.
2. Use the smart variable generated to add your instruction such as "Enter `{{totp}}` in verify field"
3. KaneAI fetches and inserts the 6-digit code.

<img loading="lazy" src={require('../assets/images/kane-ai/features/InsertTOTP.jpg').default} alt="Insert OTP variable" className="doc\_img"/>

## Video Explanation

<iframe src="https://app.trupeer.ai/embed?slug=XmOVbgvrd" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen height="400" width="800"></iframe>

## FAQ

### Does KaneAI store my secret securely?

Yes. Secrets are encrypted, stored in Vault and never exposed in logs or generated code.

### Do mobile tests support TOTP?

Yes. The smart variable generated via secret key `{{totp}}` is available in both Web and Mobile test steps.