# Accessibility App Scanner (Overview)

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Accessibility App Scanner is the **manual** mobile app workflow for reviewing accessibility issues on **real Android or iOS devices**, screen by screen, without writing Appium code. Each scan evaluates the current screen against your chosen WCAG rules and returns a list of violations with element context and remediation guidance.

Accessibility scanning supports **native** Android and iOS apps only. **Hybrid apps**, meaning native apps with embedded webview content, are **not supported**. This applies to both App Scanner and Appium-based scanning. To check the web content itself, test the web application directly with [manual accessibility testing in DevTools](/support/docs/accessibility-devtools/) or [web accessibility automation](/support/docs/accessibility-automation-test/).

## When to use this

Reach for App Scanner when you want to inspect app screens interactively rather than through code.

Use App Scanner when you want to **inspect** Android or iOS app screens interactively and validate findings as you move through the app. It is ideal for exploratory passes, design reviews, or reproducing issues filed by users. If you are automating the same checks in a test suite, use the Appium automation workflow instead (see the product boundary section for the direct link).

## Prerequisites

Confirm the following before you start a manual scan.

- Access to **Accessibility** and **App Scanner** for your organization
- A **native** Android or iOS app. Hybrid apps with embedded webview content are not supported
- A **build** of the app you are authorized to test (store build, enterprise IPA/APK, or uploaded artifact per your workflow)
- A **device profile** that matches your audience (OS version, screen size)

## Onboarding: first manual scan

Follow these numbered steps to run your first scan end to end.

1. **Upload or select** the application package in the App Scanner flow (follow in-product prompts for accepted formats).
2. **Pick a real device** pool that matches your target users (OS and locale).
3. **Launch the session** and wait until the app is installed and foregrounded.
4. **Navigate critical journeys** (onboarding, login, checkout, settings). After each major screen stabilizes, trigger the **scan** action the UI provides.
5. **Review issues** in the side panel or overlay, then open each item to see rule text, element context, and suggested remediation where available.
6. **Save or end** the session so results appear under Accessibility **Reports** for dashboard analysis.

**Expected result:** the completed session appears under Accessibility Reports, with each scanned screen listing its violations, rule details, and score, ready for review in the [accessibility testing dashboard](/support/docs/accessibility-testing-navigating-dashboard/).

Optional: run a [screen reader accessibility test](/support/docs/screen-reader-on-accessibility/) pass on the same build for manual confirmation.

## Typical workflow (summary)

At a glance, a manual scan is five repeatable steps.

1. Upload or select the app.
2. Start the device session.
3. Scan important screens manually.
4. Review the issues.
5. Save the report and move into dashboard analysis if needed.

**Expected result:** a saved report you can filter, share, and track over time.

## Product boundary

Pick the workflow that matches how you author your tests.

- **Manual mobile app scanning:** stay on this App Scanner page.
- **Appium code:** use the [Appium native app accessibility automation](/support/docs/accessibility-native-app-automation-test/) workflow.
- **KaneAI-authored flows:** use [KaneAI mobile app accessibility testing](/support/docs/kaneai-mobile-app-accessibility/).

## Scan Configurations

Scan Configurations let you decide exactly which accessibility rules run on a manual mobile app scan before it starts.

Instead of always running the full built-in rule set, you choose a WCAG conformance target, turn rule groups on or off, and hand-pick individual rules. TestMu AI remembers each user's choices and pre-fills them on the next scan.

This brings mobile app accessibility to **parity with web accessibility**, where configurable scans already existed.

### When to use Scan Configurations

Scope a manual scan to only the checks that matter for the screen in front of you.

Use Scan Configurations when you want to run a focused pass, for example a **WCAG 2.1 AA** review, excluding AI-powered rules, or disabling individual rules that do not apply to a screen. Because rules outside the selection are skipped **before** they run on the device, narrower configurations also make scans faster.

### How to configure a scan

Configure the rule set from the scan configuration panel, then run.

1. **Start a mobile app accessibility scan** through the Manual flow.
2. **Open the scan configuration panel.** It loads the **rules catalog** for the selected platform, grouped by category. The first time it is opened, it shows the **system defaults**. After that, it shows your **last-used settings**.
3. **Choose the WCAG version and level** (for example, WCAG 2.1 AA). The rule list automatically narrows to the rules included by that selection.
4. **Toggle the required rule groups**: Best Practice, Beta, AI Detection.
5. **Fine-tune individual rules.** Within each category, switch specific rules on or off. Anything left on is **Enabled**; anything switched off is **Disabled**.
6. **Run the scan.** Only the selected rules are evaluated on the device, and the report contains results for exactly those rules.

