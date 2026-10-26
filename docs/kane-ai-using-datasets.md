---
id: kane-ai-using-datasets
title: KaneAI - Using Datasets on Test Manager
hide_title: false
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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/kane-ai-using-datasets/"
    },
    "headline": "KaneAI - Using Datasets on Test Manager",
    "description": "Learn how to use datasets in the KaneAI test cases",
    "url": "https://www.testmuai.com/support/docs/kane-ai-using-datasets/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "KaneAI",
    "keywords": [
      "testmu ai automation",
      "testmu ai kaneai",
      "kaneai scroll elements"
    ],
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "dateModified": "2026-10-13T00:00:00+05:30"
  }) }}
/>
Datasets in KaneAI-<BrandName /> allow you to manage and reuse input values for test cases efficiently. This guide explains how to create, edit, and manage these data sets while utilizing parameters to run test cases with a variety of inputs, improving flexibility and reducing manual data entry.

## Accessing Datasets within a Project
Navigate to **Datasets** within your Test Manager project and review the existing data sets.
> **Note :** Parameters act as placeholders for data, enabling test cases to use varying inputs.

<img loading="lazy" src={require('../assets/images/kane-ai/features/datasets/1.png').default} alt="Image" className="doc_img img_center"/>

Every test case which uses parameters in KaneAI automatically generates a Default Dataset during authoring. Example: a Default Dataset might capture initial values like form submissions.

The Default Dataset is editable: you can change the values in row 1, add more rows, and edit their values. You cannot delete row 1 or add, rename, or delete its parameter columns because those columns follow the parameters used in the test case. Make a copy if you need to change the columns independently.

<img loading="lazy" src={require('../assets/images/kane-ai/features/datasets/2.png').default} alt="Image" className="doc_img img_center"/>

<img loading="lazy" src={require('../assets/images/kane-ai/features/data-driven-testing/dataset-editor.png').default} alt="Default Dataset editor showing parameter columns, four rows, and the row 1 execution note; example cell values are obscured" className="doc_img"/>

Row 1 supplies values during authoring and Playground execution. When no Dataset is selected for a test run, the test uses row 1 of its Default Dataset. Empty cells run empty; they do not fall back to the parameter's Seed Value.

## Creating and Editing Datasets
- To create a dataset, navigate to the Datasets section, click "Create Dataset," and define parameters and values as needed.
- For existing datasets, edit values directly in the Default Dataset or create a copy when you need to change its parameter columns. You can access version history as described below.

<img loading="lazy" src={require('../assets/images/kane-ai/features/datasets/3.png').default} alt="Image" className="doc_img img_center"/>

## Adding Data to Datasets
Open the editable Dataset. Click on "**Add a Row After**" or **Add row**, depending on the editor view. Enter your desired values (e.g., 5 or Mike), then save. Row 1 can be edited but cannot be deleted.

<img loading="lazy" src={require('../assets/images/kane-ai/features/datasets/4.png').default} alt="Image" className="doc_img img_center"/>

### Autofill with AI

Alternatively, you can use the **Autofill with AI** option to automatically populate data fields. AI generates values based on the parameter's name, saving time and effort.

<img loading="lazy" src={require('../assets/images/kane-ai/features/datasets/5.png').default} alt="Image" className="doc_img img_center"/>

### Importing Data via CSV Files
Prepare your data set in CSV format. Use the Import Data feature in the data set editor, verify the imported data, and save the changes to ensure synchronization.

<img loading="lazy" src={require('../assets/images/kane-ai/features/datasets/6.png').default} alt="Image" className="doc_img img_center"/>

## Utilizing Version History
- **Version Tracking :** All changes to data sets are recorded.
- **Revert or Restore :** Easily revert to a previous version if needed.
- **Backup Assurance :** Ensure data integrity with a maintained history of edits.

<img loading="lazy" src={require('../assets/images/kane-ai/features/datasets/7.png').default} alt="Image" className="doc_img img_center"/>

## Executing Test Cases with Parameters
Combine multiple data sets with their respective parameters.
Execute test cases using these data sets to simulate diverse input scenarios.

Choose a Dataset for each run configuration that needs data-driven input. The run creates a test instance for every row in the selected Dataset. If no Dataset is selected, it uses row 1 of the Default Dataset.

For Seed Values and per-test-case parameter values, see [Using Parameters](/support/docs/kane-ai-using-parameters/). To export the values and results used by each instance, see [Test Run Output](/support/docs/kaneai-test-run-output/).

<img loading="lazy" src={require('../assets/images/kane-ai/features/datasets/8.png').default} alt="Image" className="doc_img img_center"/>

## Video Explanation
<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/kane-ai/features/datasets/output.mp4').default} type="video/mp4" />
</video>
