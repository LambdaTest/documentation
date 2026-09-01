# How to Set Appium Desired Capabilities on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Desired capabilities in Appium on TestMu AI are key-value pairs telling the Appium server which mobile platform and configuration to target for each test session. Use the TestMu AI capabilities generator to declare mandatory and optional capabilities running App Automation.

**Supported on:** Real &amp; Virtual devices

> **Note:** With TestMu AI [capabilities generator](https://www.testmuai.com/capabilities-generator/) run your App Automation leveraging Appium Desktop.

## Mandatory capabilities
| KEY | VALUES | CAPABILITY DESCRIPTION | SUPPORTED ON |
|-----|------- | ---------------------- |--------------|
| user | TYPE: STRING | Your `LT_USERNAME` | Real &amp; Virtual|
| accessKey | TYPE: STRING | Your `LT_Access_Key`| Real &amp; Virtual|
| isRealMobile | TYPE: BOOLEAN DEFAULT: FALSE`isRealMobile=TRUE` OR`isRealMobile=FALSE` | This capability is used to run the test on Real Device  with True value. | Real &amp; Virtual|
| deviceName | TYPE: STRING  `iPhone 13` | Name of the device. | Real &amp; Virtual|
| platformName | TYPE: STRING  `ios` | Name of the OS. |  Real &amp; Virtual|
| platformVersion    | TYPE: STRING  `14` | OS version. | Real &amp; Virtual|

## Debugging Options
| KEY | VALUES | CAPABILITY DESCRIPTION | SUPPORTED ON |
|-----|--------| -----------------------|--------------|
| video | TYPE: BOOLEAN  DEFAULT: TRUE  `video=TRUE`  OR  `video=FALSE` | Video recording of the complete screen. | Real &amp; Virtual|
| devicelog | TYPE: BOOLEAN  DEFAULT: FALSE  `devicelog=TRUE`  OR  `devicelog=FALSE` | Enable Device logs. | Real &amp; Virtual|
| network | TYPE: BOOLEAN  DEFAULT: FALSE  `network=TRUE`  OR  `network=FALSE` | Enable Network logs. | Real &amp; Virtual|
| console | TYPE: Boolean DEFAULT: FALSE `console: true` | Used to fetch the console logs.| Real &amp; Virtual|

## Test configuration
| KEY | VALUES | CAPABILITY DESCRIPTION | SUPPORTED ON |
|-----|--------| -----------------------|--------------|
| build | TYPE: STRING  DEFAULT: Untitled  `build=iOS Small Run` | You can group your tests like a job containing multiple tests. | Real &amp; Virtual|
| name | TYPE: STRING  DEFAULT: TestID of the Test. In case the Name is not passed.  `name=iphone 6 Small Run` | Name of your test. | Real &amp; Virtual|
| project | Will remain blank in case 'project' is not passed in capability.  `project=Small Run` | You can group your builds like a project containing multiple jobs. | Real &amp; Virtual|
| queueTimeout | TYPE: Integer  DEFAULT: 600  `queueTimeout=300` | This capability can be used to modify the Queue timeout value within a range. queueTimeout Range : 300-900. | Real &amp; Virtual|
| idleTimeout | TYPE: Integer  DEFAULT: 120  `idleTimeout=120` | This capability can be used to modify the timeout value. | Real &amp; Virtual|
| deviceOrientation | TYPE: STRING  DEFAULT: PORTRAIT  `deviceOrientation=portrait`  OR  `deviceOrientation=landscape` | Change the screen orientation of the device. | Real &amp; Virtual|
| orientation | TYPE: STRING  `orientation=auto` | This capability allows the app or browser to automatically adjust its display based on the physical orientation of the device. | Real &amp; Virtual|
| newCommandTimeout | TYPE: STRING  DEFAULT: 60  `newCommandTimeout=60` | How long (in seconds) Appium will wait for a new command from the client before assuming the client quit and ending the session. | Real &amp; Virtual|
| automationName | TYPE: STRING  DEFAULT (Android): UiAutomator2  DEFAULT (iOS): XCUITest  `automationName = UiAutomator2` | Choose which automation engine you'd like to use.  Android - `UiAutomator2`, `Flutter`.  iOS - `XCUITest`, `Flutter`. | Real &amp; Virtual|
| eventTimings | TYPE: BOOLEAN  DEFAULT: FALSE  `true` | Enable or disable the reporting of the timings for various Appium-internal events (e.g., the start and end of each command, etc.). To enable, use true. The timings are then reported as events property on response to querying the current session. See the event timing docs for the the structure of this response. | Real &amp; Virtual|
| otherApps | TYPE: ARRAY OF STRINGS  DEFAULT: [ ] or Empty Array  `"otherApps":`  `["lt://APP1002211081648217405891389",`  `"lt://APP1002211081648217429465823"]` | Accepts a list of App URLs returned after uploading an app on the TestMu AI servers.  Conditions to be satisfied:1. App should also be passed if "otherApps" is passed. 2. Length of app URL array &le; 3.3. At max 3 other apps can be installed.4. App should not be present inside 'otherApp' array.5. No duplicates in ‘otherApp’ array. | Real &amp; Virtual|
| globalHttpProxy | TYPE: BOOLEAN  DEFAULT: FALSE   globalHttpProxy = true | This is only for Android specific applications and devices.  If the customer’s app requires Proxy to enable Data Transfer that is not possible otherwise, they can reach out to the CS & LT will enable it for them from BE.This is not available for customers directly unless set from BE by LT. | Real|
| region | TYPE: STRING  DEFAULT: Location of the nearest data center  `region = US` | 1. By default, it picks the location of the nearest data center.2.  If you would like to change the region of the Data Center manually, you can pass this capability. 3. Currently, only three regions are supported: Europe - "EU", USA - "US" and Asia-Pacific - "AP" | Real &amp; Virtual|
| waitForIdleTimeout | TYPE: BOOLEAN  `waitForIdleTimeout = 0` | 1. Sets the timeout for waiting for the user interface to go into an idle state before starting a UI Automator action.2.  It changes the timeout of the configuration in UIAutomator and could help to make interaction speed faster.| Real &amp; Virtual|
| privateCloud | TYPE: BOOLEAN  DEFAULT: FALSE `privateCloud: True`| If your organization has opted for Private Cloud, then using this flag will fetch the devices from your Private Cloud.  If your organization has not opted for Private Cloud, your test can fail if this capability is passed.| Real &amp; Virtual|
| w3c | TYPE: Boolean DEFAULT: FALSE `w3c: true` | Appium will use the W3C webdriver protocol when it's set to true.| Real &amp; Virtual|
| autoLaunch | TYPE: Boolean DEFAULT: TRUE `autoLaunch: false`| If the user doesn't pass this, the app will start on boot. Else, it will not open on boot.| Real &amp; Virtual|

### Android
| KEY | VALUES | CAPABILITY DESCRIPTION | SUPPORTED ON |
|-----|--------| -----------------------|--------------|
| playStoreLogin | TYPE: STRINGS OF HASHMAP  DEFAULT: FALSE `"playStoreLogin":``{"email":user@gmail.com","password":"ejndfdfs"}` | The capability is used to login to Play Store on Android devices.  Conditions to be specified: 1. The account should not be using any kind 2 factor authentication, otherwise the test can fail.  2. The account should not require you to login using a trusted device using popup or OTP.  3. Since we clean the Device after each session, please make sure you are logging into the account during each session.|  Real|
| appActivity   | TYPE: String `com.lambdatest.proverbial/.home`| Launch the activity directly on the device using the App Activity. **Only for Android**.| Real &amp; Virtual|
| appPackage   | TYPE: String `com.lambdatest.proverbial`| Launch the app directly on the device using the App Package. **Only for Android**.| Real &amp; Virtual|

### iOS
| KEY | VALUES | CAPABILITY DESCRIPTION | SUPPORTED ON |
|-----|--------| -----------------------|--------------|
| resignApp | TYPE: BOOLEAN  DEFAULT: True  `resignApp = true` | 1. By default, if this capability is not passed, your app will be re-signed. 2. You can pass "false" as a capability to prevent your apps from being re-signed. 3. This is only for iOS-specific applications and devices |  Real|
| bundleId | TYPE: String `com.whatsapp`| Launch the app directly on the device using the Bundle ID. **Only for iOS**.| Real &amp; Virtual|
| autoDismissAlerts | TYPE: BOOLEAN  DEFAULT: False  `autoDismissAlerts=TRUE`  OR  `autoDismissAlerts=FALSE` | Appium capability to Dismiss alerts/popups on iOS Devices. | Real &amp; Virtual|
| autoAcceptAlerts | TYPE: BOOLEAN  DEFAULT: True  `autoAcceptAlerts=TRUE`  OR  `autoAcceptAlerts=FALSE` | Appium capability to Accept alerts/popups on iOS Devices. | Real &amp; Virtual|
| noReset | TYPE: BOOLEAN  DEFAULT: False `true` | Don't reset app state before this session. See [here](https://appium.readthedocs.io/en/stable/en/writing-running-appium/other/reset-strategies/) for more details.                                                                                                                               | Real &amp; Virtual|
## Real User conditions
| KEY | VALUES | CAPABILITY DESCRIPTION | SUPPORTED ON |
|-----|--------| -----------------------|--------------|
| language | TYPE: STRING  `fr` | Language to set for iOS (XCUITest driver only) and Android. | Real &amp; Virtual|
| locale | TYPE: STRING  `fr_CA, CA` | Locale to set for iOS (XCUITest driver only) and Android. fr_CA format (language code and country name abbreviationfor iOS). CA format (country name abbreviation) for Android. For more info, [click here.](/support/docs/list-of-supported-locales/) | Real &amp; Virtual|
| disableAnimation | TYPE: BOOLEAN  DEFAULT: False `disableAnimation = true` | Disable all kinds of animations on the complete device [including all applications] that is running the test.| Real &amp; Virtual|
| lambdaMaskCommands | TYPE: Array of Strings  DEFAULT: Empty Array `["setValues", "setCookies", "getCookies"]` | Used to make sure that the values aren't shown on the device. The text could be a Password.| Real &amp; Virtual|
| timezone | TYPE: String `timezone=UTC+13:00``timezone=UTC-0400` | Used to set the timezone on the device using the UTC Time. If this capability is not passed, the device will auto update the timezone based on the physical location of the device.| Real &amp; Virtual|
| geoLocation | TYPE: String `geoLocation=US``geoLocation=FR` | Used to change the geolocation of the device to the location provided.  If this capability is not passed, the device will auto update the Geo Location based on the physical location of the device.| Real &amp; Virtual|
| enableImageInjection | TYPE: Boolean DEFAULT: false `enableImageInjection: true` | Used to enable the Image Injection for the app. Must send "media" capability along with this capability.| Real &amp; Virtual|
| media | TYPE: STRING `media: Path to the image`|Used to provide the media to upload the file to the app for Image Injection. If this capability is not passed, then the no media will be sent to the device. Must send "enableImageInjection" capability along with this capability.|  Real|
| enableBluetooth | TYPE: Boolean DEFAULT: false `enableBluetooth: true` | Used to enable the bluetooth functionality during the session.|  Real|
| location | TYPE: HashMap   Python example:  `location: {"lat": "28.6235192", "long": "77.3662948"}`   For examples in other languages, please head over to [Capability Generator](https://www.testmuai.com/capabilities-generator/)  | Used to change the GPS Geolocation of the device to the location provided.  If this capability is not passed, the device will auto update the Geo Location based on the physical location of the device.  It needs to be passed in a HashMap structure with `lat` & `long` being passed separately. | Real &amp; Virtual|

## Device configuration
| KEY | VALUES | CAPABILITY DESCRIPTION | SUPPORTED ON |
|-----|--------| -----------------------|--------------|
| autoGrantPermissions | TYPE: BOOLEAN  `autoGrantPermissions=TRUE`  OR  `autoGrantPermissions=FALSE` | Have Appium automatically determine which permissions your app requires and grant them to the app on install. Defaults to false. If noReset is true, this capability doesn't work. | Real &amp; Virtual|
| proxyUrl  | TYPE: STRING `proxyUrl: 192.168.1.1:8080`| Used to change the Proxy Address of the device. Data will pass through the specified proxy address. If this capability is not passed, then there'll be no proxy being added to the device.| Real &amp; Virtual|

## Network configuration
| KEY | VALUES | CAPABILITY DESCRIPTION | SUPPORTED ON |
|-----|--------| -----------------------|--------------|
| tunnel | TYPE: BOOLEAN  `tunnel=TRUE`  OR  `tunnel=FALSE` | To test local applications with TestMu AI.| Real &amp; Virtual|
| tunnelName | TYPE: STRING  `tunnelName=RabbitHole` | Name of the tunnel. | Real &amp; Virtual|
| dedicatedProxy | TYPE: BOOLEAN  `dedicatedProxy=TRUE`  OR  `dedicatedProxy=FALSE` | Dedicated Proxy. | Real &amp; Virtual|
| blockDomains | TYPE: Array of Strings  `"blockDomains": ["www.facebook.com", "www.amazon.com"]  ` | It is used to block the mentioned domains on the device.|  Real|

> Got any questions?
> Please reach out at our **24x7 Chat Support** or you could also mail us at [support@testmuai.com](https://support.lambdatest.com/).
