---
id: private-device-allocation-to-teams
title: Private Device Allocation to Teams
hide_title: false
sidebar_label: Private Device Allocation to Teams
description: Efficiently manage private cloud devices with TestMu AI's Teams feature. Allocate or deallocate devices to teams for secure and streamlined testing workflows.
keywords:
- private device
- private decive allocation to teams
- real device
- virtual device
url: https://www.testmu.ai/support/docs/private-device-allocation-to-teams/
site_name: LambdaTest
slug: private-device-allocation-to-teams/
canonical: https://www.testmu.ai/support/docs/private-device-allocation-to-teams/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "name": "Private Device Allocation to Teams",
          "item": `${BRAND_URL}/support/docs/private-device-allocation-to-teams/`
        }]
      })
    }}
></script>
The Teams feature for Private Cloud Devices enables organization admins to divide and allocate private cloud devices among teams within their organization which ensures effective resource management. Team members then gain exclusive access to the allocated devices, ensuring efficient and secure testing workflows.

> To enable it for your organization, please contact us via <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24×7 chat support**</span> or you can also drop a mail to **support@testmuai.com**.<br />

## Steps to Allocate Devices to Teams

> Only the organization's Admins have the authority to allocate or deallocate devices.

### Step 1:  Create or Select a Team
- Go to the Teams section under the Organization Settings
- Create your [Organization](/support/docs/team-management/#create-an-organization) 
- Then, create your [Team](/support/docs/team-management/#create-your-first-team) and assign members by selecting users from your organization.

### Step 2: Allocate Devices to the Team
In the **Private Cloud Devices** tab section, distribute your devices amongst your teams for restricted access via:

<Tabs className="docs__val">

<TabItem value="bulk" label="Bulk Distribute" default>
    - Click on the **Bulk Distribute** button and select all the devices that you want to allocate to the teams.
    - Click on the **Distribute** button. In the popup, choose the teams from the dropdown list.
    - Click on the **Allocate** button.
The devices will now appear in the selected team’s device pool, accessible only to its members.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/teams/bulk-distribute.gif').default} alt="Image" className="doc_img img_center"/>

</TabItem>

<TabItem value="single" label="Uni Distribute" default>
    - Click on the **Allocate** button from the right side of your desired device.
    - In the popup, choose the teams from the dropdown list.
    - Click on the **Allocate** button.
The selected device will now appear in the team’s device pool, accessible only to its members.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/teams/uni-distribute.gif').default} alt="Image" className="doc_img img_center"/>
</TabItem>

</Tabs>

> You can also see tags of all those teams to which those devices are allocated.

## Deallocate any Device from Teams
- Click on the **Deallocate** button from the right side of your desired device.

The selected device will no longer appear in all those allocated team’s device pool.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/teams/deallocate-device.gif').default} alt="Image" className="doc_img img_center"/>

## Edit Allocation of any Device
To edit allocation of any device, or simply if you want to add/remove any team allocation for any particular device then:

- Click on the **Edit Allocation** button from the right side of your desired device.
- Select or Deselect your required teams.
- Click on the **Allocate** button.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/teams/edit-allocation.gif').default} alt="Image" className="doc_img img_center"/>

:::info
A device in a busy state will not be allocated or deallocated.
:::

## Filter your Devices
In the topbar, you have plenty of options to filter your devices based on:

- You can select from the drop down whether you want to see **All Devices**, **Allocated Devices**, or all the **Available Devices** in the table.
- You can also search for a particular device based on the **device name**, or its **UDID**.
- **OS :** Select which OS devices you want to allocate or deallocate.
- **Teams :** Select from which team you want to filter your device and perform allocation or deallocation of devices.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/teams/filters.png').default} alt="Image" className="doc_img img_center"/>
