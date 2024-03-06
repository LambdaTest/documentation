---
id: testim-integration
title: Testim Integration
hide_title: true
sidebar_label: Testim Integration
description: LambdaTest offers integration with Testim to help you perform automated browser testing on 3000+ real browsers and OS.
keywords:
- lambdatest integrations
- lambdatest integrations with testim
- testim integration
- testim integration with lambdatest
- lambdatest integration with testim
- testim lambdatest
url: https://www.lambdatest.com/support/docs/testim-integration/
site_name: LambdaTest
slug: testim-integration/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Testim Integration",
          "item": "https://www.lambdatest.com/support/docs/testim-integration/"
        }]
      })
    }}
></script>

# Testim Integration
***

Testim provides an automated testing platform to create stable tests using AI-powered capabilities, along with tools that facilitate scaling quality across your software development process.

Integrating LambdaTest with Testim lets you run Testim automated tests on LambdaTest cloud-based grid across 3000+ real browsers and OS.

## Adding LambdaTest Grid From Testim
---

1. Refer to the guidelines in the [Adding a grid](https://help.testim.io/docs/grid-management#adding-a-grid) section, opting for the LambdaTest option as the Grid Type.

2. Proceed by clicking **Next**.

3. Modify the specified fields:

   - **Name**: Enter the grid name to be used during runtime.

   - **Host**: Input the LambdaTest host name (e.g., hub.lambdatest.com).

   - **Port**: Set the LambdaTest port (Default: 443).

   - **Username**: Specify your LambdaTest username.

   - **Password/Access Key**: Provide the LambdaTest access key for connection or password.

 <video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/testim-integration/1.mp4').default} type="video/mp4" />
</video>

## Running Testim Tests on LambdaTest
---

You have multiple options for running your Testim tests on LambdaTest cloud.

* **CLI / CI**: Add the *--grid* parameter along with the grid name.

* **Scheduler**: Use the Grid field to select the specific grid for test execution.

* **Test Plan**: Choose the desired grid for running your tests using the Grid field.

* **From the Editor**:

1. Run your test directly on the grid from the test editor.

2. Click on the options arrow next to the **Run** button.

3. Select **Run on a grid**.

4. To modify the configuration, grid, or base URL for that run, click on **Edit**.


<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/testim-integration/2.mp4').default} type="video/mp4" />
</video>