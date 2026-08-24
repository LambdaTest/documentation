---
id: kane-ai-using-datasets
title: How to Use Datasets With KaneAI
hide_title: true
toc_max_heading_level: 2
sidebar_label: Datasets
description: Learn how to use datasets in the KaneAI test cases
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai scroll elements
  - kaneai sidebar scroll
url: https://www.testmuai.com/support/docs/kane-ai-using-datasets/
site_name: TestMu AI
slug: kane-ai-using-datasets/
canonical: https://www.testmuai.com/support/docs/kane-ai-using-datasets/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "name": "KaneAI Datasets",
          "item": `${BRAND_URL}/support/docs/kane-ai-using-datasets/`
        }]
      })
    }}
></script>

# How to Use Datasets With KaneAI
***

If parameters are the placeholders in your steps, datasets are what supply their values. Datasets in KaneAI group the input values a parameterized test case runs against, so you reuse them instead of re-entering data. For the parameters themselves, see [KaneAI Using Parameters](/support/docs/kane-ai-using-parameters/).

## Access Datasets in a Project
***

Go to the Parameters section within your project to review existing datasets.

<img loading="lazy" src={require('../assets/images/kane-ai/features/datasets/1.png').default} alt="Access datasets in a project" className="doc_img img_center"/>

Every test case that uses parameters generates a default dataset during authoring, capturing initial values such as a form submission.
> Default datasets are immutable and cannot be modified.

<img loading="lazy" src={require('../assets/images/kane-ai/features/datasets/2.png').default} alt="Default dataset generated during authoring" className="doc_img img_center"/>

## Create and Edit Datasets
***

Create a new dataset or edit a copy of the default one.

- To create a dataset, go to the Datasets section, click **Create Dataset**, and define the parameters and values.
- To edit values, open the version history of a default dataset, create a copy, and edit the copy.

<img loading="lazy" src={require('../assets/images/kane-ai/features/datasets/3.png').default} alt="Create and edit a dataset" className="doc_img img_center"/>

## Add Data to a Dataset
***

Open the editable dataset. Click **Add a Row After**, then enter your values (for example, 5 or Mike).

<img loading="lazy" src={require('../assets/images/kane-ai/features/datasets/4.png').default} alt="Add a row of data to a dataset" className="doc_img img_center"/>

### Autofill With AI
***

Use the **Autofill with AI** option to populate data fields automatically. AI generates values based on each parameter's name.

<img loading="lazy" src={require('../assets/images/kane-ai/features/datasets/5.png').default} alt="Autofill dataset values with AI" className="doc_img img_center"/>

### Import Data via CSV
***

Prepare your dataset in CSV format. Use the **Import Data** feature in the dataset editor, verify the imported data, and save the test case to synchronize it.

<img loading="lazy" src={require('../assets/images/kane-ai/features/datasets/6.png').default} alt="Import dataset values from a CSV file" className="doc_img img_center"/>

## Use Version History
***

Every dataset change is tracked, so you can restore an earlier state.

- **Version tracking:** all dataset changes are recorded.
- **Revert or restore:** revert to a previous version when needed.
- **Backup assurance:** a maintained history keeps data intact.

<img loading="lazy" src={require('../assets/images/kane-ai/features/datasets/7.png').default} alt="Dataset version history" className="doc_img img_center"/>

## Execute Test Cases With Datasets
***

Combine datasets with their parameters, then execute the test cases against those datasets to cover diverse input scenarios.

<img loading="lazy" src={require('../assets/images/kane-ai/features/datasets/8.png').default} alt="Execute test cases against datasets" className="doc_img img_center"/>

## Video Explanation
***

Watch datasets created and used to drive a test.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/kane-ai/features/datasets/output.mp4').default} type="video/mp4" />
</video>

## Next Steps
***

Continue with these guides:

- [KaneAI Using Parameters](/support/docs/kane-ai-using-parameters/)
- [Test Manager](/support/docs/test-manager/)
