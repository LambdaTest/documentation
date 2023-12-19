---
id: tas-faq-and-troubleshooting
title: FAQs and Troubleshooting 
hide_title: true
sidebar_label: FAQs and Troubleshooting
description: Common Questions and Answers for TAS.
keywords:
  - LambdaTest TAS
  - Test at Scale
  - TAS - FAQs and Troubleshooting 
url: https://www.lambdatest.com/support/docs/
site_name: LambdaTest
slug: tas-faq-and-troubleshooting/
---

# FAQs
***

**How do I start using TAS?**
- You can simply login on the TAS portal with your existing GitHub or GitLab account. Allow necessary access to Git organisations and onboard your repositories onto TAS. Add a .tas.yml and you’re ready to go.

**Will it work on my local setup?**
- Yes. Through our Self-Hosted mode, it is possible. However, test-insights will only be available on TAS portal. [Setup TAS on a self-hosted environment](/docs/tas-self-hosted-installation)

**Does TAS look inside my code?**
- In order to discover and execute the test-cases in your repository, TAS needs access to your code. However, TAS provides an option to run a repository on self-hosted environment. The test-at-scale binary (hosted on machine(s) provided by you) has the access to your code. TAS Servers store metadata only related to tests like name of testFile, testCase, testSuite. At no point, we collect the business logic of your code.

**Do I need to migrate from my current CI to TAS?**
- You need to migrate the step in your CI pipeline that runs the tests of your repository.

**What are the different Hosting options?**
- **TAS Cloud** - The entire infrastructure is managed by TAS including the “test runners” that has access to your code for running the tests. The tests in your repository will be executed on cloud runners managed by TAS.
- **Self Hosted** - In this option, you need to provide the machines (and manage those machines yourselves) to run tests in your repository. TAS will only receive the tests metadata to show you the insights on TAS portal.

**Will this work on an on-premise data centre.**
- Yes it will. Soon we will be bringing all of our offerings to on-prem as well. So that everything stays inside your infrastructure, including the tests metadata and TAS portal. 

<br />

# Troubleshooting
***

## Getting TAS Error in my jobs.
If your jobs are running into TAS Error in case of a self hosted environment, there are two possible reasons for the same:
1. It is possible that your synapse isn't up and running. 
2. It is possible that your self hosted environment was not allocated enough resources. 
<br />

### How to check if synapse is running or not?
In order to check the synapse status, simply go to settings from the left side bar and click on connected synapse to view the list. If you have any connected synapses they will show up here. 
<p align="center">
<img loading="lazy" src={require('../assets/images/tas/connected_synapse.gif').default} alt="Connected_Synapse" width="1340" height="617" className="doc_img"/>
</p>

If you are still facing an issue, try **restarting** the synapse or **view the logs** using the steps given below.

- **Restarting the synapse**

  If you want to restart the docker container you can use the below command in the same directory as your `docker-compose.yml`.
  ```bash
    docker-compose down
    docker-compose up -d   
  ```

- **Viewing agent container (synapse) logs**

  If you want to check logs from the docker container (synapse) you can use the following command.
  ```bash
    docker logs synapse -f
  ```

- **Viewing job container logs**

  If your synapse is connected and still your jobs are failing you can checkout job logs by navigating into logs directory mounted in docker-compose file (by default it's same directory as your docker-compose). You can navigate to specific job logs by navigating into `logs/synapse/<job-id>`.
  > **NOTE**: You can modify logs directory by updating docker-compose volume mounts.
  ```
  volumes:
    - "./logs/synapse:/var/log/synapse"
  ```

<br />

### Synapse is connected but still facing TAS error.
If your **synapse** is connected but you are still facing TAS error, it is possible that synapse was not allocated enough resources.
- **NOTE:** In order to run test-at-scale synapse you require a minimum configuration of 2 CPU cores and 4 GBs of RAM. Execute the following command to ensure that resources usable by Docker are atleast **CPU: 2, RAM: 4294967296**.

  ```bash
  docker info --format "CPU: {{.NCPU}}, RAM: {{.MemTotal}}"
  ```
- If you see resources allocated are less than **CPU: 2, RAM: 4294967296**, go to settings tab on docker application and increase the resources allocated.

  <p align="center">
  <img loading="lazy" src={require('../assets/images/tas/synapse_resource_update.gif').default} alt="Synapse Resource Update" width="1340" height="617" className="doc_img"/>
  </p> <br />


### General Troubleshooting
- If you get docker (synapse) error logs as below, then please verify if your `docker-compose.yml` and `.synapse.json` files are in the same directory by using `ls -la` command.

  ```
  synapse  | Warning: No configuration file found. Proceeding with defaults
  synapse  | Warning: No configuration file found. Proceeding with defaults
  synapse  | error in reading config file: open : no such file or directory
  synapse  | error in umarshaling secrets: unexpected end of JSON input
  ```

- In case you have followed all the steps but still facing some issue due to which you are not able to execute your jobs in your self hosted environment, feel free to **reach out to us** on our <a href="https://discord.com/invite/Wyf8srhf6K">Discord Channel.</a> You can directly raise your doubts on the "**tas-support**" channel, if you have any **suggestions** or **feedback**, you can submit that to us using the "**suggestions**" channel.

  <p align="center">
  <img loading="lazy" src={require('../assets/images/tas/discord.png').default} alt="Synapse Resource Update" width="1340" height="617" className="doc_img"/>
  </p> 