# Test Scheduling - Sitemap (Overview)

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Test Scheduling is a recurring accessibility scan on TestMu AI that runs against websites and web apps on a cadence you set, so you never have to start a new scan by hand. You seed the URL list (manually, by CSV, by sitemap, or with the crawler), authenticate any pages behind a login wall, choose a frequency, and let each run publish a fresh report. Reach for it when you want continuous visibility into accessibility drift, when you need to import or discover many URLs at once, or when the same scan should repeat automatically.

Test Scheduling is supported on **desktop only**. Scheduled scans run against websites and web apps on desktop browsers. **Native Android and iOS apps are not supported** and cannot be added to a scheduled scan. To test a mobile app, use [Accessibility App Scanner](/support/docs/accessibility-app-scanner/) for manual screen by screen scanning or [Native App Automation](/support/docs/accessibility-native-app-automation-test/) for Appium runs.

| Surface | Supported in Test Scheduling |
|---|---|
| Websites and web apps on desktop browsers | Yes |
| Native Android apps | No |
| Native iOS apps | No |

## Typical workflow

A scheduled scan comes together in five moves, from seeding URLs to reading the first report.

1. Create the scheduled scan.
2. Add URLs manually, through CSV, through sitemap extraction, or with the crawler.
3. Add **saved login configurations** (or tunnel / local access) if pages sit behind authentication. See [Login and Authentication](#login-and-authentication) for the field references.
4. Set the schedule. Start with a **weekly** cadence on a **subset** of URLs, then promote to daily once noise is manageable.
5. Review the resulting reports. After the first run, open the [accessibility testing dashboard](/support/docs/accessibility-testing-navigating-dashboard/) and confirm aggregates match expectations. Optionally enable the [fragment identifier setting](/support/docs/accessibility-fragment-identifier/) in DevTools settings when hash routes should split reporting for SPA teams (web URL grouping only).

**Expected result:** the scan appears in your Scheduled Tests list, runs on the cadence you chose, and produces a report after each run.

If you use the separate **Web Scanner** product instead of this Accessibility-native flow, start from [Web Scanner getting started](/support/docs/web-scanner-getting-started/) or the [Web Scanner accessibility scan](/support/docs/web-scanner-accessibility-scan/) guide.

## Sitemap Extraction and URL Import

Seed the page list from a sitemap or bulk import when you want to scan many URLs and do not want to add them one by one.

Three input methods are available:

- manual URL entry
- CSV upload
- sitemap extraction

To seed URLs for a new schedule:

1. Open Test Scheduling and start [Create a Scheduled Scan](#create-a-scheduled-scan), or edit an existing schedule.
2. Choose **manual**, **CSV**, or **sitemap** import depending on where your canonical URL list lives.
3. For **sitemap**, supply the sitemap URL (often `https://example.com/sitemap.xml`). Wait for extraction to finish, then **review** the list and remove admin-only, duplicate, or non-HTML URLs.
4. For **CSV**, align columns with the template your team uses (path, locale, or environment columns if applicable). Validate in a spreadsheet before upload.
5. For **manual** entry, paste critical journeys first (login, checkout, settings), then broaden coverage.
6. Save the URL set, then continue with the authentication and schedule steps in the scheduling wizard.

**Expected result:** the reviewed URLs populate the scan's page list and carry forward into the schedule.

Before scheduling large recurring scans, include core user-journey pages first, review the extracted URLs, and exclude pages that are not meaningful for accessibility validation.

## Login and Authentication

**Login configurations** are saved profiles the scanner runs **before** a scheduled accessibility test, so pages behind a sign-in wall are scanned as an authenticated user.

You define credentials and selectors once, then **select** a profile from the **login modal** whenever you create or edit a scan. The same modal opens from the **scheduler** (advanced options on the URL step) or from **Login configurations** on the dashboard, so you can manage profiles without starting a new scan.

Use a saved login when:

- **Target URLs** redirect to a sign-in page or hide content until the user is authenticated.
- **Recurring runs** should reuse the same sign-in flow without re-entering details in the wizard each time.
- Your app uses **HTTP Basic authentication**, a **single-page HTML form**, or a **username-then-password** flow that maps to **Basic**, **Form**, or **Multi-page** below.

If the site is not reachable from the public internet, combine login with **local testing / tunnel** options in the schedule wizard where your plan supports them.

Treat credentials as sensitive: prefer dedicated QA or read-only accounts, rotate passwords on your usual cadence, and follow your organization's access and secrets policy.

### Open the login modal

#### From the scheduler (create or edit)

1. In **Create scan** or **Edit scan**, go to the step where you **add URLs** (manual URLs, CSV, sitemap, or crawler, depending on your setup).
2. Expand **Advanced options**.
3. Under login settings, use **Add** next to **Add login configurations** to open the modal.

**Expected result:** the login modal opens over the wizard, listing any saved profiles.

#### From the dashboard

1. Open **Login configurations** from the Accessibility (or Web Scanner scheduling) area of the dashboard, as labeled in your product.
2. The **login modal** opens, where you can review existing profiles or add a new one.

**Expected result:** saved profiles are listed and ready to edit, delete, or reuse.

### Create a configuration

In the modal:

1. Choose **New configuration** (or equivalent) to open the editor.
2. Enter a **configuration name** you will recognize in the list (for example `Staging Microsoft login`).
3. Select **Authentication type**:
   - **Basic**: HTTP Basic auth (no HTML form).
   - **Form**: Username and password on **one** page.
   - **Multi-page**: Username step, then **Next**, then password (same or different URL).

4. Fill the fields for that type (see the tables below) and select **Save**.

**Expected result:** the new profile appears in the list immediately. To use it on a schedule, return to the scan wizard, open **Add login configurations** again, and **select** that profile before saving the scan.

Confirm every CSS selector in Chrome (or Edge) DevTools on the real login page: inspect the control, copy a stable selector (`id`, `name`, `data-testid`, or a short path), then paste it into the form.

### Field reference

#### Basic authentication

Use when the server responds with **HTTP Basic** authentication (browser-style username/password challenge), not when you only have a custom HTML login page. In that case use **Form** or **Multi-page**.

| Field | Required | Description |
|--------|----------|-------------|
| Login Page URL | Yes | Entry URL for the protected experience (for example `https://www.yourwebsite.com/login`). |
| Username | Yes | Username sent with Basic auth. |
| Password | Yes | Password sent with Basic auth. |

#### Form authentication

Use when, after opening the **Login Page URL**, the username field, password field, and submit control are all on the **same** document.

| Field | Required | Description |
|--------|----------|-------------|
| Login Page URL | Yes | URL where the sign-in form appears. |
| Username | Yes | Text entered into the username field. |
| Username CSS Selector | Yes | CSS selector for the username input. |
| Password | Yes | Text entered into the password field. |
| Password CSS Selector | Yes | CSS selector for the password input. |
| Login Button CSS Selector | Yes | CSS selector for the control that submits the form (for example **Sign in**). |
| Post-login URL | No | If set, helps verify navigation to a URL that indicates a successful login. |

#### Multi-page authentication

Use for **sequential** flows: enter the username, click **Next** (or equivalent), then enter the password, common with many enterprise identity providers.

##### Step 1: Login or username page

| Field | Required | Description |
|--------|----------|-------------|
| Login Page URL | Yes | First page of the flow (email or username step). |
| Username | Yes | Value entered on step 1. |
| Username CSS Selector | Yes | Selector for the username or email field. |
| Next Button CSS Selector | Yes | Selector for the control that advances to the password step. |

##### Step 2: Password page

| Field | Required | Description |
|--------|----------|-------------|
| Password Page URL | No | Use when the password step loads at a **different** URL; leave empty if only the DOM changes on the same URL. |
| Password | Yes | Password value. |
| Password CSS Selector | Yes | Selector for the password field. |
| Login Button CSS Selector | Yes | Selector for the control that completes sign-in. |

##### Step 3: After login

| Field | Required | Description |
|--------|----------|-------------|
| Post-login URL | No | Same idea as **Form** authentication: optional URL used to confirm the browser reached a logged-in state. |

### Attach a configuration to a schedule

1. In **Create** or **Edit scan**, on the URL step, expand **Advanced options** and open **Add login configurations**.
2. In the modal, pick the **saved configuration** for this scan.
3. Save the scan.

**Expected result:** scheduled runs use that profile for authentication before scanning.

You can reuse one configuration on many scans or keep separate profiles per environment (for example `Prod read-only` vs `Staging QA`).

To change a profile later, open **Login configurations** from the dashboard (or the same modal from a scan), select the profile you need, and use the product actions to **edit** or **delete** it. Updating a profile affects any future runs that reference it, so confirm downstream scans if you change selectors or URLs.

### Login best practices

- **Stable selectors**: Prefer `id`, `name`, `data-testid`, or short attribute-based selectors over long positional paths.
- **Least privilege**: Use automation or QA accounts, not personal admin accounts.
- **Post-login URL**: Point at a route that only appears after a successful login so failures are easier to interpret.

### Limitations

These are difficult or unsupported with Basic / Form / Multi-page alone:

| Situation | Why |
|-----------|-----|
| **OTP, SMS, authenticator, CAPTCHA** | Needs human interaction or a different integration model. |
| **OAuth-only** web flows | No password fields to drive with selectors. |
| **Intermittent risk / "Verify it's you" prompts** | Runs may succeed or fail unpredictably. |

Use staging environments with simplified auth, or other supported access paths, when possible.

### Troubleshooting

| Symptom | What to check |
|--------|----------------|
| Scan fails on the first URL | Correct profile selected; **Login Page URL** is the real start of the flow. |
| Timeout or "element not found" | Selectors, spelling, or UI that loads late. Verify in DevTools with throttling if needed. |
| Multi-page fails after username | **Next Button CSS Selector** targets the visible control; add **Password Page URL** if the path changes. |
| Works locally, fails on schedule | Cookie banners, geo restrictions, or MFA triggered for automated sessions. |

## Create a Scheduled Scan

Set up a new recurring or quick scan from the Accessibility dashboard, configure its pages, then let each run publish a report.

Scheduled scans are supported on **desktop only**. You can schedule scans for websites and web apps that run on desktop browsers. **Native Android and iOS apps are not supported** in this flow. For mobile apps, use the App Scanner or native app automation alternatives listed in the overview note above.

### Step 1: Access the Scheduled Scan feature
1. Open the Accessibility Testing Dashboard.
2. Click the **Scheduled Scan** option from the menu.

**Expected result:** the scheduled scan wizard opens on the scan details step.

### Step 2: Configure the scan
1. Enter the **Scan Name** for identification.
2. Select the desired **WCAG version** for compliance.

**Expected result:** the scan is named and its compliance standard is set for every run.

### Step 3: Add pages for the scan

Choose one of the input methods below to build the scan's page list.

- Enter your domain URL or XML sitemap URL
- Click on the Fetch Sitemap button to extract all the URLs

- In the Add Pages field, input individual URLs.
- Click Add for each URL.

- Prepare a CSV file with the list of URLs.
- Click Upload CSV to import the file.

#### Advanced options
- **Local Testing Setup (Tunnel):** If scanning locally hosted URLs, add a Local Testing Setup/Tunnel to access non-public environments.
- **Login Configuration:** For pages behind authentication, use **Add login configurations** to open the login modal, pick a saved profile, or create one (**Basic**, **Form**, or **Multi-page**). You can also manage profiles from the dashboard **Login configurations** entry. See the [Login and Authentication](#login-and-authentication) section for field references.
- **Review Issues:** Enable Needs Review for areas requiring manual inspection.
- **Best Practices Issues:** Check Best Practices to include suggestions for better accessibility.

### Step 4: Create the scan
1. Select between a **Recurring scan** (recommended) or a **Quick scan**, which lets you perform an immediate scan of the provided URLs without scheduling.
2. Specify the frequency (for example, daily or weekly) and timing details.
3. Once all details are configured, click the **Schedule Scan** button.

**Expected result:** the scan is saved and appears in your Scheduled Tests list with its next run date and time.

The **Run Initial Scan** checkbox adds flexibility to the scheduling feature. If enabled:
- The scan will run immediately after configuration, regardless of the chosen recurring schedule.
- This is useful for verifying the setup and ensuring that the scan configuration works as intended.

### Step 5: Access reports
1. Navigate to the Website Scanner section on the dashboard.
2. Select the desired report from the Scan Summary list.

**Expected result:** the report for the selected scan opens.

### Step 6: Analyze the scan report

After selecting a scan, a detailed scan report opens. The report displays the following key components:

- **Total Issues:** A graph summarizing the trend of detected issues over the last few runs.
- **Severity Trend:** A chart categorizing issues by severity (for example, Critical, Serious, Moderate, Minor).
- **Pages Scanned:** A list of scanned pages with their corresponding issue counts categorized by severity.

You can drill down into individual page URLs to view the number of issues found on that specific page using the filters provided. From the scan report page, you can also edit, share, and stop a recurring scan if it is no longer required.

## Edit a Scheduled Scan

Modify the name, recurrence days, and run time of an existing scheduled scan without recreating it.

### Access the Edit Report feature
1. Navigate to the Accessibility section on your TestMu AI dashboard.
2. Select the report you want to edit from the Scheduled Tests list.
3. Click the **Edit** button located at the top right corner of the report.

**Expected result:** an edit dialog opens with the current scan settings.

### Edit the scan details

The edit dialog exposes the following options:

#### 1. Scan Name
- Update the name of the scan to better reflect its purpose.
- **Example:** Change the name from `Monday, Tuesday, Friday Report for YT Platform` to a more descriptive title if needed.

#### 2. Recurring Details
- **Modify the days** on which the scan will run: Select the days from the dropdown (for example, Monday, Tuesday, Friday).
- **Update the time** for the recurring scan: Specify the time (for example, 12:00 PM) and time zone (for example, GMT +05:30 Asia/Calcutta).

After making the necessary updates, click **Save changes** to apply the modifications. To discard changes, click **Cancel**.

> Once the changes are saved, the updated scan name and schedule reflect in the Scheduled Tests section. The next scan date and time are automatically adjusted based on the new recurrence settings.

## Crawler

The TestMu AI URL Crawler automatically discovers URLs across a site so you do not have to enter each page by hand, which matters most for large sites with many pages.

With the crawler, you can:

- **Automatically extract URLs** from your site based on set parameters like crawl depth and maximum pages to be crawled.
- **Scan large websites efficiently** without having to manually input each URL, saving time and resources.
- **Crawl dynamically** generated content and sub-pages that might otherwise be missed in traditional testing methods.
- **Ensure thorough coverage** by including or excluding specific URL patterns, which helps you target exactly the content you need to test for accessibility compliance.

By automating URL discovery, the crawler lets you focus on accessibility issues without missing any pages that might contain potential accessibility barriers.

### Step 1: Access the URL Crawler feature
1. Open the TestMu AI Accessibility Testing Dashboard.
2. Select the **Crawler** option from the **Add URLs** section.

**Expected result:** the crawler configuration panel opens.

### Step 2: Configure crawler settings
- **Base URL:** Enter the domain from which you want to start crawling. This is the root URL for the crawler.
- **Crawl Depth:** Define how deep the crawler should go to fetch additional pages. For example, a depth of 2 crawls the base URL and its immediate sub-pages.
- **Max Pages:** Set a limit on the maximum number of pages the crawler should scan. This is useful to prevent unnecessary resource consumption.

### Step 3: Define URL patterns (optional)

Fine-tune the crawl by including or excluding certain URLs based on patterns.

- Enter regular expressions (regex) to include only certain URLs. For example, you can filter by page types, such as `.*\.html` to include only `.html` pages.
- Multiple patterns can be entered, separated by commas.

- Similarly, enter regex patterns to exclude specific URLs. For instance, you can use `.*\.pdf` to exclude PDF files from being crawled.
- Multiple exclude patterns can be entered, separated by commas.

### Step 4: Analyze the scan report

Once the scan is complete, analyze the scan report, which includes:

- **Total Issues:** A graph summarizing the detected accessibility issues.
- **Severity Trends:** Categorized by severity (Critical, Serious, Moderate, Minor).
- **Pages Scanned:** Details of each URL crawled, along with a breakdown of issues per URL.

You can drill down into individual URLs for a more detailed analysis of accessibility issues.

> Note: The crawler functionality is available only when creating a new scheduled scan, not for scans that have already been scheduled.
