---
id: hyperexecute-azure-associate-test-case
title: Associate Test Cases 
hide_title: true
sidebar_label: Associate the Test Cases
description: Associate test cases with Test Plan via Visual Studio Code. Follow the instructions to integrate your test cases and enhance your testing process seamlessly
keywords:
    - hyperexecute integrations
    - hyperexecute integrations with products
    - products
    - azure test plan
    - azure integration
    - azure associate test case
    - test case
url: https://www.testmu.ai/support/docs/hyperexecute-azure-associate-test-case
site_name: LambdaTest
slug: hyperexecute-azure-associate-test-case
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
          "name": "Azure Test Plan Integration with HyperExecute",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-azure-associate-test-case/"
        }]
      })
    }}
></script>

# Step 2: How to Associate the Test Cases

> Test Plan works in Association with specific [**Visual Studio subscriptions**](https://learn.microsoft.com/en-us/azure/devops/test/create-a-test-plan?view=azure-devops#:~:text=Basic%20%2B%20Test%20Plans%20access%20level%20to%20add%20test%20plans%20and%20test%20suites%2C%20delete%20test%20artifacts%2C%20and%20define%20test%20configurations.%20Or%2C%20have%20one%20of%20the%20following%20Visual%20Studio%20subscriptions).

After setting up a Test Plan, now you need to associate your test cases as well with the Test Plan. To perform the same, we must have a Visual Studio IDE installed in our local machine. Login with same credentials for Visual Studio as in Test Plan.

Follow the steps below to compelete the test case association:

**Step 1:** In your Visual Studio Code IDE, click on a **sln** file in a **C# project**.

> **NOTE :** Login with the same credentials for Visual Studio as in the Test Plan.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/azure-test-plan/step2/step1.png').default} alt="Image"  className="doc_img" />

**Step 2:** Navigate to the Team Explorer view.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/azure-test-plan/step2/step2.png').default} alt="Image"  className="doc_img" />

**Step 3:** Click the **Home** icon and pull down the list to the right of Home icon.

- Select the **Projects and My Teams** >> **Manage Connections**.

- Click on **Manage Connections** >> **Connect to a Project**.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/azure-test-plan/step2/step3.png').default} alt="Image"  className="doc_img" />

**Step 4:** Select your repository, click the right button of your mouse, and then click the **Connect** button.

> **NOTE :** The connection might ask you to connect with GitHub; please provide access to GitHub as well.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/azure-test-plan/step2/step4.png').default} alt="Image"  className="doc_img" />

**Step 5:** Once connected, click on the **Test** menu, then **Test Explorer**.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/azure-test-plan/step2/step5.png').default} alt="Image"  className="doc_img" />

**Step 6:** Inside the Test Explorer, select any test, right click and select **Associate to Test Case**.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/azure-test-plan/step2/step6.png').default} alt="Image"  className="doc_img" />

**Step 7:** Enter the **Test Case ID**, click on **Add Association**, and then click the **Save** button. This will associate the test with the Test Case ID in the Test Plan.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/azure-test-plan/step2/step7.png').default} alt="Image"  className="doc_img" />

**Step 8:** You can check the associated test in test plan by hovering on three dots beside test case name and click on Open Test Case.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/azure-test-plan/step2/step8.png').default} alt="Image"  className="doc_img" />

Associated test cases will look like this:

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/azure-test-plan/step2/step9.png').default} alt="Image"  className="doc_img" />