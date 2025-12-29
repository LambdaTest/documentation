---
id: hyperexecute-how-to-configure-tunnel
title: Tunnel Configuration in HyperExecute
hide_title: false
sidebar_label: How to Configure Tunnel with HyperExecute
description: Learn to set up a Tunnel with HyperExecute effortlessly with our straightforward guide, simplifying the configuration process for you!
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - How to Configure Tunnel with HyperExecute
url: https://www.testmu.ai/support/docs/hyperexecute-how-to-configure-tunnel
site_name: LambdaTest
slug: hyperexecute-how-to-configure-tunnel
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Integrations",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-how-to-configure-tunnel/"
        }]
      })
    }}
></script>
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

```yaml title="hyperexecute.yaml"
tunnel: true
```
> Recommended if you want to quickly enable tunnel access for locally hosted apps.

### 2. Using Existing `tunnel`
If you already have a running tunnel, you can reuse it by specifying its name to access your applications which are locally hosted or behind a firewall.

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

```bash
response=$(curl -o /dev/null -s -w "%{http_code}" https://www.lambdatest.com)

## You need to enter your website URL in place of LambdaTest URL
```

Now you need to check the response of the website by passing the command:

```bash
echo $response
```

The ideal expected response in **200**. 

>If you have more questions, feel free to <span className="doc__lt" onClick={() => window.openLTChatWidget()}>Chat</span> with us.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
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