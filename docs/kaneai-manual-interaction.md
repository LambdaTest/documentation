---
id: kaneai-manual-interaction
title: How to Use Manual Interaction in KaneAI
hide_title: true
toc_max_heading_level: 2
sidebar_label: Manual Interaction
description: Learn how KaneAI Manual Interaction records real-time UI actions as test steps for web and mobile app test authoring.
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai manual interaction
  - record and playback testing
  - record user interactions
  - codeless test recording
  - manual to automated conversion
  - observe user interactions
  - record test steps
  - AI test recording
  - no-code test automation
  - capture user actions
  - hybrid test authoring
  - kaneai test steps
  - rename instructions
  - test step management
  - slash commands
url: https://www.testmuai.com/support/docs/kaneai-manual-interaction/
site_name: TestMu AI
slug: kaneai-manual-interaction/
canonical: https://www.testmuai.com/support/docs/kaneai-manual-interaction/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.testmuai.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.testmuai.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "KaneAI Manual Interaction Mode",
          "item": "https://www.testmuai.com/support/docs/kaneai-manual-interaction/"
        }]
      })
    }}
></script>

# How to Use Manual Interaction in KaneAI
***

Manual Interaction lets you take direct control of the application during test authoring or a playground session, and the agent records everything you do as structured test steps.

Use it to reach a specific UI state, handle complex flows, or interact with elements that are hard to describe in words. Pause the agent, act like a real user, then resume automated authoring from that exact point.

It works for both Web and Mobile app testing. You can pause recording at any time to set up app state without logging those actions as steps.

## Supported Platforms
***

Manual Interaction is available for:

- Web browser test authoring on desktop
- Mobile app test authoring on Android
- Mobile app test authoring on iOS

## How Manual Interaction Works
***

While you are in Authoring mode, you can enable Manual Interaction by clicking the Manual Interaction button. Once enabled, you can directly interact with the application under test.

Every action you perform such as clicking, typing, scrolling, or navigating through screens is automatically captured by the agent and converted into natural language test steps. You do not need to describe these actions in natural language while Manual Interaction is active.

When you want to switch back to writing instructions in plain language, simply click Turn off Manual Interaction. From that point onward, the agent will again follow natural language commands.

### Pause Recording
***

While you are in a Manual Interaction session, you can temporarily pause recording so that your actions are not captured as test steps. This is useful when you need to log in, navigate to a specific screen, dismiss unrelated dialogs, or explore the app without cluttering the step list. The session enters a draft state where the application remains fully interactable, but no steps are added to the step list.

**How to use Pause Recording**

1. Open an active Authoring or playground session.

2. With Manual Interaction enabled, click **Pause Recording** in the Manual Interaction toolbar.

<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/pause-recording-toolbar.png').default} alt="Manual Interaction toolbar showing the Pause Recording control" className="doc_img img_center"/>

3. If a confirmation dialog appears, confirm to proceed. The dialog is shown by default and is suppressed once you select **Don't show again** on it.

<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/pause-recording-confirmation.png').default} alt="Pause Recording confirmation dialog" className="doc_img img_center"/>

4. Interact with the application freely. Pages load, forms accept input, and navigation works as expected, but the step list stops growing. The session transitions to Draft state.

<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/pause-recording-draft-state.png').default} alt="Manual Interaction session in the draft state with the paused indicator and Start recording control" className="doc_img img_center"/>

5. Click **Start recording** when you are ready to capture steps again.

<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/start-recording-toolbar.png').default} alt="Manual Interaction toolbar showing the Start recording control while the session is paused" className="doc_img img_center"/>

**What to expect while paused**

- The application is fully interactable. Only the recorder is paused.
- The step list stays exactly as it was at the moment you paused.


### Instruction Types You Cannot Record
***

Manual Interaction captures only real-time UI actions. It cannot record any instruction that involves logic, validation, or reusable test components. Add these through natural language instructions after you finish interacting with the application.

