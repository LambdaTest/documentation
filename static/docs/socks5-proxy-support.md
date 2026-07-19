# SOCKS5 Proxy Support in TestMu AI Tunnel

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

## Overview

TestMu AI Tunnel offers comprehensive support for SOCKS5 proxy, enabling secure and private connections between your local development environment and the TestMu AI cloud platform. This support is crucial for users operating within networks that require advanced proxy configurations for security and privacy. This document outlines the key features, benefits, and usage of the SOCKS5 proxy support in TestMu AI Tunnel.

## Key Features

- **Enhanced Security:** By using a SOCKS5 proxy, TestMu AI Tunnel facilitates more secure data transmission by routing traffic through a proxy server, providing an additional layer of security.
- **Easy Configuration:** The TestMu AI Tunnel can be easily configured to use a SOCKS5 proxy with minimal setup, allowing for straightforward integration into your testing workflow.
- **Bypass Network Restrictions:** The SOCKS5 proxy support helps navigate corporate firewalls and network restrictions, enabling testing of local and internal web applications seamlessly.

## Usage

To use TestMu AI Tunnel with a SOCKS5 proxy, follow the steps outlined below:

1. **Start TestMu AI Tunnel:** Open your command-line interface (CLI) and navigate to the directory where the TestMu AI Tunnel is installed.
2. **Activate SOCKS5 Proxy:** Use the `--proxy-type` flag with the value `socks5` to specify the SOCKS5 proxy type for tunneling. Here is an example command:

```sh
./LambdaTestTunnel --user YourLambdaTestUsername --key YourLambdaTestAccessKey --proxy-type socks5
```
   Replace `YourLambdaTestUsername` and `YourLambdaTestAccessKey` with your actual TestMu AI credentials.

3. **Run Your Tests:** With the tunnel running and configured to use a SOCKS5 proxy, you can now execute your tests against local or internal web applications as if they were accessible on the public internet.

## Conclusion

The SOCKS5 proxy support in TestMu AI Tunnel is an essential feature for users who require secure, encrypted traffic transmission and the ability to bypass network restrictions during the testing process. By leveraging this feature, developers and QA professionals can ensure that their web applications are thoroughly tested in environments that closely mimic real-world scenarios.
