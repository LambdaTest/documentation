# How to Scroll Within Elements With KaneAI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Scroll within elements in KaneAI using natural language commands. You describe either a direction to scroll a specific element, or the target element to scroll until it is visible, in plain English, and KaneAI scrolls sidebars, lists, dropdowns, and any other scrollable content, without coordinate-based scripting.

## Prerequisites


Before you begin, make sure you have:


- A TestMu AI account with access to KaneAI.
- An active test session with the scrollable content on screen.


## Scroll Within an Element


Follow these steps to scroll a specific element in a direction:

### Step 1: Identify the Element to Scroll


Determine the scrollable element you want to move, such as a sidebar, list, dropdown, or the main page.

**Result:** You know which element the scroll command targets.

### Step 2: Enter a Scroll Command


Enter a direction command in the test editor, naming the element when you scroll inside a container:

- `Scroll left` moves the content horizontally to the left.
- `Scroll right` moves the content horizontally to the right.
- `Scroll up` moves the content vertically upward.
- `Scroll down` moves the content vertically downward.

For example, use `Scroll right in the sidebar` to move right in a horizontal sidebar, or `Scroll down` to move down a long page.

**Result:** KaneAI scrolls the named element in the requested direction.

### Step 3: Verify the Content Is in View


Confirm the target content is visible after the scroll action before your next step interacts with it.

**Result:** The content you scrolled to is in view and ready for the next instruction.

## Scroll Until Element


The commands above scroll within an element in a direction. When you do not know how far the target sits, describe the element you want to reach instead and KaneAI scrolls until it becomes visible. This locates elements that sit below the fold or deep in long, scrollable pages without manual scroll logic or coordinates.

### Step 1: Identify the Target


Reference the element by what is visibly present on screen:

- Visible text (for example, `Login button`)
- Element type (for example, `input field`)

Natural language commands do **not** support technical selectors such as IDs, XPaths, or CSS attributes.

**Result:** You have a visual description KaneAI can match.

### Step 2: Formulate the Command


Enter an action-oriented command that names both the element to find and the action to perform once it is found:

- `Scroll until search bar is visible and click on it.`
- `Scroll down until element with text 'Shipping Policy' is visible.`
- `Scroll inside a subsection until date input field and click on it.`

**Result:** KaneAI scrolls until the target is visible, then performs the specified action.

## Command Reference


This table pairs common scroll scenarios with example natural language commands:

| Scenario | Example natural language command |
|--------|--------------------------------|
| Visibility check | `Scroll until search bar is visible and click on it.` |
| Text search | `Scroll down until element with text XYZ is visible.` |
| Button interaction | `Scroll until Submit button and click on it.` |
| Subsection navigation | `Scroll inside a subsection until date input field and click on it.` |
| Dropdown selection | `Scroll inside the dropdown until 'New option' and select it.` |
| Horizontal scrolling (mobile app) | `Scroll right inside the carousel until 'Best Sellers' is visible.` |
| Nested container (mobile app) | `Scroll inside the reviews section until 'Load more' button and click on it.` |

## Limitations


Keep these limitations in mind:

### Mobile App Authoring


Mobile app authoring supports **horizontal scrolling** and **scrolling inside nested containers** (element scrolling). You can scroll left or right inside carousels, and scroll within specific container elements such as dropdowns, lists, and subsections instead of only the main viewport.

- **Scroll limit:** A maximum of **20 scroll attempts** are performed. If the element is not found, the action fails.
- **Directional extremes:** Commands such as `Scroll to top` or `Scroll to bottom` are not supported.

### Mobile Browser Authoring


- **Element eligibility:** Applies **only to interactable elements** (buttons, links, dropdowns, inputs). Plain text or static labels are not supported.
- **Native popups:** Scrolling inside native browser popups or system alerts is not supported.
- **Horizontal scrolling:** Not supported.

## Troubleshooting


This table lists common scroll errors, their causes, and fixes:

| Error message / behavior | Potential cause | Solution |
|------------------------|-----------------|----------|
| Maximum Scroll Limit Reached | Element is beyond 20 scrolls or not present | Verify element visibility and ensure it appears within 20 scrolls |
| Element Not Found | Non-interactable or plain text element (mobile browser) | Target a button, link, or input field instead |
| Scroll Timeout | Element is inside a nested container that was not specified in the command | Name the container in the instruction (for example, `Scroll inside the reviews section until ...`) |
| Command Not Recognized | Usage of IDs, XPaths, or attributes | Rewrite using visible text or element type (for example, `button`) |

## Next Steps


Continue with these guides:

- [KaneAI Finding and Interacting With Elements](/support/docs/kaneai-kb-finding-and-interacting-with-elements/)
- [KaneAI Mobile App Testing Patterns](/support/docs/kaneai-kb-mobile-app-testing-patterns/)
- [KaneAI Forms Inputs and Data Entry](/support/docs/kaneai-kb-forms-inputs-and-data-entry/)
- [KaneAI Click Interactions](/support/docs/kane-ai-click-interactions/)
- [KaneAI Command Guide](/support/docs/kane-ai-command-guide/)

> Have any feedback or request? Reach out to us via [support@testmuai.com](mailto:support@testmuai.com) and we would be happy to hear from you.
