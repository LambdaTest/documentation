---
id: hyperexecute-email-reports
title: Receive the Job Reports as an Email 
hide_title: true
sidebar_label: Receive the Job Reports as an Email 
description: Streamline testing with HyperExecute Email Reports! Learn how to effortlessly automate test runs and receive detailed reports. Boost efficiency today.
keywords:
  - LambdaTest Hyperexecute
  - LambdaTest Hyperexecute help
  - LambdaTest Hyperexecute documentation
url: https://www.lambdatest.com/support/docs/hyperexecute-email-reports/
site_name: LambdaTest
slug: hyperexecute-email-reports/
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
          "name": "HyperExecute Concepts",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-email-reports/"
        }]
      })
    }}
></script>

# Receive the Job Report as an Email 

HyperExecute now offers you the option of receiving your job reports on the email IDs that you want. This will shorten the process of going on the HyperExecute UI and downloading your job report, and help you access your reports directly. 

## How to receive your Job Report as an Email?

### Prerequisites

-   The `report` flag is set to `true` in the HyperExecute YAML.

-   The `location`, `type` and `frameworkName` fields in the `partialReports` flag are configured correctly.
    
-   Your job should not time out or be aborted.
    

### YAML Configuration

To receive the reports on your email IDs, you need to configure the `partialReports` flag in the HyperExecute YAML.

-   Add the `email` flag with a `to` tag to select the email IDs where the report should be sent. The example added below shows you how to add your email IDs.

```bash
report: true
partialReports:
  frameworkName: testng
  location: target/surefire-reports/html
  type: html
  email:
    to: 
      - <your_email_id@example.com>
      - <another_email_id@example.com>
```
You can also use the `currentUser` and `org` tag to send the reports to the email ID of your choice.

-   **currentUser**: This tag will allow you to send the report to the email ID associated with your LambdaTest account.

```bash
  email:
    to: 
      - currentUser
```

-   **org**: This tag will allow you to send the report to all the email IDs associated with your organization on LambdaTest.

```bash
  email:
    to:
      - org 
```

### Correct format of entering the Email IDs

The Email IDs that you enter must be valid. You can enter your email IDs in the formats mentioned below.

```bash
- John Doe <johndoe@example.com>
- John <johndoe@example.com>
- johndoe@example.com
```

However, if your email IDs are added in an unsupported format, the feature will not work. A few examples of unsupported email ID formats are added below.

```bash
- John Doe johndoe@example.com>
- John <<johndoe@example.com>
- John johndoe@example.com
- John Doe
```

Now that you have added your email IDs successfully, you can access your job reports. Download the report from the email, and get all the information that you need. Alternatively, you can also open the clickable link in the email and view the report on your browser.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        Downloading Job Reports via Email ID
      </span>
    </li>
  </ul>
</nav>
