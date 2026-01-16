---
id: hyperexecute-pre-steps-error
title: Pre Steps Errors
hide_title: true
sidebar_label: Pre Steps Errors
description: This document will help you debug your failed job if you are facing any errors in the pre-command stage.
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - How to Debug a Failed Job
url: https://www.testmu.ai/support/docs/hyperexecute-pre-steps-error/
site_name: LambdaTest
slug: hyperexecute-pre-steps-error
canonical: https://www.testmu.ai/support/docs/hyperexecute-pre-steps-error/
---


import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Debug Failed Job",
          "item": `${BRAND_URL}/support/docs/hyperexecute-pre-steps-error/`
        }]
      })
    }}
></script>

# How to Debug your Pre Steps Errors

This document will help you debug your failed job if you are facing any errors in the pre-command stage.

## Lambda Error

While executing a playwright project in HyperExecute, you may encounter a Lambda Error.

To resolve this issue, you need to pass the below mentioned command in the pre step in your YAML file

```bash
pre:
  - npx install playwright
```

## .Net Build Issue in C#

If you encounter a similar error while running the command `dotnet build` in pre steps, as mentioned below, it means that you are not using a **core dotnet** version but instead a **framework** version.

```bash
error : MSB4803: The task "ResolveComReference" is not supported on the .NET Core version of MSBuild
```

We need to build it by invoking **MSBuild.exe** from the Visual Studio directory inside our VMs. Please target MSBuild.exe of Visual Studio 19. Replace dotnet build with the below command

`C:\PROGRA~2\Micros~1\2019\Community\MSBuild\Current\Bin\MSBuild.exe /p:Configuration=Release /p:TargetFramework=net481 /t:restore`

The target Framework can be replaced with dotnet version targeted in the user’s repository. **``/p:TargetFramework=net70302``**

## SSL Certificate Error

This error is generated while installing the dependencies in your project suite.

#### Error in Python

You can encounter a similar error while installing dependencies 

```bash
There was a problem confirming the ssl certificate:
HTTPSConnectionPool(host='http://pypi.org ', port=443):
Max retries exceeded with url: /simple/selenium/
(Caused by SSLError(SSLCertVerificationError(1, '[SSL: CERTIFICATE_VERIFY_FAILED]
certificate verify failed: self signed certificate in certificate chain
(_ssl.c:1131)'))) - skipping
```

To resolve the above issue, you are required to pass the following command

```bash
pip install -r requirements.txt --cache-dir
pip_cache --trusted-host http://pypi.org  --trusted-host http://pypi.python.org  --trusted-host files.pythonhosted.org
pip setuptools 
```

#### Error in Maven

You can encounter a similar error while running Maven Project as well, Now to resolve this issue for **maven**, pass the following command

```bash
-Dmaven.wagon.http.ssl.insecure=true -Dmaven.wagon.http.ssl.allowall=true -Dmaven.wagon.http.ssl.ignore.validity.dates=true
```

## Registry Error

If you incorporate any npm registry related error in the **Pre** stage, then pass the following command in your YAML file in the pre command before npm install:

```bash
pre:
  - npm config set registry <artifactory_URL>
```

## Incompatible Node Version

If you encounter an error as mentioned below, it implies that you are using node version **below 15**, so you need to upgrade to **>=15.0** using runtime command.

```bash
SyntaxError: Unexpected token '||='
```

To resolve this, simply pass the below mentioned command in your YAML file

```bash
runtime:
  language: node
  version: "15"
```

## Java version Conflict

This error incorporates that the version of Java that you are using in your local machine or in pom.xml file is not matching with the one used in the HyperExecute.

```bash
[ERROR] Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.7.0:compile (default-compile) on project My-Project: Fatal error compiling: invalid target release: 1.10 -> [Help 1]
org.apache.maven.lifecycle.LifecycleExecutionException: Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.7.0:compile (default-compile) on project My-Project: Fatal error compiling
```

To rectify this, you need to simply pass the **runtime** flag with the correct java version in your YAML file.

```bash
runtime:
  language: java
  version: "11"
```