---
id: hyperexecute-integration-with-ci-cd-tools
title: Integration With CI/CD Tools
hide_title: true
sidebar_label: Overview 
description: HyperExecute offers integrations with numerous CI/CD tools to help you fast-track your robust delivery pipeline for pacing up your go-to-market launch. 
keywords:
    - hyperexecute integrations
    - hyperexecute integrations with ci/cd tools
    - ci/cd tools
    - continuous integration
    - continuous delivery
    - continuous integration tools
url: https://www.testmuai.com/support/docs/hyperexecute-integration-with-ci-cd-tools/
site_name: TestMu AI
slug: hyperexecute-integration-with-ci-cd-tools/
canonical: https://www.testmuai.com/support/docs/hyperexecute-integration-with-ci-cd-tools/
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
          "name": "Integration With CI/CD Tools",
          "item": `${BRAND_URL}/support/docs/hyperexecute-integration-with-ci-cd-tools/`
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
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-integration-with-ci-cd-tools/"
    },
    "headline": "Integration With CI/CD Tools",
    "description": "HyperExecute offers integrations with numerous CI/CD tools to help you fast-track your robust delivery pipeline for pacing up your go-to-market launch.",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-integration-with-ci-cd-tools/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "HyperExecute",
    "keywords": [
      "hyperexecute integrations",
      "hyperexecute integrations with ci/cd tools",
      "ci/cd tools"
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
        "name": "To integrate any CI pipeline with HyperExecute, follow these steps",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "chmod u+x hyperexecute"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "To execute the HyperExecute CLI binary, run the following command",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "hyperexecute.exe \u2013user LT_USERNAME \u2013key LT_ACCESS_KEY \u2013config path of the Hyperexecute YAML file "
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 3",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "./hyperexecute \u2013user LT_USERNAME \u2013key LT_ACCESS_KEY \u2013config path of the Hyperexecute YAML file "
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "The cicd-pipeline-skill package includes",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "cicd-pipeline-skill/\n\u251c\u2500\u2500 SKILL.md\n\u2514\u2500\u2500 reference/\n    \u251c\u2500\u2500 playbook.md\n    \u2514\u2500\u2500 advanced-patterns.md"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install a CI/CD Pipeline Agent Skill using the command below",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "codeRepository": "https://github.com/LambdaTest/agent-skills",
        "text": "# Clone the repo and copy the skill you need\ngit clone https://github.com/LambdaTest/agent-skills.git\ncp -r agent-skills/cicd-pipeline-skill .claude/skills/\n\n# Or for Cursor / Copilot\ncp -r agent-skills/cicd-pipeline-skill .cursor/skills/"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

# HyperExecute Integration With CI/CD Tools
HyperExecute offers integrations with numerous CI/CD tools to assist you to:
- Expend less manual effort
- Deliver faster
- Reduce risk

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/ci-cd.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

To integrate any CI pipeline with HyperExecute, follow these steps:

1. **Download the HyperExecute CLI Binary:**

To integrate HyperExecute with your preferred CI pipeline, you need to make use of the HyperExecute CLI. HyperExecute CLI is a command line client used to interact and run tests on HyperExecute and provide a host of other useful features that accelerate test execution.

For triggering tests using HyperExecute CLI, you have to download the HyperExecute CLI binary corresponding to the platform (or OS) from where the tests are triggered: Below are the HyperExecute CLI download links for different operating systems:

| OS | HyperExecute CLI download link |
| ---------| --------------------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

- If the Pipeline VM Image agent has the OS flavor of Linux or Mac, then the HyperExecute CLI binary would need additional permission. Run the command below to get the required permission: 

```
chmod u+x hyperexecute
```

2. **Execute the HyperExecute CLI Binary**

To execute the HyperExecute CLI binary, run the following command:

- **For Windows**
```
hyperexecute.exe –user LT_USERNAME –key LT_ACCESS_KEY –config path of the Hyperexecute YAML file 
```

- **For Mac/Linux**

```
./hyperexecute –user LT_USERNAME –key LT_ACCESS_KEY –config path of the Hyperexecute YAML file 
```

Below are detailed instructions for CI/CD tool integrations to help you get the most out of HyperExecute.

<div className="download_btn mb-10">
<a href="https://www.testmuai.com/support/docs/aws-codepipeline-with-hyperexecute/">AWS CodePipeline Integration</a>
</div>

<div className="download_btn mb-10">
<a href="https://www.testmuai.com/support/docs/azure-with-hyperexecute/">Azure DevOps Pipeline Integration</a>
</div>

<div className="download_btn mb-10">
<a href="https://www.testmuai.com/support/docs/github-actions-with-hyperexecute/">GitHub Actions Pipeline Integration</a>
</div>

<div className="download_btn mb-10">
<a href="https://www.testmuai.com/support/docs/gitlab-integration-with-hyperexecute/">GitLab Pipeline Integration</a>
</div>

<div className="download_btn mb-10">
<a href="https://www.testmuai.com/support/docs/circle-ci-with-hyperexecute/">CircleCI Pipeline Integration</a>
</div>

<div className="download_btn mb-10">
<a href="https://www.testmuai.com/support/docs/jenkins-with-hyperexecute/">Jenkins Integration</a>
</div>

<div className="download_btn mb-10">
<a href="https://www.testmuai.com/support/docs/bitbucket-pipeline-with-hyperexecute/">Bitbucket Pipeline Integration</a>
</div>

<div className="download_btn mb-10">
<a href="https://www.testmuai.com/support/docs/travis-ci-with-hyperexecute/">Travis CI Integration</a>
</div>

<div className="download_btn mb-10">
<a href="https://www.testmuai.com/support/docs/teamcity-with-hyperexecute/">TeamCity Integration</a>
</div>

<div className="download_btn mb-10">
<a href="https://www.testmuai.com/support/docs/gocd-integration-with-hyperexecute/">GoCD Integration</a>
</div>

<div className="download_btn mb-10">
<a href="https://www.testmuai.com/support/docs/bamboo-integration-with-hyperexecute/">Bamboo CI Integration</a>
</div>

<div className="download_btn mb-10">
<a href="https://www.testmuai.com/support/docs/semaphore-integration-with-hyperexecute/">Semaphore Integration</a>
</div>

***

Want to know more about HyperExecute? Here’s a [link](/support/docs/getting-started-with-hyperexecute/) to our Documentation.

>If your favourite CI/CD tool is not in the list mentioned above, then just give us a <span className="doc__lt" onClick={() => window.openLTChatWidget()}>shout</span> and we will have it ready shortly for you.



## Using the CI/CD Pipeline Agent Skill with TestMu AI
***

The [cicd-pipeline-skill](https://github.com/LambdaTest/agent-skills/tree/main/cicd-pipeline-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The cicd-pipeline-skill package includes:

```
cicd-pipeline-skill/
├── SKILL.md
└── reference/
    ├── playbook.md
    └── advanced-patterns.md
```

It provides structured guidance for:

* Project structure and setup
* Dependency configuration
* Local execution
* TestMu AI cloud execution
* Debugging patterns
* CI/CD integration


### Installing CI/CD Pipeline Agent Skill
***

Install a CI/CD Pipeline Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/cicd-pipeline-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/cicd-pipeline-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only cicd-pipeline-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).

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
       Integrations With CI/CD Tools
      </span>
    </li>
  </ul>
</nav>
