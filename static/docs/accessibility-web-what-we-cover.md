# Accessibility Checklist

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

See which WCAG-aligned checks the product supports on each platform, with links to rule-level guidance, plus a manual test checklist for areas that benefit from human review. Select a platform tab below.

Use these tables to see **which WCAG-aligned checks the product supports** (with links to rule-level guidance) and a **manual test checklist** for areas that benefit from human review. For deeper remediation after a scan, use the [Web Rule Repository](/support/docs/accessibility-rule-repository/).

### Supported (rules in this product)

Each row links to the rule doc for that check. Configuration may limit which WCAG version or level runs in your project.

| WCAG | Rule | Doc |
|------|------|-----|
| 1.1.1 | Non-text Content | [Rule](/support/docs/accessibility-rule-repository/) |
| 1.3.1 | Info and Relationships | [Rule](/support/docs/accessibility-rule-repository/) |
| 1.3.4 | Orientation | [Rule](/support/docs/accessibility-rule-repository/) |
| 1.4.1 | Use of Color | [Rule](/support/docs/accessibility-rule-repository/) |
| 1.4.2 | Audio Control | [Rule](/support/docs/accessibility-rule-repository/) |
| 1.4.3 | Contrast (Minimum) | [Rule](/support/docs/accessibility-rule-repository/) |
| 1.4.10 | Reflow | [Rule](/support/docs/accessibility-rule-repository/) |
| 1.4.11 | Non-text Contrast | [Rule](/support/docs/accessibility-rule-repository/) |
| 1.4.12 | Text Spacing | [Rule](/support/docs/accessibility-rule-repository/) |
| 2.1.1 | Keyboard | [Rule](/support/docs/accessibility-rule-repository/) |
| 2.1.2 | No Keyboard Trap | [Rule](/support/docs/accessibility-rule-repository/) |
| 2.1.4 | Character Key Shortcuts | [Rule](/support/docs/accessibility-rule-repository/) |
| 2.2.1 | Timing Adjustable | [Rule](/support/docs/accessibility-rule-repository/) |
| 2.2.2 | Pause, Stop, Hide | [Rule](/support/docs/accessibility-rule-repository/) |
| 2.3.1 | Three Flashes or Below Threshold | [Rule](/support/docs/accessibility-rule-repository/) |
| 2.4.1 | Bypass Blocks | [Rule](/support/docs/accessibility-rule-repository/) |
| 2.4.2 | Page Titled | [Rule](/support/docs/accessibility-rule-repository/) |
| 2.4.3 | Focus Order | [Rule](/support/docs/accessibility-rule-repository/) |
| 2.4.4 | Link Purpose (In Context) | [Rule](/support/docs/accessibility-rule-repository/) |
| 2.4.7 | Focus Visible | [Rule](/support/docs/accessibility-rule-repository/) |
| 2.4.11 | Focus Not Obscured (Minimum) | [Rule](/support/docs/accessibility-rule-repository/) |
| 2.5.1 | Pointer Gestures | [Rule](/support/docs/accessibility-rule-repository/) |
| 2.5.2 | Pointer Cancellation | [Rule](/support/docs/accessibility-rule-repository/) |
| 2.5.3 | Label in Name | [Rule](/support/docs/accessibility-rule-repository/) |
| 2.5.4 | Motion Actuation | [Rule](/support/docs/accessibility-rule-repository/) |
| 2.5.7 | Dragging Movements | [Rule](/support/docs/accessibility-rule-repository/) |
| 2.5.8 | Target Size (Minimum) | [Rule](/support/docs/accessibility-rule-repository/) |
| 3.2.1 | On Focus | [Rule](/support/docs/accessibility-rule-repository/) |
| 3.2.2 | On Input | [Rule](/support/docs/accessibility-rule-repository/) |
| 3.2.6 | Consistent Help | [Rule](/support/docs/accessibility-rule-repository/) |
| 3.3.1 | Error Identification | [Rule](/support/docs/accessibility-rule-repository/) |
| 3.3.2 | Labels or Instructions | [Rule](/support/docs/accessibility-rule-repository/) |
| 3.3.7 | Redundant Entry | [Rule](/support/docs/accessibility-rule-repository/) |
| 3.3.8 | Accessible Authentication (Minimum) | [Rule](/support/docs/accessibility-rule-repository/) |
| 4.1.1 | Parsing (obsolete in WCAG 2.2) | [Rule](/support/docs/accessibility-rule-repository/) |
| 4.1.2 | Name, Role, Value | [Rule](/support/docs/accessibility-rule-repository/) |
| 4.1.3 | Status Messages | [Rule](/support/docs/accessibility-rule-repository/) |

