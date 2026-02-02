---
id: copy-and-move-support-for-test-cases
title: Copy and Move Support for Test Cases
hide_title: true
sidebar_label: Copy and Move Test Cases
description: Learn how to efficiently copy and move test cases within TestMu AI, streamlining your testing process and enhancing organization across multiple projects.
keywords:
  - copy test cases
  - move test cases
  - copy and move test cases to different folders
url: https://www.testmuai.com/support/docs/copy-and-move-support-for-test-cases/
site_name: LambdaTest
slug: copy-and-move-support-for-test-cases/
canonical: https://www.testmuai.com/support/docs/copy-and-move-support-for-test-cases/
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
          "name": "Copy and Move Support for Test Cases",
          "item": `${BRAND_URL}/support/docs/copy-and-move-support-for-test-cases/`
        }]
      })
    }}
></script>

# Copy and Move Support for Test Cases

The Copy and Move feature for test cases helps streamline the organization of test cases. It allows you to easily transfer test cases between different folders or projects, making it simple to keep everything organized. This feature enhances team collaboration and ensures that test cases are always accessible where needed.

**How to Copy Multiple Test Cases to other Projects & Folders**

1. Navigate to the list of test cases in your project. Multi-select the test cases you wish to move or copy to specific folders. Click on the **Bulk Actions** button at the top right of the screen. In the dropdown menu, select **Copy**.

:::tip
 You can also **select all test cases** in one step by clicking on the top most Tickbox, highlighted below :
:::

<img loading="lazy" src={require('../assets/images/mobile-app-testing/bulk_copy_testcases.jpeg').default} alt="Real "  className="doc_img" width="1366" height="629"/>

2. In the dropdown menu, select **Project** and **Target Folder** of your choice where you want to copy the selected test cases. 

:::note
 Test Cases can be Copied/Moved between Projects.
:::


3. You also have the option to create a new folder or a sub-folder within the main folder by clicking on **Add Folder**.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/add_folder_bulk_action.jpeg').default} alt="Real "  className="doc_img" width="1366" height="629"/>

4. Add the Name of the Folder to be created.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/add_folder_name_bulk_action.jpeg').default} alt="Real "  className="doc_img" width="1366" height="629"/>

5. After selecting or creating the target folder, click on the **Copy** button to complete the process.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/added_folder_bulk_action.jpeg').default} alt="Real "  className="doc_img" width="1366" height="629"/>

5. A notification will appear at the top right of the screen confirming the test cases have been copied. Click **View Copied Test Cases** to go directly to the new folder and verify the copied test cases. 

<img loading="lazy" src={require('../assets/images/mobile-app-testing/bulk_copy_ack.jpeg').default} alt="Real "  className="doc_img" width="1366" height="629"/>

6. The test cases will now be displayed in the selected folder. In this case, we have created a subfolder named **Register** under **Services page** folder, the test cases will be reflected in that location. 

<img loading="lazy" src={require('../assets/images/mobile-app-testing/bulk_copy_res.jpeg').default} alt="Real "  className="doc_img" width="1366" height="629"/>

**How to Move Multiple Test Cases to other Projects & Folders**

1. Select multiple test cases of your choice, Click on the **Bulk Actions** button located at the top right of the screen. From the dropdown menu, choose **Move**.  

<img loading="lazy" src={require('../assets/images/mobile-app-testing/bulk_move_testcases.jpeg').default} alt="Real "  className="doc_img" width="1366" height="629"/>

2. In the next dropdown menu, select **Project** and **Target Folder** of your choice and click on **Move Test Cases**.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/select_folder_bulk_move.jpeg').default} alt="Real "  className="doc_img" width="1600" height="723"/>

3. A notification will appear at the top right confirming the test cases have been moved. Click on **View Moved Test Cases** to navigate to the new folder.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/bulk_move_ack.jpeg').default} alt="Real "  className="doc_img" width="1600" height="724"/>
