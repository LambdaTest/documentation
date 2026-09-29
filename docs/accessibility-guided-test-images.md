---
id: accessibility-guided-test-images
title: Images Guided Test
hide_title: false
sidebar_label: Images
description: The Images guided test finds every image on the page and checks its text alternative, including decorative images, images of text, and complex images such as charts.
keywords:
  - TestMu AI
  - Accessibility
  - DevTools
  - Guided Tests
  - Images
  - Alt Text
  - Text Alternative
url: https://www.testmuai.com/support/docs/accessibility-guided-test-images/
site_name: TestMu AI
slug: accessibility-guided-test-images/
canonical: https://www.testmuai.com/support/docs/accessibility-guided-test-images/
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
          "name": "Images Guided Test",
          "item": `${BRAND_URL}/support/docs/accessibility-guided-test-images/`
        }]
      })
    }}
></script>

# Images Guided Test

Screen reader users cannot see images. They hear the text alternative (alt text) of each image instead. If the text alternative is missing or wrong, they lose the information in the image.

The Images test finds the images on the page and checks whether each one has a correct text alternative. It also covers decorative images, images that contain text, and complex images such as charts.

## When to use this

Use this test on content-heavy pages, product listings, dashboards with charts, and any page where images carry information.

## Prerequisites

The <BrandName /> Accessibility Toolkit is installed. See [Install Toolkit](/support/docs/accessibility-testing-install-devtools/).

## What the test checks

| Rule | WCAG | Severity |
|---|---|---|
| Image has no text alternative | 1.1.1 (A) | Critical |
| Text alternative is a file name | 1.1.1 (A) | Serious |
| Informative image is marked as decorative | 1.1.1 (A) | Serious |
| Complex image has no long description | 1.1.1 (A) | Serious |
| Long description does not convey the essential information | 1.1.1 (A) | Serious |
| Text alternative does not describe the image | 1.1.1 (A) | Serious |
| Image contains text | 1.4.5 (AA) | Serious |
| Text alternative is generic or redundant | 1.1.1 (A) | Moderate |
| Image is hidden as decorative but has a text alternative | 1.1.1 (A) | Moderate |
| Decorative image has a text alternative | 1.1.1 (A) | Moderate |
| Image element does not expose an image role | 4.1.2 (A) | Moderate |
| Text alternative is very long | 1.1.1 (A) | Minor |

## Run the test

### Start the test

Open **Assisted Tests** in Accessibility DevTools and select **Images**. Turn on **Verify with AI** if you want AI to give the first answers. See [Start a guided test](/support/docs/accessibility-guided-tests/#start-a-guided-test).

### Review the detected images

The test finds standard images, SVG graphics, image buttons, and background images. It flags text alternatives that are missing, that are a file name, that are too general (for example "image"), or that are too long. If the test missed an image, click it on the page to add it.

{/* IMAGE PLACEHOLDER: List of detected images with their text alternatives
<img loading="lazy" src={require('/assets/images/accessibility-testing/guided-tests/images-list.png').default} alt="Detected images in the Images guided test" className="doc_img" width="1360" height="768" />
*/}

### Mark decorative images

Mark the images that carry no information, such as dividers and background patterns. The test then checks that screen readers skip them.

### Mark images of text

Mark images that contain text, such as banners with headings or text rendered as a picture. Real text is better because users can resize it and screen readers can read it.

### Review complex images

Mark charts, graphs, and diagrams. The test checks whether each one has a long description and asks you whether the description covers the essential information.

### Check the summary and finish

A summary screen shows all your answers before the test generates the report. Your progress is saved, so you can close the panel and continue later.

## How AI helps

With **Verify with AI** on, AI looks at each image and gives the first answer to these questions:

- Is the image decorative?
- Does the image contain text?
- Is the image complex?
- Does the text alternative describe the image?

You can change any answer on the summary screen.

## Related docs

- [Guided Tests](/support/docs/accessibility-guided-tests/)
- [Keyboard Guided Test](/support/docs/accessibility-guided-test-keyboard/)
- [Interactive Elements Guided Test](/support/docs/accessibility-guided-test-interactive-elements/)
