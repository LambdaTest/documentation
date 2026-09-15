# Troubleshooting TestMu AI Tunnel

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

TestMu AI Tunnel helps in establishing an SSH connection between your local machine and our cloud servers to help you perform tests on locally hosted websites and web-apps. With TestMu AI Tunnel, you can ensure how robust your website rendering is across 3000+ real browsers, even before you make it live on the internet.

If due to some unfortunate reason, you are unable to perform cross browser testing using TestMu AI Tunnel then this document will help you troubleshoot the most common challenges.

Oops !! Facing issue while testing your locally hosted application through TestMu AI Tunnel? Here are a few guidelines for you.

Before proceeding, here are some of the common issues:

- [Localhost refused to connect](/docs/troubleshooting-lambda-tunnel/#1-localhost-refused-to-connect)
- [Invalid Host Header](/docs/troubleshooting-lambda-tunnel/#2-invalid-host-header)
- [WordPress - CSS not loading](/docs/troubleshooting-lambda-tunnel/#3-wordpress---css-not-loading)
- [IP whitelisting](/docs/troubleshooting-lambda-tunnel/#4-ip-whitelisting)
- [Custom Host name](/docs/troubleshooting-lambda-tunnel/#5-custom-host-name)
- [Enable verbose logging](/docs/troubleshooting-lambda-tunnel/#6-enable-verbose-logging)
- [LT can’t be opened because Apple cannot check it for malicious software](/docs/troubleshooting-lambda-tunnel/#7-lt-cant-be-opened-because-apple-cannot-check-it-for-malicious-software)
- [Unable to establish a secure shell tunnel connection through Port 443](/docs/troubleshooting-lambda-tunnel/#ssh-port-443)

Looking up a specific message the tunnel printed? See [Error Messages](/docs/troubleshooting-lambda-tunnel/#error-messages) below.

## 1. Localhost Refused To Connect

After configuring the tunnel, you might get into the error similar to the below screenshot:

The error "localhost refused to connect" occurs because of using the URL as localhost which is unfortunately not compatible with various browsers and browser versions. We are deliberately eliminating the URL localhost and recovering it with localhost.lambdatest.com or your local system IP.

For example you might find above error with URL: `https://localhost/demo.html`

however, URL: `https://localhost.lambdatest.com/demo.html` or `10.0.0.15/demo.html` would definitely work fine for you.

## 2. Invalid Host Header

While testing an application hosted on your local machine, you may receive an "Invalid Host Header" error message when testing on TestMu AI using a local connection. This error is most commonly caused by a misconfiguration of the application server that causes it to reject non-local connections or reject requests directed at hostnames other than localhost(or any custom one set)

Since, web applications are now built with various different kinds of frameworks like angular, react etc; In order to test it using tunnel the command used to run your web app needs to modified in your project manifest file i.e. "package.json"

- **Angular Framework Project**: For Angular framework based web app, ideally you might be using "ng serve" or "npm start" to run your web application or your package.json file configuration would be set as "ng serve" in order to start your web app and as usual, it would be working fine on local browser. However, this might throw an "Invalid Host Header"error or error something related to the invalid host in a Real Time Test.

To resolve this, here is the quick small solution for you. While running your application, you can either use command `ng serve --host 0.0.0.0 --disable-host-check` or set your start configuration in package.json file as `"ng serve --host 0.0.0.0 --disable-host-check"` instead of changing your running command.

- **React Framework Project**: For React framework based web app, you need to create an env file in which you have to add the hostname,syntax: `HOST=< hostname >`, once you are done with it, now you can add your localhost IP along with your hostname in your system hosts file.

Example: `127.0.0.1 < hostname >`

This would help you avoiding "Invalid Host Header" error.

## 3. WordPress - CSS Not Loading

While testing your local web app built through WordPress, you may find issue with the rendering of CSS, similar to the below screenshot:

The general solution for this is to update the WordPress Address and Site Address on the General Settings tab in the WordPress dashboard with your system IP address rather than the default of localhost, then everything will be emitted relative to that. Here is a screenshot for your further reference:

By applying the above changes, you would find the CSS loading issue as resolved. Below is a screenshot after the mentioned changed:

## 4. IP Whitelisting

If you are testing a server that requires IP whitelisting, then you just have to set up a Local Testing connection and whitelist the below few IP’s for the respective domain:

`https://ts.lambdatest.com/`

- 199.58.84.59
- 23.82.88.184
- 23.106.34.219
- 23.106.54.77
- 3.214.241.254
- 52.36.84.247
- 13.126.37.58
- 3.66.78.89

## 5. Custom Host Name

Because of some firewall restrictions, your web application might not be accessible on some other servers even after whitelisting the IP’s and configuring the tunnel, in such case you need to make an entry in the hosts file which is used to map hostnames to IP addresses. With the hosts file, you can change the IP address that you resolve a given domain name. This change only affects your own computer without affecting how the domain is resolved worldwide.

This is particularly useful when you wish to see how a website will look like when hosted on a different server without making any DNS changes to your domain.

The location of the hosts file, depending on the operating system that you are using, is:

- **Windows** – SystemRoot > system32 > drivers > etc > **hosts**
By default the system root is C:\Windows, so if you are using Windows, your **hosts** file is most probably:C:\Windows\System32\drivers\etc\ **hosts**)
- **Linux** – /etc/**hosts**
- **Mac OS X** – /private/etc/**hosts**

Let’s say that you wish to resolve **mydomain.com** to the IP address **10.20.30.40**. In this case, you would need to open up the hosts file with a text editor and append the following line:
10.20.30.40 mydomain.com www.mydomain.com

## 6. Enable Verbose Logging

The `- v`  flag enables Verbose logging on the console. You can use this to log the HTTP headers & requests or to debug the TestMu AI Tunnel connection.

The requests are also logged into a log file `lt.log` which is created in the same working directory as the TestMu AI Tunnel binary. You can also specify the tunnel log file name using the `--logFile` flag.

## 7. LT Can’t Be Opened Because Apple Cannot Check It For Malicious Software

Catalina OS users may get the below error from the command line while trying to configure the TestMu AI Tunnel to test their locally hosted web pages:
"LT can't be opened because Apple cannot check it for malicious software"

This error occurs due to the increased restrictions on third-party software, downloaded from the internet. Since Catalina OS is recently launched by Apple, we are working to make our TestMu AI Tunnel compatible with the new OS.

While we are at it, here is a one-time setup workaround. All you need to do is run the below command before you start configuring your TestMu AI Tunnel:

`xattr -d com.apple.quarantine ./LT`

## Error Messages {#error-messages}

When the TestMu AI Tunnel fails, it prints a plain-text message. This section lists those messages exactly as the tunnel prints them, what each one means, and what to do.

Many messages are followed by details from your run, such as a host, a port, or the underlying network error. Match on the beginning of your message.

Documented for tunnel binary **v3.2.34**. For every flag mentioned below, see [Tunnel Modifiers](/support/docs/lambda-tunnel-modifiers/). To see more detail for any message, turn on [verbose logging](#6-enable-verbose-logging).

### Authentication {#tunnel-authentication}

#### Invalid Credentials, Please try again! {#invalid-credentials}

| Field | Value |
|-------|-------|
| **Message** | `Invalid Credentials, Please try again!` |
| **What happened** | The tunnel could not authenticate with the username and access key it was given. |
| **What to do** | Check the values passed to `--user` and `--key`. See [how to find your username and access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/). |
| **Also seen as** | `Invalid Credentials` |

#### Username not specified {#username-not-specified}

| Field | Value |
|-------|-------|
| **Message** | `Username not specified` |
| **What happened** | The tunnel was started without a username. |
| **What to do** | Pass your username with `--user`. |

#### Access Key not specified {#access-key-not-specified}

| Field | Value |
|-------|-------|
| **Message** | `Access Key not specified` |
| **What happened** | The tunnel was started without an access key. |
| **What to do** | Pass your access key with `--key`. |

#### Request failed(401) {#request-failed-401}

| Field | Value |
|-------|-------|
| **Message** | `Request failed(401)` |
| **What happened** | The server rejected the tunnel's credentials with HTTP 401. |
| **What to do** | Check the values passed to `--user` and `--key`, as for [Invalid Credentials](#invalid-credentials). |
| **Also seen as** | `ERR::LUNCH::TUNN : Launch tunnel failed Request failed(401)` |

### SSH, Websocket, and TCP Connections {#tunnel-connections}

#### Error while creating ssh connection, over port 22 {#ssh-port-22}

| Field | Value |
|-------|-------|
| **Message** | `Error while creating ssh connection, over port 22` |
| **What happened** | The tunnel could not open an SSH connection over port 22. |
| **What to do** | Try another connection type with `--sshConnType over_443` or `--sshConnType over_ws` (these need `--mode ssh`), or use `--mode ws`. |
| **Also seen as** | `Failed to create session on port 22:` |

#### Error while creating ssh connection, over port 443 {#ssh-port-443}

| Field | Value |
|-------|-------|
| **Message** | `Error while creating ssh connection, over port 443` |
| **What happened** | The tunnel could not open an SSH connection over port 443. |
| **What to do** | If you connect through a proxy, pass it with `--proxy-host` and `--proxy-port`. You can also try `--sshConnType over_ws` or `--mode ws`. If your network restricts outbound traffic, see [IP whitelisting](#4-ip-whitelisting). |
| **Also seen as** | `Failed to create session on port 443:` |

#### Error while creating ssh connection, over ws {#ssh-over-ws}

| Field | Value |
|-------|-------|
| **Message** | `Error while creating ssh connection, over ws` |
| **What happened** | The tunnel could not open an SSH connection over a websocket. |
| **What to do** | Try `--sshConnType over_22` or `--sshConnType over_443`. |

#### Error while creating websocket connection {#websocket-connection}

| Field | Value |
|-------|-------|
| **Message** | `Error while creating websocket connection` |
| **What happened** | The tunnel could not connect in websocket mode. |
| **What to do** | Try `--mode ssh`, which is the default, or `--mode tcp`. |

#### Error while creating tcp connection {#tcp-connection}

| Field | Value |
|-------|-------|
| **Message** | `Error while creating tcp connection` |
| **What happened** | The tunnel could not connect in TCP mode. |
| **What to do** | Try `--mode ssh`, which is the default, or `--mode ws`. |

#### Invalid field: mode, allowed values [ssh, ws, tcp] {#invalid-mode}

| Field | Value |
|-------|-------|
| **Message** | `Invalid field: mode, allowed values [ssh, ws, tcp]` |
| **What happened** | The value passed to `--mode` is not one of the allowed values. |
| **What to do** | Use `ssh`, `ws`, or `tcp`. If you leave out `--mode`, the tunnel uses `ssh`. |

#### Cannot expose tcp services in websocket mode use ssh mode {#tcp-in-websocket-mode}

| Field | Value |
|-------|-------|
| **Message** | `Cannot expose tcp services in websocket mode use ssh mode` |
| **What happened** | TCP services cannot be exposed while the tunnel runs in websocket mode. |
| **What to do** | Run the tunnel with `--mode ssh`. |

### Proxies and PAC Files {#tunnel-proxies}

#### Error while connecting to proxy server {#proxy-server}

| Field | Value |
|-------|-------|
| **Message** | `Error while connecting to proxy server` |
| **What happened** | The tunnel could not connect to the proxy server. |
| **What to do** | Check `--proxy-host` and `--proxy-port`, and `--proxy-user` and `--proxy-pass` if your proxy needs a login. |

#### Unable to parse proxy URL {#proxy-url}

| Field | Value |
|-------|-------|
| **Message** | `Unable to parse proxy URL` |
| **What happened** | The proxy address could not be read. |
| **What to do** | Check the proxy settings you passed, such as `--proxy-host` and `--proxy-port`. |

#### Unable to read PAC File at Location {#pac-file-read}

| Field | Value |
|-------|-------|
| **Message** | `Unable to read PAC File at Location :` |
| **What happened** | The PAC file could not be read. |
| **What to do** | Check the path passed to `--pacfile`. |
| **Also seen as** | `Failed to read PAC file at` |

#### Unable to fetch remote PAC File at Location {#pac-file-remote}

| Field | Value |
|-------|-------|
| **Message** | `Unable to fetch remote PAC File at Location :` |
| **What happened** | The PAC file could not be downloaded from the location given. |
| **What to do** | Check that the location is reachable from this machine. |

### Certificates {#tunnel-certificates}

#### Failed to generate client certificate for mTLS. {#mtls-client-certificate}

| Field | Value |
|-------|-------|
| **Message** | `Failed to generate client certificate for mTLS.` |
| **What happened** | The tunnel could not create the client certificate for mTLS. |
| **What to do** | Check the files passed with `--clientCert` and `--clientKey`. `--clientCert` supports only `pfx` files. |

#### Invalid client certificate and client key. {#invalid-client-certificate}

| Field | Value |
|-------|-------|
| **Message** | `Invalid client certificate and client key.` |
| **What happened** | The certificate and key could not be used. |
| **What to do** | Check the files passed with `--clientCert` and `--clientKey`. |

#### Failed to read PFX File. {#pfx-file}

| Field | Value |
|-------|-------|
| **Message** | `Failed to read PFX File.` |
| **What happened** | The PFX certificate file could not be read. |
| **What to do** | Check the file passed with `--clientCert`. Only `pfx` files are supported. |
| **Also seen as** | `Failed to decode PFX data.` · `PCKS12 file should be pfx extention.` |

#### Unable to load cert for mitm {#mitm-certificate}

| Field | Value |
|-------|-------|
| **Message** | `Unable to load cert for mitm` |
| **What happened** | The tunnel could not load the certificate it needs for `--mitm` mode. |
| **What to do** | Turn on [verbose logging](#6-enable-verbose-logging) and share the log with support. |
| **Also seen as** | `Unable to generate mitm config` |

### Configuration and Flags {#tunnel-configuration}

#### Please provide either AllowHosts or BypassHosts. {#allowhosts-or-bypasshosts}

| Field | Value |
|-------|-------|
| **Message** | `Please provide either AllowHosts or BypassHosts.` |
| **What happened** | `--allowHosts` and `--bypassHosts` were both set. |
| **What to do** | Use only one of them. |
| **Also seen as** | `Please provide either AllowHosts or ForceLocal.` · `Please provide either BypassHosts or ForceLocal.` |

#### Tunnel Name too long {#tunnel-name-too-long}

| Field | Value |
|-------|-------|
| **Message** | `Tunnel Name too long` |
| **What happened** | The name passed to `--tunnelName` is too long. |
| **What to do** | Use a shorter tunnel name. |

#### Invalid environment specified {#invalid-environment}

| Field | Value |
|-------|-------|
| **Message** | `Invalid environment specified` |
| **What happened** | The value passed to `--env` is not a valid environment. |
| **What to do** | Check the value you passed to `--env`. |

#### Error while parsing flags from args {#parsing-flags}

| Field | Value |
|-------|-------|
| **Message** | `Error while parsing flags from args` |
| **What happened** | One of the flags passed to the tunnel could not be read. |
| **What to do** | Check each flag against [Tunnel Modifiers](/support/docs/lambda-tunnel-modifiers/), or run the tunnel with `--help`. |

### Local Ports {#tunnel-local-ports}

#### Failed to start api server on port {#api-server-port}

| Field | Value |
|-------|-------|
| **Message** | `Failed to start api server on port` |
| **What happened** | The Tunnel Info API could not start on its port. |
| **What to do** | Set a free port with `--infoAPIPort`. |
| **Also seen as** | `Unable to start api server :` |

#### Failed to start local file server on port {#file-server-port}

| Field | Value |
|-------|-------|
| **Message** | `Failed to start local file server on port` |
| **What happened** | The tunnel could not start its local file server on the port it tried. |
| **What to do** | Make sure the port in the message is free. When you use `--dir`, the file server runs on port 33000. |
| **Also seen as** | `Unable to start file server :` |

### Tunnel Lifecycle {#tunnel-lifecycle}

#### There was an error while starting tunnel {#error-starting-tunnel}

| Field | Value |
|-------|-------|
| **Message** | `There was an error while starting tunnel:` |
| **What happened** | The tunnel failed while starting. The text after the colon gives the cause. |
| **What to do** | Look up the rest of the message on this page. For example, `Request failed(401)` is a [credentials problem](#request-failed-401). |

#### Tunnel retries exceeded, aborting. {#retries-exceeded}

| Field | Value |
|-------|-------|
| **Message** | `Tunnel retries exceeded, aborting.` |
| **What happened** | The tunnel used up its connection retries and stopped. |
| **What to do** | Start it again with [verbose logging](#6-enable-verbose-logging) on to see why the connection failed. |

#### Tunnel aborted, starting new tunnel. {#tunnel-aborted}

| Field | Value |
|-------|-------|
| **Message** | `Tunnel aborted, starting new tunnel.` |
| **What happened** | The tunnel dropped and started a new tunnel. |
| **What to do** | If it keeps happening, turn on [verbose logging](#6-enable-verbose-logging) to see why. |

#### Tunnel closure requested from server. Exiting {#closure-requested}

| Field | Value |
|-------|-------|
| **Message** | `Tunnel closure requested from server. Exiting` |
| **What happened** | The server asked the tunnel to stop, and the tunnel exited. |
| **What to do** | Start the tunnel again. If it keeps happening, share the [verbose logging](#6-enable-verbose-logging) output with support. |

#### Unable to stop the tunnel {#unable-to-stop}

| Field | Value |
|-------|-------|
| **Message** | `Unable to stop the tunnel:` |
| **What happened** | The tunnel could not shut down cleanly. |
| **What to do** | End the tunnel process before you start a new one. |
| **Also seen as** | `Stop tunnel failed` |

### Messages in Your Test Session {#tunnel-test-session}

These messages do not come from the tunnel program. They appear in your test results or in the browser when a test cannot use the tunnel.

#### Either tunnel is not running or disconnected {#tunnel-not-running}

| Field | Value |
|-------|-------|
| **Message** | `Either tunnel is not running or disconnected` |
| **What happened** | The test asked to run through a tunnel, but no connected tunnel was found for it. |
| **What to do** | Start the tunnel before your tests, and set up your test to use it as described in [Test Locally Hosted Web Pages](/support/docs/testing-locally-hosted-pages/). |

#### ERR_TUNNEL_CONNECTION_FAILED {#err-tunnel-connection-failed}

| Field | Value |
|-------|-------|
| **Message** | `ERR_TUNNEL_CONNECTION_FAILED` |
| **What happened** | The browser could not reach your local site through the tunnel. |
| **What to do** | Confirm the tunnel is running and your test uses it. If your site runs on `localhost`, see [Localhost refused to connect](#1-localhost-refused-to-connect). |

### Plugins {#tunnel-plugins}

#### LambdaTest Tunnel failed to start within 60 seconds! {#wdio-tunnel-timeout}

| Field | Value |
|-------|-------|
| **Message** | `LambdaTest Tunnel failed to start within 60 seconds!` |
| **Where it comes from** | The WebdriverIO service (`wdio-lambdatest-service`), which waits 60 seconds for the tunnel to start. |
| **What to do** | Look above it for the tunnel's own message, and find that message on this page. |
| **Also seen as** | `LambdaTest Tunnel failed to stop within 60 seconds!` |
