---
id: upload-files-using-lambdatest
title: How to Upload and Download Files in Selenium on TestMu AI
toc_max_heading_level: 2
hide_title: true
sidebar_label: "Upload and Download Files"
description: Upload and download files in Selenium tests on TestMu AI to test file upload and download features across 10,000+ browsers.
keywords:
  - upload files selenium grid cloud
  - lambda userFiles capability
  - file upload automation testing selenium
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/upload-files-using-testmu/
site_name: TestMu AI
slug: upload-files-using-testmu/
canonical: https://www.testmuai.com/support/docs/upload-files-using-testmu/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from '@site/src/component/keys';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Upload Files Using TestMu AI",
          "item": `${BRAND_URL}/support/docs/upload-files-using-testmu/`
        }]
      })
    }}
></script>

# How to Upload and Download Files in Selenium on TestMu AI
---

In Selenium automation testing, you may need to test the upload functionality on a web app or website. TestMu AI lets you test the upload feature on the cloud-based Selenium Grid across 10,000+ browser/device combinations.

This document explains how to upload a file on the TestMu AI platform and access it via an automation test script.

## Upload Files on the TestMu AI Platform
---

Upload files to the cloud-based Selenium Grid using the [API for uploading user-files](/api-doc/).

1. Open [TestMu AI's API for uploading user-files](/api-doc/). <img loading="lazy" src={require('../assets/images/uploads/upload-files.webp').default} alt="Upload file" width="1281" height="721" className="doc_img"/>
2. Click on the Lock icon to authorize your account. <img loading="lazy" src={require('../assets/images/uploads/upload-files-1.webp').default} alt="lock icon" width="1281" height="721" className="doc_img"/>]
3. Enter your TestMu AI username and access key to validate your credentials. Click the "Authorise" button to verify the credentials, and click Close to close the window. <img loading="lazy" src={require('../assets/images/uploads/upload-files-2.webp').default} alt="authorize button" width="1281" height="722" className="doc_img"/>


> Get your TestMu AI Username and Access Key from your [TestMu AI automation dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard). Click on the "key" icon in the top right corner.
<img loading="lazy" src={require('../assets/images/uploads/access-key.webp').default} alt="automation key" width="1281" height="721" className="doc_img"/>

4. Click on the "Try it out" button. <img loading="lazy" src={require('../assets/images/uploads/upload-files-3.webp').default} alt="choose file" width="1281" height="721" className="doc_img"/>
5. Select the file using the "Choose File" button and click Execute to upload it on the TestMu AI platform. <img loading="lazy" src={require('../assets/images/uploads/upload-files-4.webp').default} alt="200 status code" width="1281" height="721" className="doc_img"/>
   

> **Note**: You can upload multiple files to lambda storage. A maximum of 150 files can be uploaded per organization. The file size limit is 20 MB per API call. If your total file sizes reach the limit, upload your files in multiple API calls.

Once the file uploads successfully, you will see a response body with 200 response code, as shown in the image below: <img loading="lazy" src={require('../assets/images/uploads/upload-files-5.webp').default} alt="upload file" width="1281" height="721" className="doc_img"/>

## Test the Uploaded File on the TestMu AI Platform
---

Test the uploaded file on the TestMu AI platform to perform automation testing on the cloud-based Selenium Grid. To learn how each capability shapes your test session, review the full list of [Selenium automation capabilities](/support/docs/selenium-automation-capabilities/).

