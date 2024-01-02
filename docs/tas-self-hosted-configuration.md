---
id: tas-self-hosted-configuration
title: Configuration File
hide_title: true
sidebar_label: Configuration File
description: Configuration for TAS Self hosted.
keywords:
  - LambdaTest TAS
  - Test at Scale
  - TAS - Configuration File
  - TAS - Self Hosted
url: https://www.lambdatest.com/support/docs/
site_name: LambdaTest
slug: tas-self-hosted-configuration/
---

# Configuration File
***

In this section we will learn about all the configuration parameters that are required in order to configure the test-at-scale self hosted mode. This file will contain the parameters such as:
- **LambdaTest Secret Key** : required to link your self hosted environment with the TAS server.
- **Git Token** : required to clone your repositories to your self hosted environments while running the test execution jobs. 
- Some other **optional** parameters such as **Repository Secrets** etc. 
- Do not change the predefined **ContainerRegistry** settings inside this file

All the configuration parameters are explained in detail below.

## Parameters
***

### LambdaTest Secret Key
This specify secret key will be provided to you after loggin in and selecting the TAS Self-Hosted mode. It is required to link your self hosted environment with the TAS server. <br/>

**Example** 
```json
"Lambdatest": {
  "SecretKey": "SecretKeyForLambdaTest"
}
```

| Key | Type | Usage |
| --- | ---- | ----- |
| `Lambdatest.SecretKey` | `string` | Secret key provided by Lambdatest |
<br/>

### Git
This token is required to clone your repositories to your self hosted environments while running the test execution jobs. 

To create a new token you can use the following steps.
- [GitHub Personal Access Token](/docs/tas-how-to-guides-gh-token/)
- [GitLab Personal Access Token](/docs/tas-how-to-guides-gl-token/)
- [Bitbucket Personal Access Token](/docs/tas-how-to-guides-bb-token/)

| Key | Type | Usage |
| --- | ---- | ----- |
| `Git.Token` | `string` | Personal Access token |
| `Git.TokenType` | `string` | Token type is Bearer or Basic: `Bearer`, `Basic` |

> **NOTE:** Set TokenType to `Basic` in case of bitbucket.

<br/>

**Example** 
```json
"Git": {
  "Token": "GitToken",
  "TokenType": "bearer"
}
```
<br/>

### ContainerRegistry
This parameter would already contain the correct values inside your downloaded **.synapse.json**. You can continue with those values if you want to use the image provided by test-at-scale, containing the smart features. In case you want to use a custom image to run your tests, you need to first build that image and publish on dockerhub, then specify the [container image](/docs/tas-configuring-tas-yml#containerimage) in `.tas.yml` and container registry options given here in `.synapse.json`.

> **NOTE:** As of now, we are only supporting **dockerhub**. This is in **beta** currently.
<br/>

**Example** 
```json
"ContainerRegistry": {
  "ImagePull": "always",
  "Mode": "public",
  "Username": "registryUsername",
  "Password": "registryPassword"
}
```

| Key | Type | Usage |
| --- | ---- | ----- |
| `ContainerRegistry.ImagePull` | `string` | Defines when to pull images: `always`, `never` (keep never if image is present in local system) |
| `ContainerRegistry.Mode` | `string` | Image is private or public: `public`, `private` |
| `ContainerRegistry.Username` | `string` | Registry username if the image is private |
| `ContainerRegistry.Password` | `string` | Registry password if the image is private |
<br/>

### RepoSecrets
Your repositories might need some secrets while compiling or during test execution. You can specify those secrets here and these would be used in the **.tas.yml** configuration file later. A **.tas.yml** file contains all the necessary steps for dependency installation, env variable setup and test execution.

| Key | Type | Usage |
| --- | ---- | ----- |
| `RepoSecrets` | map of repository name containing secrets | Repository secrets being used by `.tas.yml` |
<br/>

**Example** 
```json
"RepoSecrets": {
  "repository1":{
    "AWS_REGION": "us-east-1",
  }
}
```
<br/>

### LogConfig
You can specify logging configuration options here to customize the logs deployed on your self hosted agent container for debugging purpose.<br/>

**Example** 
```json
"LogConfig": {
  "EnableConsole": true,
  "ConsoleJSONFormat": true,
  "Consolelevel": "error"
}
```

| Key                       | Type | Usage                                     |
| --------------------------| ------- | ----------------------------------------- |
| `LogConfig.EnableConsole` | `bool` | Enable/Disable console(stdout) logs on the self hosted agent container. |
| `LogConfig.ConsoleJSONFormat` | `bool` | Display self hosted agent container logs in JSON format. |
| `LogConfig.Consolelevel` | `string` | Set self hosted agent container logging levels to display specific logslevel of logs: `error`, `info`, `debug`. |

### Name 
You can name your synapse instance which will be shown in the TAS portal.

| Key | Type | Usage |
| --- | ---- | ----- |
| `Name` | string | name of your synapse instance |

**Example** 
```json
"Name": "my-synapse-1"
```
## Sample configuration file
***

Here is a sample configuration file for TAS setup on self hosted environment.

```json title=".synapse.json"
{
  "Name": "my-synapse-1",
  "LogConfig": {
    "EnableConsole": true,
    "ConsoleJSONFormat": true,
    "Consolelevel": "error"
  },
  "Lambdatest": {
    "SecretKey": "dummysecretkey"
  },
  "Git": {
    "Token": "dummytoken",
    "TokenType": "bearer"
  },
  "ContainerRegistry": {
    "ImagePull": "always",
    "Mode": "public"
  },
  "RepoSecrets": {
    "synapse":{
      "AWS_REGION": "us-east-1",
    }
  }
}
```

#### Setup TAS on Self Hosted Environments
- [Docker](/docs/tas-self-hosted-installation#docker)
- [AWS](/docs/tas-self-hosted-installation#aws)
- [GCP](/docs/tas-self-hosted-installation#gcp)
- [Azure](/docs/tas-self-hosted-installation#azure)