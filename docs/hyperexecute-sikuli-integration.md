---
id: hyperexecute-sikuli-integration
title: Integrate Sikuli with HyperExecute
hide_title: false
sidebar_label: Sikuli
description:  Automate the visual testing of any software by integrating Sikuli with HyperExecute.
keywords:
  - LambdaTest Hyperexecute
  - LambdaTest Hyperexecute help
  - LambdaTest Hyperexecute documentation
  - sikuli
  - Integrations
  - Products
  - Automated testing alerts
  - Sikuli automation
  - Visual UI automation
  - Desktop application automation
  - Cross-platform automation
url: https://www.lambdatest.com/support/docs/hyperexecute-sikuli-integration/
site_name: LambdaTest
slug: hyperexecute-sikuli-integration/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-sikuli-integration/"
        }]
      })
    }}
></script>

Sikuli is an open-source tool that empowers you to automate tasks on your computer screen. It utilizes a unique approach called "visual image match" to interact with graphical user interfaces (GUIs).

This documentation guides you on how to integrate Sikuli seamlessly with HyperExecute to leverage the power of image recognition.

## Prerequisites

-   Ensure that you have integrated sikuli Studio with LambdaTest. Follow the steps on this [page](https://www.lambdatest.com/support/docs/sikuli-integration-with-lambdatest/) to do so.
    
-   Ensure that you have the necessary licenses required to use sikuli Studio. You need the [sikuli Runtime License](https://docs.sikuli.com/docs/legacy/products-and-licenses/sikuli-studio-enterprise-and-runtime-engine-licenses/sikuli-runtime-engine-floating-license) to integrate sikuli with HyperExecute. To learn more about these licenses, read this [page](https://docs.sikuli.com/docs/legacy/products-and-licenses/sikuli-studio-enterprise-and-runtime-engine-licenses/license-overview).

## Integrating sikuli Studio with HyperExecute

1. You must generate a command from sikuli to run it through the command line. To do so:

   a. Generate a command for Console mode through the sikuli UI. Click on the **Command Builder** button on the top of the screen. 

   b. Select the test suite that you want to use and click on **Generate Command**.

   c. Click on the **Copy to Clipboard** button to copy the command.

2. Clear the contents of the .gitignore file in the root directory of your sikuli project. 

3. Download the HyperExecute CLI binary in the root directory of your sikuli project. 

4. Create the hyperexecute.yaml file in the root directory of your sikuli project with the given parameters:

  ```bash
  version: 0.1
  globalTimeout: 90
  testSuiteTimeout: 90
  testSuiteStep: 90
  retryOnFailure: false
  maxRetries: 1
  runson: win
  pre: 
    - pip install requests # To install pip request
    - python installer.py # To install the certs in the Machine 

  tunnel: true
  tunnelOpts:
    global: true
  autosplit: true
  concurrency: 2
  testDiscovery:
    type: raw
    mode: dynamic
    command: grep -lr 'testSuiteGuid' */*.ts | sed 's/:.*//' | sed 's/.ts//g'
  testRunnerCommand:  sikulic `-noSplash `-runMode=console `-projectPath="G:\foreman\Hyperexecute_Sample\Hyperexecute_Sample.prj" `-retry=0 `-testSuitePath="$test" `-browserType="firefox" `-executionProfile="default" `-apiKey="aaa9402b-6a2e-4621-a4c3-05fe356f5aad" `-`-config `-webui.autoUpdateDrivers=true
  ```
  
Paste the command that you generated from the sikuli UI to fill the **testRunnerCommand** field in the _hyperexecute.yaml_ file.

5. Run the Hyperexecute CLI commands from the same path as your sikuli project. 
