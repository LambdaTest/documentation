---
id: ui-inspector
title: UI Inspector
hide_title: false
sidebar_label: UI Inspector
description: Inspect and interact with mobile app elements using TestMu AI UI Inspector. Visualize the DOM, identify elements, and generate automation Xpaths for efficient testing.
keywords:
- ui inspector 
url: https://www.testmuai.com/support/docs/ui-inspector/
site_name: TestMu AI
slug: ui-inspector/
canonical: https://www.testmu.ai/support/docs/ui-inspector/
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
          "name": "UI Inspector",
          "item": `${BRAND_URL}/support/docs/ui-inspector/`
        }]
      })
    }}
></script>
<BrandName /> UI App Inspector provides a graphical interface to inspect and interact with the elements of a mobile application. When you launch your mobile app, it retrieves the DOM (Document Object Model) of the app. This DOM includes various UI elements such as buttons, text fields, labels, etc., organised in a hierarchical structure.

## Benefits of UI Inspector

- **DOM Representation:** It visually represents the DOM of the mobile application in a tree-like structure. This representation helps testers and developers understand the layout and structure of the app's UI.
- **Visual Representation:** It provides a graphical interface where you can expand and collapse nodes to view the elements nested within other elements. You can also select individual elements within the DOM by tapping on them.
- **Element Identification:** When you select an element, it provides information about that element, such as its type, attributes, and location within the DOM. This information helps in identifying elements uniquely for automation purposes.
- **Automation:** It aids in generating Xpath by providing information about the elements in the DOM. Test scripts can locate and interact with UI elements by referencing their properties in the DOM. For example, you can create Xpath to tap on a button by specifying its unique identifier, XPath expression, or accessibility label within the DOM.

<BrandName /> UI Inspector is divided into various components such as 

- Search Bar
- Hierarchy View
- Properties Table
- Application Control
- Screenshot View

Let's have a detailed look at each of these components:

### Search Bar

- The Search Bar is a feature that allows users to quickly locate specific elements within the mobile application's DOM (Document Object Model).
- Users can enter locator strategies in the Search Bar to find the corresponding elements within the DOM.

### Hierarchy View

- The Hierarchy View provides a visual representation of the DOM structure of the mobile application.
- It presents the elements in a hierarchical tree-like format, where parent-child relationships are clearly depicted.
- You can also select and inspect an hybrid app which has a webview using the drop down.

### Properties Table

- The Properties Table displays detailed information about the selected UI element from the DOM.
- It includes various properties such as element type, attributes, accessibility labels, coordinates, and other relevant metadata.
- Users can refer to the Properties Table to obtain essential details about the selected element, which are instrumental in identifying and interacting with it programmatically.

### Application Control

- **Refresh Dump:** The "Refresh Dump" feature allows users to synchronize the inspection tool with the current state of the mobile application.
- **Relaunch App:** The "Relaunch App" feature allows users to restart the currently running instance of the mobile application.

### ScreenshotView

- The Screenshot View provides a comprehensive overview of the mobile application's user interface elements, presented in a visual representation typically in the form of a screenshot dump.
- Users can click on individual elements within the screenshot dump, triggering simultaneous highlighting of the corresponding element in both the Hierarchy View and the Properties Table, facilitating quick navigation and detailed inspection.

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
        Real Device App Testing
      </span>
    </li>
  </ul>
</nav>
