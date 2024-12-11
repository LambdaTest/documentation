---
id: kane-ai-using-variables
title: KaneAI - Using Variables in Test Cases
hide_title: false
sidebar_label: Variables Guide
description: Learn how to use variables in the KaneAI test cases
keywords:
  - lambdatest automation
  - lambdatest kaneai
  - kaneai scroll elements
  - kaneai sidebar scroll
url: https://www.lambdatest.com/support/docs/kane-ai-using-variables/
site_name: LambdaTest
slug: kane-ai-using-variables/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

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
          "name": "KaneAI Jira Integration",
          "item": "https://www.lambdatest.com/support/docs/kane-ai-using-variables/"
        }]
      })
    }}
></script>
The new variable definition feature in KaneAI allows users to define reusable variables, assign them values, and use those values within test cases. This feature enhances flexibility, readability, and consistency across test cases, making it easier to maintain and modify them.

## Why Use Variables?
Using variables enables you to:
- Avoid repetitive entries in test cases.
- Get values from within the application under test & store it in variable to validate the accuracy of data.
- Increase the reusability and adaptability of test scripts, especially useful for parameters that might change frequently, such as URLs, credentials, or environmental settings.

## Variable Syntax
To work with variables in KaneAI, you need to follow these syntax rules:

- Variables are defined using natural language such as "set new_variable as value".
- Variable usage can be done using the `{{` prefix to list all existing variables.
- Example: `{{username}}`, `{{phoneNumber}}`, `{{address}}`

## Creating Variables
To create a variable:

- Navigate to the "Write a Step" text field
- Type your instruction in natural language such as: *Set username as John* and a variable `{{username}}` will be created with value John.

Example:
```bash
Set username as John
```

## Using Variables
To use a previously created variable in any subsequent step or test case, reference the variable using the same `{{` syntax. This will list down all existing variables for this test. Format: *use the value of `{{variableName}}`*

Example:
```bash
use the value of {{phoneNumber}} in the given text field
```

## Best Practices
### Naming Conventions
- Use descriptive names for your variables
- Use camelCase or underscore for multi-word variable names
