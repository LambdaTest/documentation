# How to Upload Custom Chrome Profile?

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

Custom Chrome profiles allow you to simulate a real-user environment with specific browser settings. Learn how to upload a custom Chrome profile to run your automated tests on TestMu AI.

## Uploading Your Custom Chrome Profile

Zip your Chrome profile folder and upload it to the TestMu AI cloud using the API.

### Before You Begin

1. Create or locate the Chrome profile folder you want to use.
2. Get your API authorization credentials from your [TestMu AI dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).

### Steps

1. Zip the custom Chrome profile folder and upload it to TestMu AI cloud servers using the API below:

```bash
curl --location --request POST 'https://api.lambdatest.com/automation/api/v1/files/profile/chrome' \

--header 'Authorization: Basic xxxxxx' \

--form 'profile=@"/Users/abc/Desktop/zip.zip"'
```

After you upload the compressed file, a similar URL will be generated:

```json
https://automation-prod-user-files.s3.amazonaws.com/profile/chrome/orgId-2939/zip.zip
```

2. Add the above generated URL in your test script using the `"browserProfile"` capability as shown below:

```sql
"browserProfile":"https://automation-prod-user-files.s3.amazonaws.com/profile/chrome/orgId-242939/zip.zip"
```

## Managing Your Custom Chrome Profiles

View or delete uploaded Chrome profiles using the API commands below.

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

Review these constraints before uploading your custom Chrome profile.

* The compressed zip file must not exceed 100 MB.

* Ensure that you compress the exact profile folder. Compressing the parent folder or a subfolder causes the functionality to fail.
