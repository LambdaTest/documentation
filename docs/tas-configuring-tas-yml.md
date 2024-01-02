---
id: tas-configuring-tas-yml
title: Configuring TAS yml
hide_title: true
sidebar_label: Configuring TAS yml
description: Configuring TAS yml
keywords:
  - LambdaTest TAS
  - Test at Scale
  - TAS - Configuring TAS yml
  - TAS - Configuration
url: https://www.lambdatest.com/support/docs/
site_name: LambdaTest
slug: tas-configuring-tas-yml/
---

# Configuring TAS yml
***
In this section we will explain how to make a `.tas.yml` configuration file for your project. This file defines the steps that are required for a test execution job to run on TAS. This step is same for **TAS Cloud** mode and **TAS - Self Hosted** mode. <br/> 
You can begin with the **Basic configurations** first and then go towards the **Advanced configurations** as per the requirements of your project. You can also refer to our **sample configuration file** given at the end of this page.

## Basic configuration parameters
***
### framework
You need to specify which testing `framework` you are using in your repo. Currently, we provide support for `mocha`, `jest` and `jasmine` testing frameworks. <br/>

**Example**
```yml
framework: jest
```

| Required  | Type | Sample Values |
| :----: | ---- | ---- |
| Yes | `string` | `mocha`, `jest`, `jasmine` |
<br/>

### preRun
These are shell commands executed inside the root level of your git repository before running the tests. `preRun` commands are executed using non-login shells by default, so you must explicitly source any dotfiles as part of the command.<br/>

> **NOTE:** You do not need to run any command like `npm run test` etc as we will be running the test cases mentioned by you in the `preRun.command` and `preMerge.pattern`.

**Example**
```yml
preRun:
  command:
    - npm ci
    - npm run lint
  #env:  in case you need to set any env variables
    #NODE_ENV: development
    #AWS_KEY: ${{ secrets.AWS_KEY }} # More details in Managing Secrets section
```

| Sub-Parameters | Required  | Type      | Description   |
| ------------- | :-------: | --------- | :------------- |
| `preRun.command`      | Yes  | `array`   | Array of shell commands executed after running the tests, typically to cleanup the test execution environment. |
| `preRun.env`          | Optional    | `map` | Map of `key/value` pairs to set env variables for the pre run commands. |
<br/>

### postMerge
This section contains the glob patterns for the test cases that you want to execute in the post-merge jobs, a test execution job that will be initiated every time a PR is merged into a branch.<br/>
 
**Example**
```yml
postMerge:
  pattern: 
    - test/unit/**/*.js # This is a sample glob pattern for all the tests inside the unit folder ending with .js extention.
  #env:  in case you need to set any env variables
    #NODE_ENV: development
    #AWS_KEY: ${{ secrets.AWS_KEY }} # More details in Managing Secrets section
```

| Sub-Parameters | Required  | Type      | Description   |
| ------------- | :-------: | --------- | :------------- |
| `postMerge.pattern`      | Yes  | `array`   | Array of testfile glob(s) or relative testfile(s) that needs to be executed. |
| `postMerge.env`          | Optional    | `map` | Map of `key/value` pairs to set env variables for the postMerge execution environment. |
<br/>

## Advanced configuration parameters
***

### blocklist
There can be some test cases that you don't want to execute. Here you can add the list of tests, test suites or files that you want to blocklist (ignore) during execution. The input for this parameter is of the format `"<file>##<suite-name>##<test-name>"` <br/>
 
**Example**
```yml
blocklist:
  # blocklist test file.
  - "test/unit/adapters/http.js"
  # blocklist test suite.
  - "test/unit/adapters/http.js##supports http with nodejs"
  # blocklist test-case.
  - "test/unit/adapters/http.js##supports http with nodejs##should support sockets"
```

| Required  | Type |
| :-------: | ---- |
| Optional | `array<string>` | 
<br/>

### preMerge
This section contains the glob patterns for the test cases that you want to execute in the pre-merge jobs, a test execution job that will be initiated every time a PR is raised.<br/>
 
**Example**
```yml
preMerge:
  pattern: 
    - test/unit/**/*.js # This is a sample glob pattern for all the tests inside the unit folder ending with .js extention.
  #env:  in case you need to set any env variables
    #NODE_ENV: development
    #AWS_KEY: ${{ secrets.AWS_KEY }} # More details in Managing Secrets section
```

| Sub-Parameters | Required  | Type      | Description   |
| ------------- | :-------: | --------- | :------------- |
| `preMerge.pattern`      | Yes  | `array`   | Array of testfile glob(s) or relative testfile(s) that needs to be executed. |
| `preMerge.env`          | Optional    | `map` | Map of `key/value` pairs to set env variables for the preMerge execution environment. |
<br/>

### postRun
These are shell commands executed inside the root level of your git repository after running the tests. postRun commands are executed using non-login shells by default, so you must explicitly source any dotfiles as part of the command.<br/>
 
**Example**
```yml
postRun:
  command:
    - node --version
  #env:  in case you need to set any env variables
    #NODE_ENV: development
    #AWS_KEY: ${{ secrets.AWS_KEY }} # More details in Managing Secrets section
```

| Sub-Parameters | Required  | Type      | Description   |
| ------------- | :-------: | --------- | :------------- |
| `postRun.command`      | Optional  | `array`   | Array of shell commands executed after running the tests, typically to cleanup the test execution environment. |
| `postRun.env`          | Optional    | `map` | Map of `key/value` pairs to set env variables for the post run commands. |
<br/>

### configFile
You might need to add a framework specific configuration file in some cases. The relative path for the configuration file like your custom `mocharc`, `jest.config`, `spec/support/jasmine.json` etc will need to be mentioned here. 