The following instruction types are not supported in Manual Interaction:

- **Assertions:** Checks and validations are not recorded. Add any "verify," "confirm," or "assert" step as a written instruction.
- **If–else logic:** Conditional flows and branching are not captured. Write them in natural language if your test needs conditional behavior.
- **Modules and reusable blocks:** Manual Interaction cannot insert or reference modules. Add them separately after the manual steps are done.
- **Variables, parameters, and secrets:** These structured inputs are not detected during manual steps. Define or call them through natural language instructions.
- **Datasets or dynamic data:** Dataset-driven values and dynamic data require a written instruction, since they cannot be recorded through interactions.

### Visual Indicators in Test Steps
***

Each recorded step clearly shows how it was created - via natural language or manual interaction. An icon indicates whether the step was captured through Manual Interaction or written using natural language instructions. This helps you quickly understand and review how the test was authored.

### Editing Manual Interaction Steps
***

Once a step is recorded using Manual Interaction, editing options are intentionally limited to preserve the accuracy of the recorded action. Currently, only the locator name can be edited for manual interaction steps.

You cannot modify the action type, element behavior, or interaction flow after recording. If the recorded step does not match the intended behavior, it is recommended to delete the step and record it again using Manual Interaction, or recreate it using a natural language instruction.

This ensures that recorded steps remain consistent with the actual UI interaction performed during the session.

## Limitations
***

Beyond the instruction types listed above, some gestures cannot be recorded on each platform.

### Web Browser on Desktop
***

- **Drag and drop on canvas based elements:** Canvas elements rely on custom rendering, which makes drag and drop actions unreliable to record accurately.

- **Hover:** Mouse hover actions that trigger tooltips or menus cannot be recorded.

:::info
Double click, right click, and press-and-hold (long press) **are now supported** in Manual Interaction. See [KaneAI Click Interactions](/support/docs/kane-ai-click-interactions/) for capture rules and platform support.
:::

### Mobile Apps
***

- **Two finger scroll:** Multi touch gestures are not captured during recording.

- **Copy and paste:** Clipboard based actions are not captured during recording.

- **Recent apps actions:** System navigation actions like opening or switching recent apps are not supported.

- **Mobile keyboard actions such as backspace:** Special keyboard keys and actions are not recorded accurately.

- **System level popups:** Popups controlled by the operating system, such as permission dialogs, cannot be captured.

**Important Note on Text Input Behavior**

Manual Interaction records all characters you attempt to type as part of the instruction, even if the application does not accept them.

For example, if an input field allows only numeric values and you try typing alphabets, those characters will still appear in the recorded instruction, even though they do not appear in the input field.


## Common Use Cases
***

These examples show when Manual Interaction is most useful and how to apply it.

### Record Full Workflow
***

This is useful when you already know the exact flow and want KaneAI to capture it as an automated test.

**Steps:**

1. Open KaneAI and start a new test in Authoring mode.

<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/kaneai-and-start-a-new-test-in-authoring-mode.webp').default} alt="Record Full Workflow" className="doc_img img_center"/>

2. Launch the application under test in the browser or mobile device.

3. Perform the workflow exactly as a real user would. For example, logging in, navigating through pages, and submitting a form.

4. As you interact with the app, KaneAI records each action automatically as test steps.

<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/kaneai-records-each-action-automatically-as-test-steps.webp').default} alt="Record Full Workflow" className="doc_img img_center"/>

5. Once the workflow is complete, click Turn off Manual Interaction.

6. Review the generated steps and add assertions using natural language where needed by pausing the test.
<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/assertions-using-natural-language.webp').default} alt="Record Full Workflow" className="doc_img img_center"/>

7. Save the test.

### Lazy-Loaded Elements
***

Ideal for infinite scroll lists or carousels that load items on demand.

**Steps:**

1. Start Authoring mode and enable Manual Interaction.

2. Scroll through the list or carousel until the desired element becomes visible.

