---
id: hyperexecute-maestro-testing
title: Maestro Testing On HyperExecute
sidebar_label: Maestro
description: Follow the instructions in this documentation, so that you can seamlessly execute Maestro tests on HyperExecute via LambdaTest.
keywords:
  - maestro
  - java
  - lambdatest java
  - framework on lambdatest
  - testng
  - app testing
  - real devices
# image: /assets/images/og-images/espresso-testing-og-image.jpg
url: https://www.lambdatest.com/support/docs/hyperexecute-maestro-testing/
site_name: LambdaTest
slug: hyperexecute-maestro-testing/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

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
          "name": "Getting Started With Maestro Testing on LambdaTest",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-maestro-testing/"
        }]
      })
    }}
></script>

---

<!-- This post will help you in getting started with **espresso testing** on [LambdaTest Real Device cloud platform](https://www.lambdatest.com/real-device-cloud). -->

This page outlines how to execute your Maestro tests on HyperExecute using TestNG with YAML 0.2

> HyperExecute uses [YAML 0.2](/support/docs/hyperexecute-yaml-version0.2/) to perform the tests using Maestro.

## Running Maestro Tests on HyperExecute
*** 

### Prerequisites

To run the Tests on HyperExecute from your Local System, you are required:

- Your lambdatest [Username and Access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution [Job](/support/docs/hyperexecute-concepts/#1-jobs).
- Setup the Environmental Variable
- [HyperExecute YAML](/support/docs/hyperexecute-yaml-version0.2/) file which contains all the necessary instructions.
- A **Maestro Framework** application.

<!-- 1. You will need a LambdaTest username and access key. To obtain your access credentials, [purchase a plan](https://billing.lambdatest.com/billing/plans) or access the [automation dashboard](https://appautomation.lambdatest.com/). -->

> If you do not have any application, you can run your tests on HyperExecute by using our sample :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk).

#### Download HyperExecute CLI

The *HyperExecute CLI* is used for triggering tests on HyperExecute. It is recommend to download the HyperExecute CLI binary on the host system to perform the tests on HyperExecute. The CLI download site for various platforms is displayed below:

| Platform | HyperExecute CLI download location |
| ---------| --------------------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

#### Setup Environment Variable
Export the environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [LambdaTest Profile page](https://accounts.lambdatest.com/detail/profile).
Run the below mentioned commands in the terminal to setup the CLI and the environment variables.

***

For macOS:

```bash
export LT_USERNAME=YOUR_LT_USERNAME
export LT_ACCESS_KEY=YOUR_LT_ACCESS_KEY
```

For Linux:

```bash
export LT_USERNAME=YOUR_LT_USERNAME
export LT_ACCESS_KEY=YOUR_LT_ACCESS_KEY
```

For Windows:

```bash
set LT_USERNAME=YOUR_LT_USERNAME
set LT_ACCESS_KEY=YOUR_LT_ACCESS_KEY
```

### Steps to Run Your Test

---

#### Step 1: Upload your Application

Upload your <b>_android_</b> application (.apk file) to the LambdaTest servers using our <b>REST API</b>. You need to provide your <b>Username</b> and <b>AccessKey</b> in the format `Username:AccessKey` in the <b>cURL</b> command for authentication. Make sure to add the path of the <b>appFile</b> in the cURL request.

Here is an example cURL request to upload your app using our REST API:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Using App File:**

<Tabs className="docs__val">
<TabItem value="macos-file" label="Linux / MacOS" default>

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "YOUR_LAMBDATEST_USERNAME:YOUR_LAMBDATEST_ACCESS_KEY" \\
--location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' \\
--form 'appFile=@"/Users/macuser/Downloads/proverbial.apk"' \\
--form 'type="espresso-android"' 
`}
</CodeBlock>
</div>

</TabItem>

<TabItem value="windows-file" label="Windows" default>
<div className="lambdatest__codeblock">
<CodeBlock className="language-powershell">
{`curl -u "YOUR_LAMBDATEST_USERNAME:YOUR_LAMBDATEST_ACCESS_KEY" -X POST "https://manual-api.lambdatest.com/app/uploadFramework" -F "appFile=@"/Users/macuser/Downloads/proverbial.apk"" -F "type="espresso-android""
`}
</CodeBlock>
</div>
</TabItem>
</Tabs>

> Response of above cURL will be a **JSON** object containing the `App URL` of the format - <lt://APP123456789123456789> and will be used in the next step.

#### Step 2: Upload the Test Suite

Upload your **test suite (.apk file)** to the LambdaTest servers using our REST API by providing your **Username** and **AccessKey** in the format `Username:AccessKey` in the cURL command for authentication.

Here is an example cURL request to upload your app using our REST API:

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" \\
--location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' \\
--form 'appFile=@"/Users/macuser/Downloads/ProverbialEspressoTest.apk"' \\
--form 'type="espresso-android"'`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/uploadFramework" --form "appFile=@"C:/Users/varunkumarb/Downloads/ProverbialEspressoTest.apk"" --form "type=\"espresso-android\""`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

#### Step 3: Execute the Test

Now execute your test by using the following command in your terminal:

```bash
chmod u+x <YOUR_CLI_FILE_NAME>
./<YOUR_CLI_FILE_NAME> -user <UserName> -key <AccessKey> --verbose -i <yamlFileName>.yaml
```

Example Reference with Output:

```bash
chmod u+x ./hyperexecute
./hyperexecute -user <UserName> -key <AccessKey> --verbose -i <yamlFileName>.yaml
```

- Now, go to the [HyperExecute Dashboard](https://hyperexecute.lambdatest.com/hyperexecute) and click on your executed Job.
<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/espresso/espresso-he.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

- Click on the **View Test** button to check the logs in the App Automation Dashboard. 
<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/espresso/espress-he-app.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>


## Conclusion
By following the instructions in this documentation, you can seamlessly execute the espresso tests on HyperExecute, leveraging its secure cloud infrastructure, advanced features, and optimized test execution workflow.