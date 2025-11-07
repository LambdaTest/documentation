---
id: analytics-ai-root-cause-analysis
title: AI Root Cause Analysis (AI RCA) - Test Intelligence
sidebar_label: AI Root Cause Analysis
description: Automatically analyze test failures with AI-powered Root Cause Analysis. Get instant insights into test failure patterns and accelerate debugging with actionable RCA results.
keywords:
  - analytics
  - AI RCA
  - root cause analysis
  - test intelligence
  - test failure analysis
  - debugging
  - AI insights
url: https://www.lambdatest.com/support/docs/analytics-ai-root-cause-analysis/
site_name: LambdaTest
slug: analytics-ai-root-cause-analysis/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "AI Root Cause Analysis",
          "item": "https://www.lambdatest.com/support/docs/analytics-ai-root-cause-analysis/"
        }]
      })
    }}
></script>

AI Root Cause Analysis (AI RCA) in LambdaTest Analytics automatically analyzes failed tests to identify probable root causes and provides actionable insights to improve test stability and reduce debugging time. This AI-powered feature accelerates your debugging process by eliminating manual investigation and providing instant, comprehensive failure analysis.

## What is AI Root Cause Analysis?

AI RCA is an intelligent feature that uses advanced machine learning algorithms to automatically analyze test failures and identify their root causes. Instead of manually sifting through logs and error messages, AI RCA provides:

- **Automated failure analysis** that runs immediately when tests fail
- **Intelligent root cause identification** distinguishing between primary causes and cascading symptoms
- **Actionable steps to fix** with specific fixes and recommendations
- **Historical trend analysis** to identify recurring issues and patterns
- **Comprehensive error timelines** showing the sequence of events leading to failures

## Prerequisites for AI RCA

1. **Active LambdaTest Account**: You should have an active LambdaTest account with appropriate permissions.
2. **Subscription Plan**: This feature is available for users with HyperExecute or App/Web Automation subscription plans.
3. **Available Credits**: Tests will only be processed through RCA when sufficient credits are available. For more information on credit management, see our [Credits Management](/docs/credits-management/) documentation.
4. **Test Failures**: AI RCA requires at least one test failure to generate analysis. The system learns from your test execution patterns.
5. **Access to Insights**: You should have access to the LambdaTest Insights platform under **Insights** tab.

## Configuration & Setup

<img loading="lazy" src={require('../assets/images/analytics/test-intelligence-ai-test-rca-configuration.png').default} alt="cmd" width="800" height="400" className="doc_img"/>

### Step 1: Access Organization Settings

1. Navigate to **Organization Settings** in your LambdaTest dashboard
2. In the left sidebar, expand the **Insights** section under **Org Product Preferences**
3. Select **Automatic AI RCA** from the available options

### Step 2: Enable AI RCA

**Toggle the Feature**: Use the blue toggle switch to enable "Automatic AI RCA"

### Step 3: Configure Analysis Scope

In the **Analysis Scope** section, choose which types of test failures to analyze:
- **All failures**: Analyze every failed test, regardless of previous status
- **New failures**: Analyze only tests that have failed recently after having passed at least 10 consecutive times previously.
- **Consistent Failures**: Analyze only tests that have failed in all of their previous 5 runs to identify persistent issues.

### Step 4: Configure Intelligent Targeting

Configure intelligent targeting rules to precisely control which tests, builds, tags, projects, or jobs are included in AI-powered analysis:

1. **Add Targeting Rules**: Enter regex patterns in the input field
2. **Click Include (+) or Exclude (-)**: Choose whether to include or exclude matching tests
3. **Configure Multiple Criteria**: Set targeting rules for:
   - **Test Names**: Target specific test suites or test patterns
   - **Build Names**: Include or exclude builds with specific names (e.g., hourly, nightly)
   - **Test Tags**: Include or exclude tests with specific tags (e.g., playwright_test, atxHyperexecute_test)
   - **Build Tags**: Include or exclude builds with specific tags (e.g., hourly, nightly)
   - **Project Names**: Include or exclude tests from specific projects using regex patterns
   - **Job Labels**: Include tests with specific job labels or tags

