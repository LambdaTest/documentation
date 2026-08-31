# Smart Locator Priority

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Smart Locator Priority lets your organization define the order in which KaneAI should prefer supported locator strategies while authoring test cases in KaneAI.

This is useful when your application is more stable with one locator type over another and you want that preference applied consistently at the organization level.



You need **organization-admin** access. Locator priority is set in Organization Settings and applies across the whole organization.


## Locator Strategies


KaneAI supports prioritizing these locator strategies. The strategy at the top of the list takes precedence over those below it.

The locator type placed at the top of the list is given higher priority than the locator types below it.

For example:

- If **CSS selector** is placed above **XPath**, KaneAI will prefer CSS selector first.
- If **XPath** is moved to the top, KaneAI will prefer XPath first.

## Why This Matters


Follow these steps to set the locator strategy order for your organization.

You may want to adjust the default order if:


Open [Smart Locator Priority in Organization Settings](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/org-settings/kane-ai/smart-locator-priority). In TestMu AI, this is under **Org Product Preferences** &rarr; **KaneAI** &rarr; **Smart locator priority**.



**Result:** The list of supported locator strategies opens.

- [Open Smart Locator Priority in Organization Settings](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/org-settings/kane-ai/smart-locator-priority)


Drag and drop the locator types into your preferred order, keeping the most preferred strategy at the top.

## How to Configure Smart Locator Priority


The priority change does not apply to already authored test cases. It applies only when a test step is authored or re-authored in the KaneAI playground.


## Limitations


Keep these limitations in mind:

## Related Docs

## Next Steps


Continue with these guides:

- [KaneAI Failure Conditions](/support/docs/kaneai-failure-conditions/)
- [KaneAI Command Guide](/support/docs/kane-ai-command-guide/)
- [Custom Instructions in KaneAI Test Generation](/support/docs/generate-test-cases-with-ai/)
