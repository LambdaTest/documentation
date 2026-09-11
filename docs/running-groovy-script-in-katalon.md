---
id: running-groovy-script-in-katalon
title: How to Run Groovy Script In Katalon With TestMu AI Selenium Grid?
hide_title: true
sidebar_label: Running Groovy Script In Katalon With TestMu AI Selenium Grid
description: Run your Groovy script in Katalon with TestMu AI Selenium Grid. Perform automated cross browser testing with TestMu AI to ensure your development code renders seamlessly through an online Selenium grid providing 3000+ real browsers running through machines.
keywords:
- Katalon Groovy Script
- Running Groovy Script
- Groovy Script In Katalon
- Groovy Test Automation Script
- Groovy Automation
- Groovy Automation Testing
- Execute Groovy Script
- Groovy Execute Script
- Execute Groovy Script Online
- Katalon using Groovy
- Groovy Execute
- Run Groovy Online
- Groovy Test Online

url: https://www.testmuai.com/support/docs/running-groovy-script-in-katalon-with-testmu-selenium-grid/
site_name: TestMu AI
slug: running-groovy-script-in-katalon-with-testmu-selenium-grid/
canonical: https://www.testmu.ai/support/docs/running-groovy-script-in-katalon-with-testmu-selenium-grid/
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
          "name": "Running Groovy Automation Scripts",
          "item": `${BRAND_URL}/support/docs/running-groovy-script-in-katalon-with-testmu-selenium-grid/`
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
      "@id": "https://www.testmuai.com/support/docs/running-groovy-script-in-katalon-with-testmu-selenium-grid/"
    },
    "headline": "How to Run Groovy Script In Katalon With TestMu AI Selenium Grid?",
    "description": "Run your Groovy script in Katalon with TestMu AI Selenium Grid. Perform automated cross browser testing with TestMu AI to ensure your development code renders seamlessly through an online Selenium grid providing 3000+ real browsers running through machines.",
    "url": "https://www.testmuai.com/support/docs/running-groovy-script-in-katalon-with-testmu-selenium-grid/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Integration",
    "keywords": [
      "Katalon Groovy Script",
      "Running Groovy Script",
      "Groovy Script In Katalon"
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
        "name": "Running Groovy Script In Katalon With TestMu AI Selenium Grid",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint\nimport static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase\nimport static com.kms.katalon.core.testdata.TestDataFactory.findTestData\nimport static com.kms.katalon.core.testobject.ObjectRepository.findTestObject\n\nimport com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint\nimport com.kms.katalon.core.model.FailureHandling as FailureHandling\nimport com.kms.katalon.core.testcase.TestCase as TestCase\nimport com.kms.katalon.core.testdata.TestData as TestData\nimport com.kms.katalon.core.testobject.TestObject as TestObject\n\nimport com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS\nimport com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI\nimport com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile\n\nimport com.kms.katalon.core.annotation.BeforeTestCase\nimport com.kms.katalon.core.annotation.BeforeTestSuite\nimport com.kms.katalon.core.annotation.TearDown\nimport com.kms.katalon.core.annotation.AfterTestCase\nimport com.kms.katalon.core.annotation.AfterTestSuite\nimport com.kms.katalon.core.context.TestCaseContext\nimport com.kms.katalon.core.context.TestSuiteContext\n\nimport com.kms.katalon.core.webui.driver.ExistingRemoteWebDriver\n\nimport com.kms.katalon.core.configuration.RunConfiguration\n\nclass LambdaListener {\n\n\tTestSuiteContext suiteContext;\n\n\t/**\n\t * Executes before every test case starts.\n\t * @param testCaseContext related information of the executed test case.\n\t */\n\t@BeforeTestCase\n\tdef sampleBeforeTestCase(TestCaseContext testCaseContext) {\n\t\t\n\t\t\n\t\t//To set the test name at LambdaTest.\n\t\tRunConfiguration.setDriverPreferencesProperty(\"Remote\", \"name\", testCaseContext.getTestCaseId());\n\t\tif (suiteContext != null){\n\t\t\tRunConfiguration.setDriverPreferencesProperty(\"Remote\",\"build\", suiteContext.getTestSuiteId());\n\t\t}\n\t\tprintln testCaseContext.getTestCaseId();\n\t\tprintln RunConfiguration.getDriverPreferencesProperties();\n\t}\n\t/**\n\t * Executes after every test case ends.\n\t * @param testCaseContext related information of the executed test case.\n\t */\n\t@com.kms.katalon.core.annotation.TearDown\n\t@AfterTestCase\n\tdef sampleAfterTestCase(TestCaseContext testCaseContext) {\n\t\t//To set the status of test at LambdaTest.\n\t\tString result=\"failed\";\n\t\tif(testCaseContext.getTestCaseStatus().equalsIgnoreCase(\"PASSED\")){\n\t\t\tresult=\"passed\"\n\t\t}\n\t\ttry{\n\t\t\tWebUI.executeJavaScript(\"lambda-status=\"+result,null)\n\t\t}catch (Exception e)\n\t\t{\n\t\t\tprintln e.toString()\n\t\t}\n\t\tfinally {\n\t\t\tWebUI.closeBrowser()\n\t\t}\n\t\tprintln testCaseContext.getTestCaseId()\n\t\tprintln testCaseContext.getTestCaseStatus()\n\t}\n\n\t/**\n\t * Executes before every test suite starts.\n\t * @param testSuiteContext: related information of the executed test suite.\n\t */\n\t@BeforeTestSuite\n\tdef sampleBeforeTestSuite(TestSuiteContext testSuiteContext) {\n\t\tsuiteContext=testSuiteContext\n\t\t//To Set the build Name at LambdaTest.\n\t\tRunConfiguration.setDriverPreferencesProperty(\"Remote\",\"build\", suiteContext.getTestSuiteId());\n\t\tprintln testSuiteContext.getTestSuiteId()\n\t}\n\n\t/**\n\t * Executes after every test suite ends.\n\t * @param testSuiteContext: related information of the executed test suite.\n\t */\n\t@AfterTestSuite\n\tdef sampleAfterTestSuite(TestSuiteContext testSuiteContext) {\n\t\tprintln testSuiteContext.getTestSuiteId()\n\t}\n}"
      }
    ],
    "dateModified": "2026-02-12T19:51:34+05:30"
  }) }}
