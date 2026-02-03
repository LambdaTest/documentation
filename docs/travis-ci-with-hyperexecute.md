---
id: travis-ci-with-hyperexecute
title: Travis CI Integration
hide_title: true
sidebar_label: Travis CI
description: HyperExecute integrates with Travis CI Pipeline to boost your go-to market delivery. Perform automated cross browser testing with TestMu AI to ensure your development code renders seamlessly through an online Selenium grid providing 3000+ real browsers running through machines.
keywords:
  - testmu ai integrations
  - testmu ai integrations with ci/cd tools
  - ci/cd tools
  - continuous integration,continuous delivery
  - continuous integration tools
  - gitlab ci
url: https://www.testmuai.com/support/docs/travis-ci-with-hyperexecute/
site_name: LambdaTest
slug: travis-ci-with-hyperexecute/
canonical: https://www.testmuai.com/support/docs/travis-ci-with-hyperexecute/
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
          "name": "Travis CI Pipeline Integration",
          "item": `${BRAND_URL}/support/docs/travis-ci-with-hyperexecute/`
        }]
      })
    }}
></script>

# Travis CI Integration with Hyperexecute
* * *

Travis CI is a continuous integration (CI) service that allows to automate the process of testing and deploying their code. It is widely used for projects hosted on GitHub and other version control platforms like Bitbucket, and GitLab.
Using Travis CI, you can automate your entire testing suite for new commits, reducing the possibility of human error, while also automating deploys with orbs.

This document will show you how to integrate Travis CI Pipeline with HyperExecute to greatly shorten your test cycles.

## Steps to Integrate Travis CI Pipeline with Hyperexecute

***

To integrate Travis CI Pipeline with HyperExecute, follow the below steps: 
### Step 1. Log into your Travis CI account

- Signup in your Travis CI account using your desired version control system. Here, we are using GitHub.

- Click on your profile, then go to settings and then click on the green Activate button, and select the repositories you want to use with Travis CI or you can click on the Activate all repositories using GitHub Apps button to activate all your repos.

### Step 2: Configure the YAML File

Once you have set up your project, you need to add a `.travis.yml` file to your desired repository to trigger the build from the Travis CI.

Below is a sample of Travis CI YAML created for your reference:

```yaml
language: node

services:
  hyperexecute:
    api_key: YOUR_API_KEY  ## add your hyperexecute access key

before_script:
  - npm install -g cypress
  - npm install

script:
  - ./hyperexecute --user <your_username> --key <your_access_key> --config <RELATIVE_PATH_OF_YOUR_YAML_FILE_name>
```
- Add the `.travis.yml` file to root directory, commit it and then click to **"Trigger a Travis CI build"**.

- Check the build status page to see if your build passes or fails according to the return status of the build command by visiting Travis CI and selecting your repository.


### Step 3: Run Your Job

Now commit your job and run the build.
<!-- - Once your changes are made and your configuration is valid, you may commit and re-run the pipeline by clicking the **Save and Run** button. 

<img loading="lazy" src={require('../assets/images/hyperexecute/main/circle-ci-run.png').default} alt="Create New Project" width="" height=""/>

- A modal will pop up, and you will see the option to commit on the branch you are working from, or you can choose to create a new branch for the commit.

<img loading="lazy" src={require('../assets/images/hyperexecute/main/circle-commit.png').default} alt="Create New Project" width="" height=""/>
<p></p> -->


**Below is an example of a HyperExecute job that was triggered through the above pipeline:**
<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/travis-ci/he-travis-ci.webp').default} alt="Create New Project" width="" height=""/>

>
**Run your tests at speeds never seen before. Happy testing! :)**

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
        GitHub Integration
      </span>
    </li>
  </ul>
</nav>
