---
id: custom-chrome
title: How to Upload a Custom Chrome Profile on TestMu AI
toc_max_heading_level: 2
hide_title: true
sidebar_label: "Upload Custom Chrome Profile"
description: Upload and use a custom Chrome profile in Selenium tests on TestMu AI to run tests with specific extensions and settings.
keywords:
  - upload custom chrome profile selenium
  - custom chrome profile automation testing
  - chrome browser profile testmu ai
  - configure chrome profile selenium grid
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/upload-custom-chrome-profile/
site_name: TestMu AI
slug: upload-custom-chrome-profile/
canonical: https://www.testmuai.com/support/docs/upload-custom-chrome-profile/
---
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
          "name": "Upload Custom Chrome Profile",
          "item": `${BRAND_URL}/support/docs/upload-custom-chrome-profile/`
        }]
      })
    }}
></script>

# How to Upload a Custom Chrome Profile on TestMu AI
***
Custom Chrome profiles allow you to simulate a real-user environment with specific browser settings. Learn how to upload a custom Chrome profile to run your automated tests on TestMu AI. 

## Uploading Your Custom Chrome Profile
---
Zip your Chrome profile folder and upload it to the TestMu AI cloud using the API. The `browserProfile` capability used below is one of the many [Selenium automation capabilities](/support/docs/selenium-automation-capabilities/) you can pass to a test session.

### Before You Begin
---
1. Create or locate the Chrome profile folder you want to use.
2. Get your API authorization credentials from your [TestMu AI dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).

### Steps
---
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
---
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
---
Review these constraints before uploading your custom Chrome profile.

* The compressed zip file must not exceed 100 MB.

* Ensure that you compress the exact profile folder. Compressing the parent folder or a subfolder causes the functionality to fail.

Once your profile is in place, you can pair it with other run modes, such as when you run headless Selenium tests, to mirror a real-user environment without a visible browser.

## Next Steps
---

Continue with these related guides:

- [Perform Selenium Automation on Headless Browsers](/support/docs/perform-selenium-automation-on-headless-browsers/)
- [IE Mode on Edge](/support/docs/ie-mode-on-edge/)
- [Selenium Automation Capabilities](/support/docs/selenium-automation-capabilities/)

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
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
        Upload Custom Chrome Profile
      </span>
    </li>
  </ul>
</nav>