#### Rule Logic and Application

The intelligent targeting system applies rules using the following logic:

**Rule Evaluation Process:**
1. **Include Rules (AND Logic)**: All Include rules within the same category must match for a test to be considered
2. **Exclude Rules (OR Logic)**: Any Exclude rule that matches will immediately exclude the test from analysis
3. **Cross-Category Logic**: Include rules across different categories (Test Names, Build Tags, Project Names, etc.) must ALL match
4. **Exclusion Precedence**: Exclude rules take priority over Include rules - if any exclude rule matches, the test is excluded regardless of include matches

**Best Practices for Rule Configuration:**
- **Start Broad**: Begin with general include rules, then add specific exclusions
- **Use Specific Patterns**: Avoid overly broad regex patterns that might include unintended tests
- **Test Your Rules**: Verify rule behavior with sample test names and tags before applying
- **Regular Review**: Periodically review and update rules based on changing test patterns

<!-- #### Example Configuration -->
#### Example Configuration for Production Test Analysis

:::tip

**Test Name:**
- **Include**: `.*prod.*` - Only analyze tests with name containing "prod"
- **Exclude**: `.*non-critical.*` - Skip tests with name containing "non-critical"

**Build Tags:**
- **Include**: `^hourly` - Only analyze builds with tag starting with "hourly"

**Test Tags:**
- **Include**: `playwright_test|atxHyperexecute_test` - Focus on specific test frameworks
- **Exclude**: `.*smoke.*` - Skip smoke tests

**Project Names:**
- **Include**: `^ecommerce|^payment` - Only analyze tests from projects starting with "ecommerce" or "payment"
- **Exclude**: `.*staging.*` - Skip tests from staging projects

**Result**: AI-powered analysis will run only on production tests (excluding non-critical ones) from hourly builds, focusing on Playwright or HyperExecute test tags, while excluding smoke tests. The analysis will target ecommerce and payment projects, excluding staging projects. This configuration helps narrow down analysis to the most critical test scenarios.
:::

### Step 5: Manage Custom RCA Categories (Optional)

Custom RCA Categories allow you to define intelligent classification categories that automatically categorize and organize test failure analysis results. This helps you group similar failures together, track trends, and prioritize fixes more effectively.

#### Managing Categories

1. In the **Automatic AI RCA** configuration page, locate the **Custom RCA Categories** section
2. Click the **Manage** button to open the category management drawer
3. **Create**: Click **Add Category**, enter a name and description, select **Active** or **Inactive** status, then click **Create RCA Category**
4. **Edit**: Click the edit icon on any category card to modify its details
5. **Delete**: Click the delete icon and confirm to remove a category
6. **Search**: Use the search box to filter categories by name or description

**Category Status:**
- **Active**: Used by AI for automatic classification and appears in RCA results
- **Inactive**: Saved but not used for classification; can be reactivated later

**Best Practices:**

:::tip
- **Be Specific**: Create distinct categories (e.g., "Database Connection Timeouts" vs "Database Issues")
- **Use Clear Names**: Choose names your team understands immediately
- **Start Small**: Begin with 5-10 active categories for your most common failure types
- **Review Regularly**: Periodically refine categories based on your failure patterns
:::

**Example Custom RCA Categories:**

| Category Name | Description |
|--------------|-------------|
| **UI Element Not Found** | Failures where tests cannot locate expected UI elements due to timing issues, selector changes, or DOM modifications |
| **API Timeout Errors** | Failures caused by API requests exceeding timeout thresholds, often related to third-party service reliability |
| **Database Connection Issues** | Failures due to database connection pool exhaustion, connection timeouts, or query performance problems |
| **Authentication Token Expiration** | Failures related to expired or invalid authentication tokens, session timeouts, or OAuth refresh issues |
| **Network Connectivity Issues** | Failures caused by network interruptions, DNS failures, proxy issues, or unstable network connections |

### Step 6: Set Special Instructions (Optional)

Provide context or specific guidance for the AI to consider during analysis:

1. Click on the **Special Instructions** section
2. Enter any special instructions or context that should be considered during AI root cause analysis
3. Use the "Show examples" link for guidance on effective instruction writing

