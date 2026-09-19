---
id: setup-pre-run-executable
title: How to Run a Pre-Test Executable on TestMu AI
toc_max_heading_level: 2
hide_title: true
sidebar_label: "Run a Pre-Test Script"
description: Run a pre-run executable before your Selenium tests on TestMu AI to install certificates, dependencies, or set up the test environment.
keywords:
  - pre-run executable selenium custom certificate
  - install certificate VM automation test
  - prerun post-run script selenium
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/setup-pre-run-executable/
site_name: TestMu AI
slug: setup-pre-run-executable/
canonical: https://www.testmuai.com/support/docs/setup-pre-run-executable/
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
          "name": "Install Custom Certificates on the VM Through Pre-run-executables",
          "item": `${BRAND_URL}/support/docs/setup-pre-run-executable/`
        }]
      })
    }}
></script>

# How to Run a Pre-Test Executable on TestMu AI
---
Pre-run executables let you run custom scripts before the Selenium test starts. Use this feature to install user custom certificates that are required for test cases to execute successfully.

To use certificates for Selenium tests, you need 3 things:

* Certificate file.
* The script that installs the certificate in the Virtual Machine (VM).
* The script that deletes the certificate in the VM.

## Instructions
---

Upload your certificate file, installation, and uninstallation script using the below steps. The `prerun` and `lambda:userFiles` keys shown here are part of the broader set of [Selenium automation capabilities](/support/docs/selenium-automation-capabilities/) you can pass to a test.

1. Upload your certificate using the below command.

```bash
curl --location --request POST '<https://api.lambdatest.com/automation/api/v1/user-files>'
```
2. Install the certificate on macOS using the following command.

```bash
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain /Users/ltuser/Downloads/{CERTIFICATE-FILE-NAME}
```
3. Install the certificate on Windows using the below command.

```bash
Import-Certificate -FilePath "C:\Users\ltuser\Downloads\{NAME-OF-THE-CERTIFICATE}" -CertStoreLocation 'Cert:\LocalMachine\Root' -Verbose
```

4. Use the following cURL request to upload pre and post run files altogether.

```bash
curl --request POST \
  --url <https://api.lambdatest.com/automation/api/v1/files> \
  --header 'Authorization: Basic {TOKEN}' \
  --header 'Content-Type: multipart/form-data' \
  --header 'cache-control: no-cache,no-cache,no-cache' \
  --header 'content-type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' \
  --form pre_run_file=@{PATH-TO-CERTIFIFICATE-INSTALLATION-SCRIPT} \
  --form post_run_file=@{PATH-TO-CERTIFICATE-DELETION-SCRIPT} \
  --form 'name={NAME-OF-YOUR-PRERUN}' 
  ```

5. Run the below capabilities to use the certificate, pre, and post run files in a test.

```bash
"lambda:userFiles": ["certificate.p12"],
"prerun": {
        "accessKey": "****",
        "background": False,
        "filePath": "<organization-id>/uploads/install_certificate.ps1",
        "postAction": {
            "filePath": "xyz/post/delete_certificate.ps1",
            "url": "<https://api.lambdatest.com/automation/api/v1/files/download>"
        },
        "url": "<https://api.lambdatest.com/automation/api/v1/files/download>",
        "user": "****"
    },
```


> **Note:** Replace `{TOKEN}`, `{PATH-TO-CERTIFICATE-FILE}`, `{PATH-TO-CERTIFICATE-INSTALLATION-SCRIPT}`, `{PATH-TO-CERTIFICATE-DELETION-SCRIPT}`, `{NAME-OF-YOUR-PRERUN}` with the appropriate values. 

6. After uploading your pre-run script, reach out to us via chat support or email to get the scripts approved.

7. Once your script is approved, pass the `prerun` key in the capability as follows:

```bash
"prerun": {
    "url": "{NAME-OF-YOUR-PRERUN}/pre/{NAME-OF-YOUR-CERTIFICATE-INSTALLATION-SCRIPT}",
 },
```
> **Note:** Replace `{NAME-OF-YOUR-PRERUN}` as provided in **Step 1** and `{NAME-OF-YOUR-CERTIFICATE-INSTALLATION-FILE-NAME}` with the name of the certificate installation script that you uploaded in **Step 1**.

## Leverage the Use of APIs to Pre-run Tests
---

Use the following prerun APIs to manage pre-run files. If you are still setting up your environment, first learn how to run your first Selenium test before adding pre-run scripts to the flow.

* **GET/`files`:** Fetch all pre run files uploaded by the user.
* **POST/`files`:** Upload pre run executable file to lambda storage.
* **DELETE/`files`/`delete`:** Delete pre run from lambda storage.
* **POST/`files`/`validate`:** Check if the file is approved by TestMu AI.
* **PUT/`files`/`download`:** Download pre run executable file. 

> **Note:** To learn more about our APIs, check out our [API Documentation](https://www.testmuai.com/support/api-doc/). 

## Sample Certificate Installation and Uninstallation File (macOS)
---

Replace the placeholder values in each script file before use.

* In `install_certificate.sh` replace `{CERTIFICATE-FILE-NAME}` with the certificate file name.
* In `delete_certificate.sh` replace `{CERTIFICATE-NAME}` with the certificate name (use **Keychain Access** to find the certificate name).

Following are the contents of the sample file:

**For Installing:**
```bash
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain /Users/ltuser/Downloads/{CERTIFICATE-FILE-NAME}
```

**For Deleting:**
```bash
sudo security delete-certificate -c "Local Certificate"
```

## Sample Certificate Installation and Uninstallation File (Windows)
---

Replace the placeholder values in each script file before use.

* In `install_certificate.ps1` replace `{CERTIFICATE-FILE-NAME}` with the certificate file name.
* In `delete_certificate.ps1` replace `{CERTIFICATE-NAME}` with the certificate name.

Following are the contents of the sample file:

**For Installing:**
```bash
Import-Certificate -FilePath "C:\Users\ltuser\Downloads\{NAME-OF-THE-CERTIFICATE}" -CertStoreLocation 'Cert:\LocalMachine\Root' -Verbose
```
**For Deleting:**
```bash
Get-ChildItem Cert:\CurrentUser\Root\{THUMBPRINT-OF-THE-CERTIFICATE} | Remove-Item
```

>Got any questions?<br/>
Please reach out at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24x7 Chat Support**</span> or you could also mail us at support@testmuai.com.

## Next Steps
---

Continue with these related guides:

- [Selenium Automation Capabilities](/support/docs/selenium-automation-capabilities/)
- [Running Your First Selenium Test](/support/docs/testmu-running-your-first-selenium-test/)

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
        Setup Pre-run Executable
      </span>
    </li>
  </ul>
</nav>
