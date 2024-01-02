---
id: tas-self-hosted-overview
title: Overview
hide_title: true
sidebar_label: Overview
description: TAS self hosted overview
keywords:
  - LambdaTest TAS
  - Test at Scale
  - TAS - Overview
  - TAS - Self Hosted
url: https://www.lambdatest.com/support/docs/
site_name: LambdaTest
slug: tas-self-hosted-overview/
---

# Overview
***
## Summary
***
The Test At Scale platform accelerates your testing, shortens the build durations and helps you get faster feedback on your code changes. We've engineered the platform such that you can setup the system anywhere, from your local workstation to any cloud (AWS, Azure, GCP etc), as per your convenience.  

When you configure TAS to run in self-hosted environment, all the test execution jobs are executed inside your setup environment. Your code stays within your setup environment. To provide you with test-insights on the TAS portal we store information only related to tests like name of testFile, testCase, testSuite. At no point, we collect business logic of your code.​<br/>

## Repo Overview
***
[LambdtaTest/test-at-scale](https://github.com/LambdaTest/test-at-scale/) consists of 2 components:

- **Synapse:** is the agent responsible for fetching jobs from Test at Scale servers to execute them on the self hosted environment (your laptop or your server farm). Synapse coordinates with nucleus (test runner) and TAS cloud to execute tests and push out test details such as test name, test suite, execution logs, execution metrics.
- **Test Runners:** This component is the driving agent of the container executed to run the actions received by synapse. All actions will be executed on Linux containers and itself manages the lifecycle of the container. It provides functionalities such as logging, metric collections, etc.​<br/>

## How it works
***
​<br/>
<p align="center">
<img loading="lazy" src={require('../assets/images/tas/synapse-tas-interaction.png').default} alt="Synapse Architecture" width="1340" height="617" className="doc_img"/>
</p>

Here is a sample flow for you to understand how it works
- After configuring TAS self-hosted mode and integrating your repositories with TAS platform.
- Whenever you make a commit, raise a PR or merge a PR, the TAS platform receives a webhook event from your git provider.
- This webhook event is simply sent to your self-hosted environment in order to initate jobs for test execution.
- The test-at-scale binary running on your self hosted enviroment receives this event and spawns containers to execute those jobs.
- Your code or business logic never leaves your setup environment.
- Only basic test metadata is sent to the TAS server in order to provide you with test insights and other relevant information on the TAS dashboard.​<br/>

As your workload increases 
- You can add more servers running Test-at-scale binary, which will distribute the load amongst themselves automatically.
- Routing: TAS platform will send the test execution jobs to the connected self hosted environments which are online and have enough resources to run the job.
- If the resources are insufficient or fully occupied, the jobs will remain queued on for 2.5 hour and keep checking for resource availability every 30 seconds.
- If TAS platform is unable to find any connected self-hosted binary which can execute the job, it will be marked as failed.
