# Modules

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Modules in KaneAI let you group a sequence of test steps into a single reusable unit. Instead of re-authoring the same steps in every test case, you create a module once and import it wherever it is needed. This reduces duplication, improves consistency, and makes maintenance easier. When a workflow changes, you update the module and propagate the change across test cases.

Modules support **variables**, **parameters**, and **secrets**, so you can pass dynamic data into each module execution rather than hard-coding values.

## Module Listing Page


The **Modules** section shows all available modules in your project. From here you can:

- Browse existing modules and see how many test cases each module is linked to
- Click on any module to view its details, version history, and linked test cases
- Create a new module





## Create a Module


You create modules by extracting test steps from an active KaneAI session.

### Step 1: Author Test Steps


Begin by authoring your test in KaneAI and executing the steps that you want to turn into a module.



### Step 2: Select Test Steps


1. Click the **Pause Test** button.
2. Select the test steps you want to include in the module. For example, highlight the steps that handle login functionality.



### Step 3: Define Module Properties


1. Click **Create Module**.
2. Enter the module details:
   - **Name**: A descriptive name (e.g., `[Web] Login Flow`)
   - **Description**: What the module does and when to use it
   - **Tags**: Keywords for easier discovery
3. Click **Create Module** to save.



The selected steps are now saved as a reusable module with an initial version.





## Use a Module


Once a module exists, you can import it into any KaneAI test.

### Step 1: Open a Test


Create a new test or open an existing one in the KaneAI web agent.



### Step 2: Import the Module


Type a **slash (/)** to invoke the command menu and select **Add Module**.

Browse the list of available modules and select the one you need.


Modules that contain KaneAI instructions, such as variable steps, If-Else blocks, or While Loops, can be imported only into KaneAI test cases, not into manual test cases in Test Manager. This applies to the Classic experience. See [Modules in Manual Testcases](/support/docs/create-modules/).




### Step 3: Execute


Click **Add in Queue** to execute the module's test steps. The steps run automatically as part of the test.





## Include a Network Assertion


