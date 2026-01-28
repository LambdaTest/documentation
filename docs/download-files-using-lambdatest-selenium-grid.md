---
id: download-files-using-lambdatest-selenium-grid
title: Download Files Using TestMu AI Selenium Grid
hide_title: true
sidebar_label: Download Files Inside Test Machine
description: TestMu AI Selenium Grid will provide you with an encoded string of base64 which you can leverage to download any file inside the virtual machine triggered through your Selenium testing scripts.
keywords:
  - Selenium grid
  - download test
  - test download
  - automation script
  - automate download
  - base64
  - base64 encryption
  - base64 decryption
url: https://www.testmuai.com/support/docs/download-files-using-testmu-selenium-grid/
site_name: LambdaTest
slug: download-files-using-testmu-selenium-grid/
canonical: https://www.testmuai.com/support/docs/download-files-using-testmu-selenium-grid/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


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
          "name": "Download Files",
          "item": `${BRAND_URL}/support/docs/download-files-using-testmu-selenium-grid/`
        }]
      })
    }}
></script>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Download Files Using <BrandName /> Selenium Grid

***

While you perform Selenium test automation, you may want to test the download functionality of your web-application or website. With <BrandName /> Selenium Grid, you can test the download feature of your web-application on 3000+ real browsers for mobile and desktop. You can download a file inside the test machine through your Selenium test automation script by Base64 encryption & decryption.

<BrandName /> Selenium Grid will provide you with an encoded string of base64 which you can leverage to download any file inside the virtual machine triggered through your Selenium testing scripts. For this, <BrandName /> has provided three main flags using JavascriptExecutor to:

- Check whether the downloaded file exists in the test machine.

```javascript
((JavascriptExecutor) driver).executeScript("lambda-file-exists=file-name.file_format");
```
- Retrieve file metadata such as md5 code, modified time, name and size
```javascript
((JavascriptExecutor) driver).executeScript("lambda-file-stats=file-name.file_format");
```
- Download file content using base64 encoding
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
>Note: Don’t forget to feed the file format with the file name to the JavaScriptExecutor.

## Downloading File Using Selenium With Java
***
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
    public String username = "johnduo";
    public String accesskey = "Y6TyVzfvvWrK8bo2tNABUYR9e8RduQPCu2tN";
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


## Downloading File Using Selenium With Python
***
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
## Downloading File Using Selenium With Node.js
***
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

## Downloading File Using Selenium With C#
***
```js
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

## Downloading File Using Selenium With Ruby
***
```js
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
        version :  Supported list of version can be found at https://www.lambdatest.com/capabilities-generator/

        Result
        -------
        """
        username= "prateeks"
        accessToken= "ABCDEFGHIJKLMNOPQRST"
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
 
    def teardown
        """
        Quit selenium driver
        """
        @driver.quit
    end
end
```
Got Questions? Give a <span className="doc__lt" onClick={() => window.openLTChatWidget()}>Shout</span> to us. We’re here for you 24/7. Happy testing! 🙂


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
        Download Files
      </span>
    </li>
  </ul>
</nav>
