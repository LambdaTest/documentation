---
id: kane-ai-using-datasets
title: KaneAI - Using Datasets on Test Manager
hide_title: false
sidebar_label: Datasets
description: Learn how to use datasets in the KaneAI test cases
keywords:
  - lambdatest automation
  - lambdatest kaneai
  - kaneai scroll elements
  - kaneai sidebar scroll
url: https://www.lambdatest.com/support/docs/kane-ai-using-datasets/
site_name: LambdaTest
slug: kane-ai-using-datasets/
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
          "name": "KaneAI Datasets",
          "item": "https://www.lambdatest.com/support/docs/kane-ai-using-datasets/"
        }]
      })
    }}
></script>
Data sets in KaneAI-LambdaTest allow you to manage and reuse input values for test cases efficiently. This guide explains how to create, edit, and manage these data sets while utilizing parameters to run test cases with a variety of inputs, improving flexibility and reducing manual data entry.

## Step 1: Accessing Parameters and Datasets
Navigate to the Parameters section within your project and review existing data sets under this section.
> **Note :** Parameters act as placeholders for data, enabling test cases to use varying inputs.

<img loading="lazy" src={require('../assets/images/kane-ai/features/datasets/1.png').default} alt="Image" className="doc_img img_center"/>

Every test case automatically generates a default data set during authoring. Example: A default data set might capture initial values like form submissions.
> Default Datasets are immutable in nature i.e. they cannot be modified.

<img loading="lazy" src={require('../assets/images/kane-ai/features/datasets/2.png').default} alt="Image" className="doc_img img_center"/>

## Step 2: Creating and Editing Datasets
- Access the version history of a default data set.
- Create a copy of the default data set. The copied data set is editable, allowing updates and the addition of values.

<img loading="lazy" src={require('../assets/images/kane-ai/features/datasets/3.png').default} alt="Image" className="doc_img img_center"/>

## Step 3: Adding Data to Datasets
Open the editable Dataset. Click on "**Add a Row After**". Enter your desired values (e.g., 5 or Mike).

<img loading="lazy" src={require('../assets/images/kane-ai/features/datasets/4.png').default} alt="Image" className="doc_img img_center"/>

Alternatively, you can use the **Autofill with AI** option to automatically populate data fields. AI generates values based on the parameter's name, saving time and effort.

<img loading="lazy" src={require('../assets/images/kane-ai/features/datasets/5.png').default} alt="Image" className="doc_img img_center"/>

## Step 4: Importing Data via CSV Files
Prepare your data set in CSV format. Use the Import Data feature in the data set editor and verify imported data and save the test case to ensure synchronization.

<img loading="lazy" src={require('../assets/images/kane-ai/features/datasets/6.png').default} alt="Image" className="doc_img img_center"/>

## Step 5: Utilizing Version History
- **Version Tracking :** All changes to data sets are recorded.
- **Revert or Restore :** Easily revert to a previous version if needed.
- **Backup Assurance :** Ensure data integrity with a maintained history of edits.

<img loading="lazy" src={require('../assets/images/kane-ai/features/datasets/7.png').default} alt="Image" className="doc_img img_center"/>

## Step 6: Executing Test Cases with Parameters
Combine multiple data sets with their respective parameters.
Execute test cases using these data sets to simulate diverse input scenarios.

<img loading="lazy" src={require('../assets/images/kane-ai/features/datasets/8.png').default} alt="Image" className="doc_img img_center"/>


## Video Explanation
<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/kane-ai/features/datasets/output.mp4').default} type="video/mp4" />
</video>
