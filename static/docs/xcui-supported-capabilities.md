# XCUI Supported Capabilities on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

XCUI supported capabilities on TestMu AI let you configure iOS XCUITest automation on real and virtual devices, controlling the app, test suite, device, video, timeouts, device and network logs, build name, geolocation, GPS coordinates, tunnel, Bluetooth, and app re-signing behavior.

**Supported on:** Real &amp; Virtual devices

> These capabilities are also supported for [Virtual Devices](/support/docs/app-automation-on-emulators-simulators/)

| Capability Name | Data Type | Description |
|------|-----------|-------------|
| app Real &amp; Virtual| String | Enter the app id generated while uploading the app to the platform. Example:`lt://APP123456789123456789` |
| testSuite Real &amp; Virtual| String | Enter the test suite id generated while uploading the test suite to the platform. Example: `lt://APP123456789123456789` |
| device Real &amp; Virtual| String | Enter the device name and os version in `DeviceName-OSVersion` format. Example: `"device" :  ["Galaxy S20-10","Pixel 3 XL-9"]` |
| video Real &amp; Virtual| Boolean | When you pass the `video: true`, it will generate the video for all the tests that are executed. |
| queueTimeout Real &amp; Virtual| Integer | Enter the time in seconds after which you want your build to timeout from queue. Example: `queueTimeout: 300` |
| idleTimeout Real &amp; Virtual| Integer | Enter the time in seconds for maximum running time of a test in a build. Example: `idleTimeout: 120`|
| deviceLog Real &amp; Virtual| Boolean | To generate the device logs, pass the value as `deviceLog: true` |
| network Real &amp; Virtual| String | To generate the network logs, pass the value as `network: true`. |
| build Real &amp; Virtual| String | To set the Espresso build name. Example: `build: My Espresso Build`. |
| geoLocation Real| String | Set the geolocation [country code](/support/docs/appium-ip-geolocation/#supported-ip-geolocations) if you want to enable the same in your test. Example: `geoLocation: FR`|
| gpsLocation Real &amp; Virtual| Decimal | The capability should be defined to override the device’s default GPS coordinates and should be provided as a comma-separated string. Example: `"location": {"lat": "-50","long": "150.028333"}`.|
| tunnel, tunnelName Real &amp; Virtual| Boolean | To activate the tunnel mode, pass the value as `tunnel: true` and provide the name of your tunnel as `tunnelName: NewTunnel` |
| enableBluetooth Real| Boolean | Used to enable the bluetooth functionality during the session. Example: `enableBluetooth: true`|
| resignApp  Not supported in **Virtual Devices** | Boolean | Set this to `false` if you want to to prevent the apps from being re-signed. The app should be built for enterprise distribution. |
| testRemarks    Real| Boolean| Set to `true` to surface failure remarks at the top of the dashboard when a test fails. Has no effect on passing tests. **Default**: `false`. |
| retries    Real| Integer |Defines the number of times a test should automatically retry if it fails. Maximum allowed value: 5.|
| region Real| String | Set the region for the test execution data center. Supported values: `US`, `EU`, `AP`. **Default:** Nearest data center. Example: `region: EU` |
| uploadMedia Real| String | Upload media files to the device for testing. Provide the media URL generated after [uploading the file](/support/docs/upload-media/). **Default:** `null`. Example: `uploadMedia: lt://MEDIA123456789` |


Ensure that the latitude is between -90 and 90, and the longitude is between -180 and 180. Otherwise, an error will occur like "Invalid GPS location: Latitude must be between -90 and +90, Longitude must be between -180 and +180."


**Important**
You can either use **GeoLocation** or **Tunnel** in single execute command. They both are mutually exclusive.