```yml
configFile: test/jest.config.json
```

| Required  | Type |
| :---: | --- |
| Optional | `string` |​
<br/>

### nodeVersion
TAS uses the Latest node LTS version as default. You can provide the semantic version of nodejs required for your project here.<br/>
 
**Example**
```yml
nodeVersion: 14.17.2
```

| Required  | Type      | Default   |
| :-------: | --------- | :------------- |
| Optional   | `SemVer`  | Latest node LTS version.     |
<br/>

### smartRun
You can configure whether to run test-cases smartly i.e. only run affected/impacted tests.<br/>
 
**Example**
```yml
smartRun: true
```

| Required  | Type      | Default   |
| :-------: | --------- | :------------- |
| Optional   | `boolean`  | `true`     |
<br/>

### tier
If your project requires a higher configuration to run, you can set the machine configuration on which the tests should run using this parameter. Acceptable values: xsmall, small, medium, large. <br/>
 
**Example**
```yml
tier: small
```

| Required  | Type      | Default   |
| :-------: | --------- | :------------- |
| Optional   | `string`  | `small`     |
<br/>

### parallelism
You can define the number of containers in which the tests must be split into for parallel execution.<br/>
 
**Example**
```yml
parallelism: 2
```

| Required  | Type      | 
| :-------: | --------- | 
| Optional   | `integer`  | 
<br/>

### splitMode
You can define mode in which the tests are split in the  containers. Only applicable if parallelism > 1.<br/>
 
**Example**
```yml
splitMode: test
```

| Required  | Type | Sample Values | Default |
| :----: | ---- | ---- | ---- |
| Optional | `string` | `file`, `test` | `test` |
<br/>

### containerImage
The containerImage field is intended to be used in order to provide a custom docker image for test execution. This field will not work if you are on the TAS-Cloud mode. 
Configure this parameter only if you are Self Hosting TAS and you want to provide a custom docker image for test execution.

> **NOTE:** This option is only supported for TAS Self-Hosted mode and is currently in **beta**.<br/>
 
**Example**
```yml
containerImage: lambdatest/nucleus:latest
```

| Required  | Type      | 
| :-------: | --------- | 
| Optional  | `string`  | 
<br/>

### version
The version field is intended to be used in order to issue warnings for deprecation or breaking changes on the platform level.<br/>
 
**Example**
```yml
version: 1.0.0
```

| Required  | Type      | 
| :-------: | --------- | 
| Optional  | `SemVer`  | 
<br/>

## Sample .tas.yml file
***
This sample `.tas.yml` configuration is generic configuration file trying to demonstrate the usage of all the above mentioend parameters.

```yml title=".tas.yaml"
# THIS IS A SAMPLE ".tas.yml" CONFIGURATION FILE

# FIRSTLY 
# You need to specify which testing framework you are using. 
# Currently supported JS frameworks are : mocha, jest and jasmine.
framework: mocha # framework should be as per your project. 

blocklist: # Optional parameter
  # format: "<filename>##<suit-name>##<suit-name>##<test-name>"
  - "src/test/api.js"
  - "src/test/api1.js##this is a test-suite"
  - "src/test/api2.js##this is a test-suite##this is a test-case"

preRun:
  # SECONDLY
  # You need to set the preRun commands.
  # These are shell commands executed inside the root level of your git repository before running the tests. 
  # preRun commands are executed using non-login shells by default, so you must explicitly source any dotfiles as part of the command.
  # The commands should be according to the package manager used in your project.
  command:
    - npm install 
    # - yarn install
    # - npm ci
    # - yarn build

postMerge:
  # THIRDLY
  # You need to set postMerge patterns only. env is a an optional parameter.
  # A postMerge test execution job is initiated whenever a PR is merged into a branch.
  env:  # Optional parameter
    REPONAME: nexe
    AWS_KEY: ${{ secrets.AWS_KEY }}
  pattern:
  # These would be the glob patterns for the test cases that you want to execute in the post-merge jobs.
  # - "./unit_test_folder_A/**/*.spec.ts"
  # - "./unit_test_folder_B/**/*.ts"
    - "./test/**/*.spec.ts"

preMerge:  # Optional parameter
  pattern:
   # regex pattern to discover tests to run in case of premerge
    - "./test/**/*.spec.ts"

postRun: # Optional parameter
  # set of commands to run after running the tests
  command:
    - node --version

# path to your custom configuration file required by framework
configFile: mocharc.yml  # Optional parameter

# provide the semantic version of nodejs required for your project
nodeVersion: 14.17.2  # Optional parameter

# configure whether to smartSelect test-cases. Default true
smartRun: false  # Optional parameter

# supported tiers: xsmall|small|medium|large
tier: small  # Optional parameter

# number of parallel instances of containers to spawned to distribute test execution
parallelism: 2  # Optional parameter

# version of tas file intended to be used in order to issue warnings for deprecation or breaking changes
version: 1.0
```
<br/>

## Next Steps
***
Once you have prepared the configuration file, place this file correctly inside your repo using the steps mentioned below:
1. In your master branch, **create** a new file as `.tas.yml` at the <b> root level of  your repository </b>. 
2. **Copy** the configuration from the TAS yml configuration page and **paste** them in the `.tas.yml` file you just created.
3. Commit and Push the changes to your repo. 

&ensp; OR 
1. Download the configuration file you have created on the TAS yml configuration page.
2. Rename it to `.tas.yml`. Place it at the root level of your repository.
3. Commit and Push the changes to your master branch. 

<p align="center">
<img loading="lazy" src={require('../assets/images/tas/getting-started/yml_placing.gif').default} alt="Import Repository" width="1340" height="617" className="doc_img"/>
</p>