---
id: certificate-injection-appautomation
title: Certificate Injection in App Automation on Real Devices
sidebar_label: Certificate Injection
description: Install custom CA certificates and client identities on TestMu AI real devices during Appium app automation sessions to test certificate-based authentication, SSL pinning, and mutual TLS.
keywords:
  - certificate injection
  - certificate based authentication
  - custom certificates
  - customCertificates capability
  - ssl pinning
  - mutual tls
  - client certificate
  - ca certificate
  - pkcs12 pfx
  - mobileconfig
  - appium automation
  - app test automation
  - testmu ai
  - real devices
url: https://www.testmuai.com/support/docs/certificate-injection-appautomation/
site_name: TestMu AI
slug: certificate-injection-appautomation/
canonical: https://www.testmuai.com/support/docs/certificate-injection-appautomation/
---

import CodeBlock from '@theme/CodeBlock';
import { YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY } from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RealDeviceTag from '../src/component/realDevice';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


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
          "name": "Certificate Injection in App Automation",
          "item": `${BRAND_URL}/support/docs/certificate-injection-appautomation/`
        }]
      })
    }}
></script>

<RealDeviceTag value="Real Device" />

Many apps connect to servers that use certificates issued by a private or corporate certificate authority. Some apps also pin a **self-signed certificate**, or present a **client certificate** to authenticate themselves before a server will respond. On a standard device, these connections fail because the device does not trust your organization's certificates.

<BrandName />'s **Certificate Injection** allows you to test certificate-based authentication on real devices. You upload a certificate once and reference it by ID in your Appium capabilities. <BrandName /> then installs it on the allocated device before your test begins, with no manual steps on the device and no password entry during the run. Certificates are removed when the session ends.

---

## Use Cases

- Automate **certificate-based authentication** flows without manually entering a password on the device.
- Run regression suites against **internal or staging endpoints** signed by a private certificate authority.
- Validate **mutual TLS (mTLS)** handshakes where your app must present a client certificate.
- Test builds with **SSL pinning** enabled against a self-signed certificate.

---

## Supported Formats and Constraints

The file extension determines how a certificate is installed, so make sure you upload it with the extension that matches its contents.

| Extension | What it is | Installs as | Platform | Password |
|---|---|---|---|---|
| `.crt` `.cer` | A CA or server certificate | Trusted CA certificate | Android, iOS | Not used |
| `.pfx` | A PKCS#12 bundle containing a private key and its certificate chain | Client identity, granted to the app under test | Android, iOS | Required |
| `.mobileconfig` | An Apple configuration profile | Installed profile | iOS only | Not used |

**Constraints**

| | |
|---|---|
| **Device type** | Real devices only (`isRealMobile: true`) |
| **Platforms** | Android and iOS |
| **Session types** | App Automation, App Testing (Manual) |
| **Certificates per session** | Up to 3 |
| **Maximum file size** | 15 MB per certificate |
| **Capability** | `customCertificates` |

:::note Enablement Required
Certificate Injection is enabled per organization. If your session request returns *"your organization is not allowed to use customCertificates"*, the feature is not yet switched on for your account.

To unlock this feature, please contact your <BrandName /> support representative, reach out to our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**[24×7 Chat Support]**</span>, or email us at **support@testmuai.com**.
:::

:::warning
The following are rejected when you request the session, instead of being ignored silently:

- **Virtual devices and emulators.** The capability requires `isRealMobile: true`.
- **Real device browser automation.** Certificates apply to app sessions only.
:::

---

## Step 1: Upload the Certificate

Upload the file to the media upload endpoint with `type=cert`, using your <BrandName /> username and access key for authentication. Uploaded certificates are saved to your account, so you only need to upload each certificate once.

<Tabs className="docs__val">
  <TabItem value="ca-cert" label="CA Certificate" default>

Upload a `.crt`, `.cer`, or `.mobileconfig` file. No password is involved.

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${YOUR_LAMBDATEST_USERNAME()}:${YOUR_LAMBDATEST_ACCESS_KEY()}" \\
  -X POST "https://api.lambdatest.com/mfs/v1.0/media/upload" \\
  -F "file=@/Users/macuser/Downloads/corp-root-ca.crt" \\
  -F "type=cert"`}
</CodeBlock>
</div>

  </TabItem>
  <TabItem value="pfx" label="PKCS#12 Identity (.pfx)">

For a PKCS#12 bundle, send the password along with the upload. The password is stored securely against the certificate and applied automatically in every session that uses it.

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${YOUR_LAMBDATEST_USERNAME()}:${YOUR_LAMBDATEST_ACCESS_KEY()}" \\
  -X POST "https://api.lambdatest.com/mfs/v1.0/media/upload" \\
  -F "file=@/Users/macuser/Downloads/client-identity.pfx" \\
  -F "type=cert" \\
  -F "password=$CERT_PASSWORD"`}
