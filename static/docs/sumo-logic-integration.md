# Sumo Logic Integration

Sumo Logic is a cloud-based platform that modernizes your security operations. By analyzing security and operational issues with Sumo Logic, you can make smarter decisions and free up resources for other critical functions.

TestMu AI and Sumo Logic enables you to view TestMu AI results in a custom Sumo Logic dashboard and gain deeper insight into your automation scripts to ship quality products at light speed.

## Prerequisites

1. A TestMu AI account. If you don't have an account, sign up for free.
2. A Sumo Logic account.

## Configuring A Sumo Logic Collector

In order to push test data from TestMu AI to Sumo Logic dashboard, you will need to create a collector in Sumo Logic.

### Adding A Collector

**note**
If you already have an existing collector, please refer to [Adding A Source](#adding-a-source) section.

1. Login to your Sumo Logic account. From the left sidebar, navigate to **Manage Data > Collection**.

2. To add a new collector, click **Add Collector** on the top-right corner.

3. A *Select Collector Type* pop-up will appear. Select **Hosted Collector**.

4. In the provided fields, enter the collector details like Name, Description, Category, Fields/Metadata, Budget, and, Time Zone. Then click **Save**.

### Adding A Source

1. From Sumo Logic Home page, navigate to **Manage Data > Collection**.

2. Click **Add Source**. If you create a new collector, it will directly route you here.

3. Select **HTTP Logs and Metrics**.

4. Enter the Source details like **Name**, **Description**, **Source Host**, **Source Category** and click **Save**.

> The **Source Category** field is required. Otherwise, the test data will not get reflected in your Sumo Logic dashboard.

5. A *HTTP Source URL* will be generated that you need to provide while configuring the TestMu AI Sumo Logic webhook. Copy the generated HTTP Source URL.

## Configuring The Sumo Logic Integration

1. Login to your TestMu AI account and visit **Integrations** from the left sidebar.

2. From the ANALYTICS category, select **SUMO LOGIC**.

3. In the Collector endpoint URL field, paste the copied HTTP Source URL and press **Install**.

The Sumo Logic will be integrated with your TestMu AI account.

## Installing the TestMu AI App in Sumo Logic

1. Navigate to Sumo Logic Home and select **App Catalog** from the left navigation panel.

2. Find and select the TestMu AI App using the search bar.

3. Click **Add Integration** to install the TestMu AI app into your Sumo Logic account. It will then add the TestMu AI dashboards (TestMu AI - Test Overview and TestMu AI - Test Error Overview) to your directory.

4. Click on the TestMu AI **Test Overview** dashboard to get an overall insight about your testing trends.

5. Click on the TestMu AI **Test Error Overview** dashboard to understand your test error trends.

## Removing The Sumo Logic Integration

1. Login to your TestMu AI account and visit **Integrations** from the left sidebar.

2. From the MY INTEGRATIONS category, navigate to SUMO LOGIC and click **REMOVE**.

The Sumo Logic integration will be uninstalled.
