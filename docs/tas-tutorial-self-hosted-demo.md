---
id: tas-tutorial-self-hosted-demo
title: TAS Self Hosted Demo
hide_title: true
sidebar_label: TAS Self Hosted Demo
description: Demo Repository integration for TAS Self Hosted
keywords:
  - LambdaTest TAS
  - Test at Scale
  - TAS - TAS Self Hosted Demo
  - TAS - Tutorial
url: https://www.lambdatest.com/support/docs/
site_name: LambdaTest
slug: tas-tutorial-self-hosted-demo/
---

# TAS Self Hosted Demo
***

In this section we will explain how you can make a configuration file for Test at Scale community version.

<div className="ytframe"> 
<div className="youtube" data-embed="a1vVLMqjC4c">
    <div className="play-button"></div>
</div>
</div>

## Step 1
***
1. **Create an account** by visiting [TAS Login Page](https://tas.lambdatest.com/login/). (Or [TAS Home Page](https://tas.lambdatest.com/))
2. After login, **select your organisation** and continue with TAS Self Hosted.

<p align="center">
<img loading="lazy" src={require('../assets/images/tas/tutorial/tas-self-hosted/setup-self-hosted-org.gif').default} alt="Forking the repo and making account" width="1340" height="617" className="doc_img"/>
</p>

## Step 2
***
3. Download the configuration file for TAS self hosted and update your LambdaTest SecretKey.

<p align="center">
<img loading="lazy" src={require('../assets/images/tas/tutorial/tas-self-hosted/creating-configuration-file.gif').default} alt="Forking the repo and making account" width="1340" height="617" className="doc_img"/>
</p>

4. Download and run the docker-compose file.
5. Click on **Test Connection** and then **Proceed**.

<p align="center">
<img loading="lazy" src={require('../assets/images/tas/tutorial/tas-self-hosted/download-and-run.gif').default} alt="Forking the repo and making account" width="1340" height="617" className="doc_img"/>
</p>

## Step 3
***
6. **Fork** any one of our **sample repos** into your GitHub account. Sample repos : [Mocha](https://github.com/LambdaTest/mocha-demos), [Jest](https://github.com/LambdaTest/jest-demos), [Jasmine](https://github.com/LambdaTest/jasmine-node-js-example).
7. Import the same sample repository on the TAS Portal that you have forked earlier.
8. On the Post-merge settings screen, just continue with the default settings. (You can update these later)
9. Now its time to configure your `.tas.yml`. For this demo repo `.tas.yml` file is already present 👍, therefore just proceed to **Step 4** below.



<p align="center">
<img loading="lazy" src={require('../assets/images/tas/tutorial/tas-self-hosted/fork-and-import.gif').default} alt="Select mode and post-merge" width="1340" height="617" className="doc_img"/>
</p>

## Step 4
***
10. On the bottom left corner click **Already have a .tas.yml** and read the instructions.
11. In order make a commit open the **readme file**, make some changes (you can make any changes as we just have to do a dummy commit) and commit them directly to the master branch.
12. Go back to the portal and click on **Understood** to proceed further.
13. You should see a new job under queued or initiating status on your TAS portal.

<p align="center">
<img loading="lazy" src={require('../assets/images/tas/tutorial/tas-self-hosted/yaml-available-make-commit.gif').default} alt="Select mode and post-merge" width="1340" height="617" className="doc_img"/>
</p>

**Congratulations 🎉** <br/>
You have successfully initiated your first job.
Once this job finishes you should be able to see the test results for this job.

### Troubleshooting

- [Docker basic commands](https://docs.docker.com/engine/reference/commandline/docker/)
- [Docker-Compose basic commands](https://docs.docker.com/engine/reference/commandline/compose/)
- [TAS Self-Hosted Basic Troubleshooting](/docs/tas-faq-and-troubleshooting/)