</CodeBlock>
</div>

  </TabItem>
</Tabs>

**Request Parameters**

| Parameter | Required | Description |
|---|---|---|
| `file` | Yes | The certificate file to upload from your local machine. |
| `type` | Yes | Must be `cert` for certificate uploads. |
| `password` | Only for `.pfx` | The password for the PKCS#12 bundle. Stored securely and reused automatically. |

The response returns the ID that you reference in your capabilities:

```json
{
  "media_id": "MEDIA9f2c4b18a7d54e3ba0c6f19d2e8b7c05",
  "name": "corp-root-ca.crt"
}
```

The file is validated before it is stored. If it cannot be parsed as a certificate, the upload is rejected immediately instead of failing later on a device.

:::tip
You can also upload and manage certificates from the **Certificates** section of the App Testing dashboard. Certificates uploaded there are also available to your automation sessions. See [Certificate Injection on Real Devices](/support/docs/certificate-injection-on-realdevice/) for details.
:::

---

## Step 2: Set the `customCertificates` Capability

Pass `customCertificates` inside `LT:Options` as an **array of objects**. Each entry requires a `certificateId`. The `password` field is optional and overrides the password stored at upload time.

| Key | Type | Required | Description |
|---|---|---|---|
| `customCertificates` | Array of objects | Yes | The certificates to install for this session. Maximum 3 entries. |
| `certificateId` | String | Yes | The `media_id` returned by the upload API. |
| `password` | String | No | Overrides the password stored with a `.pfx` certificate at upload time. |

<Tabs className="docs__val">
  <TabItem value="json" label="JSON" default>

```json
{
  "LT:Options": {
    "platformName": "Android",
    "deviceName": "Pixel 7",
    "platformVersion": "14",
    "isRealMobile": true,
    "app": "lt://APP1234567890",
    //highlight-start
    "customCertificates": [
      { "certificateId": "MEDIA9f2c4b18a7d54e3ba0c6f19d2e8b7c05" },
      {
        "certificateId": "MEDIA4a71e0c93f6d48b2915ac8de7b04f6a1",
        "password": "s3cret"
      }
    ]
    //highlight-end
  }
}
```

  </TabItem>
  <TabItem value="java" label="Java">

```java
Map<String, Object> caCert = new HashMap<>();
caCert.put("certificateId", "MEDIA9f2c4b18a7d54e3ba0c6f19d2e8b7c05");

Map<String, Object> identity = new HashMap<>();
identity.put("certificateId", "MEDIA4a71e0c93f6d48b2915ac8de7b04f6a1");
identity.put("password", System.getenv("CERT_PASSWORD"));

ltOptions.put("isRealMobile", true);
//highlight-next-line
ltOptions.put("customCertificates", List.of(caCert, identity));

capabilities.setCapability("LT:Options", ltOptions);
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
lt_options = {
    "platformName": "iOS",
    "deviceName": "iPhone 14",
    "platformVersion": "17",
    "isRealMobile": True,
    "app": "lt://APP1234567890",
    #highlight-start
    "customCertificates": [
        {"certificateId": "MEDIA9f2c4b18a7d54e3ba0c6f19d2e8b7c05"},
        {"certificateId": "MEDIA4a71e0c93f6d48b2915ac8de7b04f6a1",
         "password": os.environ["CERT_PASSWORD"]},
    ],
    #highlight-end
}
```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">

```js
const capabilities = {
  'LT:Options': {
    platformName: 'Android',
    deviceName: 'Galaxy S23',
    platformVersion: '14',
    isRealMobile: true,
    app: 'lt://APP1234567890',
    //highlight-start
    customCertificates: [
      { certificateId: 'MEDIA9f2c4b18a7d54e3ba0c6f19d2e8b7c05' },
      { certificateId: 'MEDIA4a71e0c93f6d48b2915ac8de7b04f6a1',
        password: process.env.CERT_PASSWORD },
    ],
    //highlight-end
  },
};
```

  </TabItem>
  <TabItem value="yaml" label="YAML">

```yaml
customCertificates:
  - certificateId: "MEDIA9f2c4b18a7d54e3ba0c6f19d2e8b7c05"
  - certificateId: "MEDIA4a71e0c93f6d48b2915ac8de7b04f6a1"
    password: "s3cret"
```

  </TabItem>
</Tabs>

