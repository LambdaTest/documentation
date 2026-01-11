---
id: hyperexecute-gui-query
title: "Search Query in GUI"
hide_title: false
sidebar_label: Search Query in GUI
description: This documentation outlines the steps on how to use search query in hyperexecute gui app.
keywords:
  - TestMu AI
  - HyperExecute
  - TestMu AI HyperExecute
  - CLI
  - Search Query
  - Filter
  - HyperExecute-GUI
  - test execute
  - hyperexecute job
  - automation
url: https://www.testmu.ai/support/docs/hyperexecute-gui-query
site_name: LambdaTest
slug: hyperexecute-gui-query
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "HyperExecute Status",
          "item": `${BRAND_URL}/support/docs/hyperexecute-gui-query/`
        }]
      })
    }}
></script>

## What is a Query?

Think of a query as a smart search filter that automatically finds and selects the exact tests you want to run. Instead of manually clicking through hundreds of test checkboxes, you simply describe what you're looking for using simple English-like instructions.

**Key Benefits**

- **Dynamic updates:** As new tests matching your criteria are added, they **automatically appear** in the results. This ensures you’re always working with the most up-to-date set.
- **Precise test selection:** Combine multiple criteria like annotations, file locations and names to pinpoint exactly the tests you need for any given configuration.
- **Cleaner workspace:** Only the relevant tests show up, keeping your test view streamlined and easy to navigate. Also, it helps decrease the manual errors.

## Understand the Query Structure
Every query follows this simple pattern:  `<what-to-look-at>.<which-property> <how-to-compare> "<value>"`

For example: `suiteTest.name = "LoginTest"` where, 
- `suiteTest` : what to look at (test within a suite)
- `name` : what property (the name of the test)
- `=` : how to compare (exactly equals)
- `"LoginTest"` : what value (the specific name)

## Write Your First Query

1. Navigate to your configuration details screen
2. Click on the **"Test List"** tab
3. Toggle to **"Query Selection"** mode
4. You'll see a query input box with helpful dropdowns

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/cli-gui/writing_query.mp4').default} type="video/mp4" />
</video>

<!-- ### Step-by-Step Query Building -->

<br />  <br />

Let's build a query to find all the Suite (XML) Tests which have **login** in their name.

### Step 1: Choose What to Look At
Start typing in the query box. You'll immediately see a dropdown with options:

- `suite` : XML test suites
- `suiteTest` :   Tests within suites 
- `suiteClass` :     Test classes within suites 
- `suiteMethod` :    Individual test methods within suites
- `fileClass` :   Independent test classes (which are not part of any suite)
- `fileMethod` :     Methods in independent classes

Let's choose `suiteTest` because we want to find tests within suites

### Step 2: Select a Property to Check
After selecting `suiteTest`, another dropdown appears:

- `name` : Name of the suite, class, or method
- `path` :   File path of the test in your project
- `annotation_name` :     Annotations like @Smoke, @Regression

Select `name` or type it because we want to check test names. Your query now looks like `suiteTest.name`.

### Step 3: Pick a Comparison Operator
Once you’ve typed or selected the property, a dropdown shows comparison options:

- `=` : Equals (matches exactly)
- `~` : Contains (matches part of the text in value)
- `!~`: Not Contains (shouldn't contain part of the text in value)
- `!=` : Not Equals (excludes exact matches)

Choose `~` because we want names that contain "login". Your query now looks like: `suiteTest.name ~`

### Step 4: Enter the Value

Type the value you’re looking for in quotes, like `"login"`. The app suggests values based on your project. With this, our query is complete and now looks like: `suiteTest.name ~ "login"`

Press Enter and all the Suite Tests which contain the word "login" in their name will be listed down in a tree-like format. **This tree-like format** shows you the complete structure with the lowest entity showing the runnable test (`methods`, in case of TestNG).

### Add Multiple Conditions

Want to be more specific? Add logical operators to combine conditions. After your first condition, you'll see a dropdown:

- `AND` : Both conditions must be true
- `OR` :  Either condition can be true
- `NOT` : Exclude what follows

**Example:** Find login tests that are also smoke tests

`suiteTest.name ~ "login" AND suiteTest.annotation_name ~ "Smoke"`

## Save the Query

You can save your query in order to dynamically select tests whenever you come back to that specific Configuration. Queries are saved at **Configuration level** so that you can keep unique Configurations for different types of testing scenarios. For example, A configuration for smoke tests may have a saved query like `suiteTest.name ~ "Smoke"`. 

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/cli-gui/saving_query.mp4').default} type="video/mp4" />
</video>
