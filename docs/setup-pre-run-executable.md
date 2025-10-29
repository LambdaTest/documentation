---
id: setup-pre-run-executable
title: Install Custom Certificates on the VM Through Pre-run-executables
hide_title: true
sidebar_label: Setup Pre-run Executable
description: Pre-run-executables allow you to run your custom scripts before the Selenium test is started. 
keywords:
  - local app testing
  - lambdatest local testing
  - lambdatest local tunnel
  - LambdaTest tunnel
  - local app testing for linux
  - TCP with TLS 1.2 secure connection
  - TCP with TLS 1.2 secure connection tunnel
  - shared TCP with TLS 1.2 secure connection
url: https://www.lambdatest.com/support/docs/setup-pre-run-executable/
site_name: LambdaTest
slug: setup-pre-run-executable/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Install Custom Certificates on the VM Through Pre-run-executables",
          "item": "https://www.lambdatest.com/support/docs/setup-pre-run-executable/"
        }]
      })
    }}
></script>

# Install Custom Certificates on the VM Through Pre-run-executables

* * *
Pre-run-executables allow you to run your custom scripts before the Selenium test is started. We can use this feature to install user custom certificates that are mandatory for test cases to execute successfully.

To use certificates for Selenium tests, we require 3 things:

* Certificate file.
* The script that installs the certificate in our Virtual Machine (VM).
* The script that deletes the certificate in our VM.

## Instructions

* * *
Upload your certificate file, installation, and uninstallation script using the below instructions.

1. Upload your certificate using the below command.

```bash
curl --location --request POST '<https://api.lambdatest.com/automation/api/v1/user-files>'
```
2. For installing certificate on macOS, use the following command.

```bash
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain /Users/ltuser/Downloads/{CERTIFICATE-FILE-NAME}
```
3. For installing certificate on Windows, use the below command.

```bash
Import-Certificate -FilePath "C:\Users\ltuser\Downloads\{NAME-OF-THE-CERTIFICATE}" -CertStoreLocation 'Cert:\LocalMachine\Root' -Verbose
```

4. Use the following cURL request to upload pre and post run file altogether.

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

5. Now run the below capabilities to use the certificate, pre and post run files in a test.

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


> **Note:** Replace `{TOKEN}`, `{PATH-TO-CERTIFICATE-FILE}`, `{PATH-TO-CERTIFICATE-INSTALLATION-SCRIPT}`, `{PATH-TO-CERTIFICATE-DELETION-SCRIPT}`, `{NAME-OF-YOUR-PRERUN}` with the appropriate value. 

6. After uploading your pre-run script, reach out to us either via chat support or email to get the scripts approved.

7. Once your script is approved, pass the `prerun` key in capability as

```bash
"prerun": {
    "url": "{NAME-OF-YOUR-PRERUN}/pre/{NAME-OF-YOUR-CERTIFICATE-INSTALLATION-SCRIPT}",
 },
```
> **Note:** Replace `{NAME-OF-YOUR-PRERUN}` as provided in **Step 1** and `{NAME-OF-YOUR-CERTIFICATE-INSTALLATION-FILE-NAME}` with the name of the certificate installation script that you uploaded in **Step 1**.

## Leverage the use of APIs to Pre-run Tests
***
Here are the `prerun` APIs:

* **GET/`files`:** Fetch all pre run files uploaded by the user.
* **POST/`files`:** Upload pre run executable file to our lambda storage.
* **DELETE/`files`/`delete`:** Delete pre run from our lambda storage.
* **POST/`files`/`validate`:** Check if the file is approved by LambdaTest.
* **PUT/`files`/`download`:** Download pre run executable file. 

> **Note:** To know more about our APIs, check out our [API Documentation](https://www.lambdatest.com/support/api-doc/). 

## Sample Certificate Installation and Uninstallation File (macOS)
***
* In `install_certificate.sh` replace `{CERTIFICATE-FILE-NAME}` with the certificate file name.
* In `delete_certificate.sh` replace `{CERTIFICATE-NAME}` with the certificate name (You can use the **Keychain Access** to find the certificate name.)

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
***
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
Please reach out at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24x7 Chat Support**</span> or you could also mail us at support@lambdatest.com.

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
        Setup Pre-run Executable
      </span>
    </li>
  </ul>
</nav>
