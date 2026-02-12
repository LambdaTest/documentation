---
id: custom-chrome
title: How to Upload Custom Chrome Profile on TestMu AI
hide_title: true
sidebar_label: Custom Chrome Profile
description: Learn how to upload custom Chrome profile to run your automated tests on TestMu AI.
keywords:
- custom chrome profile
- upload custom chrome profile
- create custom chrome profile
- custom chrome profile testmu ai
url: https://www.testmuai.com/support/docs/upload-custom-chrome-profile/
site_name: TestMu AI
slug: upload-custom-chrome-profile/
canonical: https://www.testmuai.com/support/docs/upload-custom-chrome-profile/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


# How to Upload Custom Chrome Profile?
***

Custom Chrome profiles allow you to simulate a real-user environment with specific browser settings. Learn how to upload a custom Chrome profile to run your automated tests on <BrandName />. 

## Uploading Your Custom Chrome Profile
***

Below are the steps to upload custom Chrome profile on <BrandName />:

1. Zip the custom Chrome profile folder and upload it to <BrandName /> cloud servers using the API below:

```bash
curl --location --request POST 'https://api.lambdatest.com/automation/api/v1/files/profile/chrome' \

--header 'Authorization: Basic xxxxxx' \

--form 'profile=@"/Users/abc/Desktop/zip.zip"'
```

After you upload the compressed file, a similar URL will be generated: 

```json
https://automation-prod-user-files.s3.amazonaws.com/profile/chrome/orgId-2939/zip.zip
```

2. Add the above generated URL in your test script using the `"browserProfile"`capability as shown below:

```sql
"browserProfile":"https://automation-prod-user-files.s3.amazonaws.com/profile/chrome/orgId-242939/zip.zip"
```

## Managing Your Custom Chrome Profiles
---

* **To View the List of Uploaded Profiles**: Use the below cURL command:

```bash
curl --location --request GET 'https://api.lambdatest.com/automation/api/v1/files/profile/chrome' \
--header 'Authorization: Basic your_auth_key'
```

* **To Delete the List of Uploaded Profiles**: Use the below cURL command:

```bash
curl --location --request DELETE 'https://api.lambdatest.com/automation/api/v1/files/profile/chrome' \
--header 'Authorization: Basic your_auth_key' \
--header 'Content-Type: application/json' \
--data-raw '{"key": "zip.zip"}'
```

## Important Notes
---

* The compressed zip file must not exceed 100 MB.

* Ensure that you compress the exact profile folder. Compressing the parent folder or a subfolder will cause the functionality to fail.





















