---
id: hyperexecute-yaml-faqs
title: YAML FAQs
hide_title: true
sidebar_label: YAML FAQs
description: Get answers to your HyperExecute YAML FAQs. Learn about automation, configurations, integrations, and more for efficient test execution on TestMu AI..
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FAQs
url: https://www.testmuai.com/support/docs/hyperexecute-yaml-faqs/
site_name: TestMu AI
slug: hyperexecute-yaml-faqs/
canonical: https://www.testmuai.com/support/docs/hyperexecute-yaml-faqs/
---


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
          "name": "Integrations",
          "item": `${BRAND_URL}/support/docs/hyperexecute-yaml-faqs/`
        }]
      })
    }}
></script>

# HyperExecute YAML FAQs

***

#### 1. I want to run all my feature files and scenarios listed in a folder. How can I do that without listing all of them explicitly in the YAML file?

HyperExecute offers you the option to use our AutoSplit mode. You can learn more about the AutoSplit mode by going through [this page](/support/docs/hyperexecute-auto-split-strategy/). A sample YAML file that supports AutoSplit looks like this:

```yaml
---
version: 0.1
runson: linux
concurrency: 2
autosplit: true
pre:
  - npm install

cacheKey: '{{ checksum "package-lock.json" }}'
cacheDirectories:
  - node_modules
testDiscovery:
  type: automatic
  mode: static
  args:
    featureFilePaths: <the_path_to_your_folder>
    frameWork: javascript
    specificTags: ["@ToDoOne", "@ToDoTwo", "@ToDoThree"]

testRunnerCommand: <your_test_execution_command>
```
You can simply add the path to the folder of files that you want to run in the _**featureFilePaths**_ argument, and your test execution command under the _**testRunnerCommand**_ parameter.

***

#### 2. What can I do with pre steps and post steps in the YAML file?

Pre and post steps open doors to large amounts of flexibility. You can add certificates just before running tests, start a background process to facilitate testing, compile applications, download dependencies and everything else that you need to do just before and after running your tests in the CI or your system.

***

#### 3. How can I install private artifactory dependencies that can only be accessed on my organization’s internal network on HyperExecute Machines?

You can use a tunnel to connect with your organization's private network with the HyperExecute machines. You can do this by setting the tunnel flag to true in HyperExecute’s YAML file. 

```bash
tunnel: true
```

Moreover, add one of the following parameters in the `preDirectives` field depending on the tech stack that your organization is using.

-   For Maven projects:  
    `-DproxyHost=${LT_PROXY_HOST}`<br />
    `-DproxyPort=${LT_PROXY_PORT}`
    
-   For Node:  
    `npm config set proxy http://${LT_PROXY_HOST}:${LT_PROXY_PORT}`<br />
    `npm config set https-proxy http://${LT_PROXY_HOST}:${LT_PROXY_PORT}`
    

Therefore, if you want to use a tunnel for connecting HyperExecute with your organization (that is working with a maven project), you should configure your YAML file like this:

```yaml
---
version: 0.1
runson: linux
concurrency: 2
autosplit: true
tunnelOpts:
  global: true

preDirectives:
  commands:
  - mvn -Dmaven.repo.local=$CACHE_DIR -Dmaven.test.skip=true clean install -DproxyHost=${LT_PROXY_HOST} -DproxyPort=${LT_PROXY_PORT}
```

> **Note**: The variables ‘LT_PROXY_HOST’ and ‘LT_PROXY_PORT’ are exposed with the tunnel proxy value by default on HyperExecute machines when the tunnel flag is set to _true_ in the HyperExecute YAML. 

***

#### 4. How can I install and set a private node registry on the HyperExecute Machine?

You can do this by adding the following command in the preDirectives section of the HyperExecute YAML file.

```bash
preDirectives:
  commands: 
    - npm config set registry <artifactory_URL>
```

**Note**: Replace the placeholder value &lt;artifactory_URL&gt; with the link to your private node registry.

***

#### 5. Can I run WDIO tests on HyperExecute via proxy?

Yes, you can. Use the following parameters in the testRunnerCommand of the HyperExecute YAML file:

```bash
testRunnerCommand: $env:GLOBAL_AGENT_NO_PROXY="hub.lambdatest.com";$env:GLOBAL_AGENT_HTTP_PROXY=$env:LT_PROXY
```
***

#### 6. I want to use a specific version of gradle for my project. How can I set that up on HyperExecute machines?

You can set up your Gradle project with HyperExecute by configuring the runtime flag in the YAML file. If you are using the 7.0 version of Gradle, use the following configurations.

```bash
runtime:
  language: java
  version: 17
  addons:
    - name: "gradle"
	  version: "7.0"
```
***

