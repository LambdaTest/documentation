---
id: tas-learn-about-tas-features-and-languages
title: Features and Languages
hide_title: true
sidebar_label: Features and Languages
description: Features and Languages Supported on TAS
keywords:
  - LambdaTest TAS
  - Test at Scale
  - TAS - Features and Languages
  - TAS - Learn more about TAS
url: https://www.lambdatest.com/support/docs/
site_name: LambdaTest
slug: tas-learn-about-tas-features-and-languages/
---

# Features and Languages
***

TAS enables developers and engineering leaders to accelerate testing, reduce build times upto 95% & gain actionable visibility into their test cases. But that's not it, have a look at all of our features. 

## Features
***

### Smart Test Selection

Even though only certain sections of a codebase are changed in a commit, development teams usually execute the whole test suite every time. This practice clogs the development pipelines and becomes a bottleneck in achieving high development velocity.
 
TAS understands the dependencies in a codebase by executing the whole set of unit tests in the first iteration and then uses the stored information to accelerate the subsequent builds. Our smart test engine analyses the code changes and intelligently selects only a subset of the test suite that requires execution. This drastically reduces the testing time making frequent testing more feasible. TAS enables development teams to test smarter, release faster.

<p align="center">
<img loading="lazy" src={require('../assets/images/tas/getting-started/smart_select.png').default} alt="Signup with TAS" width="1340" height="617" className="doc_img"/>
</p>

### Test Insights
With TAS you get actionable insights on your test cases. 
- See how tests are behaving over multiple commits in one glance.
- TAS Trends give you in depth analysis on Tests Executed, Slowest Tests, Failing Tests, Contributor causing Failed Jobs
- Find out contributor level test insights. 

<p align="center">
<img loading="lazy" src={require('../assets/images/tas/getting-started/insights.gif').default} alt="Signup with TAS" width="1340" height="617" className="doc_img"/>
</p>

### Other Key Features
- Post-merge Testing Pipelines : You can setup post merge pipelines that will only execute a build after certain thresholds as configured by you. 
- Test Blocklisting :  With TAS it becomes super easy to blocklist test cases from our yaml configuration file. 

## Supported Languages
***

Currently we support Javascript [Jest](https://jestjs.io/), [Mocha](https://mochajs.org/) & [Jasmine](https://jasmine.github.io/)

:::tip New features coming every week. Stay Tuned.
:::
