---
id: concource-ci
title: Selenium Testing With Concourse CI And TestMu AI
hide_title: true
sidebar_label: Concourse CI
description: This document will help you understand how you can integrate your Concourse CI instance with cloud Selenium Grid for continuous testing.
keywords:
  - concourse ci
  - testmu ai
  - concourse ci/cd
  - concourse integrations
  - concourse testmu ai
  - concourse selenium
  - continuous integration
  - continuous testing
  - continuous deployment
  - testmu ai integrations
  - integrations with ci/cd tools
  - ci/cd integrations
url: https://www.testmu.ai/support/docs/selenium-testing-with-concourse-ci-and-testmu/
site_name: LambdaTest
slug: selenium-testing-with-concourse-ci-and-testmu
canonical: https://www.testmu.ai/support/docs/selenium-testing-with-concourse-ci-and-testmu/
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
          "name": "Concourse CI Integration",
          "item": `${BRAND_URL}/support/docs/selenium-testing-with-concourse-ci-and-testmu/`
        }]
      })
    }}
></script>

# Selenium Testing With Concourse CI And <BrandName />
* * *
Concourse CI is an open-source CI/CD tool which is triggered over Docker containers. It offers a scalable and straightforward solution to your CI/CD pipelines with an intuitive UI that allows you to analyze the dashboard and validate your build execution. Offering a container-centric approach, Concourse CI offers a sturdy pipeline as each task in every job is handled in its container, controlling its dependencies.

Concourse CI can be integrated with <BrandName /> to perform automation testing with a cloud Selenium Grid of 3000+ real browsers for mobile and desktop. This document will help you understand how you can integrate your Concourse CI instance with <BrandName /> Selenium Grid for continuous testing.

## Prerequisites
* * *
1. A <BrandName /> account. It is free to get started. [Sign up now](https://accounts.lambdatest.com/register).

2. Install NPM(Node Package Manager). If you have npm already installed, you may want to upgrade it to latest version. Here the code you can run in your terminal to upgrade npm.

```
npm install npm@latest -g
```

3. <BrandName /> Authentication Credentials i.e. your <BrandName /> username, access key and HubURL. You need to set them up as your environment variables. You can retrieve them from your [<BrandName /> automation dashboard](https://automation.lambdatest.com/) by clicking on the key icon near the help button.

    * **For Linux/Mac:**

    ---
    $ export LT_USERNAME= `{YOUR_LAMBDATEST_USERNAME}`
    
    $ export LT_ACCESS_KEY= `{YOUR_LAMBDATEST_ACCESS_KEY}`

    ---

    * **For Windows:**

    ---
    $ set LT_USERNAME= `{YOUR_LAMBDATEST_USERNAME}`
    
    $ set LT_ACCESS_KEY= `{YOUR_LAMBDATEST_ACCESS_KEY}`

    ---

4. Install Concourse and start a Concourse server at port 8080 i.e. ``http://127.0.0.1:8080``.

5. Install fly CLI tool for Concourse CI/CD. We recommend using the latest fly version, you can check the fly version using:

```
$ fly -v
```

## Configuring Concourse-CI Pipeline
* * *
> Note: Clone this [GitHub repository for Selenium and Concourse CI](https://github.com/LambdaTest/concourse-nodejs-selenium-sample).

Open your terminal or command prompt. Login to your Concourse server and save the target.

```
$ fly -t ci login -c http://127.0.0.1:8080 -u test -p test
```

Next, we need to update the environment variables in the `YAML` file. To access your YAML file, you need to go to the project-folder/concourse-ci. Here you will find the YAML file i.e. `pipeline-config.yml`.

```js
resources:
  - name: nodejs-selenium-sample
    type: git
    icon: github
    source:
      url: https://github.com/sushobhit-lt/nodejs-selenium-sample.git

jobs:
  - name: 'Run over Lambdatest Hub'
    public: true
    plan:
      - get: nodejs-selenium-sample
        trigger: true
      - task: 'Install dependencies and execute'
        config:
          platform: linux
          image_resource:
            type: registry-image
            source: { repository: node, tag: "12" }
          inputs:
            - name: nodejs-selenium-sample
          run:
            path: /bin/sh
            args:
              - -c
              - |
                cd nodejs-selenium-sample
                npm install
                export LT_USERNAME=Your_LambdaTest_Username
                export LT_ACCESS_KEY=Your_LambdaTest_Access_Key
                node index.js
```

After you specify the right configuration in the `pipeline-config.yml`, you now need to create your concourse pipeline with the help of fly CLI.

```
$ fly -t ci set-pipeline -p nodejs-lambda-sample -c pipeline-config.yml
```

Now, you will find the nodejs-selenium-sample pipeline in the Concourse Web UI. You can run the pipeline over <BrandName /> Selenium Grid from the UI itself.

<img loading="lazy" src={require('../assets/images/concource-ci/nodejs-lambda-sample-pipeline.webp').default} alt="find the nodejs-selenium-sample pipeline in the Concourse Web UI" width="2556" height="1366" className="doc_img"/>
 
After you trigger the test, you will notice the different stages of test execution. The Concourse CI will get the nodejs-selenium-sample and execute it on <BrandName /> after installing the right dependencies.

<img loading="lazy" src={require('../assets/images/concource-ci/nodejs-lambda-sample-execute.webp').default} alt="notice the different stages of test execution" width="2560" height="976" className="doc_img"/>

Deploy your code in a reliable manner at scale using Concourse CI integration with <BrandName />, and ensure it looks robust across every browser to provide a seamless user experience to all your visitors. Happy Testing!

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
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
        Concourse CI Integration
      </span>
    </li>
  </ul>
</nav>
