---
id: credits-management
title: Credits Usage & Management in TestMu AI
hide_title: false
sidebar_label: Credits Management
description: Guide for usage of credits for AI features in TestMu AI
keywords:
  - credits
  - AI
url: https://www.testmuai.com/support/docs/credits-management/
site_name: TestMu AI
slug: credits-management/
canonical: https://www.testmuai.com/support/docs/credits-management/
---

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
          "name": "Network Throttling",
          "item": `${BRAND_URL}/support/docs/credits-management/`
        }]
      })
    }}
></script>

<BrandName /> supports a **credit management system** as an add‑on over your active subscriptions for <BrandName /> products. Many products include additional **AI features** that are powered by credits. This guide explains how credits work, how to view usage, and how admins can control consumption.

---

## Who gets credits?

* **Free users:** Receive **1,000 complimentary credits** to try AI‑powered features.
* **Paid users:** Receive **complimentary credits** based on subscription to try AI‑powered features and can purchase credits as an add‑on at any time. Credits are used only when AI features are invoked.

:::tip
Once free credits are exhausted, AI features will be unavailable until you **upgrade or purchase credits** from the Billing page. Use this link to buy credits directly: [Upgrade / Buy Credits](https://billing.lambdatest.com/billing/subscriptions?addCredits=true).
:::

---

## How credits are charged

Credits sit in a **single prepaid balance** for your organization. Products do not have separate wallets — every credit-consuming feature draws from the same pool. Credits are fractional: they are tracked to four decimal places, so a charge can be `12.5` or `0.3495` credits.

Every chargeable action is measured against one or more named **usage measures** — a KaneAI step, a device-minute, an AI analysis unit. Each measure has a published credit rate, and the charge is:

```
credits = quantity used × rate for that measure
```

summed across every measure the action touched. You are charged in proportion to the work actually done, not a flat fee per run. Rates are versioned, so already-settled transactions are never re-priced.

### Credits are held first, then settled

Most runs charge in two steps, so what you pay matches what the run actually consumed:

1. **Hold** — the moment a run starts, an estimated number of credits is placed on hold. This lowers your available balance immediately, so the same credits can never be spent twice.
2. **Settle** — when the run finishes, the hold is recalculated against actual usage. Used less, the difference is refunded; used more, the extra is charged. Failed or cancelled, the hold is released in full.

A run produces **one** transaction record, not two — the hold record is rewritten in place to become the final charge.

:::tip If a run never finishes
A hold that is never settled releases by itself, by default **30 minutes** after the run started. Released credits reappear on the next background sweep, which runs every five minutes.
:::

### When a run is refused

A run is refused **before it starts** if your balance is smaller than the credits it needs, or your organization has hit a **blocking limit** or a **daily spend cap**, or the user belongs to a group whose **enforced** budget is exhausted.

Work that has already happened is **always charged**, even if that takes your balance below zero.

---

## Ways to get credits

Credits are granted by <BrandName />'s billing systems on your behalf — when a payment succeeds, a trial starts, a plan renews, or a complimentary grant is issued. They arrive in **dated batches**, and each batch carries its own source and, where one applies, its own expiry date.

| How you get them | Shown on your balance as | What it is |
|---|---|---|
| **Plan credits** | Subscription | Your paid plan's credits for the current billing period |
| **Purchased credits** | Purchased | Credit packs you bought as a top-up |
| **Trial credits** | Subscription | Credits included with a free trial |
| **Complimentary credits** | Complimentary | Goodwill, welcome or promotional credits issued by <BrandName /> |

:::note The list of credit types is not fixed
If <BrandName /> issues credits under a new label, that label appears on your balance page as its own group — a new kind of credit is never hidden from you. Your credit history additionally shows **Usage** lines for what you spent.
:::

### Buying credits (top-ups)

Buy credits from the billing checkout, or use **Add Credits** on the Credits screen.

* Credits are added **when the payment goes through**.
* A purchased pack is valid for **one year from purchase**.
* Purchased credits are kept **independent of your subscription** — a plan change or cancellation cannot wipe them.
* Bought as a **recurring** item, the same quantity is granted again at every renewal, as a fresh one-year batch.
* Increase the quantity part-way through a billing period and you are granted a **pro-rated** amount for the days remaining.

### Requesting credits

**Request more credits** does not add any credits itself. It emails your organization's admins with your current balance and a link to the buy-credits page, and confirms to you that the request was passed on.

---

## When credits expire

**A batch of credits expires only on its own expiry date.** A batch issued without an expiry date never expires.

Reaching the end of a billing cycle does **not**, by itself, remove unused credits. Credits are removed in only two ways:

1. The batch's **expiry date** passes, or
2. The **subscription or trial that produced them is cancelled or changed**.

### Which credits are spent first

Spending always draws from the batch that **expires soonest**. Batches with no expiry date are used **last**, oldest first. Credits closest to lapsing are always consumed before ones that are safe — which is why a purchased pack may sit untouched while a plan grant drains.

### What happens at expiry

Whatever is left in the batch is deducted from your balance and recorded as an **expiry entry** in your credit history. Credits you already spent are never clawed back.

### By credit type

| Credit type | Expires? | Typical validity | What happens at expiry |
|---|---|---|---|
| **Subscription** (plan and trial credits) | Yes | The billing period the batch covers | Unused remainder is deducted. Also removed in full if the plan is cancelled or changed. |
| **Purchased** (credit packs) | Yes | **1 year** from purchase | Unused remainder is deducted. **Not** affected by a plan change or cancellation. |
| **Complimentary** | Where the grant carried a date | Set per grant | Unused remainder is deducted. |
| **Allocated to a sub-organization** | Inherits the parent batch's date | Same remaining validity as the parent batch | Expires on the parent's clock, deducted from the sub-organization's balance. |
| **Any batch with no expiry date** | **No** | Indefinite | Nothing. Always the last credits to be spent. |

### Cancelling or changing a plan

| Event | What happens to remaining credits |
|---|---|
| Subscription cancelled | All remaining credits from **that subscription** are removed. No proration. |
| Plan changed (upgrade, downgrade, licence change) | The old plan's remaining credits are removed in full, and a fresh full grant is issued at the new rate. |
| Trial ends | Remaining trial credits are removed. |
| Credits from any other source | **Untouched** — only credits from the subscription or trial being ended are removed. |

:::tip Purchased credits are safe
Cancelling or changing a plan never touches credits you bought separately.
:::

---

## How subscriptions grant credits

### Monthly plans

Your whole month's credits arrive in **one batch at the start of each billing period** and are usable straight away. The batch expires at the end of that period.

### Annual plans

On an annual plan you do **not** receive twelve months of credits up front. The year is split into **twelve consecutive one-month instalments** anchored on your renewal date: the first is credited immediately, and the other eleven are scheduled and switch on automatically as each month begins. **Each instalment expires at the end of its own month**, not at the end of the year.

A scheduled instalment is visible before it starts, shown as your **next grant** with its date. It is not spendable until it activates.

| | Monthly plan | Annual plan |
|---|---|---|
| Credits at purchase | Whole month, immediately | First month only, immediately |
| Rest of the term | Next month arrives at each renewal | 11 further monthly instalments, pre-scheduled |
| Visible before it starts? | — | Yes, as your next grant |
| Expiry of each batch | End of the month | End of that instalment's month |
| Do credits roll over? | No | No |

:::note No rollover
Credits that belong to a period do not carry forward. Whatever is unused when a batch expires is written off, and the next period arrives as a fresh grant rather than a top-up of the old one.
:::

---

## Dividing credits between sub-organizations and groups

Admins have **two different ways** to divide credits, and they work on completely different principles. Both are configured under **Credits → Budgets**.

| | Sub-organization budget | Group budget |
|---|---|---|
| What it is | Credits **handed over** to a sub-organization | A **spending limit** on a group of users |
| Do credits move? | **Yes** — carved out of the parent's batches into the sub-organization's own wallet | **No** — credits stay in the organization's balance |
| Spends from | Its own wallet | The organization's wallet |
| Expiry | Carved credits keep the original expiry date | Not applicable |
| Shown on the parent's overview as | **Reserved for Sub-Org.** | Nothing |
| When exhausted | Runs are refused — insufficient credits | **Enforce**: runs refused. **Notify only**: warns only |

:::tip
When budgets overlap, the **lowest limit applies**.
:::

### Sub-organization budgets

Setting a budget **carves real credits** out of the parent organization's batches and hands them to the sub-organization as its own spendable wallet, preserving the original expiry dates and credit types.

From then on the sub-organization spends its own credits — the parent's balance is never touched by its runs, and when the allocation is used up those runs are refused rather than falling back on the parent. The unspent part shows on the parent's overview as **Reserved for Sub-Org.**, and credits are returned automatically if the sub-organization is deleted or moved.

Recurring budgets refresh on a cadence — monthly, weekly, daily, one-time, or a rolling interval — in one of two styles:

| Refresh style | At each cycle boundary | The sub-organization starts the cycle with |
|---|---|---|
| **Reset and regrant** (default) | Unused allocated credits go back to the parent, then the full amount is granted again | Exactly the configured amount |
| **Top up** | Nothing is reclaimed; only the shortfall is granted | The configured amount, or more if a surplus carried over |

Credits already spent can never be clawed back, and a budget cannot be reduced while that sub-organization has runs in flight.

### Group budgets

A group budget **moves no credits**. It is a per-period spend counter for a group of users inside the same organization, and it either warns as the group approaches the limit (*notify only*) or blocks new runs once the limit is reached (*enforce*). Group budgets refresh simply because a new period starts counting from zero.

---

## Credit usage limits and alerts

Admins can define org-wide controls to prevent unexpected consumption, under **Credits → Alerts**. Each is switched on or off independently.

| Alert | Emails you | Blocks new runs | Measured against |
|---|---|---|---|
| **Warn when balance falls below** (soft limit) | Yes | **No** — usage continues as normal | Your available balance |
| **Block usage when balance falls below** (hard limit) | Yes | **Yes** — new runs are refused | Your available balance |
| **Daily spend cap** | Yes | **Yes** — for the rest of the UTC day | Credits spent so far today |
| **Expiry alerts** | Yes | No | On/off only |

:::tip
**Recommendation:** start with a warning threshold at 70–80% of your monthly plan and a blocking threshold at 90%.
:::

### What blocks and what does not

* The **warning** threshold only emails. It never stops a test.
* The **blocking** threshold and the **daily cap** refuse new runs before they start. Nothing is charged for a refused run.
* **Work already in flight is never blocked** — a limit can stop new runs starting, but it can never cancel or refund a run that is already going.

To resume after a block: top up, raise the limit, or — for the daily cap — wait for the next UTC day.

:::note The daily cap resets at 00:00 UTC
It works on a UTC calendar day regardless of your organization's timezone, so it may not line up with the days shown on your usage chart.
:::

### Absolute values vs percentages

* **Balance thresholds** — a percentage is converted into a **fixed number of credits at the moment you save it**, measured against your balance at that time. "80%" means *alert me when only 20% of that balance is left*. It stays at that fixed number as you spend.
* **Daily cap** — a percentage is recalculated live against all credits ever added to the account.

:::caution
Save a percentage threshold while your balance is zero and the stored figure is zero, so the alert will not fire until a later grant recalculates it. Set balance thresholds after your credits have landed.
:::

### Who gets the emails, and how often

Alert emails go to your organization's **admins**, plus any **extra recipients** you add on the Alerts screen. A recipient does not have to be an admin. The recipient list is replaced in full each time you save, so re-saving the same people never produces duplicate emails.

| Alert | At most |
|---|---|
| Balance warning | 1 email per 24 hours |
| Blocking limit | 1 email per 24 hours |
| Daily spend cap | 1 email per UTC day |
| Expiry reminder | 1 email per batch entering the 7-day window |

Alerts are evaluated while credits are being reserved or committed — that is, when runs happen. An organization that stops running tests below its threshold receives no further reminders.

### Expiry reminders

Expiry alerts are **off by default**. Turn them on and <BrandName /> emails your admins **7 days before** credits are due to expire, stating how many credits will lapse and the earliest date any of them lapses.

---

## Reading the Credits screen

Go to **Billing → Credits → Overview**.

### The four cards

| Card | What it counts | Time window |
|---|---|---|
| **Total Credits** | Used + Available + Reserved | Mixed — see below |
| **Used Credits** | Credits actually spent and charged | Your current plan cycle so far, or the **last 30 days** if you have no active plan cycle |
| **Available Credits** | Your live balance right now | Live — never windowed |
| **Reserved for Sub-Org.** | Credits handed to sub-organizations and not yet spent | Live — never windowed |

The four cards always describe the same arithmetic: **Total = Used + Available + Reserved**.

:::note Total is not "everything you ever bought"
Total is *what is in the wallet, plus what you have spent in this window, plus what is out with your sub-organizations*. Credits spent in an earlier window are not in it. The page prints which window **Used** covers.
:::

Your balance can go below zero, and the page shows the shortfall as an **overdraft**. That happens after the fact — a finished run is always charged in full, and credits that expire unused are written off — not because new work was waved through.

### Credits by Type

Each card shows one credit type with a Used / Available bar and a table of the individual batches with their expiry dates. A dash in the Expiry Date column means that batch never expires.

Two things that are commonly misread:

1. **A type's Used can go down over time.** A batch that still had credits when it expired drops off the card, and its past usage drops off with it.
2. **The per-type Used figures need not add up to the Used card.** The top card is built from your transaction history; the type cards are built from the batches you currently hold.

Credits held for tests that are still running lower **Available** without ever appearing as **Used**.

### Daily Credits Usage

The chart counts **finished, charged usage only** — credits added, top-ups, expiries and credits currently held for a run in progress are never drawn as bars. Days are calendar days in the timezone you select.

### Top 10 Credit Users and Products

Ranks who and what consumed the most credits over the selected range, with each entry's share of the total. Toggle between **Users** and **Products**.

---

## View credit transactions

**Admins** can view every movement of credit for the organization under **Credits → Transactions**.

| Column | What it shows |
|---|---|
| **Transaction ID** | The unique id of the entry |
| **Activity** | The product the credits were spent on |
| **Used By** | The person who triggered it |
| **Credits** | Negative for spend, positive for credits added |
| **Date & Time** | When it happened |

Filter by transaction type, source, product and date range, and search by user or feature.

| Transaction type | Meaning |
|---|---|
| **Debit** | Committed usage (an amount of 0 means a released hold) |
| **Credit** | A grant or top-up added |
| **Reserved** | Credits held for a run in progress |
| **Expiry** | Credits expired or lapsed |

### Exporting transactions

**Export CSV** downloads every transaction matching your current filters — not just the page you are looking at. The file contains Transaction ID, Activity, Used By, Credits, Date & Time, Type and Source.

:::note Rounding
Summary figures on the page are rounded to four decimal places so they read cleanly. Per-batch amounts and the CSV export carry the exact stored values.
:::

---

## AI features that consume credits

Below are the currently supported features and how they consume credits.

### SmartUI Visual AI

<BrandName /> **SmartUI Visual AI** simulates human perception for visual regression. Rather than flagging every pixel change, it highlights **meaningful, human‑relevant** differences between baseline and new screenshots. [Learn more](/support/docs/smartui-visual-ai/).

#### How credits are consumed?

**Small / Normal Screenshot**

* A page or screen that fits within a typical device viewport (e.g., one laptop or mobile screen)
* Examples: login page, product details, simple dashboard
* **Consumes \~1–4 credits** (most common)

**Large Screenshot**
* A long or content‑heavy page beyond the standard viewport (full‑page scroll, data‑heavy dashboards)
* Examples: full home page, long reports, multi‑section dashboards
* **Consumes \~5–8 credits** (less common)

**In summary:** The bigger and more content‑heavy the screenshot, the more credits it consumes.

---

### AI Test Case Generator

The **AI Test Case Generator** converts diverse inputs (text, PDFs, audio, videos, images, Jira tickets, and more) into **structured, contextual test cases**, accelerating authoring while improving coverage. [Learn more](/support/docs/generate-test-cases-with-ai/).

#### How credits are consumed

* **10 credits per scenario** generated.
* When you start generation, credits are tentatively consumed based on **Max Scenarios** you select (default **5**).
  Example: Default 5 → **50 credits** tentatively consumed when you begin.
* If fewer scenarios are produced (e.g., **4**), **10 credits are credited back**, so you only pay for what’s actually generated.
* **Regeneration** also consumes credits at **10 credits per scenario**.

>This ensures fair usage. You are charged only for **actual output** produced by the AI.

#### Conversational Layer

The AI Test Case Generator includes a **Conversational Layer** that lets you refine generated scenarios and test cases through natural‑language messages. Credits are consumed based on the scope of each refinement:

| Action | Credit Cost |
|--------|-------------|
| Edit or modify a **scenario** (including its test cases) | **5 credits** |
| Edit or modify a single **test case** | **1 credit** |

* Credits are deducted **per message** based on the scope of the change.
* If your message affects multiple scenarios, credits are deducted for each scenario impacted.

---

### Test Case Deduplication

The **duplicate scan** in Test Manager finds test cases that already exist in your repository more than once, groups them by similarity, and lets you review and delete the duplicates you no longer need. [Learn more](/support/docs/test-case-deduplication/).

#### How credits are consumed

* **5 credits per scan**, charged as a flat fee.
* Credits are deducted **only if the scan produces at least one duplicate group**. A scan that finds no duplicates costs nothing.
* The cost does not scale with the size of the scan. It is the same whether you scan 100 test cases or 5,000, and the same whether the scan returns one duplicate group or fifty.
* **Changing the base test case** re-runs the scan for that group at **no additional cost**.

>You pay once per scan that returns a result, not per test case analyzed or per duplicate found.

---

### KaneAI Authoring

**KaneAI** lets you author and edit automated tests in natural language. With the new pricing model, **authoring is metered in credits** — a single subscription plus a single credit balance covers each step you generate or edit, along with any remote browser or real‑device time and AI assists (vision validation, auto‑heal). [Learn more](/support/docs/getting-started-with-kane-ai/).


#### How credits are consumed

| What draws credits | Rate |
|--------------------|------|
| **Step authoring / editing** (natural‑language step generated or edited) | **\~1.5–2.5 credits / step** |
| **KaneAI Web Cloud** (remote browser time) | **0.17 credits / min** |
| **KaneAI Mobile Cloud** (real‑device time) | **10 / 8 / 6 / 4 credits / min**, depending on the **device category** |
| **Vision validation during execution** | **\~1.5–2.5 credits / step** |
| **Auto‑heal during execution** | **\~1.5–2.5 credits / step** |

* **Local authoring with Kane CLI** uses **step credits only** — you author on local browsers and local emulators / simulators with no cloud infrastructure, so no per‑minute cloud time is charged.
* **KaneAI Web Cloud** and **KaneAI Mobile Cloud** add per‑minute credits for the remote browser or real‑device session while you author or edit test case in the cloud.
* **Vision validation and auto‑heal** draw credits even when they run **during execution** — they are **not** bundled into execution.

#### Real‑device rates by device category

Real devices in the <BrandName /> cloud are grouped into four **device categories** based on how new the device is. Newer devices are in higher demand, so they consume more credits per minute. Choosing an older device for the same test lowers your credit spend.

| Device category | What it includes | Credits / min |
|-----------------|------------------|---------------|
| **Newest devices** | Latest‑generation flagships, typically released within the last year | **10** |
| **Recent devices** | Recent‑generation devices, still widely used | **8** |
| **Older devices** | Previous‑generation devices | **6** |
| **Oldest devices** | Long‑standing legacy devices | **4** |

:::tip
Credits are charged **per minute of real‑device time while you author or edit**, so a 10‑minute session on a newest device costs 100 credits, while the same session on an oldest device costs 40. If a test does not need the newest hardware, pick a lower device category.
:::

---

## FAQs

**Q: What happens when my credits run out?**

AI features that require credits will be disabled. You can **purchase credits** or **upgrade** [here](https://billing.lambdatest.com/billing/subscriptions?addCredits=true).

**Q: Who can view balances and transactions?**

Users with the **Admin** role in your <BrandName /> organization.

**Q: Do unused credits expire?**

It depends on the batch they arrived in. Each batch of credits carries its own expiry date, and a batch issued without one never expires. Plan credits expire at the end of the billing period they cover and do not roll over. **Purchased credit packs are valid for one year from purchase.** See [When credits expire](#when-credits-expire) for the full breakdown by credit type.

**Q: Why were credits refunded after generation?**

When fewer scenarios than the selected Max Scenarios are generated, the difference is **credited back automatically**.

**Q: Can I cap my organization’s usage?**

Yes, set **Soft** and **Hard** limits (Admins only).

**Q: Is KaneAI test execution charged in credits?**

No. **Authoring** (step generation/editing, cloud browser or real‑device time) and **AI assists** (vision validation, auto‑heal, AI RCA) are metered in credits. Test **execution** is billed separately on HyperExecute.

**Q: Which credits get used first?**

The ones expiring soonest. Credits with no expiry date are spent last, so a purchased pack can sit untouched while plan credits drain.

**Q: Why is my balance showing an overdraft?**

Work that has already run is always charged in full, even if it costs more than was set aside for it, and credits that expire unused are written off. Either can take a balance below zero. New runs are still refused up front when the balance is short.

**Q: Why did credits disappear from Available without appearing as Used?**

They are being held for a test that is still running. Holds reduce Available immediately and only become Used once the run settles.

**Q: Can a sub-organization spend the parent organization's credits?**

No. A sub-organization spends only from the credits allocated to it. When that allocation is used up its runs are refused; it does not fall back on the parent's balance.

**Q: Does the platform offer AI FinOps tools to control and manage AI testing costs?**

Yes, it provides AI FinOps capabilities for cost control and spend management, enabling organizations to monitor, manage, and optimize costs across AI-driven testing workflows. This includes pre-execution credit controls, operation-level cost tracking, and detailed cost analytics to prevent overspending and ensure financial visibility.

**Key capabilities include:**

- Credit reservation system with pre-operation credit checks, reservation IDs per operation, and automatic blocking when credits are insufficient.

- Cost tracking per operation type, including phone scenario generation, phone call execution, chat scenario generation, chat evaluation, and image analysis.

- Credit balance management with real-time credit monitoring, consumption tracking, and organization-level cost summaries.

- Cost metrics and analytics covering operation-level breakdowns, project-level aggregation, and historical cost analysis.

---

## What’s next

Additional AI features will join the credit system shortly. Watch the **<BrandName /> Changelog** and Support Docs for updates.

If you have questions about credits, billing, or limits, reach out to **[support@testmuai.com](mailto:support@testmuai.com)**.