<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/scroll-infinite-kane-ai.webp').default} alt="Lazy-Loaded Elements" className="doc_img img_center"/>

3. Click or interact with the loaded element.

4. Turn off Manual Interaction after the interaction is captured.

5. Add assertions to verify the correct item or state using natural language.
<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/assertions-to-verify-the-correct-item-or-state-using-natural-language.webp').default} alt="Lazy-Loaded Elements" className="doc_img img_center"/>

### Combine With NL
***

This approach gives you the best of both worlds.

**Steps:**

1. Start writing your test using natural language instructions.

<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/start-writing-your-test-using-natural-language-instructions.webp').default} alt="Combine With NL" className="doc_img img_center"/>

2. When you reach a step that is easier to perform manually, enable Manual Interaction.

3. Perform the required actions directly on the app.

4. Disable Manual Interaction once done.
<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/disable-manual-interaction.webp').default} alt="Combine With NL" className="doc_img img_center"/>


5. Continue the test with natural language instructions.

<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/natural-language-instructions.webp').default} alt="Combine With NL" className="doc_img img_center"/>

6. Add assertions at appropriate steps to validate outcomes.
### Click and Drag
***

This use case applies when you need to move or adjust an element using a click and drag action, such as sliders, scrollbars, or draggable controls that are supported outside of canvas based elements.

**Steps:**

1. Start the test in Authoring mode.

2. Enable Manual Interaction.

3. Click on the element and drag it to the required position.

<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/element-and-drag-it-to-the-required-position.webp').default} alt="Click and Drag" className="doc_img img_center"/>

4. Release the mouse once the desired state is reached.

5. KaneAI records the click and drag action as a test step.

6. Turn off Manual Interaction.

7. Add an assertion in natural language to verify the final state. 

<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/assertion-in-natural-language-to-verify-the-final-state.webp').default} alt="Click and Drag" className="doc_img img_center"/>

### Adjust Sliders (Web)
***

This use case applies when you need to change a value using a slider, such as volume controls, range selectors, brightness settings, or price filters.

Sliders are often easier to handle using Manual Interaction rather than describing exact movements in natural language.

**Steps:**

1. Start the test in Authoring mode.

2. Click on the slider handle.

3. Drag the slider to the required value or position.

4. Release the slider once the desired value is set.

<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/release-the-slider-once-the-desired-value-is-set.webp').default} alt="Adjust Sliders (Web)" className="doc_img img_center"/>

5. KaneAI records the slider movement as a test step.

6. Turn off Manual Interaction.

7. Add an assertion in natural language to verify the final value or state. For example, verify that the selected range or value is displayed correctly.

<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/assertion-in-natural-language-to-verify-the-final-value.webp').default} alt="Adjust Sliders (Web)" className="doc_img img_center"/>


**Notes specific to sliders**
- Slider interactions are recorded as click and drag actions.
- Exact pixel-level precision may vary depending on the UI implementation.
- Always validate the outcome using an assertion rather than relying only on the recorded movement.

### Setup Without Recording
***

This use case applies when you need to navigate your app to a specific starting point (for example, logging in, accepting a cookie banner, or opening a particular screen), but you do not want any of those preparatory steps to appear in your test.

**Steps:**

1. Start the test in Authoring mode and enable Manual Interaction.

2. Click Pause Recording in the Manual Interaction toolbar and confirm in the dialog.

<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/pause-recording-draft-state.png').default} alt="Manual Interaction session in the draft state with the paused indicator" className="doc_img img_center"/>

3. Perform the setup actions you want to skip from recording, such as logging in or navigating to the target screen.

4. Click Start recording once the application is in the desired starting state.

5. Continue interacting with the app or switch to natural language instructions. From this point onward, your actions are recorded as test steps.

6. Add assertions in natural language as needed to validate behavior.



## Best Practices
***

Follow these practices for reliable tests:
 
