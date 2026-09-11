---
id: smartui-handle-dynamic-data
title: Handle Dynamic Data in Visual Tests
sidebar_label: Dynamic Data
description: Learn how to handle dynamic data in SmartUI visual regression tests by ignoring or selecting specific DOM elements that change between test runs.
keywords:
  - testmu ai
  - smart ui
  - dynamic data
  - ignore elements
  - select elements
  - visual testing
  - false positives
url: https://www.testmuai.com/support/docs/smartui-handle-dynamic-data/
site_name: TestMu AI
slug: smartui-handle-dynamic-data/
canonical: https://www.testmu.ai/support/docs/smartui-handle-dynamic-data/

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
          "name": "Handle Dynamic Data",
          "item": `${BRAND_URL}/support/docs/smartui-handle-dynamic-data/`
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
      "@id": "https://www.testmuai.com/support/docs/smartui-handle-dynamic-data/"
    },
    "headline": "Handle Dynamic Data in Visual Tests",
    "description": "Learn how to handle dynamic data in SmartUI visual regression tests by ignoring or selecting specific DOM elements that change between test runs.",
    "url": "https://www.testmuai.com/support/docs/smartui-handle-dynamic-data/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "SmartUI",
    "keywords": [
      "testmu ai",
      "smart ui",
      "dynamic data"
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
        "name": "Dynamic Data Handling Methods",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "let options = {\n    ignoreDOM: {\n        id: [\"element-id-1\", \"element-id-2\"],\n        class: [\"class-name-1\", \"class-name-2\"],\n        cssSelector: [\"selector-1\", \"selector-2\"],\n        xpath: [\"xpath-1\", \"xpath-2\"]\n    }\n}\nsmartuiSnapshot(driver, 'Screenshot Name', options);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Dynamic Data Handling Methods",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const { Builder } = require('selenium-webdriver');\nconst { smartuiSnapshot } = require('@lambdatest/selenium-driver');\n\nlet driver = await new Builder().forBrowser(\"chrome\").build();\nawait driver.get('https://example.com');\n\nlet options = {\n    ignoreDOM: {\n        id: [\"timestamp\", \"user-id\", \"session-token\"]\n    }\n};\nawait smartuiSnapshot(driver, 'Home Page', options);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 3",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "\nHashMap<String, ArrayList<String>> ignoreDOM = new HashMap<>();\nArrayList<String> ids = new ArrayList<>();\nids.add(\"timestamp\");\nids.add(\"user-id\");\nids.add(\"session-token\");\nignoreDOM.put(\"id\", ids);\n\nHashMap<String, Object> options = new HashMap<>();\noptions.put(\"ignoreDOM\", ignoreDOM);\n\nSmartUISnapshot.smartuiSnapshot(driver, \"Home Page\", options);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 4",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "from lambdatest import smartui_snapshot\n\noptions = {\n    \"ignoreDOM\": {\n        \"id\": [\"timestamp\", \"user-id\", \"session-token\"]\n    }\n}\nsmartui_snapshot(driver, \"Home Page\", options)"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 5",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "let options = {\n    ignoreDOM: {\n        class: [\"dynamic-content\", \"timestamp\", \"user-info\"]\n    }\n};\nawait smartuiSnapshot(driver, 'Home Page', options);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 6",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "ArrayList<String> classes = new ArrayList<>();\nclasses.add(\"dynamic-content\");\nclasses.add(\"timestamp\");\nclasses.add(\"user-info\");\nignoreDOM.put(\"class\", classes);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 7",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "options = {\n    \"ignoreDOM\": {\n        \"class\": [\"dynamic-content\", \"timestamp\", \"user-info\"]\n    }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 8",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "let options = {\n    ignoreDOM: {\n        cssSelector: [\n            \"#timestamp\",\n            \".user-info\",\n            \"[data-testid='session-token']\",\n            \"div.dynamic-content > span\"\n        ]\n    }\n};\nawait smartuiSnapshot(driver, 'Home Page', options);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 9",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "ArrayList<String> selectors = new ArrayList<>();\nselectors.add(\"#timestamp\");\nselectors.add(\".user-info\");\nselectors.add(\"[data-testid='session-token']\");\nignoreDOM.put(\"cssSelector\", selectors);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 10",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "options = {\n    \"ignoreDOM\": {\n        \"cssSelector\": [\n            \"#timestamp\",\n            \".user-info\",\n            \"[data-testid='session-token']\",\n            \"div.dynamic-content > span\"\n        ]\n    }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 11",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "let options = {\n    ignoreDOM: {\n        xpath: [\n            \"//div[@id='timestamp']\",\n            \"//span[@class='user-id']\",\n            \"//*[@data-testid='session-token']\"\n        ]\n    }\n};\nawait smartuiSnapshot(driver, 'Home Page', options);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 12",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "ArrayList<String> xpaths = new ArrayList<>();\nxpaths.add(\"//div[@id='timestamp']\");\nxpaths.add(\"//span[@class='user-id']\");\nxpaths.add(\"//*[@data-testid='session-token']\");\nignoreDOM.put(\"xpath\", xpaths);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 13",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "options = {\n    \"ignoreDOM\": {\n        \"xpath\": [\n            \"//div[@id='timestamp']\",\n            \"//span[@class='user-id']\",\n            \"//*[@data-testid='session-token']\"\n        ]\n    }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 14",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "let options = {\n    selectDOM: {\n        id: [\"element-id-1\", \"element-id-2\"],\n        class: [\"class-name-1\", \"class-name-2\"],\n        cssSelector: [\"selector-1\", \"selector-2\"],\n        xpath: [\"xpath-1\", \"xpath-2\"]\n    }\n}\nsmartuiSnapshot(driver, 'Screenshot Name', options);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 15",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "let options = {\n    selectDOM: {\n        id: [\"main-content\", \"header\", \"footer\"]\n    }\n};\nawait smartuiSnapshot(driver, 'Home Page', options);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 16",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "HashMap<String, ArrayList<String>> selectDOM = new HashMap<>();\nArrayList<String> ids = new ArrayList<>();\nids.add(\"main-content\");\nids.add(\"header\");\nids.add(\"footer\");\nselectDOM.put(\"id\", ids);\n\nHashMap<String, Object> options = new HashMap<>();\noptions.put(\"selectDOM\", selectDOM);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 17",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "options = {\n    \"selectDOM\": {\n        \"id\": [\"main-content\", \"header\", \"footer\"]\n    }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 18",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "let options = {\n    selectDOM: {\n        class: [\"product-card\", \"price\", \"description\"]\n    }\n};\nawait smartuiSnapshot(driver, 'Product Page', options);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 19",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "ArrayList<String> classes = new ArrayList<>();\nclasses.add(\"product-card\");\nclasses.add(\"price\");\nclasses.add(\"description\");\nselectDOM.put(\"class\", classes);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 20",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "options = {\n    \"selectDOM\": {\n        \"class\": [\"product-card\", \"price\", \"description\"]\n    }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 21",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "let options = {\n    selectDOM: {\n        cssSelector: [\n            \".main-content\",\n            \"#product-grid\",\n            \"[data-testid='product-list']\"\n        ]\n    }\n};\nawait smartuiSnapshot(driver, 'Product Page', options);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 22",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "ArrayList<String> selectors = new ArrayList<>();\nselectors.add(\".main-content\");\nselectors.add(\"#product-grid\");\nselectors.add(\"[data-testid='product-list']\");\nselectDOM.put(\"cssSelector\", selectors);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 23",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "options = {\n    \"selectDOM\": {\n        \"cssSelector\": [\n            \".main-content\",\n            \"#product-grid\",\n            \"[data-testid='product-list']\"\n        ]\n    }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 24",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "let options = {\n    selectDOM: {\n        xpath: [\n            \"//div[@class='main-content']\",\n            \"//section[@id='product-grid']\",\n            \"//ul[@data-testid='product-list']\"\n        ]\n    }\n};\nawait smartuiSnapshot(driver, 'Product Page', options);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 25",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "ArrayList<String> xpaths = new ArrayList<>();\nxpaths.add(\"//div[@class='main-content']\");\nxpaths.add(\"//section[@id='product-grid']\");\nxpaths.add(\"//ul[@data-testid='product-list']\");\nselectDOM.put(\"xpath\", xpaths);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 26",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "options = {\n    \"selectDOM\": {\n        \"xpath\": [\n            \"//div[@class='main-content']\",\n            \"//section[@id='product-grid']\",\n            \"//ul[@data-testid='product-list']\"\n        ]\n    }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 27",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "let options = {\n    selectDOM: {\n        cssSelector: [\".main-content\"]\n    },\n    ignoreDOM: {\n        id: [\"timestamp\", \"user-id\"]\n    }\n};\nawait smartuiSnapshot(driver, 'Home Page', options);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 28",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "let options = {\n    ignoreDOM: {\n        cssSelector: [\n            \".price\",\n            \".stock-count\",\n            \".review-count\",\n            \"[data-testid='timestamp']\"\n        ]\n    }\n};\nawait smartuiSnapshot(driver, 'Product Page', options);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 29",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "let options = {\n    selectDOM: {\n        cssSelector: [\n            \".dashboard-layout\",\n            \".navigation\",\n            \".sidebar\"\n        ]\n    },\n    ignoreDOM: {\n        class: [\"metric-value\", \"timestamp\", \"user-info\"]\n    }\n};\nawait smartuiSnapshot(driver, 'Dashboard', options);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 30",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "let options = {\n    ignoreDOM: {\n        id: [\"article-timestamp\", \"author-info\"],\n        class: [\"related-articles\", \"social-share-count\"]\n    }\n};\nawait smartuiSnapshot(driver, 'Article Page', options);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Troubleshooting",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "// Wait for element before snapshot\nawait driver.wait(until.elementLocated(By.id('timestamp')), 5000);\nlet options = {\n    ignoreDOM: {\n        id: [\"timestamp\"]\n    }\n};\nawait smartuiSnapshot(driver, 'Page', options);"
      }
    ],
    "dateModified": "2026-03-02T15:19:46+05:30"
  }) }}
