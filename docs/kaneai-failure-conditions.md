---
id: kaneai-failure-conditions
title: Failure Conditions
hide_title: false
sidebar_label: Failure Conditions
description: Failure Conditions for test steps to decide on the behavior of test execution & status on failure of individual steps
keywords:
  - failure conditions
  - assertion
  - hard assertion
  - kane ai instructions
url: https://www.lambdatest.com/support/docs/kane-ai-failure-conditions
site_name: LambdaTest
slug: kaneai-failure-conditions/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
          "name": "KaneAI Failure Conditions",
          "item": "https://www.lambdatest.com/support/docs/kane-ai-failure-conditions"
        }]
      })
    }}
></script>
## Failure Conditions
Failure conditions in KaneAI allow you to define how the test execution in a Test Run should behave when a particular test step fails. These conditions give you fine-grained control over how failures are handled at the step level and how they impact the overall execution result.

Failure conditions are configurable for every type of command or step in KaneAI Authoring mode and are essential for aligning your tests with your quality and failure tolerance.

:::tip
Failure conditions are set in the Authoring mode but they are applicable only in Test Run your Test's flow while authoring & code generation will not be affected by this. 
:::

Below are the failure conditions available in KaneAI:

1. **Fail test immediately:**
If the step fails, the test execution is halted immediately, and the overall test status is marked as `Failed`. This ensures that no further steps are executed after a critical failure. This is ideal for scenarios where proceeding further does not make sense or could lead to misleading results.

2. **Fail but continue execution:**
If the step fails, the test execution continues with the remaining steps, but the overall test is marked as `Failed` after completion. This is useful when you want to capture all failures in a single run for debugging purposes, but still treat the test as failed overall.

3. **Warn but continue execution:**
If the step fails, the test execution continues with the remaining steps and the overall test result remains `unaffected`. This is particularly useful for non-critical validations where failure should not impact the test outcome.

You can set the failure condition in the Authoring mode by clicking on the three-dots on the step:
<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/failure-conditions/failure_conditions.png').default} alt="failure_conditions" className="doc_img"/>

>This change will not affect your existing test cases or the generated code where you’ve used hard/soft assertions. However, when you edit these tests, the new failure conditions will be applied.
 
## Default Failure Condition Setting

By default, the failure condition for each step is set to **Fail test immediately**, ensuring that the execution stops as soon as a step fails.

The default condition can be changed at the Organization level from the **Org Preferences page** in the Org settings section, [here](https://test-manager.lambdatest.com/org-settings/kane-ai/failure-conditions). 

<img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/failure-conditions/failure-conditions-org-settings.png').default} alt="failure_conditions_default_settings" className="doc_img"/>

:::note
 These settings will be applied to all the **new tests** being created in that Organization & can only be edited by the **Admins** of the Organization. 
:::

:::info
If you are transitioning from a Hard & Soft Assertions approach, think of **Fail test immediately** as your **Hard Assertion**, which halts on assertion failure, and **Warn but continue execution** as your **Soft Assertion**, which logs the failure but continues execution.
:::
