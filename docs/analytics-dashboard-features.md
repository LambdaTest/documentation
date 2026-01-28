---
id: analytics-dashboard-features
title: Analytics Dashboard Features to manage your data
sidebar_label: Dashboard Features
description: Analytics - Dashboard Features for managing your data and setting up the dashboard
keywords:
  - analytics
url: https://www.testmuai.com/support/docs/analytics-dashboard-features/
site_name: LambdaTest
slug: analytics-dashboard-features/
canonical: https://www.testmuai.com/support/docs/analytics-dashboard-features/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Linear App Integration",
          "item": `${BRAND_URL}/support/docs/analytics-dashboard-features/`
        }]
      })
    }}
></script>

---

## Export Dashboard as PDF

<img loading="lazy" src={require('../assets/images/analytics/Download-PDF.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

#### Summary of the feature
This feature allows users to export their dashboard as a PDF file. This is useful for sharing the analytics data with team members, clients, or stakeholders who may not have access to the analytics platform.

#### Steps to use
1. Navigate to the dashboard you want to export.
2. Click on the "Export" icon located in the upper-right corner of the dashboard.

#### Usecases with examples
1. **Team meetings:** Share dashboard insights during team meetings by exporting the dashboard as a PDF and including it in the meeting agenda.
2. **Client presentations:** Export the dashboard as a PDF to include in a presentation or report for clients, showcasing the success of a marketing campaign or product launch.
3. **Internal reporting:** Use the PDF export feature for internal reporting purposes, such as sharing key performance indicators (KPIs) with management.
4. **Documentation:** Archive dashboard snapshots in a project's documentation for historical reference.
5. **Offline analysis:** Export dashboards as PDFs for team members who may not have access to the analytics platform or for instances where internet access is limited.

## Expiry Settings for Dashboard Share Link

<img loading="lazy" src={require('../assets/images/analytics/Share-Link.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

#### Summary of the feature
This feature allows users to set an expiration date for the share link generated for the dashboard. This ensures that access to the dashboard is restricted after a certain time period, enhancing security and control over the shared data.

#### Steps to use
1. Navigate to the dashboard you want to share.
2. Click on the "Settings" gear icon located in the upper-right corner of the dashboard.
3. Select the desired expiration date from the available dates in the settings.
4. Click "Generate Link" to create the share link with the specified expiry settings.

<img loading="lazy" src={require('../assets/images/analytics/Link-Expiry.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>


#### Usecases with examples
1. **Limited-time client access:** Provide clients with temporary access to a dashboard during a campaign or project, ensuring that access is revoked once the project is completed.
2. **Time-sensitive data sharing:** Share dashboards containing time-sensitive information with team members or stakeholders, ensuring that the data is only accessible for a limited period.
3. **Promotional offers:** Share a dashboard with promotional data for a limited time, encouraging users to take advantage of the offer before the link expires.
4. **Security compliance:** Set expiration dates for shared dashboard links to meet internal or regulatory security requirements.
5. **Iterative reporting:** Share links to dashboards that need regular updates, ensuring that users always access the most recent version by setting previous versions to expire.

#### Ability to set the Dashboard Password 
For the users who are external to the organization, we have added the ability to set the password for the dashboard. This will ensure that only the intended users can access the dashboard.

#### Steps to set the password for the dashboard
1. Navigate to the dashboard you want to share.
2. Click on the "Settings" gear icon located in the upper-right corner of the dashboard.
3. Select the checkbox "Setup the custom password" and enter the password.
4. Save the settings.
5. Now, when you share the dashboard with the new share link, the user will be prompted to enter the password to access the dashboard.

<img loading="lazy" src={require('../assets/images/analytics/Set-Password.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/analytics/Password-Protected.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

:::note
The above password is only for those users who are external to the organization accessing through the share link of the dashboard. For the internal users, the dashboard will be accessible without any password.
:::


## Dashboard Visibility Settings

<img loading="lazy" src={require('../assets/images/analytics/Private-Dashboard.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

#### Summary of the feature
This feature allows users to change the visibility of a dashboard from being accessible to all organization users to being private and only accessible to admin user and creator of the dashboard. This provides better control over who can view and interact with the dashboard.

#### Steps to use
1. Navigate to the dashboard you want to change the visibility of.
2. Click on the "Settings" button located in the upper-right corner of the dashboard.
3. Toggle the visibility of the dashboard between "Public (All User)" and "Private (Creator Only)."

:::note
An admin user is the user who has created the dashboard. Only the creator is allowed to access the dashboard settings and change the visibility of the dashboard.
:::

#### Usecases with examples
1. **Sensitive data protection:** Restrict access to dashboards containing sensitive or confidential information by setting visibility to "Private (Creator Only)."
2. **Role-based access control:** Limit dashboard access


## Admin Access for Dashboards

### Summary of the feature
This feature allows the admin user to access all the dashboards created by the organization users. The admin user can view, edit, and manage the dashboards created by other users within the organization.



<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
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
      Create Your First Dashboard 
      </span>
    </li>
  </ul>
</nav>