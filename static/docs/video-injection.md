# Video Injection

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

Video Injection feature enables you to test video-based functionalities such as **live streaming, real-time video capture,** and **video processing** in your app across 10000+ real devices on the TestMu AI Real Device Cloud platform.

This tool is ideal for testing features such as:

- Real-time video streaming and playback
- Video-based verification (e.g., identity verification using live video)
- Video capture and upload workflows
- In-app video recording features

## How It Works
TestMu AI utilizes **Sensor Instrumentation** to integrate with various mobile sensors, including the camera. When you enable Video Injection for a session, TestMu AI injects its camera code module into your app through Sensor Instrumentation. This module then mocks or overrides the iOS SDK used in your app.

## Video Injection in App Automation

This section explains how to use Video Injection with App automation. This section will also teach you how to use video injection for all the possible test cases for your app along with other useful information.

### Step 1: Upload video to TestMu AI

You can use the following curl command to upload any video of your choice to the TestMu AI cloud. Please note that we support only **MP4 format is only supported and the video can be 50 MB or less**.

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://api.lambdatest.com/mfs/v1.0/media/upload" -F "media_file=@"/Users/macuser/Downloads/video.mp4"" -F "type="video"" -F "custom_id="SampleVideo""`}

Response of above cURL will be a JSON object containing the `media_url` of the format - lt://MEDIA123456789123456789 as shown below.

```js
{
"media_url":"lt://MEDIA123456789123456789",
"name":"Video_123.mp4",
"status":"success",
"custom_id":"SampleVideo"
}
```

### Step 2: Enable Video injection in the Appium Session

You can use the appium capability to turn the video injection on in your application. Just add `"enableVideoInjection": True` in the desired capabilities while writing the automation script. By adding this capability the app undergoes Sensor Instrumentation, which was described earlier in the documentation. Also adding media url `"media": "lt://MEDIA123456789123456789"` in the capabilities to inject the video is now optional and can be passed in LambdaHook as mentioned in step 3.

  {`desired_capabilities = {
    "enableVideoInjection": True,
    "media": "lt://MEDIAf446d4170cd946aa9ec307d10cb679b9", #Add media_url here (optional)
  }`}

  {`DesiredCapabilities desiredCapabilities = new DesiredCapabilities();
desiredCapabilities.setCapability("enableVideoInjection", "true");`}

### Step 3: Inject the video

Refer to the code snippets given below to upload the video with the action `VideoInjection`. Please make sure that the video needs to be injected before the camera is triggered in your application. This is due to the fact that the camera only captures the video injected at the last.

  {`driver.execute_script("lambda-video-injection=media_url") #Add media_url here`}

  {`driver.execute_script("lambda-video-injection=media_url") //Add media_url here`}

**Use Case**: This feature can be used when you want to test injecting more than one video in single test at different instances. The video injected through above process will replace the video which you put in previous steps.

### Step 4: Capture the desired video through camera

You need to first add a logic to inject the uploaded video in the script. Thereafter add the logic to click the camera button in the mobile app. This will show you the last injected video on your mobile app screen.

> ?? Check the [documentation for Media Injection](/support/docs/camera-image-injection-on-real-devices/) feature in Manual App Testing on Real devices
