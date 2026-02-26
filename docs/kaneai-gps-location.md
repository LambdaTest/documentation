---
id: kaneai-gps-location
title: GPS location mocking for Mobile App Authoring
hide_title: false
sidebar_label: GPS Location
description: Learn how to use GPS Location Override feature in KaneAI for testing location-based mobile app functionalities
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai mobile app
  - gps location
  - location override
  - geolocation testing
url: https://www.testmuai.com/support/docs/kaneai-gps-location/
site_name: TestMu AI
slug: kaneai-gps-location/
canonical: https://www.testmuai.com/support/docs/kaneai-gps-location/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "GPS location",
          "item": "https://www.testmuai.com/support/docs/kaneai-gps-location/"
        }]
      })
    }}
></script>

> This document provides detailed instructions for utilizing GPS Location Override feature in KaneAI's mobile app testing. It covers how to set GPS coordinates during session initialization as well as during an active authoring session to test location-based application behavior accurately.

## Overview

Testing location-based application behavior (such as geo-restricted content, regional UI, compliance flows, or location-aware features) is challenging when device GPS coordinates are dynamic or tied to the physical location of the tester.

The GPS Location Override feature solves this problem by allowing users to explicitly define latitude and longitude values both during session initialization and while an authoring session is in progress. This ensures consistent, repeatable, and deterministic testing of location-dependent scenarios on supported mobile devices.

## How To Use

### Select GPS location while Authoring App Test

While creating a test session, go to Advanced Settings and enable GPS location mocking option. Either include the location Coordinates or search for a particular location from the map. Ensure the coordinates fall within the allowed ranges:

- Longitude: -180 to 180
- Latitude: -90 to 90

<img loading="lazy" src={require('../assets/images/kane-ai/features/gps/gps-advanced-settings.jpg').default} alt="gps-enabled" className="doc_img"/>

### Start the Session

1. Launch the session after providing the coordinates.
2. The device GPS location is mocked at session start.
3. The configured location remains active until it is updated during the session.

### Verify the Applied Location

GPS coordinates can be verified:
- Inside the running session by clicking **Advanced Settings**
- On the Session Summary page after execution
- During Edit Test, the coordinates used in authoring are autoselected in playground

<img loading="lazy" src={require('../assets/images/kane-ai/features/gps/gps-in-session.png').default} alt="GPS-in-session" className="doc_img"/>

### Update GPS Location During an Active Session

You can also set or update the GPS location while an authoring session is already running using the **slash command**. This is useful when your test flow requires the device location to change mid-session (e.g., simulating a user traveling between cities).

**Step 1:** Inside an active authoring session, type `/` in the action input field to open the slash command menu. Select **Set GPS Location**.

<img loading="lazy" src={require('../assets/images/kane-ai/features/gps/slash-command-gps.png').default} alt="slash-command-gps" className="doc_img"/>

**Step 2:** In the **Select GPS Location** modal, search for a location by name or enter latitude and longitude coordinates directly. The map preview updates to reflect the selected position.

<img loading="lazy" src={require('../assets/images/kane-ai/features/gps/gps-selection-modal.png').default} alt="gps-selection-modal" className="doc_img"/>

**Step 3:** Click **Confirm Location** to apply the new GPS coordinates. A success notification confirms the update, and the new coordinates are recorded as a step in your test.

<img loading="lazy" src={require('../assets/images/kane-ai/features/gps/gps-set.png').default} alt="gps-set" className="doc_img"/>

:::note
The updated GPS location takes effect immediately on the device and remains active until changed again or the session ends.
:::

## Limitations

- Replay/Edit sessions reuse GPS values from the original session
- Currently not supported for Mobile Browser sessions

## Troubleshooting

### Invalid Latitude or Longitude Error

**Issue:** Session fails to start due to a validation error.

**Cause:**
- Longitude is less than -180 or greater than 180
- Latitude is less than -90 or greater than 90

**Resolution:**
- Verify that latitude and longitude values are within valid ranges
- Ensure values are passed as valid numbers or numeric strings


### Feature Not Working in Mobile Browser

**Issue:** GPS override is currently not supported for mobile browser testing.

**Reason:**
- GPS Location Override is not currently supported for Mobile Browser sessions

**Workaround:**
- Use Mobile App testing for GPS-dependent scenarios

---

> Have any feedback or request? Reach out to us via [support@testmuai.com](mailto:support@testmuai.com) and we would be happy to hear from you.
