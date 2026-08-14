---
id: analytics-dashboard-copilot
title: Analytics Dashboard AI CoPilot
sidebar_label: CoPilot - AI
description: Analytics - Dashboard CoPilot to analyze your data, answer questions and build widgets from plain language
keywords:
  - analytics
  - dashboard copilot
  - ai widgets
  - natural language widgets
url: https://www.testmuai.com/support/docs/analytics-dashboard-copilot/
site_name: TestMu AI
slug: analytics-dashboard-copilot/
canonical: https://www.testmuai.com/support/docs/analytics-dashboard-copilot/
---

import NewTag from '../src/component/newTag';
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
          "name": "Analytics Dashboard AI CoPilot",
          "item": `${BRAND_URL}/support/docs/analytics-dashboard-copilot/`
        }]
      })
    }}
></script>
# AI CoPilot for Analytics Dashboards  <NewTag value="BETA" bgColor="#ffec02" color="#000" />

AI CoPilot lets you work with your <BrandName /> Analytics dashboards in plain language. Ask it what your test data is telling you, and it answers in plain English. With the widget builder, you can also describe the visualization you want and get a working widget back, refined through conversation.

<div className="ytframe">
<div className="youtube" data-embed="0CwsyCZOzYU" data-loading-attribute="eager">
  <div className="play-button"></div>
</div>
</div>

## Prerequisites

1. **<BrandName /> Paid Account**: An active <BrandName /> paid account with AI features enabled for your organization. To get access, contact [support@testmuai.com](mailto:support@testmuai.com).
2. **Data and Dashboard Setup**: CoPilot works against the data in your account and the widgets on the dashboard you open it from. To learn about widgets and dashboards, see the [Analytics Widgets](/docs/analytics-widgets/) documentation.

:::note
This feature is available to paid users. Users with the **Guest** role cannot open CoPilot.
:::

<img loading="lazy" src={require('../assets/images/analytics/dashboard-copilot-main.webp').default} alt="Analytics dashboard with the AI CoPilot option" width="800" height="400" className="doc_img"/>

## Opening AI CoPilot

1. **Login**: Sign in to your <BrandName /> account.
2. **Navigate to Insights**: From the left navigation menu, click **Insights**.
3. **Select or Create Dashboard**: Open the dashboard you want to work on.
4. **Launch AI CoPilot**: Click the **CoPilot** button in the dashboard action bar, next to **Add Widget**. CoPilot opens as a side panel beside the dashboard.
5. **Start a conversation**: Type your question or a description of the widget you want.

<img loading="lazy" src={require('../assets/images/analytics/dashboard-copilot-chat-window.webp').default} alt="AI CoPilot chat panel open beside a dashboard" width="800" height="400" className="doc_img"/>

## Analyzing a Dashboard with CoPilot

Ask CoPilot about the data already on your dashboard and it answers in natural language — no configuration, no query syntax.

- **Natural language queries**: Ask questions the way you would ask a teammate, such as *"Why did the pass rate drop this week?"*
- **Trend and comparative analysis**: Surface patterns over time, or compare metrics, environments and time periods.
- **Widget-aware answers**: CoPilot reads the data behind the widgets on your dashboard, so answers stay grounded in what you are looking at.

<img loading="lazy" src={require('../assets/images/analytics/dashboard-copilot-chat-response.webp').default} alt="AI CoPilot answering a question about dashboard data" width="800" height="400" className="doc_img"/>

:::note
CoPilot reads the data behind **custom widgets**. For prebuilt module widgets it can see the widget, but not the data inside it.
:::

## Building Widgets with CoPilot

<NewTag value="BETA" bgColor="#ffec02" color="#000" />

Building a widget normally means picking a product, a field, an aggregation and a chart type. With CoPilot you can instead describe the question you want answered, and get a working [custom widget](/docs/dashboards-custom-widgets/) back.

:::note
This capability is in **beta** and is enabled on request. To get access for your organization, contact our support team at [support@testmuai.com](mailto:support@testmuai.com).

