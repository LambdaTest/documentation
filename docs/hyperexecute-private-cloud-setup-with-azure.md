---
id: hyperexecute-private-cloud-setup-with-azure
title: HyperExecute Private Cloud Setup with Azure
hide_title: true
sidebar_label: HyperExecute Private Cloud Setup with Azure
description: Leverage the Power of HyperExecute Private Cloud Setup with Azure, as You Dive into Configuration Inheritance for Optimal Performance Enhancement and Seamless Workflow Integration.
keywords:
  - LambdaTest Hyperexecute
  - LambdaTest Hyperexecute help
  - LambdaTest Hyperexecute documentation
url: https://www.lambdatest.com/support/docs/hyperexecute-private-cloud-setup-with-azure/
site_name: LambdaTest
slug: hyperexecute-private-cloud-setup-with-azure/
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
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-private-cloud-setup-with-azure/"
        }]
      })
    }}
></script>

# HyperExecute Private Cloud Setup with Azure

HyperExecute Private Cloud is now available on the [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/lambdatestinc1584019832435.hyperexeonprem?tab=Overview). 

Follow the steps below to understand how to setup **HyperExecute Private Cloud** via the Azure Marketplace.

## Pre-requisites

1.  **Resource Provider**  
    The following resource providers must be registered to install HyperExecute successfully. If you do not have them registered, follow the steps on this [page](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/resource-providers-and-types).
    
    -  Microsoft.Compute
        
    -  Microsoft.OperationsManagement  
          
        
