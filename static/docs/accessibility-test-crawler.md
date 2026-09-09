# Accessibility Crawler

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

## Why TestMu AI Crawler is Helpful for Accessibility Testing

In accessibility testing, ensuring that all relevant URLs across a website are properly tested is crucial. Manual URL entry can be cumbersome and inefficient, especially for large websites with many pages. This is where TestMu AI’s URL Crawler comes into play, offering an automated and streamlined solution for accessibility testing.

With the TestMu AI Crawler, you can:

- **Automatically extract URLs** from your site based on set parameters like crawl depth and maximum pages to be crawled.
- **Scan large websites efficiently** without having to manually input each URL, saving time and resources.
- **Crawl dynamically** generated content and sub-pages that might otherwise be missed in traditional testing methods.
- **Ensure thorough coverage** by including/excluding specific URL patterns, which helps in targeting exactly the content you need to test for accessibility compliance.

By automating the URL discovery process, the TestMu AI Crawler allows you to focus on accessibility issues without missing any pages that might contain potential accessibility barriers.

## Step 1: Access the URL Crawler Feature
- Open the TestMu AI Accessibility Testing Dashboard.
- Select the “Crawler” option from the “Add URLs” section.

## Step 2: Configure Crawler Settings
- **Base URL:** Enter the domain from which you want to start crawling. This is the root URL for the crawler.
- **Crawl Depth:** Define how deep the crawler should go to fetch additional pages. For example, a depth of 2 will crawl the base URL and its immediate sub-pages.
- **Max Pages:** Set a limit on the maximum number of pages the crawler should scan. This is useful to prevent unnecessary resource consumption.

## Step 3: Define URL Patterns (Optional)
You can fine-tune your URL crawling by including or excluding certain URLs based on patterns.

- Enter regular expressions (regex) to include only certain URLs. For example, you can filter by page types, such as `.*\.html` to include only `.html` pages.
- Multiple patterns can be entered, separated by commas.

- Similarly, enter regex patterns to exclude specific URLs. For instance, you can use `.*\.pdf` to exclude PDF files from being crawled.
- Multiple exclude patterns can be entered, separated by commas.

## Step 4: Analyze the Scan Report
Once the scan is complete, you can analyze the scan report, which includes:
- **Total Issues:** A graph summarizing the detected accessibility issues.
- **Severity Trends:** Categorized by severity (Critical, Serious, Moderate, Minor).
- **Pages Scanned:** View details of each URL crawled, along with a breakdown of issues per URL.

You can drill down into individual URLs for a more detailed analysis of accessibility issues.

> Note: The crawler functionality is available only when creating a new scheduled scan, not for scans that have already been scheduled.

## Related docs

- [Test Scheduling - Sitemap (Overview)](/support/docs/accessibility-test-scheduling/)
- [Login & Authentication for Scheduled Scans](/support/docs/accessibility-test-scheduling-login-authentication/)
- [Create Scheduled Scan](/support/docs/accessibility-test-scheduling-scan/)
- [Sitemap Extraction & URL Import](/support/docs/accessibility-sitemap-extraction-url-import/)
