---
id: lambda-tunnel-modifiers
title: TestMu AI Tunnel Modifiers
hide_title: true
sidebar_label: TestMu AI Tunnel Modifiers
description: This document will help you understand all the modifiers/arguments used with TestMu AI Tunnel to help you test your locally hosted web pages.
keywords:
  - testmu ai tunnel modifiers
  - testmu ai help
  - testmu ai local tunnel
  - testmu ai tunnel tutorials
  - testmu ai tunnel guide
  - testmu ai tunnel guide
url: https://www.testmu.ai/support/docs/lambda-tunnel-modifiers/
site_name: LambdaTest
slug: lambda-tunnel-modifiers/
canonical: https://www.testmu.ai/support/docs/lambda-tunnel-modifiers/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "LambdaTest Tunnel Modifiers",
          "item": `${BRAND_URL}/support/docs/lambda-tunnel-modifiers/`
        }]
      })
    }}
></script>

# <BrandName /> Tunnel Modifiers

---

<BrandName /> Tunnel provides several command-line arguments that you can leverage to define <BrandName /> Tunnel parameters. You can pass command-line arguments to either a **‘config’** file or an environment variable. It is recommended to use the latest version of <BrandName /> tunnel binary to ensure compatibility with variables.

This document will help you understand all the modifiers/arguments used with <BrandName /> Tunnel to help you test your locally hosted web pages.

| FLAG (SHORT) | FLAG (LONG) | DESCRIPTION | TYPE |
|--------------|-------------|-------------|------|
|| --allowHosts | Comma separated list of hosts to route via tunnel. Everything else will be routed via Internet. <br /> Learn how to use the [wildcard expressions](/support/docs/tunnel-allowHost-wildcard-support/) in the `--allowHosts` flag  | String  |
| | --bypassHosts | Comma separated list of hosts to bypass from tunnel. These will be routed via internet.                                                             | String  |
|              | --callbackURL   | Callback URL for tunnel status.                                                                                                                     | String  |
| -c           | --config        | Path of the config file to use                                                                                                                      | String  |
|            | --clientCert      |  mTLS Client Certificate filepath.  Only `pfx` file type is supported| String  |
|            | --clientKey       |  mTLS Client Key filepath.  | String  |
|            | --mTLSHosts       | Comma separated list of mTLS hosts.  | String  |
| -d           | --dir           | Specify the Local Directory that will be server by a file server on port 33000                                                                      | String  |
|              | --dns           | Comma Separated List of DNS Servers                                                                                                                 | String  |
|              | --egress-only   | Uses proxy settings only for outbound requests.                                                                                                     | N/A     |
| -e           | --env           | The environment on which the <BrandName /> Tunnel will run.                                                                                            | String  |
| -h           | --help          | Help for the <BrandName /> Tunnel                                                                                                                      | N/A     |
|              | --infoAPIPort   | Exposes [Tunnel Info API](/support/docs/advanced-tunnel-features/#tunnelinfoapis) At The Specified Port                   | Integer |
|              | --ingress-only  | Routes Only Incoming Traffic Via The Proxy Specified                                                                                                | N/A     |
| -k           | --key           | <BrandName /> Access Key.                                                                                                                              | String  |
| -l           | --load-balanced | Activates [Load Balancing](/support/docs/load-balancing-in-lambda-tunnel/) for <BrandName /> Tunnel                          | N/A     |
|              | --logFile       | Location of the <BrandName /> Tunnel Log File                                                                                                          | String  |
| -m           | --mitm          | Enable the [MITM(Man-in-the-middle)](/support/docs/advanced-tunnel-features/#mitmlocaltesting) mode for <BrandName /> Tunnel | N/A     |
|              | --mode          | Specifies in which mode tunnel should run [ssh,tcp,ws]. (default "ssh")                                                                             | String  |
|              | --ntlm          | To use Microsoft NTLM (Windows NT LAN Manager) authentication for communication or transport purposes.                                              | Boolean |
|              | --pidfile       | Path Of Pidfile, Where Process ID will Be Written                                                                                                   | String  |
| -p           | --port          | Port for <BrandName /> Tunnel to activate.                                                                                                             | Integer |
|              | --proxy-host    | Specifies the Tunnel Proxy Port hostname.                                                                                                           | String  |
|              | --proxy-pass    | Specifies the Tunnel Proxy Port password.                                                                                                           | String  |
|              | --proxy-port    | Specifies the port number where Tunnel proxy will activate.                                                                                         | Integer |
|              | --proxy-user    | Specifies the Tunnel Proxy Port username                                                                                                            | String  |
|            | --pacfile        |  Path of a PAC file.  | String  |
| -s           | --shared-tunnel | Sharing Tunnel Among Team Members                                                                                                                   | N/A     |
|              | --sshConnType   | Specify type of ssh connection (over_22, over_443, over_ws).To use –sshConnType, specify ––mode ssh flag first.                                     | String  |
| N/A | --maxSSHConnections | Increase the SSH Connection from Tunnel Client to Tunnel Server. Maximum allow is 30 | N/A |
| -n           | --tunnelName    | Specifies the custom <BrandName /> Tunnel name to be used.                                                                                             | String  |
| -u           | --user          | <BrandName /> Username.                                                                                                                                | String  |
|              | --use-private-ip         | Sets remote address to an internal IP of client machine.                                                                                      | Boolean  |
| -v           | --verbose       | Should Every Proxy Request Be Logged To Stdout                                                                                                      | N/A     |
|              | --version       | Displays the installed version for <BrandName /> Tunnel                                                                                                | N/A     |

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
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
        <BrandName /> Tunnel Modifiers
      </span>
    </li>
  </ul>
</nav>
