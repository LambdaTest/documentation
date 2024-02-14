---
id: hyperexecute-testsigma-integration
title: Testsigma Integration With HyperExecute
hide_title: false
sidebar_label: Testsigma
description:  Explore seamless integrations with popular tools at LambdaTest. Enhance your testing workflow for faster, efficient cross-browser testing.
keywords:
  - LambdaTest Hyperexecute
  - LambdaTest Hyperexecute help
  - LambdaTest Hyperexecute documentation
  - testsigma
  - Integrations
  - Products
url: https://www.lambdatest.com/support/docs/hyperexecute-testsigma-integration/
site_name: LambdaTest
slug: hyperexecute-testsigma-integration/
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
          "name": "Integration with Products",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-testsigma-integration/"
        }]
      })
    }}
></script>

Testsigma is an AI-powered, cloud-based test automation platform that helps testers create, run, and maintain automated tests for web, mobile, and API applications.

Testsigma can help you with:

- **Natural Language Support:** You can create test cases in simple English, which makes it easy for people without programming experience to get started with test automation.

- **AI-powered Test Generation:** Testsigma can automatically generate test cases for you based on your application's code or user interface.

- **Cloud-Based Execution:** You can run your tests on the cloud without having to set up your own infrastructure.

- **Cross-Browser Testing:** You can test your application on different browsers and devices.

- **Continuous Integration:** Testsigma can be integrated with your CI pipeline so that you can run your tests automatically every time you make changes to your code.

- **Reporting:** Testsigma provides detailed reports on the results of your tests.

## Integrate Testsigma with HyperExecute

### Step 1: Creation of Agent

Create an agent in your local machine. Save that agent in the root directory of your test suite.

> **Note:** There is an activation key for this agent. You need to keep it secure and accessible.
This activation code will help you to start your agent from any other machine.

### Step 2: Start your Agent

Create a **.bat** file. In this file, you need to insert the activation id for starting the agent via [background services](/support/docs/hyperexecute-background-services/).

### Step 3: Execute the Tests

Now execute this **.bat** file. Map your tests (from the testsigma dashboard) via the agent to execute on HyperExecute platform.

### Step 4: Terminate the Process

We have another **.bat** file which will stop the complete process once the test execution is done.