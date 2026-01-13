---
id: smartui-cli-request-headers
title: Adding Custom Request Headers in SmartUI CLI
hide_title: false
sidebar_label: Custom Request Headers
description: Learn how to configure the SmartUI CLI to send custom HTTP headers for fetching protected assets during visual regression testing.
keywords:
    - smartui cli
    - custom request headers
    - http headers
    - visual testing configuration
    - smartui.json
    - protected assets
url: https://www.testmu.ai/support/docs/smartui-cli-request-headers
site_name: LambdaTest
slug: smartui-cli-request-headers
canonical: https://www.testmu.ai/support/docs/smartui-cli-request-headers/

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
         "name": "Custom Request Headers in SmartUI CLI",
         "item": `${BRAND_URL}/support/docs/smartui-cli-request-headers/`
       }]
     })
   }}
></script>

The SmartUI CLI includes a `requestHeaders` configuration option, allowing you to specify custom HTTP headers for fetching web assets during your visual testing workflow. This feature is essential for scenarios where resources like images, CSS, or scripts are located behind a protected environment that requires authentication via custom headers (e.g., a staging environment).

By including these headers in the SmartUI CLI configuration, you can seamlessly access protected resources, enhancing the flexibility and security of your automated visual testing process.

### Steps to Implement

1.  **Locate Your Configuration File**: Open your `smartui.json` file, which should be in the root directory of your project.
2.  **Add the `requestHeaders` Array**: If the array does not already exist, add it to the JSON structure.
3.  **Define Your Headers**: Inside the `requestHeaders` array, add a new object for each header you need to send. Each object must contain a single key-value pair representing the header's name and its value.
4.  **Save the File**: Once you save the changes, the SmartUI CLI will use this configuration for the next test run.

## Configuration in `smartui.json`

To use this feature, you need to add the `requestHeaders` array to your `smartui.json` configuration file. This array contains objects, where each object represents a key-value pair for a custom header. The CLI will automatically include these headers in all HTTP requests it makes to fetch assets for rendering the webpage.

### Example Configuration

Below is an example of how to configure custom headers in your `smartui.json` file.

```json title="smartui.json"
{
  "smartUI": {
    "project": "Your Project Name",
    "build": "Build Name"
  },
  "requestHeaders": [
    {
      "X-Custom-Header-1": "custom-value-1"
    },
    {
      "Authorization": "Bearer your-access-token"
    },
    {
        "X-Custom-Header-2": "custom-value-2"
    }
  ]
}
````

### Explanation

  * **`requestHeaders`**: An array of objects.
  * **Header Object**: Each object in the array defines a single HTTP header.
      * **Key**: The name of the HTTP header (e.g., `Authorization`, `X-Custom-Header-1`).
      * **Value**: The corresponding value for the header (e.g., `Bearer your-access-token`, `custom-value-1`).

:::note

  * You can define multiple headers by adding more objects to the `requestHeaders` array.
  * The headers defined in this configuration will be sent with every page load and asset request made by the SmartUI CLI during the test.
  * This feature is particularly useful for testing web applications in staging or development environments that are protected from public access.
:::
