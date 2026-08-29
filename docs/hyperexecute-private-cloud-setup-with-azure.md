---
id: hyperexecute-private-cloud-setup-with-azure
title: HyperExecute Private Cloud Setup with Azure
toc_max_heading_level: 2
hide_title: false
sidebar_label: "Setup with Azure"
description: Discover HyperExecute Private Cloud Setup with Azure and understand how to inherit configurations for optimal performance. Explore the integration of hyperexecute inherit config.
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
url: https://www.testmuai.com/support/docs/hyperexecute-private-cloud-setup-with-azure/
site_name: TestMu AI
slug: hyperexecute-private-cloud-setup-with-azure/
canonical: https://www.testmuai.com/support/docs/hyperexecute-private-cloud-setup-with-azure/
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
          "name": "HyperExecute Concepts",
          "item": `${BRAND_URL}/support/docs/hyperexecute-private-cloud-setup-with-azure/`
        }]
      })
    }}
></script>
Follow the steps below to understand how to setup **HyperExecute Private Cloud** via the [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/lambdatestinc1584019832435.hyperexeonprem?tab=Overview).

## Prerequisites

1. **Resource Provider :** The following resource providers must be registered to install HyperExecute successfully. If you do not have them registered, follow the steps on this [page](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/resource-providers-and-types);  `Microsoft.Compute`, `Microsoft.OperationsManagement`  
        
