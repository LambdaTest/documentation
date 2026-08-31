# New Relic Integration

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

New Relic is a comprehensive observability platform that helps you monitor, troubleshoot, and optimize your software systems. It collects data from all your applications, infrastructure, and logs and provides insights into how your system is performing and where potential problems lie.







TestMu AI and New Relic enable you to view TestMu AI results in a custom New Relic dashboard and gain deeper insight into your automation scripts to ship quality products at light speed.

## Prerequisites


- A TestMu AI account. If you don't have an account, sign up for free.
- A New Relic account, If you don't have an account, [sign up for free](https://newrelic.com/signup)

## Integrating New Relic with TestMu AI


**Step 1:** Visit the New Relic UI. Click on [**Add Data**](https://one.newrelic.com/marketplace) button on the left navigation.

**Step 2:** Search **TestMu AI**, select the tile, and click on:
  1. **See installation docs** if you have not configured your TestMu AI account.
  2. **Skip this step** if you have already instrumented TestMu AI (from Step 3 to Step 5).

You can copy the Licence key details from the side bar which will be required in the **Step 5**.

This will automatically deploy a pre-built dashboard for you in New Relic. Click on **See your data** button to check the TestMu AI Dashboards.



**Step 3:** Visit the TestMu AI Dashboard. Go to the **Settings** page.

**Step 4:** Click on the **Integrations** tab. Select **New Relic** from the **Analytics** section.



**Step 5:** Now enter the **License Key/API Key** and select your **Region**

- In order to get the New Relic **License/API** Key, refer to the New Relic UI from Step 2.

Alternatively, you can go to your **New Relic** account > **Profile** > [**API Keys**](https://one.newrelic.com/api-keys).

> You can either use the existing API keys or you can create a new one.

- Paste the License/API Key and Region in the required field.

- Click on **Install** button.

The New Relic will be integrated with your TestMu AI account.



- After successful integration, New Relic will trigger the log ingestion that will now create the TestMu AI dashboards (TestMu AI - Test Overview and TestMu AI - Test Error Overview) to your directory.

## TestMu AI Dashboards - Test Overview and Test Error Overview

- Click on the **TestMu AI Test Overview** dashboard to get an overall insight about your testing trends.



- Click on the **TestMu AI Test Error Overview** dashboard to understand your test error trends.



## Removing The New Relic Integration

**Step 1:** Login to your TestMu AI account and visit **Integrations** from the left sidebar.

**Step 2:** From the **MY INTEGRATIONS** category, navigate to **NEW RELIC** and click REMOVE.



The New Relic integration will be uninstalled.