/>

# Running Groovy Script In Katalon With <BrandName /> Selenium Grid
* * *
As you perform testing with Katalon Studio, you can write or edit test automation scripts in the **Script mode** using Groovy programming language. This tutorial will help you run your Groovy script in Katalon with <BrandName /> Selenium Grid.

**Step 1:** Open your Katalon Studio instance & go to **Tests Explorer** from the left side-bar.

**Step 2:** Right-click on the **Test Listener** folder & click on the new listener.

**Step 3:** Name the new listener & paste the below code in the new listener.

```javascript
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject

import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile

import com.kms.katalon.core.annotation.BeforeTestCase
import com.kms.katalon.core.annotation.BeforeTestSuite
import com.kms.katalon.core.annotation.TearDown
import com.kms.katalon.core.annotation.AfterTestCase
import com.kms.katalon.core.annotation.AfterTestSuite
import com.kms.katalon.core.context.TestCaseContext
import com.kms.katalon.core.context.TestSuiteContext

import com.kms.katalon.core.webui.driver.ExistingRemoteWebDriver

import com.kms.katalon.core.configuration.RunConfiguration

class LambdaListener {

	TestSuiteContext suiteContext;

	/**
	 * Executes before every test case starts.
	 * @param testCaseContext related information of the executed test case.
	 */
	@BeforeTestCase
	def sampleBeforeTestCase(TestCaseContext testCaseContext) {
		
		
		//To set the test name at LambdaTest.
		RunConfiguration.setDriverPreferencesProperty("Remote", "name", testCaseContext.getTestCaseId());
		if (suiteContext != null){
			RunConfiguration.setDriverPreferencesProperty("Remote","build", suiteContext.getTestSuiteId());
		}
		println testCaseContext.getTestCaseId();
		println RunConfiguration.getDriverPreferencesProperties();
	}
	/**
	 * Executes after every test case ends.
	 * @param testCaseContext related information of the executed test case.
	 */
	@com.kms.katalon.core.annotation.TearDown
	@AfterTestCase
	def sampleAfterTestCase(TestCaseContext testCaseContext) {
		//To set the status of test at LambdaTest.
		String result="failed";
		if(testCaseContext.getTestCaseStatus().equalsIgnoreCase("PASSED")){
			result="passed"
		}
		try{
			WebUI.executeJavaScript("lambda-status="+result,null)
		}catch (Exception e)
		{
			println e.toString()
		}
		finally {
			WebUI.closeBrowser()
		}
		println testCaseContext.getTestCaseId()
		println testCaseContext.getTestCaseStatus()
	}

	/**
	 * Executes before every test suite starts.
	 * @param testSuiteContext: related information of the executed test suite.
	 */
	@BeforeTestSuite
	def sampleBeforeTestSuite(TestSuiteContext testSuiteContext) {
		suiteContext=testSuiteContext
		//To Set the build Name at LambdaTest.
		RunConfiguration.setDriverPreferencesProperty("Remote","build", suiteContext.getTestSuiteId());
		println testSuiteContext.getTestSuiteId()
	}

	/**
	 * Executes after every test suite ends.
	 * @param testSuiteContext: related information of the executed test suite.
	 */
	@AfterTestSuite
	def sampleAfterTestSuite(TestSuiteContext testSuiteContext) {
		println testSuiteContext.getTestSuiteId()
	}
}
```

That is all. Now, you can effortlessly run Groovy Scripts in Katalon for triggering your tests over <BrandName /> cloud-based cross browser testing platform. Happy testing! ??

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="/support/docs/">Support</a>
	  </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">Running Groovy Script In Katalon With <BrandName /></span>
    </li>
  </ul>
</nav>
