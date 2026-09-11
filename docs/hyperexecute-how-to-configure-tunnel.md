---
id: hyperexecute-how-to-configure-tunnel
title: Tunnel Configuration in HyperExecute
hide_title: false
sidebar_label: How to Configure Tunnel with HyperExecute
description: Learn to set up a Tunnel with HyperExecute effortlessly with our straightforward guide, simplifying the configuration process for you!
keywords:
  - TestMu AI HyperExecute
  - TestMu AI HyperExecute help
  - TestMu AI HyperExecute documentation
  - How to Configure Tunnel with HyperExecute
url: https://www.testmuai.com/support/docs/hyperexecute-how-to-configure-tunnel/
site_name: TestMu AI
slug: hyperexecute-how-to-configure-tunnel/
canonical: https://www.testmuai.com/support/docs/hyperexecute-how-to-configure-tunnel/
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
          "name": "Integrations",
          "item": `${BRAND_URL}/support/docs/hyperexecute-how-to-configure-tunnel/`
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
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-how-to-configure-tunnel/"
    },
    "headline": "Tunnel Configuration in HyperExecute",
    "description": "Learn to set up a Tunnel with HyperExecute effortlessly with our straightforward guide, simplifying the configuration process for you!",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-how-to-configure-tunnel/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "HyperExecute",
    "keywords": [
      "TestMu AI HyperExecute",
      "TestMu AI HyperExecute help",
      "TestMu AI HyperExecute documentation"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "HyperExecute YAML file -> HyperExecute supports multiple ways of setting up tunnels directly from your YAML configuration. You can use any version of YAML to pass the Tunnel parameters.; HyperExecute CLI to trigger your tests..",
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
        "name": "1. Simple tunnel Connection",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "> Recommended if you want to quickly enable tunnel access for locally hosted apps.\n\n### 2. Using Existing `tunnel`\nIf you already have a running tunnel, you can reuse it by specifying its name to access your applications which are locally hosted or behind a firewall.\n\n```yaml title=\"hyperexecute.yaml\"\ntunnelNames: [\"lambdatest_tunnel\"]"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "tunnelOpts",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n<img loading=\"lazy\" src={require('../assets/images/hyperexecute/knowledge-base/secrets/12.png').default} alt=\"Image\"  style={{width: '500px',}} className=\"doc_img\"/>\n\n## Clone a Repository via Tunnel\n\nCloning a repository using a tunnel can help secure the transfer of data between the repository and your local machine.\n\nPrivate repositories are hosted on a private network or behind a firewall, and you need to access them from outside the network. By using a tunnel, you can create a secure connection to the private network and clone the repository as if you were within the network.\n\nYou can now clone all your **public** and **private** repositories from your Git provider via **tunnel**.\n\nAfter specifying the details of your repository, you need to set the `useInCodeSetUp` flag to `true` as shown below.\n\n```bash\nsourcePayload:\n  platform: git\n  link: https://--------\n  ref: <your_branch_name>\n  accessToken: <your_personal_access_token>\n  commit: <optional>\n\n# highlight-next-line\ntunnelOpts:\n# highlight-next-line\n  useInCodeSetUp: true\n## this flag is mandatory to pass to enable cloning via tunnel"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Troubleshooting",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "response=$(curl -o /dev/null -s -w \"%{http_code}\" https://www.testmuai.com)\n\n## You need to enter your website URL in place of LambdaTest URL"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Now you need to check the response of the website by passing the command",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "echo $response"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>
You can configure a secure tunnel in HyperExecute to test applications that are:

- Hosted locally on your system, or
- Behind a private network/firewall.

## Prerequisites
- HyperExecute YAML file -> HyperExecute supports multiple ways of setting up tunnels directly from your YAML configuration. You can use any version of [YAML](/support/docs/hyperexecute-yaml-parameters/) to pass the Tunnel parameters. 
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) to trigger your tests.

## Ways to Use Tunnel in HyperExecute
There are 3 main ways to use a tunnel in HyperExecute:

### 1. Simple `tunnel` Connection
Enable tunnel directly by setting the `tunnel` flag to `true` in your HyperExecute YAML file. The HyperExecute CLI will launch a tunnel as sub process for accessing your applications which are locally hosted or behind a firewall. 

<VerifiedTag value="Verified" />

```yaml title="hyperexecute.yaml"
tunnel: true
```
> Recommended if you want to quickly enable tunnel access for locally hosted apps.

### 2. Using Existing `tunnel`
If you already have a running tunnel, you can reuse it by specifying its name to access your applications which are locally hosted or behind a firewall.

<VerifiedTag value="Verified" />

```yaml title="hyperexecute.yaml"
tunnelNames: ["lambdatest_tunnel"]
```

> Useful when running multiple jobs and you don’t want to spawn new tunnels each time.

### 3. Advanced `tunnel` Configurations
These are the parameters you can use to configure your [tunnel](/support/docs/deep-dive-into-hyperexecute-yaml/#tunnel) settings when running it.

| Options | Type | Description |
|---------|------|-------------|
|`args`| List of strings | The arguments to pass to your tunnel. For a list of arguments checkout our [tunnel flags](/support/docs/lambda-tunnel-modifiers/) |
|`preOnly`| Boolean | Should the tunnel be enabled for only the pre step. Default false. |
|`postOnly`| Boolean | Should the tunnel be enabled for only the post step. Default false. |
|`global`| Boolean | Should the tunnel be enabled for all the steps? Default true. |
|`systemProxy`| Boolean | Should the tunnel be OS system wide? Default false. |
|`checkTunnelOnFailure`| Boolean | Check tunnel on failure adds a check on our system to check the tunnel connection if a test fails and the tunnel is set to true. This option will retry the test 2 times if tunnel connection is flaky. |

> HyperExecute now supports tunnel capabilities for [Maestro](/support/docs/hyperexecute-maestro-testing/) tests running on both virtual devices and real devices using the Raw Framework configuration.

<VerifiedTag value="Verified" />

```yaml title="hyperexecute.yaml"
tunnel: true

tunnelOpts:
  global: true
```

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/secrets/12.png').default} alt="Image"  style={{width: '500px',}} className="doc_img"/>

## Clone a Repository via Tunnel

Cloning a repository using a tunnel can help secure the transfer of data between the repository and your local machine.

Private repositories are hosted on a private network or behind a firewall, and you need to access them from outside the network. By using a tunnel, you can create a secure connection to the private network and clone the repository as if you were within the network.

You can now clone all your **public** and **private** repositories from your Git provider via **tunnel**.

After specifying the details of your repository, you need to set the `useInCodeSetUp` flag to `true` as shown below.

<VerifiedTag value="Verified" />

```bash
sourcePayload:
  platform: git
  link: https://--------
  ref: <your_branch_name>
  accessToken: <your_personal_access_token>
  commit: <optional>

# highlight-next-line
tunnelOpts:
# highlight-next-line
  useInCodeSetUp: true
## this flag is mandatory to pass to enable cloning via tunnel
```

## Troubleshooting

If you are unable to access a particular website via the Actions environment even after setting the `tunnel: true` in the YAML file then please execute the following curl command:

<VerifiedTag value="Verified" />

```bash
response=$(curl -o /dev/null -s -w "%{http_code}" https://www.testmuai.com)

## You need to enter your website URL in place of LambdaTest URL
```

Now you need to check the response of the website by passing the command:

<VerifiedTag value="Verified" />

```bash
echo $response
```

The ideal expected response in **200**. 

>If you have more questions, feel free to <span className="doc__lt" onClick={() => window.openLTChatWidget()}>Chat</span> with us.

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
       HyperExecute General FAQs
      </span>
    </li>
  </ul>
</nav>
