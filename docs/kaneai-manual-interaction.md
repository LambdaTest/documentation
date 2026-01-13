---
id: kaneai-manual-interaction
title: KaneAI Manual Interaction Mode 
hide_title: false
sidebar_label: Manual Interaction
description: Learn how to KaneAI simplifies test automation by allowing manual interaction to create prompts in natural language, analyzing test steps, generating code in various languages. 
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai manual interaction
url: https://www.testmu.ai/support/docs/kaneai-manual-interaction
site_name: LambdaTest
slug: kaneai-manual-interaction
canonical: https://www.testmu.ai/support/docs/kaneai-manual-interaction/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "KaneAI Manual Interaction Mode",
          "item": "https://www.lambdatest.com/support/docs/kaneai-manual-interaction/"
        }]
      })
    }}
></script>
## Overview
Manual Interaction in KaneAI lets you take direct control of the application during test authoring or while working in a playground session. Instead of relying only on natural language instructions, you can interact with the app in real time and let the agent record everything you do as structured test steps.

This is especially useful when you need to reach a very specific UI state, handle complex flows, or deal with elements that are difficult to describe in words. You can pause the agent, perform actions like a real user, and then resume automated authoring from that exact point.

Manual Interaction works for Web and Mobile app testing, making it easier to capture realistic user behavior across platforms. 


<!-- :::note
Manual interaction is now supported for both Web Browser Test Authoring on desktop and Mobile App Test Authoring on Android and iOS.  
::: -->
### Supported platforms
Manual Interaction is available for

 - Web browser test authoring on desktop

 - Mobile app test authoring on Android

 - Mobile app test authoring on iOS

### How Manual Interaction works
While you are in Authoring mode, you can enable Manual Interaction by clicking the Manual Interaction button. Once enabled, you can directly interact with the application under test.

Every action you perform such as clicking, typing, scrolling, or navigating through screens is automatically captured by the agent and converted into natural language test steps. You do not need to describe these actions in natural language while Manual Interaction is active.

When you want to switch back to writing instructions in plain language, simply click Turn off Manual Interaction. From that point onward, the agent will again follow natural language commands.
### Limitations of Instructions
Manual Interaction focuses only on capturing real-time UI actions, so it has a few limitations you should be aware of. It cannot record any instruction that involves logic, validation, or reusable test components. These need to be added through natural language instructions after you finish interacting with the application.

The following instruction types are not supported in Manual Interaction:

**Assertions**

You can’t record checks or validations while interacting manually. Any “verify,” “confirm,” or “assert” step must be added as a written instruction.

**If–else logic**

Conditional flows or branching logic aren't captured during manual actions. These must be written out in natural language if your test needs conditional behavior.

**Modules and Reusable Blocks**

Manual Interaction can’t insert or reference modules. You’ll need to add them separately once the manual steps are done.

**Variables, Parameters, and Secrets**

These structured inputs aren't detected during manual steps. You must define or call them through natural language instructions.

**Datasets or Dynamic Data**

Using dataset-driven values or any form of dynamic data requires a written instruction, since they can’t be recorded through interactions.

In short, Manual Interaction is great for capturing what you do on the screen, but any logic, validation, or reusable component needs to be added through natural language instructions afterward.




### Visual indicators in test steps
Each recorded step clearly shows how it was created - via natural language or manual interaction. An icon indicates whether the step was captured through Manual Interaction or written using natural language instructions. This helps you quickly understand and review how the test was authored.

### Editing Manual Interaction Steps
Once a step is recorded using Manual Interaction, editing options are intentionally limited to preserve the accuracy of the recorded action. Currently, only the locator name can be edited for manual interaction steps.

You cannot modify the action type, element behavior, or interaction flow after recording. If the recorded step does not match the intended behavior, it is recommended to delete the step and record it again using Manual Interaction, or recreate it using a natural language instruction.

This ensures that recorded steps remain consistent with the actual UI interaction performed during the session.

## Manual Interaction Limitations:
### Web Browser on Desktop

- **Drag and drop on canvas based elements:** Canvas elements rely on custom rendering, which makes drag and drop actions unreliable to record accurately.

- **Double click:** Manual Interaction currently captures single click actions only.

- **Right click:** Context menu interactions triggered by right click are not supported.

- **Hover:** Mouse hover actions that trigger tooltips or menus cannot be recorded.

### Mobile Apps

- **Two finger scroll:** Multi touch gestures are not captured during recording.

- **Click and hold:** Long press interactions are not supported in Manual Interaction.

- **Double click:** Only single tap actions can be recorded on mobile devices.

- **Copy and paste:** Clipboard based actions are not captured during recording.

- **Recent apps actions:** System navigation actions like opening or switching recent apps are not supported.

- **Mobile keyboard actions such as backspace:** Special keyboard keys and actions are not recorded accurately.

- **System level popups:** Popups controlled by the operating system, such as permission dialogs, cannot be captured.

**Important Note on Text Input Behavior**

Manual Interaction records all characters you attempt to type as part of the instruction, even if the application does not accept them.

For example, if an input field allows only numeric values and you try typing alphabets, those characters will still appear in the recorded instruction, even though they do not appear in the input field.


## Common use cases
### Use Case 1: Recording a complete workflow manually and converting it into a test
This is useful when you already know the exact flow and want KaneAI to capture it as an automated test.

**Steps:**