2. **CPU Quotas :** In order to successfully deploy HyperExecute, we need to increase VM-family vCPU quotas. If you want to increase the quotas of your VM-family vCPU, follow the steps on this [page](https://learn.microsoft.com/en-us/azure/quotas/per-vm-quota-requests).

    - Standard DSv3 Family vCPUs. vCPU core count - 80
    - Standard FSv2 Family vCPUs. vCPU core count - 8 * number of parallel licenses.
        
3. **Dedicated Resource Group.**

4. A user with Admin Access who would be running the ARM script as certain resources like resource group, UAMI and related operations would require elevated access for creation.

## IP Ranges
By default the setup creates its own network with IP range `10.26.0.0/16`. if in case the customer needs customised environment than minimum 2 subnets are required to accommodate the resources.

- /24 subnet for test execution machines
- /22 subnet for Kubernetes

> **NOTE:** These requirements vary if the licences are increased more than 100.

## Steps to Setup HyperExecute Private Cloud

**Step 1:**  Sign in to your Azure Marketplace account. Alternatively, you can create a new account if you don’t already have one.

**Step 2:**  You can access the HyperExecute Private Cloud in two ways, by searching for it on Azure Marketplace, or by directly accessing the [HyperExecute’s Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/lambdatestinc1584019832435.hyperexeonprem?tab=Overview) listing and click on **Get It Now** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/cloud/azure/private-cloud-setup/1.png').default} alt="Image"  className="doc_img" />

- Fill your details in the pop-up, and select a plan between **HyperExecute Private Cloud - Monthly** or **HyperExecute Private Cloud - Annual**. Click on **Continue** to proceed.

<img loading="lazy" src={require('../assets/images/hyperexecute/cloud/azure/private-cloud-setup/2.png').default} alt="Image"  className="doc_img" />

**Step 3:** You will be redirected to HyperExecute Private Cloud listing page. Click on **Create** to proceed. 

<img loading="lazy" src={require('../assets/images/hyperexecute/cloud/azure/private-cloud-setup/3.png').default} alt="Image"  className="doc_img"/>

**Step 4:** You will be redirected to the **Basics** page where you have to configure your plan for **HyperExecute Private Cloud.** Configure the fields as per your requirements, and click on **Review + create** to proceed further.

- **Subscription**: The Azure subscription where the resource will be billed.
- **Resource Group**: Choose a unique name for this new [Resource group](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal#what-is-a-resource-group), or allot it to an older resource group of your choice.
- **Select Location**: Select the location where you want to deploy HyperExecute Private Cloud.
- **App Insight Retention Period**: Select the retention period for [application insights](https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview?tabs=net) (in this case HyperExecute Private Cloud) in days.
- **Email ID**: The Email ID associated with your Azure account.
- **Select Parallel Tests**: The number of parallel test executions that you need. You can also check HyperExecute’s pricing plans by clicking on the link below the field.
- **Managed Application Name**: Choose a unique name for your application.
- **Ingress Type**: Choose between **Private** or **Public** to determine if you want a private endpoint or a public endpoint.
- **Managed Resource Group**: This field will be automatically filled, and you do not need to change it.

<img loading="lazy" src={require('../assets/images/hyperexecute/cloud/azure/private-cloud-setup/4.png').default} alt="Image"  className="doc_img" />

**Step 5:** You can review all of your entries and then select the checkbox under **Co-Admin Access Permission**, indicating that you agree to the **Terms and Conditions** listed above. Click on **Create** and you will have successfully set up the HyperExecute Private Cloud.

<img loading="lazy" src={require('../assets/images/hyperexecute/cloud/azure/private-cloud-setup/5.png').default} alt="Image"  className="doc_img" />

## Running HyperExecute Private Cloud

Now that you have set up your HyperExecute Private Cloud application, you can access it by visiting `https://dashboard.hyperexecute.cloud`. However, before you do that, you need to ensure that you are connected to the same provisioned network where your HyperExecute application is deployed. 

To do this, you can either perform VNet peering or VNet linking, or run HyperExecute Private Cloud on a JumpHost virtual machine. You can go through the pages below to understand how to do that.

### [VNet Peering and VNet Links](/support/docs/hyperexecute-private-cloud-setup-with-azure/#vnet-peering-and-vnet-links)

### [Running HyperExecute on a JumpHost VM](/support/docs/hyperexecute-private-cloud-setup-with-azure/#private-cloud-on-jumphost)

***

> If you have more questions regarding HyperExecute Private Cloud, reach out to us at [hyperexecute-privatecloudsupport@testmuai.com](mailto:hyperexecute-privatecloudsupport@testmuai.com).

## Private Cloud on JumpHost

Congratulations on getting the HyperExecute Private setup deployed on your Azure Cloud! You can now trigger your test cases and view your dashboard from the JumpHost virtual machine. To understand how to do that, go through the page below.

### Running HyperExecute via a JumpHost VM

**Step 1:** Log in to your Microsoft Azure account and go to your [homepage](https://portal.azure.com/#home). 

<img loading="lazy" src={require('../assets/images/hyperexecute/cloud/azure/jumphost/1.png').default} alt="Image"  className="doc_img"/>

**Step 2:** Go to the **search bar** on the top of your screen and search for your managed applications. 

<img loading="lazy" src={require('../assets/images/hyperexecute/cloud/azure/jumphost/2.png').default} alt="Image"  className="doc_img"/>

**Step 3:** You will be redirected to your managed applications where you can see your installed  HyperExecute Private Cloud application. Select the HyperExecute application that you have installed recently.

<img loading="lazy" src={require('../assets/images/hyperexecute/cloud/azure/jumphost/3.png').default} alt="Image"  className="doc_img"/>

**Step 4:** You will be redirected to a page where you can see all of the resources that are a part of the selected **Managed Resource Group**. Search for a Virtual Machine called `hyex-jump` in this list and open it. 

<img loading="lazy" src={require('../assets/images/hyperexecute/cloud/azure/jumphost/4.png').default} alt="Image"  className="doc_img"/>

**Step 5:** You can now see the VM details and can use the shown public IP to connect to the virtual machine using the shared credentials over mail.

<img loading="lazy" src={require('../assets/images/hyperexecute/cloud/azure/jumphost/5.png').default} alt="Image"  className="doc_img"/>

To ensure that you have complete control over your HyperExecute application and your browsers, the virtual machine is completely customizable. You can make the modifications that you require and test all of your applications. Happy testing!

> If you have more questions regarding HyperExecute Private Cloud, reach out to us at [hyperexecute-privatecloudsupport@testmuai.com](mailto:hyperexecute-privatecloudsupport@testmuai.com).

## VNet Peering and VNet Links

Congratulations on getting the HyperExecute Private setup deployed on your Azure Cloud!

You need to provision a certain public machine inside the Vnet to access this private setup in your environment. This setup cannot access your private applications, URLs, and APIs directly due to the measures set in place for optimal security.

To solve this issue, we need to perform Vnet peering from the Vnet that is created inside the HyperExecute dedicated resource group to the Vnet that is already present in your account. This account must be the one which contains all of your endpoints, or your test execution account, as the test machines need to access those endpoints. 

You can enable Vnet peering and Vnet linking in your account by following the process documented below. This process uses an ARM template to provision the resources. 

### Steps to Deploy ARM Template

- Navigate to the search bar in your Azure account and search for **Deploy Custom Template**. Select the option which matches the searched name.

<img loading="lazy" src={require('../assets/images/hyperexecute/cloud/azure/vnet-peering/1.png').default} alt="Image"  className="doc_img"/>

***

- You will be able to see **Custom Deployment** page.

<img loading="lazy" src={require('../assets/images/hyperexecute/cloud/azure/vnet-peering/2.png').default} alt="Image"  className="doc_img"/>

***

- Click on **Build your own template in the editor** to go to the **Edit template** section.

<img loading="lazy" src={require('../assets/images/hyperexecute/cloud/azure/vnet-peering/3.png').default} alt="Image"  className="doc_img"/>

***

- Clear all the text present in the editor and paste the contents of the ARM script provided below.  
  
    **ARM Template**

```bash
  // ####################################################################################
  // ####                                                                            ####
  // ####              HyperExecute Private Cloud Vnet Peering ARM                   ####
  // ####                                                                            ####
  // ####################################################################################

{
    "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "parameters": {
      "existingHyperExecuteVirtualNetworkName": {
        "type": "String",
        "metadata": {
          "description": "Set the HyperExecute VNet name"      }
      },
      "existingHyperExecuteVirtualNetworkResourceGroupName": {
        "type": "String",
        "metadata": {
          "description": "Sets the HyperExecute VNet Resource group"      }
      },
      "existingRemoteVirtualNetworkName": {
        "type": "String",
        "metadata": {
          "description": "Set the remote VNet name"      }
      },
      "existingRemoteVirtualNetworkResourceGroupName": {
        "type": "String",
        "metadata": {
          "description": "Sets the remote VNet Resource group"      }
      },
      "blobPrivateDnsZoneName": {
        "type": "String",
        "defaultValue": "privatelink.blob.core.windows.net",
        "metadata": {
          "description": "Sets the Private DNS zone created for Storage account's privatelink"      }
      },
      "redisPrivateDnsZoneName": {
        "type": "String",
        "defaultValue": "privatelink.redis.cache.windows.net",
        "metadata": {
          "description": "SSets the Private DNS zone created for Redis privatelink"      }
      }
    },
    "resources": [
      {
        "type": "Microsoft.Resources/deployments",
        "resourceGroup": "[parameters('existingHyperExecuteVirtualNetworkResourceGroupName')]",
        "apiVersion": "2020-10-01",
        "name": "[guid(parameters('existingHyperExecuteVirtualNetworkName'), parameters('existingHyperExecuteVirtualNetworkResourceGroupName'), 'peering')]",
        "properties": {
          "mode": "Incremental",
          "template": {
            "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
            "contentVersion": "1.0.0.0",
            "parameters": {},
            "resources": [
              {
                "type": "Microsoft.Network/virtualNetworks/virtualNetworkPeerings",
                "apiVersion": "2021-02-01",
                "name": "[format('{0}/local-to-remote-vnet', parameters('existingHyperExecuteVirtualNetworkName'))]",
                "properties": {
                  "allowVirtualNetworkAccess": true,
                  "allowForwardedTraffic": false,
                  "allowGatewayTransit": false,
                  "useRemoteGateways": false,
                  "remoteVirtualNetwork": {
                    "id": "[resourceId(parameters('existingRemoteVirtualNetworkResourceGroupName'), 'Microsoft.Network/virtualNetworks', parameters('existingRemoteVirtualNetworkName'))]"                }
                }
              },
              {
                "type": "Microsoft.Network/privateDnsZones/virtualNetworkLinks",
                "apiVersion": "2020-06-01",
                "name": "[format('{0}/{1}', parameters('blobPrivateDnsZoneName'), format('{0}-link', parameters('existingRemoteVirtualNetworkName')))]",
                "location": "global",
                "properties": {
                  "registrationEnabled": false,
                  "virtualNetwork": {
                    "id": "[resourceId(parameters('existingRemoteVirtualNetworkResourceGroupName'), 'Microsoft.Network/virtualNetworks', parameters('existingRemoteVirtualNetworkName'))]"
                  }
                }
              },
              {
                "type": "Microsoft.Network/privateDnsZones/virtualNetworkLinks",
                "apiVersion": "2020-06-01",
                "name": "[format('{0}/{1}', parameters('redisPrivateDnsZoneName'), format('{0}-link', parameters('existingRemoteVirtualNetworkName')))]",
                "location": "global",
                "properties": {
                  "registrationEnabled": false,
                  "virtualNetwork": {
                    "id": "[resourceId(parameters('existingRemoteVirtualNetworkResourceGroupName'), 'Microsoft.Network/virtualNetworks', parameters('existingRemoteVirtualNetworkName'))]"
                  }
                }
              }
            ]
          }
        }
      },
      {
        "type": "Microsoft.Resources/deployments",
        "resourceGroup": "[parameters('existingRemoteVirtualNetworkResourceGroupName')]",
        "apiVersion": "2020-10-01",
        "name": "[guid(parameters('existingRemoteVirtualNetworkName'), parameters('existingRemoteVirtualNetworkResourceGroupName'), 'peering')]",
        "properties": {
          "mode": "Incremental",
          "template": {
            "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
            "contentVersion": "1.0.0.0",
            "parameters": {},
            "resources": [
              {
                "type": "Microsoft.Network/virtualNetworks/virtualNetworkPeerings",
                "apiVersion": "2021-02-01",
                "name": "[format('{0}/remote-to-local-vnet', parameters('existingRemoteVirtualNetworkName'))]",
                "properties": {
                  "allowVirtualNetworkAccess": true,
                  "allowForwardedTraffic": false,
                  "allowGatewayTransit": false,
                  "useRemoteGateways": false,
                  "remoteVirtualNetwork": {
                    "id": "[resourceId(parameters('existingHyperExecuteVirtualNetworkResourceGroupName'), 'Microsoft.Network/virtualNetworks', parameters('existingHyperExecuteVirtualNetworkName'))]"                }
                }
              }
            ]
          }
        }
      }
    ]
  }

```
<img loading="lazy" src={require('../assets/images/hyperexecute/cloud/azure/vnet-peering/4.png').default} alt="Image"  className="doc_img"/>

***


- Click on **Save** and fill out the parameters for the **Custom Deployment** template.  
  
    **Parameters Used**

    -   **Subscription :** Name of the subscription where you have installed the HyperExecute.
        
    -   **Resource group :** Resource group name where HyperExecute is provisioned.
        
    -   **Region :** Region where you have installed the application.
        
    -   **Existing Hyper Execute Virtual Network Name :** Virtual Network name of the Vnet created in HyperExecute resource group
        
    -   **Existing Hyper Execute Virtual Network Resource Group Name :** HyperExecute Resource group name
        
    -   **Existing Remote Virtual Network Name :** Name of the Virtual Network where you want to establish Peering and Vnet Link.
        
    -   **Existing Remote Virtual Network Resource Group Name :** Name of the resource group where you have the Virtual network which needs to be peered.
        
    -   **Blob Private Dns Zone Name :** Private DNS zone name for the Storage Account Virtual Network Link. Please do not change this unless and until it is required.
        
    -   **Redis Private Dns Zone Name :** Private DNS zone name for the Redis Virtual Network Link. Please do not change this unless and until it is required.

<img loading="lazy" src={require('../assets/images/hyperexecute/cloud/azure/vnet-peering/5.png').default} alt="Image"  className="doc_img"/>

***

<img loading="lazy" src={require('../assets/images/hyperexecute/cloud/azure/vnet-peering/6.png').default} alt="Image"  className="doc_img"/>

***

- Click on the **Review + create** button present at the bottom of the page to navigate to the page shown below.

<img loading="lazy" src={require('../assets/images/hyperexecute/cloud/azure/vnet-peering/7.png').default} alt="Image"  className="doc_img"/>

***

-   Verify all the details and click on **Create**. Your deployment will start and you will get the status of the page after the deployment is successful.
    

If you have any questions about this process, you can reach out to the HyperExecute team and we will get back to you as soon as possible.  
  

**Note :**

-   In case of any issues in the above setup please reach out to [hyperexecute-privatecloudsupport@testmuai.com](mailto:hyperexecute-privatecloudsupport@testmuai.com) and we will get in touch with you.
    
-   Please make sure that you have the contributor access for your Vnet and resource group before the setup.
    
-   Please make sure that spaces are not present in any variable values.

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
        HyperExecute Private Cloud Setup with Azure
      </span>
    </li>
  </ul>
</nav>
