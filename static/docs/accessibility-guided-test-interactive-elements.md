# Interactive Elements Guided Test

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Screen reader users need to know what each control is and what it does. For this, each control must expose three things. Controls include buttons, links, checkboxes, radio buttons, switches, tabs, menu items, options, combo boxes, list boxes, text boxes, search boxes, sliders, spin buttons, tree items, scroll bars, and progress bars.

- **Name**: what the control is called, for example "Search".
- **Role**: what type of control it is, for example a button or a checkbox.
- **State**: its current condition, for example expanded or checked.

The Interactive Elements test finds the controls on the page, checks the name, role, and state of each one, and asks you to confirm the items a computer cannot decide.

## When to use this

Use this test on pages with custom widgets such as menus, tabs, accordions, toggles, and clickable `div` or `span` elements. Screen readers often miss these when they are not built as real controls.

## Prerequisites

The TestMu AI Accessibility Toolkit is installed. See [Install Toolkit](/support/docs/accessibility-testing-install-devtools/).

## What the test checks

All rules map to WCAG 4.1.2 (A).

| Rule | Severity |
|---|---|
| Element behaves like a control but has no role | Critical |
| Interactive element has no accessible name | Critical |
| Exposed role does not match behaviour | Critical |
| Role attribute is not a valid ARIA role | Serious |
| Control does not expose its required state | Serious |
| ARIA state attribute has an invalid value | Serious |
| Accessible name does not describe the control | Serious |
| Exposed state does not match the control | Serious |

## Run the test

### Start the test

Open **Assisted Tests** in Accessibility DevTools and select **Interactive Elements**. Turn on **Verify with AI** if you want AI to give the first answers. See [Start a guided test](/support/docs/accessibility-guided-tests/#start-a-guided-test).

### Review the detected controls

The test lists standard controls, custom controls, and elements that look like controls but are not built as controls. Missing names, invalid roles, and missing or invalid states are flagged automatically. If the test missed a control, click it on the page to add it.

{/* IMAGE PLACEHOLDER: List of detected controls with name, role, and state

*/}

### Answer the questions for each control

For each control, confirm three things:

1. Does the name describe what the control does?
2. Is the role correct?
3. Does the state match what the control shows?

### Check other states

Some states only appear after you use the control. Change the control on the page, for example open a menu, and then select **Re-scan states**. The test reads the controls again and shows their new states. You stay in the same test and your answers are kept.

### Finish the test

When you have answered the questions, finish the test to generate the report. Your progress is saved, so you can close the panel and continue later.

## How AI helps

With **Verify with AI** on, AI reads the name of each control and decides whether it describes what the control does. You can change the answer before you finish.

**AI credits**
**Verify with AI** will require AI credits. See [Credits Management](/support/docs/credits-management/).

## Related docs

- [Guided Tests](/support/docs/accessibility-guided-tests/)
- [Keyboard Guided Test](/support/docs/accessibility-guided-test-keyboard/)
- [Images Guided Test](/support/docs/accessibility-guided-test-images/)
- [Hover and Tooltips Guided Test](/support/docs/accessibility-guided-test-hover-tooltips/)
