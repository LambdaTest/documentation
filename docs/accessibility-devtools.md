---
id: accessibility-devtools
title: Accessibility DevTools (Overview)
sidebar_label: Test With Browser DevTools
description: Overview of TestMu AI Accessibility DevTools for manual and assisted web accessibility testing.
slug: accessibility-devtools/
toc_max_heading_level: 2
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

# Accessibility DevTools (Overview)

---

Accessibility DevTools is a browser-based Chrome extension for manual and assisted accessibility testing on websites and web apps. It runs inside the browser Inspect panel so you can scan a page, inspect the exact element behind each issue, and validate findings in an interactive session before moving to reports or remediation.

Reach for DevTools when you want to inspect a page directly in the browser, confirm issues quickly, or run scan types that depend on an interactive browsing session. Inside the extension you can install the toolkit, run quick, full-page, partial-page, multi-page, workflow, and keyboard scans, configure WCAG, best-practice, and needs-review options, and review issues live before acting on them.

DevTools is one of several accessibility surfaces. Automation runs checks through test frameworks such as Selenium, Cypress, and Playwright, Test Scheduling runs recurring web scans inside the Accessibility product, and Web Scanner handles URL lists in a separate product with its own navigation. Use DevTools for hands-on, session-based testing; use the others for programmatic or scheduled coverage.

A typical session runs top to bottom: install the toolkit, open the target page, pick the scan type that fits the task, review the findings, then continue into the dashboard or a remediation flow.

## Install the Toolkit

Set up the Chrome extension and sign in before running any scan.