/>

## What is Dynamic Data?

Dynamic data refers to content on your web pages that changes between test runs, such as timestamps, user IDs, session tokens, randomly generated content, or data that updates in real-time. When conducting visual regression tests, these dynamic elements can cause false positives because the content differs between the baseline and current screenshots, even when the actual UI design remains unchanged.

SmartUI provides two powerful options to handle dynamic data:

- **Ignore DOM Elements**: Exclude specific elements from visual comparison
- **Select DOM Elements**: Include only specific elements in visual comparison

:::tip Related Documentation
If you're experiencing high mismatch percentages or false positives, see our [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) for solutions. For project-level settings, check [Project Settings](/support/docs/smartui-project-settings).
:::

## When to Use Dynamic Data Handling

You should use dynamic data handling in the following scenarios:

1. **Timestamps and Dates**: Pages displaying current date/time that changes on each load
2. **User-Specific Content**: User IDs, usernames, or personalized content
3. **Session Tokens**: Authentication tokens or session identifiers
4. **Random Content**: Randomly generated IDs, UUIDs, or nonces
5. **Live Data**: Stock prices, weather data, or other real-time information
6. **Advertisements**: Rotating ads or promotional content
7. **Cookie Banners**: Consent banners that appear differently each time
8. **Notifications**: Unread message counts or notification badges

