---
id: kaneai-manual-interaction
title: How to Use Manual Interaction in KaneAI
hide_title: true
toc_max_heading_level: 2
sidebar_label: Manual Interaction
description: Learn how KaneAI captures what you do directly on your application as test steps during an authoring session, and how to use Pause Recording to stop capture.
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai manual interaction
  - kaneai pause recording
  - kaneai authoring steps
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
          "name": "Manual Interaction in KaneAI",
          "item": "https://www.testmuai.com/support/docs/kaneai-manual-interaction/"
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/kaneai-manual-interaction/"
    },
    "headline": "Manual Interaction in KaneAI",
    "description": "Learn how KaneAI captures what you do directly on your application as test steps during an authoring session, and how to use Pause Recording to stop capture.",
    "url": "https://www.testmuai.com/support/docs/kaneai-manual-interaction/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "KaneAI",
    "keywords": [
      "testmu ai automation",
      "testmu ai kaneai",
      "kaneai manual interaction"
    ],
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "dateModified": "2026-09-09T20:21:05+05:30"
  }) }}
/>


# How to Use Manual Interaction in KaneAI
***

Manual Interaction is how KaneAI turns what you do directly on your application into test steps. Instead of describing an action in words, you perform it — click, type, scroll, navigate — and the agent records it as a structured step.

This is especially useful when you need to reach a very specific UI state, handle a complex flow, or work with elements that are difficult to describe in words.

