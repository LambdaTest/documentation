---
id: kaneai-test-run-output
title: Export KaneAI Test Run Data
hide_title: false
sidebar_label: Test Run Output
description: Generate a CSV or XLSX file with the values and status used by each KaneAI test instance.
keywords:
  - kaneai
  - test run output
  - csv export
  - data driven testing
url: https://www.testmuai.com/support/docs/kaneai-test-run-output/
site_name: TestMu AI
slug: kaneai-test-run-output/
canonical: https://www.testmuai.com/support/docs/kaneai-test-run-output/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": BRAND_URL },
      { "@type": "ListItem", "position": 2, "name": "Support", "item": `${BRAND_URL}/support/docs/` },
      { "@type": "ListItem", "position": 3, "name": "KaneAI Test Run Output", "item": `${BRAND_URL}/support/docs/kaneai-test-run-output/` }
    ]
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": ["Article", "TechArticle"],
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.testmuai.com/support/docs/kaneai-test-run-output/" },
    "headline": "Export KaneAI Test Run Data",
    "description": "Generate a CSV or XLSX file with the values and status used by each KaneAI test instance.",
    "url": "https://www.testmuai.com/support/docs/kaneai-test-run-output/",
    "inLanguage": "en",
    "articleSection": "KaneAI",
    "author": { "@type": "Organization", "name": "TestMu AI", "url": "https://www.testmuai.com/" },
    "publisher": { "@type": "Organization", "name": "TestMu AI", "url": "https://www.testmuai.com/" },
    "dateModified": "2026-10-13T00:00:00+05:30"
  }) }}
/>

A KaneAI run output file records the data used during execution. It contains one row for each test instance, including the parameter values supplied to that instance and the variables it captured. You can add the final instance status as a separate column. Secrets are excluded. An instance can still have a status row when it uses no parameters or variables.

## Set a project default

1. In Test Manager, open your project and select **Settings** > **Test Run Output**.
2. Turn on **Generate a run output file**.
3. Choose **CSV** or **XLSX** under **Format**, then save the settings.

<img loading="lazy" src={require('../assets/images/kane-ai/features/data-driven-testing/run-output-project-defaults.png').default} alt="Project Settings Test Run Output defaults with generation enabled and CSV selected" className="doc_img"/>

These defaults apply to new test runs. Existing runs keep their own settings. You can review and change the output options for each run before starting it.

## Configure an individual run

1. Open a saved KaneAI test run and select **Run on HyperExecute** > **Run Instances Now**.
2. In the **Run with HyperExecute** drawer, open **Advanced Configurations** > **Test Configuration**.
3. Turn on **Generate a run output file** and choose the **Format**.
4. Optionally, turn on **Add instance status as a separate column** to include each instance's final pass or fail result.
5. Optionally, turn on **Save run output as a reusable File** and enter a unique **File alias**. A later test can reference that File as `{{file.<alias>}}`.
6. Start the run. KaneAI generates the output after the run completes.

<img loading="lazy" src={require('../assets/images/kane-ai/features/data-driven-testing/run-output-options.png').default} alt="Per-run Advanced Configurations with CSV output and instance status enabled" className="doc_img"/>

To make the output available as a File for a later test, enable the reusable File option and supply its alias before starting the run.

<img loading="lazy" src={require('../assets/images/kane-ai/features/data-driven-testing/run-output-reusable-file.png').default} alt="Per-run Advanced Configurations with Save run output as a reusable File enabled and File alias field visible" className="doc_img"/>

:::note
For KaneAI V4 runs, these output controls are available with **Classic Report**. They are not currently available with **Evidence Report**.
:::

## Download a completed run output

After the run finishes, open its **Test Instances** page and click **Download run output** in the upper-right corner. The run summary shows the output format, the number of rows, and whether the instance status column was included.

<img loading="lazy" src={require('../assets/images/kane-ai/features/data-driven-testing/test-run-output-download.png').default} alt="Completed test run with Download run output button and CSV output summary" className="doc_img"/>

If you enabled **Save run output as a reusable File**, the same summary also shows its alias and generated filename, with a separate **Download** button. The File is replaced on each execution of that run.

## Reuse the output

If you saved the output as a File, you can reference it in a later test step as `{{file.<alias>}}`. You can also import a run output file into a Dataset when you need its values as rows for a later run. A scheduled run can replace the File it owns on subsequent executions; a different schedule must use another alias.

The file is generated from completed test instances. KaneAI does not support writing to the output CSV or XLSX from an individual test step.

See [Using Datasets](/support/docs/kane-ai-using-datasets/) for input rows and [Upload and Download Files](/support/docs/kaneai-upload-and-download-files/) for File aliases.
