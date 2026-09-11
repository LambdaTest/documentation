---
id: hyperexecute-matrix-multiplexing-strategy
title: Matrix Multiplexing Strategy
hide_title: false
sidebar_label: Matrix Multiplexing Strategy
description: Discover the power of HyperExecute's Matrix Multiplexing Strategy for efficient cross-browser testing. Optimize test combinations for faster results..
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
url: https://www.testmuai.com/support/docs/hyperexecute-matrix-multiplexing-strategy/
site_name: TestMu AI
slug: hyperexecute-matrix-multiplexing-strategy/
canonical: https://www.testmuai.com/support/docs/hyperexecute-matrix-multiplexing-strategy/
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
          "name": "HyperExecute Concepts",
          "item": `${BRAND_URL}/support/docs/hyperexecute-matrix-multiplexing-strategy/`
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
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-matrix-multiplexing-strategy/"
    },
    "headline": "Matrix Multiplexing Strategy",
    "description": "Discover the power of HyperExecute's Matrix Multiplexing Strategy for efficient cross-browser testing. Optimize test combinations for faster results..",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-matrix-multiplexing-strategy/",
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
        "name": "testSuites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\nIn the YAML file shown above, **files**  is a user-generated key. **Files**  and its associated value(s) are opaque to HyperExecute. You can also name it as **Files1**, **FileNames**, etc., as long as the Key is unique in that YAML file.\n\n## When to opt for Matrix Strategy\n\nMatrix multiplexing strategy is ideally used when you have to run specific test scenarios across different input (or value) combinations. For example, this approach would be useful if you have to run \"scenario1\"  on \"N\" version(s) of Chrome and Firefox browsers (that are installed on the Windows 10 platform).\n\nHere, \u2018N\u2019 could be browser version  number(s) that are common between the two web browsers e.g. 68.0, 69.0, 89.0, etc. You can also leverage matrix multiplexing strategy to run scenarios based on different tags, files, features, and more. You can specify required key:value pairs in the HyperExecute YAML file or you can specify the same in the source code.\n\nIn matrix multiplexing strategy, *`key`:`value`* pairs mentioned in the source code override the same `key`:`value`  pairs mentioned in the HyperExecute YAML file.\n\nLet\u2019s modify the above YAML file to run the scenarios on \"latest\" version of the Firefox browser:\n\n``` yaml\n#runson defines the OS of your test execution node.\nrunson: ${matrix.os}\n\nmatrix:\n  os: [\"win\", \"linux\"]\n  version: [\"latest\", \"beta\", \"dev\"]\n  browser: [\"Chrome\", \"Firefox\"]\n  files: [\"@File1\",\"@File2\"]\n"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Exclusion in Matrix Strategy",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "#runson defines the OS of your test execution node.\nrunson: ${matrix.os}\n\nmatrix:\n  # Browser version(s) separated by Comma\n  version: [\"latest\"]\n  # OS name sepataed by Coma\n  os: [\"win\", \"mac\", \"linux\"]\n  # Browser name separated by Comma\n  browser: [\"Chrome\", \"Firefox\", \"Safari\"]\n  # Test Files separated by Comma\n  files: [\"@File1\",\"@File2\",\"@File3\",\"@File4\"]\n\nexclusionMatrix: \n  - os: [win]\n    browser: [\"Safari\"]\n    files: [\"@File2\",\"@File3\"]"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>
HyperExecute's Matrix Multiplexing Strategy allows you to execute test cases across a variety of combinations efficiently. This strategy is especially useful when dealing with browser and OS combinations or other parameters like files, tags, and more.

By utilizing the Matrix Multiplexing Strategy, you can parallelize your testing process and achieve faster results. HyperExecute generates permutations and combinations using key-value pairs, launching virtual machines for each combination and running tests in parallel.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/matrix/hyp_matrix.png').default} alt="Image"  className="doc_img" width="1232" height="534" style={{ width:'700px', height:'auto'}}/>

## Configuration and Execution

### Setting Up Matrix Multiplexing