**Example Instructions:**

:::tip
**Environment-Specific Context:**
- Running on Staging environment with test data
- Database may have lag issues during peak hours (9 AM - 5 PM EST)
- Test environment has limited resources compared to production (2GB RAM vs 8GB)
- Network latency is higher in test environment (average 150ms vs 50ms in production)

**Known Issues & Patterns:**
- Payment gateway timeouts during high traffic periods (especially between 2-4 PM)
- Cache invalidation issues occur immediately after deployments
- Third-party API rate limits: Salesforce (1000 requests/hour), HubSpot (500 requests/hour)
- Database connection pool is limited to 20 connections - look for pool exhaustion patterns
- OAuth token expiration happens every 24 hours - failures around token refresh time are expected

**Analysis Preferences:**
- Focus on recent failures over recurring issues when prioritizing
- Consider browser compatibility differences (Chrome vs Firefox behavior variations)
- Check for timing-related failures (elements loading asynchronously)
- Distinguish between environment-specific issues vs application bugs
- Prioritize failures affecting core user journeys: Login, Checkout, Dashboard, Profile Management

**Business Context:**
- Critical user journeys: Login, Checkout, Dashboard, Profile Management
- Performance thresholds: Page load < 3s, API response < 500ms
- Peak usage hours: 10 AM - 2 PM and 6 PM - 9 PM EST
- High-value features: Payment processing, Order management, Customer support portal

**Technical Constraints:**
- Flaky network connections in mobile tests (use retry logic)
- Third-party service dependencies may be unstable (payment gateway, email service)
- Custom error handling: All errors logged to Sentry, user-friendly messages displayed
- Test data cleanup runs nightly - some data may be stale during day

**Ignore These Common False Positives:**
- Browser console warnings that don't affect functionality
- Network requests to analytics services (Google Analytics, Hotjar, Mixpanel)
- Minor UI layout shifts that don't break functionality (< 5px)
- Expected 404s for optional resources (favicon, tracking pixels)
- Third-party script loading delays that don't impact core functionality
:::

### Step 7: Save Configuration

1. Click **Save Configuration** to apply your settings
2. The settings will be applied to all users in your organization and cannot be modified by individual users or need admin level privileges.

## RCA Output & Interpretation

### Where to View RCA Results

AI RCA results are available in multiple locations across the LambdaTest platform:

1. **TMS Dashboard**: View RCA results directly in your test execution dashboard
2. **HyperExecute Dashboard**: Access detailed RCA analysis for HyperExecute jobs
3. **Insights Dashboard**: Comprehensive RCA analytics and trend analysis

<img loading="lazy" src={require('../assets/images/analytics/test-intelligence-ai-test-rca-insights.png').default} alt="cmd" width="800" height="400" className="doc_img"/>

### Understanding RCA Output

The RCA output provides a unified analysis with:

- **Primary Root Cause**: The main issue identified by AI analysis
- **Cascading Symptoms**: Secondary issues that contribute to the problem but aren't the primary cause
- **Severity Level**: High, Medium, or Low severity classification
- **Error Category**: JavaScript Error, Network Error, Environment Issue, etc.

<details>
<summary>View Example RCA</summary>

**Example RCA Summary:**
> **Problem**: Contact creation test fails after 30 seconds  
> **Root Cause**: Database connection pool is full (10/10 connections used)  
> **Impact**: New contact requests wait in queue until connections free up  
> **Fix**: Increase connection pool from 10 to 50 connections

#### Error Timeline

The Error Timeline provides a chronological sequence of events leading to the failure:

**Example Timeline for CRM Contact Creation Test Failure:**
1. **Test starts** - Navigate to contacts page (1s)
2. **Fill form** - Enter contact details (3s)  
3. **Click submit** - Create contact button clicked (4s)
4. **Connection issue** - Database pool full, request queued (4s)
5. **Wait timeout** - No connections available (30s)
6. **Test fails** - "Contact creation timeout"

#### Steps to Fix

Each RCA includes specific, actionable steps to fix with clear implementation guidance:

