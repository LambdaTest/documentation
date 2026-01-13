---
id: concurrency-widget
title: Understanding Your TestMu AI Concurrency
hide_title: true
sidebar_label: Concurrency Widget
description: Learn how your TestMu AI concurrency works and how to understand the concurrency widget that shows your parallel test usage across different plans and test types.
keywords:
  - testmu ai concurrency
  - parallel tests
  - concurrency widget
  - test plans
  - license pool

url: https://www.testmu.ai/support/docs/concurrency-widget
site_name: LambdaTest
slug: concurrency-widget
canonical: https://www.testmu.ai/support/docs/concurrency-widget/
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
          "name": "Concurrency Widget",
          "item": `${BRAND_URL}/support/docs/concurrency-widget/`
        }]
      })
    }}
></script>

# Understanding Your <BrandName /> Concurrency

Your <BrandName /> subscription is designed to be flexible, allowing you and your team to run different types of tests. This guide explains how your concurrency (the number of tests you can run in parallel) is managed.

---

## Key Concepts Made Simple

**Concurrency:** The number of tests you can run at the same time. If you have 10 parallels, you can run 10 tests simultaneously. These are determined by the sum of all subscriptions that have been purchased.

**Plans (Your Subscriptions):** These are the packages you purchase, like "Web & Mobile Browser Automation on Real Device" or "Hyperexecute Linux" Each plan comes with a specific number of parallels.

**Intents (Types of Tests):** These are the specific test types you can run, such as Realtime Testing, Desktop Automation, or Mobile Automation.

---

## The Most Important Idea: The License Pool

Think of each Plan you purchase as its own Pool of concurrency.

All the different test types (Intents) included in that one Plan share the same pool. If you run any test from that Plan, it takes up one slot from the pool, reducing the available slots for all other tests within that same Plan.

### Understanding the License Pool with an example

Let's say that you buy a plan Web & Mobile Automation on Real Devices with 10 parallel tests, now all the types of tests that are included in this plan will share the same concurrency pool.

