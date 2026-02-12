---
id: smartui-multiple-projects-per-repo
title: Configure Multiple Projects per repo
sidebar_label: Multiple Projects per repo
description: Learn how to manage multiple SmartUI projects in a single repository with ease using this detailed documentation.
keywords:
  - testmu ai
  - smart ui
  - videos
  - storybook
url: https://www.testmuai.com/support/docs/smartui-multiple-projects-per-repo/
site_name: TestMu AI
slug: smartui-multiple-projects-per-repo/
canonical: https://www.testmu.ai/support/docs/smartui-multiple-projects-per-repo/

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Monorepo",
          "item": `${BRAND_URL}/support/docs/smartui-multiple-projects-per-repo/`
        }]
      })
    }}
></script>
SmartUI allows you to manage and test UI components effectively within a single repository. By organizing multiple projects in a single repository, you can centralize your workflows and streamline collaboration. This guide will walk you through setting up multiple projects in a repository for SmartUI and how you can trigger the same via GitHub Actions pipeline.

## Setting Up Multiple Projects in a Repository

### Prerequisites
- Your <BrandName /> [Username and Access key](https://accounts.lambdatest.com/security).
- Your SmartUI Project Token

### Step 1: Organize Your Repository
Create a repository where you can organize your projects into various directories. You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample from the <BrandName /> GitHub repository to run the tests on the SmartUI.
<a href="https://github.com/LambdaTest/smartui-monorepo-sample/" className='github__anchor'><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className='doc_img'/> View on GitHub</a>
:::

### Step 2: Create your Secrets
- Click on the **Settings** of your repository.
- Go to the **Security** option > **Secrets and Variables** > **Actions**.
- Create your secrets with variable name **LT_USERNAME** and **LT_ACCESS_KEY**. You can fetch your credentials from the [Accounts and Settings](https://accounts.lambdatest.com/security) dashboard.

### Step 3: Create your GitHub Actions Workflow
- Navigate to the main page of the repository.
- Under your repository name, click **Actions**.
- In the left sidebar, click the **New workflow** button.

```yaml reference
https://github.com/LambdaTest/smartui-monorepo-sample/blob/main/.github/workflows/main.yml
```

### Step 4: Execute your projects
- Click on the **Actions** button of your repository to trigger the pipeline.
- Provide the **PROJECT TOKEN** to trigger your code projects.
- Go to the [SmartUI Dashboard](https://smartui.lambdatest.com/) to check the results.
