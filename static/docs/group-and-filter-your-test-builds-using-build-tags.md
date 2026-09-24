# Group and Filter Your Test Builds Using Build Tags

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

With TestMu AI, you can group test builds with build tags. Add a `buildTags` capability with your tag names to a test, run it, then group and filter builds by those tags on the Automation Dashboard.

## How to Create Build Tags

Pass a `buildTags` capability with a String array of tag names inside `LT:Options`.

While building your [Selenium capabilities](/support/docs/selenium-automation-capabilities/), set the `buildTags` capability to a String array of the tag names you want on the build:

```java
// The build tags you want to apply (max 5 per build)
String[] buildTagList = { "Regression", "Sanity" };

// Add the buildTags capability inside LT:Options
MutableCapabilities ltOptions = new MutableCapabilities();
ltOptions.setCapability("build", "Build Tags Demo");
ltOptions.setCapability("buildTags", buildTagList);

ChromeOptions browserOptions = new ChromeOptions();
browserOptions.setCapability("browserVersion", "latest");
browserOptions.setCapability("LT:Options", ltOptions);
```

Run the test with these capabilities. The build then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) tagged with your build tags.

## Guidelines for Creating Build Tags

Follow these limits when creating build tags to avoid unexpected behavior.

While creating Build Tags, follow the below guidelines:

*   Add a maximum of 5 custom tags to a build.
*   You can update the existing build by specifying different tags.
*   If you change a tag name or number of tags, no new build is created. The existing build is updated with the new tag to avoid unnecessary build creation.

## How to Filter Builds Using Build Tags

Filter the Builds list by your build tags from the Sort & Filters panel.

On the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build), open **Configure > Sort & Filters** and select **Build Tags**. Choose one or more of your build tags to show only the builds that carry them; selecting several combines them.

To filter by tags set on individual tests instead, use the **Test Tags** filter. See [Group Tests Using Custom Tags](/support/docs/group-tests-using-custom-tags/) and [Organize Tests & Builds](/support/docs/filter-your-selenium-tests/).

> You have successfully created a Build tag and grouped and filtered your tests based on these Build tags. If you have questions, share them with us through our **24/7 chat support** or by mailing us at [support@testmuai.com](mailto:support@testmuai.com).
