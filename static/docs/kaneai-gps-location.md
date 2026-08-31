# How to Mock GPS Location With KaneAI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

GPS Location Override in KaneAI mocks the device GPS coordinates for **Mobile App** and **Mobile Browser** sessions, so you can test location-based behavior such as geo-restricted content, regional UI, or compliance flows. You set coordinates in **Advanced Settings** at session start and can change them while a session is running.

## Set GPS Location at Session Start


Follow these steps to mock GPS coordinates when the session launches.

### Step 1: Enable GPS Mocking


While creating a test session, open **Advanced Settings** and enable the GPS location mocking option. Enter the latitude and longitude, or search for a location on the map. Keep coordinates within the allowed ranges (see [Coordinate ranges](#coordinate-ranges)).



**Result:** The coordinates are set to apply when the session launches.

### Step 2: Launch the Session


Launch the session after entering the coordinates.

**Result:** The device GPS location is mocked at session start and stays active until you update it during the session.

### Step 3: Verify the Applied Location


Verify the GPS coordinates in any of these places:

- Inside the running session, by clicking **Advanced Settings**
- On the Session Summary page after execution
- In the playground during Edit Test, where the coordinates used in authoring are auto-selected



**Result:** The active coordinates are confirmed for the session.

## Update GPS Location Mid-session


Use the slash command to change the location while an authoring session is running, for example to simulate a user traveling between cities.

### Step 1: Open the GPS Action


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
- Latitude is less than -90 or greater than 90
- Longitude is less than -180 or greater than 180

**Resolution:**
- Verify that latitude and longitude values are within the valid ranges
- Ensure values are passed as valid numbers or numeric strings

## Next Steps


Continue with these guides:

- [KaneAI Advanced Settings](/support/docs/kaneai-advanced-settings/)
- [KaneAI Mobile App Capabilities](/support/docs/kane-ai-mobile-app-capabilities/)
