# How to Set Smart Locator Priority With KaneAI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Smart Locator Priority sets the order in which KaneAI prefers supported locator strategies while authoring test cases, applied consistently across your organization. Set it in **Organization Settings** when your application is more stable with one locator type than another.

## Prerequisites



You need **organization-admin** access. Locator priority is set in Organization Settings and applies across the whole organization.


## Locator Strategies


KaneAI supports prioritizing these locator strategies. The strategy at the top of the list takes precedence over those below it.

| Strategy | Description |
|---|---|
| **CSS selector** | Resolves elements using CSS selectors. |
| **XPath** | Resolves elements using XPath expressions. |
| **Full XPath** | Resolves elements using absolute XPath expressions. |

For example, if **CSS selector** is above **XPath**, KaneAI prefers CSS selector first. If **XPath** is moved to the top, KaneAI prefers XPath first.

Adjust the order when your application produces more stable selectors of one type, or when you want one consistent strategy across the organization.

## Configure Locator Priority


Follow these steps to set the locator strategy order for your organization.

### Step 1: Open Smart Locator Priority


Open [Smart Locator Priority in Organization Settings](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/org-settings/kane-ai/smart-locator-priority). In TestMu AI, this is under **Org Product Preferences** &rarr; **KaneAI** &rarr; **Smart locator priority**.



**Result:** The list of supported locator strategies opens.

### Step 2: Reorder the Strategies


Drag and drop the locator types into your preferred order, keeping the most preferred strategy at the top.

**Result:** The new order becomes the organization-level preference for any newly authored or edited test cases.


The priority change does not apply to already authored test cases. It applies only when a test step is authored or re-authored in the KaneAI playground.


## Limitations


Keep these limitations in mind:

- This setting supports only the locator strategies shown in the UI.
- The priority order controls which locator type is preferred first. It does not replace the need for stable page structure and reliable element identification.

## Next Steps


Continue with these guides:

- [KaneAI Failure Conditions](/support/docs/kaneai-failure-conditions/)
- [KaneAI Command Guide](/support/docs/kane-ai-command-guide/)
- [Generate Test Cases With AI](/support/docs/generate-test-cases-with-ai/)
