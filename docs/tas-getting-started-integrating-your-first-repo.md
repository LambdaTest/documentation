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
- Click the **Import** button for the repository you want to integrate with TAS.
- Once **Imported Successfully**, Click on **Go to Project** to proceed further.

> **Note**: You need admin rights to integrate a repo with TAS. In case you do not have admin rights to a repository, you will not be able to import and integrate that project with TAS.

## Step 2 - Post-merge settings
***
In this step, you need to set the **post-merge** settings for your repository. The **post-merge** setting defines when should TAS initiate a **post-merge** job (a test execution job that will be initiated every time a PR is merged into a branch). 

You need to define two things here:
1. **Activate Post-merge jobs on** - the `branch name` for which you want to run post-merge jobs. 
2. **Initiate a Post-merge job for every** - the `number of commits` after which you want to initiate a post-merge job automatically.

<p align="center">
<img loading="lazy" src={require('../assets/images/tas/getting-started/import-postmerge.gif').default} alt="Import Repository" width="1340" height="617" className="doc_img"/>
</p>

> **TIP**: We recommend to use the default settings of **All branches** and **1 Commit**, these can be changed later from the repository settings section.

## Step 3 - Configuring the .tas.yml
***
### Preparing the file 
Once done with the post-merge settings, you will be navigated to `.tas.yml` configuration page. The `.tas.yml` file should contain all the necessary steps that are required to execute tests on the TAS Platform. 

This step remains same for both **TAS Cloud** and **TAS - Self Hosted** modes. You can begin with our sample configuration file and parameters given alongside on the **TAS yml configuration page**. 

The three main parameters that need to be configured for successful execution are:
- **[framework](/docs/tas-configuring-tas-yml#framework)** : The name of the specify testing framework you are using.   
- **[preRun](/docs/tas-configuring-tas-yml#prerun)** : Shell commands executed inside the root level of your git repository before running the tests. 
- **[postMerge](/docs/tas-configuring-tas-yml#prerun)** : The glob patterns for the test cases that you want to execute in the post-merge jobs.

A detailed list of all the configuration parameters can be found [here](/docs/tas-configuring-tas-yml).<br />

<p align="center">
<img loading="lazy" src={require('../assets/images/tas/getting-started/yml-download.gif').default} alt="Import Repository" width="1340" height="617" className="doc_img"/>
</p>

### Adding the file to your project
Once you have prepared the configuration file, place this file correctly inside your repo using the steps mentioned below:
1. In your master branch, **create** a new file as `.tas.yml` at the <b> root level of  your repository </b>. 
2. **Copy** the configuration from the TAS yml configuration page and **paste** them in the `.tas.yml` file you just created.
3. **Commit** and **Push** the changes to your repo. 

&ensp; &ensp; &ensp; OR
1. **Download** the configuration file you have created on the TAS yml configuration page.
2. **Rename** it to `.tas.yml`, as it needs to be dotfile. Place it at the root level of your repository.
3. **Commit** and **Push** the changes to your master branch. 

<p align="center">
<img loading="lazy" src={require('../assets/images/tas/getting-started/yml_placing.gif').default} alt="Import Repository" width="1340" height="617" className="doc_img"/>
</p>