#### 7. I want to pass a specific package through npm in the YAML file,  instead of npm picking the package present in the directory. Can I do that with HyperExecute?

You can accomplish this by running the following command in the preDirectives section of the YAML file:

```bash
preDirectives:
  commands:
    - npm --prefix /path/to/project/my_package.json
```
This command will install a package called **my_package.json** from the path that you have provided.
***

#### 8. How can I use the Jenkins job choice parameters in the YAML file?

You can do this by directly calling the parameter keys in the HyperExecute YAML file and use the Jenkins choice parameters.  
A sample testRunnerCommand to accomplish this is:

```bash
testRunnerCommand: mvn test `-DselectedTests="$test" `-Dmaven.repo.local=./.m2 dependency:resolve `-Dbrowser=${browser} `-Dversion=${version}
```
In this example, **browser** and **version** are the two choice parameters from Jenkins, as shown in the image below. You can call them in the YAML file as &#36;&lbrace;browser&rbrace; and &#36;&lbrace;version&rbrace; in the testRunnerCommand or testDiscovery command.

<img loading="lazy" src={require('../assets/images/hyperexecute/faq/hyperexecute-yaml-faqs.png').default} alt="Image" style={{width: '1000px',}} className="doc_img"/>

```bash
testDiscovery: 
    type: raw
    mode: dynamic
    command: grep 'test name' src/test/java/${xml} | awk '{print$2}' | sed 's/name=//g' | sed 's/\x3e//g'

testRunnerCommand: mvn test `-DselectedTests="$test" `-Dmaven.repo.local=./.m2 dependency:resolve `-Dbrowser=${browser} `-Dversion=${version}
```

***

#### 9. I run a lot of tests with the same YAML configurations. Is there any way where I can run my tests without specifying the same configurations over and over again?

You can solve this problem by using HyperExecute's inheritance feature. This feature allows you to inherit the configurations of a base YAML file and saves you the time of configuring the YAML file multiple times. 

```bash
base:
  yamls:
    - ./<baseConfiguration1.yaml>
    - ./<baseConfiguration2.yaml>
```

To learn more about how to use this feature, go through [this page](/support/docs/hyperexecute-inherit-config/).


***

#### 10. I want to test the code in my Git repository. Is there a way where I can accomplish that with HyperExecute?

You can use the `sourcePayload` parameter for the same. Your test scripts are directly sourced from your Git provider with the help of secure access tokens and only your HyperExecute YAML file is encrypted and uploaded through the HyperExecute CLI. To learn more about how this feature works, go through [this page](/support/docs/hyperexecute-how-to-configure-sourcePayload/).

```bash
sourcePayload:
  platform: git
  link: https://--------
  ref: master
  accessToken: <your_personal_access_token>
```

***

#### 11. I am running a non-hub based test on HyperExecute. How can I capture a video of it?

You can use HyperExecute’s video recording feature even while running non-hub based tests (Selenium, Cypress, CDP are all hub-based). All you need to do is, set the `captureScreenRecordingForScenarios` flag to `true` in your [HyperExecute YAML](/support/docs/deep-dive-into-hyperexecute-yaml/) file to capture the video of your test scenarios.

`captureScreenRecordingForScenarios: true`

<img loading="lazy" src={require('../assets/images/hyperexecute/faq/yaml-10.png').default} alt="Image"  className="doc_img"/>

You can access the recorded video on the Tasks page by clicking on the **Watch Video** button on the right-hand side of your test. 

<img loading="lazy" src={require('../assets/images/hyperexecute/faq/yaml-video.png').default} alt="Image"  className="doc_img"/>

You can use this feature if you want to trigger a command and want to record it. This will also be useful when you want to record any applications that were triggered on your desktop during the test execution process. 

***

#### 12. How to check if there is any private dependency in testng YAML?

We can detect any private dependency in testng YAML using `analyze` flag in CLI.

***

#### 13. How to handle Maven SSL Cert Error while executing the test?

Pass this maven arguments which require to handle mvn ssl cert errors

```bash
-Dmaven.wagon.http.ssl.insecure=true -Dmaven.wagon.http.ssl.allowall=true -Dmaven.wagon.http.ssl.ignore.validity.dates=true
```

***

#### 14. Will my YAML parameters overwrite properties in my XML configuration?

No, your XML configurations are not overwritten by YAML parameters.

***

For more information on the HyperExecute YAML file, visit this [page](/support/docs/deep-dive-into-hyperexecute-yaml/).

>If you have more questions, then just give us a <span className="doc__lt" onClick={() => window.openLTChatWidget()}>shout</span> and we will answer them for you.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
       HyperExecute YAML FAQs
      </span>
    </li>
  </ul>
</nav>
