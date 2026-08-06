# TestMu AI Public IP Ranges

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

**Note:** The IP addresses listed below are static Public IPs. If your application or network is protected by IP-based firewall rules, you can whitelist the relevant TestMu AI IP ranges to allow TestMu AI cloud devices to access your environment.

These are the list of the IP ranges that you need to whitelist with respect to the specific TestMu AI products.

Whitelist these Firewall IPs to allow TestMu AI cloud infrastructure to access your firewall-protected application or environment. Configure them as **inbound** allow rules.

| Subnet Range | Real Time (Virtual Device)(Desktop & Mobile - Automation) | Real Time (Virtual Device)(Desktop & Mobile - Manual) | Real Device(Manual & Automation) |
|--------------|----------------------------------------------|------------------------------------------|----------------------------------------|
| **103.231.42.40/29** |  ✅  |  ❌  |  ✅  |
| **103.231.79.40/29** |  ✅  |  ❌  |  ✅  |
| **23.105.12.32/27** |  ✅  |  ✅  |  ❌  |
| **23.106.34.192/26** |  ✅  |  ✅  |  ❌  |
| **23.106.34.192/26** |  ✅  |  ✅  |  ❌  |
| **209.58.137.40/29** |  ❌  |  ❌  |  ✅  |
| **23.83.156.64/26** |  ✅  |  ✅  |  ❌  |
| **23.105.162.225** |  ❌  |  ✅  |  ❌  |
| **23.105.174.26** |  ❌  |  ✅  |  ❌  |
| **23.106.127.152/29** |  ✅  |  ✅  |  ❌  |
| **199.7.167.8/29** |  ✅  |  ✅  |  ❌  |
| **208.78.110.56/29** |  ✅  |  ✅  |  ❌  |
| **207.254.54.32/29** |  ✅  |  ✅  |  ❌  |
| **207.254.53.0/29** |  ✅  |  ✅  |  ❌  |
| **207.254.30.104/29** |  ✅  |  ✅  |  ❌  |
| **137.174.189.0/26** |  ✅  |  ✅  |  ✅  |
| **217.112.145.88/29** |  ✅  |  ❌  |  ✅  |
| **149.6.5.8/29** |  ✅  |  ❌  |  ✅  |

## KaneAI IPs {#kaneai-ips}

Whitelist these IP ranges to allow KaneAI to access applications hosted within your firewall-protected environment. Configure them as **inbound** allow rules.

| IP / CIDR |
|------------|
| `4.224.6.32/28` |
| `20.253.69.48/28` |
| `20.242.202.160/28` |
| `20.102.24.108/31` |
| `4.224.143.208/28` |
| `20.204.184.92/31` |
| `52.224.184.10/31` |
| `20.204.224.62/31` |
| `172.199.71.240/28` |

## Tunnel IPs {#tunnel-ips}

Whitelist these IP addresses to allow the Tunnel client to establish outbound connections with the Tunnel service. Configure them as **outbound** allow rules.

| IP Address |
|------------|
| `3.214.241.254` |
| `52.36.84.247` |
| `3.66.78.89` |
| `13.126.37.58` |
| `23.106.127.152/29` |
| `23.106.34.219` |
| `23.106.54.77` |
| `23.82.88.184` |
| `199.58.84.59` |
| `172.241.165.120` |

## Integration Tools IPs {#integration-tools-ips}

Whitelist this IP address to allow TestMu AI integration tools to access applications hosted within your firewall-protected environment. Configure it as an **inbound** allow rule.

| IP Address |
|------------|
| `3.208.126.109` |

## Stun Servers {#stun-server-ips}

Whitelist the following STUN server IP addresses or hostnames to enable WebRTC connectivity. **You can whitelist either the complete set of IP addresses or the complete set of hostnames**.

Configure it as an **outbound** allow rule.

### IP Addresses

| IP Address |
|------------|
| `52.72.255.172` |
| `13.126.232.213` |
| `34.246.27.205` |
| `3.222.169.4` |
| `43.204.134.9` |
| `54.228.155.35` |

### Hostnames

| Hostname |
|----------|
| `stun-us-2.lambdatest.com` |
| `stun-ap-2.lambdatest.com` |
| `stun-eu-2.lambdatest.com` |
| `stun-us-1.lambdatest.com` |
| `stun-as-1.lambdatest.com` |
| `stun-eu-1.lambdatest.com` |

## Guacamole Servers {#guacamole-servers-ips}

Whitelist these IP addresses for browser-based remote access sessions falls back to a Guacamole session. Configure them as **outbound** allow rules.

| IP Address |
|------------|
| `54.225.186.4` |
| `52.71.149.142` |
| `44.238.12.62` |
| `3.111.139.20` |
| `54.255.17.88` |
| `3.64.247.89` |

## WebSocket Connections {#websocket-connections-ips}

Whitelist these IP addresses to allow WebSocket (WS/WSS) communication for device interaction and DevTools functionality. Configure them as **outbound** allow rules.

| IP Address |
|------------|
| `3.73.105.110/32` |
| `3.72.144.221/32` |
| `18.235.85.58/32` |
| `44.207.198.148/32` |
| `3.109.252.59` |
| `43.205.182.101` |
| `18.138.79.89` |
| `54.254.173.86` |

- If you prefer not to whitelist the product-specific public IP ranges listed below, consider using a **Dedicated Proxy**.

- It provides a unique static IP exclusively for your organization, making firewall management, auditing, and access control simpler. This is especially useful for organizations with strict security or compliance requirements that want to whitelist a single dedicated IP instead of multiple product-specific IP ranges.

- For more information, refer to the documentation links provided below.

## Additional Links

- [Network Whitelisting Guide](/support/docs/network-whitelisting-and-tunnel-guide/#2-when-dedicated-proxy-whitelisting-has-to-be-done/)
- [Dedicated Proxy - IP Whitelisting](/support/docs/dedicated-proxy/)