Manual Interaction is **always active while your session is in the Authoring Steps state**. There is nothing to switch on. Captured steps append to the end of the step list, exactly like instructions you type in Authoring Steps, because the cursor is pinned to the bottom in that state. When you want to interact with the application *without* those actions becoming steps, use [Pause Recording](#pause-recording).

For the full session model — the states, the cursor, and the run actions — see [Authoring Session](/support/docs/kaneai-authoring-session/).

## Supported Platforms
***

| Platform | Capture support |
|---|---|
| Web browser on desktop | Supported |
| Mobile app on Android | Supported |
| Mobile app on iOS | Supported in portrait; not supported in landscape |
| Mobile browser | Not supported |

On platforms where capture is not supported, build the test using natural language instructions and slash commands.

## How Manual Interaction Works
***

While your session is in Authoring Steps, every action you perform on the application — clicking, typing, scrolling, or navigating through screens — is automatically captured by the agent and converted into a natural language test step. You do not need to describe these actions in words.

You can freely mix the two ways of authoring in a single session. Type an instruction when typing is easier, interact with the application when interacting is easier, and use slash commands for structured inputs. This is Hybrid Authoring, and it needs no mode switching — the cursor controls where each new step lands regardless of how you created it.

Slash commands are unaffected by capture and continue to work as documented: `/api`, `/js`, `/db`, `/network`, `/totp`, `/upload`, `/download`, `/variable`, `/secret`, `/parameter`.

A *Manual interaction turned off* marker can still appear in the step list when the agent reclaims the click stream on its own. There is no corresponding *turned on* marker, since capture is the default in Authoring Steps.

### Pause Recording
***

Pausing the session is how you stop capture. Use it when you need to log in, navigate to a specific screen, dismiss an unrelated dialog, or explore the application without cluttering the step list.

The control is labelled **Pause** and sits above the step list. Pausing moves the session into the **Paused** state, and the application view confirms it with a *Step recording paused* indicator. The application stays fully interactive — pages load, forms accept input, navigation works — but the step list stops growing.

**How to pause and resume**

1. Open an active authoring session. It starts in **Authoring Steps**, where the application view shows a *Recording steps* indicator.

2. Click **Pause**.

{/* TODO re-shoot: current asset shows the removed Manual Interaction toggle and its "on by default" tooltip. The Pause control now sits above the step list. <img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/pause-recording-toolbar.png').default} alt="The Pause control in an authoring session" className="doc_img img_center"/> */}

3. Interact with the application freely. The session is now Paused and nothing you do is captured.

{/* TODO re-shoot: current asset shows the "Draft" banner, since replaced by "Paused". <img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/pause-recording-draft-state.png').default} alt="Authoring session in the Paused state" className="doc_img img_center"/> */}

4. Click **Resume** when you are ready to capture steps again. Resume does not restart your device — the application stays exactly where it is, and the cursor returns to the bottom-most step.

{/* TODO re-shoot: current asset shows the "Start recording" label, since replaced by "Resume". <img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/start-recording-toolbar.png').default} alt="The Resume control while the session is paused" className="doc_img img_center"/> */}

**What you can do while paused**

Paused is more than a capture switch — it is where you restructure a test. Alongside interacting with the application without being recorded, you can:

- Edit, duplicate, and delete steps.
- Select several steps at once to group them into a module or delete them together.
- Place the cursor anywhere and insert steps at that point.
- Run the whole test, a range of steps, or a single step.

The step list stays exactly as it was at the moment you paused, apart from changes you make deliberately. See the [state capability table](/support/docs/kaneai-authoring-session/#what-each-state-allows) for the full comparison.

### Instruction Types You Cannot Record
***

Manual Interaction captures only real-time UI actions. It cannot record any instruction that involves logic, validation, or reusable test components. Add these through natural language instructions after you finish interacting with the application.

The following instruction types are not supported in Manual Interaction:

- **Assertions:** Checks and validations are not recorded. Add any "verify," "confirm," or "assert" step as a written instruction.
- **If–else logic:** Conditional flows and branching are not captured. Write them in natural language if your test needs conditional behavior.
- **Modules and reusable blocks:** Manual Interaction cannot insert or reference modules. Add them separately after the manual steps are done.
- **Variables, parameters, and secrets:** These structured inputs are not detected during manual steps. Define or call them through natural language instructions or slash commands.
- **Datasets or dynamic data:** Dataset-driven values and dynamic data require a written instruction, since they cannot be recorded through interactions.

Because captured steps are inserted at the [cursor](/support/docs/kaneai-authoring-session/#the-cursor) like any other step, you can position an assertion exactly where it belongs rather than only at the end.

### Visual Indicators in Test Steps
***

Each recorded step clearly shows how it was created - via natural language or manual interaction. An icon indicates whether the step was captured through Manual Interaction or written using natural language instructions. This helps you quickly understand and review how the test was authored.

### Editing Manual Interaction Steps
***

Once a step is recorded using Manual Interaction, editing options are intentionally limited to preserve the accuracy of the recorded action. Currently, only the locator name can be edited for manual interaction steps.

You cannot modify the action type, element behavior, or interaction flow after recording. If the recorded step does not match the intended behavior, it is recommended to delete the step and record it again using Manual Interaction, or recreate it using a natural language instruction.

This ensures that recorded steps remain consistent with the actual UI interaction performed during the session.

Editing a step that had already run and passed returns it to the **Queued** status and marks it as edited, which means it needs to run again before the test can be saved as Ready. See [Step Statuses](/support/docs/kaneai-authoring-session/#step-statuses).

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

### Platforms without capture
***

- **Mobile browser:** Capture is not supported. Author these tests with natural language instructions and slash commands.

- **iOS in landscape:** Capture is not supported. Rotate to portrait to record interactions.

## Common Use Cases
***

These examples show when Manual Interaction is most useful and how to apply it.

### Record Full Workflow
***

This is useful when you already know the exact flow and want KaneAI to capture it as an automated test.

**Steps:**

1. Open KaneAI and start a new test. The session begins in Authoring Steps, so capture is already active.

<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/kaneai-and-start-a-new-test-in-authoring-mode.webp').default} alt="Record Full Workflow" className="doc_img img_center"/>

2. Launch the application under test in the browser or mobile device.

3. Perform the workflow exactly as a real user would. For example, logging in, navigating through pages, and submitting a form.

4. As you interact with the app, KaneAI records each action automatically as test steps.

<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/kaneai-records-each-action-automatically-as-test-steps.webp').default} alt="Record Full Workflow" className="doc_img img_center"/>

5. Pause the session, then review the generated steps and add assertions in natural language where needed.

<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/assertions-using-natural-language.webp').default} alt="Record Full Workflow" className="doc_img img_center"/>

6. Save the test.

### Lazy-Loaded Elements
***

Ideal for infinite scroll lists or carousels that load items on demand.

**Steps:**

1. Start an authoring session.

2. Scroll through the list or carousel until the desired element becomes visible.

<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/scroll-infinite-kane-ai.webp').default} alt="Lazy-Loaded Elements" className="doc_img img_center"/>

3. Click or interact with the loaded element. The interaction is captured as a step.

4. Add assertions to verify the correct item or state using natural language.

<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/assertions-to-verify-the-correct-item-or-state-using-natural-language.webp').default} alt="Lazy-Loaded Elements" className="doc_img img_center"/>

### Combine With NL
***

This approach gives you the best of both worlds, in a single session with no mode switching. This is Hybrid Authoring.

**Steps:**

1. Start writing your test using natural language instructions.

<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/start-writing-your-test-using-natural-language-instructions.webp').default} alt="Combine With NL" className="doc_img img_center"/>

2. When you reach a step that is easier to perform than to describe, simply perform it on the application. It is captured as a step at the cursor.

3. Go back to typing whenever it is more convenient. Both kinds of step sit in the same list, in the order the cursor placed them.

<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/natural-language-instructions.webp').default} alt="Combine With NL" className="doc_img img_center"/>

4. Add assertions at appropriate steps to validate outcomes. Assertions always need to be typed.

### Click and Drag
***

This use case applies when you need to move or adjust an element using a click and drag action, such as sliders, scrollbars, or draggable controls that are supported outside of canvas based elements.

**Steps:**

1. Start an authoring session.

2. Click on the element and drag it to the required position.

<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/element-and-drag-it-to-the-required-position.webp').default} alt="Click and Drag" className="doc_img img_center"/>

3. Release the mouse once the desired state is reached. KaneAI records the click and drag action as a test step.

4. Add an assertion in natural language to verify the final state.

<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/assertion-in-natural-language-to-verify-the-final-state.webp').default} alt="Click and Drag" className="doc_img img_center"/>

### Adjust Sliders (Web)
***

This use case applies when you need to change a value using a slider, such as volume controls, range selectors, brightness settings, or price filters.

Sliders are often easier to handle using Manual Interaction rather than describing exact movements in natural language.

**Steps:**

1. Start an authoring session.

2. Click on the slider handle.

3. Drag the slider to the required value or position.

4. Release the slider once the desired value is set.

<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/release-the-slider-once-the-desired-value-is-set.webp').default} alt="Adjust Sliders (Web)" className="doc_img img_center"/>

5. KaneAI records the slider movement as a test step.

6. Add an assertion in natural language to verify the final value or state. For example, verify that the selected range or value is displayed correctly.

<img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/assertion-in-natural-language-to-verify-the-final-value.webp').default} alt="Adjust Sliders (Web)" className="doc_img img_center"/>


**Notes specific to sliders**
- Slider interactions are recorded as click and drag actions.
- Exact pixel-level precision may vary depending on the UI implementation.
- Always validate the outcome using an assertion rather than relying only on the recorded movement.

### Setup Without Recording
***

This use case applies when you need to navigate your app to a specific starting point (for example, logging in, accepting a cookie banner, or opening a particular screen), but you do not want any of those preparatory steps to appear in your test.

**Steps:**

1. Start an authoring session. It begins in Authoring Steps, so capture is already active.

2. Click **Pause** above the step list. The session enters the Paused state.

{/* TODO re-shoot: current asset shows the removed "Draft" banner, since replaced by "Paused". <img loading="lazy" src={require('../assets/images/kane-ai/features/manual-interaction/pause-recording-draft-state.png').default} alt="Authoring session in the Paused state" className="doc_img img_center"/> */}

3. Perform the setup actions you want to skip from recording, such as logging in or navigating to the target screen.

4. Click **Resume** once the application is in the desired starting state.

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

Check that the session is in **Authoring Steps** and not **Paused**. Capture is always active in Authoring Steps; while the session is Paused, your interactions affect the application but are not captured. Click **Resume** to return to Authoring Steps.

### I Clicked on the Application and Nothing Happened
***

The agent may briefly hold the click stream while it processes a previous step. Wait for the *Recording steps* indicator, then retry the interaction.

### Assertions Not Recorded
***

This is expected behavior. Assertions are not recorded through Manual Interaction and must be added using natural language instructions.

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

Give the application a moment to stabilize before adding new steps or assertions. This helps avoid inconsistencies in recorded steps.

### Actions Stopped Recording Mid-session
***

Check whether the session is **Paused**. While paused, your interactions affect the application but are not captured as test steps. Click **Resume** to return to Authoring Steps and continue capturing.



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

1. Ensure the authoring session is open and the relevant step is visible.
2. Pause the session. Renaming is available only while the session is **Paused**, along with the other step editing actions. See [Session states](/support/docs/kaneai-authoring-session/#session-states).
3. Click the step name to make it editable.
4. Enter the new name and press **Enter** or click outside to save.
5. Click **Resume**. Your device is not restarted and no steps are re-run — the session returns to Authoring Steps.

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

- [KaneAI Authoring Session](/support/docs/kaneai-authoring-session/)
- [KaneAI Assertions and Validation](/support/docs/kaneai-kb-assertions-and-validation/)
- [KaneAI Conditional Logic](/support/docs/kaneai-conditional-logic/)
- [KaneAI Modules](/support/docs/kane-ai-modules/)
- [KaneAI Dynamic Content Waits and Page State](/support/docs/kaneai-kb-dynamic-content-waits-and-page-state/)

## Video Tutorial
***

Watch a short walkthrough:

<iframe src="https://app.trupeer.ai/embed?slug=vrSqRvouk" width="640" height="360" frameborder="0" allowfullscreen="true" className="KaneIframe"></iframe>
