# Screen Reader

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

A Screen Reader is an assistive technology tool that converts digital content on screens into audio output or Braille for users with visual impairments. More than a simple text-to-speech tool, it acts as a comprehensive digital interpreter, transforming complex visual interfaces into navigable auditory or tactile experiences. It helps users with visual disabilities to interact with digital content with unprecedented independence and depth.

## Why Do We Need Screen Readers?
Screen readers are essential for making digital environments accessible to visually impaired users. It helps to:

- **Enhance Inclusivity :** Users with visual disabilities can access and interact with websites, applications, and digital content.
- **Support Compliance :** Ensure adherence to accessibility standards like WCAG (Web Content Accessibility Guidelines) and legal regulations such as ADA (Americans with Disabilities Act) or Section 508.
- **Improve Usability :** Highlight areas where the user experience can be improved for all users, not just those with visual impairments.
- **Boost Engagement :** Make websites and applications more usable for a diverse audience, improving user satisfaction and reach.

## Screen Reader Support in TestMu AI Accessibility Testing
TestMu AI supports the following screen readers during Accessibility Testing:

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

## Related docs

- [Accessibility Testing (Overview)](/support/docs/accessibility-testing/)
- [Choosing the Right Accessibility Tool](/support/docs/accessibility-choosing-the-right-tool/)
