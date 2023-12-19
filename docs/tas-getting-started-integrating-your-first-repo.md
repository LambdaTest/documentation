---
id: tas-getting-started-integrating-your-first-repo
title: Integrating Your First Repository
hide_title: true
sidebar_label: Integrating Your First Repository
description: Integrating your first repository with TAS
keywords:
  - LambdaTest TAS
  - Test at Scale
  - TAS - Integrating Your First Repository
  - TAS - Getting Started
url: https://www.lambdatest.com/support/docs/
site_name: LambdaTest
slug: tas-getting-started-integrating-your-first-repo/
---

# Integrating Your First Repository
***
Once you have selected your [setup mode](/docs/tas-getting-started-creating-an-account#selecting-test-at-scale-mode), you are ready for the next step of setting up your repositories in TAS.
​
- For **TAS Cloud** - You will see your repositories immediately after selecting **TAS Cloud** as your setup mode therefore can directly start following the 3 steps given below.
- For **TAS - Self Hosted** - First you need to **configure your self-hosted environments** [(see configuration steps)](/docs/tas-self-hosted-installation/), before you can start with the following steps to setup your repositories.

## Step 1 - Integrating the repositories
***
- On the page where you see all of your repositories.
- Click the **Setup Project** button for the repository you want to integrate with TAS. It will redirect you to `tas.yml` configurations page.

> **Note**: You need admin rights to integrate a repo with TAS. In case you do not have admin rights to a repository, you will not be able to import and integrate that project with TAS.

## Step 2 - Configuring the .tas.yml
***
### Preparing the file 
Once you've imported the repo, you'll be taken to the `.tas.yml` configuration page.

This step remains same for both **TAS Cloud** and **TAS - Self Hosted** modes.

The three main parameters that need to be configured for successful execution are:
- **[framework](/docs/tas-configuring-tas-yml#framework)** : The name of the specify testing framework you are using.
- **[preRun](/docs/tas-configuring-tas-yml#prerun)** : Shell commands executed inside the root level of your git repository before running the tests.
- **[postMerge](/docs/tas-configuring-tas-yml#prerun)** : The glob patterns for the test cases that you want to execute in the post-merge jobs.

**To Generate the TAS Configuration file**
- Select your **Language**, **Framework**, **Set Command you want to run before running tests** and **Enter the test file glob pattern**. This will generate a basic `tas.yml` file.
- To copy the generated file, Click on **Copy** button.

A detailed list of all the configuration parameters can be found [here](/docs/tas-configuring-tas-yml).<br />

<p align="center">
<img loading="lazy" src={require('../assets/images/tas/getting-started/yml-generate.gif').default} alt="Import Repository" width="1340" height="617" className="doc_img"/>
</p>

### Adding the file to your project
Once you have copied the configuration file, place this file correctly inside your repo using the steps mentioned below:
1. In your master branch, **create a new file** as `.tas.yml` at the **root level of  your repository**.
2. In the `.tas.yml` file content, **Paste** the yml file you had copied using Copy button.
3. **Commit** and **Push** the changes to your repo.

<p align="center">
<img loading="lazy" src={require('../assets/images/tas/getting-started/yml-addition-in-repo.gif').default} alt="Import Repository" width="1340" height="617" className="doc_img"/>
</p>
