# Environment Variables Supported By TestMu AI Tunnel

You can leverage these environment variables to define your proxy settings. If these proxy environment variables are set then the tunnel will automatically detect them. You can switch command-line flags through an environment variable or .lt.yaml==$0 file with the TestMu AI tunnel.
To configure the .lt.yaml, you can refer to the section [Leverage .lt.yaml file](/docs/advanced-tunnel-features/#leverage-ltyaml-file) of the documentation [Advanced TestMu AI Tunnel Features](/docs/advanced-tunnel-features/).

### What are Environment Variables?

Environment variables can be used in place of command-line flags. Each operating system has its compatibility in terms of environment variables. Command-line flags restrict environment variables from being bypassed. When available, the command-line flags always take priority.

Below is the following list of environment variables used by the TestMu AI Tunnel

| ENVIRONMENT VARIABLE               | DESCRIPTION                                                                                               | OPERATING SYSTEM                |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------- |
| `http_proxy``HTTP_PROXY`     | TestMu AI tunnel uses the HTTP proxy `http://hostname:port`                                              | Windows, Mac OS, Linux          |
| `https_proxy``HTTPS_PROXY`   | TestMu AI tunnel uses the HTTPS proxy `https://hostname:port`                                            | Windows, Mac OS, Linux          |
| `no_proxy``NO_PROXY`         | Comma separated list of hosts to bypass proxy when using tunnel. Wild cards is supported for sub-domains. | Windows, Mac OS, Linux          |
| `LT_USERNAME``LT_ACCESS_KEY` | TestMu AI UsernameTestMu AI Access Key                                                            | Windows, Mac OS, Linux, FreeBSD |

That was all you need to know for TestMu AI tunnel proxies. In case you have any questions, feel free to share them with us. Our experts are available on **24/7 chat support**. You can also drop us a mail at **[support@testmuai.com](mailto:support@testmuai.com)**. Happy testing! 🙂
