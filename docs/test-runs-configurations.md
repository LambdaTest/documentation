---
id: test-runs-configurations
title: 'Configurations in KaneAI & Test Manager'
hide_title: false
sidebar_label: Configurations
description: Learn how to create, manage, and apply reusable environment configurations for your test runs in LambdaTest Test Manager.
keywords:
  - testmu ai automation
  - kaneai
  - test manager
  - configurations
  - test runs
  - environment setup
url: https://www.testmuai.com/support/docs/test-runs-configurations/
site_name: TestMu AI
slug: test-runs-configurations/
canonical: https://www.testmu.ai/support/docs/test-runs-configurations/
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
          "name": "Configurations in KaneAI & Test Manager",
          "item": `${BRAND_URL}/support/docs/test-runs-configurations`
        }]
      })
    }}
></script>

# Configurations in KaneAI & Test Manager

Configurations in Test Manager allow you to define reusable environment setups for your test runs. You can specify platform, browser, OS, and device combinations once and apply them across multiple test runs.

**Key Benefits:**
- **Centralized Management** - Create, edit, and delete configurations from a single dashboard
- **Reusability** - Apply the same configuration across multiple test runs
- **Multi-Platform Support** - Configure Desktop, Virtual Mobile, and Real Device environments

---

## Accessing Configurations

Navigate to configurations using either method:

| Access Method | Steps |
|---------------|-------|
| **Sidebar** | Click **Configurations** under Test Manager in the left menu |
| **Test Runs** | Click **Manage Configurations** link within any test run |

<img loading="lazy" src={require('../assets/images/kane-ai/app-test/configurations-sidebar.png').default} alt="configurations-sidebar" className="doc_img"/>

---

## Configurations Dashboard

The central dashboard displays all your configurations with the following features:


| Feature | Description |
|---------|-------------|
| **Search Bar** | Find configurations by name |
| **Filters** | Filter by OS, Browser, or Resolution |
| **Configuration Details** | View name, last updated date, OS, browser, version, and resolution |
| **Usage Count** | See how many test runs use each configuration |
| **Actions Menu** | Access Edit and Delete options via the ⋮ menu |

<img loading="lazy" src={require('../assets/images/kane-ai/app-test/configurations-dashboard.png').default} alt="configurations-dashboard" className="doc_img"/>

---

## Creating a Configuration

You can create configurations from the central Configurations page or directly within a test run.

### Steps to Create

1. Click **Create a Configuration** button
2. Toggle the **KaneAI** switch based on your test run type: set it to **ON** for KaneAI-generated test runs, or **OFF** for Non-KaneAI test runs.
3. Select your platform (Desktop, Real Device, or Virtual Mobile)
4. Fill in the required configuration fields
5. Click **Create Configuration**

<img loading="lazy" src={require('../assets/images/kane-ai/app-test/create-configuration.png').default} alt="create-configuration" className="doc_img"/>

### KaneAI Toggle

The KaneAI toggle determines which platforms and options are available:

| Toggle State | Available Platforms | Use Case |
|--------------|---------------------|----------|
| **ON** | Desktop, Real Device | KaneAI test cases |
| **OFF** | Desktop, Virtual Mobile, Real Device | Non-KaneAI test cases |

---

### Platform Options

| Platform | Details |
|----------|---------|
| **Desktop** | OS, OS Version, Browser, Browser Version, Resolution, URL |
| **Virtual Mobile (non-KaneAI only)** | OS, Manufacturer, Device, OS Version, Browser/App |
| **Real Device** | Device Type, OS, Manufacturer, Device, OS Version, Browser/App |

### Desktop

Configure browser-based testing on desktop environments.

**Environment Variables:**
| Field | Description |
|-------|-------------|
| Operating System | Windows, macOS, etc. |
| OS Version | Specific version of the OS |
| Browser | Chrome, Firefox, Safari, Edge, etc. |
| Browser Version | Specific browser version |
| Resolution | Screen resolution for testing |

<img loading="lazy" src={require('../assets/images/kane-ai/app-test/DesktopConfig.png').default} alt="desktop-configuration" className="doc_img"/>

---

### Real Device

Configure testing on physical mobile devices. Supports both **Native App** and **Mobile Browser** testing.

#### Native Application

:::info Note
Native app testing on Real Devices is available only for KaneAI-generated test runs.
:::

**Environment Variables:**
| Field | Description |
|-------|-------------|
| Device Type | Public Cloud or Private Cloud |
| Operating System | Android or iOS |
| Manufacturer | Device manufacturer (Samsung, Apple, etc.) |
| Device | Specific device model |
| OS Version | Operating system version |
| App | Application to test |

<img loading="lazy" src={require('../assets/images/kane-ai/app-test/RealDeviceConfig.png').default} alt="real-device-configuration" className="doc_img"/>

#### KaneAI-Exclusive Features

The following options are available only for KaneAI-generated test runs:

**Device Type: Private Cloud vs Public Cloud**