To initiate Matrix Multiplexing, define `key-value` pairs in the HyperExecute YAML file. Each pair represents a combination of parameters under consideration, such as browser versions, OS, files, folders, tags, features, scenarios, input values, etc.

### Generating and Running Virtual Machines

HyperExecute will generate and manage virtual machines for each key-value combination, injecting them as environment variables or command-line variables. The specified commands will then run for each combination.

Consider a scenario where the matrix calculation results in 10 different possible combinations. In such a case, 10 different Test Execution nodes, known as `Tasks` will be spawned in parallel and all the tests will be run in parallel on the respective node.

You can use a key as [browser], [files]  or any other unique key name. 

``` yaml
matrix:
  files: ["Test1","Test2","Test3"]
testSuites:
  - mvn test -Dtest=$files
```

In the YAML file shown above, **files**  is a user-generated key. **Files**  and its associated value(s) are opaque to HyperExecute. You can also name it as **Files1**, **FileNames**, etc., as long as the Key is unique in that YAML file.

## When to opt for Matrix Strategy

Matrix multiplexing strategy is ideally used when you have to run specific test scenarios across different input (or value) combinations. For example, this approach would be useful if you have to run "scenario1"  on "N" version(s) of Chrome and Firefox browsers (that are installed on the Windows 10 platform).

Here, ‘N’ could be browser version  number(s) that are common between the two web browsers e.g. 68.0, 69.0, 89.0, etc. You can also leverage matrix multiplexing strategy to run scenarios based on different tags, files, features, and more. You can specify required key:value pairs in the HyperExecute YAML file or you can specify the same in the source code.

In matrix multiplexing strategy, *`key`:`value`* pairs mentioned in the source code override the same `key`:`value`  pairs mentioned in the HyperExecute YAML file.

Let’s modify the above YAML file to run the scenarios on "latest" version of the Firefox browser:

``` yaml
#runson defines the OS of your test execution node.
runson: ${matrix.os}

matrix:
  os: ["win", "linux"]
  version: ["latest", "beta", "dev"]
  browser: ["Chrome", "Firefox"]
  files: ["@File1","@File2"]

```

A combination of test scenarios is generated using the following formula:

> **Total Test Scenarios** = *[Entries in os  List] x [Entries in browser version  List] x [Entries in browser  List] x [Entries in Files List]*

Let’s take a case where the test scenarios are implemented in Java. Files File1.java and File2. java contains one test method each. In such a scenario, the total number of test combinations would be  (1 x 1 x 2 x 2)  →  4. Here is the list of the  total test scenarios that would be run on HyperExecute (based on the YAML file shown earlier):

| Test Number | FileName | OS | Browser | Browser Version |
|---|---|---|---|---|
| 1 | @File1 (Test Method_1) | Win (Windows 11) | Chrome | latest |
| 2 | @File1 (Test Method_1) | Win (Windows 11) | Firefox | latest |
| 3 | @File2 (Test Method_2) | Win (Windows 11) | Chrome | latest |
| 4 | @File2 (Test Method_2) | Win (Windows 11) | Firefox | latest |

## Exclusion in Matrix Strategy
Assuming that you created a matrix but there is one specific combination that you don't want the system to consider. This can happen for instance if you have a combination of Safari and Windows which won't be a valid combination, in such cases you can exclude such a combination using the `exclusionMatrix` parameter as shown below.

```yaml
#runson defines the OS of your test execution node.
runson: ${matrix.os}

matrix:
  # Browser version(s) separated by Comma
  version: ["latest"]
  # OS name sepataed by Coma
  os: ["win", "mac", "linux"]
  # Browser name separated by Comma
  browser: ["Chrome", "Firefox", "Safari"]
  # Test Files separated by Comma
  files: ["@File1","@File2","@File3","@File4"]

exclusionMatrix: 
  - os: [win]
    browser: ["Safari"]
    files: ["@File2","@File3"]
```

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        Matrix Multiplexing Strategy
      </span>
    </li>
  </ul>
</nav>
