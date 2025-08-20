---
id: device-reservation
title: Device Reservation on Private Cloud Devices
sidebar_label: Device Reservation
description: Learn how to reserve private cloud devices in LambdaTest to ensure uninterrupted testing, fair access, and conflict-free usage across your team.
keywords: 
- device reservation
- private cloud
- device booking
- lambdatest devices
- test scheduling
url: https://www.lambdatest.com/support/docs/device-reservation/
site_name: LambdaTest
slug: device-reservation/
---
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Python With Appium",
          "item": "https://www.lambdatest.com/support/docs/appium-python/"
        }]
      })
    }}
></script>

# Device Reservation on Private Device Cloud

**LambdaTest Device Reservation** enables you to reserve private cloud devices in **advance**, ensuring uninterrupted access during critical testing windows. By scheduling devices ahead of time, teams can **prevent conflicts**, eliminate last-minute delays, and run both manual and automated tests with greater reliability. This becomes particularly valuable for time-sensitive releases, large-scale regression cycles, and continuous integration pipelines, where guaranteed device availability is essential.

Beyond preventing scheduling conflicts, Device Reservation also helps organizations **optimize resource utilization**, enforce fair usage policies, and gain clearer visibility into device allocation across teams, leading to more efficient and predictable testing operations.

---

## Use Cases 

- **Release-Day Reliability**: Reserve devices in advance to guarantee uninterrupted testing during production releases or hotfix rollouts.  
- **Parallel Test Execution**: Secure multiple devices for running automated test suites in parallel, speeding up regression cycles.  
- **Cross-Team Coordination**: Schedule device bookings across QA, Dev, and Ops teams to align on shared testing timelines.  
- **Peak Hour Management**: Prevent conflicts during high-demand periods by ensuring fair access and availability through reservations.  
- **Optimized Resource Utilization**: Track and manage reservations to avoid idle devices and maximize the ROI of your private cloud setup.

---
# Device Reservation Workflow 

## Accessing the App Live Dashboard
1. Open the [App Live Dashboard](https://applive.lambdatest.com/app).
2. Enable the toggle for Private Devices (**Available only for private cloud devices**).
3. You will see two buttons:
        - **My reservations** – View all ongoing and upcoming reservations with filter options.
        - **Go to Reservations** – Open the calendar view to explore and manage bookings.
 
![Device-Reservation-1](../assets/images/real-device-app-testing/Device-Reservations/Device-Reservation1.png)

:::

## Checking Your Reservations

You can easily track your device bookings:
- Click **My Reservations** on the App Live Dashboard.
- View all your upcoming and ongoing reservations.
- Apply filters to quickly locate specific bookings.

![Device-Reservation-2](../assets/images/real-device-app-testing/Device-Reservations/.Device-Reservation2.png)

## Making a Reservation
1. Click `Reserve Device`.
2. In the reservation window, choose the type of reservation:
   - **Immediate Reservation** – Reserve a device instantly for 1 to 12 hours.
      ![Device-Reservation-4](../assets/images/real-device-app-testing/Device-Reservations/Device-Reservation4.png)
   - **Future Reservation** – Schedule a reservation for a later date/time within the allowed scheduling window.
   ![Device-Reservation-3](../assets/images/real-device-app-testing/Device-Reservations/Device-Reservation3.png)
3. Select **one or multiple devices** based on availability.
4. Confirm your reservation.

## Calendar View and Permissions
The **calendar** view works differently for users and admins:
- **Users:**
  - The user view shows a calendar with reservation blocks for devices.
  - `blue blocks` represent the user’s own reservations, which can be edited or deleted.
  - `grey blocks` represent reservations made by other team members. Users cannot edit or delete these.
     ![Device-Reservation-6](../assets/images/real-device-app-testing/Device-Reservations/Device-reservations-User.png)
- **Admins:**
  - In addition to the User view, Admins can access a **Settings** tab with the following controls:
    - **Advance Booking Window** – Define how far in advance users can schedule reservations.
    - **Max Reservation Duration** – Set the maximum duration allowed for a reservation (1–48 hours).
    - **Active Reservations per User** – Limit the number of active reservations per user (1–99).
    - **Devices per Reservation** – Define how many devices can be booked in one reservation.
   ![Device-Reservation-5](../assets/images/real-device-app-testing/Device-Reservations/Device-Reservation5.png)
  - Also Admin can create, edit, and delete any reservation.

:::info
For Admins, all blocks appear blue since they can edit or delete any reservation
:::
## Using Reservations in Automated Testing

To use a reserved device in automation:
1. Create a reservation for your device and note its UUID.
2. In your automation script, add the following capabilities 
        - **fixedIP**: This field accepts the UUID of the reserved device, guaranteeing that your automation session is executed on that specific device rather than any random match.
        - **privateCloud**: Set this to `true` to ensure the session is executed only on your private cloud devices, preventing it from falling back to shared public devices.
<Tabs className="docs__val">
<TabItem value="ios" label="iOS" default>

```python
desired_caps = {
    "deviceName": "iPhone 16",
    "platformName": "iOS",
    "platformVersion": "18",
    "isRealMobile": True,
    "app": "YOUR_APP_URL",
    "build": "Sample Build",
    "name": "Sample Name",
    # highlight-next-line
    "fixedIP": "<your-device-uuid>",  # Replace with the device UUID
    # highlight-next-line
    "privateCloud": true
}
```

</TabItem>

<TabItem value="android" label="Android" default>

```python
desired_caps = {
    "deviceName": "Galaxy S25",
    "platformName": "Android",
    "platformVersion": "16",
    "isRealMobile": True,
    "app": "YOUR_APP_URL",
    "build": "Sample Build",
    "name": "Sample Name",
    # highlight-next-line
    "fixedIP": "<your-device-uuid>",  # Replace with the device UUID
    # highlight-next-line
    "privateCloud": true
}
```

</TabItem>
</Tabs>
This ensures that your automation run is executed on the reserved private cloud device.

## Session Expiry and Extensions
- In the last **15 minutes** of a reservation, a pop-up appears notifying you that the session is about to end.
- If no pre-booked reservation exists for the device, you will have the option to extend your session.
- If another booking is already scheduled for the device, the extension option will still appear, but the request will **fail**.
- Once the reserved time ends, the device session is automatically closed and released.

:::tip
- If an **admin** edits your reservation timeline, your current session will not be interrupted.
- If an **admin** deletes your reservation, it is **canceled** immediately.
- In automation, reservations cannot be extended automatically in the last 15 minutes. Extensions must be handled manually.
:::