For organizations with a private cloud real device plan, you can choose between:
- **Public Cloud** - Shared pool of devices available to all LambdaTest users
- **Private Cloud** - Dedicated device pool exclusive to your organization

**Multi-Select Support**

KaneAI allows selecting multiple values for Manufacturer, Device, and OS Version. This creates a larger device pool, ensuring test execution can proceed even if specific devices are unavailable.

#### Application Options

| Option | Description |
|--------|-------------|
| **Auto Update** | Automatically updates the configuration when a new app version (matching `appPackage` or `bundleId`) is uploaded |
| **Custom ID** | Links the configuration to an app uploaded via [API](/support/docs/application-setup-via-api/#upload-your-application) with a specific `custom_id` |
| **Pre-Installed App** | Available for Private Cloud only. Maps app capability to `Stock` for testing pre-installed applications |

<img loading="lazy" src={require('../assets/images/kane-ai/app-test/UpdateApp.png').default} alt="auto-update-app" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/kane-ai/app-test/CustomID.png').default} alt="custom-id-app" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/kane-ai/app-test/PreinstalledApp.png').default} alt="preinstalled-app" className="doc_img"/>

#### Mobile Browser

:::info Note
Mobile browser testing on Real Devices is available for non-KaneAI test runs only.
:::

**Environment Variables:**
| Field | Description |
|-------|-------------|
| Operating System | Android or iOS |
| Browser | Mobile browser to test |
| Manufacturer | Device manufacturer |
| Device | Specific device model |
| OS Version | Operating system version |

<img loading="lazy" src={require('../assets/images/kane-ai/app-test/RDWebBrowser.png').default} alt="real-device-browser-configuration" className="doc_img"/>

---

### Virtual Mobile

:::info Note
Virtual Mobile configurations are available for non-KaneAI test runs only.
:::

Configure testing on emulators and simulators for both Native App and Mobile Browser testing.

#### Native Application

**Environment Variables:**
| Field | Description |
|-------|-------------|
| Operating System | Android or iOS |
| Manufacturer | Device manufacturer |
| Device | Specific device model |
| OS Version | Operating system version |
| App | Application to test |

<img loading="lazy" src={require('../assets/images/kane-ai/app-test/VirtualWeb.png').default} alt="virtual-device-app-configuration" className="doc_img"/>

#### Mobile Browser

**Environment Variables:**
| Field | Description |
|-------|-------------|
| Operating System | Android or iOS |
| Browser | Mobile browser to test |
| Manufacturer | Device manufacturer |
| Device | Specific device model |
| OS Version | Operating system version |
| URL *(Optional)* | Default URL to open |

<img loading="lazy" src={require('../assets/images/kane-ai/app-test/VirtualApp.png').default} alt="virtual-device-browser-configuration" className="doc_img"/>

---

## Managing Configurations

### Edit a Configuration

1. Navigate to the **Configurations** page from the sidebar
2. Locate the configuration and click the **Actions menu** (⋮)
3. Select **Edit**
4. Modify the required fields
5. Save your changes

<img loading="lazy" src={require('../assets/images/kane-ai/app-test/edit-delete-configuration.png').default} alt="edit-delete-configuration" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/kane-ai/app-test/edit-configuration-modal.png').default} alt="edit-delete-configuration" className="doc_img"/>

:::warning Important
Any updates to the configuration will affect the new and planned test runs. Executed test runs will not be impacted.
:::

:::info Note
Edit functionality is only available on the Configurations page, not within the test run modal.
:::

### Delete a Configuration

1. Navigate to the **Configurations** page from the sidebar
2. Locate the configuration and click the **Actions menu** (⋮)
3. Select **Delete**
4. Confirm the deletion

:::warning Important
Deleting a configuration is only allowed if it's not associated with any Test Instance.
:::

---

## Using Configurations in Test Runs

Apply configurations to test cases when creating or editing test runs.

### Steps to Add Configurations

1. Select the test cases you want to configure
2. Click **Configure Test**
3. In the **Add Configuration** modal:
   - Search for existing configurations by name
   - Use filters to narrow down options (OS, Device Type, Browser)
   - Select configurations using checkboxes
   - Optionally, create a new configuration
   - Click **Manage Configurations** to open the central dashboard in a new tab

<!-- <img loading="lazy" src={require('../assets/images/kane-ai/app-test/add-configuration-modal.png').default} alt="add-configuration-modal" className="doc_img"/> -->

:::warning
Adding configurations **appends** to existing ones. It does not replace previously assigned configurations.
:::

### Bulk Selection

- Use the **Select All** toggle to select all configurations matching current filters
- This is useful for applying multiple configurations to test instances at once

---

## Best Practices

| Practice | Benefit |
|----------|---------|
| Use descriptive names | Easily identify configurations (e.g., "Chrome-Win11-1920x1080") |
| Manage from central dashboard | Edit and organize all configurations in one place |
| Enable Auto Update for apps | Always test with the latest app build |
| Use multi-select for devices | Increase device pool availability for KaneAI test runs |
| Review usage count before editing | Understand the impact of changes across test runs |
