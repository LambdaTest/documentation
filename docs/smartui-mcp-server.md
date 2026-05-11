---
id: smartui-mcp-server
title: Introducing SmartUI MCP Tool
hide_title: false
sidebar_label: SmartUI
description: Debug visual regressions with SmartUI MCP Tool. Get natural-language summaries of pixel, layout, DOM, and perceptual differences from SmartUI comparison runs.
keywords:
  - smartui
  - visual testing
  - visual regression testing
  - testmu ai
  - MCP
  - MCP server
url: https://www.testmuai.com/support/docs/smartui-mcp-server/
site_name: TestMu AI
slug: smartui-mcp-server/
canonical: https://www.testmuai.com/support/docs/smartui-mcp-server/

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
          "name": "Languages and Framework",
          "item": `${BRAND_URL}/support/docs/smartui-mcp-server/`
        }]
      })
    }}
></script>

# Getting Started with SmartUI MCP Tool
---

SmartUI MCP Tool is part of the [TestMu AI MCP Server](/support/docs/testmu-mcp-server/). It lets you debug visual regressions from SmartUI comparison runs by returning natural-language summaries of pixel, layout, DOM, and perceptual differences.


<div className="ytframe"> 
<div className="youtube" data-embed="2Z5F52XxSxQ" data-loading-attribute="eager">
  <div className="play-button"></div>
</div>
</div>

## How Does It Work?

---

The SmartUI MCP Tool processes visual comparison data by calling specific analysis capabilities with a `comparisonId`. Each capability simulates a different debugging layer: pixel diff, layout, DOM structure, and human perception.

The tool fetches the visual assets (screenshots, DOM snapshots, metadata) and returns natural-language outputs such as:

- "The CTA button lost color contrast, impacting accessibility."
- "Header layout shifted left due to padding changes."

## Capabilities

---

All capabilities take a `comparisonId` as input. Start with `analyzeSmartUIRun` for a full picture, then use the individual capabilities to investigate a specific layer.

### analyzeSmartUIRun

Runs analysis across all layers - pixel, layout, DOM, and perception - and returns a single consolidated summary. Use this first when a visual diff fails and you are not sure where to look.

> "The 'Subscribe' CTA lost its background color and dropped in emphasis. This is likely due to a CSS override on `.cta-btn`. Padding changes have also affected alignment. Suggest restoring background and resetting layout values."

### summarizePixelDiff

Use this when you suspect a color, image, or rendering change. It compares the baseline and current screenshots at the pixel level.

> "Significant pixel differences were detected in the hero banner and footer. These likely stem from background color changes and text shifts."

### summarizeLayoutDiff

Use this when elements appear misaligned or have moved. It identifies spacing, alignment, and size-related changes.

> "The login button has moved 16px downward compared to the baseline. This affects the visual balance of the form."

### summarizeDomDiff

Use this when you suspect an HTML or attribute change caused the visual difference. It compares the DOM structure between runs.

> "The `aria-label` for the submit button has been removed. The button also now includes an extra `disabled` attribute."

### analyzeHumanDiff

Use this when the diff looks minor technically but feels visually wrong. It simulates how a human eye perceives the change in terms of color, weight, and emphasis.

> "The pricing table appears visually heavier due to a font weight increase. This disrupts the balance between sections."

### getSmartUIResources

Fetches the screenshots, DOM snapshots, and metadata for a comparison run. Use this to confirm assets are available before running an analysis.

Returns a description of what was found and flags anything missing.

## How to Invoke

---

Once your MCP client is connected, use natural language to interact with the SmartUI tool. Example prompts:

- "Run a full SmartUI analysis on comparisonId `<id>`."
- "What changed in the layout for comparisonId `<id>`?"
- "Why did the visual diff fail for comparisonId `<id>`?"
- "Summarize the DOM changes for comparisonId `<id>`."

Your AI client will route the request to the appropriate analysis layer.

## Error Handling

---

If the `comparisonId` is invalid or resources are missing, you will receive:

> "Error analyzing SmartUI run: comparisonId not found or visual resources are incomplete."

<nav aria-label='breadcrumbs'>
  <ul className='breadcrumbs'>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className='breadcrumbs__item breadcrumbs__item--active'>
      <span className='breadcrumbs__link'>
        SmartUI MCP Tool
      </span>
    </li>
  </ul>
</nav>
