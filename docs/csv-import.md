---
id: csv-import
title: Import Test Cases from CSV
hide_title: false
sidebar_label: Import CSV
description: Simplify your csv import with TestMu AI's Test Manager. Easily upload and manage test cases to enhance testing efficiency and productivity.
keywords:
  - test case import
  - csv import
  - test case
url: https://www.testmu.ai/support/docs/csv-import
site_name: LambdaTest
slug: csv-import
---

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
          "name": "Import Test Cases form CSV",
          "item": `${BRAND_URL}/support/docs/csv-import/`
        }]
      })
    }}
></script>
CSV import in Test Manager allows seamless import of existing test cases from various sources, making the transition and consolidation of testing assets effortless.

## Steps for Importing Test Cases:
Follow these steps to import test cases using a CSV file:

### 1. Upload CSV file
- **Choose Project:** Select the project into which you want to import the test cases.
- **CSV Upload Option:** If you have created a new project, you’ll see the **Drop your CSV or browse** option. Alternatively, navigate to ` Add Test Case > Import CSV ` to initiate the import.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/csv-import/empty_project.png').default} alt="empty_project" className="doc_img"/>

- **File Preview:** After selecting your CSV file, a preview will appear displaying the contents of the file to be imported.
- **Next Step:** Click Next to proceed to the Field Mapping stage.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/csv-import/upload_csv.png').default} alt="upload_csv" className="doc_img"/>

### 2. Map fields
In this step, you will map the CSV file headers to corresponding fields in Test Manager. This enables Test Manager to understand where each piece of information from the CSV should be placed.
Following entities can be mapped & imported:
- **Test Case Title:** Using ` Title ` option
- **Test Case Steps:** Using ` Steps ` option
- **Test Case Step Outcomes:** Using ` Outcome ` option
- **BDD Scenarios**
- **System Fields**
- **Custom Fields**
- **Folder Names:** Using ` Folder ` option
- **Jira Tickets:** Using ` Link Jira ` option

#### Prerequisites:
- To map Custom Fields, ensure the custom fields are created and linked to the project before beginning the import process.
- To import Jira Tickets, ensure your Jira instance is connected to Test Manager (refer [here](/support/docs/link-jira-issues-with-test-manager/)). If you forget to connect it before starting the import, don't worry, the test cases will automatically link to the appropriate Jira tickets once the integration is set up.

**Following format of Test Cases are supported for Importing:**
1. **Test cases use a single row:** Use this option when your steps, outcomes, or BDDs are combined in one row per test case & indexed like: 
``` 1. Got to lambdatest.com 2. click on login button ```
2. **Test cases use a multiple row:** Use this option when your steps, outcomes, or BDDs are present in separate rows.  

:::note
Mapping at least one CSV header with the **title** field is mandatory in this step, as the **title** serves as the unique identifier for your test cases.
:::

<img loading="lazy" src={require('../assets/images/mobile-app-testing/csv-import/map_fields.png').default} alt="map_fields" className="doc_img"/>


### 3. Map values
Once you've mapped the CSV headers to Test Manager fields, it's time to map the CSV field values to the selected fields.

- **System Fields Values:** Existing values will be automatically mapped. For any new values, you can map them to existing values or create new values using the ` Create new value ` option.
- **Custom Fields Values:** Values will be automatically generated and applied.
- **Folder Names:** If your CSV includes folder paths, you can select the appropriate delimiter to split the folder path when parsing. For example, use ` / ` to split the folder path ` "folder1/folder2/folder3" `.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/csv-import/map_values.png').default} alt="map_values" className="doc_img"/>


### 4. Preview import
- **Preview:** Before finalizing the import, you’ll have a chance to preview the test cases and the mapped CSV values. This allows you to ensure everything is mapped correctly.

- **Import Test Cases:** After verifying the mappings, click ` Import Test Cases ` to complete the import process.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/csv-import/preview_import.png').default} alt="preview_import" className="doc_img"/>

:::note
By default the Test Cases not having any folder defined for them, go into the **Untitled** folder. 
:::

Let's see the imported data:
 
<img loading="lazy" src={require('../assets/images/mobile-app-testing/csv-import/testcases_imported.png').default} alt="testcases_imported" className="doc_img"/>

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        CSV Import
      </span>
    </li>
  </ul>
</nav>
