---
id: download-files-using-lambdatest-selenium-grid
title: Download Files Using TestMu AI Selenium Grid
sidebar_label: Download Files From the Browser
description: Download files inside test VMs using base64 encoding with Java, Python, Node.js, C#, and Ruby scripts.
keywords:
  - download file selenium grid
  - lambda-file-content base64
  - selenium file download test
  - lambda-file-exists check
  - automate file download selenium
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/download-files-using-testmu-selenium-grid/
site_name: TestMu AI
slug: download-files-using-testmu-selenium-grid/
canonical: https://www.testmuai.com/support/docs/download-files-using-testmu-selenium-grid/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import VerifiedTag from '@site/src/component/verifiedTag';


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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/download-files-using-testmu-selenium-grid/"
    },
    "headline": "Download Files Using TestMu AI Selenium Grid",
    "description": "Download files inside test VMs using base64 encoding with Java, Python, Node.js, C#, and Ruby scripts.",
    "url": "https://www.testmuai.com/support/docs/download-files-using-testmu-selenium-grid/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "download file selenium grid",
      "lambda-file-content base64",
      "selenium file download test"
    ],
    "proficiencyLevel": "Beginner",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "TestMu AI provides three main flags using JavascriptExecutor to",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "((JavascriptExecutor) driver).executeScript(\"lambda-file-exists=file-name.file_format\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Download Files Using TestMu AI Selenium Grid",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "((JavascriptExecutor) driver).executeScript(\"lambda-file-stats=file-name.file_format\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Download Files Using TestMu AI Selenium Grid",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "((JavascriptExecutor) driver).executeScript(\"lambda-file-content=file-name.file_format\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Download Files Using TestMu AI Selenium Grid",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "print driver.execute_script(\"lambda-file-list={match string with filename}\");\nie:. \nprint driver.execute_script(\"lambda-file-list=sample\");\nResponse: List of files in downloads dir starting with sample"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Downloading File Using Selenium with Java (Selenium 4)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "import java.io.FileOutputStream;\nimport java.io.OutputStream;\nimport java.net.MalformedURLException;\nimport java.net.URL;\nimport java.util.Base64;\nimport java.util.HashMap;\nimport java.util.concurrent.TimeUnit;\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.JavascriptExecutor;\nimport org.openqa.selenium.NoSuchElementException;\nimport org.openqa.selenium.WebElement;\nimport org.openqa.selenium.chrome.ChromeOptions;\nimport org.openqa.selenium.remote.DesiredCapabilities;\nimport org.openqa.selenium.remote.RemoteWebDriver;\nimport org.openqa.selenium.remote.SessionId;\nimport org.testng.Assert;\nimport org.testng.annotations.AfterTest;\nimport org.testng.annotations.BeforeTest;\nimport org.testng.annotations.Test;\n\npublic class PullFileSelenium {\n    public String username = \"YOUR_LAMBDATEST_USERNAME\";\n    public String accesskey = \"YOUR_LAMBDATEST_ACCESS_KEY\";\n    public RemoteWebDriver driver;\n    public String gridURL = \"@hub.lambdatest.com/wd/hub\";\n    String status = \"passed\";\n\n    @BeforeTest\n    public void setUp() throws Exception {\n\n        ChromeOptions options = new ChromeOptions();\n\n        HashMap<String, Object> ltOptions = new HashMap<String, Object>();\n        ltOptions.put(\"version\", \"123.0\");\n        ltOptions.put(\"platform\", \"Linux\");\n        ltOptions.put(\"build\", \"Download functionality test\");\n        ltOptions.put(\"name\", \"LT Test\");\n        ltOptions.put(\"network\", true); // To enable network logs\n        ltOptions.put(\"visual\", true);\n        ltOptions.put(\"video\", true); // To enable video recording`\n        ltOptions.put(\"console\", true); // To capture console logs\n        options.setCapability(\"lt:Options\", ltOptions);\n\n        try {\n\n            driver = new RemoteWebDriver(new URL(\"https://\" + username + \":\" + accesskey + gridURL), options);\n\n        } catch (MalformedURLException e) {\n            System.out.println(\"Invalid grid URL\");\n        } catch (Exception e) {\n            System.out.println(e.getMessage());\n        }\n    }\n\n    @Test()\n    public void fileDownload() throws Exception {\n        try {\n\n            driver.get(\"https://file-examples.com/wp-content/storage/2017/02/file_example_XLSX_10.xlsx\");\n\n            Thread.sleep(4000);\n\n            Assert.assertEquals(\n                    ((JavascriptExecutor) driver).executeScript(\"lambda-file-exists=file_example_XLSX_10.xlsx\"),\n                    true); // file exist check\n\n            System.out.println(\n                    ((JavascriptExecutor) driver).executeScript(\"lambda-file-stats=file_example_XLSX_10.xlsx\")); // retrieve\n            // file\n            // stats\n\n            String base64EncodedFile = ((JavascriptExecutor) driver)\n                    .executeScript(\"lambda-file-content=file_example_XLSX_10.xlsx\").toString(); // file content download\n            System.out.println(base64EncodedFile);\n\n            byte[] data = Base64.getDecoder().decode(base64EncodedFile);\n            OutputStream stream = new FileOutputStream(\"file_example_XLSX_10.xlsx\");\n            stream.write(data);\n\n        } catch (NoSuchElementException e) {\n            System.out.println(e.getMessage());\n\n            SessionId id = driver.getSessionId();\n            System.out.println(\"Failed test session id: \" + id.toString());\n        }\n\n    }\n\n    @AfterTest\n    public void tearDown() throws Exception {\n        if (driver != null) {\n            ((JavascriptExecutor) driver).executeScript(\"lambda-status=\" + status);\n            driver.quit();\n        }\n    }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Selenium 3",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "import java.io.FileOutputStream;\nimport java.io.OutputStream;\nimport java.net.MalformedURLException;\nimport java.net.URL;\nimport java.util.Base64;\nimport java.util.concurrent.TimeUnit;\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.JavascriptExecutor;\nimport org.openqa.selenium.NoSuchElementException;\nimport org.openqa.selenium.WebElement;\nimport org.openqa.selenium.firefox.FirefoxOptions;\nimport org.openqa.selenium.remote.DesiredCapabilities;\nimport org.openqa.selenium.remote.RemoteWebDriver;\nimport org.openqa.selenium.remote.SessionId;\nimport org.testng.Assert;\nimport org.testng.annotations.AfterTest;\nimport org.testng.annotations.BeforeTest;\nimport org.testng.annotations.Test;\n \npublic class DownloadCheck {\n\tpublic String username = \"user_name\";\n\tpublic String accesskey = \"access_Key\";\n\tpublic RemoteWebDriver driver;\n\tpublic String gridURL = \"@hub.lambdatest.com/wd/hub\"; \n\tString status = \"passed\";\n \n\t@BeforeTest\n\tpublic void setUp() throws Exception {\n\t\t\n\t\tFirefoxOptions options = new FirefoxOptions();\n\t\toptions.addPreference(\"browser.download.folderList\", 2);\n\t\toptions.addPreference(\"browser.download.dir\", \"D:\\\\Downloads\");\n\t\toptions.addPreference(\"browser.download.useDownloadDir\", true);\n\t\toptions.addPreference(\"browser.helperApps.neverAsk.saveToDisk\", \"image/jpeg\");\n\t\t\n\t\tDesiredCapabilities capabilities = new DesiredCapabilities();\n\t\tcapabilities.setCapability(\"browserName\", \"firefox\");\n\t\tcapabilities.setCapability(\"version\", \"65\");\n\t\tcapabilities.setCapability(\"platform\", \"WIN10\");\n\t\tcapabilities.setCapability(\"build\",\"Download functionality test\");\n\t\tcapabilities.setCapability(\"name\", \"sample test\");\n\t\tcapabilities.setCapability(\"network\", true); // To enable network logs\n\t\tcapabilities.setCapability(\"visual\", true);\n\t\tcapabilities.setCapability(\"video\", true); // To enable video recording`\n\t\tcapabilities.setCapability(\"console\", true); // To capture console logs\n\t\tcapabilities.setCapability(\"selenium_version\",\"3.4.0\");\n\t\n\t\tcapabilities.merge(options);\n \n\t\ttry {\t\n\t\t\t\n\t\t\tdriver = new RemoteWebDriver(new URL(\"https://\" + username + \":\" + accesskey + gridURL), capabilities);\n\t\t\t\n\t\t} catch (MalformedURLException e) {\n\t\t\tSystem.out.println(\"Invalid grid URL\");\n\t\t} catch (Exception e) {\n\t\t\tSystem.out.println(e.getMessage());\n\t\t}\n\t}\n \n\t@Test()\n\tpublic void fileDownload() throws Exception {\n\t\ttry {\n\t\t\t\n\t\t\tdriver.get(\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_a_download\");\n\t\t\tdriver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);\n\t\t\tdriver.switchTo().frame(\"iframeResult\");\n \n\t\t\tWebElement element = driver.findElement(By.xpath(\"//a[@href='/images/myw3schoolsimage.jpg']\"));\n\t\t\telement.click();\n\t\t\t\t\t\n\t\t\tThread.sleep(4000);  \t\n\t\t\t\n\t\t\tAssert.assertEquals(((JavascriptExecutor) driver).executeScript(\"lambda-file-exists=myw3schoolsimage.jpg\"), true); //file exist check\n\t\t\t\n\t\t\tSystem.out.println(((JavascriptExecutor) driver).executeScript(\"lambda-file-stats=myw3schoolsimage.jpg\")); //retrieve file stats\n\t\t\t\n\t\t\tString base64EncodedFile = ((JavascriptExecutor) driver).executeScript(\"lambda-file-content=myw3schoolsimage.jpg\").toString(); // file content download\n\t\t\tSystem.out.println(base64EncodedFile);\n\t\t\t\n\t\t\t\n\t\t\t byte[] data = Base64.getDecoder().decode(base64EncodedFile);\n\t\t\t OutputStream stream = new FileOutputStream(\"myw3cImage.jpg\");\n\t\t\t stream.write(data);\n\t\t\t\n\t\n\t\t\t\t\t} catch (NoSuchElementException e) {\n\t\t\tSystem.out.println(e.getMessage());\n \n\t\t\tSessionId id = driver.getSessionId();\n\t\t\tSystem.out.println(\"Failed test session id: \" + id.toString());\n\t\t}\n \n\t}\n \n\t@AfterTest\n\tpublic void tearDown() throws Exception {\n\t\tif (driver != null) {\n\t\t\t((JavascriptExecutor) driver).executeScript(\"lambda-status=\" + status);\n\t\t\tdriver.quit();\n\t\t}\n\t}\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Downloading File Using Selenium with Python",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "import unittest\nimport time\nimport base64\nfrom selenium import webdriver\nfrom selenium.webdriver.common.keys import Keys\n\nclass LTAutomate(unittest.TestCase):\n    \n    def setUp(self):\n        \n        # username: Username can be found at automation dashboard\n        username=\"user_name\"  \n        # accessToken:  AccessToken can be generated from automation dashboard or profile section\n        accessToken=\"access_Key\"\n\n        # gridUrl: gridUrl can be found at automation dashboard\n        gridUrl = \"hub.lambdatest.com/wd/hub\"\n        \n        desired_cap = {\n            'platform' : \"win10\", \n            'browserName' : \"chrome\",\n            'version' :  \"79.0\",\n            # Resolution of machine\n            \"resolution\": \"1024x768\", \n            \"name\": \"sample test\",\n            \"build\": \"Download functionality test\",\n            \"selenium_version\" : \"3.4.0\",\n            \"network\": True,\n            \"video\": True,\n            \"visual\": True,\n            \"console\": True,\n        }\n\n        # URL: https://{username}:{accessToken}@mobile-hub.lambdatest.com/wd/hub\n        url = \"https://\"+username+\":\"+accessToken+\"@\"+gridUrl\n        \n        print(\"Initiating remote driver on platform: \"+desired_cap[\"platform\"]+\" browser: \"+desired_cap[\"browserName\"]+\" version: \"+desired_cap[\"version\"])\n        self.driver = webdriver.Remote(\n            desired_capabilities=desired_cap,\n            command_executor= url\n        )\n\n    \n    def test_download(self):\n       \n        driver = self.driver\n        print(\"Driver initiated successfully.  Navigate url\")\n        driver.get(\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_a_download\")\n\n        time.sleep(5)\n        driver.switch_to.frame('iframeResult')\n\n        elem = driver.find_element_by_xpath(\"//a[@href='/images/myw3schoolsimage.jpg']\")\n        elem.click()\n        \n        #file exists check\n        exists_status = driver.execute_script('lambda-file-exists=myw3schoolsimage.jpg')\n        print(exists_status)\n\n        # get file stats\n        file_properties = driver.execute_script('lambda-file-stats=myw3schoolsimage.jpg')\n        print(file_properties)\n\n        # download file-base64\n        file_content = driver.execute_script('lambda-file-content=myw3schoolsimage.jpg')\n        print(file_content)\n\n        \n        data = base64.b64decode(file_content)\n        f = open(\"myw3cImage.jpg\", \"wb\")\n        f.write(data)\n        driver.execute_script(\"lambda-status=passed\")\n        \n\n    \n    def tearDown(self):\n        \"\"\"\n        Quit selenium driver\n        \"\"\"\n        self.driver.quit()\n\nif __name__ == \"__main__\":\n    unittest.main()"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Downloading File Using Selenium with Node.js",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const webdriver = require('selenium-webdriver');\n\nconst USERNAME = 'user_name';\n\ndashboard or profile section\nconst KEY = 'access_Key';\n\n// gridUrl: gridUrl can be found at automation dashboard\nconst GRID_HOST = 'hub.lambdatest.com/wd/hub';\n\nconst fs = require('fs');\n\nfunction downloadFeature() {\n\n    // Setup Input capabilities\n    const capabilities = {\n        platform: 'windows 10',\n        browserName: 'chrome',\n        version: '79.0',\n        resolution: '1280x800',\n        network: true,\n        visual: true,\n        console: true,\n        video: true,\n        name: 'Test 1', // name of the test\n        build: 'NodeJS build' // name of the build\n    }\n\n    \n    const gridUrl = 'https://' + USERNAME + ':' + KEY + '@' + GRID_HOST;\n\n     \n    const driver = new webdriver.Builder()\n        .usingServer(gridUrl)\n        .withCapabilities(capabilities)\n        .build();\n\n    \n    driver.get('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_a_download').then(function() {\n      driver.switchTo().frame(\"iframeResult\").then(function() {\n        driver.findElement(webdriver.By.xpath(\"//a[@href='/images/myw3schoolsimage.jpg']\")).click().then(function() {\n            driver.getTitle().then(function(title) {\n                // check if file exists\n  driver.executeScript('lambda-file-exists=myw3schoolsimage.jpg').then(function(file_exists){\n    console.log(file_exists);\n  })// get file stats\n  driver.executeScript('lambda-file-stats=myw3schoolsimage.jpg').then(function(file_properties) {\n    console.log(file_properties);\n  })\n  // get file base64\n  driver.executeScript('lambda-file-content=myw3schoolsimage.jpg').then(function(get_file_content) {\n    fs.writeFile('myfile.jpg', get_file_content, {encoding: 'base64'}, function(err) {\n      console.log(get_file_content.toString('base64'));\n      \n    });\n  })\n\n  driver.quit();\n\n            });\n          });\n        });\n      })\n    .catch(function(err){\n        console.log(\"test failed with reason \"+err)\n        driver.executeScript('lambda-status=failed');\n        driver.quit();\n    });\n}\ndownloadFeature();"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Downloading File Using Selenium with C#",
        "codeSampleType": "code snippet",
        "programmingLanguage": "C#",
        "text": "using System;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Remote;\nusing NUnit.Framework;\nusing System.Threading;\nusing System.Collections.Generic;\nusing System.Linq.Expressions;\nusing System.IO;\n\u200b\nnamespace NUnitSelenium\n{\n    [TestFixture(\"chrome\", \"84.0\", \"Windows 10\")]\n   \n    [Parallelizable(ParallelScope.Children)]\n    public class NUnitSeleniumSample\n    {\n        public static string LT_USERNAME = Environment.GetEnvironmentVariable(\"LT_USERNAME\") ==null ? \"your username\" : Environment.GetEnvironmentVariable(\"LT_USERNAME\");\n        public static string LT_ACCESS_KEY = Environment.GetEnvironmentVariable(\"LT_ACCESS_KEY\") == null ? \"your accessKey\" : Environment.GetEnvironmentVariable(\"LT_ACCESS_KEY\");\n        public static bool tunnel = Boolean.Parse(Environment.GetEnvironmentVariable(\"LT_TUNNEL\")== null ? \"false\" : Environment.GetEnvironmentVariable(\"LT_TUNNEL\"));       \n        public static string build = Environment.GetEnvironmentVariable(\"LT_BUILD\") == null ? \"your build name\" : Environment.GetEnvironmentVariable(\"LT_BUILD\");\n        public static string seleniumUri = \"https://hub.lambdatest.com:443/wd/hub\";\n\u200b\n\u200b\n        ThreadLocal<IWebDriver> driver = new ThreadLocal<IWebDriver>();\n        private String browser;\n        private String version;\n        private String os;\n\u200b\n        public NUnitSeleniumSample(String browser, String version, String os)\n        {\n            this.browser = browser;\n            this.version = version;\n            this.os = os;\n        }\n\u200b\n        [SetUp]\n        public void Init()\n        {\n            \n            DesiredCapabilities capabilities = new DesiredCapabilities();\n            capabilities.SetCapability(CapabilityType.BrowserName, browser);\n            capabilities.SetCapability(CapabilityType.Version, version);\n            capabilities.SetCapability(CapabilityType.Platform, os);\n            capabilities.SetCapability(\"visual\", true);\n            capabilities.SetCapability(\"network\", true);\n            capabilities.SetCapability(\"console\", true);\n            \n\u200b\n            if (tunnel)\n            {\n                capabilities.SetCapability(\"tunnel\", tunnel);\n            }\n            if (build != null)\n            {\n                capabilities.SetCapability(\"build\", build);\n            }\n          \n            capabilities.SetCapability(\"user\", LT_USERNAME);\n            capabilities.SetCapability(\"accessKey\", LT_ACCESS_KEY);\n\u200b\n            capabilities.SetCapability(\"name\",\n            String.Format(\"{0}:{1}\",\n            TestContext.CurrentContext.Test.ClassName,\n            TestContext.CurrentContext.Test.MethodName));\n            driver.Value = new RemoteWebDriver(new Uri(seleniumUri), capabilities, TimeSpan.FromSeconds(600));\n            Console.Out.WriteLine(driver);\n        }\n\u200b\n        [Test]\n       public void Todotest()\n        {\n            {\n                try\n                {\n                    Console.WriteLine(\"Navigating to todos app.\");\n                    driver.Value.Navigate().GoToUrl(\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_a_download\");\n                    driver.Value.SwitchTo().Frame(\"iframeResult\");\n                    driver.Value.FindElement(By.XPath(\"//a[@href='/images/myw3schoolsimage.jpg']\")).Click();\n\u200b\n                    \n                    Console.WriteLine(((IJavaScriptExecutor) driver.Value).ExecuteScript(\"lambda-file-stats=myw3schoolsimage.jpg\"));\n\u200b\n                    String base64EncodedFile = ((IJavaScriptExecutor)driver.Value).ExecuteScript(\"lambda-file-content=myw3schoolsimage.jpg\").ToString();\n                    Console.WriteLine(base64EncodedFile);\n                    byte[] data = System.Convert.FromBase64String(base64EncodedFile);\n                    base64EncodedFile = System.Text.ASCIIEncoding.ASCII.GetString(data);\n                    Console.WriteLine(data);               \n                }\n                catch(Exception e)\n                {\n                    Console.WriteLine(e);\n                }\n            }\n        }\n\u200b\n        [TearDown]\n        public void Cleanup()\n        {\n            bool passed = TestContext.CurrentContext.Result.Outcome.Status == NUnit.Framework.Interfaces.TestStatus.Passed;\n            try\n            {\n                \n                ((IJavaScriptExecutor)driver.Value).ExecuteScript(\"lambda-status=\" + (passed ? \"passed\" : \"failed\"));\n            }\n            finally\n            {\n                \n                // Terminates the remote webdriver session\n                driver.Value.Quit();\n            }\n        }\n    }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Downloading File Using Selenium with Ruby",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Ruby",
        "text": "require 'selenium-webdriver'\nrequire 'test/unit'\n\n\n\nclass LtTest < Test::Unit::TestCase\n    \"\"\"\n    LambdaTest selenium automation sample example\n    Configuration\n    ----------\n    username: Username can be found at automation dashboard\n    accessToken:  AccessToken can be generated from automation dashboard or profile section\n\n    Result\n    -------\n    Execute Ruby Automation Tests on LambdaTest Distributed Selenium Grid \n    \"\"\"\n\n    \n    def setup\n        \"\"\"\n        Setup remote driver\n        Params\n        ----------\n        platform : Supported platform - (Windows 10, Windows 8.1, Windows 8, Windows 7,  macOS High Sierra, macOS Sierra, OS X El Capitan, OS X Yosemite, OS X Mavericks)\n        browserName : Supported platform - (chrome, firefox, Internet Explorer, MicrosoftEdge)\n        version :  Supported list of version can be found at https://www.testmuai.com/capabilities-generator/\n\n        Result\n        -------\n        \"\"\"\n        username= \"YOUR_LAMBDATEST_USERNAME\"\n        accessToken= \"YOUR_LAMBDATEST_ACCESS_KEY\"\n        gridUrl = \"hub.lambdatest.com/wd/hub\"\n \n        caps = {                       \n            :browserName => \"chrome\",         \n            :version =>   \"80.0\",\n            :platform =>  \"win10\",\n            :name =>  \"LambdaTest ruby google search name\",\n            :build =>  \"LambdaTest ruby google search build\",\n            :network =>  false,\n            :visual =>  false,\n            :video =>  true,\n            :console =>  false\n        }  \n \n        puts (caps)\n        # URL: https://{username}:{accessToken}@hub.lambdatest.com/wd/hub\n        @driver = Selenium::WebDriver.for(:remote,\n            :url => \"https://\"+username+\":\"+accessToken+\"@\"+gridUrl,\n            :desired_capabilities => caps)\n    end\n\n    def test_Login\n        \"\"\"\n        Setup remote driver\n        Params\n        ----------\n        Execute test:  Download File from remote browser Sample in Ruby\n        Result\n        -------\n        File exists\n        \"\"\"\n        puts(\"Navigate the URL\")\n        sleep(10)\n        @driver.get(\"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_a_download\")\n        @driver.switch_to.frame('iframeResult')\n        elem = @driver.find_element(:xpath, \"//a[@href='/images/myw3schoolsimage.jpg']\")\n        elem.click\n        fileExist=   @driver.execute_script(\"lambda-file-exists=myw3schoolsimage.jpg\")\n        puts(fileExist)\n        fileGet =  @driver.execute_script('lambda-file-stats=myw3schoolsimage.jpg')\n        puts(fileGet)\n        fileCon = @driver.execute_script('lambda-file-content=myw3schoolsimage.jpg')\n        puts(fileCon)\n\n    end\n \n    def teardown\n        \"\"\"\n        Quit selenium driver\n        \"\"\"\n        @driver.quit\n    end\nend"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Download Files Using TestMu AI Selenium Grid

