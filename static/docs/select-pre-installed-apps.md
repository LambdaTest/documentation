# Select Pre-Installed App in Session

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

TestMu AI empowers developers with a comprehensive testing environment, enabling thorough examination of mobile applications and websites across real devices and browsers. One standout feature is the ability to start testing sessions with pre-installed applications, enhancing efficiency, and reducing test start time,  in **private cloud** setups where data retention and reusability are paramount.


To access the pre-installed apps, you need to have a **Private Cloud** Plan.

You can purchase or upgrade to the required [plan](https://www.testmuai.com/pricing/). If you need assistance, please contact your TestMu AI support representative, reach out to our **[24×7 Chat Support]**, or email us at **support@testmuai.com**.




## Start a Manual Session with Pre-Installed Apps

Let's delve into the streamlined steps to initiate a manual testing session with pre-installed applications:

**Step 1.** Login to your TestMu AI account. Go to **App Testing** under **Real Device** from the left sidebar.

**Step 2.** Enable the toggle to enter into your **Private Cloud**.

**Step 3.** Select your preferred operating system version from the private device pool.



**Step 4.** Within the **App Testing** section, locate and select the option to start a session with pre-installed applications.

**Step 5.** Upon initiating the session, gain instant access to the pre-installed applications on the designated device. This seamless integration accelerates testing scenarios, significantly reducing start time.

By adhering to the above steps, you can seamlessly commence testing sessions with pre-installed applications on TestMu AI. This feature not only expedites the testing process but also enhances efficiency, making it particularly advantageous for private cloud environments. With data retained within the private cloud devices, TestMu AI ensures enhanced flexibility and productivity in testing workflows.



## Start an Automation Session with Pre-Installed Apps

You can also run app automation tests directly on an app that is already installed on your private device, without reinstalling the app or resetting its existing state.

To do this, pass the `app` capability as `Stock`, in addition to your private cloud capabilities. Along with it:

- For **Android**, pass the `appPackage` and `appActivity` of your app.
- For **iOS**, pass the `bundleId` of your app.







  {`DesiredCapabilities capabilities = new DesiredCapabilities();
HashMap ltOptions = new HashMap();
ltOptions.put("privateCloud", true);
ltOptions.put("udid", "");
ltOptions.put("platformName", "android");
ltOptions.put("deviceName", "Galaxy S24");
ltOptions.put("platformVersion", "14");
ltOptions.put("app", "stock");
ltOptions.put("appPackage", "com.proverbial");
ltOptions.put("appActivity", "com.proverbial.MainActivity");
capabilities.setCapability("lt:options", ltOptions);`}









  {`DesiredCapabilities capabilities = new DesiredCapabilities();
HashMap ltOptions = new HashMap();
ltOptions.put("privateCloud", true);
ltOptions.put("udid", "");
ltOptions.put("platformName", "ios");
ltOptions.put("deviceName", "iPhone 16");
ltOptions.put("platformVersion", "18");
ltOptions.put("app", "stock");
ltOptions.put("bundleId", "com.proverbial.ios");
capabilities.setCapability("lt:options", ltOptions);`}






> **Note:** Since the `app` capability is set to `Stock`, the session launches the app already present on the device, retaining its existing data and state.