1. Open KaneAI and start a new test in Authoring mode.

<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/kaneai-and-start-a-new-test-in-authoring-mode.webp').default} alt="Image" className="doc_img img_center"/>

2. Launch the application under test in the browser or mobile device.

3. Perform the workflow exactly as a real user would. For example, logging in, navigating through pages, and submitting a form.

4. As you interact with the app, KaneAI records each action automatically as test steps.

<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/kaneai-records-each-action-automatically-as-test-steps.webp').default} alt="Image" className="doc_img img_center"/>

5. Once the workflow is complete, click Turn off Manual Interaction.

6. Review the generated steps and add assertions using natural language where needed by pausing the test.
<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/assertions-using-natural-language.webp').default} alt="Image" className="doc_img img_center"/>

7. Save the test.

### Use Case 2: Working with dynamic or lazy loaded UI elements
Ideal for infinite scroll lists or carousels that load items on demand.

**Steps:**

1. Start Authoring mode and enable Manual Interaction.

2. Scroll through the list or carousel until the desired element becomes visible.

<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/scroll-infinite-kane-ai.webp').default} alt="Image" className="doc_img img_center"/>

3. Click or interact with the loaded element.

4. Turn off Manual Interaction after the interaction is captured.

5. Add assertions to verify the correct item or state using natural language.
<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/assertions-to-verify-the-correct-item-or-state-using-natural-language.webp').default} alt="Image" className="doc_img img_center"/>

### Use Case 3: Combining Manual Interaction with natural language instructions

This approach gives you the best of both worlds.

**Steps:**

1. Start writing your test using natural language instructions.

<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/start-writing-your-test-using-natural-language-instructions.webp').default} alt="Image" className="doc_img img_center"/>

2. When you reach a step that is easier to perform manually, enable Manual Interaction.

3. Perform the required actions directly on the app.

4. Disable Manual Interaction once done.
<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/disable-manual-interaction.webp').default} alt="Image" className="doc_img img_center"/>


5. Continue the test with natural language instructions.

<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/natural-language-instructions.webp').default} alt="Image" className="doc_img img_center"/>

6. Add assertions at appropriate steps to validate outcomes.
### Use Case 4: Click and drag to adjust UI elements
This use case applies when you need to move or adjust an element using a click and drag action, such as sliders, scrollbars, or draggable controls that are supported outside of canvas based elements.

**Steps:**

1. Start the test in Authoring mode.

2. Enable Manual Interaction.

3. Click on the element and drag it to the required position.

<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/element-and-drag-it-to-the-required-position.webp').default} alt="Image" className="doc_img img_center"/>

4. Release the mouse once the desired state is reached.

5. KaneAI records the click and drag action as a test step.

6. Turn off Manual Interaction.

7. Add an assertion in natural language to verify the final state. 

<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/assertion-in-natural-language-to-verify-the-final-state.webp').default} alt="Image" className="doc_img img_center"/>

### Use Case 5: Adjusting values using sliders (Only works on web)

This use case applies when you need to change a value using a slider, such as volume controls, range selectors, brightness settings, or price filters.

Sliders are often easier to handle using Manual Interaction rather than describing exact movements in natural language.

**Steps:**

1. Start the test in Authoring mode.

2. Click on the slider handle.

3. Drag the slider to the required value or position.

4. Release the slider once the desired value is set.

<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/release-the-slider-once-the-desired-value-is-set.webp').default} alt="Image" className="doc_img img_center"/>

5. KaneAI records the slider movement as a test step.

6. Turn off Manual Interaction.

7. Add an assertion in natural language to verify the final value or state. For example, verify that the selected range or value is displayed correctly.

<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/assertion-in-natural-language-to-verify-the-final-value.webp').default} alt="Image" className="doc_img img_center"/>


**Notes specific to sliders**
- Slider interactions are recorded as click and drag actions.
- Exact pixel-level precision may vary depending on the UI implementation.
- Always validate the outcome using an assertion rather than relying only on the recorded movement.



## Best practices
 
- Use Manual Interaction to reach complex UI states quickly.
- Switch back to natural language for validations and assertions.
- Review recorded steps to ensure they reflect the intended behavior.
- Avoid unsupported interactions to prevent incomplete steps.

## Troubleshooting:
### Manual actions are not being recorded
Make sure Manual Interaction is turned on before you start interacting with the application. If it is disabled, your actions will not be captured as test steps.

### Assertions are not getting recorded
This is expected behavior. Assertions are not recorded through Manual Interaction and must be added using natural language instructions after turning it off.

### Some interactions are missing or incomplete
Check whether the interaction you are trying to perform is currently supported. Actions like drag and drop, hover, or certain mobile gestures are not available yet and will not be recorded.

### Typed text does not appear in the input field
If the input field restricts certain characters, those characters may still appear in the recorded instruction even though they are not visible in the UI. This does not affect test execution.

### Unable to interact with system popups
System level popups are not supported through Manual Interaction. These flows need to be handled using alternative approaches or natural language instructions where possible.

### Application state does not look correct after switching modes
After turning off Manual Interaction, give the application a moment to stabilize before adding new steps or assertions. This helps avoid inconsistencies in recorded steps.



## Video Tutorial

<iframe src="https://app.trupeer.ai/embed?slug=vrSqRvouk" width="640" height="360" frameborder="0" allowfullscreen="true" className="KaneIframe"></iframe>