Add the [capability](https://www.testmuai.com/capabilities-generator/) into your automation script for file upload.

For example: If you uploaded 3 files named "804402.png", "file_example_JPG_2500kB.jpg", and "Sample_File_To_Upload.txt", add the following capability:

**Java**

```java
HashSet<String> ab = new HashSet<>();
ab.add("Sample-Spreadsheet-10-rows.csv");
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("build","Upload");
capabilities.setCapability("name","Upload Files");
capabilities.setCapability("browserName", "Chrome");
capabilities.setCapability("browserVersion","104");
capabilities.setCapability("platformName", "Windows 10");
capabilities.setCapability("lambda:userFiles",ab);
```

**C#**

```csharp
//HashMap
string testName = callStack[0].ToString();
InitCaps
String[] ltFile = new string[] { "file-name.csv" };

// Capabilities
capabilities.AddAdditionalOption("lambda:userFiles", ltFile);
```

**PHP**

```javascript
$capabilities = array(
    .
    .
"lambda:userFiles" => [
"804402.png",
"file_example_JPG_2500kB.jpg",
"Sample_File_To_Upload.txt"
])
```

**Python**

```py
capabilities = {
      .
      .
"lambda:userFiles" : [
"804402.png",
"file_example_JPG_2500kB.jpg",
"Sample_File_To_Upload.txt"
]
}
```

**JavaScript**

```js
var capabilities = {
    .
    .
"lambda:userFiles" : [
"804402.png",
"file_example_JPG_2500kB.jpg",
"Sample_File_To_Upload.txt"
]
}
```

Now you can use the uploaded files in your automation test script. 

The following table shows the file path for uploaded files on both desktop and mobile operating systems.

|Operating System  | Default Download Path |
|------------- | --------------------------|
| Linux | /home/ltuser/Downloads |
| Windows | C:\\Users\ltuser\Downloads |
| macOS | /Users/ltuser/Downloads |
| Android | /storage/emulated/0/Android/data/com.android.chrome/files/Download/ |
| iOS | /Users/ltuser/Downloads/ios/media |

For example, to upload a file on a web page via test script, use the following Java code (on Windows and macOS):

```java
   // If the file is 804402.png, and testing environment is Windows OS
   WebElement addFile = driver.findElement(By.xpath(".//input[@type='file']"));
   addFile.sendKeys("C:\\Users\\ltuser\\Downloads\\804402.png");

   // If the file is 804402.png, and testing environment is macOS
   WebElement addFile = driver.findElement(By.xpath(".//input[@type='file']"));
   addFile.sendKeys("/Users/ltuser/Downloads/804402.png");
```

* * *

# Download Files from TestMu AI Storage During Test Execution
---

Once your files are uploaded and in use, you may also need to test the download functionality of your web application or website. With TestMu AI Selenium Grid, you can test the download feature on 3000+ real browsers for mobile and desktop, downloading a file inside the test machine through your Selenium test automation script by Base64 encryption and decryption.

TestMu AI Selenium Grid provides an encoded string of base64 that you can use to download any file inside the virtual machine triggered through your Selenium testing scripts. TestMu AI provides three main flags using JavascriptExecutor to:

- Check whether the downloaded file exists in the test machine.

```javascript
((JavascriptExecutor) driver).executeScript("lambda-file-exists=file-name.file_format");
```
- Retrieve file metadata such as md5 code, modified time, name, and size.
```javascript
((JavascriptExecutor) driver).executeScript("lambda-file-stats=file-name.file_format");
```
- Download file content using base64 encoding.
```javascript
((JavascriptExecutor) driver).executeScript("lambda-file-content=file-name.file_format");
```
- Lambda File List Custom Executor
```javascript
print driver.execute_script("lambda-file-list={match string with filename}");
ie:. 
print driver.execute_script("lambda-file-list=sample");
Response: List of files in downloads dir starting with sample
```
>Note: Include the file format with the file name in the JavaScriptExecutor.

## Downloading File Using Selenium with Java
---
Use the lambda-file hooks in Java to verify, inspect, and download files from the test VM.

<Tabs className="docs__val">
<TabItem value="android" label="Selenium 4" default>

```java 
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Base64;
import java.util.HashMap;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.SessionId;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class PullFileSelenium {
    public String username = "YOUR_LAMBDATEST_USERNAME";
    public String accesskey = "YOUR_LAMBDATEST_ACCESS_KEY";
    public RemoteWebDriver driver;
    public String gridURL = "@hub.lambdatest.com/wd/hub";
    String status = "passed";

    @BeforeTest
    public void setUp() throws Exception {

        ChromeOptions options = new ChromeOptions();

        HashMap<String, Object> ltOptions = new HashMap<String, Object>();
        ltOptions.put("version", "123.0");
        ltOptions.put("platform", "Linux");
        ltOptions.put("build", "Download functionality test");
        ltOptions.put("name", "LT Test");
        ltOptions.put("network", true); // To enable network logs
        ltOptions.put("visual", true);
        ltOptions.put("video", true); // To enable video recording`
        ltOptions.put("console", true); // To capture console logs
        options.setCapability("lt:Options", ltOptions);

        try {

            driver = new RemoteWebDriver(new URL("https://" + username + ":" + accesskey + gridURL), options);

        } catch (MalformedURLException e) {
            System.out.println("Invalid grid URL");
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    @Test()
    public void fileDownload() throws Exception {
        try {

            driver.get("https://file-examples.com/wp-content/storage/2017/02/file_example_XLSX_10.xlsx");

            Thread.sleep(4000);

            Assert.assertEquals(
                    ((JavascriptExecutor) driver).executeScript("lambda-file-exists=file_example_XLSX_10.xlsx"),
                    true); // file exist check

            System.out.println(
                    ((JavascriptExecutor) driver).executeScript("lambda-file-stats=file_example_XLSX_10.xlsx")); // retrieve
            // file
            // stats

            String base64EncodedFile = ((JavascriptExecutor) driver)
                    .executeScript("lambda-file-content=file_example_XLSX_10.xlsx").toString(); // file content download
            System.out.println(base64EncodedFile);

            byte[] data = Base64.getDecoder().decode(base64EncodedFile);
            OutputStream stream = new FileOutputStream("file_example_XLSX_10.xlsx");
            stream.write(data);

        } catch (NoSuchElementException e) {
            System.out.println(e.getMessage());

            SessionId id = driver.getSessionId();
            System.out.println("Failed test session id: " + id.toString());
        }

    }

    @AfterTest
    public void tearDown() throws Exception {
        if (driver != null) {
            ((JavascriptExecutor) driver).executeScript("lambda-status=" + status);
            driver.quit();
        }
    }
}
```

</TabItem>

<TabItem value="ios" label="Selenium 3" default>

```java
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Base64;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.SessionId;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class DownloadCheck {
	public String username = "user_name";
	public String accesskey = "access_Key";
	public RemoteWebDriver driver;
	public String gridURL = "@hub.lambdatest.com/wd/hub"; 
	String status = "passed";

	@BeforeTest
	public void setUp() throws Exception {

		FirefoxOptions options = new FirefoxOptions();
		options.addPreference("browser.download.folderList", 2);
		options.addPreference("browser.download.dir", "D:\\Downloads");
		options.addPreference("browser.download.useDownloadDir", true);
		options.addPreference("browser.helperApps.neverAsk.saveToDisk", "image/jpeg");

		DesiredCapabilities capabilities = new DesiredCapabilities();
		capabilities.setCapability("browserName", "firefox");
		capabilities.setCapability("version", "65");
		capabilities.setCapability("platform", "WIN10");
		capabilities.setCapability("build","Download functionality test");
		capabilities.setCapability("name", "sample test");
		capabilities.setCapability("network", true); // To enable network logs
		capabilities.setCapability("visual", true);
		capabilities.setCapability("video", true); // To enable video recording`
		capabilities.setCapability("console", true); // To capture console logs
		capabilities.setCapability("selenium_version","3.4.0");

		capabilities.merge(options);

		try {	

			driver = new RemoteWebDriver(new URL("https://" + username + ":" + accesskey + gridURL), capabilities);

		} catch (MalformedURLException e) {
			System.out.println("Invalid grid URL");
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

	@Test()
	public void fileDownload() throws Exception {
		try {

			driver.get("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_a_download");
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			driver.switchTo().frame("iframeResult");

			WebElement element = driver.findElement(By.xpath("//a[@href='/images/myw3schoolsimage.jpg']"));
			element.click();

			Thread.sleep(4000);  	

			Assert.assertEquals(((JavascriptExecutor) driver).executeScript("lambda-file-exists=myw3schoolsimage.jpg"), true); //file exist check

			System.out.println(((JavascriptExecutor) driver).executeScript("lambda-file-stats=myw3schoolsimage.jpg")); //retrieve file stats

			String base64EncodedFile = ((JavascriptExecutor) driver).executeScript("lambda-file-content=myw3schoolsimage.jpg").toString(); // file content download
			System.out.println(base64EncodedFile);

			 byte[] data = Base64.getDecoder().decode(base64EncodedFile);
			 OutputStream stream = new FileOutputStream("myw3cImage.jpg");
			 stream.write(data);

					} catch (NoSuchElementException e) {
			System.out.println(e.getMessage());

			SessionId id = driver.getSessionId();
			System.out.println("Failed test session id: " + id.toString());
		}

	}

	@AfterTest
	public void tearDown() throws Exception {
		if (driver != null) {
			((JavascriptExecutor) driver).executeScript("lambda-status=" + status);
			driver.quit();
		}
	}
}
```

</TabItem>

</Tabs>

## Downloading File Using Selenium with Python
---
Use the lambda-file hooks in Python to verify and download files from the test VM.

```python
import unittest
import time
import base64
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

class LTAutomate(unittest.TestCase):

    def setUp(self):

        # username: Username can be found at automation dashboard
        username="user_name"  
        # accessToken:  AccessToken can be generated from automation dashboard or profile section
        accessToken="access_Key"

        # gridUrl: gridUrl can be found at automation dashboard
        gridUrl = "hub.lambdatest.com/wd/hub"

        desired_cap = {
            'platform' : "win10", 
            'browserName' : "chrome",
            'version' :  "79.0",
            # Resolution of machine
            "resolution": "1024x768", 
            "name": "sample test",
            "build": "Download functionality test",
            "selenium_version" : "3.4.0",
            "network": True,
            "video": True,
            "visual": True,
            "console": True,
        }

        # URL: https://{username}:{accessToken}@mobile-hub.lambdatest.com/wd/hub
        url = "https://"+username+":"+accessToken+"@"+gridUrl

        print("Initiating remote driver on platform: "+desired_cap["platform"]+" browser: "+desired_cap["browserName"]+" version: "+desired_cap["version"])
        self.driver = webdriver.Remote(
            desired_capabilities=desired_cap,
            command_executor= url
        )

    def test_download(self):

        driver = self.driver
        print("Driver initiated successfully.  Navigate url")
        driver.get("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_a_download")

        time.sleep(5)
        driver.switch_to.frame('iframeResult')

        elem = driver.find_element_by_xpath("//a[@href='/images/myw3schoolsimage.jpg']")
        elem.click()

        #file exists check
        exists_status = driver.execute_script('lambda-file-exists=myw3schoolsimage.jpg')
        print(exists_status)

        # get file stats
        file_properties = driver.execute_script('lambda-file-stats=myw3schoolsimage.jpg')
        print(file_properties)

        # download file-base64
        file_content = driver.execute_script('lambda-file-content=myw3schoolsimage.jpg')
        print(file_content)

        data = base64.b64decode(file_content)
        f = open("myw3cImage.jpg", "wb")
        f.write(data)
        driver.execute_script("lambda-status=passed")

    def tearDown(self):
        """
        Quit selenium driver
        """
        self.driver.quit()

if __name__ == "__main__":
    unittest.main()
```

## Downloading File Using Selenium with Node.js
---
Use the lambda-file hooks in Node.js to verify and download files from the test VM.

```javascript
const webdriver = require('selenium-webdriver');

const USERNAME = 'user_name';

dashboard or profile section
const KEY = 'access_Key';

// gridUrl: gridUrl can be found at automation dashboard
const GRID_HOST = 'hub.lambdatest.com/wd/hub';

const fs = require('fs');

function downloadFeature() {

    // Setup Input capabilities
    const capabilities = {
        platform: 'windows 10',
        browserName: 'chrome',
        version: '79.0',
        resolution: '1280x800',
        network: true,
        visual: true,
        console: true,
        video: true,
        name: 'Test 1', // name of the test
        build: 'NodeJS build' // name of the build
    }

    const gridUrl = 'https://' + USERNAME + ':' + KEY + '@' + GRID_HOST;

    const driver = new webdriver.Builder()
        .usingServer(gridUrl)
        .withCapabilities(capabilities)
        .build();

    driver.get('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_a_download').then(function() {
      driver.switchTo().frame("iframeResult").then(function() {
        driver.findElement(webdriver.By.xpath("//a[@href='/images/myw3schoolsimage.jpg']")).click().then(function() {
            driver.getTitle().then(function(title) {
                // check if file exists
  driver.executeScript('lambda-file-exists=myw3schoolsimage.jpg').then(function(file_exists){
    console.log(file_exists);
  })// get file stats
  driver.executeScript('lambda-file-stats=myw3schoolsimage.jpg').then(function(file_properties) {
    console.log(file_properties);
  })
  // get file base64
  driver.executeScript('lambda-file-content=myw3schoolsimage.jpg').then(function(get_file_content) {
    fs.writeFile('myfile.jpg', get_file_content, {encoding: 'base64'}, function(err) {
      console.log(get_file_content.toString('base64'));

    });
  })

  driver.quit();

            });
          });
        });
      })
    .catch(function(err){
        console.log("test failed with reason "+err)
        driver.executeScript('lambda-status=failed');
        driver.quit();
    });
}
downloadFeature();
```

## Downloading File Using Selenium with C#
---
Use the lambda-file hooks in C# to verify and download files from the test VM.

```csharp
using System;
using OpenQA.Selenium;
using OpenQA.Selenium.Remote;
using NUnit.Framework;
using System.Threading;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.IO;
​
namespace NUnitSelenium
{
    [TestFixture("chrome", "84.0", "Windows 10")]

    [Parallelizable(ParallelScope.Children)]
    public class NUnitSeleniumSample
    {
        public static string LT_USERNAME = Environment.GetEnvironmentVariable("LT_USERNAME") ==null ? "your username" : Environment.GetEnvironmentVariable("LT_USERNAME");
        public static string LT_ACCESS_KEY = Environment.GetEnvironmentVariable("LT_ACCESS_KEY") == null ? "your accessKey" : Environment.GetEnvironmentVariable("LT_ACCESS_KEY");
        public static bool tunnel = Boolean.Parse(Environment.GetEnvironmentVariable("LT_TUNNEL")== null ? "false" : Environment.GetEnvironmentVariable("LT_TUNNEL"));       
        public static string build = Environment.GetEnvironmentVariable("LT_BUILD") == null ? "your build name" : Environment.GetEnvironmentVariable("LT_BUILD");
        public static string seleniumUri = "https://hub.lambdatest.com:443/wd/hub";
​
​
        ThreadLocal<IWebDriver> driver = new ThreadLocal<IWebDriver>();
        private String browser;
        private String version;
        private String os;
​
        public NUnitSeleniumSample(String browser, String version, String os)
        {
            this.browser = browser;
            this.version = version;
            this.os = os;
        }
​
        [SetUp]
        public void Init()
        {

            DesiredCapabilities capabilities = new DesiredCapabilities();
            capabilities.SetCapability(CapabilityType.BrowserName, browser);
            capabilities.SetCapability(CapabilityType.Version, version);
            capabilities.SetCapability(CapabilityType.Platform, os);
            capabilities.SetCapability("visual", true);
            capabilities.SetCapability("network", true);
            capabilities.SetCapability("console", true);

​
            if (tunnel)
            {
                capabilities.SetCapability("tunnel", tunnel);
            }
            if (build != null)
            {
                capabilities.SetCapability("build", build);
            }

            capabilities.SetCapability("user", LT_USERNAME);
            capabilities.SetCapability("accessKey", LT_ACCESS_KEY);
​
            capabilities.SetCapability("name",
            String.Format("{0}:{1}",
            TestContext.CurrentContext.Test.ClassName,
            TestContext.CurrentContext.Test.MethodName));
            driver.Value = new RemoteWebDriver(new Uri(seleniumUri), capabilities, TimeSpan.FromSeconds(600));
            Console.Out.WriteLine(driver);
        }
​
        [Test]
       public void Todotest()
        {
            {
                try
                {
                    Console.WriteLine("Navigating to todos app.");
                    driver.Value.Navigate().GoToUrl("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_a_download");
                    driver.Value.SwitchTo().Frame("iframeResult");
                    driver.Value.FindElement(By.XPath("//a[@href='/images/myw3schoolsimage.jpg']")).Click();
​

                    Console.WriteLine(((IJavaScriptExecutor) driver.Value).ExecuteScript("lambda-file-stats=myw3schoolsimage.jpg"));
​
                    String base64EncodedFile = ((IJavaScriptExecutor)driver.Value).ExecuteScript("lambda-file-content=myw3schoolsimage.jpg").ToString();
                    Console.WriteLine(base64EncodedFile);
                    byte[] data = System.Convert.FromBase64String(base64EncodedFile);
                    base64EncodedFile = System.Text.ASCIIEncoding.ASCII.GetString(data);
                    Console.WriteLine(data);               
                }
                catch(Exception e)
                {
                    Console.WriteLine(e);
                }
            }
        }
​
        [TearDown]
        public void Cleanup()
        {
            bool passed = TestContext.CurrentContext.Result.Outcome.Status == NUnit.Framework.Interfaces.TestStatus.Passed;
            try
            {

                ((IJavaScriptExecutor)driver.Value).ExecuteScript("lambda-status=" + (passed ? "passed" : "failed"));
            }
            finally
            {

                // Terminates the remote webdriver session
                driver.Value.Quit();
            }
        }
    }
}
```

## Downloading File Using Selenium with Ruby
---
Use the lambda-file hooks in Ruby to verify and download files from the test VM.

```ruby
require 'selenium-webdriver'
require 'test/unit'

class LtTest < Test::Unit::TestCase
    """
    LambdaTest selenium automation sample example
    Configuration
    ----------
    username: Username can be found at automation dashboard
    accessToken:  AccessToken can be generated from automation dashboard or profile section

    Result
    -------
    Execute Ruby Automation Tests on LambdaTest Distributed Selenium Grid 
    """

    def setup
        """
        Setup remote driver
        Params
        ----------
        platform : Supported platform - (Windows 10, Windows 8.1, Windows 8, Windows 7,  macOS High Sierra, macOS Sierra, OS X El Capitan, OS X Yosemite, OS X Mavericks)
        browserName : Supported platform - (chrome, firefox, Internet Explorer, MicrosoftEdge)
        version :  Supported list of version can be found at https://www.testmuai.com/capabilities-generator/

        Result
        -------
        """
        username= "YOUR_LAMBDATEST_USERNAME"
        accessToken= "YOUR_LAMBDATEST_ACCESS_KEY"
        gridUrl = "hub.lambdatest.com/wd/hub"

        caps = {                       
            :browserName => "chrome",         
            :version =>   "80.0",
            :platform =>  "win10",
            :name =>  "LambdaTest ruby google search name",
            :build =>  "LambdaTest ruby google search build",
            :network =>  false,
            :visual =>  false,
            :video =>  true,
            :console =>  false
        }  

        puts (caps)
        # URL: https://{username}:{accessToken}@hub.lambdatest.com/wd/hub
        @driver = Selenium::WebDriver.for(:remote,
            :url => "https://"+username+":"+accessToken+"@"+gridUrl,
            :desired_capabilities => caps)
    end

    def test_Login
        """
        Setup remote driver
        Params
        ----------
        Execute test:  Download File from remote browser Sample in Ruby
        Result
        -------
        File exists
        """
        puts("Navigate the URL")
        sleep(10)
        @driver.get("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_a_download")
        @driver.switch_to.frame('iframeResult')
        elem = @driver.find_element(:xpath, "//a[@href='/images/myw3schoolsimage.jpg']")
        elem.click
        fileExist=   @driver.execute_script("lambda-file-exists=myw3schoolsimage.jpg")
        puts(fileExist)
        fileGet =  @driver.execute_script('lambda-file-stats=myw3schoolsimage.jpg')
        puts(fileGet)
        fileCon = @driver.execute_script('lambda-file-content=myw3schoolsimage.jpg')
        puts(fileCon)

    end
```

* * *

You can now successfully upload files and use them with Selenium Automation testing on TestMu AI's cloud server. If you are new to the platform, start by learning how to run your first Selenium test before wiring file upload into your suite. If you face any issues, reach out to us via our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span>, or mail us at [support@testmuai.com](mailto:support@testmuai.com). <br />Happy Testing!

## Next Steps
---

Continue with these related guides:

- [Selenium Automation Capabilities](/support/docs/selenium-automation-capabilities/)
- [Running Your First Selenium Test](/support/docs/testmu-running-your-first-selenium-test/)

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        Upload Files Using TestMu AI
      </span>
    </li>
  </ul>
</nav>