## Dynamic Data Handling Methods

<Tabs className='docs__val' groupId='dynamic-data-methods'>
<TabItem value='ignore' label='Ignore DOM Elements' default>

**Ignore DOM Elements**

Use `ignoreDOM` to exclude specific elements from visual comparison. This is useful when you want to compare the entire page but ignore certain dynamic elements.

**Syntax**

```javascript
let options = {
    ignoreDOM: {
        id: ["element-id-1", "element-id-2"],
        class: ["class-name-1", "class-name-2"],
        cssSelector: ["selector-1", "selector-2"],
        xpath: ["xpath-1", "xpath-2"]
    }
}
smartuiSnapshot(driver, 'Screenshot Name', options);
```

**Examples by Selector Type**

<Tabs className='docs__val' groupId='selector'>
<TabItem value='id' label='By ID' default>

**JavaScript (Selenium)**
```javascript
const { Builder } = require('selenium-webdriver');
const { smartuiSnapshot } = require('@lambdatest/selenium-driver');

let driver = await new Builder().forBrowser("chrome").build();
await driver.get('https://example.com');

let options = {
    ignoreDOM: {
        id: ["timestamp", "user-id", "session-token"]
    }
};
await smartuiSnapshot(driver, 'Home Page', options);
```

**Java (Selenium)**
```java

HashMap<String, ArrayList<String>> ignoreDOM = new HashMap<>();
ArrayList<String> ids = new ArrayList<>();
ids.add("timestamp");
ids.add("user-id");
ids.add("session-token");
ignoreDOM.put("id", ids);

HashMap<String, Object> options = new HashMap<>();
options.put("ignoreDOM", ignoreDOM);

SmartUISnapshot.smartuiSnapshot(driver, "Home Page", options);
```

