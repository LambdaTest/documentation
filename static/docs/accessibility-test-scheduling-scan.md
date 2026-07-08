# Steps to Schedule an Accessibility Scan

## Step 1: Access the Scheduled Scan Feature
- Open the Accessibility Testing Dashboard.
- Click the “Scheduled Scan” option from the menu.

## Step 2: Configure the Scan
- Enter the Scan Name for identification.
- Select the desired WCAG version for compliance.

## Step 3. Add Pages for the Scan

- Enter your domain URL or XML sitemap URL
- Click on the Fetch Sitemap button to extract all the URLs

- In the Add Pages field, input individual URLs.
- Click Add for each URL.

- Prepare a CSV file with the list of URLs.
- Click Upload CSV to import the file.

### Advanced Options
- **Local Testing Setup (Tunnel) :** If scanning locally hosted URLs, add a Local Testing Setup/Tunnel to access non-public environments.
- **Login Configuration :** For pages behind authentication, use **Add login configurations** to open the login modal, pick a saved profile, or create one (**Basic**, **Form**, or **Multi-page**). You can also manage profiles from the dashboard **Login configurations** entry. See **[Login & Authentication for Scheduled Scans](/support/docs/accessibility-test-scheduling-login-authentication/)**.
- **Review Issues :** Enable Needs Review for areas requiring manual inspection.
- **Best Practices Issues :** Check Best Practices to include suggestions for better accessibility.

## Step 4. Create the Scan
- Select between a Recurring scan (Recommended) or a Quick scan which allow you to perform an immediate scan of the provided URLs without scheduling.
- Specify the frequency (e.g., daily, weekly) and timing details.

Once all details are configured, click Schedule Scan button.

The **Run Initial Scan** checkbox, adds flexibility to the scheduling feature. If enabled:
- The scan will run immediately after configuration, regardless of the chosen recurring schedule.
- This is useful for verifying the setup and ensuring that the scan configuration works as intended.

## Step 5: Access Reports
- Navigate to the Website Scanner section on the dashboard.
- Select the desired report from the Scan Summary list.

## Step 6: Analyze the Scan Report
After selecting a scan, A detailed scan report will open, as shown in the provided screenshot. The report will display the following key components:
- **Total Issues :** A graph summarizing the trend of detected issues over the last few runs.
- **Severity Trend :** A chart categorizing issues by severity (e.g., Critical, Serious, Moderate, Minor).
- **Pages Scanned :** A list of scanned pages with their corresponding issue counts categorized by severity.

You can drill down into individual page URLs to view the number of issues found on that specific page using filters provided. From the scan report page, you can also edit, share and stop recurring scan if its no longer required.
