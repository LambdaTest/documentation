---
id: Device-reservation
title: Device Reservation on Private Cloud Devices
description: Learn how to reserve private cloud devices in TestMu AI to ensure uninterrupted testing, fair access, and conflict-free usage across your team.
keywords: 
- device reservation
- private cloud
- device booking
- testmu ai devices
- test scheduling
url: https://www.testmu.ai/support/docs/device-reservation/
site_name: LambdaTest
slug: Device-reservation
canonical: https://www.testmu.ai/support/docs/Device-reservation/
---
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

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
          "name": "Python With Appium",
          "item": `${BRAND_URL}/support/docs/appium-python/`
        }]
      })
    }}
></script>

# Device Reservation on Private Device Cloud

**<BrandName /> Device Reservation** enables users to reserve private cloud devices in **advance**, ensuring uninterrupted access during critical testing windows. By scheduling devices ahead of time, teams can **prevent conflicts**, eliminate last-minute delays, and run both manual and automated tests with greater reliability. This becomes particularly valuable for time-sensitive releases, large-scale regression cycles, and continuous integration pipelines, where guaranteed device availability is essential.

Beyond preventing scheduling conflicts, Device Reservation also helps organizations **optimize resource utilization**, enforce fair usage policies, and gain clearer visibility into device allocation across teams, leading to more efficient and predictable testing operations.

> Device Reservation feature is currently in **closed beta** and continuously improving based on user feedback. please reach out via <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24×7 chat**</span> or email us at **support@testmu.ai** to enable it for your organization and try it out.
---

## Use Cases 

- **Release-Day Reliability**: Reserve devices in advance to guarantee uninterrupted testing during production releases or hotfix rollouts.  
- **Parallel Test Execution**: Secure multiple devices for running automated test suites in parallel, speeding up regression cycles.  
- **Cross-Team Coordination**: Schedule device bookings across QA, Dev, and Ops teams to align on shared testing timelines.  
- **Peak Hour Management**: Prevent conflicts during high-demand periods by ensuring fair access and availability through reservations.  
- **Optimized Resource Utilization**: Track and manage reservations to avoid idle devices and maximize the ROI of your private cloud setup.

---
## Device Reservation Workflow 

### Accessing the App Live Dashboard
1. Open the [App Live Dashboard](https://applive.lambdatest.com/app).
2. Enable the toggle for Private Devices (**Available only for private device customers**).
3. The User will see two buttons:
        - **My reservations** – View all ongoing and upcoming reservations with filter options.
        - **Go to Reservations** – Open the calendar view to explore and manage bookings.

First-time visitors will see an empty calendar and must create a reservation to begin scheduling devices.

![Device-Reservation-1](../assets/images/real-device-app-testing/Device-Reservations/Device-Reservation1.png)

:::

### Admin Privilege

Admins have additional controls to manage device reservations, accessible inside **Go to Reservations** under the settings button (as shown below):

- **Advance Booking Window** – Define how far in advance members can schedule reservations.
- **Max Reservation Duration** – Set the maximum duration allowed for a reservation (1–48 hours).
- **Active Reservations per Member** – Limit the number of active reservations per member (1–99).
- **Devices per Reservation** – Define how many devices can be booked in one reservation.

![Device-Reservation-5](../assets/images/real-device-app-testing/Device-Reservations/Device-Reservation5.png)

### Calendar View and Permissions

The **calendar** view differs for members and admins:

- **Members:**
  - The member view shows a calendar with reservation blocks for devices.
  - `Blue blocks` represent the member’s own reservations, which can be edited or deleted.
  - `Grey blocks` represent reservations made by other team members. Members cannot edit or delete these.

     ![Device-Reservation-6](../assets/images/real-device-app-testing/Device-Reservations/Device-reservations-User.png)

- **Admins:**
  - Admins can view and manage all reservations on the calendar.
  - They have full control to create, edit, or delete any reservation.

### Creating a Reservation

To create a reservation, click **Reserve Device** from the calendar view. Then choose the type of reservation:

- **Immediate Reservation** – Reserve a device instantly for 1 to 12 hours.
   ![Device-Reservation-4](../assets/images/real-device-app-testing/Device-Reservations/Device-Reservation4.png)
- **Future Reservation** – Schedule a reservation for a later date/time within the allowed scheduling window.
   ![Device-Reservation-3](../assets/images/real-device-app-testing/Device-Reservations/Device-Reservation3.png)

Select **one or multiple devices** based on availability and confirm the reservation.

### Viewing and Editing Reservations

After adding reservation slots, the user can view them under **My Reservations** and make edits or cancellations if required.

![Device-Reservation-2](../assets/images/real-device-app-testing/Device-Reservations/.Device-Reservation2.png)

### Session Expiry and Extensions

These rules apply to both admins and members, except admins can still override reservations.

- In the last **15 minutes** of a reservation, a pop-up appears notifying the user that the session is about to end.
- If no pre-booked reservation exists for the device, the user will have the option to extend the session.
- If another booking is already scheduled for the device, the extension option will still appear, but the request will **fail**.
- Once the reserved time ends, the device session is automatically closed and released.

:::tip
- Reservation cannot be edited after the slot has been started.
- If an **admin** deletes any reservation, it is **cancelled** immediately.
- In automation, reservations cannot be extended automatically in the last 15 minutes. Extensions must be handled manually.
:::