:::note
Capabilities are validated before a device is allocated. The session request fails with a `400` if an entry is malformed, a `certificateId` is missing, you specify more than three certificates, a format rule is broken, or an ID does not exist on your account. No session time or concurrency slot is used.
:::

---

## Password Requirements

- **`.pfx` bundles:** a password is mandatory. If the bundle does not have one, pass an empty string (`""`).
- **`.crt`, `.cer`, and `.mobileconfig`:** the password field is not used.
- A `password` set in the capability **takes precedence** over the one stored at upload time. This is useful when a bundle is reissued and you have not re-uploaded it yet.

:::tip Handling PKCS#12 passwords
Supply the password once at upload time and leave it out of your capabilities. It is stored securely and applied automatically in every session that uses the certificate.

If you do pass it in capabilities, read it from an environment variable or your CI secret store instead of hardcoding it. Certificate passwords are redacted from session logs.
:::

---

## Step 3: Read the Installation Result

Certificates are installed **after the app is installed and before your test starts**. Each certificate reports its own status in the **session logs** on the Automation dashboard, so you can see exactly which ones installed successfully.

:::info
If a certificate fails to install, your session **does not fail**. The session starts and your test runs, so you can decide whether the missing certificate affects the scenario you are testing.
:::

---

## What Happens on the Device

<Tabs className="docs__val">
  <TabItem value="android" label="Android" default>

- A **CA certificate** is added to the device's user trust store, under a name derived from your filename. Existing trusted certificates on the device are not removed.
- A **PKCS#12 identity** is installed into the device keystore and then granted to the app under test. On Android, an app cannot access a key unless it has been granted access to it.

:::warning Android Apps Must Opt In to User CAs
Since **Android 7**, an app trusts user-installed CA certificates only if its network security configuration allows it. Installing the CA on the device is **not enough on its own**. If your app uses the default configuration, it will still reject the connection.

In the build you are testing, add a `network_security_config.xml` file that trusts the `user` certificate store:

```xml
<network-security-config>
    <base-config>
        <trust-anchors>
            <certificates src="system" />
            <certificates src="user" />
        </trust-anchors>
    </base-config>
</network-security-config>
```
:::

  </TabItem>
  <TabItem value="ios" label="iOS">

- Certificates are delivered to the device as a **managed configuration profile**, installed and trusted without any manual step on the device.
- A `.mobileconfig` file keeps its own identifier and payload, so a profile that you have already validated in your own environment behaves the same way here.

:::note
Installation is asynchronous on iOS, so a certificate may briefly report as **pending**. This means the device management channel has accepted it, but the device has not confirmed it yet. The status updates automatically shortly after the session starts.
:::

  </TabItem>
</Tabs>

:::note
Each additional certificate increases session start time slightly, because every certificate is installed and confirmed before your test begins.
:::

---

## Limits and Validation Rules

| Rule | Value | What happens if you exceed it |
|---|---|---|
| Certificates per session | **3** | Session request rejected with `400` |
| Certificate file size | **15 MB** | Upload rejected |
| `certificateId` | Required on every entry | Session request rejected with `400` |
| Password on `.pfx` | Required. Pass `""` if the bundle has none | Session request rejected with `400` |
| `isRealMobile` | Must be `true` | Session request rejected with `400` |
| Browser automation | Not supported | Session request rejected with `400` |
| Organization entitlement | Must be enabled | Session request rejected with `400` |

---

## FAQs

**Q: My CA installs successfully but the app still rejects the connection. Why?**

On Android, this is almost always caused by the network security configuration. Since Android 7, apps do not trust user-installed CA certificates unless their `network_security_config.xml` explicitly allows it. The certificate is installed on the device, but your app is not configured to trust it.

Build a test variant that trusts the `user` certificate store, and use that build for these runs.

**Q: Does a failed certificate fail my test?**

No. The session starts and your test runs regardless. Each certificate reports its own status, so you can see which ones installed and decide whether a missing certificate affects the scenario you are testing.

**Q: Will another customer's session see my certificate?**

No. Certificates are installed for a specific session on a specific device, and are removed when that session ends, including when a session times out or is stopped early. Each device is verified before it returns to the device pool. If a certificate is still present, the device is held back instead of being allocated to another user.

---

## Additional Links

- [Certificate Injection on Real Devices (Manual App Testing)](/support/docs/certificate-injection-on-realdevice/)
- [Desired Capabilities in Appium](/support/docs/desired-capabilities-in-appium/)
- [Uploading Files and Media on Real Devices](/support/docs/upload-media/)

---

Need help with something this page does not cover, such as an unlisted certificate format, more than three certificates in a session, or a failed installation? Reach out to our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**[24×7 Chat Support]**</span> or email **support@testmuai.com**.
