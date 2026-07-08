# Best Practices for Authoring Mobile Native App Tests in KaneAI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Authoring mobile native app tests in KaneAI can be significantly enhanced by following these best practices. These ensure improved stability, reliability, and accuracy of the generated steps and ultimately, the automation.

## OTP and PIN Fields

For OTP or PIN fields where each digit is in a separate box:

- Use the keyword: `OTP`
- Example: `Enter OTP "1234"`

## Partially Clickable Text (Spannable Text)

For labels or descriptions containing partially clickable links/texts:

- Use the keyword: `spannable text`
- Example: `Click on spannable text: "Terms and Conditions" in bottom info modal`

## Wheels, Sliders, Seekbars, and Date Pickers

Supported element classes:

- **Android**: `android.widget.NumberPicker`, `android.widget.SeekBar`
- **iOS**: `XCUIElementTypePickerWheel`, `XCUIElementTypePicker`, `XCUIElementTypeDatePicker`, `XCUIElementTypeSlider`

Use instruction:

- `Enter "2" in first column`

If issues arise:

- Use TestMu AI App Live [UI Inspector](/support/docs/ui-inspector/) to verify if the element class is supported.

## Dismissing Popups

To dismiss popups without visible close buttons:

- Use instruction: `dismiss dialog`

## Hiding Keyboard

- **Android**: Use instruction: `hide keyboard`
- **iOS**: Prefer `press enter` after `type` or use: `click on cancel` button in keyboard if applicable

Example:

- `Type abcd and press enter`

> Note: iOS keyboards are often persistent, and `press enter` helps dismiss them. On Android, this is usually not required.

## Typing and Special Keys

- For deleting characters: use `press Del`

## Wait Instructions

- Always insert explicit `wait` commands if a screen or element load takes time after an action. Refer [this doc](http://localhost:3001/support/docs/kane-ai-command-guide/#explicit-waits).

Example:

- `Click on Submit button`
- `Wait for 3 seconds`
- `Assert confirmation text is visible`

### Step Timeout (per-step wait)

By default, each App step waits up to **10 seconds** for its target element to appear. On slow-loading screens, you can override this on a **per-step** basis instead of adding fixed `wait` steps:

1. Click the **three-dot (⋯) menu** on the step.
2. Select **Step Timeout**.
3. Enter the timeout value in seconds (min **1**, max **300**) and save the step.

Step Timeout is a **dynamic ceiling** — the step proceeds as soon as the element is ready and only uses the extra time on genuinely slow loads. It applies to element-based interactions (Tap/Click, Type/Input, Search, Clear) and has no effect on fixed `wait` steps, assertions, or API steps. Leaving it unset keeps the default 10-second behavior.

Step Timeout is supported on KaneAI App automation for **Android and iOS** real devices, bringing App testing in line with Web and Mobile Web, which already support per-step timeouts.

## Scroll and Wait Pattern

If scrolling is needed before performing an action:

- Use: `Scroll down 2 times`
- Add wait after scroll: `Wait for 2 seconds`

## Explicit Element Identifiers

Use specific element identifiers to improve accuracy:

- `Click on abc 'button'`
- `Click on continue 'text'`
- `Assert abc button 'background color' is red`

## Typing in Specific Input Fields

Be explicit when typing:

- `Type "2" in "username" input field`

By following these practices, users can significantly reduce errors and improve clarity when authoring native mobile app tests in KaneAI.
