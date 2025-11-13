---
id: smartui-with-netlify
title: Netlify Integration With LambdaTest
hide_title: false
sidebar_label: Netlify
description: Simplify DevOps! Run blazing-fast Cypress tests on LambdaTest directly from your Netlify builds.
keywords:
  - lambdatest integrations
  - lambdatest netlify integration
  - integrate netlify with lambdatest
  - netlify integration with lambdatest
  - bug tracking tools
  - project management tools
url: https://www.lambdatest.com/support/docs/smartui-with-netlify/
site_name: LambdaTest
slug: smartui-with-netlify/

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

<script type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Netlify Integration",
          "item": "https://www.lambdatest.com/support/docs/smartui-with-netlify/"
        }]
      })
    }}
></script>
Netlify is a cloud computing company that offers hosting and serverless backend services for web applications and static websites. It allows developers to deploy their websites and applications quickly and easily, with features such as continuous deployment, serverless functions, and global CDN.

This document will show you how to integrate Netlify Pipeline with SmartUI.

## Prerequisite

1. A LambdaTest account. If you don't have an account, [sign up for free](https://accounts.lambdatest.com/dashboard).

2. You need to have a site deployed in your Netlify account.

## Steps to Setup the Netlify Plugin

### Step 1: Configure your LambdaTest Integration on Netlify Dashboard

- Go to your Netlify Dashboard.
- Click on the Integrations tab, search for **LambdaTest** and click on the **Enable** button.

<img loading="lazy" src={require('../assets/images/netlify-integration/n1.png').default} alt="Image" className='doc_img'/>

- You need to provide your configuration details
    - Enter your **Username** and **Access Key** from the **LambdaTest Dashboard**.
    - Enter your **Smart-UI Project Name**

:::info
For the Smart-UI Project Name, you can enter any project name. Even if you have not set up any projects in the Smart UI Dashboard.

You can also enter your already-existing smart-UI project name.
:::

- Click on the **Save** button

<img loading="lazy" src={require('../assets/images/netlify-integration/n2.png').default} alt="Image" className='doc_img'/>

### Step 2: Deploy the Site for which you want to compare the results

- Go to the **Deploys** section, click on **Deploy site** button and deploy your project. 

<img loading="lazy" src={require('../assets/images/netlify-integration/n3.png').default} alt="Image" className='doc_img'/>

- This deployment is before any changes you have made and will be your **Baseline** image.
- Now you need to make the required changes in your project and push the changes.
- Visit the Netlify Dashboard again, and re-deploy your project.

Your changes will be triggered and deployed.

<img loading="lazy" src={require('../assets/images/netlify-integration/n4.png').default} alt="Image" className='doc_img'/>

### Step 4: Compare the Changes Smart-UI Dashboard

- Go to your Smart-UI Dashbard. You will notice there is already a project with the same name you entered while configuring in **Step 1**

<img loading="lazy" src={require('../assets/images/netlify-integration/n5.png').default} alt="Image" className='doc_img'/>

- Go on that project. Click on the latest build. You can now compare the changes done to your project with-respect-to the provious build.

<img loading="lazy" src={require('../assets/images/netlify-integration/n6.png').default} alt="Image" className='doc_img'/>

## Best Practices

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='project-naming' label='Project Naming' default>

### Project Naming

- Use descriptive, consistent names for SmartUI projects
- Match project names with your Netlify site names for easy identification
- Avoid special characters that might cause issues
- Use consistent naming conventions across deployments

</TabItem>
<TabItem value='baseline-management' label='Baseline Management'>

### Baseline Management

- Establish baseline from stable deployment
- Review baseline before using for comparisons
- Update baseline when intentional changes are made
- Document baseline deployment for reference

</TabItem>
<TabItem value='deployment-strategy' label='Deployment Strategy'>

### Deployment Strategy

- Deploy baseline before making changes
- Test changes in staging before production
- Use meaningful deployment messages
- Tag important deployments

</TabItem>
<TabItem value='integration-configuration' label='Integration Configuration'>

### Integration Configuration

- Keep LambdaTest credentials secure
- Use Netlify's environment variables for credentials
- Rotate credentials regularly
- Use different projects for different environments

</TabItem>
<TabItem value='comparison-workflow' label='Comparison Workflow'>

### Comparison Workflow

- Review visual differences carefully
- Approve intentional changes promptly
- Document reasons for baseline updates
- Use SmartUI dashboard for detailed analysis

</TabItem>
<TabItem value='comparison-workflow-1' label='Comparison Workflow'>

### Comparison Workflow

- Review visual differences carefully
- Approve intentional changes promptly
- Document reasons for baseline updates
- Use SmartUI dashboard for detailed analysis

