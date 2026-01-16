---
id: group-and-filter-your-test-builds-using-build-tags
title: Group and Filter Your Test Builds Using Build Tags
sidebar_label: Group/Filter Tests Using Build Tags
description: Now group your tests and organize them efficiently with the help of Build Tags on TestMu AI. Create one or more build tags, and filter them with just a click.
keywords:
    - testmu ai automation
    - selenium automation grid
    - selenium grid online
    - online selenium automation
    - selenium automation grid online
    - testmu ai selenium automation grid
    - selenium tutorial
    - selenium getting started
    - testmu ai getting started
    - filter tests
    - Build tags
    - group tests
    - filter test builds
    - group test builds
url: https://www.testmu.ai/support/docs/group-and-filter-your-test-builds-using-build-tags/
site_name: LambdaTest
slug: group-and-filter-your-test-builds-using-build-tags/
canonical: https://www.testmu.ai/support/docs/group-and-filter-your-test-builds-using-build-tags/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

* * *

With <BrandName />, now you can group your test builds with Build tags. This document shows how you can create Build tags and use them to group or filter your test builds on the <BrandName /> Automation Dashboard.

## How To Create Build Tags?

* * *

While writing your automation tests, you need to just add another capability when you create the [Desired Capabilities](/docs/selenium-automation-capabilities/) via code. Just follow the below steps to do so:

*   Create an array of String(s), that contains your Build tags, each separated by a comma.

    ```java
    // For example, when you have only 1 tag
    String[] buildTagList = {"Build Tag"};

    // For example, when you have multiple tags
    String[] buildTagList = {"Tag 1", "Tag 2", "Tag 3", ...};
    ```
    

*   Now you just need to add this Build tag array in your Desired Capabilities instance, as shown below: **For example:** While creating a sample Desired Capabilities instance in Java, the code will be:

    ```java
    // Creating the Build Tags
    String[] buildTagList = {"Tag1", "Tag2", "Tag3", "BuildTagRishabh"};

    DesiredCapabilities caps = new DesiredCapabilities();
    caps.setCapability("browser", "Safari");
    caps.setCapability("version", "13");
    caps.setCapability("platform", "macos Catalina");
    caps.setCapability("build", "Build Tags Demo");
    caps.setCapability("name", "Sample Test");

    // To create custom tags
    caps.setCapability("buildTags", buildTagList); 

    System.out.println("Desired Caps: " + caps);
    driver = new RemoteWebDriver(new URL("https://" + username + ":" + authkey + hub), caps);
    ```

You have successfully created the Build tags. Now when you run your test, and navigate to [<BrandName /> Automation Dashboard](https://automation.lambdatest.com/timeline/), you can see the tags being present in that build, as shown below:

<img loading="lazy" src={require('../assets/images/group-and-filter-your-test-builds-using-build-tags/build-tags.webp').default} alt="Group/filter" width="1281" height="721" className="doc_img"/>

## Guildelines To Create Build Tags On <BrandName />?

While creating Build Tags, make sure to follow the below Guidelines:

*   Maximum of 5 custom tags can be added to a build.
*   User can update the existing build by specifying different tags
*   If you change tag name, or number of tags, no new build will be created. Rather the existing build will be updated with a new tag, to avoid unnecessary build creation and exploitation of new build creation.

## How To Filter Tests Using Build Tags?

* * *

To group or filter the tests on your automation dashboard with these Build tags:

Navigate to [<BrandName /> Automation Dashboard](https://automation.lambdatest.com/timeline/), and you can see a filter by name **Build Tags**, on right corner of the filter toolbar. 
<img loading="lazy" src={require('../assets/images/group-and-filter-your-test-builds-using-build-tags/build-tags-2.webp').default} alt="Group/filter" width="1281" height="722" className="doc_img"/>

Select the Build tag by which you want to filter your test. For example, if we choose _Tag1_, as shown below, only the test builds with the tag "Tag1" will be shown:

<img loading="lazy" src={require('../assets/images/group-and-filter-your-test-builds-using-build-tags/build-tags-3.webp').default} alt="group/filter" width="930" height="524" className="doc_img"/>

You can choose multiple Build tags as well to filter your tests effectively, as shown in the image below:

<img loading="lazy" src={require('../assets/images/group-and-filter-your-test-builds-using-build-tags/build-tags-4.webp').default} alt="group/filter" width="1282" height="722" className="doc_img"/>

* * *

> That's it! You have successfully created a Build tag, and grouped and filtered your tests based on these Build tags. If you still have any questions, feel free to share them with us through our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or by mailing to us on [support@testmu.ai](mailto:support@testmu.ai). Happy testing! :)
