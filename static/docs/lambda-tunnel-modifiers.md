# TestMu AI Tunnel Modifiers

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

TestMu AI Tunnel provides several command-line arguments that you can leverage to define TestMu AI Tunnel parameters. You can pass command-line arguments to either a **‘config’** file or an environment variable. It is recommended to use the latest version of TestMu AI tunnel binary to ensure compatibility with variables.

This document will help you understand all the modifiers/arguments used with TestMu AI Tunnel to help you test your locally hosted web pages.

| FLAG (SHORT) | FLAG (LONG) | DESCRIPTION | TYPE |
|--------------|-------------|-------------|------|
|| --allowHosts | Comma separated list of hosts to route via tunnel. Everything else will be routed via Internet.  Learn how to use the [wildcard expressions](/support/docs/tunnel-allowHost-wildcard-support/) in the `--allowHosts` flag  | String  |
| | --bypassHosts | Comma separated list of hosts to bypass from tunnel. These will be routed via internet.                                                             | String  |
|              | --callbackURL   | Callback URL for tunnel status.                                                                                                                     | String  |
| -c           | --config        | Path of the config file to use                                                                                                                      | String  |
|            | --clientCert      |  mTLS Client Certificate filepath.  Only `pfx` file type is supported| String  |
|            | --clientKey       |  mTLS Client Key filepath.  | String  |
|            | --mTLSHosts       | Comma separated list of mTLS hosts.  | String  |
| -d           | --dir           | Specify the Local Directory that will be server by a file server on port 33000                                                                      | String  |
|              | --dns           | Comma Separated List of DNS Servers                                                                                                                 | String  |
|              | --egress-only   | Uses proxy settings only for outbound requests.                                                                                                     | N/A     |
| -e           | --env           | The environment on which the TestMu AI Tunnel will run.                                                                                            | String  |
| -h           | --help          | Help for the TestMu AI Tunnel                                                                                                                      | N/A     |
|              | --infoAPIPort   | Exposes [Tunnel Info API](/support/docs/advanced-tunnel-features/#tunnelinfoapis) At The Specified Port                   | Integer |
|              | --ingress-only  | Routes Only Incoming Traffic Via The Proxy Specified                                                                                                | N/A     |
| -k           | --key           | TestMu AI Access Key.                                                                                                                              | String  |
| -l           | --load-balanced | Activates [Load Balancing](/support/docs/load-balancing-in-lambda-tunnel/) for TestMu AI Tunnel                          | N/A     |
|              | --logFile       | Location of the TestMu AI Tunnel Log File                                                                                                          | String  |
| -m           | --mitm          | Enable the [MITM(Man-in-the-middle)](/support/docs/advanced-tunnel-features/#mitmlocaltesting) mode for TestMu AI Tunnel | N/A     |
|              | --mode          | Specifies in which mode tunnel should run [ssh,tcp,ws]. (default "ssh")                                                                             | String  |
|              | --ntlm          | To use Microsoft NTLM (Windows NT LAN Manager) authentication for communication or transport purposes.                                              | Boolean |
|              | --pidfile       | Path Of Pidfile, Where Process ID will Be Written                                                                                                   | String  |
| -p           | --port          | Port for TestMu AI Tunnel to activate.                                                                                                             | Integer |
|              | --proxy-host    | Specifies the Tunnel Proxy Port hostname.                                                                                                           | String  |
|              | --proxy-pass    | Specifies the Tunnel Proxy Port password.                                                                                                           | String  |
|              | --proxy-port    | Specifies the port number where Tunnel proxy will activate.                                                                                         | Integer |
|              | --proxy-user    | Specifies the Tunnel Proxy Port username                                                                                                            | String  |
|            | --pacfile        |  Path of a PAC file.  | String  |
| -s           | --shared-tunnel | Sharing Tunnel Among Team Members                                                                                                                   | N/A     |
|              | --sshConnType   | Specify type of ssh connection (over_22, over_443, over_ws).To use –sshConnType, specify ––mode ssh flag first.                                     | String  |
| N/A | --maxSSHConnections | Increase the SSH Connection from Tunnel Client to Tunnel Server. Maximum allow is 30 | N/A |
| -n           | --tunnelName    | Specifies the custom TestMu AI Tunnel name to be used.                                                                                             | String  |
| -u           | --user          | TestMu AI Username.                                                                                                                                | String  |
|              | --use-private-ip         | Sets remote address to an internal IP of client machine.                                                                                      | Boolean  |
| -v           | --verbose       | Should Every Proxy Request Be Logged To Stdout                                                                                                      | N/A     |
|              | --version       | Displays the installed version for TestMu AI Tunnel                                                                                                | N/A     |
