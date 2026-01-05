---
id: hyperexecute-vnet-peering-for-private-cloud
title: VNet Peering and VNet Links
hide_title: true
sidebar_label: VNet Peering and VNet Links
description: Secure your HyperExecute Private setup with VNet Peering & Links! Our guide helps provision resources, deploy ARM templates, and connect VNets for optimal testing.
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
url: https://www.testmu.ai/support/docs/hyperexecute-vnet-peering-for-private-cloud
site_name: LambdaTest
slug: hyperexecute-vnet-peering-for-private-cloud
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
          "item": `${BRAND_URL}/support/docs/hyperexecute-vnet-peering-for-private-cloud/`
        }]
      })
    }}
></script>

# VNet Peering and VNet Links

Congratulations on getting the HyperExecute Private setup deployed on your Azure Cloud!

You need to provision a certain public machine inside the Vnet to access this private setup in your environment. This setup cannot access your private applications, URLs, and APIs directly due to the measures set in place for optimal security.

To solve this issue, we need to perform Vnet peering from the Vnet that is created inside the HyperExecute dedicated resource group to the Vnet that is already present in your account. This account must be the one which contains all of your endpoints, or your test execution account, as the test machines need to access those endpoints. 

You can enable Vnet peering and Vnet linking in your account by following the process documented below. This process uses an ARM template to provision the resources. 

## Steps to Deploy ARM Template

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

-   In case of any issues in the above setup please reach out to [hyperexecute-privatecloudsupport@lambdatest.com](mailto:hyperexecute-privatecloudsupport@lambdatest.com) and we will get in touch with you.
    
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
        VNet Peering and VNet Links
      </span>
    </li>
  </ul>
</nav>