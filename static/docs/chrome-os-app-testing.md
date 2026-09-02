# ChromeOS App Testing

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

This document outlines how you can leverage the features like mark as bug, changing IP geolocation, in-depth device logs and network logs etc to ease your Real Time App testing process.

## Steps to start your ChromeOS App Testing

**Step 1:** Click on the Real Time option from your TestMu AI dashboard.
**Step 2:** Click on the **Virtual Mobile** option in **App Testing** section.
**Step 3:** Select the **ChromeOS** option, and upload your application to the TestMu AI. (We are using the sample application for the demo purpose)
**Step 4:** Select your screen resolution and click on **Start** button.

## Device Controls
This transcend basic volume adjustments and lock/unlock functionalities. It empowers you to interact with the emulated ChromeOS device programmatically, automating tasks and integrating them within your testing scripts. This gives you fine-grained control over the device's state, tailoring the testing environment to your specific needs.

## App Controls
This provide programmatic control over the applications installed within the emulator (e.g., install new app, kill the existing app, or uninstall the app).  App Controls give you the power to do it all programmatically. This streamlines your testing process by eliminating the need for manual app manipulation within the emulator.

## Screenshot
Screenshots remain a cornerstone for capturing static images of the current emulator screen.  These screenshots serve as invaluable visual references throughout the testing process, aiding in bug reporting, test case documentation, and visual regression testing.

## Record Session
This allows you to record a video of your testing session, providing a detailed playback for in-depth bug analysis, test case demonstrations, and comprehensive test case documentation.

## Gallery
Serves as your central hub for all captured screenshots and recorded sessions from your ChromeOS testing endeavors. This eliminates the need to search for these assets across different locations. The Gallery provides easy access, allowing you to review, download, and organize your testing assets effortlessly.

## Mark as Bug
It empowers you to streamline bug reporting within the testing environment itself. Encounter a UI glitch? Simply capture a screenshot, optionally annotate it with relevant details using shapes, text, and color coding, and seamlessly report the bug via your preferred integrated project management tool. This integration eliminates the need for context switching and facilitates efficient bug reporting.

## IP Geolocation
This transcends basic location selection. It allows you to spoof the IP address of your emulated device, simulating various geographical locations across over 45 countries. This enables you to test geo-restricted features, localized content delivery, and the overall user experience for a global audience.

## Network Throttling
It goes beyond simply simulating different network speeds (3G, 4G). It empowers you to create custom network setups, allowing you to test your app's behavior under a wide range of bandwidth limitations and network configurations. This is crucial for optimizing app performance and ensuring a seamless user experience even in areas with limited or unreliable internet connectivity.

## Settings
Settings provide a central location to configure various aspects of your emulated ChromeOS environment. Change the language settings to conduct localized testing, or define the timeout scenario to manage test session duration based on your needs.

## Switch
Switch allows you to seamlessly switch between multiple emulated devices within the same project.  This eliminates the need to tear down and rebuild individual emulators, streamlining your testing workflow and enabling you to compare app behavior across different ChromeOS device configurations.

## End Session
Terminates the current emulator instance, freeing up resources and allowing you to start a fresh session with a clean slate.

## Advance Tools

### UI Inspector
This is designed to examine and interact with the user interface (UI) elements of your mobile apps, or desktop applications. It acts like a behind-the-scenes detective, allowing you to delve into the inner workings of your app's interface.

### DevTools
This provide access to all types of logs (Device, Network, and App) and you can also sort them as per their status (Activity, Warning, Debug, Error). You can also download these logs.

### Adb Shell
It provides a Unix-like shell environment, allowing you to execute commands on the device itself. It is used for interacting with the Android operating system directly on a connected Android device or emulator.