**Step 1:** Go to the Accessibility Dashboard and click on the [**Download Plugin**](https://chromewebstore.google.com/detail/lambdatest-accessibility/mmbbmjhbidfflcbiffppojapgonepmab) button.

<img loading="lazy" src={require('../assets/images/accessibility-testing/1.png').default} alt="automation-dashboard" className="doc_img" />

**Step 2:** This will redirect you to the **Chrome Web Store** from where you can download the extension.

- Click on **Add to Chrome** button to install the extension and pin the extension.

<img loading="lazy" src={require('../assets/images/accessibility-testing/2.png').default} alt="automation-dashboard" className="doc_img" />

**Step 3:** Go to the **Inspect** panel of your desired website. Switch to the **Accessibility DevTools** panel.

- Login to your <BrandName /> account.

<img loading="lazy" src={require('../assets/images/accessibility-testing/3.png').default} alt="automation-dashboard" className="doc_img" />

## Run a Quick Scan

Quick Scan is the fastest way to check a single page for accessibility issues, scanning the full page and grouping the results by severity.

:::note
Quick Scan performs the same check as a Full Page Scan. For details on what the scan covers and how issues are categorized, see the [Full Page Scan](#full-page-scan) section below.
:::

### Prerequisite

- You have installed the Accessibility DevTools in your browser. See [Install the Toolkit](#install-the-toolkit).

### Run the scan

1. Open the target webpage.
2. Open **DevTools** (Inspect panel) and select the **<BrandName /> Accessibility DevTools** tab.
3. Click the **Full Page Scan** button. The scan starts on the current page.

<img loading="lazy" src={require('../assets/images/accessibility-testing/full-page-scanner/1.png').default} alt="DevTools quick scan trigger" className="doc_img" />

### Review the results

The scan returns a list of issues found on the page. Click any issue to see which element is affected and where it appears in the DOM.

<img loading="lazy" src={require('../assets/images/accessibility-testing/full-page-scanner/2.png').default} alt="DevTools quick scan results" className="doc_img" />

### Next steps

- To scan only part of the page, see [Partial Page Scan](#partial-page-scan).
- To scan across multiple pages, see [Multi-Page Scan](#multi-page-scan).
- To configure WCAG version, best practices, and needs review, see [DevTools Settings](#devtools-settings).

## Scanning Methods

Match the scan type to the task, from a single page to a full user journey.

### Full Page Scan

Full Page Scan analyzes the accessibility of an entire web page at once, going beyond individual element checks to surface issues across all page content.

#### Functionalities of Full Page Scanner

- **Scans Multiple elements :** It analyzes various aspects of your webpage, including HTML/CSS code, images, forms, multimedia, and interactive elements.
- **WCAG Compliance Checks :** It identifies potential violations against relevant WCAG guidelines (e.g., missing alt text, insufficient color contrast, keyboard navigation issues).
- **Automated Issue Detection :** It automatically highlights problems and provides detailed descriptions, pinpointing them directly on the scanned page.
- **Prioritization Options:** It prioritizes issues based on severity and potential impact, helping you focus on the most critical ones first.
- **Report Integration:** Results from a Full Page Scan are saved to the Accessibility dashboard for review, export, and integration with issue trackers.

#### Execute the Full Page Scanner for Your Website

##### Prerequisite

- You have to set up the Accessibility DevTools in your browser. See [Install the Toolkit](#install-the-toolkit).

##### Trigger the Accessibility DevTool

- Go to the **Inspect** panel >> **<BrandName /> Accessibility DevTools** of your required website.
- Click on the **Full Page Scan** button to start the scanning for **Accessibility Issue** for that particular page.

<img loading="lazy" src={require('../assets/images/accessibility-testing/full-page-scanner/1.png').default} alt="automation-dashboard" className="doc_img" />

##### Review Your Issues

- This will list down all of the issues after scanning your complete webpage.
- You can click on those issues to check with which particular element it is causing issue.

<img loading="lazy" src={require('../assets/images/accessibility-testing/full-page-scanner/2.png').default} alt="automation-dashboard" className="doc_img" />

### Partial Page Scan

Partial Page Scan focuses accessibility evaluation on a specific region or element rather than the whole page.

It analyzes specific regions or elements within a webpage instead of the entire page. It is Ideal for:

- Testing specific components like forms, interactive elements, or embedded content.
- Investigating reported accessibility issues on particular sections of a webpage.
- Evaluating accessibility changes made to a specific area.

#### Functionalities of Partial Page Scanner

- **Manual Selection :** Choose the specific area you want to scan by highlighting it on the webpage.
- **Targeted Analysis :** Focuses on the selected area and identifies potential accessibility issues within that region.
- **WCAG Compliance Checks :** Similar to the Full Page Scanner, it checks for violations against relevant WCAG guidelines within the chosen area.
- **Detailed Reporting :** Provides a report highlighting identified issues, descriptions, and WCAG references, specific to the scanned region.

#### Execute the Partial Page Scanner for Your Website

##### Prerequisite

- You have to set up the Accessibility DevTools in your browser. See [Install the Toolkit](#install-the-toolkit).

##### Trigger the Accessibility DevTool

- Go to the **Inspect** panel >> **<BrandName /> Accessibility DevTools** of your required website.
- Click on the **Partial Page Scan** button to start the scanning for **Accessibility Issue** for that particular section of the webpage.

<img loading="lazy" src={require('../assets/images/accessibility-testing/partial-page-scanner/1.png').default} alt="automation-dashboard" className="doc_img" />

##### Select Your Desired Section of the Webpage

- To start the scan, you will have to select a particular section of your webpage for which you want the analysis report.
- You can select any particular section for scanning via two ways:
  - **Element Selection :** You can select that particular element via naigating to that tag from the right panel.
  - **Mouse Selection :** You will have to toggle the **Mouse Selection** to **true** and select that particular element by clicking on the webpage directly.

- Click on **Start Scan** button.

    <img loading="lazy" src={require('../assets/images/accessibility-testing/partial-page-scanner/2.png').default} alt="automation-dashboard" className="doc_img" />

    - It will scan that particular section and will list down the issues with that section (if found any).

    <img loading="lazy" src={require('../assets/images/accessibility-testing/partial-page-scanner/3.png').default} alt="automation-dashboard" className="doc_img" />

### Multi-Page Scan

Multi-Page Scan analyzes accessibility across multiple webpages within a website or application for a consolidated view of issues.

You can use Multi Page Scanner for:

- Testing large websites or applications with multiple interconnected pages.
- Identifying common accessibility patterns and prioritizing fixes that impact the entire user experience.
- Combining with Full Page and Partial Page scans for targeted analysis of specific sections or pages.

#### Functionalities of Multi Page Scanner

- Crawls your website based on user-defined settings like starting URL, crawl depth, and exclusion patterns.
- Performs accessibility checks on each scanned page using the same principles as the Full Page Scanner.
- Generates a consolidated report highlighting issues across all scanned pages, prioritizing them based on severity and impact.

#### Execute the Multi Page Scanner

##### Prerequisite

- You have to set up the Accessibility DevTools in your browser. See [Install the Toolkit](#install-the-toolkit).

##### Trigger the Accessibility DevTool

- Go to the **Inspect** panel >> **<BrandName /> Accessibility DevTools** of your required website.
- Click on the **Multi Page Scan** button to start the scanning for **Accessibility Issue** for that particular page.

<img loading="lazy" src={require('../assets/images/accessibility-testing/multi-page-scanner/1.png').default} alt="automation-dashboard" className="doc_img" />

##### Scan the Multiple Webpages

- Simply add all the URLs of the webpages that you want to scan.
- Click on the **Start Scan** button.

<img loading="lazy" src={require('../assets/images/accessibility-testing/multi-page-scanner/2.png').default} alt="automation-dashboard" className="doc_img" />

##### Review Your Issues

- This will list down all of the issues after scanning all the listed webpages.

<img loading="lazy" src={require('../assets/images/accessibility-testing/multi-page-scanner/3.png').default} alt="automation-dashboard" className="doc_img" />

- You can also filter out your issues list by selecting any specific page.

<img loading="lazy" src={require('../assets/images/accessibility-testing/multi-page-scanner/4.png').default} alt="automation-dashboard" className="doc_img" />

### Workflow Scan

Workflow Scan records real-time interactions and page loads within a user journey, then analyzes them for accessibility issues so people with disabilities can navigate every scenario.

#### Functionalities of Workflow Scan

- **Identify real-world accessibility issues :** Goes beyond static page analysis and identifies problems users might encounter during interaction.
- **Test complex user flows :** Ensures accessibility throughout navigation, forms, and interactive elements.
- **Save time and effort :** Tests multiple pages at once without needing individual scans.
- **Prioritize issues based on usage :** Focuses on problems encountered in typical user journeys.

#### Execute the Workflow Scanner

##### Prerequisite

- You have to set up the Accessibility DevTools in your browser. See [Install the Toolkit](#install-the-toolkit).

##### Trigger the Accessibility DevTool

- Go to the **Inspect** panel >> **<BrandName /> Accessibility DevTools** of your required website.
- Click on the **Workflow Scan** button to start the scanning for **Accessibility Issue** for that particular page.

<img loading="lazy" src={require('../assets/images/accessibility-testing/workflow-scanner/1.png').default} alt="automation-dashboard" className="doc_img" />

##### Review Your Issues

- This will list down all of the issues after scanning all of your webpages that you have searched for.

<img loading="lazy" src={require('../assets/images/accessibility-testing/workflow-scanner/2.png').default} alt="automation-dashboard" className="doc_img" />

## Keyboard Scan

Keyboard Scan pairs automated tab simulation with guided manual verification to find keyboard accessibility gaps across a page.

The Assistive Keyboard Accessibility Test combines automated tab simulation with guided manual verification to identify keyboard accessibility issues. It helps ensure all interactive elements on your web page are accessible via keyboard navigation. This capability is currently in Beta.

### Running a Keyboard Test

**Step 1: Initiate the Test**

1. Navigate to the web page you want to test
2. Open the Accessibility Devtools from your chrome devtools option
3. Under Assistive Tests, select Keyboard Scan

<img loading="lazy" src={require('../assets/images/accessibility-testing/keyboard-scanner/keyboard-scan.png').default} alt="Keyboard Scan initiation in DevTools" className="doc_img" width="1360" height="768" />

**Step 2: Select Test Scope**

Choose how much of the page you want to test:

- **Full Page**: Tests the entire page for keyboard accessibility
- **Partial Page**: Allows you to select a specific section or component
  - After selecting this option, click and drag to highlight the area you want to test
  - Or click on a container element to test that specific section

<img loading="lazy" src={require('../assets/images/accessibility-testing/keyboard-scanner/full-partial-option.png').default} alt="Full Page and Partial Page scope options" className="doc_img" width="1360" height="768" />

> **Tip**: For complex pages, start with partial page tests on individual components before running a full page test.

**Step 3: Review Tab Simulation Results**

The tool will automatically:

1. Simulate pressing the Tab key through your selected scope
2. Identify all elements that receive keyboard focus
3. Display a list of found tabbable elements
4. Show the total count of tabbable items

The results will be displayed both as : A numbered list in the tool interface and Visual highlights on the actual page elements.

**Step 4: Identify Missing Interactive Elements**

The tool will ask: "Are there any interactive elements within the scope that should be reachable via the Tab key but were not included in the list above?"

If you select "**No**":

<img loading="lazy" src={require('../assets/images/accessibility-testing/keyboard-scanner/missed-elements-no.png').default} alt="No missing elements selected" className="doc_img" width="1360" height="768" />

- The manual verification is complete
- No manual issues are logged
- The test proceeds to generate the final report

If you select "**Yes**":

<img loading="lazy" src={require('../assets/images/accessibility-testing/keyboard-scanner/missed-elements-yes.png').default} alt="Yes: missing elements prompt" className="doc_img" width="1360" height="768" />

- You'll see the prompt: "Please click on the interactive element(s) that were missed in the tab order"
- Click on any interactive elements (buttons, links, form fields, etc.) that should be keyboard accessible but weren't in the tab list.
- Each element you select will be logged as an accessibility violation.
- Click Confirm Selection when you've identified all missing elements

<img loading="lazy" src={require('../assets/images/accessibility-testing/keyboard-scanner/missed-elements-yes-selection.png').default} alt="Selecting missed interactive elements" className="doc_img" width="1360" height="768" />

**Step 5: Review Automated Findings**

While you're performing the manual check, the tool runs our accessibility automated engine in the background to detect automated keyboard accessibility issues such as:

- Illogical focus order
- Nested interactive elements
- Scrollable regions without keyboard access
- Focus indicators missing or unclear

<img loading="lazy" src={require('../assets/images/accessibility-testing/keyboard-scanner/report-on-plugin.png').default} alt="Keyboard scan report in DevTools plugin" className="doc_img" width="1360" height="768" />

You can inspect individual issues directly on the page or use the highlight option to visualize them:

<img loading="lazy" src={require('../assets/images/accessibility-testing/keyboard-scanner/report-inspect-option.png').default} alt="Inspect option for keyboard scan findings" className="doc_img" width="1360" height="768" />

<img loading="lazy" src={require('../assets/images/accessibility-testing/keyboard-scanner/report-highlight-option.png').default} alt="Highlight option for keyboard scan findings" className="doc_img" width="1360" height="768" />

<br/>

For common questions, see the [Accessibility FAQ](/support/faq/?tab=accessibility).

## DevTools Settings

These settings apply when you run scans manually through the DevTools panel.

:::note
If you are configuring settings for automated test execution (Selenium, Cypress, Playwright, etc.), see [accessibility automation scan configurations](/support/docs/accessibility-automation-scan-configurations/) instead.
:::

### Access DevTools settings

Click on your **profile icon** and then **Settings**.

<img loading="lazy" src={require('../assets/images/accessibility-testing/settings/1.png').default} alt="Accessibility DevTools settings" className="doc_img" />

### WCAG version

Select which **WCAG version** your DevTools scans should check against. Options include WCAG 2.0, WCAG 2.1 A, WCAG 2.1 AA, WCAG 2.1 AAA, WCAG 2.2 A, and WCAG 2.2 AA. The recommended version is **WCAG 2.1 AA**.

<img loading="lazy" src={require('../assets/images/accessibility-testing/settings/4.png').default} alt="WCAG version selector" className="doc_img" />

### Review Issues

Some issues require manual review before they can be confirmed as true violations. When this setting is enabled, the scan results include a **Needs Review** category.

<img loading="lazy" src={require('../assets/images/accessibility-testing/settings/5.png').default} alt="Needs Review issues" width="1346" height="647" className="doc_img" />

To review an issue:

1. Click on the issue to expand it.
2. Select the element you want to evaluate.
3. Click **Yes** to confirm it as an issue, or leave it unconfirmed.
4. Use **Undo** to reverse a confirmation.

<img loading="lazy" src={require('../assets/images/accessibility-testing/settings/6.png').default} alt="Review and confirm issues" className="doc_img" />

### Best Practices

Enable this setting to include issues that go beyond WCAG requirements but improve overall user experience. Best practice issues are reported separately from WCAG violations.

### Autosave Reports

This option is enabled by default. When active, scan results are automatically saved to the Accessibility dashboard. Toggle it off if you want to review results without persisting them. To work with saved results, see [Navigating the Dashboard](/support/docs/accessibility-testing-navigating-dashboard/).

<img loading="lazy" src={require('../assets/images/accessibility-testing/settings/3.png').default} alt="Autosave reports setting" className="doc_img" />

## Update the DevTools Extension

Keep the extension current so you have the latest features, improvements, and security patches.

Keeping your <BrandName /> Accessibility DevTools Chrome extension updated ensures you have the latest features, improvements, and security patches. Follow the detailed steps below to update your extension.

<div className="ytframe">
<div className="youtube" data-embed="7CuoCS7dX70" data-loading-attribute="eager">
  <div className="play-button"></div>
</div>
</div>

### Step 1: Open the Extensions Page

- Launch the Google Chrome browser on your computer.
- In the address bar, type `chrome://extensions/` and press Enter.
- This will open the Extensions page where all your installed Chrome extensions are listed.

### Step 2: Enable Developer Mode

- On the Extensions page, look for the **Developer mode** toggle located at the top right corner of the page.
- Click on the **Developer mode** toggle to turn it on. When enabled, you will see additional options such as **Load unpacked, Pack extension, and Update**.

### Step 3: Update Your Extensions

- Once the **Developer mode** is enabled, you will see an **Update** button appear at the top left corner of the Extensions page.
- Click on the **Update** button.

### Step 4: Wait for the Update Process

- After clicking the **Update** button, Chrome will start checking for updates for all your installed extensions, including the <BrandName /> Accessibility DevTools extension.

This process may take a few moments. Please wait until you see a confirmation message or the progress indicator stops.

### Step 5: Confirmation

Once the update process is complete, you will see a message confirming that your extensions have been updated.

## Related docs

Continue from a browser session into programmatic coverage.

- [Run accessibility automation tests](/support/docs/accessibility-automation-test/)
