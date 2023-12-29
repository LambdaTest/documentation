---
id: getting-started-with-TAS
title: Getting Started With TAS On LambdaTest Platform
sidebar_label: Getting Started with TAS
description: Now run automated tests with Selenium 4 using the LambdaTest Selenium Grid across 3000+ browsers and operating systems. 
keywords:
- Selenium 4 
- Selenium 4 Relative Locators
- Selenium 4 Automation
- Selenium 4 Documentation

url: https://www.lambdatest.com/support/docs/getting-started-with-tas/
site_name: LambdaTest
slug: getting-started-with-tas/
---
***
TAS is an intelligent test execution platform for engineering teams to achieve high development velocity. It accelerates your testing, shortens build times, and provides faster feedback on code changes. 

* **Integrate Easily** - TAS brings the testing expertise into your existing workflows.
* **Test Smartly** - TAS selects & executes only specific tests that are impacted by the code changes
* **Deliver Frequently** - TAS shortens test times enabling developers to deliver faster

## Features
***
### Smart Test Selection

Even though only certain sections of a codebase are changed in a commit, development teams usually execute the whole test suite every time. This practice clogs the development pipelines and becomes a bottleneck in achieving high development velocity.
 
TAS understands the dependencies in a codebase by executing the whole test suite in the first iteration and then uses the stored information to accelerate the subsequent builds. Our smart test engine analyses the code changes and intelligently selects only a subset of the test suite that requires execution. This drastically reduces the testing time making frequent testing more feasible. TAS enables development teams to test smarter, release faster.

## How TAS Works
***
The TAS engine intelligently interprets & runs only the relevant subset of tests that are relevant with reference to the latest commit.. With KPI's like MTTR, MTBF, Flake rate, frequently failing tests, and many more that are relevant for faster TTM, TAS enables developers and engineering leaders to accelerate their testing, reduce build times up to **95%** & gain actionable visibility into their test cases.

| BEFORE TAS                                | AFTER TAS                                         |
| ----------------------------------------- | ------------------------------------------------- |
| Executing all the tests every time        | Executing only those tests that matter            |
| Clogging of testing (or CI/CD) pipelines  | Accelerated Pipelines from dev to release         |
| Slower feedback on code changes           | Faster feedback loop on code changes              |
| Slower release cycles                     | Shorter release cycles. High development velocity |


