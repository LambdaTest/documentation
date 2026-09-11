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
url: https://www.testmuai.com/support/docs/hyperexecute-pre-steps-error/
site_name: TestMu AI
slug: hyperexecute-pre-steps-error/
canonical: https://www.testmuai.com/support/docs/hyperexecute-pre-steps-error/
---


import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';

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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-pre-steps-error/"
    },
    "headline": "Pre Steps Errors",
    "description": "This document will help you debug your failed job if you are facing any errors in the pre-command stage.",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-pre-steps-error/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "HyperExecute",
    "keywords": [
      "TestMu AI Hyperexecute",
      "TestMu AI Hyperexecute help",
      "TestMu AI Hyperexecute documentation"
    ],
    "proficiencyLevel": "Beginner",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Lambda Error",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "pre:\n  - npx install playwright"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": ".Net Build Issue in C#",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "error : MSB4803: The task \"ResolveComReference\" is not supported on the .NET Core version of MSBuild"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Error in Python",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "There was a problem confirming the ssl certificate:\nHTTPSConnectionPool(host='http://pypi.org ', port=443):\nMax retries exceeded with url: /simple/selenium/\n(Caused by SSLError(SSLCertVerificationError(1, '[SSL: CERTIFICATE_VERIFY_FAILED]\ncertificate verify failed: self signed certificate in certificate chain\n(_ssl.c:1131)'))) - skipping"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Error in Python",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "pip install -r requirements.txt --cache-dir\npip_cache --trusted-host http://pypi.org  --trusted-host http://pypi.python.org  --trusted-host files.pythonhosted.org\npip setuptools "
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Error in Maven",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "-Dmaven.wagon.http.ssl.insecure=true -Dmaven.wagon.http.ssl.allowall=true -Dmaven.wagon.http.ssl.ignore.validity.dates=true"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Registry Error",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "pre:\n  - npm config set registry <artifactory_URL>"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Incompatible Node Version",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "SyntaxError: Unexpected token '||='"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Incompatible Node Version",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "runtime:\n  language: node\n  version: \"15\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Java version Conflict",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "[ERROR] Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.7.0:compile (default-compile) on project My-Project: Fatal error compiling: invalid target release: 1.10 -> [Help 1]\norg.apache.maven.lifecycle.LifecycleExecutionException: Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.7.0:compile (default-compile) on project My-Project: Fatal error compiling"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Java version Conflict",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "runtime:\n  language: java\n  version: \"11\""
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

# How to Debug your Pre Steps Errors

This document will help you debug your failed job if you are facing any errors in the pre-command stage.

## Lambda Error

While executing a playwright project in HyperExecute, you may encounter a Lambda Error.

To resolve this issue, you need to pass the below mentioned command in the pre step in your YAML file

<VerifiedTag value="Verified" />

```bash
pre:
  - npx install playwright
```

## .Net Build Issue in C#

If you encounter a similar error while running the command `dotnet build` in pre steps, as mentioned below, it means that you are not using a **core dotnet** version but instead a **framework** version.

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

```bash
There was a problem confirming the ssl certificate:
HTTPSConnectionPool(host='http://pypi.org ', port=443):
Max retries exceeded with url: /simple/selenium/
(Caused by SSLError(SSLCertVerificationError(1, '[SSL: CERTIFICATE_VERIFY_FAILED]
certificate verify failed: self signed certificate in certificate chain
(_ssl.c:1131)'))) - skipping
```

To resolve the above issue, you are required to pass the following command

<VerifiedTag value="Verified" />

```bash
pip install -r requirements.txt --cache-dir
pip_cache --trusted-host http://pypi.org  --trusted-host http://pypi.python.org  --trusted-host files.pythonhosted.org
pip setuptools 
```

#### Error in Maven

You can encounter a similar error while running Maven Project as well, Now to resolve this issue for **maven**, pass the following command

<VerifiedTag value="Verified" />

```bash
-Dmaven.wagon.http.ssl.insecure=true -Dmaven.wagon.http.ssl.allowall=true -Dmaven.wagon.http.ssl.ignore.validity.dates=true
```

## Registry Error

If you incorporate any npm registry related error in the **Pre** stage, then pass the following command in your YAML file in the pre command before npm install:

<VerifiedTag value="Verified" />

```bash
pre:
  - npm config set registry <artifactory_URL>
```

## Incompatible Node Version

If you encounter an error as mentioned below, it implies that you are using node version **below 15**, so you need to upgrade to **>=15.0** using runtime command.

<VerifiedTag value="Verified" />

```bash
SyntaxError: Unexpected token '||='
```

To resolve this, simply pass the below mentioned command in your YAML file

<VerifiedTag value="Verified" />

```bash
runtime:
  language: node
  version: "15"
```

## Java version Conflict

This error incorporates that the version of Java that you are using in your local machine or in pom.xml file is not matching with the one used in the HyperExecute.

<VerifiedTag value="Verified" />

```bash
[ERROR] Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.7.0:compile (default-compile) on project My-Project: Fatal error compiling: invalid target release: 1.10 -> [Help 1]
org.apache.maven.lifecycle.LifecycleExecutionException: Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.7.0:compile (default-compile) on project My-Project: Fatal error compiling
```

To rectify this, you need to simply pass the **runtime** flag with the correct java version in your YAML file.

<VerifiedTag value="Verified" />

```bash
runtime:
  language: java
  version: "11"
```
