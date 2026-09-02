---
id: screen-reader-on-accessibility
title: Screen Reader
sidebar_label: Overview
description: Test your app's accessibility with TestMu AI's Screen Reader as per the WCAG standards.
keywords:
  - screen reader
  - framework on testmu ai
  - accessibility
url: https://www.testmuai.com/support/docs/screen-reader-on-accessibility/
site_name: TestMu AI
slug: screen-reader-on-accessibility/
canonical: https://www.testmuai.com/support/docs/screen-reader-on-accessibility/
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
          "name": "Screen Reader on Accessibility",
          "item": `${BRAND_URL}/support/docs/screen-reader-on-accessibility/`
        }]
      })
    }}
></script>
A Screen Reader is an assistive technology tool that converts digital content on screens into audio output or Braille for users with visual impairments. More than a simple text-to-speech tool, it acts as a comprehensive digital interpreter, transforming complex visual interfaces into navigable auditory or tactile experiences. It helps users with visual disabilities to interact with digital content with unprecedented independence and depth.

## Why Do We Need Screen Readers?
Screen readers are essential for making digital environments accessible to visually impaired users. It helps to:

- **Enhance Inclusivity :** Users with visual disabilities can access and interact with websites, applications, and digital content.
- **Support Compliance :** Ensure adherence to accessibility standards like WCAG (Web Content Accessibility Guidelines) and legal regulations such as ADA (Americans with Disabilities Act) or Section 508.
- **Improve Usability :** Highlight areas where the user experience can be improved for all users, not just those with visual impairments.
- **Boost Engagement :** Make websites and applications more usable for a diverse audience, improving user satisfaction and reach.

## Screen Reader Support in <BrandName /> Accessibility Testing
<BrandName /> supports the following screen readers during Accessibility Testing:

- **NVDA (NonVisual Desktop Access)** – Windows. See [NVDA on Windows](/support/docs/accessibility-nvda-windows/).
- **JAWS (Job Access With Speech)** – Windows. See [JAWS on Windows](/support/docs/accessibility-jaws-windows/).
- **VoiceOver** – macOS. See [VoiceOver on macOS](/support/docs/accessibility-voiceover-macos/).
- **TalkBack** – Android. See [TalkBack on Android](/support/docs/accessibility-talkback-android/).

These tools allow developers and testers to evaluate how well their applications or websites perform for visually impaired users, ensuring accessibility compliance and usability.

## Onboarding: pick a screen reader path

| If you test on… | Start here |
|------------------|------------|
| Windows desktop web | [NVDA on Windows](/support/docs/accessibility-nvda-windows/) (free, common) or [JAWS on Windows](/support/docs/accessibility-jaws-windows/) (enterprise) |
| macOS desktop web | [VoiceOver on macOS](/support/docs/accessibility-voiceover-macos/) |
| Android app or web | [TalkBack on Android](/support/docs/accessibility-talkback-android/) (often paired with [App Scanner](/support/docs/accessibility-app-scanner/)) |

**Suggested order of operations:** run an automated or DevTools scan first, export the top issues, then walk the same URLs with a screen reader to confirm real-world impact before filing engineering bugs.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/accessibility-testing/screen-reader/output.mp4').default} type="video/mp4" />
</video>

## Related docs

- [Accessibility Testing (Overview)](/support/docs/accessibility-testing/)
- [Choosing the Right Accessibility Tool](/support/docs/accessibility-choosing-the-right-tool/)
