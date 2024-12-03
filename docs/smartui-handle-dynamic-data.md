---
id: smartui-handle-dynamic-data
title: Handle Dynamic Data
sidebar_label: Dynamic Data
description: SmartUI can now phandle dynamic data
keywords:
  - lambdatest
  - smart ui
  - videos
  - storybook
url: https://www.lambdatest.com/support/docs/smartui-handle-videos/
site_name: LambdaTest
slug: smartui-handle-dynamic-data/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
          "name": "Handle Videos",
          "item": "https://www.lambdatest.com/support/docs/smartui-handle-dynamic-data/"
        }]
      })
    }}
></script>

When conducting visual tests, you may encounter scenarios where certain elements within your application change between test runs. These changes  might introduce inconsistencies in your test results.You can ignore / select specific element(s) to be removed from the comparison by parsing the options in the `smartuiSnapshot` function in the following way


<Tabs className="docs__val" groupId="framework">
<TabItem value="IgnoreID" label="Ignore ID" default>

```js title="This is a sample for your configuration for Javascript to ignore by ID"
let options = {
            ignoreDOM: {
                id: ["ID-1", "ID-2"],
            }
        }
        await driver.get('Required URL');
        await smartuiSnapshot(driver, 'Screenshot Name', options);
```

</TabItem>
<TabItem value="IgoreClass" label="Ignore Class">

```js title="This is a sample for your configuration for Javascript to ignore by Class"
let options = {
            ignoreDOM: {
                class: ["Class-1", "Class-2"],
            }
        }
        await driver.get('Required URL');
        await smartuiSnapshot(driver, 'Screenshot Name', options);
```

</TabItem>
<TabItem value="IgnoreXPath" label="Ignore XPath">

```js title="This is a sample for your configuration for Javascript to ignore by XPath"
let options = {
            ignoreDOM: {
                xpath: ["Xpath-1", "Xpath-2"],
            }
        }
        await driver.get('Required URL');
        await smartuiSnapshot(driver, 'Screenshot Name', options);
```

</TabItem>

<TabItem value="IgnoreSelector" label="Ignore CSS Selector">

```js title="This is a sample for your configuration for Javascript to ignore by CSS Selector"
let options = {
            ignoreDOM: {
                cssSelector: ["CSS-Selector-1", "CSS-Selector-2"],
            }
        }
        await driver.get('Required URL');
        await smartuiSnapshot(driver, 'Screenshot Name', options);
```
</TabItem>

</Tabs>

<Tabs className="docs__val" groupId="framework">
<TabItem value="SelectID" label="Select ID" default>

```js title="This is a sample for your configuration for Javascript to select by ID"
let options = {
            selectDOM: {
                id: ["ID-1", "ID-2"],
            }
        }
        await driver.get('Required URL');
        await smartuiSnapshot(driver, 'Screenshot Name', options);
```

</TabItem>
<TabItem value="SelectClass" label="Select Class">

```js title="This is a sample for your configuration for Javascript to select by Class"
let options = {
            selectDOM: {
                class: ["Class-1", "Class-2"],
            }
        }
        await driver.get('Required URL');
        await smartuiSnapshot(driver, 'Screenshot Name', options);
```

</TabItem>
<TabItem value="SelectXPath" label="Select XPath">

```js title="This is a sample for your configuration for Javascript to select by XPath"
let options = {
            selectDOM: {
                xpath: ["Xpath-1", "Xpath-2"],
            }
        }
        await driver.get('Required URL');
        await smartuiSnapshot(driver, 'Screenshot Name', options);
```

</TabItem>

<TabItem value="SelectSelector" label="Select CSS Selector">

```js title="This is a sample for your webhook configuration for Javascript to select by CSS Selector"
let options = {
            selectDOM: {
                cssSelector: ["CSS-Selector-1", "CSS-Selector-2"],
            }
        }
        await driver.get('Required URL');
        await smartuiSnapshot(driver, 'Screenshot Name', options);
```
</TabItem>
</Tabs>