***

While performing Selenium test automation, you may want to test the download functionality of your web-application or website. With TestMu AI Selenium Grid, you can test the download feature on 3000+ real browsers for mobile and desktop. You can download a file inside the test machine through your Selenium test automation script by Base64 encryption and decryption.

TestMu AI Selenium Grid provides an encoded string of base64 that you can use to download any file inside the virtual machine triggered through your Selenium testing scripts. TestMu AI provides three main flags using JavascriptExecutor to:

- Check whether the downloaded file exists in the test machine.

<VerifiedTag value="Verified" />

```javascript
((JavascriptExecutor) driver).executeScript("lambda-file-exists=file-name.file_format");
```
- Retrieve file metadata such as md5 code, modified time, name, and size.

<VerifiedTag value="Verified" />

```javascript
((JavascriptExecutor) driver).executeScript("lambda-file-stats=file-name.file_format");
```
- Download file content using base64 encoding.

<VerifiedTag value="Verified" />

```javascript
((JavascriptExecutor) driver).executeScript("lambda-file-content=file-name.file_format");
```
- Lambda File List Custom Executor

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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
 
    def teardown
        """
        Quit selenium driver
        """
        @driver.quit
    end
end
```
Got questions? Give a <span className="doc__lt" onClick={() => window.openLTChatWidget()}>shout</span> to us. We are here for you 24/7.


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