2.  **'EnablePodIdentityPreview` Preview feature**
    
    -   We use AAD Pod Identity feature to enable Kubernetes applications to access cloud resources securely with Azure Active Directory.
        
    -   To use this feature(preview), we need to register the `EnablePodIdentityPreview` feature. If you haven’t registered this feature, follow the steps on this [page](https://learn.microsoft.com/en-us/azure/aks/use-azure-ad-pod-identity).  
          
        
3.  **CPU Quotas**  
    In order to successfully deploy HyperExecute, we need to increase VM-family vCPU quotas. If you want to increase the quotas of your VM-family vCPU, follow the steps on this [page](https://learn.microsoft.com/en-us/azure/quotas/per-vm-quota-requests).
    
    - Standard DSv3 Family vCPUs. vCPU core count - 80
        
    - Standard FSv2 Family vCPUs. vCPU core count - 8 * number of parallel licenses.
        
4. **Dedicated Resource Group.**

5. A user with Admin Access who would be running the ARM script as certain resources like resource group, UAMI and related operations would require elevated access for creation.

6. Enablements on Preview features of **Pod Identity**

## IP Ranges
By default the setup creates its own network with IP range `10.26.0.0/16`. if in case the customer needs customised environment than minimum 2 subnets are required to accomodate the resources.

- /24 subnet for test execution machines
- /22 subnet for Kubernetes

> **NOTE:** These requirements vary if the licences are increased more than 100.

## Steps to Setup HyperExecute Private Cloud

**Step 1:**  Sign in to your Azure Marketplace account. Alternatively, you can create a new account if you don’t already have one.

**Step 2:**  You can access the HyperExecute Private Cloud in two ways, by searching for it on Azure Marketplace, or by directly accessing the [HyperExecute’s Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/lambdatestinc1584019832435.hyperexeonprem?exp=ubp8&tab=Overview) listing.  

- Go on [HyperExecute’s Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/lambdatestinc1584019832435.hyperexeonprem?exp=ubp8&tab=Overview) listing, and click on **Get It Now**.

<img loading="lazy" src={require('../assets/images/hyperexecute-private-cloud-setup-with-azure/1.png').default} alt="Image"  className="doc_img" width="1232" height="534" style={{ width:'700px', height:'auto'}}/>

- Fill your details in the pop-up, and select a plan between **HyperExecute Private Cloud - Monthly** or **HyperExecute Private Cloud - Annual**. Click on **Continue** to proceed.

<img loading="lazy" src={require('../assets/images/hyperexecute-private-cloud-setup-with-azure/2.png').default} alt="Image"  className="doc_img" width="1232" height="534" style={{ width:'700px', height:'auto'}}/>

- Alternatively, you can also search for HyperExecute from the search bar on Azure Marketplace’s homepage. 

<img loading="lazy" src={require('../assets/images/hyperexecute-private-cloud-setup-with-azure/3.png').default} alt="Image"  className="doc_img" width="1232" height="534" style={{ width:'700px', height:'auto'}}/>

- Click on the **Get It Now** button on the **HyperExecute Private Cloud** listing.

<img loading="lazy" src={require('../assets/images/hyperexecute-private-cloud-setup-with-azure/4.png').default} alt="Image"  className="doc_img" width="1232" height="534" style={{ width:'700px', height:'auto'}}/>

- Select a plan between **HyperExecute Private Cloud - Monthly** or **HyperExecute Private Cloud - Annual**. Click on **Continue** to proceed.

<img loading="lazy" src={require('../assets/images/hyperexecute-private-cloud-setup-with-azure/5.png').default} alt="Image"  className="doc_img" width="1232" height="534" style={{ width:'700px', height:'auto'}}/>

**Step 3:** You will be redirected to HyperExecute Private Cloud listing page. Click on **Create** to proceed. 

<img loading="lazy" src={require('../assets/images/hyperexecute-private-cloud-setup-with-azure/6.png').default} alt="Image"  className="doc_img" width="1232" height="534" style={{ width:'1000px', height:'auto'}}/>

**Step 4:** You will be redirected to the **Basics** page where you have to configure your plan for **HyperExecute Private Cloud.**

<img loading="lazy" src={require('../assets/images/hyperexecute-private-cloud-setup-with-azure/7.png').default} alt="Image"  className="doc_img" width="1232" height="534" style={{ width:'1000px', height:'auto'}}/>

**Step 5:** Configure the fields as per your requirements, and click on **Review + create** to proceed further.

<img loading="lazy" src={require('../assets/images/hyperexecute-private-cloud-setup-with-azure/8.png').default} alt="Image"  className="doc_img" width="1232" height="534" style={{ width:'1000px', height:'auto'}}/>

- **Subscription**: The Azure subscription where the resource will be billed.
    
- **Resource Group**: Choose a unique name for this new [Resource group](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal#what-is-a-resource-group), or allot it to an older resource group of your choice.
    
- **Select Location**: Select the location where you want to deploy HyperExecute Private Cloud.
    
- **App Insight Retention Period**: Select the retention period for [application insights](https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview?tabs=net) (in this case HyperExecute Private Cloud) in days.
    
- **Email ID**: The Email ID associated with your Azure account.
    
- **Select Parallel Tests**: The number of parallel test executions that you need. You can also check HyperExecute’s pricing plans by clicking on the link below the field.
    
- **Managed Application Name**: Choose a unique name for your application.
    
- **Ingress Type**: Choose between **Private** or **Public** to determine if you want a private endpoint or a public endpoint.
    
- **Managed Resource Group**: This field will be automatically filled, and you do not need to change it.

**Step 6:** You can review all of your entries and then select the checkbox under **Co-Admin Access Permission**, indicating that you agree to the **Terms and Conditions** listed above.

<img loading="lazy" src={require('../assets/images/hyperexecute-private-cloud-setup-with-azure/9.png').default} alt="Image"  className="doc_img" width="1232" height="534" style={{ width:'1000px', height:'auto'}}/>

**Step 7:** Click on **Create** and you will have successfully set up the HyperExecute Private Cloud.

## Running HyperExecute Private Cloud

Now that you have set up your HyperExecute Private Cloud application, you can access it by visiting `https://dashboard.hyperexecute.cloud`. However, before you do that, you need to ensure that you are connected to the same provisioned network where your HyperExecute application is deployed. 

To do this, you can either perform VNet peering or VNet linking, or run HyperExecute Private Cloud on a JumpHost virtual machine. You can go through the pages below to understand how to do that.

### [VNet Peering and VNet Links](/support/docs/hyperexecute-vnet-peering-for-private-cloud/)

### [Running HyperExecute on a JumpHost VM](/support/docs/hyperexecute-private-cloud-on-jumphost/)

***

> If you have more questions regarding HyperExecute Private Cloud, reach out to us at [hyperexecute-privatecloudsupport@lambdatest.com](mailto:hyperexecute-privatecloudsupport@lambdatest.com).

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
        HyperExecute Private Cloud Setup with Azure
      </span>
    </li>
  </ul>
</nav>