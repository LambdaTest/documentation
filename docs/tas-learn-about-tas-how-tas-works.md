---
id: tas-learn-about-tas-how-tas-works
title: Introduction
hide_title: true
sidebar_label: Introduction
description: Introduction about TAS
keywords:
  - LambdaTest TAS
  - Test at Scale
  - TAS - Introduction
  - TAS - Learn more about TAS
url: https://www.lambdatest.com/support/docs/
site_name: LambdaTest
slug: tas-learn-about-tas-how-tas-works/
---

# Introduction
***

## What is TAS? 
***
TAS is an intelligent test execution platform for engineering teams to test smarter, release faster.
It intelligently interprets & runs only a subset of the test pool which is relevant to the latest commit, leading to shorter build durations, and faster feedback on code changes.

## Why is TAS needed?
***
Development teams don’t know what subset of test cases were impacted by their latest code changes. Hence, teams keep executing all the tests every time in every build which is pointless and just leads to Clogged Pipelines, Low Productivity, Slow Release Cycles & wasting Expensive Resources.

> TAS **enables developers** and **engineering leaders** to accelerate their testing, reduce build times up to **95%** & gain actionable visibility into their test cases.

## How it works? 
***
TAS understands the dependencies in a codebase by executing the whole test pool in the first iteration and then uses the stored information to accelerate the subsequent builds. 

For subsequent changes, our smart test engine analyses the code changes and intelligently selects only a subset of the test suite that requires execution. This drastically reduces the testing time making frequent testing more feasible. TAS enables development teams to test smarter, release faster.

TAS automatically detects new tests and tests that were updated and aligns them for execution along with other test cases that were impacted due to certain code changes. Resulting in execution of a smaller subset of tests instead of the whole test pool.

| BEFORE TAS                                | AFTER TAS                                         |
| ----------------------------------------- | ------------------------------------------------- |
| All the tests executed every time         | Only a subset of tests executed                   |
| Clogged CI/CD pipelines                   | Accelerated Pipelines from dev to release         |
| Long waiting for feedback on code changes | Faster feedback on code changes                   |
| Slower release cycles                     | Shorter release cycles. High development velocity |

:::tip We ❤️ Open Source.
**TAS Cloud** is free for Open source & educational projects.
Includes hosting and smart features.
:::

## Getting Started
***
Get started with TAS
- [Creating an Account](/docs/tas-getting-started-creating-an-account/)
- [Integrating your first repo](/docs/tas-getting-started-integrating-your-first-repo/)
- [Configuring .tas.yml for running tests](/docs/tas-configuring-tas-yml/)
