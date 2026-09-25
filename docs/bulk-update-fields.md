---
id: update-fields
title: Bulk Update Fields
hide_title: true
sidebar_label: Bulk Update Test Case Fields
description: Learn how to Bulk update system & custom fields.
keywords:
  - bulk action
  - bulk update
  - bulk update fields
url: https://www.testmuai.com/support/docs/bulk-update-fields/
site_name: TestMu AI
slug: bulk-update-fields/
canonical: https://www.testmuai.com/support/docs/bulk-update-fields/
---


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
          "name": "Bulk Update Fields",
          "item": `${BRAND_URL}/support/docs/bulk-update-fields/`
        }]
      })
    }}
></script>

# Bulk Update System & Custom Fields

Utilize the bulk action feature that streamlines the process of updating system & custom fields across multiple test cases, enhancing efficiency and organization of Test Cases. With this feature, users can seamlessly modify key system fields such as Priority, Status, Automation Status, Type and all available custom fields for numerous test cases simultaneously, eliminating the need for time-consuming individual updates.

## Steps to Bulk Update Fields

1. Bulk select the test cases whose fields you want to update.

2. Click on the `Update Fields` option.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/bulk_update_fields.jpeg').default} alt="Update Fields option for bulk-selected test cases" className="doc_img" width="1366" height="629"/>

3. Select the fields you want to update the values for.

4. Update the values of the fields & click on `Update Fields` to apply the updates.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/edit_fields_bulk_action.jpeg').default} alt="Editing field values in the bulk update dialog" className="doc_img" width="1366" height="629"/>

A notification will appear at the top right confirming the fields have been updated.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/bulk_field_update_res.jpeg').default} alt="Confirmation that the fields were updated" className="doc_img" width="1366" height="629"/>

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
        Bulk Update Fields
      </span>
    </li>
  </ul>
</nav>