### Manual test checklist

Use this checklist for **quality beyond automated rules**: keyboard journeys, media, language, and judgment-heavy success criteria. Pair it with [WCAG 2.2 Understanding](https://www.w3.org/WAI/WCAG22/Understanding/) and your own test plan.

| Area | Manual verification focus |
|------|---------------------------|
| **1.2.x Time-based media** | Captions, audio description, transcripts, sign language. Exercise with real media workflows and tooling. |
| **1.3.2 Meaningful sequence · 1.3.3 Sensory characteristics · 1.3.5 Identify input purpose** | Reading order, instructions, autofill semantics. Design and assisted-tech review. |
| **1.4.4 Resize text · 1.4.5 Images of text · 1.4.13 Content on hover or focus** | Zoom, images-of-text, hover layers. Interactive and visual testing. |
| **Full keyboard operability & real focus behavior** | Automated rules support you; still walk critical paths with keyboard only and assistive technologies. |
| **2.4.5–2.4.6, 2.4.8–2.4.10** | Multiple ways, headings/labels (extended), location. Document expectations and verify in session. |
| **2.2.3–2.2.6 · 2.3.2–2.3.3** | Extended timing and motion. Validate against your UX and policy. |
| **3.1.x Language of parts, unusual words, reading level** | Localization and plain language. Content and engineering review. |
| **3.3.3–3.3.6 Error suggestion / prevention** | Error helpfulness and legal safeguards. Review with design and compliance. |
| **AAA success criteria** | Optional stretch goals. Plan explicitly if AAA is in scope; default automation targets A/AA-style coverage. |

### Related docs

- [Web Rule Repository](/support/docs/accessibility-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)

Use these tables to see **which rules App Scanner / automation can report** (with links to rule-level guidance) and a **manual test checklist** for areas best validated by people. For remediation detail, use the [iOS Rule Repository](/support/docs/accessibility-rule-repository/).

### Supported (rules in this product)

| Rule | WCAG (maps) | Doc |
|------|-------------|-----|
| Missing Accessibility Labels | 4.1.2 | [Rule](/support/docs/accessibility-rule-repository/) |
| Color Contrast Issues | 1.4.3 | [Rule](/support/docs/accessibility-rule-repository/) |
| Touch Target Sizing | 2.5.5 | [Rule](/support/docs/accessibility-rule-repository/) |
| Assistive Technology Access | 4.1.2 | [Rule](/support/docs/accessibility-rule-repository/) |
| Text Truncation Issues | 1.4.4 | [Rule](/support/docs/accessibility-rule-repository/) |
| Accessibility Role Definition | 4.1.2 | [Rule](/support/docs/accessibility-rule-repository/) |
| Dynamic Type Support | 1.4.4 | [Rule](/support/docs/accessibility-rule-repository/) |
| Accessibility Label Not Punctuated | 3.3.2 | [Rule](/support/docs/accessibility-rule-repository/) |
| Missing Image Element Label | 1.1.1 | [Rule](/support/docs/accessibility-rule-repository/) |
| Missing Button Element Label | 4.1.2 | [Rule](/support/docs/accessibility-rule-repository/) |
| Button Element Capitalisation Check | 3.1.6 | [Rule](/support/docs/accessibility-rule-repository/) |
| Missing Checkbox Element Label | 4.1.2 | [Rule](/support/docs/accessibility-rule-repository/) |
| Missing Editable Element Label | 4.1.2 | [Rule](/support/docs/accessibility-rule-repository/) |
| Missing Switch Element Label | 4.1.2 | [Rule](/support/docs/accessibility-rule-repository/) |
| Duplicate Accessibility Label | 4.1.2 | [Rule](/support/docs/accessibility-rule-repository/) |
| Emoji or Symbol Used in Accessibility Label | Best Practice | [Rule](/support/docs/accessibility-rule-repository/) |
| Fixed Orientation Lock | 1.3.4 | [Rule](/support/docs/accessibility-rule-repository/) |
| Images with Text | 1.1.1 | [Rule](/support/docs/accessibility-rule-repository/) |
| Insufficient Touch Target Spacing | 2.5.8 | [Rule](/support/docs/accessibility-rule-repository/) |
| Interactive Role Undefined | 4.1.2 | [Rule](/support/docs/accessibility-rule-repository/) |
| Invalid Range Values | 4.1.2 | [Rule](/support/docs/accessibility-rule-repository/) |
| Meaningful Sequence | 1.3.2 | [Rule](/support/docs/accessibility-rule-repository/) |
| Minimum Text Size | Best Practice | [Rule](/support/docs/accessibility-rule-repository/) |
| Mismatched Label Text *(Beta)* | 2.5.3 | [Rule](/support/docs/accessibility-rule-repository/) |
| Misplaced Field Label *(Beta)* | 2.5.3 | [Rule](/support/docs/accessibility-rule-repository/) |
| Non-accessible Interaction | 4.1.2 | [Rule](/support/docs/accessibility-rule-repository/) |
| Non-Descriptive Link Text | 2.4.4 | [Rule](/support/docs/accessibility-rule-repository/) |
| Overlapping Interactive Elements | 2.5.5 | [Rule](/support/docs/accessibility-rule-repository/) |
| Redundant Role Keyword in Accessibility Label | 4.1.2 | [Rule](/support/docs/accessibility-rule-repository/) |
| Redundant State Keyword in Accessibility Label | 4.1.2 | [Rule](/support/docs/accessibility-rule-repository/) |
| Traversal Order Does Not Match Visual Layout | 2.4.3 | [Rule](/support/docs/accessibility-rule-repository/) |
| Two-Dimensional Scrolling Required | 1.4.10 | [Rule](/support/docs/accessibility-rule-repository/) |
| Unique Option Names | 4.1.2 | [Rule](/support/docs/accessibility-rule-repository/) |

### Manual test checklist

Plan extra time for **VoiceOver**, **Switch Control**, **device rotation**, and real-world flows (media, authentication, motion) even when automation is green. Use [Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/) and Apple's Human Interface Guidelines alongside this list.

| Area | Manual verification focus |
|------|---------------------------|
| **1.2.x Time-based media** | In-app video/audio (captions, descriptions, live captions): validate with real content. |
| **1.3.2–1.3.5 structure & input purpose** | Meaningful sequence, sensory-only instructions, orientation lock justification, `UITextContentType` / WebView `lang`: design and assistive-tech pass. |
| **2.x keyboard / focus / timing (full)** | Complete tasks with VoiceOver and hardware keyboard; session timeouts and motion: exercise beyond rule snapshots. |
| **3.x language, errors, help** | Error suggestion quality, legal safeguards, help consistency: product and compliance review. |
| **AAA criteria** | Optional stretch goals: schedule only when AAA is explicitly in scope. |

### Related docs

- [iOS Rule Repository](/support/docs/accessibility-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)

Use these tables to see **which rules App Scanner / automation can report** (with links to rule-level guidance) and a **manual test checklist** for areas best validated by people. For remediation detail, use the [Android Rule Repository](/support/docs/accessibility-rule-repository/).

### Supported (rules in this product)

| Rule | WCAG (maps) | Doc |
|------|-------------|-----|
| Interactive Role Undefined | 4.1.2 | [Rule](/support/docs/accessibility-rule-repository/) |
| Missing Image Alt | 1.1.1 | [Rule](/support/docs/accessibility-rule-repository/) |
| Missing View Accessibility | 4.1.2 | [Rule](/support/docs/accessibility-rule-repository/) |
| Unlabeled Checkbox Element | 4.1.2 | [Rule](/support/docs/accessibility-rule-repository/) |
| Insufficient Color Ratio | 1.4.3 | [Rule](/support/docs/accessibility-rule-repository/) |
| Missing Field Label | 3.3.2 | [Rule](/support/docs/accessibility-rule-repository/) |
| Non-accessible Interaction | 4.1.2 | [Rule](/support/docs/accessibility-rule-repository/) |
| Missing Screen Title | 2.4.2 | [Rule](/support/docs/accessibility-rule-repository/) |
| Unlabeled Toggle Control | 4.1.2 | [Rule](/support/docs/accessibility-rule-repository/) |
| Mismatched Label Text *(Beta)* | 2.5.3 | [Rule](/support/docs/accessibility-rule-repository/) |
| Missing Input Value | 4.1.2 | [Rule](/support/docs/accessibility-rule-repository/) |
| Inaccessible Text Focus | 4.1.2 | [Rule](/support/docs/accessibility-rule-repository/) |
| Misplaced Field Label *(Beta)* | 2.5.3 | [Rule](/support/docs/accessibility-rule-repository/) |
| Nested Control Issues | 4.1.2 | [Rule](/support/docs/accessibility-rule-repository/) |
| Unnamed Nested Element | 4.1.2 | [Rule](/support/docs/accessibility-rule-repository/) |
| Fixed Orientation Lock | 1.3.4 | [Rule](/support/docs/accessibility-rule-repository/) |
| Undersized Touch Target | 2.5.5 | [Rule](/support/docs/accessibility-rule-repository/) |
| Insufficient Target Spacing | 2.5.5 | [Rule](/support/docs/accessibility-rule-repository/) |
| Duplicate Accessibility Label | 4.1.2 | [Rule](/support/docs/accessibility-rule-repository/) |
| Button Element Capitalisation Check | 3.1.6 | [Rule](/support/docs/accessibility-rule-repository/) |
| Emoji or Symbol Used in Accessibility Label | Best Practice | [Rule](/support/docs/accessibility-rule-repository/) |
| Redundant State Keyword in Accessibility Label | 4.1.2 | [Rule](/support/docs/accessibility-rule-repository/) |
| Redundant Role Keyword in Accessibility Label | 4.1.2 | [Rule](/support/docs/accessibility-rule-repository/) |
| Non-Descriptive Link Text | 2.4.4 | [Rule](/support/docs/accessibility-rule-repository/) |
| Traversal Order Does Not Match Visual Layout *(Beta)* | 2.4.3 | [Rule](/support/docs/accessibility-rule-repository/) |
| Dynamic Type Support | 1.4.4 | [Rule](/support/docs/accessibility-rule-repository/) |
| Non-Responsive Container Clips Text | 1.4.10 | [Rule](/support/docs/accessibility-rule-repository/) |
| Unique Option Names | 4.1.2 | [Rule](/support/docs/accessibility-rule-repository/) |
| Invalid Range Values | 4.1.2 | [Rule](/support/docs/accessibility-rule-repository/) |
| Images with Text | 1.1.1 | [Rule](/support/docs/accessibility-rule-repository/) |
| Meaningful Sequence | 1.3.2 | [Rule](/support/docs/accessibility-rule-repository/) |
| Non-Focusable Interactive Element | 2.1.1 | [Rule](/support/docs/accessibility-rule-repository/) |
| Minimum Text Size | Best Practice | [Rule](/support/docs/accessibility-rule-repository/) |
| Text Spacing | Best Practice | [Rule](/support/docs/accessibility-rule-repository/) |

### Manual test checklist

Reserve time for **TalkBack**, **Switch Access**, **font scaling**, and **real devices** even when automated rules pass. Use [Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/) and Google's Material Design accessibility guidance with this checklist.

| Area | Manual verification focus |
|------|---------------------------|
| **1.2.x Time-based media** | In-app media (captions, descriptions), validate with representative assets. |
| **1.3.2–1.3.3 · 1.4.x beyond contrast** | Sequence, sensory-only instructions, resize/reflow/hover content: interactive and visual review. |
| **2.x keyboard / focus / timing (full)** | Full flows with TalkBack; session and motion behavior, validate beyond rule snapshots. |
| **3.x language, errors, help** | Error suggestions, legal safeguards: product and compliance review. |
| **AAA criteria** | Optional stretch goals, plan when AAA is explicitly in scope. |

### Related docs

- [Android Rule Repository](/support/docs/accessibility-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
