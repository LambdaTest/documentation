---
id: xcui-xml-report
title: XCUI XML Reports
sidebar_label: XML Reports
description: XCUI XML Report
keywords:
  - xcui
  - java
  - xcui junit xml reports
  - lambdatest java
  - framework on lambdatest
  - testng
  - app testing
  - real devices

url: https://www.lambdatest.com/support/docs/xcui-report/
site_name: LambdaTest
slug: xcui-report/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import RealDeviceTag from '../src/component/realDevice';
import VirtualDeviceTag from '../src/component/virtualDevice';

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
          "name": "Report",
          "item": "https://www.lambdatest.com/support/docs/xcui-junit-report/"
        }]
      })
    }}
></script>
<RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />
XML reports provide a detailed summary of test execution, allowing you to better understand your test outcomes. This document aims to guide you through the process of retrieving XML reports for XCUI tests executed on the LambdaTest platform.

> This feature is also supported for [Virtual Devices](/support/docs/app-automation-on-emulators-simulators/)

## XML report APIs
### Non-shard build
To fetch the XML report for a `non-shard` build, you can use the following cURL command:

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl --location "https://mobile-api.lambdatest.com/mobile-automation/api/v1/framework/builds/<build_id>/report/?encoder=false" \
--header 'Authorization: Basic <Base64 Authentication>'`}
</CodeBlock>
</div>

### Shard build (For single shard)
To fetch the XML report for a `single shard` in a shard build,use:

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl --location 'https://mobile-api.lambdatest.com/mobile-automation/api/v1/framework/jobs/<job_id>/report/?shard=<shard_id>&encoder=false' \
--header 'Authorization: Basic <Base64 Authentication>'`}
</CodeBlock>
</div>

### Shard build (For all the shards)
To fetch the XML reports for `all shards` in a shard build, use:

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl --location 'https://mobile-api.lambdatest.com/mobile-automation/api/v1/framework/jobs/<job_id>/report/?encoder=false' \
--header 'Authorization: Basic <Base64 Authentication>'`}
</CodeBlock>
</div>

:::note
- Authenticate the API using your LambdaTest username and access key, and replace `build_id`, `job_id` and `shard_id` for which you want to fetch report.
- It is recommended to run the sharding test(via HyperExecute CLI) in the verbose mode i.e. with the **--verbose** flag. This allows the shard ID(task ID) and build ID(Job ID) to be displayed in the logs and then they can be used to fetch the above reports.
- In case the report is not a valid XML format, the `encoder=true` parameter can be utilized to prevent the decoding of certain characters. Decoding is usually performed at the server's end to enhance the readability of the report. 
:::

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link"> espresso Testing </span>
    </li>
  </ul>
</nav>
