---
id: test-instance-audit-logs
title: Test Instance Audit Logs
hide_title: false
sidebar_label: Test Instance Audit Logs
description: See every thing you update in a test instance through Audit Logs. 
keywords:
  - audit log
  - test instance logs
  - execution history
url: https://www.testmuai.com/support/docs/test-instance-audit-logs/
site_name: LambdaTest
slug: test-instance-audit-logs/
canonical: https://www.testmu.ai/support/docs/test-instance-audit-logs/
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
          "name": "Test Run Creation",
          "item": `${BRAND_URL}/support/docs/test-instance-audit-logs/`
        }]
      })
    }}
></script>
Test Manager now provides Audit Logs for test instance execution. Audit Logs bring visibility into the **who, what, and when** for every test execution. This is critical for teams working in regulated environments, or those needing high accountability in their QA processes. 

With Audit logs you can store the execution history of your tests and even run parallel execution sessions without losing the context on individual executions as every action will be logged with clear indication of time stamps & executor.  

## Details captured in Audit Logs

- Test Instance & Steps `Status` changes. 
- Test Instance & Steps `Remarks or attachment` changes. 
- Test Instance Assignee changes. 

You can view the Audit Logs by clicking on the `View Execution Log`. 

<img loading="lazy" src={require('../assets/images/mobile-app-testing/test-runs/view_execution_logs.png').default} alt="Real "  className="doc_img"/>

<img loading="lazy" src={require('../assets/images/mobile-app-testing/test-runs/audit_logs.png').default} alt="Real "  className="doc_img"/> 

For the Steps level execution logs, you can preview the step with respect to which the log was created. 

:::note
 As step level Audit logs are with respect to that specific steps in case the step changes the old logs will still show the preview of the older step. 
:::

<img loading="lazy" src={require('../assets/images/mobile-app-testing/test-runs/audit_logs_step_preview.png').default} alt="Real "  className="doc_img"/>

:::note
 When you delete a configuration or a test case, all associated audit logs are removed. This is because the action deletes the entire instance. If you then add the same test case and configuration again, it creates a brand new instance with no prior audit history.
:::