A [Network Logs Assertion](/support/docs/kaneai-kb-api-testing-and-network-assertions/#network-logs-assertions) can be included in a module, so a network-layer check you author once is reused across every test that imports the module instead of being re-authored in each one.


Available on **Desktop Web**, **Mobile Web**, and **Mobile App** sessions in the Classic experience. On Mobile Web and Mobile App, enable **Capture Network Logs** before starting the session (see the Mobile Sessions steps below).


### Select the Assertion


Author the assertion as usual, then click **Pause Test** and tick its checkbox along with the other steps you want in the module. A network assertion travels as a single step: every **Verify if** condition it carries is included, and the conditions cannot be split across modules.



Click **Create Module** and the assertion appears in the step list of the creation drawer with its conditions, alongside the rest of the selected steps.



Once saved, the module carries the assertion as one of its steps.



### Include the Triggering Step


An assertion can only check a request that the test actually makes. Include the step that triggers the network call in the same module as the assertion that checks it.

If you create a module that contains the assertion but not its triggering step, KaneAI warns you at creation. The module is still valid, but it will check whatever traffic the importing test happens to produce, so it is not self-sufficient.

### Mobile Sessions


The same flow works in Mobile Web and Mobile App sessions. Enable **Capture Network Logs** under **Advanced Settings** > **Session Settings** before starting the session, author the assertion, then select it into a module exactly as you would on desktop.

The example below is a module built in a mobile browser session, carrying an assertion with two conditions combined with **AND**: one on the response status and one on the request method.



### Keep the Module Platform-Specific


Modules are platform-specific, and a module containing a network assertion is no exception. Create a separate module for each platform you test, and name it accordingly, for example `[Web] Checkout API Check` and `[Android-App] Checkout API Check`. See [Create Platform-Specific Modules](#create-platform-specific-modules).

A network assertion can only be added from a KaneAI session, so it cannot be added to a simple module created directly on the Modules page. Where the assertion cannot apply, KaneAI blocks the action and states the reason inline rather than adding a step that would check nothing.



## Edit a Module


Click on an existing module from the Module listing page to modify its steps or properties.



Editing a step opens it inline, where you can change the test step and its expected outcome. **Update** applies the change to the step, and the module header then shows an **Unsaved changes** label. Click **Save Changes** to commit them, or **Discard** to drop them.

When you save changes to a module, a new version is created automatically. See [Versioning and Enhancements](/support/docs/kaneai-modules-versions-and-enhancement/) for details on how version history works.

### Editing Restrictions



The editing, reordering, and deletion restrictions described in this section and in [Deleting Steps Inside a Module](#deleting-steps-inside-a-module) apply to the Classic experience.


Some steps carry a **Read-Only** label on the module's step listing. Editing, deleting, and reordering are all disabled for:

- Steps that create or use a **variable** or **parameter**
- **If-Else** blocks
- **While Loop** blocks

Hovering the edit icon on one of these steps shows *Editing Kane instructions is not allowed*.



These steps are part of a larger flow. A variable step feeds values to later steps, and a control flow block carries branches and nested steps that must change together. To modify them, open the test case the module was authored from, make the change there, and save. The module receives a new version automatically. All other steps can be edited, deleted, and reordered as usual.

Modules authored in a KaneAI session also show an **Author Module to Update Test Cases** banner on the Linked Test Cases tab, noting that linked test cases are updated by authoring and validating the module in a KaneAI session.



## Delete a Module


You can delete modules that are no longer needed from the module listing page.

1. Navigate to the **Modules** section.
2. Locate the module you want to delete.
3. Click the meatball menu (**...**) icon on the module card.
4. Select **Delete**.



**Important**
Only modules that are **not linked to any test cases** can be deleted. If a module is currently used in one or more test cases, the delete option will be disabled. You must first remove the module from all linked test cases before deleting it.


### Deleting Steps Inside a Module


The delete action is disabled for the same steps. Hovering it shows *Deleting Kane instructions is not allowed*. These steps can be deleted only while authoring, in the KaneAI test case the module was authored from. All other steps can be deleted directly.





## Module Versioning


Every time you modify a module, KaneAI automatically creates a new version. This version history lets you track what changed, compare any two versions, and revert when needed, which is especially valuable when several team members share modules across test cases.

### How Versioning Works


When you edit an existing module (for example, by adding, removing, or modifying a test step), KaneAI automatically increments the version number (for example, from 1.1 to 1.2). You do not create versions manually.

In the Classic experience, some steps are locked on the Modules page and must be changed from the test case the module was authored from (see [Editing Restrictions](#editing-restrictions)). Editing them there still increments the module version.



After a new version is created, test cases that use the module can either:

- **Accept the new version:** update the test case to the latest module version.
- **Keep the current version:** continue with the existing version, unchanged.




To update a module version across many test cases at once, use [Bulk Module Update](#bulk-module-update).


### Viewing Version History


Open any module from the **Modules** listing page to see its full details, including its description, tags, and complete version history with timestamps. The history shows every change, who made it, and when.



### Comparing Versions


Compare any two versions of a module to see exactly what changed:

1. Open the module and go to the **Version History** section.
2. Select the two versions you want to compare.
3. Review the highlighted differences: added, removed, or modified steps.



### Reverting to a Previous Version


If a module update introduces problems, revert to any earlier version:

1. Open the module and go to **Version History**.
2. Select the version you want to restore.
3. Confirm the revert.

Reverting creates a new version rather than deleting the intermediate ones, so you keep a complete audit trail.



## Bulk Module Update


When a module evolves, updating every test case that uses it one by one is slow and error-prone. Bulk Module Update rolls a validated module version into multiple eligible KaneAI test cases in a single action, shows which test cases are eligible and why, and keeps execution verification explicit.

**Note**
Bulk Module Update currently supports **KaneAI test cases** only. Support for non-KaneAI test cases is coming soon.


**Limited Availability**
This feature is rolling out gradually and may not be available in every account yet. If you don't see it, it will be enabled for you soon.


### Access Bulk Module Update


You can start a bulk module update from two places.

**From the module detail page:** navigate to the module whose version you want to bulk-update and click **Update Test Cases**. The button is disabled if the version is not yet authored or validated, or there are no eligible test cases.



**From the test case summary page:** open a test case that uses the module version you want to update. If a newer version exists and other test cases still use the older one, click **Update Module for all Linked Test Cases** to open the bulk flow pre-filtered for that module and version.



### Module Validation Check


Before the flow starts, KaneAI checks whether the selected module version is authored and validated and whether eligible test cases exist. The **Update Test Cases** button is disabled when the version is not authored or validated, or when there are no eligible test cases (for example, all linked test cases are faulty, unverified, or non-KaneAI). You will see a message such as *"This module version is not authored yet. Author it in a test to enable bulk update."*

To resolve it, use the module in a test case and complete its authoring and validation, then ensure eligible KaneAI test cases are available.

### Select Test Cases


After the flow starts, you see all test cases linked to the target module version. Ineligible ones are greyed out, disabled for selection, and annotated with the reason:

| Case | Why it cannot be updated |
|------|--------------------------|
| **Faulty test cases** | Test cases with **Faulty** status cannot be updated |
| **Non-KaneAI test cases** | Bulk update supports only KaneAI test cases currently |
| **Unverified test cases** | Test cases with **Unverified** status cannot be updated |

Select the eligible test cases and click **Next**.



### Review and Confirm


The summary screen shows the target module version, the count of selected eligible test cases, and an optional version-movement summary (for example, v1 to v2). Click **Confirm Update** to trigger the bulk job.



After you trigger the update, a success banner and toast confirm it.



### Post-Update Changes


A single bulk job runs, and every selected eligible test case has its module version updated. For each updated test case:

| Change | Description |
|--------|-------------|
| Module version | Updated to the new version |
| Test case version | Bumped with a commit message noting the module was updated from the old to the new version (Bulk-Update) |
| Code-Gen | New Code-Gen for the updated module is used for future runs |
| Code-Gen status | Set to **Unvalidated** |
| Execution verified | Set to **false** until the new Code-Gen is validated |



### Linked Test Cases Tab


The module detail page includes a **Linked Test Cases** tab that lists every test case linked to the module, grouped by version, with key metadata. From here you can open individual test case summary pages directly.



### Bulk Update Limitations


- **No module validation in the bulk flow.** You can only bulk-update to module versions already authored and validated in a KaneAI session.
- **No bulk Code-Gen validation yet.** The Code-Gen status stays Unvalidated after a bulk update until the Code-Gen runs successfully through a Test Run.

### Bulk Update Troubleshooting


**The "Update Test Cases" button is disabled.** Confirm the module version has been authored and validated at least once, ensure eligible KaneAI test cases (non-faulty, non-unverified) are linked, then refresh the module detail page.

**Some test cases are greyed out.** Faulty test cases: fix the underlying issues, then retry. Non-KaneAI test cases: update them manually. Unverified test cases: complete verification, then revisit the flow.

**Tests still show "Code-Gen Unvalidated" after the update.** Run or re-run the affected test cases; once Code-Gen validates, the status updates and execution verified is set to **true**.

## Best Practices


Follow these practices for reliable tests:

### Create Platform-Specific Modules


Modules in KaneAI are **platform-specific**. Each platform has distinct interaction patterns, element selectors, and navigation flows, which means the same user action (e.g., tapping vs. clicking, scrolling behavior, keyboard input) behaves differently across platforms. A module authored on one platform may produce unexpected results when used on another.

**Create separate module copies for each target platform.** For example, if you have a login workflow that needs to run across platforms, create a distinct module for each:

| Module Name | Platform |
|---|---|
| `[Web] Login Flow` | Desktop Web |
| `[Android-App] Login Flow` | Android App |
| `[Android-Browser] Login Flow` | Android Browser |
| `[iOS-App] Login Flow` | iOS App |
| `[iOS-Browser] Login Flow` | iOS Browser |

### Use Prefixes and Tags Together


Adopt a consistent **name prefix** and **tag** strategy to make platform context immediately clear and modules easy to filter.

**Name prefixes**: Add a platform prefix at the start of every module name:

- **`[Web]`**: Desktop Web modules
- **`[Android-App]`**: Android native app modules
- **`[Android-Browser]`**: Android browser modules
- **`[iOS-App]`**: iOS native app modules
- **`[iOS-Browser]`**: iOS browser modules

**Tags**: Add platform tags to each module so you can filter the module listing by platform:

- `desktop-web`, `android-app`, `android-browser`, `ios-app`, `ios-browser`

Using both prefixes and tags together gives you the best of both worlds: prefixes make the platform obvious at a glance when importing a module into a test, while tags let you filter the module listing page to show only modules for a specific platform.

You can extend this convention for other distinctions:

- **`[Web][Staging]`**: Environment-specific modules
- **`[Android-App][Auth]`**: Feature-area grouping
- Tags like `login`, `checkout`, `onboarding`: Workflow-based categorization

### Keep Modules Focused


Each module should represent a **single, cohesive workflow** (e.g., login, checkout, form submission). Avoid creating overly large modules that combine unrelated steps. They become harder to maintain and less reusable.

### Use Variables and Parameters


Instead of hard-coding values like usernames, URLs, or test data into module steps, use **variables** and **parameters**. This lets you reuse the same module across different test scenarios by passing in different data at execution time.

### Write Clear Descriptions


Add a meaningful description to every module so other team members understand what it does without reading every step. Include the target platform, expected preconditions, and what state the application will be in after the module runs.



## Next Steps


Continue with these guides:

- [KaneAI Using Variables](/support/docs/kane-ai-using-variables/)
- [datasets](/support/docs/kane-ai-using-parameters/#datasets)
- [KaneAI Conditional Logic](/support/docs/kaneai-conditional-logic/)
- [KaneAI While Loops](/support/docs/kaneai-while-loops/)
