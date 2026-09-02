---
id: kaneai-faqs
title: KaneAI FAQs
hide_title: true
sidebar_label: FAQs
description: Frequently asked questions about KaneAI, including supported execution, results, and running tests on sites protected by CAPTCHA or Cloudflare Turnstile.
keywords:
  - KaneAI FAQ
  - KaneAI questions
  - CAPTCHA automation
  - Cloudflare Turnstile
  - whitelist IP
  - HyperExecute
url: https://www.testmuai.com/support/docs/kaneai-faqs/
site_name: TestMu AI
slug: kaneai-faqs/
canonical: https://www.testmuai.com/support/docs/kaneai-faqs/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "KaneAI FAQs",
          "item": `${BRAND_URL}/support/docs/kaneai-faqs/`
        }]
      })
    }}
></script>

# KaneAI FAQs

Answers to common questions about authoring and running tests with KaneAI.

## General

### What does KaneAI run my tests on?

KaneAI runs your tests on real browsers in the cloud on HyperExecute, across multiple operating systems.

### Where can I see my test results?

Every run is saved to Test Manager, and KaneAI gives you a shareable Test Summary link you can send to anyone.

## Bot protection and CAPTCHAs

### Why is my test blocked by a CAPTCHA or Cloudflare challenge?

KaneAI runs your test on a cloud browser. Bot protection such as Cloudflare Turnstile, Google reCAPTCHA, or hCaptcha can classify that cloud session as automated and block it, so a sign up, log in, or checkout step never completes. The verification token is rejected even when the form is filled correctly.

### Can KaneAI solve CAPTCHAs automatically?

No. CAPTCHAs are built to block automation, and no tool can solve them reliably. The reliable approach is to stop the challenge from being served to your test traffic, not to solve it. You do not need to build a separate environment to do this.

### How do I run tests on a site protected by Cloudflare Turnstile?

Use whichever option fits your setup:

1. **Whitelist <BrandName />'s cloud IPs (recommended).** Add <BrandName />'s cloud IP ranges to an allow rule in your security layer, a Cloudflare IP Access rule, a WAF allowlist, or a Turnstile allowlist, scoped to your test domain. Traffic from our cloud browsers is then trusted and the challenge is never shown.
2. **Use a test environment without the live challenge.** On staging or UAT, disable the CAPTCHA or switch it to a testing key. Cloudflare Turnstile provides test keys that always pass, so automation verifies while production stays fully protected.
3. **Allowlist automation with a request header.** If your application supports it, allow a known custom request header on your test environment so requests carrying it skip the challenge. Keep this to test environments only.

:::tip Get your IPs whitelisted
Follow the [TestMu AI Public IP Ranges](/support/docs/testmu-public-ip/) for the current IP ranges and the exact steps.
:::

### Do I need a separate, CAPTCHA free environment?

No. Whitelisting <BrandName />'s cloud IPs in your existing setup is a configuration change, not new infrastructure.

### How do I test an app on a private network or localhost?

Whitelisting only works for applications reachable on the public internet. If your environment is on a private network, behind a VPN, or on localhost, use the [<BrandName /> Tunnel](/support/docs/network-whitelisting-and-tunnel-guide/) instead.
