# Scan Configurations for Mobile App Accessibility (Manual)

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

Scan Configurations let users decide exactly which accessibility rules run on a **manual** mobile app scan before it starts. Instead of always running the full built-in rule set, users choose a WCAG conformance target, turn rule groups on or off, and hand-pick individual rules. TestMu AI remembers each user's choices and pre-fills them on the next scan.

This brings mobile app accessibility to **parity with web accessibility**, where configurable scans already existed.

## When to use this

Use Scan Configurations when users want to scope a manual scan to only the relevant checks - for example, running a focused **WCAG 2.1 AA** pass, excluding AI-powered rules, or disabling individual rules that do not apply to a screen. Because rules outside the selection are skipped **before** they run on the device, narrower configurations also make scans faster.

## How to configure a scan

1. **Start a mobile app accessibility scan** through the Manual flow.
2. **Open the scan configuration panel.** It loads the **rules catalog** for the selected platform, grouped by category. The first time it is opened, it shows the **system defaults**. After that, it shows the user's **last-used settings**.
3. **Choose the WCAG version and level** (for example, WCAG 2.1 AA). The rule list automatically narrows to the rules included by that selection.
4. **Toggle the required rule groups** Best Practice, Beta, AI Detection
5. **Fine-tune individual rules.** Within each category, switch specific rules on or off. Anything left on is **Enabled**; anything switched off is **Disabled**.
6. **Run the scan.** Only the selected rules are evaluated on the device, and the report contains results for exactly those rules.

{/* IMAGE PLACEHOLDER: App Scanner home screen with the Scan Settings summary (original screenshot, compressed to under 100 KB). Save the file at the path below, then uncomment.

*/}

## Configuration Options Details

{/* IMAGE PLACEHOLDER: scan configuration panel (original screenshot). Save the file at the path below, then uncomment.

*/}

### WCAG version and level (with inheritance)

Users select a single WCAG target such as `wcag2a`, `wcag21aa`, or `wcag22aaa`. The selection is **cumulative** higher versions and levels include the lower ones:

- A higher **version** includes the lower ones: choosing **2.1** also brings in all **2.0** rules; choosing **2.2** brings in **2.0 + 2.1**.
- A higher **level** includes the lower ones: choosing **AA** also brings in all **A** rules; choosing **AAA** brings in **A + AA + AAA**.

> **Example:** Selecting **WCAG 2.1 AA** runs every rule whose success criterion is in WCAG **2.0 or 2.1** at level **A or AA**. WCAG 2.2 rules and AAA-only rules are **not** included until the version or level is raised.

### Rule groups

Some rules carry a special tag in addition to their WCAG criterion. Each tag has its own toggle, and a rule runs only if **both** its WCAG criterion is in range **and** any tag it carries is switched on.

| Toggle | What it controls | Default |
|---|---|---|
| **Best Practice** | Recommendations that go beyond strict WCAG conformance (for example, punctuation or emoji hygiene in labels). | ON |
| **Beta** | Newer rules still being refined (for example, traversal-order and certain contrast or touch-target checks). | ON |
| **AI-powered** | Rules evaluated by AI Detention Agent (for example, *Image in Text* detection). | OFF |

A rule tagged "Best Practice" will **not** run if the Best Practice toggle is off, even if its WCAG criterion is in range. The same applies to Beta and AI-powered rules. If an expected rule does not run, check its group toggle.

### Individual rules and categories

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

Within any category, individual rules can be switched on or off. **An explicit selection always wins:** if a user disables a rule, it will not run even if the WCAG or group settings would otherwise include it.

## Settings are remembered per user

Each user's scan configuration is persisted on their last saved scan.

- Every time a user runs a scan, the configuration is saved as that user's **last-used settings**, scoped to **the user account and the platform** (Android and iOS are remembered separately).
- The next time the user opens the scan configuration panel, it is **pre-filled with the configuration from the most recent scan** on that platform, so the setup does not have to be repeated.
- Changing settings and running a new scan **updates** the user's last-used settings to the newest run.
- This is **per user and per platform**: each user's Android and iOS setups are tracked independently, and teammates' setups do not affect one another.

> In short: whatever a user configured on the most recent scan becomes the starting point for the next one.

## Defaults for first-time users

For users who have never run a configured mobile scan before (no saved settings yet), the panel starts from these **system defaults**. After the first scan, these are replaced by the user's last-used settings.

| Setting | Default value |
|---|---|
| WCAG version and level | **WCAG 2.1 AA** |
| Best Practice | **ON** |
| Beta | **ON** |
| AI-powered | **OFF** |
| Individual rule selection | None pre-excluded (everything in range is enabled) |

## What to expect in results

- **Scoped results.** The report contains violations only for the enabled rules. Rules turned off (directly, or through WCAG or group settings) do not appear and do not affect the accessibility score for that scan.
- **Faster scans.** Because disallowed rules are skipped **before** they run on the device, narrowing the configuration generally makes scans quicker.
- **Configuration recorded with the test.** The WCAG version, group toggles, and the enabled or disabled rule lists are stored alongside the scan, so the team can always see how a given result was produced. The exact rules applied to a scan are also visible in the report (see [Scan Configurations via Capabilities (Automation)](/support/docs/accessibility-automation-scan-configurations/#what-to-expect-in-results)).

## FAQ

**Why did a Best Practice rule not run under WCAG 2.1 AA?**
A check runs only if its WCAG criterion is in range **and** every tag it carries is enabled. If the Best Practice toggle is off, Best Practice rules are skipped regardless of WCAG level. Turn the relevant group toggle on.

**Does every scan need to be reconfigured?**
No. The last-used configuration is pre-filled automatically (per platform). Users adjust only what they need and run. The scan must be saved for the configuration to persist.

**Do configuration changes affect teammates?**
No. Settings are saved per user and per platform.

**Why are AI-powered rules off by default?**
They are opt-in by design: AI rules invoke AI evaluation and surface items for manual verification rather than automatic pass/fail. Users enable them when that depth is required.

## Related docs

- [Accessibility App Scanner (Overview)](/support/docs/accessibility-app-scanner/)
- [Scan Configurations via Capabilities (Automation)](/support/docs/accessibility-automation-scan-configurations/)
- [Tag Support for Accessibility Scans](/support/docs/accessibility-tag-support/)
- [Navigating the Dashboard](/support/docs/accessibility-testing-navigating-dashboard/)