**Python (Selenium)**
```python
from lambdatest import smartui_snapshot

options = {
    "ignoreDOM": {
        "id": ["timestamp", "user-id", "session-token"]
    }
}
smartui_snapshot(driver, "Home Page", options)
```

</TabItem>
<TabItem value='class' label='By Class'>

**JavaScript (Selenium)**
```javascript
let options = {
    ignoreDOM: {
        class: ["dynamic-content", "timestamp", "user-info"]
    }
};
await smartuiSnapshot(driver, 'Home Page', options);
```

**Java (Selenium)**
```java
ArrayList<String> classes = new ArrayList<>();
classes.add("dynamic-content");
classes.add("timestamp");
classes.add("user-info");
ignoreDOM.put("class", classes);
```

**Python (Selenium)**
```python
options = {
    "ignoreDOM": {
        "class": ["dynamic-content", "timestamp", "user-info"]
    }
}
```

</TabItem>
<TabItem value='css' label='By CSS Selector'>

**JavaScript (Selenium)**
```javascript
let options = {
    ignoreDOM: {
        cssSelector: [
            "#timestamp",
            ".user-info",
            "[data-testid='session-token']",
            "div.dynamic-content > span"
        ]
    }
};
await smartuiSnapshot(driver, 'Home Page', options);
```

**Java (Selenium)**
```java
ArrayList<String> selectors = new ArrayList<>();
selectors.add("#timestamp");
selectors.add(".user-info");
selectors.add("[data-testid='session-token']");
ignoreDOM.put("cssSelector", selectors);
```

**Python (Selenium)**
```python
options = {
    "ignoreDOM": {
        "cssSelector": [
            "#timestamp",
            ".user-info",
            "[data-testid='session-token']",
            "div.dynamic-content > span"
        ]
    }
}
```

</TabItem>
<TabItem value='xpath' label='By XPath'>

**JavaScript (Selenium)**
```javascript
let options = {
    ignoreDOM: {
        xpath: [
            "//div[@id='timestamp']",
            "//span[@class='user-id']",
            "//*[@data-testid='session-token']"
        ]
    }
};
await smartuiSnapshot(driver, 'Home Page', options);
```

**Java (Selenium)**
```java
ArrayList<String> xpaths = new ArrayList<>();
xpaths.add("//div[@id='timestamp']");
xpaths.add("//span[@class='user-id']");
xpaths.add("//*[@data-testid='session-token']");
ignoreDOM.put("xpath", xpaths);
```

**Python (Selenium)**
```python
options = {
    "ignoreDOM": {
        "xpath": [
            "//div[@id='timestamp']",
            "//span[@class='user-id']",
            "//*[@data-testid='session-token']"
        ]
    }
}
```

</TabItem>
</Tabs>

</TabItem>

<TabItem value='select' label='Select DOM Elements'>

**Select DOM Elements**

Use `selectDOM` to include only specific elements in visual comparison. This is useful when you want to compare only certain parts of the page, ignoring everything else.

**Syntax**

```javascript
let options = {
    selectDOM: {
        id: ["element-id-1", "element-id-2"],
        class: ["class-name-1", "class-name-2"],
        cssSelector: ["selector-1", "selector-2"],
        xpath: ["xpath-1", "xpath-2"]
    }
}
smartuiSnapshot(driver, 'Screenshot Name', options);
```