</TabItem>
</Tabs>

## Troubleshooting

<Tabs className='docs__val' groupId='troubleshooting'>
<TabItem value='screenshots-not-appearing-in-dashboard' label='Screenshots Not Appearing in Dashboard' default>

### Issue: Screenshots Not Appearing in Dashboard

**Symptoms**: Deployments complete but no screenshots appear in SmartUI dashboard

**Possible Causes**:
- Incorrect project name in Netlify integration
- LambdaTest credentials incorrect
- Integration not enabled
- Network connectivity issues

**Solutions**:
1. Verify project name matches exactly (case-sensitive) in Netlify integration settings

2. Check LambdaTest credentials:
   - Go to Netlify Dashboard → Integrations → LambdaTest
   - Verify username and access key are correct
   - Re-enter credentials if needed

3. Ensure integration is enabled:
   - Check integration status in Netlify dashboard
   - Re-enable if disabled

4. Check network connectivity to LambdaTest servers

5. Review Netlify deployment logs for errors

</TabItem>
<TabItem value='project-not-found-error' label='Project Not Found Error'>

### Issue: Project Not Found" Error

**Symptoms**: Error indicating SmartUI project cannot be found

**Possible Causes**:
- Project name typo in Netlify integration
- Project doesn't exist in SmartUI dashboard
- Wrong account credentials

**Solutions**:
1. Verify project exists in SmartUI dashboard:
   - Log into [SmartUI Dashboard](https://smartui.lambdatest.com/)
   - Check if project with specified name exists
   - Create project if it doesn't exist

2. Copy project name directly from SmartUI dashboard

3. Update project name in Netlify integration settings

4. Check credentials match the account with the project

</TabItem>
<TabItem value='integration-not-triggering' label='Integration Not Triggering'>

### Issue: Integration Not Triggering

**Symptoms**: Deployments don't trigger SmartUI comparisons

**Possible Causes**:
- Integration not properly configured
- Integration disabled
- Deployment not triggering integration
- Configuration errors

**Solutions**:
1. Verify integration is enabled:
   - Go to Netlify Dashboard → Integrations → LambdaTest
   - Ensure integration shows as Enabled"

2. Check integration configuration:
   - Verify all required fields are filled
   - Check for any error messages
   - Re-save configuration if needed

3. Test with a new deployment:
   - Make a small change to trigger deployment
   - Check if integration triggers

4. Review Netlify deployment logs for integration errors

</TabItem>
<TabItem value='baseline-not-set-correctly' label='Baseline Not Set Correctly'>

### Issue: Baseline Not Set Correctly

**Symptoms**: Comparisons show unexpected differences or baseline issues

**Possible Causes**:
- Baseline deployment not completed
- Wrong deployment used as baseline
- Baseline not approved
- Deployment state issues

**Solutions**:
1. Verify baseline deployment:
   - Check SmartUI dashboard for baseline build
   - Ensure baseline was from stable deployment
   - Verify baseline shows as approved

2. Set new baseline if needed:
   - Use stable deployment as baseline
   - Approve baseline in SmartUI dashboard

3. Review deployment history:
   - Check which deployment was used as baseline
   - Verify deployment was successful

</TabItem>
<TabItem value='comparison-results-unexpected' label='Comparison Results Unexpected'>

### Issue: Comparison Results Unexpected

**Symptoms**: Visual differences don't match expected changes

**Possible Causes**:
- Dynamic content causing false positives
- Deployment timing issues
- Content not fully loaded
- Configuration issues

**Solutions**:
1. Review comparison in SmartUI dashboard:
   - Check diff view for actual differences
   - Verify differences are expected

2. Handle dynamic content:
   - See [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data)
   - Configure ignoreDOM/selectDOM if needed

3. Check deployment timing:
   - Ensure deployment completed fully
   - Wait for all assets to load

4. Review project settings:
   - Check pixel threshold settings
   - Adjust comparison settings if needed

### Getting Help

If you encounter issues not covered here:

- Review the [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) for detailed solutions
- Check [SmartUI Configuration Options](/support/docs/smartui-sdk-config-options) documentation
- See [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data) for dynamic content issues
- Visit [LambdaTest Support](https://www.lambdatest.com/support) for additional resources
- Contact support at support@lambdatest.com or use [24/7 Chat Support](https://www.lambdatest.com/support)

</TabItem>
</Tabs>

## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide)
- [Project Settings](/support/docs/smartui-project-settings) - Configure comparison settings
- [Baseline Management](/support/docs/smartui-baseline-management) - Learn how to manage baselines
- [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data) - Handle dynamic content
- [Running Your First Project](/support/docs/smartui-running-your-first-project) - Get started with SmartUI