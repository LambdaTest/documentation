---
id: kaneai-smart-locator-priority
title: Smart Locator Priority
hide_title: false
sidebar_label: Smart Locator Priority
description: Learn how to configure Smart Locator Priority in KaneAI Org Product Preferences so your organization can define which locator strategy should take precedence during Smart Locator resolution.
keywords:
  - kaneai smart locator priority
  - locator priority
  - org product preferences
  - kane ai organization settings
  - css selector priority
  - xpath priority
url: https://www.testmuai.com/support/docs/kaneai-smart-locator-priority/
site_name: TestMu AI
slug: kaneai-smart-locator-priority/
canonical: https://www.testmuai.com/support/docs/kaneai-smart-locator-priority/
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
          "name": "KaneAI Smart Locator Priority",
          "item": `${BRAND_URL}/support/docs/kaneai-smart-locator-priority/`
        }]
      })
    }}
></script>

# Smart Locator Priority

Smart Locator Priority lets your organization define the order in which KaneAI should prefer supported locator strategies inside the **Smart Locator** workflow.

This is useful when your application is more stable with one locator type over another and you want that preference applied consistently at the organization level.

## What It Does

Smart Locator currently supports prioritizing these locator strategies:

1. **CSS selector**
2. **XPath**

The locator type placed at the top of the list is given higher priority than the locator types below it.

For example:

- If **CSS selector** is placed above **XPath**, KaneAI will prefer CSS selector first.
- If **XPath** is moved to the top, KaneAI will prefer XPath first.

## Why This Matters

Different applications behave better with different locator strategies.

You may want to adjust the default order if:

- your application generates more stable CSS selectors than XPath expressions
- your current pages rely more heavily on XPath-based resolution
- your team wants one consistent Smart Locator strategy across the organization

## Where to Find It

You can configure Smart Locator Priority from:

1. **Organization Settings**
2. **Org Product Preferences**
3. **Kane AI**
4. **Smart locator priority**

Direct access link:

- [Open Smart Locator Priority in Organization Settings](https://accounts.lambdatest.com/org-settings/kane-ai/smart-locator-priority)

The following screen shows where the setting is located inside Organization Settings:

<img
  loading="lazy"
  src={require('../assets/images/kane-ai/features/smart-locator-priority.png').default}
  alt="Smart Locator Priority in KaneAI Org Product Preferences"
  className="doc_img"
/>

## How to Configure Smart Locator Priority

1. Open **Organization Settings** in <BrandName />.
2. Navigate to **Org Product Preferences**.
3. Expand the **Kane AI** section in the left navigation.
4. Open **Smart locator priority**.
5. Drag and drop the supported locator types into your preferred order.
6. Keep the most preferred locator strategy at the top of the list.

Once updated, the new order becomes the organization-level Smart Locator preference.

## Current Supported Locator Types

At the moment, the UI supports these locator types:

- **CSS selector**
- **XPath**

The design is intended to support additional locator types in the future.

## Organization-Level Behavior

Smart Locator Priority is configured at the organization level so teams can keep one shared preference for locator resolution behavior.

:::note
This setting is intended for organization-wide KaneAI behavior and is typically managed by organization admins.
:::

## Recommended Default Approach

If you do not have a strong reason to change the order, keep the default order that works best for your team’s application stability.

In most cases:

- use **CSS selector** first when your application has stable DOM structure and consistent attributes
- use **XPath** first only when your workflows depend heavily on XPath-based targeting

## Best Practices

- Choose one order for your organization and avoid changing it too frequently.
- Validate the preferred strategy on a few representative KaneAI flows before standardizing it across teams.
- If locator behavior changes after a UI update in your product, review whether the current priority order is still appropriate.

## Limitations

- This setting currently supports only the locator strategies shown in the UI.
- The priority order controls which locator type is preferred first; it does not replace the need for stable page structure and reliable element identification.

## Related Docs

- [Failure Conditions](/support/docs/kaneai-failure-conditions/)
- [KaneAI Command Guide](/support/docs/kane-ai-command-guide/)
- [Custom Instructions in KaneAI Test Generation](/support/docs/generate-test-cases/)
