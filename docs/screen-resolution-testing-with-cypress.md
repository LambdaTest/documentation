---
id: screen-resolution-cypress
title: Test On Different Screen Resolutions In Cypress
hide_title: true
sidebar_label: Test On Different Screen Resolutions
description: Run your Cypress automation scripts across different screen resolutions on TestMu AI.
keywords:
  - cypress screen resolution test
  - test on different screen resolution cypress
  - testmu ai cypress
url: https://www.testmu.ai/support/docs/screen-resolution-testing-with-cypress/
site_name: LambdaTest
slug: screen-resolution-testing-with-cypress/
canonical: https://www.testmu.ai/support/docs/screen-resolution-testing-with-cypress/
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
          "name": "Cypress Testing On Different Screen Resolutions",
          "item": `${BRAND_URL}/support/docs/screen-resolution-testing-with-cypress/`
        }]
      })
    }}
></script>

# Cypress Testing On Different Screen Resolutions
---

As part of a responsive design process, it is important to ensure that websites or web applications under test run properly on different screen sizes. 

<BrandName /> lets you test websites with Cypress across different screen resolutions on over 50+ browser versions on cloud.

Cypress provides website testing on different resolutions using

* Viewports
* Full Screen mode


## Test on Viewports
---

When you define a viewport, Cypress automatically uses the browser's scaling capabilities to customize the size of the web application. Therefore, on defining a large viewport, Cypress will scale down the web application. If you specify a small viewport, Cypress will upscale it.

To set the viewport's width and height globally, you need to define `viewportWidth` and `viewportHeight` in the Cypress configuration file.

**Syntax**

```js
cy.viewport(550, 750) // Set viewport to 550px x 750px
cy.viewport('iphone-6') // Set viewport to 375px x 667px
```
For more details, please check the [official Cypress documentation](https://docs.cypress.io/api/commands/viewport#Syntax).
## Test on Full Screen mode
---

:::tip
The use of full-screen mode in conjunction with viewports can help you achieve good results when performing screen resolution testing for web applications.
:::

To test your web applications in full screen mode, use the following event to change the browser options.

```js
before:browser:launch
```

For **Cypress v9 and below**, use the following script in the `plugin/index.js` file.

```js
module.exports = (on, config) => {
  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.family === 'chromium' && browser.name !== 'electron') {
      launchOptions.args.push('--start-fullscreen')
  
      return launchOptions
    }
  
    if (browser.name === 'electron') {
      launchOptions.preferences.fullscreen = true
  
      return launchOptions
    }
  })
}
```

For **Cypress v10 and above**, you can add the below code in `cypress.config.js` file.

```js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push('--start-fullscreen')
      
          return launchOptions
        }
      
        if (browser.name === 'electron') {
          launchOptions.preferences.fullscreen = true
      
          return launchOptions
        }
      })
    }
  }
})
```



