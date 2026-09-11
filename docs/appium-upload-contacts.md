---
id: appium-upload-contacts
title: Upload Contacts on Real Devices
hide_title: true
sidebar_label: Upload Contacts
description: Upload custom .vcf contact files to real Android and iOS devices and inject them into the native Contacts app before your test session begins.
keywords:
  - contacts upload
  - vcf upload
  - vcard
  - app test automation
  - upload contacts
  - real devices
  - app testing
  - TestMu AI
url: https://www.testmuai.com/support/docs/upload-contacts/
site_name: TestMu AI
slug: upload-contacts/
canonical: https://www.testmuai.com/support/docs/upload-contacts/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RealDeviceTag from '../src/component/realDevice';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';

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
          "name": "Upload Contacts on Real Devices",
          "item": `${BRAND_URL}/support/docs/upload-contacts/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/upload-contacts/"
    },
    "headline": "Upload Contacts on Real Devices",
    "description": "Upload custom .vcf contact files to real Android and iOS devices and inject them into the native Contacts app before your test session begins.",
    "url": "https://www.testmuai.com/support/docs/upload-contacts/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "App Automation",
    "keywords": [
      "contacts upload",
      "vcf upload",
      "vcard"
    ],
    "proficiencyLevel": "Beginner",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Response",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"media_url\": \"lt://MEDIAvcf_abc123def456\",\n  \"name\": \"contacts.vcf\",\n  \"status\": \"success\",\n  \"custom_id\": \"my-contacts\",\n  \"contact_count\": 12\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 2: Set the Capability in Your Test Script",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "desired_capabilities = {\n  \"uploadMedia\": [\"lt://MEDIAf446d4170cd946aa9ec307d10cb679b9\", \"lt://MEDIA8d13e569b3e140c18e82b066022518bd\"]\n}"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Upload Contacts (.vcf) on Real Devices",
      "description": "Preload contacts on real devices before your test session begins. Upload .vcf (vCard) contact files using the Upload Media API, and they are automatically injected into the device's native Contacts app when your session starts. This is useful for testing: Messaging and dialer apps CRM and contact management apps Social apps with contact picker flows Any app that reads from the device's contact list",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Upload a VCF File",
          "text": "Upload your .vcf file using the Upload Media API. {curl --user \"${YOURLAMBDATESTUSERNAME()}:${YOURLAMBDATESTACCESSKEY()}\" -X POST \"https://api.lambdatest.com/mfs/v1.0/media/upload\" -F \"mediafile=@\"/path/to/contacts.vcf\"\" -F \"type=contact\" -F \"custom_id=SampleContacts\" } Request Parameters media_file: The .vcf contact file to upload from your local system. type: Set to contact for vCard files (Optional) custom_id: A custom identifier for the uploaded file. Use the media_url from the response in the next step.",
          "url": "https://www.testmuai.com/support/docs/upload-contacts/#step-1-upload-a-vcf-file"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Set the Capability in Your Test Script",
          "text": "Once the contacts are uploaded to TestMu AI's cloud, set the uploadMedia capability to the mediaurl** parameter returned in the API response. Each automation session permits a maximum of five file uploads. The contact file must be in vCard (.vcf) format. Maximum file size is 5 MB with up to 100 contacts per file. Home Support Upload Contacts on Real Devices",
          "url": "https://www.testmuai.com/support/docs/upload-contacts/#step-2-set-the-capability-in-your-test-script"
        }
      ]
    }
  ]) }}
/>

# Upload Contacts (.vcf) on Real Devices
<RealDeviceTag value="Real Device" />

Preload contacts on real devices before your test session begins. Upload `.vcf` (vCard) contact files using the Upload Media API, and they are automatically injected into the device's native Contacts app when your session starts.

This is useful for testing:
- Messaging and dialer apps
- CRM and contact management apps
- Social apps with contact picker flows
- Any app that reads from the device's contact list

---

## Supported Devices

| Platform | Minimum OS Version |
|----------|--------------------|
| Android  | 10 and above       |
| iOS      | 14 and above       |

---

## Step 1: Upload a VCF File

Upload your `.vcf` file using the Upload Media API.

### Request

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl --user "${YOUR_LAMBDATEST_USERNAME()}:${YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://api.lambdatest.com/mfs/v1.0/media/upload" -F "media_file=@"/path/to/contacts.vcf"" -F "type=contact" -F "custom_id=SampleContacts"`
}
</CodeBlock>
</div>

**Request Parameters**
- `media_file`: The `.vcf` contact file to upload from your local system.
- `type`: Set to `contact` for vCard files (Optional)
- `custom_id`: A custom identifier for the uploaded file.

### Response

```json
{
  "media_url": "lt://MEDIAvcf_abc123def456",
  "name": "contacts.vcf",
  "status": "success",
  "custom_id": "my-contacts",
  "contact_count": 12
}
```

Use the `media_url` from the response in the next step.

---

## Step 2: Set the Capability in Your Test Script

Once the contacts are uploaded to <BrandName />'s cloud, set the **uploadMedia** capability to the **media_url** parameter returned in the API response.

<VerifiedTag value="Verified" />

```python
desired_capabilities = {
  "uploadMedia": ["lt://MEDIAf446d4170cd946aa9ec307d10cb679b9", "lt://MEDIA8d13e569b3e140c18e82b066022518bd"]
}
```

:::note
- Each automation session permits a maximum of five file uploads.
- The contact file must be in vCard (`.vcf`) format.
- Maximum file size is 5 MB with up to 100 contacts per file.
:::

---

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
      Upload Contacts on Real Devices
      </span>
    </li>
  </ul>
</nav>
