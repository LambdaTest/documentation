---
id: qtest-integration
title: How to integrate qTest With TestMu AI
hide_title: true
sidebar_label: qTest
description: Run your tests using qTest Launch on TestMu AI.
keywords:
  - TestMu AI integration
  - testmu ai integration with qTest
url: https://www.lambdatest.com/support/docs/qtest-integration
site_name: LambdaTest
slug: qtest-integration/
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
          "name": "qTest Integration",
          "item": "https://www.lambdatest.com/support/docs/qtest-integration/"
        }]
      })
    }}
></script>

# qTest Integration With LambdaTest

***
qTest is a comprehensive test management tool designed for Project Management, Bug Tracking, and Test Management. It embraces a centralized test management approach, facilitating seamless communication and accelerating task development across QA teams and stakeholders. With qTest Launch, you can run your automated tests on a variety of devices and real devices provided by LambdaTest.

## Prerequisites

1. qTest Host 
   
   Setup host for qTest: [Download](https://support-hub.tricentis.com/open?sys_kb_id=194a54eedb4f5c181ea7bb13f3961950&id=kb_article_view&number=KB0015571) and copy the file agentctl-[version]-mac-x64-full.tgz to a desired installation directory, e.g. /usr/local/agentctl-[version]-mac-x64-full.tgz

   Follow this guide for more in-depth information: [qTest Host Setup](https://documentation.tricentis.com/qtest/10200/en/content/qtest_launch/qtest_automation_host_2_install_upgrade_guides/qtest_automation_host_installation_and_upgrade_guide_master_list.htm)

2. Acquire your qTest API Token
   
   * Login to qTest Manager as an Administrator and access the Resources page.
   * Expand the APIs and SDK section.
   
  <img loading="lazy" src={require('../assets/images/qtest-integration/qtest1.png').default} alt="provide access to LambdaTest account" width="1280" height="684" className="doc_img"/>

3. Setup host and agent

  Start the host by running the following command:
  ```
  /path/to/agentctl-[version]$ ./agentctl start
  ```
  Navigate to [http://localhost:6789](http://localhost:6789) and add your details.

  <img loading="lazy" src={require('../assets/images/qtest-integration/qtest_img_2.png').default} alt="provide access to LambdaTest account" width="1280" height="684" className="doc_img"/>

4. Run Tests

  Now once you have set up host, you can setup agents as per your requirements and run your tests using qTest Launch on LambdaTest.

  For example to run Junit Automated tests, you can refer the following github repository: [automate-junit-qtest](https://github.com/LambdaTest/automate-junit-qtest/tree/main) and its readme file for more information.

  
<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="https://www.lambdatest.com">Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_ self" href="https://www.lambdatest.com/support/docs/">Support</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">qTest Integration With LambdaTest</span>
    </li>
  </ul>
</nav> 