**Expected result:** the scan runs only the enabled rules, and the report lists violations for exactly that rule set.

{/* IMAGE PLACEHOLDER: App Scanner home screen with the Scan Settings summary (original screenshot, compressed to under 100 KB). Save the file at the path below, then uncomment.

*/}

### Configuration options details

Each configuration option controls a different slice of the rule set, described below.

{/* IMAGE PLACEHOLDER: scan configuration panel (original screenshot). Save the file at the path below, then uncomment.

*/}

#### WCAG version and level (with inheritance)

Select a single WCAG target such as `wcag2a`, `wcag21aa`, or `wcag22aaa`. The selection is **cumulative**, so higher versions and levels include the lower ones:

- A higher **version** includes the lower ones: choosing **2.1** also brings in all **2.0** rules; choosing **2.2** brings in **2.0 + 2.1**.
- A higher **level** includes the lower ones: choosing **AA** also brings in all **A** rules; choosing **AAA** brings in **A + AA + AAA**.

> **Example:** Selecting **WCAG 2.1 AA** runs every rule whose success criterion is in WCAG **2.0 or 2.1** at level **A or AA**. WCAG 2.2 rules and AAA-only rules are **not** included until the version or level is raised.

#### Rule groups

Some rules carry a special tag in addition to their WCAG criterion. Each tag has its own toggle, and a rule runs only if **both** its WCAG criterion is in range **and** any tag it carries is switched on.

| Toggle | What it controls | Default |
|---|---|---|
| **Best Practice** | Recommendations that go beyond strict WCAG conformance (for example, punctuation or emoji hygiene in labels). | ON |
| **Beta** | Newer rules still being refined (for example, traversal-order and certain contrast or touch-target checks). | ON |
| **AI-powered** | Rules evaluated by AI Detection Agent (for example, *Image in Text* detection). | OFF |

A rule tagged "Best Practice" will **not** run if the Best Practice toggle is off, even if its WCAG criterion is in range. The same applies to Beta and AI-powered rules. If an expected rule does not run, check its group toggle.

#### Individual rules and categories

The catalog is grouped into categories so that coverage can be reasoned about at a glance:

- Accessibility Labels
- Accessible Elements
- Accessible Images
- Color Contrast
- Content Structure
- Display Orientation
- Focus and Navigation
- Input Purpose
- Readable Text and Layout
- Touch Target Size and Spacing

Within any category, individual rules can be switched on or off. **An explicit selection always wins:** if you disable a rule, it will not run even if the WCAG or group settings would otherwise include it.

### Settings are remembered per user

Your scan configuration is persisted on your last saved scan, so you rarely start from scratch.

- Every time you run a scan, the configuration is saved as your **last-used settings**, scoped to **the user account and the platform** (Android and iOS are remembered separately).
- The next time you open the scan configuration panel, it is **pre-filled with the configuration from your most recent scan** on that platform, so you do not repeat the setup.
- Changing settings and running a new scan **updates** your last-used settings to the newest run.
- This is **per user and per platform**: each user's Android and iOS setups are tracked independently, and teammates' setups do not affect one another.

> In short: whatever you configured on your most recent scan becomes the starting point for the next one.

### Defaults for first-time users

If you have never run a configured mobile scan before (no saved settings yet), the panel starts from these **system defaults**. After the first scan, these are replaced by your last-used settings.

| Setting | Default value |
|---|---|
| WCAG version and level | **WCAG 2.1 AA** |
| Best Practice | **ON** |
| Beta | **ON** |
| AI-powered | **OFF** |
| Individual rule selection | None pre-excluded (everything in range is enabled) |

### What to expect in results

The report reflects exactly the configuration you ran, and nothing outside it.

- **Scoped results.** The report contains violations only for the enabled rules. Rules turned off (directly, or through WCAG or group settings) do not appear and do not affect the accessibility score for that scan.
- **Faster scans.** Because disabled rules are skipped **before** they run on the device, narrowing the configuration generally makes scans quicker.
- **Configuration recorded with the test.** The WCAG version, group toggles, and the enabled or disabled rule lists are stored alongside the scan, so the team can always see how a given result was produced. The exact rules applied to a scan are also visible in the report (see [scan configurations via Appium capabilities](/support/docs/accessibility-automation-scan-configurations/#what-to-expect-in-results)).

For common questions, see the [Accessibility FAQ](/support/faq/?tab=accessibility).

## Related docs

Continue with the page most relevant after a manual scan.

- [Tag support for accessibility scans](/support/docs/accessibility-tag-support/)
