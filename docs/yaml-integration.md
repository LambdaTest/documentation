---
id: yaml-integration
title: Configure YAML For Integrating GoCD Pipelines With TestMu AI
sidebar_label: YAML
description: This topic will teach you how you can configure your own YAML through GoCD and then integrate your pipeline with an online Selenium Grid.
keywords:
  - gocd
  - testmu ai
  - gocd integrations
  - gocd pipelines
  - gocd testmu ai
  - gocd integration with testmu ai
  - testmu ai integration with gocd pipelines
  - ci/cd
url: https://www.testmu.ai/support/docs/configure-yaml-for-integrating-gocd-pipelines-with-selenium-grid-online
site_name: LambdaTest
slug: configure-yaml-for-integrating-gocd-pipelines-with-selenium-grid-online
---

Through our previous document, you were able to integrate GoCD pipelines with <BrandName />, and executed your first Selenium testing script through GoCD on <BrandName />. However, in our previous chapter we ran the test by copying the YAML from the cloned [repository for GoCD](https://github.com/LambdaTest/nightwatch-gocd-sample). This topic will teach you how you can configure your own YAML through GoCD and then integrate your pipeline with our online Selenium Grid.

> **Note:** If you are just getting started with GoCD then make sure to visit our documentation to [integrate <BrandName /> with GoCD](/docs/gocd-integration-with-testmu/).

## Configuring YAML through GoCD


**Step 1:** Visit your GoCD dashboard and use Pipeline as a code.

<img loading="lazy" src={require('../assets/images/yaml-integration/YAML.webp').default} alt="Image"  className="doc_img"/>

**Step 2:** By default, the configuration language will be set as YAML. Under Part 1, mention the link to our [GitHub repository for GoCD](https://github.com/LambdaTest/nightwatch-gocd-sample) and test the connection.

<img loading="lazy" src={require('../assets/images/yaml-integration/YAML-1.webp').default} alt="Image"  className="doc_img"/>

**Step 3:** Now, in Part 2, make sure to label your Pipeline with a name of your choice. Here we have labelled it as Sample-GoCD-Pipeline. Similarly, in Part 3 for Stage details, provide a label for your Staging environment.

<img loading="lazy" src={require('../assets/images/yaml-integration/YAML-2.webp').default} alt="Image"  className="doc_img"/>

**Step 4:** In Part 4 i.e. Job & Tasks, you need to specify a Job name as per your choice and enter the below commands.

```
npm install
./node_modules/.bin/nightwatch -e chrome
```

<img loading="lazy" src={require('../assets/images/yaml-integration/YAML-3.webp').default} alt="Image"  className="doc_img"/>

**Step 5:** Under Advanced setting, you need to specify your <BrandName /> authentication credentials as the environment variables.

<img loading="lazy" src={require('../assets/images/yaml-integration/YAML-4.webp').default} alt="Image"  className="doc_img"/>

**Step 6:** You will find the YAML configuration file generated over the right side panel. In rare cases, if it doesn’t then you need to select the configuration language to first JSON, and then select YAML again. Now, if you scroll to bottom you will find a section to "Add Your Pipeline as Code Definitions to Your SCM Repository". Click on the button to "Download Config".

<img loading="lazy" src={require('../assets/images/yaml-integration/YAML-5.webp').default} alt="Image"  className="doc_img"/>

Now, you just need to execute the job like we did in the previous chapter when we [integrated GoCD with <BrandName />](/docs/gocd-integration-with-testmu/). That is all you need to do if you wish to configure a private YAML file before you run your Selenium testing scripts over <BrandName /> Selenium Grid.