- Use Manual Interaction to reach complex UI states quickly.
- Switch back to natural language for validations and assertions.
- Review recorded steps to ensure they reflect the intended behavior.
- Avoid unsupported interactions to prevent incomplete steps.
- Use Pause Recording when you need to log in, navigate, or set up app state without those actions being captured as test steps.

## Troubleshooting
***

Solutions to common Manual Interaction issues:

### Manual Actions Not Recorded
***

Make sure Manual Interaction is turned on before you start interacting with the application. If it is disabled, your actions will not be captured as test steps.

### Assertions Not Recorded
***

This is expected behavior. Assertions are not recorded through Manual Interaction and must be added using natural language instructions after turning it off.

### Interactions Missing or Incomplete
***

Check whether the interaction you are trying to perform is currently supported. Actions like drag and drop, hover, or certain mobile gestures are not available yet and will not be recorded.

### Typed Text Not Showing
***

If the input field restricts certain characters, those characters may still appear in the recorded instruction even though they are not visible in the UI. This does not affect test execution.

### Cannot Interact With Popups
***

System level popups are not supported through Manual Interaction. These flows need to be handled using alternative approaches or natural language instructions where possible.

### App State Looks Wrong
***

After turning off Manual Interaction, give the application a moment to stabilize before adding new steps or assertions. This helps avoid inconsistencies in recorded steps.

### Actions Stopped Recording Mid-session
***

Check whether recording is paused. When Pause Recording is active, the session is in a draft state. Your interactions affect the application but are not captured as test steps. Click Start recording in the Manual Interaction toolbar to resume.



## Rename Test Steps
***

Once your actions are recorded as steps, you can rename them to make the step list easier to read. Rename test steps for API, JS, Database, Network Assertion, and Visual Comparison to improve clarity and consistency without affecting how they run.

### Why Rename Steps
***

Renaming changes a step's display name without changing how it works.

- Improves readability of test steps.
- Has no impact on execution or instruction logic.
- Keeps the renamed step name even if the instruction changes later.
- Works for Web and Mobile slash command instructions.
- Updates the step name in the execution command logs.

### How to Rename a Step
***

1. Ensure the authoring session is running and the relevant step is visible.
2. Pause the session. Renaming works only in the Draft session state, after the session is paused.
3. Click the step name to make it editable.
4. Enter the new name and press **Enter** or click outside to save.
5. Resume the session.

**Result:** The step displays its new name in the step list and in the execution command logs; the instruction logic and behavior remain unchanged.

<img loading="lazy" src={require('../assets/images/kane-ai/features/rename-instructions/rename_instruction.jpg').default} alt="rename instructions" className="doc_img"/>

### Rename Limitations
***

- Supported instruction types:
  - **Web:** API, DB, JS, Visual comparison, Network assertion
  - **Mobile:** API, DB, JS, Visual comparison
- Only the **step name** can be updated (max 255 characters).
- Renaming inside modules is not supported.
- Step rename history is not versioned.
- Special characters `{}` appear as `{{}}` in the generated code.

<img loading="lazy" src={require('../assets/images/kane-ai/features/rename-instructions/summary_page.jpg').default} alt="rename summary page" className="doc_img"/>

### Rename Troubleshooting
***

| Issue | Cause | Solution |
|-------|-------|---------|
| Step name not updated | Save action missed | Re-edit and save |
| Step name resets after refresh | Network/session issue | Refresh page and retry |

## Next Steps
***

Continue with these guides:

- [KaneAI Assertions and Validation](/support/docs/kaneai-kb-assertions-and-validation/)
- [KaneAI Conditional Logic](/support/docs/kaneai-conditional-logic/)
- [KaneAI Modules](/support/docs/kane-ai-modules/)
- [KaneAI Dynamic Content Waits and Page State](/support/docs/kaneai-kb-dynamic-content-waits-and-page-state/)

## Video Tutorial
***

Watch a short walkthrough:

<iframe src="https://app.trupeer.ai/embed?slug=vrSqRvouk" width="640" height="360" frameborder="0" allowfullscreen="true" className="KaneIframe"></iframe>