**Examples by Selector Type**

<Tabs className='docs__val' groupId='selector'>
<TabItem value='select-id' label='By ID' default>

**JavaScript (Selenium)**
```javascript
let options = {
    selectDOM: {
        id: ["main-content", "header", "footer"]
    }
};
await smartuiSnapshot(driver, 'Home Page', options);
```

**Java (Selenium)**
```java
HashMap<String, ArrayList<String>> selectDOM = new HashMap<>();
ArrayList<String> ids = new ArrayList<>();
ids.add("main-content");
ids.add("header");
ids.add("footer");
selectDOM.put("id", ids);

HashMap<String, Object> options = new HashMap<>();
options.put("selectDOM", selectDOM);
```

**Python (Selenium)**
```python
options = {
    "selectDOM": {
        "id": ["main-content", "header", "footer"]
    }
}
```

</TabItem>
<TabItem value='select-class' label='By Class'>

**JavaScript (Selenium)**
```javascript
let options = {
    selectDOM: {
        class: ["product-card", "price", "description"]
    }
};
await smartuiSnapshot(driver, 'Product Page', options);
```

**Java (Selenium)**
```java
ArrayList<String> classes = new ArrayList<>();
classes.add("product-card");
classes.add("price");
classes.add("description");
selectDOM.put("class", classes);
```

**Python (Selenium)**
```python
options = {
    "selectDOM": {
        "class": ["product-card", "price", "description"]
    }
}
```

</TabItem>
<TabItem value='select-css' label='By CSS Selector'>

**JavaScript (Selenium)**
```javascript
let options = {
    selectDOM: {
        cssSelector: [
            ".main-content",
            "#product-grid",
            "[data-testid='product-list']"
        ]
    }
};
await smartuiSnapshot(driver, 'Product Page', options);
```

**Java (Selenium)**
```java
ArrayList<String> selectors = new ArrayList<>();
selectors.add(".main-content");
selectors.add("#product-grid");
selectors.add("[data-testid='product-list']");
selectDOM.put("cssSelector", selectors);
```

**Python (Selenium)**
```python
options = {
    "selectDOM": {
        "cssSelector": [
            ".main-content",
            "#product-grid",
            "[data-testid='product-list']"
        ]
    }
}
```

</TabItem>
<TabItem value='select-xpath' label='By XPath'>

**JavaScript (Selenium)**
```javascript
let options = {
    selectDOM: {
        xpath: [
            "//div[@class='main-content']",
            "//section[@id='product-grid']",
            "//ul[@data-testid='product-list']"
        ]
    }
};
await smartuiSnapshot(driver, 'Product Page', options);
```

**Java (Selenium)**
```java
ArrayList<String> xpaths = new ArrayList<>();
xpaths.add("//div[@class='main-content']");
xpaths.add("//section[@id='product-grid']");
xpaths.add("//ul[@data-testid='product-list']");
selectDOM.put("xpath", xpaths);
```

**Python (Selenium)**
```python
options = {
    "selectDOM": {
        "xpath": [
            "//div[@class='main-content']",
            "//section[@id='product-grid']",
            "//ul[@data-testid='product-list']"
        ]
    }
}
```

</TabItem>
</Tabs>

</TabItem>

<TabItem value='combining' label='Combining Methods'>

**Combining ignoreDOM and selectDOM**

You can combine both `ignoreDOM` and `selectDOM` in the same options object. When both are specified, `selectDOM` is applied first to include elements, then `ignoreDOM` is applied to exclude specific elements from the selected set.

```javascript
let options = {
    selectDOM: {
        cssSelector: [".main-content"]
    },
    ignoreDOM: {
        id: ["timestamp", "user-id"]
    }
};
await smartuiSnapshot(driver, 'Home Page', options);
```

**Use Cases**

**Use Case 1: E-commerce Product Page**

**Scenario**: Product pages display prices, stock counts, and user reviews that change frequently.

**Solution**: Ignore dynamic pricing and review elements while comparing the overall layout.

