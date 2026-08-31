# GPS Location Mocking for Mobile App and Browser Authoring

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

> This document provides detailed instructions for utilizing the GPS Location Override feature in KaneAI for both Mobile App and Mobile Browser testing. It covers how to set GPS coordinates at the start of a session as well as within a running session to test location-based application behavior accurately.

## Overview


Follow these steps to mock GPS coordinates when the session launches.

The GPS Location Override feature solves this problem by allowing users to explicitly define latitude and longitude values both during session initialization and while an authoring session is in progress. This ensures consistent, repeatable, and deterministic testing of location-dependent scenarios on supported mobile devices.


While creating a test session, open **Advanced Settings** and enable the GPS location mocking option. Enter the latitude and longitude, or search for a location on the map. Keep coordinates within the allowed ranges (see [Coordinate ranges](#coordinate-ranges)).



**Result:** The coordinates are set to apply when the session launches.

### Select GPS location while Authoring App Test


Launch the session after entering the coordinates.

- Longitude: -180 to 180
- Latitude: -90 to 90

### Start the Session


Verify the GPS coordinates in any of these places:

### Verify the Applied Location

GPS coordinates can be verified:
- Inside the running session by clicking **Advanced Settings**
- On the Session Summary page after execution
- During Edit Test, the coordinates used in authoring are autoselected in playground



**Result:** The active coordinates are confirmed for the session.

You can also set or update the GPS location while an authoring session is already running using the **slash command**. This is useful when your test flow requires the device location to change mid-session (e.g., simulating a user traveling between cities).


Use the slash command to change the location while an authoring session is running, for example to simulate a user traveling between cities.

**Step 2:** In the **Select GPS Location** modal, search for a location by name or enter latitude and longitude coordinates directly. The map preview updates to reflect the selected position.


In an active authoring session, type `/` in the action input field to open the slash command menu, then select **Set GPS Location**.



**Result:** The **Select GPS Location** modal opens.

### Step 2: Choose the New Location


Search for a location by name, or enter latitude and longitude directly. The map preview updates to reflect the selected position.



**Result:** The map shows the new position.

### Step 3: Apply the Location


Click **Confirm Location** to apply the new coordinates.



**Result:** The new coordinates take effect immediately, are recorded as a step in your test, and stay active until changed again or the session ends.

## Coordinate Ranges


Enter latitude and longitude values within the following ranges.

| Coordinate | Allowed range |
|---|---|
| Latitude | -90 to 90 |
| Longitude | -180 to 180 |

## Limitations


Keep these limitations in mind:

- GPS override is applied during session initialization and can be changed mid-session.
- Replay and Edit sessions reuse the GPS values from the original session.

## Troubleshooting


Use these solutions to resolve common GPS location issues.

### Invalid Latitude or Longitude Error


**Issue:** The session fails to start due to a validation error.

**Cause:**
- Longitude is less than -180 or greater than 180
- Latitude is less than -90 or greater than 90

**Resolution:**
- Verify that latitude and longitude values are within valid ranges
- Ensure values are passed as valid numbers or numeric strings

## Next Steps


Continue with these guides:

- [KaneAI Advanced Settings](/support/docs/kaneai-advanced-settings/)
- [KaneAI Mobile App Capabilities](/support/docs/kane-ai-mobile-app-capabilities/)
