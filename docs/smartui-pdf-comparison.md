---
id: smartui-pdf-comparison
title: SmartUI Visual Regression Testing for PDF Files
sidebar_label: Smart PDF Comparison 
description: In this documentation, learn how to perform Visual Regression testing of PDFs using SmartUI.
keywords:
  - Visual Regression
  - Visual Regression Testing Guide
  - Visual Regression Test Automation
  - Visual Regression Automation Testing
  - Running Visual Regression Tests
  - Visual Regression Testing Online
  - Run Visual Regression
  - Visual Regression Run Specific Test
  - Visual Regression Testing Environment
  - How to Run Visual Regression Tests
url: https://www.lambdatest.com/support/docs/smartui-pdf-comparison/
site_name: LambdaTest
slug: smartui-pdf-comparison/
---

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
          "name": "WebDriverIO With Appium",
          "item": "https://www.lambdatest.com/support/docs/smartui-upload-api-v2/"
        }]
      })
    }}
></script>
:::caution
This functionality is exclusive to our enterprise plan subscribers on SmartUI. For additional details or inquiries, please [contact us](https://www.lambdatest.com/demo).
:::

## Prerequisites for Using Smart UI

- Familiarity with HTTP APIs is essential.
- Visit the [`LambdaTest SmartUI`](https://smartui.lambdatest.com/) page and log in with your credentials.
- Obtain your `LT_USERNAME` and `LT_ACCESS_KEY` by clicking on the `Access Key` button, located at the top right corner of your dashboard.

In the following section, we will walk you through the process of conducting your first Visual Regression test using LambdaTest's SmartUI platform.

<div className="ytframe"> 
<div className="youtube" data-embed="H91z4j5_JvQ">
    <div className="play-button"></div>
</div>
</div>

## Getting Started with PDF Comparison

  <iframe
  src="https://app.storylane.io/share/cq92opbjnlxu"
  width="100%"
  height="100%"
  allowFullScreen
  loading="lazy"
  importance="low"
  title="LambdaTest Automation Testing Demo"
  className="storylane-iframe"
></iframe>


## Step 1: Establishing a SmartUI Project

To initiate a SmartUI PDF Comparison Project, adhere to the following instructions:

1. Navigate to the [SmartUI Projects Page](https://smartui.lambdatest.com/).
2. Tap on the `new project` button.
3. Specify your platform type as `PDF`.
4. Provide your `project` name, designate `approvers`, and add `tags` (optional).
5. Confirm your entry by clicking on **Submit**.

Once your project is active, retrieve your `Project Token` from the application. Here's an example of a project token:

```bash
projectToken = "123456#1234abcd-****-****-****-************"
```

## Step 2: Integrating PDFs via API

After setting up your SmartUI Project, you can upload your local PDF files to your project. This will automatically generate a build by capturing snapshots of every page.

Here's how you can upload your PDFs:

1. Retrieve your API `URL Endpoint` post activation of your enterprise plan. To schedule a demonstration, click [here](https://www.lambdatest.com/demo).

2. Append the following parameters to your request payload via `form-body`:

| Variable     | Type   | Description                                                                                                                                      | Required? |
| ------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| projectToken | string | This token is required to upload PDF files and validate your project. <br/> Example: `projectToken:123456#1234abcd-****-****-****-************` | Yes       |
| pathToFiles  | array  | Add the path to the PDFs that will be uploaded. <br/> Example: `pathToFiles : [ "path/to/pdf-1", "path/to/pdf-2"]`                                      | Yes       |
| buildName    | string | Assign a name of your choice to the build comprising the uploaded PDFs. <br/> Example: `buildName : #&lt;Build_Name&gt;                               | No        |

:::note 
Only files in `.pdf` format are compatible with this feature.
:::


## Use Cases of Smart PDF Comparison

1. **Software Documentation**: In software development, PDF comparison can be utilized to ensure the accuracy and consistency of user manuals, system documentation, and more. It can help in tracking changes made in the document across different software versions or updates.

2. **Legal and Compliance Checks**: In legal practices and compliance-heavy industries, comparing different versions of contracts, agreements, or regulatory documents is common. With PDF comparison, one can easily spot differences, alterations, or anomalies, ensuring every detail aligns with legal and compliance requirements.

3. **Design Validation**: For graphic designers, artists, or anyone involved in the creation of visual content, PDF comparison can be used to validate design changes and ensure consistency across different versions of a design.

4. **Proofreading and Editing**: In the publishing industry or any other industry where documents are created and edited, the PDF comparison feature can be invaluable. It can help detect any changes made between different versions of a document, allowing editors and proofreaders to quickly find and correct mistakes.

5. **Quality Assurance**: In industries where accuracy is paramount, such as manufacturing or engineering, PDF comparison can be used for quality assurance. Comparing design specs, product blueprints, or operational guidelines can ensure consistency and adherence to quality standards.

6. **Archiving and Record Keeping**: For businesses or organizations that need to maintain records over a long period, PDF comparison can help verify the accuracy and integrity of these archives. It can highlight any alterations or modifications made to a document over time.

In summary, PDF comparison is a versatile tool that can streamline workflows, improve accuracy, and enhance productivity in many different sectors and use cases.