## Test smarter, Release faster.
***
- [Get Started with TAS](https://link).
- [Watch a video](https://link).
- [Book a demo](https://link).

## Getting Started with TAS
***
### 1. Creating an account

- To sign up with TAS, go to the [TAS Login Page](https://tas.lambdatest.com/login/) and click on **Login With Github**.
- Select the **organization** you want to continue with.
- Select the most appropriate options that describe you and click on **proceed**.

## Setup your First Repo with TAS
***
- Click on the **import** button for the repository you want to integrate with TAS. You will see a message saying - "**Repo added successfully**". Then click on **go to project**.
- Follow the instructions on the YAML configuration page (or see docs here)  to make a suitable TAS YAML file.
- Once done with the configurations, download the file and rename it to “**.tas.yml**”. Place it at the **root level** of your repository and push the changes to your repo. 
- After making the commit, click on **Start Testing**.
- Once you have successfully integrated your repo you will see a dashboard for that repository.

> Note: If you have missed any steps (see steps here) or have misconfigured. You will get a pop up like this. Make sure to follow the instructions and click on the **Start Testing** button.

## Configuration of TAS YML
***
### 1. Configuring TAS Yml

In this section we will explain how you can make a .tas.yml configuration file for your project. 

#### version
The `version` field is intended to be used in order to issue warnings for deprecation or breaking changes.

| Key       | Required  | Type      | Description   |
| --------- | :-------: | --------- | ------------- |
| `version` | `true`    | `string`  | 1.0 or 1      |

#### framework
Specify which testing `framework` you are using.

| Key         | Required  | Type      | Description   |
| ----------- | :-------: | --------- | ------------- |
| `framework` | `true`    | `string`  | Currently we support these testing frameworks: `mocha, jest, jasmine.`    |

#### configFile
The `configFile` field is used to specify the configuration file to be used by the testing framework.

| Key           | Required  | Type      | Description   |
| ------------- | :-------: | --------- | ------------- |
| `configFile`  | `false`   | `string`  | Name/Path for the configuration file. Currently supported: `mocha`  |

#### blocklist
`blocklist` contains the list of tests, test suites or files to ignore.

| Key           | Required  | Type      | Description   |
| ------------- | :-------: | --------- | ------------- |
| `blocklist`   | `false`   | `array`   | This list of tests, test suites or files that will not be executed. Takes value in the following format `"<file>##<suite-name>##<test-name>"` |

**Example**
```yml
blocklist: 
  - "test/unit/adapters/http.js" #blocklist test file.
  - "test/unit/adapters/ws.js" #blocklist test suite.
```

#### coverageThreshold
`coverageThreshold` specifies the code coverage threshold values. The value map has the following attributes

| Key           | Required  | Type      | Description   |
| ------------- | :-------: | --------- | ------------- |
| `branches`    | `false`  | `float`    | what % of branches must be covered?   |
| `lines`       | `false`  | `float`    | what % of lines must be covered?   |
| `functions`   | `false`  | `float`    | what % of functions must be covered?   |
| `statements`  | `false`  | `float`    | what % of statements must be covered?   |
| `perFile`     | `false`  | `boolean`  | check coverage on a per-file basis (as opposed to in aggregate)   |

**Example**
```yml
coverageThreshold: 
  branches:80
  lines:80
  functions:80
  statements:80
  perFile: true
```

#### preMerge
`preMerge` specifies the test cases that will be executed pre merging of commit, when a pull request is raised.

| Key           | Required  | Type      | Description   |
| ------------- | :-------: | --------- | ------------- |
| pattern       | `true`    | `array`   | Glob identifying file(s), or a non-glob path to a file that need to be executed |
| env           | `false`    | `array` of `key/value` pair   | Glob identifying file(s), or a non-glob path to a file that need to be executed |

**Example**
```yml
preMerge: 
  pattern: test/unit/**/*.js
  env:
    REGION: us-east-1
```

#### postMerge
The test cases that will be executed pre merging of commit, when a pull request is raised.

| Key           | Required  | Type      | Description   |
| ------------- | :-------: | --------- | ------------- |
| pattern       | `true`    | `array`   | Glob identifying file(s), or a non-glob path to a file that need to be executed |
| env           | `false`    | `array` of `key/value` pair   | Glob identifying file(s), or a non-glob path to a file that need to be executed |

**Example**
```yml
postMerge: 
  pattern: test/unit/**/*.js
  env:
    DOCKER_REPO: lambdatest
    AWS_KEY: ${{ secrets.AWS_KEY }}
```

#### preRun
Prerun *(to be mentioned in yaml as preRun)* is a series of shell commands. These commands are executed inside the root directory of your git repository before running the tests. Run commands are executed using non-login shells by default, so you must explicitly source any dotfiles as part of the command.

The test cases that will be executed pre merging of commit, when a pull request is raised.

| Key           | Required  | Type      | Description   |
| ------------- | :-------: | --------- | ------------- |
| commands      | `true`    | `array`   | Pre-run commands are defined as a series of shell commands, executed before running the tests |

**Example**
```yml
preRun:
  commands:
    - npm ci
    - npm run lint
```

#### postRun
Post run a series of shell commands. The commands are executed inside the root directory of your git repository after running the tests.

| Key           | Required  | Type      | Description   |
| ------------- | :-------: | --------- | ------------- |
| commands      | `true`    | `array`   | Post-run commands are defined as a series of shell commands, executed after running the tests. |

**Example**
```yml
postRun:
  commands:
    - npm ci
    - npm run lint
```

### Sample yml File
```yml
# supported frameworks: mocha|jest|jasmine
framework: mocha
# supported tiers: xsmall|small|medium|large|xlarge
tier: xsmall
blocklist:
  # format: "<filename>##<suit-name>##<suit-name>##<test-name>"
  - "src/test/api.js"
  - "src/test/api1.js##this is a test-suite"
  - "src/test/api2.js##this is a test-suite##this is a test-case"
postMerge:
  # env vars provided at the time of discovering and executing the post-merge tests
  env:
    REPONAME: nexe
    AWS_KEY: ${{ secrets.AWS_KEY }}
  # glob-pattern for identifying the test files
  pattern:
    - "./test/**/*.spec.ts"
  # strategy for triggering builds for post-merge
  strategy:
    threshold: 1
    name: after_n_commits
preMerge:
  pattern:
    - "./test/**/*.spec.ts"
preRun:
  # set of commands to run before running the tests like `yarn install`, `yarn build`
  command:
    - npm ci
    - docker build --build-arg NPM_TOKEN=${{ secrets.NPM_TOKEN }} --tag=nucleus
postRun:
  # set of commands to run after running the tests
  command:
    - node --version
# path to your custom configuration file required by framework
configFile: mocharc.yml
version: 2.0

```
## Using Configuration Parameters
***
### 1. Mocha

Follow these steps to use a custom configuration file in mocha framework.

- Create a `mocha` configuration file in the repository.

`mocharc.yaml`
```yml
require: 
  - ts-node/register 
  - jsdom-global/register
```
- Add `configFile` parameter in the tas yml file and reference the mocha config file.

`.tas.yaml`
```yml
...
configFile: mocharc.yml
...
```

## Managing Secrets
***
You can add environment variables in TAS to securely use sensitive information such as username, passwords, api keys etc. We use the Hashicorp vault to securely store the secrets on our end. The secrets will have scope limited to the repository. And it will be decrypted only during the build.

### 1. Adding secrets to your build
- Open a build and navigate to **Settings** section
- Select **Environment Variables** from the sidebar
- Add **Secret Name**, **Secret Value** and click on **Add Secret**. You’ll see a message **Secret added**.
- You can use the secret created in portal in `.tas.yml` using `${secret_name}`

**Example**

This example will demonstrate how we can refer secrets in `.tas.yml`.
```yml
framework: jest
modifiers:
    - type: jest
      cli: "--forbid-pending --no-bail"
postMerge:
    pattern:
        - ".src/__tests__/**/*.spec.ts"
    strategy:
        threshold: <5|100s|30m|6h>
        type: <commit|time>
preMerge:
    pattern:
        - ".src/__tests__/**/*.spec.ts"
stability:
    consecutive_runs: 5
preRun:
    - NPM_TOKEN=${{ secrets.secret_name }} npm i
    - npm run react
postRun:
    - node --version
version: 2.0
```

## Synapse - Self Hosted Runners
***
Synapse is a TAS component which enables you to run end-to-end TAS build tasks on your own infrastructure.

When TAS is configured to execute the builds on self-hosted runners. We do not download any part of your repository on TAS cloud. Every operation is executed on your own infrastructure via synapse. And the reports that are generated will be sent back to the TAS cloud to display it on the dashboard.

## Architecture
***
- When a repo is integrated with TAS and configured to run on self-hosted runners these steps will be performed.
- When there are any incoming commits in a configured branch, Github will send a webhook request to the TAS server.
- TAS server will then process the web hook and create tasks that will be then sent to synapse.
- Synapse will spawn containers to execute those tasks and send basic test metadata back to the TAS server.
- The TAS dashboard then can be used to check the test analytics.

## Installation
***
You can deploy synapse in multiple ways on your infrastructure. Choose your preferred way for managing your Synapse.

### 1. Docker Prerequisites
- [Docker](https://docs.docker.com/get-docker/)
- [Docker-Compose](https://docs.docker.com/compose/install/) (Recommended)

Locate your preferred directory from the terminal, make a directory and put [synapse configuration/secret file](http://link) in that directory. Execute the command below to download the docker compose file and run it.

```bash
curl -L <docker-compose-link> -o $PWD/docker-compose.yaml
docker-compose up -d
```

`docker-compose.yaml`
```yml
version: '3.3'
services:
    synapse:
        container_name: tas-synapse
        image: lambdatest/synapse
        restart: always
        volumes:
            - '${pwd}/secrets.yaml:/synapse/secrets.yaml'
```

>**Note**: 
>- This compose file will pull the latest version of synapse.
>- It will mount the current directory with /synapse/secrets.yaml to the container which will be used as a configuration file for the synapse.
>- You can change it by changing the entrypoint in the docker-compose file.

### 2. Without docker-compose
To get up and running quickly, you can use the following command to run synapse without docker-compose.

> **Note:** We strongly recommend to use docker-compose to run synapse.

```bash
 $ docker run —name tas-synapse —-restart always \
        -v ${pwd}/secrets.yaml:/synapse/secrets.yaml \
        lambdatest/synapse

```

### 3. AWS Prerequisites
- [AWS Account](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/)

#### Create a key pair
Follow [these](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#having-ec2-create-your-key-pair) steps to create a key pair.

> **Note:** You can skip this step if you already have a key-pair.

#### **Create AWS Security Groups**
Synapse needs to initiate the connection to the TAS server to fetch the jobs. Make sure the security group allows outbound traffic to `lambdatest-link:443`.
Follow [these](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#creating-security-group) steps to create a new security group.

Need to test with 443 outbound port.

> **Note:** You can skip this step if you already have a security group which allows outbound traffic to lambdatest-link:443.

#### **Launch EC2 Instance Using AMI**
- Navigate to AWS Console.
- From services go to EC2.
- From sidebar navigate to instances
- Click on `“Launch Instances”` button
- In `choose an amazon machine image` section search for “tas-synapse-ami-name” and click on select button
- Choose the instance size as per your requirement
- Click on `Next` button
- Configure `Instance Details` as per requirement and click on `Next`
- `Add storage` as per requirement (Recommended 20 GB) and click `Next`
- `Add Tags` as per requirement and click `Next`
- Choose `Select an Existing Security Group` and `Select the security group` created earlier and click `Review and Launch`
- `Review the instance details` and click on `Launch`
- Select `Choose an existing key pair` and select the key pair created earlier and click on `Launch`

## Configurations/Secrets file
***
Synapse needs a configuration file containing the following information in order to work.
- Lambdatest Secrets
- Github Oauth Secrets
- Repository Secrets

| Key                       | Usage                                     |
| --------------------------| ----------------------------------------- |
| `lt-auth.org-id`          | Organization id provided by lambdatest    |
| `lt-auth.api-key`         | API key provided by LambdaTest    |
| `git-auth.access_token`   | Access token for github   |
| `repo-secrets`            | List of repo secrets Example is provided below    |

**Example**

This is the example for creating `secrets.yml` file for synapse.
```yml
lt-auth:
    org-id: "orgid123456789"
    api-key: "demo-api-key"
git-auth:
    access_token: "github-access-token"
    expiry: "0001-01-01T00:00:00Z"
    refresh_token: ""
repo_secrets:
    tas-demo-repo-1: 
        key1: value1
        key2: value2
    tas-demo-repo-2:
        key3: value3
        key4: value4
```

## How to Guides
***
### 1. Generating github personal access token

- Navigate to [Github Settings](https://github.com/settings/tokens), click on `Generate new token` and `confirm your password`.

- `Select the scopes` for the token. What permissions do you want to assign to this token.
> **Note:** Synapse needs repo permissions in order to function properly.
- Click on `Generate Token`.
- `Copy` your token.

## Tier and Credits Consumption
***
With TAS cloud runners we provide a certain amount of free credit quota every month for running your builds. The credit consumption calculation will be based as per described below. You will be only charged for the time your build is actually using compute.

To check the detailed credit usage, go to `Settings` page and select `Usage Details`.

Free credits will be reset every month.

### Tier configuration and consumption details
| Configuration | Available On          | vCPU  | RAM   | Credits/Minute |
| ------------- | --------------------- | :--:  | :---: | :------------: |
| X-Small       | Free tier             | 1     | 2     | 5              |
| Small         | Free tier             | 1     | 2     | 5              |
| Medium        | Teams + Enterprise    | 1     | 2     | 5              |
| Large         | Teams + Enterprise    | 1     | 2     | 5              |

## FAQs
***
**How do I start using TAS?**
> On our TAS portal, login with your GitHub account and allow necessary access to GitHub organisations and repositories you want to onboard on TAS. Import one or more of the listed repositories, add a .tas.yml and you’re ready to go.

**Will it work on my local setup?**
> Yes. Through synapse, it is possible. However, test-insights will only be available on TAS portal. [Add Synapse doc]

**Does TAS look inside my code?**
> In order to discover and execute the test-cases in your repository, TAS needs access to your code. However, TAS provides an option to run a repository on self-hosted synapse. The synapse (hosted on machine(s) provided by you) has the access to your code. TAS portal stores information only related to tests like name of testFile, testCase, testSuite. At no point, we collect the business logic of your code.

**Do I need to migrate from my current CI to TAS?**
> You need to migrate the step in your CI pipeline that runs the tests of your repository.

**What are the different Hosting options?**
> **TAS Managed** - The entire infrastructure is managed by TAS including the “runners” that has access to your code for running the tests. The tests in your repository will be executed on our cloud runners managed by TAS.

> **Self Hosted** - In this option, you need to provide the machines (and manage those machines yourselves) to run tests of your repository. TAS will only receive the tests metadata to show you the insights on TAS portal.

**Will this work on an on-premise data centre.**
> Yes it will. Soon we will be bringing all of our offerings to on-prem as well. So that everything stays inside your infrastructure, including the tests metadata and TAS portal. 

## Telemetry
***
We collect telemetry data during the build process to identify errors. In addition we ask you to opt-in to send us regular usage telemetry during the setup process. 
Data collected is strictly anonymous in nature and cannot be used to uniquely identify a user.
What data is collected?

## TAS Cloud
***
If you are using our cloud version, we collect the stats of which builds were successful, which were unsuccessful and need our help. 

## TAS - Self hosted via Synapse
***
Synapse is a lightweight proxy and does not capture any data returned by your APIs, databases, or third-party tools.

During the installation process, we collect stats of which installations were successful, which were unsuccessful and need our help. 

This is used to analyze the: 
- Installation Started
- Installation Success
- Installation Errors
- Installation Support

We also collect the stats of which builds were successful, which were unsuccessful and need our help. 

## Security
***
To know more about the security aspect please visit our [security](http://www.lambdatest.com/security) page.