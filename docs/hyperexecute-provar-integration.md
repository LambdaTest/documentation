---
id: hyperexecute-provar-integration
title: Integrate Provar with HyperExecute
hide_title: false
sidebar_label: Provar
description:  Integrate Provar with HyperExecute for Salesforce test automation. Configure, generate build files, set up licenses, and execute tests seamlessly.
keywords:
  - TestMu AI HyperExecute
  - TestMu AI HyperExecute help
  - TestMu AI HyperExecute documentation
  - provar
  - Integrations
  - Products
  - Test case management
  - Automated testing 
  - Cloud-based testing
url: https://www.testmuai.com/support/docs/hyperexecute-provar-integration/
site_name: LambdaTest
slug: hyperexecute-provar-integration/
canonical: https://www.testmuai.com/support/docs/hyperexecute-provar-integration/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Integration with Products",
          "item": `${BRAND_URL}/support/docs/hyperexecute-provar-integration/`
        }]
      })
    }}
></script>

Provar is a low-code/no-code testing tool specifically designed for Salesforce applications, enabling efficient creation and execution of UI and API tests.

This documentation guides you on how to integrate Provar seamlessly with HyperExecute to leverage distributed testing capabilities for comprehensive Salesforce test automation.

## Prerequisties

- Download and install the latest version of [Provar Automation Installer](https://documentation.provar.com/documentation/general-information/installing-provar/).
- You must have an active License key to run Provar.

## Step 1: Configure the Browser Provider Information

- Update the Desktop Settings to **HyperExecuteGrid: ANY Chrome**.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/provar/1.png').default} alt="provide access to <BrandName /> account" width="1280" height="684" className="doc_img"/>

- Click on **Test Settings** >> **Browser Providers** section. Click on the **+** symbol to add a new Browser Provider. 

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/provar/2.png').default} alt="provide access to <BrandName /> account" width="1280" height="684" className="doc_img"/>

- You will receive a pop-up to enter your configurations:

    - Enter the **Name** for your new Browser Provider.
    - Select the **Type** as **<BrandName />**
    - Enter your [<BrandName /> **User Name** and **Access Key**](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
    - Update all the **browser** options that you want to run your tests on.
    - Update all the **capabilities** that you want to pass through the test.

- Click on **Test Connection** >> **OK**

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/provar/3.png').default} alt="provide access to <BrandName /> account" width="1280" height="684" className="doc_img"/>

## Step 2: Generate and Update the build.xml file

You have to generate the `build.xml` file using the Provar GUI. You can follow the steps mentioned in the [documentation](https://documentation.provar.com/documentation/devops/apache-ant/apache-ant-generating-a-build-file/) to generate your build file.

-  Update the `prover.home` property with the installation path of Provar in HyperExceute as shown below:

```bash
<property name="provar.home" value="../ProvarHome"/>
```

- Add the following tags inside your `build.xml` file. These tags should be present inside the `<project default="runtests">` tag as mentioned below:

```bash
<property name="license.path" value="../licenseHyperexeute"/>
<property name="unit.test" value="*.testcase" />
```

- Under the `Run-Test-Case` tag, replace the `<fileset>` tag with the following code:

```bash
<fileset id="testcases" file="../${unit.test}" ></fileset>
```

## Step 3: Set the Provar License as Secret

You will have to [create a new secret](/support/docs/hyperexecute-how-to-save-and-manage-secrets/#create-a-new-secret) in HyperExecute. 

- Set **Key Name** as `provarLicense`
- Set the **Value** as the contents of the license file.

## Step 4: Setup the CLI in your Test Suite

After cloning / downloading the sample repo, you need to setup the CLI and the environment variables.

### Download the HyperExecute CLI

The CLI is used for triggering the tests on HyperExecute. It is recommend to download the CLI binary on the host system and keep it in the root directory of the suite to perform the tests on HyperExecute.

You can download the CLI for your desired platform from the below mentioned links:

| Platform | HyperExecute CLI |
| ---------| ---------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| MacOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

### Setup Environment Variable

Now, you need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [<BrandName /> Profile page](https://accounts.lambdatest.com/detail/profile).

Run the below mentioned commands in your terminal to setup the CLI and the environment variables.

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

## Step 5: Configure YAML in your Test Suite

Replace the `pre` command with your own command that discovers the desired **.testcase** files. 

```yaml
---
version: 0.2
globalTimeout: 150

runson: win

runtime:
  language: java
  version: "11"

autosplit: false

concurrency: 4

retryOnFailure: true
maxRetries: 2

env:
  ProvarSecretsPassword: <ENTER_YOUR_PASSWORD>

pre:
  - ls

post:
  - cat ./ANT/.lambdatestBuild.xml

framework:
 name: provar
 discoveryType: test
 additional_args:
  discoveryLevel: file # required
```

## Step 6: Execute your Test Suite

> **NOTE :** In case of MacOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

Run the below command in your terminal at the root folder of the project:

```bash
./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE
```

OR use this command if you have not exported your username and access key in the step 2.

<div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}
  </CodeBlock>
</div>

## Step 5: Monitor Your Tests

- Visit the [HyperExecute Dashboard](https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status. 

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/provar/4.png').default} alt="provide access to <BrandName /> account" width="1280" height="684" className="doc_img" />