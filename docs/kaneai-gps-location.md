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
url: https://www.lambdatest.com/support/docs/kaneai-gps-location/
site_name: LambdaTest
slug: kaneai-gps-location/
canonical: https://www.testmu.ai/support/docs/kaneai-gps-location//
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
          "item": "https://www.lambdatest.com/support/docs/kaneai-gps-location/"
        }]
      })
    }}
></script>

> This document provides detailed instructions for utilizing GPS Location Override feature in KaneAI's mobile app testing. It covers how to set GPS coordinates during session initialization to test location-based application behavior accurately.

## Overview

Testing location-based application behavior (such as geo-restricted content, regional UI, compliance flows, or location-aware features) is challenging when device GPS coordinates are dynamic or tied to the physical location of the tester.

The GPS Location Override feature solves this problem by allowing users to explicitly define latitude and longitude values during session initialization. This ensures consistent, repeatable, and deterministic testing of location-dependent scenarios on supported mobile devices.

## How To Use

### Select GPS location while Authoring App Test

While creating a test session, go to Advanced Settings and enable GPS location mocking option. Either include the location Coordinates or search for a particular location from the map. Ensure the coordinates fall within the allowed ranges:

- Longitude: -180 to 180
- Latitude: -90 to 90

<img loading="lazy" src={require('../assets/images/kane-ai/features/gps/gps-advanced-settings.jpg').default} alt="gps-enabled" className="doc_img"/>

### Start the Session

1. Launch the session after providing the coordinates
2. The device GPS location is mocked at session start
3. The configured location remains active for the entire session of the test being authored.


### Verify the Applied Location

GPS coordinates can be verified 
- Inside the running session by clicing Advanced Settings
- On the Session Summary page after execution
- During Edit Test, the coordinates used in authoring would be autoselected in playground

<img loading="lazy" src={require('../assets/images/kane-ai/features/gps/gps-in-session.png').default} alt="GPS-in-session" className="doc_img"/>

## Limitations

- GPS override is applied only during authoring session initialization
- GPS coordinates cannot be changed while the session is running
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

**Issue:** GPS override Currently not suported for mobile browser testing.

**Reason:**
- GPS Location Override is not currently supported for Mobile Browser sessions

**Workaround:**
- Use Mobile App testing for GPS-dependent scenarios

---

> Have any feedback or request? Reach out to us via [support@testmu.ai](mailto:support@testmu.ai) and we would be happy to hear from you.