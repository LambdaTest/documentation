---
id: bamboo-integration
title: How to integrate Bamboo with TestMu AI
hide_title: true
sidebar_label: Bamboo
description: Deploy your code in a reliable manner at scale using Bamboo integration with TestMu AI, and ensure it looks robust across every browser with Selenium Grid on cloud.
keywords:
  - bamboo integrations
  - testmu ai integrations with ci/cd tools
  - continuous integration
url: https://www.testmu.ai/support/docs/bamboo-integration-with-testmu
site_name: LambdaTest
slug: bamboo-integration-with-testmu
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
          "item": "https://www.lambdatest.com/"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/"
        },{
          "@type": "ListItem",
          "position": 4,
          "name": "Bamboo Integration With TestMu AI",
          "item": `${BRAND_URL}/support/docs/bamboo-integration-with-testmu/`
        }]
      })
    }}
></script>
# Bamboo Integration With <BrandName />
***
Launched on 20 February 2007, Bamboo by Atlassian has become a worldwide adopted CI/CD tool. With Bamboo Server, you can generate multi-level build plans with the ease of defining triggers to specific builds post commits. You could also assign crucial builds or deployments to a colleague. Bamboo is free for open-source projects.

<BrandName /> provides an integration with Bamboo, using which you can perform cross browser testing on a cloud-based Selenium Grid consisting 3000+ real browsers, for both desktop & mobile. You can perform tests directly from your respective Bamboo server. It helps you to perform browser compatibility testing as soon as you commit changes to your build. If you are running short on the release window, you can scale your tests according to your need. <BrandName /> offers parallel testing to help you run multiple test cases simultaneously. You can now chop down your release cycles and ship faster by integrating your <BrandName /> account with your Bamboo CI/CD server.

## Prerequisites
***

- A Bamboo Server installed.
- A GIT repository.
- wget & unzip utility.

  ```
  $ sudo apt-get install unzip
  $ sudo apt-get install wget
  ```

- Be aware of your <BrandName /> authentication credentials, i.e., your <BrandName /> username, access key, and HubURL. You need to set them up as your environment variables. You can retrieve them from your [<BrandName /> automation dashboard](https://automation.lambdatest.com/) by clicking on the key icon near the help button.

    - For Linux/Mac:
      ```
      $ export LT_USERNAME= {YOUR_LAMBDATEST_USERNAME}
      $ export LT_ACCESS_KEY= {YOUR_LAMBDATEST_ACCESS_KEY}
      ```   
    - For Windows:

     ```
     $ set LT_USERNAME= {YOUR_LAMBDATEST_USERNAME}
     $ set LT_ACCESS_KEY= {YOUR_LAMBDATEST_ACCESS_KEY}
    ```

## Integrating <BrandName /> With Bamboo Server
***

**Step 1:** Deploy your Bamboo server & login as an administrator.

**Step 2:** Create a new plan with Default stage & job.

**Step 3:** After creating a new job, we would need to add three tasks.

<img loading="lazy" src={require('../assets/images/bamboo-integration/1.webp').default} alt="Bamboo Integration" width="810" height="1010" className="doc_img"/>

**Step 4:** To create your first task, "Source Code Checkout," you need to fetch the relevant Git repository.

**Step 5:** Task number two would require to you install the required package for npm.

<img loading="lazy" src={require('../assets/images/bamboo-integration/2.webp').default} alt="Bamboo Integration" width="902" height="839" className="doc_img"/>

**Step 6:** To create your third task, you would need to configure the below script for running a Protractor test.

```
echo "start testing"
//Add access credentials in plan variable
export LT_USERNAME=${bamboo.LT_USERNAME}
export LT_ACCESS_KEY=${bamboo.LT_ACCESS_KEY}

wget https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip
unzip -o LT_Linux.zip

//To start Tunnel
./LT -user ${bamboo.LT_USERNAME} -key ${bamboo.LT_ACCESS_KEY} &

node ./node_modules/protractor/bin/protractor conf/single.conf.js
```

<img loading="lazy" src={require('../assets/images/bamboo-integration/3.webp').default} alt="Bamboo Integration" width="900" height="764" className="doc_img"/>

**Step 7:** Now, you need to save the plan & run it. As you run the test you will find the below logs in Bamboo highlighting that the test was successfully executed on <BrandName /> Selenium Grid.

<img loading="lazy" src={require('../assets/images/bamboo-integration/4.webp').default} alt="Bamboo Integration" width="902" height="323" className="doc_img"/>

## Running Multiple Tests In Parallel
***

Parallel Testing is one of the most demanding features of <BrandName /> Selenium Grid. By parallel testing, you can run more than one test case, simultaneously. So you can execute a single test scenario across different browsers or could run different test scenarios across the same browser but with different browser versions. Wondering how many parallel test cases can you run? That depends entirely on the number of concurrent session under your opted plan.

To run parallel tests using Bamboo integration with <BrandName />, you need to change the script in Step 6 as below.   

```
echo "start testing"
export LT_USERNAME=<Your_LambdaTest_Username>
export LT_ACCESS_KEY=<Your_LambdaTest_Access_Key>
node ./node_modules/protractor/bin/protractor conf/parallel.conf.js
```
Monitor and analyze your test result on the <BrandName /> Automation Dashboard.
Reliably deploy your code at scale using Bamboo integration with <BrandName />, and ensure it looks robust across every browser to provide a seamless user experience to all your visitors.  Happy Testing! 🙂

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="/support/docs/">Support</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">Bamboo Integration With <BrandName /></span>
    </li>
  </ul>
</nav>