**Database Connection Issues:**
- **Quick Fix**: Increase connection pool from 10 to 50
- **Code**: `spring.datasource.hikari.maximum-pool-size=50`
- **Test Fix**: Add connection health check before form submission

**Form Submission Failures:**
- **Quick Fix**: Add retry logic with 3 attempts
- **Code**: `retry(createContact, { maxAttempts: 3, delay: 2000 })`
- **Test Fix**: Mock database calls in test environment

**Performance Issues:**
- **Quick Fix**: Increase timeout to 45 seconds
- **Code**: `waitForElement('#success-message', { timeout: 45000 })`
- **Test Fix**: Use lightweight test data

</details>

### RCA Category Trends Widget

The RCA Category Trends widget in Insights enables you to:

1. **View Historical Trends**: See how different RCA categories have evolved over time
2. **Drill Down Analysis**: Click on specific categories to analyze test failure patterns
3. **Identify Recurring Issues**: Spot patterns in failure types to prioritize fixes
4. **Track Improvement**: Monitor the effectiveness of your remediation efforts

<img loading="lazy" src={require('../assets/images/analytics/test-intelligence-ai-test-rca-widget.png').default} alt="cmd" width="800" height="400" className="doc_img"/>

## Best Practices

### 1. Effective Configuration

- **Start with "All failures"** to get comprehensive coverage, then refine based on your needs
- **Use specific special instructions** to guide the AI toward your most critical issues
- **Set up intelligent targeting** to focus on relevant test suites and exclude noise
- **Create custom RCA categories** to organize and track failure patterns systematically

### 2. Interpreting Results

- **Focus on primary root causes** rather than cascading symptoms
- **Prioritize high-severity issues** for immediate attention
- **Use the error timeline** to understand the sequence of events
- **Apply steps to fix systematically** starting with the most critical fixes

### 3. Continuous Improvement

- **Review RCA accuracy** and provide feedback when possible
- **Monitor trend analysis** to identify recurring patterns
- **Update special instructions** based on new insights and requirements
- **Refine custom RCA categories** to better match your failure patterns and organizational needs
- **Share RCA results** with your team to improve collective understanding

<!-- ### 4. Integration with Workflow

- **Set up alerts** for high-severity RCA findings
- **Create tickets** directly from RCA results for systematic tracking
- **Use RCA data** in sprint planning to prioritize bug fixes
- **Document successful fixes** to build institutional knowledge -->

## Troubleshooting Common Issues

<details>
<summary><strong>RCA Not Generating</strong></summary>

- **Check prerequisites**: Ensure you have the required subscription plan
- **Verify credits availability**: AI RCA processing requires credits to be available in your account. Check your [Credits Management](/docs/credits-management/) page to ensure sufficient credits
- **Verify test failures**: AI RCA requires actual test failures to analyze
- **Review configuration**: Confirm AI RCA is enabled in organization settings
- **Check permissions**: Ensure you have access to Analytics and Test Intelligence features

</details>

<details>
<summary><strong>Inaccurate RCA Results</strong></summary>

- **Refine special instructions**: Provide more specific context about your application
- **Update intelligent targeting**: Exclude irrelevant tests that might confuse the analysis
- **Review error categorization**: Ensure test failures are properly categorized
- **Refine custom RCA categories**: Update category descriptions to better match your failure patterns
- **Provide feedback**: Use any available feedback mechanisms to improve accuracy

</details>

<details>
<summary><strong>Missing RCA Data</strong></summary>

- **Check time range**: Ensure you're looking at the correct time period
- **Verify test execution**: Confirm tests actually failed during the specified period
- **Review dashboard filters**: Check if any filters are excluding relevant data
- **Contact support**: Reach out if RCA data appears to be missing

</details>

## Support

For any queries or issues related to AI Root Cause Analysis, please reach out to our [24/7 customer support](mailto:support@lambdatest.com). We're here to help you maximize the value of this powerful debugging tool!

---

**Related Documentation:**
- [Smart Tags - Test Intelligence](/docs/analytics-smart-tags-test-intelligence/)
- [Failure Categorization AI](/docs/analytics-test-failure-classification/)
- [Test Insights Overview](/docs/analytics-test-insights/)