Always verify a generated widget against your data before relying on it.
:::

### Describe the widget you want

With CoPilot open, type what you want in the message box, for example:

- `Show test status broken down by operating system`
- `Which browsers are dragging the pass rate down?`
- `Add a table of the flakiest tests`
- `Show run volume over time`

If the dashboard is empty, CoPilot shows a few starter prompts matched to your data — click one to use it.

### Review the proposal before it is added

CoPilot never edits your dashboard on its own. Each request returns a **proposal card** containing:

- A **live preview** of the widget with your real data.
- A **What changes** summary of what it built.
- Any **assumptions** it had to make.

Choose what happens next:

| Action | What it does |
|--------|--------------|
| **Add to dashboard** | Saves the proposed widget to the dashboard |
| **Replace** | Replaces the existing widget the proposal updates |
| **Keep both** | Saves the new widget and keeps the original |
| **Refine** | Fills in the message box so you can adjust the widget |
| **Discard** | Drops the proposal; nothing is saved |

If a request proposes more than one widget, CoPilot asks you to pick which ones to keep.

### Refine through conversation

A follow-up message edits the widget already on screen instead of starting over. Each refinement adds a new version to the same card, so you can step back and forth to compare before deciding. When CoPilot updates an existing widget, a **Before / After** toggle shows both.

CoPilot also offers suggested follow-ups such as *split by browser*, *failed only*, *compare with last month* or *as a table* — click one instead of typing it.

### Ask without changing anything

Prefix a message with a slash command to get an answer only — no widget is added or changed:

| Command | What it does |
|---------|--------------|
| `/summary` | Summarize what the dashboard is showing |
| `/ask` | Ask a direct question about the data |
| `/explain` | Explain a metric or a widget |
| `/why` | Dig into the cause behind a change |

Start typing `/` and press **Tab** to complete a command.

### Working with generated widgets

Widgets built by CoPilot are ordinary custom widgets — they are saved, edited, shared and scheduled through the same options as any other widget. Two things mark them out:

- An **AI** badge on the widget header, with the tooltip *Built with CoPilot*.
- **Configure with AI** in the widget's three-dot menu, which reopens CoPilot ready to change that widget.

### Supported products and visualizations

CoPilot builds widgets for **Web Automation** (the default), **App Automation**, **HyperExecute**, **Real Time Testing**, **Real Device Testing**, **Smart UI Testing**, **Accessibility** and **Test Manager**. Ask for data from another product and CoPilot switches to it automatically.

Supported visualizations are line chart, bar chart, area chart, pie chart, gauge chart, heatmap, table and billboard.

## Credits and Usage Guidelines

CoPilot requests use **AI credits** from your organization's balance. Each request uses a minimum of 5 credits, and the CoPilot panel shows how many a conversation has used so far. A single request adds at most four widgets.

To check your balance or top up, see [Credits Management](/docs/credits-management/).

Your conversation stays in the browser you started it in for 7 days. Clearing the chat does not remove widgets you already added to the dashboard.

## Current Limitations

- CoPilot can modify widgets it built, but not widgets created another way.
- It cannot export, download or schedule a report.
- It reads only the dashboard you opened it from, and only data you already have access to.

## Troubleshooting

- **You don't see the CoPilot button**: the widget builder is enabled on request — contact [support@testmuai.com](mailto:support@testmuai.com). Users with the **Guest** role cannot open CoPilot.
- **Out of credits**: top up your organization's [AI credits](/docs/credits-management/).
- **AI features disabled**: contact your account admin or <BrandName /> support.
- **CoPilot could not build the widget**: rephrase with an explicit metric and breakdown, for example *"count of failed tests by browser"*.
- **No fields available for this product**: run some tests on that product first, or switch products.

## Support and Assistance

If you run into difficulties or have questions about AI CoPilot, reach out to our [24/7 customer support](mailto:support@testmuai.com) for guidance and troubleshooting.
