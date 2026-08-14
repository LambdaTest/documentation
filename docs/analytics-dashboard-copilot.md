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
# Getting Started with AI CoPilot Dashboard  <NewTag value="BETA" bgColor="#ffec02" color="#000" />

AI CoPilot lets you work with your <BrandName /> Analytics dashboards in plain language. Ask it what your test data is telling you, and — with the widget builder — describe the visualization you want and get a working widget back, refined through conversation.

<div className="ytframe">
<div className="youtube" data-embed="0CwsyCZOzYU" data-loading-attribute="eager">
  <div className="play-button"></div>
</div>
</div>

## Prerequisites

1. **<BrandName /> Paid Account**: An active <BrandName /> paid account with AI features enabled for your organization. To get access, contact [support@testmuai.com](mailto:support@testmuai.com).

:::note
This feature is exclusively available to our valued paid users. Users with the **Guest** role cannot open CoPilot.
:::

2. **Data and Dashboard Setup**: CoPilot works against the data in your account and the widgets on the dashboard you open it from. To learn about widgets and dashboards, see the [Analytics Widgets](/docs/analytics-widgets/) documentation.

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
- **Widget-aware answers**: CoPilot reads the data behind the custom widgets on the dashboard, so answers stay grounded in what you are looking at.

<img loading="lazy" src={require('../assets/images/analytics/dashboard-copilot-chat-response.webp').default} alt="AI CoPilot answering a question about dashboard data" width="800" height="400" className="doc_img"/>

:::note
CoPilot can read the data behind **custom widgets**. For prebuilt module widgets it can see that the widget exists, but not the data inside it.
:::

## Building Widgets with CoPilot

<NewTag value="BETA" bgColor="#ffec02" color="#000" />

Building a widget normally means knowing the schema — pick a product, a field, an aggregation and a visualization. With the CoPilot widget builder you describe the question you want answered, and CoPilot assembles the widget configuration for you using the same [custom widget](/docs/dashboards-custom-widgets/) engine.

:::note
This capability is in **beta**. Always verify a generated widget against your data before relying on it.
:::

### Describe the widget you want

With CoPilot open, type what you want in the composer, for example:

- `Show test status broken down by operating system`
- `Which browsers are dragging the pass rate down?`
- `Add a table of the flakiest tests`
- `Show run volume over time`

If the dashboard is empty, CoPilot shows a few starter prompts matched to your data — click one to use it.

### Review the proposal before it is added

CoPilot never edits your dashboard on its own. Each turn returns a **proposal card** containing:

- A **live preview** of the widget rendered with your real data.
- A **What changes** summary explaining the configuration it chose.
- Any **assumptions** it had to make, shown as `term → mapping (assumed)`.

Choose what happens next:

| Action | What it does |
|--------|--------------|
| **Add to dashboard** | Saves the proposed widget to the dashboard |
| **Replace** | Replaces the existing widget the proposal updates |
| **Keep both** | Saves the new widget and keeps the original |
| **Refine** | Pre-fills the composer so you can adjust the widget |
| **Discard** | Drops the proposal; nothing is saved |

If a turn proposes more than one widget, CoPilot asks you to pick which ones to keep.

### Refine through conversation

A follow-up message edits the widget already on screen instead of starting over. Each refinement adds a **version** to the same proposal card, and you can step between `v1`, `v2` and so on to compare before deciding. On a replacement, a **Before / After** toggle shows the original widget beside the proposed one.

CoPilot also suggests follow-up chips such as *split by browser*, *failed only*, *compare with last month* or *as a table* — click one instead of typing it.

### Ask without changing anything

Prefix a message with a slash command to get an answer only — no widget is added or changed:

| Command | Use it to |
|---------|-----------|
| `/summary` | Summarize what the dashboard is showing |
| `/ask` | Ask a direct question about the data |
| `/explain` | Explain a metric or a widget |
| `/why` | Dig into the cause behind a change |

Start typing `/` and press **Tab** to complete a command.

### Working with generated widgets

Widgets built by CoPilot are ordinary custom widgets — they are saved, edited, shared and scheduled through the same options as any other widget. Two things mark them out:

- An **AI** badge on the widget header, with the tooltip *Built with CoPilot*.
- **Configure with AI** in the widget's three-dot menu, which reopens CoPilot with the composer pre-filled to change that widget.

### Supported products and visualizations

CoPilot builds widgets for **Web Automation** (the default), **App Automation**, **HyperExecute**, **Real Time Testing**, **Real Device Testing**, **Smart UI Testing**, **Accessibility** and **Test Manager**. If your request belongs to a different product than the one in use, CoPilot switches to it and rebuilds.

Supported visualizations are line chart, bar chart (including stacked and grouped), area chart, pie chart, gauge chart, heatmap, table and billboard.

### What CoPilot cannot do

- Modify or delete widgets that were not built by CoPilot.
- Export, download, email or schedule a report or CSV.
- Read any data outside the dashboard you opened it from, or connect an external data source.

:::note
Your organization's data scoping and field validation are always enforced on the server. CoPilot can only build on data you already have access to.
:::

## Credits and Usage Guidelines

CoPilot requests consume **AI credits** from your organization's balance.

- Each request costs a minimum of **5 AI credits**, so you need at least 5 credits available to send one.
- The panel shows the credits used by each turn and a running total for the conversation.
- A single turn proposes at most **4 widgets**.
- CoPilot considers up to the **last 12 turns** of the conversation for context. On a dashboard with many widgets, the oldest widget data may not fit in context — CoPilot tells you when that happens.
- The conversation transcript is stored in your browser for **7 days** on that device only. Widgets you already added stay on the dashboard when you clear the chat.

## Troubleshooting

| Message | What to do |
|---------|-----------|
| *You need at least 5 AI credits for a CoPilot request.* | Top up your organization's AI credits. |
| *AI features have been disabled for your organization.* | Contact your account admin or <BrandName /> support to enable AI features. |
| *Could not build that step. Try naming the metric and the breakdown you want.* | Rephrase with an explicit metric and grouping, for example *"count of failed tests by browser"*. |
| *Could not load the field list for this product.* | The selected product has no data to build from. Switch products or run tests first. |
| *Could not reach the widget service.* | A transient service issue — retry in a moment. |

## Support and Assistance

If you run into difficulties or have questions about AI CoPilot, reach out to our [24/7 customer support](mailto:support@testmuai.com) for guidance and troubleshooting.