```javascript
let options = {
    ignoreDOM: {
        cssSelector: [
            ".price",
            ".stock-count",
            ".review-count",
            "[data-testid='timestamp']"
        ]
    }
};
await smartuiSnapshot(driver, 'Product Page', options);
```

**Use Case 2: Dashboard with Real-time Data**

**Scenario**: Dashboard displays live metrics, timestamps, and user-specific data.

**Solution**: Select only the static layout elements for comparison.

```javascript
let options = {
    selectDOM: {
        cssSelector: [
            ".dashboard-layout",
            ".navigation",
            ".sidebar"
        ]
    },
    ignoreDOM: {
        class: ["metric-value", "timestamp", "user-info"]
    }
};
await smartuiSnapshot(driver, 'Dashboard', options);
```

**Use Case 3: News Article Page**

**Scenario**: Article pages have timestamps, author info, and related articles that change.

**Solution**: Ignore dynamic metadata while comparing article content.

```javascript
let options = {
    ignoreDOM: {
        id: ["article-timestamp", "author-info"],
        class: ["related-articles", "social-share-count"]
    }
};
await smartuiSnapshot(driver, 'Article Page', options);
```

</TabItem>

<TabItem value='best-practices' label='Best Practices'>

**Best Practices**

1. **Use Specific Selectors**: Prefer IDs or data attributes over generic class names for more precise targeting.

2. **Test Selectors First**: Verify your selectors work correctly before using them in visual tests.

3. **Document Your Choices**: Document why certain elements are ignored or selected for future reference.

4. **Combine Strategically**: Use `selectDOM` for broad filtering and `ignoreDOM` for fine-tuning.

5. **Avoid Over-ignoring**: Only ignore elements that are truly dynamic. Over-ignoring can hide real UI issues.

6. **Use Data Attributes**: Add `data-testid` attributes to elements you need to target for better test stability.

</TabItem>
</Tabs>

## Troubleshooting

<Tabs className='docs__val' groupId='troubleshooting'>
<TabItem value='elements-not-being-ignored' label='Elements Not Being Ignored' default>

**Issue: Elements Not Being Ignored**

**Possible Causes:**
- Selector is incorrect or doesn't match any elements
- Element is loaded dynamically after the snapshot
- Selector syntax error

**Solutions:**
1. Verify the selector using browser DevTools
2. Add a wait before taking the snapshot to ensure elements are loaded
3. Check selector syntax (CSS selectors vs XPath)

```javascript
// Wait for element before snapshot
await driver.wait(until.elementLocated(By.id('timestamp')), 5000);
let options = {
    ignoreDOM: {
        id: ["timestamp"]
    }
};
await smartuiSnapshot(driver, 'Page', options);
```

</TabItem>
<TabItem value='selectdom-not-working' label='selectDOM Not Working' >

**Issue: selectDOM Not Working**

**Possible Causes:**
- No elements match the selectors
- Elements are not visible at snapshot time
- Selector targets elements outside the viewport

**Solutions:**
1. Verify elements exist and are visible
2. Use more specific selectors
3. Ensure elements are in the viewport

</TabItem>
<TabItem value='false-positives-still-occurring' label='False Positives Still Occurring' >

**Issue: False Positives Still Occurring**

**Possible Causes:**
- Not all dynamic elements are ignored
- Elements change structure, not just content
- Timing issues with element loading

**Solutions:**
1. Review the diff to identify missed dynamic elements
2. Add more selectors to ignoreDOM
3. Increase wait times or use explicit waits

</TabItem>
</Tabs>

## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) - Detailed solutions for common issues
- [SmartUI SDK Configuration Options](/support/docs/smartui-sdk-config-options)
- [Handling Videos](/support/docs/smartui-handle-videos)
- [Handling Lazy Loading](/support/docs/smartui-handle-lazy-loading)
- [Smart Ignore Feature](/support/docs/smartui-smartignore)
- [Project Settings](/support/docs/smartui-project-settings) - Configure pixel thresholds and comparison settings
- [Baseline Management](/support/docs/smartui-baseline-management) - Learn how to manage baselines effectively
