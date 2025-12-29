---
id: he-security-faqs
title: Security FAQs
hide_title: true
sidebar_label: Security FAQs
description: Explore answers to all your HyperExecute Security-related queries with our comprehensive FAQs, designed to clarify all your concerns!
keywords:
  - TestMu AI HyperExecute
  - TestMu AI HyperExecute help
  - TestMu AI HyperExecute documentation
  - FAQs
url: https://www.lambdatest.com/support/docs/hyperexecute-security-faqs/
site_name: LambdaTest
slug: hyperexecute-security-faqs/
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
          "name": "Integrations",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-cli-faqs/"
        }]
      })
    }}
></script>

# HyperExecute Security FAQs

***

#### 1. **How secure is HyperExecute?**

  HyperExecute is built with security at its core and provides industry standard security on the entire infrastructure. HyperExecute provides fresh virtual machines every time a new job is triggered and deletes the infrastructure after the test execution of the job is completed. Dozens of microservices ensure that test scripts are deleted after the retention period and uniquely encrypted during their retention period. HyperExecute uses a powerful vault to store client side secrets for the users. Enterprise version enables users to add their own security policies over the HyperExecute infrastructure.

***

#### 2. **Does HyperExecute provide the ability to define secrets?**

  Yes, HyperExecute provides a vault service to securely store client side secrets instead of hardcoding them in the yaml or test script files. In enterprise versions, organizations can pick the vault of their choice.

***

#### 3. **What’s the retention period of logs on HyperExecute?**

  By default, HyperExecute has a retention period of 60 days where it keeps records and test execution logs. After the retention period, the logs and records are deleted permanently. Enterprise version allows a custom retention period to be defined.

***

#### 4. **How do I download private dependencies on HyperExecute?**

  HyperExecute provides multiple methods to connect to private artifactories and private package modules using automatic tunnel, dedicated NAT and using pre-steps to use VPN. Users usually add their private package management keys in the HyperExecute vault to fetch private repositories.

***

#### 5. Is the VM allocated secure?
We are SOC2 compliant, all the VMs are highly secure and its compliant with the CIS benchmark 

***

#### 6. What happens to VM after the Test?
All the VMs get deleted, and every time you run the test, a new machine is allocated. We completely delete it.

***

#### 6. Can we do SSH to machines?
No Machines are private in nature and cannot be accessed by the Internet directly.

***

#### 7. What happens to secrets present in test code?
All the logs are encrypted and stored in a secure manner. But we always prefer customers to use Vault to pass the credentials.
 
***

#### 8. Is the product GDPR compliant?
Yes, we follow GDPR guidelines.

***
 
#### 9. What is the security level?
We follow strict security levels at each step. We are SOC 2 compliant.

***
 
#### 10. What is the data retention time period? Can we ask to delete it anytime?
We store the data for a max of 60 days. Yes, you can ask the LambdaTest team fore the deletion of your data via email.
 
***

#### 11. How to update the HyperExecute Binary?
HyperExecute Binary is a secure binary, this can be updated via a link, Notification regarding the same will be shared.

***

#### 12. Can this be set up completely on the Premises?
Yes, HyperExecute can be set up completely on the Premises.

***

#### 13. What about the SAS token?
SAS token is generated only for 60 min in use and is different every time. This token is time-based authenticated and can only be used once.


>If you have more questions, then just give us a <span className="doc__lt" onClick={() => window.openLTChatWidget()}>shout</span> and we will answer them for you.

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
       HyperExecute Security FAQs
      </span>
    </li>
  </ul>
</nav>