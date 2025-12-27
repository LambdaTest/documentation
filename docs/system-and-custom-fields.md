---
id: system-and-custom-fields
title: System and Custom Fields
hide_title: true
sidebar_label: System and Custom Fields
description: Learn about TestMu AI's system and custom Fields feature for test project organization. Explore System Fields and create Custom Fields to enhance your testing workflows.
keywords:
  - test manager
  - fields and values
  - system fields
  - custom fields
  - projects
url: https://www.lambdatest.com/support/docs/system-and-custom-fields/
site_name: LambdaTest
slug: system-and-custom-fields/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "System and Custom Fields",
          "item": "https://www.lambdatest.com/support/docs/system-and-custom-fields/"
        }]
      })
    }}
></script>

# System and Custom Fields

Explore the structured organization of your test projects through the use of Fields and Values, accessible via the Project's dashboard. Dive into System Fields for essential categorizations or enhance your project's flexibility with Custom Fields to improve your testing workflows.

To access the System & Custom Fields settings, click on **Settings** in the top right hand side in the Project's dashboard.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/system-and-customs-step-one.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

You can manage your **System** and **Custom Fields** in this Fields page.

### System Fields
Are default fields present in the Test Manager. These fields help organize and track your test cases, test runs or instances. They can be seamlessly integrated into your test management process and customized by adding values. Test Cases & Test Runs have their separate System Fields. 

- Test Cases have these pre defined fields: **Priority**, **Status**, and **Type**. 
- Test Runs can have only one System Field that is the `Status`. 

To manage these fields, navigate to the System Fields tab, where you'll see dedicated sections for both Test Case and Test Runs fields.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/system-fields.png').default} alt="Real "  className="doc_img" width="1366" height="629"/>

These System Fields can have Custom Values which can be added by simply selecting any field and clicking on **Add Value**.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/edit-system-fields.png').default} alt="Real "  className="doc_img" width="1366" height="629"/>

:::tip
 Every new Status value of Test Runs will have a unique random color defined to it on creation. 
:::

### Custom Fields 
Allow you to store additional information beyond what System Fields offer. To create a new field, enter the required details and choose the appropriate data type from the **Type** function. Available types include String, Textarea, Number, Dropdown (Single Select), Dropdown (Multi Select), Boolean (Checkbox), Date, User, and URL.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/create-new-fields.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

For Dropdown types (Single Select and Multi Select), you also have the option to add values.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/dropdown-types.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

Enter the name, placeholder, mark the field, apply it to all future projects if required and click create.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/custom-fields.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

You can also link a single or multiple projects of your choice to the custom fields and click on **Save changes**.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/link-projects.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>



<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        System and Custom Fields
      </span>
    </li>
  </ul>
</nav>
