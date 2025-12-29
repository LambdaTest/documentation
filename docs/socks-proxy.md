---
id: socks5-proxy-support
title: SOCKS5 Proxy Support in TestMu AI Tunnel
hide_title: false
sidebar_label: SOCKS5 Proxy Support
description: Learn how to use TestMu AI Tunnel with SOCKS5 proxy for secure, private, and flexible local testing.
keywords:
  - socks5 proxy
  - testmu ai tunnel
  - secure proxy testing
  - local app testing
  - bypass network restrictions
image: /assets/images/og-images/Sharing-Lambda-Tunnel.jpg
url: https://www.lambdatest.com/support/docs/socks5-proxy-support/
site_name: LambdaTest
slug: socks5-proxy-support/
---

# SOCKS5 Proxy Support in LambdaTest Tunnel

## Overview

LambdaTest Tunnel offers comprehensive support for SOCKS5 proxy, enabling secure and private connections between your local development environment and the LambdaTest cloud platform. This support is crucial for users operating within networks that require advanced proxy configurations for security and privacy. This document outlines the key features, benefits, and usage of the SOCKS5 proxy support in LambdaTest Tunnel.

## Key Features

- **Enhanced Security:** By using a SOCKS5 proxy, LambdaTest Tunnel facilitates more secure data transmission by routing traffic through a proxy server, providing an additional layer of security.
- **Easy Configuration:** The LambdaTest Tunnel can be easily configured to use a SOCKS5 proxy with minimal setup, allowing for straightforward integration into your testing workflow.
- **Bypass Network Restrictions:** The SOCKS5 proxy support helps navigate corporate firewalls and network restrictions, enabling testing of local and internal web applications seamlessly.

## Usage

To use LambdaTest Tunnel with a SOCKS5 proxy, follow the steps outlined below:

1. **Start LambdaTest Tunnel:** Open your command-line interface (CLI) and navigate to the directory where the LambdaTest Tunnel is installed.
2. **Activate SOCKS5 Proxy:** Use the `--proxy-type` flag with the value `socks5` to specify the SOCKS5 proxy type for tunneling. Here is an example command:

   ```sh
   ./LambdaTestTunnel --user YourLambdaTestUsername --key YourLambdaTestAccessKey --proxy-type socks5
   ```
   Replace `YourLambdaTestUsername` and `YourLambdaTestAccessKey` with your actual LambdaTest credentials.

3. **Run Your Tests:** With the tunnel running and configured to use a SOCKS5 proxy, you can now execute your tests against local or internal web applications as if they were accessible on the public internet.

## Conclusion

The SOCKS5 proxy support in LambdaTest Tunnel is an essential feature for users who require secure, encrypted traffic transmission and the ability to bypass network restrictions during the testing process. By leveraging this feature, developers and QA professionals can ensure that their web applications are thoroughly tested in environments that closely mimic real-world scenarios.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="https://www.lambdatest.com">
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
        Socks5 Proxy Tunnel
      </span>
    </li>
  </ul>
</nav>
