# How to Configure Geolocation and Tunnel With KaneAI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

KaneAI web tests use three network configurations in **Advanced Settings**: geolocation to route traffic through a chosen region, tunnel to reach pages hosted locally or behind a firewall, and dedicated proxy to route traffic through your organization's proxy IP. Each configuration is written into the generated code so the test replays with the same network context.

## Prerequisites

- An active KaneAI web authoring session (network configurations are set in **Advanced Settings**).
- For the tunnel option: the tunnel binary plus your account username and access key.

## Geolocation

Geolocation routes your test traffic through a chosen region so you can verify how your website behaves for users in that location.

### Step 1: Select a Region

In **Advanced Settings**, select the **Geolocation** option and choose your desired region.

**Result:** Test traffic is proxied through the selected region.

### Step 2: Run the Test

Run your web test on KaneAI.

**Result:** The website loads as it would for a user in the selected region.

### Step 3: Save the Test

Save the test to persist the configuration.

**Result:** The generated code includes the geolocation details, so you can replay the test across regions.

## Tunnel

A tunnel lets you test websites that are hosted locally or sit behind a firewall.

### Step 1: Start the Tunnel

Configure the tunnel using the [locally hosted pages tunnel binary](/support/docs/testing-locally-hosted-pages/#download-the-tunnel-binary) with `--env ht-prod` mode enabled. Trigger the tunnel with the following command:

{`./LT --user ${YOUR_LAMBDATEST_USERNAME()} --key ${YOUR_LAMBDATEST_ACCESS_KEY()}  --env ht-prod -v -n TUNNEL_NAME`}

**Result:** The tunnel is running and available to select in KaneAI.

### Step 2: Select the Tunnel

In **Advanced Settings**, select the tunnel you started.

**Result:** KaneAI routes the test through your tunnel.

### Step 3: Run the Test

Run your web test on KaneAI against the locally hosted page.

**Result:** KaneAI reaches the local or firewalled page through the tunnel.

### Step 4: Save the Test

Save the test to persist the configuration.

**Result:** The generated code includes the tunnel details for future runs.

## Dedicated Proxy

Dedicated proxy routes test traffic through the proxy IP configured for your organization. This option is available only for enterprise accounts with dedicated proxy enabled.

### Step 1: Select a Region

In **Advanced Settings**, select the **Dedicated Proxy** option and choose the region.

**Result:** KaneAI routes the test through your organization's dedicated proxy IP.

### Step 2: Run the Test

Run your web test on KaneAI.

**Result:** Traffic is routed through the dedicated proxy IP for the selected region.

### Step 3: Save the Test

Save the test to persist the configuration.

**Result:** The generated code includes the proxy details for future runs.

## Next Steps

Continue with these guides:

- [KaneAI Advanced Settings](/support/docs/kaneai-advanced-settings/)
- [KaneAI Custom Headers](/support/docs/kaneai-custom-headers/)