Now lets say you run 1 web automation test, now the availability of the parallel tests throughout will be 9 (i.e. 10 - 1 = 9 that's now available for any type of test).

---

## Decoding the Widget: A Detailed Look

The widget gives you a real-time view of your license pool usage. Let's break it down using an example. Assuming the current plan consists of Web & Mobile Automation on Real Devices x10

### The Main View

At a glance, you see a list of test types (Intents) and their usage, like:


This means that for the license pool this test belongs to, 1 parallel is currently being used out of a total of 10.

<img loading="lazy" src={require('../assets/images/concurrency-widget/1.png').default} alt="Image"  className="doc_img"/>

---

### The Expanded View: Running vs. Consumed By Other

When you click the arrow to expand a section, you get a more detailed breakdown. This is where you can see exactly how your pool is being used.

**Running:** This shows how many tests of that specific type are active. In the example, Running is 0, meaning no Mobile Browser Automation tests are active right now.

**Consumed By Other:** This is the most important field for understanding your pool. It shows how many parallels are being used by:  
1. Different test types that belong to the same plan. (Running at Group/Sub-Org Level)  
2. Same test type run by users in other groups.  
3. Same test type run by users in sub-org.  

In this case we are running a Web Automation Desktop Browser.

**Available:** This is the final count of parallels left in the pool for you to use.

<img loading="lazy" src={require('../assets/images/concurrency-widget/2.png').default} alt="Image"  className="doc_img"/>

---

### Putting it all together with the example:

- The plan bought (Web & Mobile Automation on Real Devices x10) has a subscription of 10 parallels.  
- The Consumed By Other field shows 1. This tells you that a different test from the same plan (in this case, Web Automation Desktop) is using one parallel.  
- Since 0 tests of the current type (Mobile Browser Automation) are Running and 1 is Consumed By Other, the total usage for the pool is 1.  
- This leaves 9 parallels Available, perfectly matching the 1/10 summary.  

---

## Scenarios Explained

### Scenario 1: One Plan, Multiple Tests

**Setup:** You have one subscription: the "Web & Mobile Automation on Real Devices" with 10 parallels. This plan includes Web Automation Desktop and Mobile Browser Automation etc.  

**Action:** Your team starts running 2 Web Automation Desktop tests.

**Result on the Widget:**

When you look at the widget, both sections will reflect this usage:  
- Web Automation Desktop will show 2 Running and 8 Available.  
- Mobile Browser Automation will show 0 Running, 2 Consumed By Other, and 8 Available.  

**Why?** Because both Intents pull from the same pool of 10. You have 8 parallels left for either test type.

Web Automation Desktop Testing Widget		

<img loading="lazy" src={require('../assets/images/concurrency-widget/3.png').default} alt="Image"  className="doc_img"/>

Mobile Browser Automation Testing Widget

<img loading="lazy" src={require('../assets/images/concurrency-widget/4.png').default} alt="Image"  className="doc_img"/>

---

### Scenario 2: The Widget on Different Pages

**Setup:** You have the same "Web & Mobile Automation on Real Devices" with 10 parallels.

**Action:** A colleague starts 2 web automation desktop tests. You are on the Real-time Testing page.

**Result on Your Widget:**  
- The Real-time Testing section on your page will show 2 tests as Consumed By Other.  
- It will display that only 8/10 parallels are available, even though you haven't run any real-time tests yourself. The widget accurately reflects the total usage of the shared pool.  

<img loading="lazy" src={require('../assets/images/concurrency-widget/5.png').default} alt="Image"  className="doc_img"/>

---

### Scenario 3: Multiple Plans with Overlapping Tests

This is where the system's flexibility shines.

**Setup:** Your organization has two subscriptions:  
- "Web & Mobile Automation on Real Devices" with 10 parallels, which includes Web Automation Desktop and Real Mobile Automation and more.  
- "Hyperexecute (Linux Only)" with 5 parallels, which includes Web Automation Desktop and Hyperexecute Linux and more.  

**The Overlap:** Web Automation Desktop is in both plans, giving you a combined total of 15 parallels (10 + 5) specifically for web automation desktop testing.

**Action:** Your team needs to run a large batch of web automation tests and start 12 of them.

**Result on the Widget:** The system intelligently uses licenses from both pools to meet the demand.

- **Web Automation Desktop (common in both plans)**  
  Example: Running 12 tests out of 15 total.  
  Shows 3 available slots left, regardless of the type of test you choose next.  

<img loading="lazy" src={require('../assets/images/concurrency-widget/6.png').default} alt="Image"  className="doc_img"/>

- **Real Mobile Automation (unique to Web & Mobile Automation on Real Devices plan)**  
  Available only in the Web & Mobile Automation on Real Devices plan.  
  Even if 12 Web Automation tests are running, the system still shows 3 available slots (15 – 12).  

<img loading="lazy" src={require('../assets/images/concurrency-widget/7.png').default} alt="Image" className="doc_img"/>

- **HyperExecute (Linux) (unique to Hyperexecute Linux plan)**  
  Available only in the HyperExecute (Linux Only) plan.  
  The system again shows 3 available slots, since concurrency dynamically balances across plans.  

<img loading="lazy" src={require('../assets/images/concurrency-widget/8.png').default} alt="Image"  className="doc_img"/>

Now the system will intelligently decide your available concurrency based on the type of test that you want to run.  
However, your total number of parallel tests is capped at 3 (regardless of type of test you want to run).  

**Why?** The system pools your licenses for any overlapping test types, giving you maximum capacity. However, using these pooled licenses will consume slots from each contributing plan, affecting the availability of other, non-overlapping tests in those plans.

---

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
        Concurrency Widget
      </span>
    </li>
  </ul>
</nav>




