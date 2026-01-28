---
id: lambdatest-sso-oidc
title: TestMu AI SSO Integration Using OIDC
hide_title: true
sidebar_label: OIDC Integration
description: Integrate your identity provider with your TestMu AI organization through OIDC (OpenID Connect) for seamless single sign-on authentication.
keywords:
  - sso
  - testmu ai sso
  - oidc
  - openid connect
  - identity provider
  - managed sso
  - azure ad
  - google workspace
  - okta
url: https://www.testmuai.com/support/docs/testmu-sso-oidc/
site_name: LambdaTest
slug: testmu-sso-oidc/
canonical: https://www.testmuai.com/support/docs/testmu-sso-oidc/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "OIDC Integration",
          "item": `${BRAND_URL}/support/docs/lambdatest-sso-oidc/`
        }]
      })
    }}
></script>

# <BrandName /> SSO Integration Using OIDC

* * *

<BrandName /> provides seamless Single Sign-On (SSO) integration with various identity providers using OpenID Connect (OIDC), enabling your team to access <BrandName /> using their existing organizational credentials. This managed SSO solution streamlines user management and enhances security by centralizing authentication through your identity provider.

This comprehensive guide will walk you through configuring OIDC-based SSO between your <BrandName /> organization and your identity provider, using Azure AD as the example throughout the documentation.


## What is OIDC (OpenID Connect)?

* * *

OpenID Connect (OIDC) is a simple identity layer built on top of the OAuth 2.0 protocol. It allows clients to verify the identity of the end-user based on the authentication performed by an authorization server, as well as to obtain basic profile information about the end-user in an interoperable and REST-like manner.

**Key Benefits of OIDC:**
- **Simplified Integration**: Easier to implement compared to SAML
- **Modern Standard**: Built on OAuth 2.0, widely adopted
- **RESTful**: Uses JSON and HTTP, making it developer-friendly
- **Flexible**: Supports various authentication flows
- **Secure**: Industry-standard security practices

## Prerequisites

* * *

To enable <BrandName /> SSO through OIDC integration, you will need:

- **Identity Provider Access**: Administrative access to your identity provider
- **<BrandName /> Enterprise Plan**: An active <BrandName /> organization subscription
- **Administrative Access**: Admin-level access to your <BrandName /> organization
- **SSO Request**: Contact <BrandName /> support to enable SSO for your organization

> **Note**: If you don't have SSO enabled for your <BrandName /> organization, please contact our support team at [support@testmu.ai](mailto:support@testmu.ai)
.

## Step-by-Step Integration Guide

* * *

### Step 1: Create Application in Your Identity Provider

The exact steps vary by identity provider, but the general process involves creating a new application or client registration. We'll use Azure AD as our example:
1. **Access Azure Portal**: Sign in to the [Azure Portal](https://portal.azure.com/) using an administrator account.

2. **Navigate to App Registrations**: In the Azure Portal, search for "App registrations" in the search bar and select it from the results.

3. **Create New Registration**: Click **New registration** to create a new application registration.

<img loading="lazy" src={require('../assets/images/lambdatest-sso-oidc/app-registration.png').default} alt="Azure App Registration" width="944" height="487" className="doc_img" style={{border: '1px solid #000'}}/>

4. **Configure Application Details**:
   - **Name**: Enter a descriptive name such as "<BrandName /> SSO" or "<BrandName /> OIDC Integration"
   - **Supported account types**: Select "Accounts in this organizational directory only"
   - **Redirect URI**: Leave this blank for now (we'll configure it later)
   - Click **Register** to create the application

<img loading="lazy" src={require('../assets/images/lambdatest-sso-oidc/app-registration-2.png').default} alt="Azure App Registration" width="944" height="487" className="doc_img" style={{border: '1px solid #000'}}/>


### Step 2: Configure Application Settings

1. **Access Application Overview**: After registration, you'll be redirected to the application overview page.

2. **Copy Client ID**: 
   - Note down the **Client ID** (also called Application ID in Azure AD) - you'll need this for <BrandName /> configuration
   - This unique identifier represents your application in your identity provider

3. **Copy Tenant/Domain Information**:
   - Note down the **Directory (tenant) ID** - this identifies your Azure AD tenant
   - You'll need this for the OpenID Connect metadata document URL

### Step 3: Create Client Secret

1. **Navigate to Certificates & Secrets**: In your application's left sidebar, click **Certificates & secrets**.

2. **Create New Client Secret**:
   - Click **New client secret**
   - **Description**: Enter a descriptive name like "<BrandName /> SSO Secret"
   - **Expires**: Select your preferred expiration period (recommended: 24 months)
   - Click **Add**

<img loading="lazy" src={require('../assets/images/lambdatest-sso-oidc/app-client-secret-create.png').default} alt="Azure App Client Register" width="944" height="487" className="doc_img" style={{border: '1px solid #000'}}/>

3. **Copy Secret Value**: 
   - **Important**: Copy the secret value immediately - it won't be shown again
   - Store this securely as you'll need it for <BrandName /> configuration

<img loading="lazy" src={require('../assets/images/lambdatest-sso-oidc/app-client-secret.png').default} alt="Azure Client Secret" width="944" height="487" className="doc_img" style={{border: '1px solid #000'}}/>

> **Important**: Store the client secret securely as you'll need it for <BrandName /> configuration. Most providers only show the secret once.

### Step 4: Configure Redirect URI

1. **Navigate to Authentication**: In your application's left sidebar, click **Authentication**.

2. **Add Redirect URI**:
   - Click **Add a platform**
   - Select **Web**
   - **Redirect URI**: Enter the redirect URI provided by <BrandName /> (typically: `https://lambdatest.auth0.com/login/callback`)
   - Click **Save**

<img loading="lazy" src={require('../assets/images/lambdatest-sso-oidc/app-redirect.png').default} alt="Azure Redirect URI" width="944" height="487" className="doc_img" style={{border: '1px solid #000'}}/>

### Step 5: Collect OpenID Connect Metadata

1. **Get Well-Known OIDC URL**: The OpenID Connect well-known configuration URL follows this pattern:
   ```
   https://login.microsoftonline.com/{tenant-id}/v2.0/.well-known/openid-configuration
   ```
   Replace `{tenant-id}` with your Directory (tenant) ID from Step 2.

   **Examples of Well-Known OIDC URLs:**
   - **Azure AD**: `https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/v2.0/.well-known/openid-configuration`
   - **Google Workspace**: `https://accounts.google.com/.well-known/openid-configuration`
   - **Okta**: `https://yourcompany.okta.com/.well-known/openid-configuration`
   - **Auth0**: `https://yourdomain.auth0.com/.well-known/openid-configuration`

2. **Verify Well-Known URL**: You can test the URL in your browser to ensure it returns valid JSON configuration.

<img loading="lazy" src={require('../assets/images/lambdatest-sso-oidc/app-oidc-metadata.png').default} alt="Azure Metadata URL" width="944" height="487" className="doc_img" style={{border: '1px solid #000'}}/>

> **Verify Well-Known URL**: Test the URL in your browser to ensure it returns valid JSON configuration.

### Step 6: Contact <BrandName /> Support for OIDC Configuration

Since OIDC integration requires server-side configuration, you cannot create the connection directly through the <BrandName /> interface. Instead, you need to contact our support team to configure the OIDC integration for you.

1. **Gather Required Information**: Collect the following details from your identity provider configuration:
   - **Client ID**: The client ID from Step 2
   - **Client Secret**: The secret value from Step 3
   - **OpenID Connect Metadata URL**: The metadata document URL from Step 5
   - **Connection Name**: A descriptive name like "Company OIDC" or "<BrandName /> SSO"

2. **Contact <BrandName /> Support**: Reach out to our support team with the configuration details:
   - **Email**: [support@testmu.ai](mailto:support@testmu.ai)

3. **Provide Configuration Details**: Include the following information in your support request:
   ```
   Identity Provider: Azure AD
   Client ID: [Your Application (client) ID]
   Client Secret: [Your Client Secret]
   Well-Known OIDC URL: [Your OIDC Well-Known URL]
   Connection Name: [Unique Connection Name]
   ```

4. **Wait for Configuration**: Our support team will configure the OIDC integration on your behalf.

### Step 7: Configure User Access (Optional)

1. **Set User Assignment**: In Azure AD, navigate to your application and click **Users and groups**.

2. **Assign Users**:
   - Click **Add user/group**
   - Select the users or groups who should have access to <BrandName />
   - Click **Assign**

3. **Configure App Roles** (if needed): You can define custom app roles for different access levels within <BrandName />.


## Testing Your OIDC Integration

* * *

### Method 1: Direct SSO Login

1. **Access <BrandName /> SSO**: Navigate to [https://accounts.lambdatest.com/sso](https://accounts.lambdatest.com/sso)

2. **Enter Email**: Enter your Azure AD email address

3. **Initiate SSO**: Click **CONTINUE WITH SSO**

4. **Complete Authentication**: You'll be redirected to Microsoft's login page. Enter your Azure AD credentials.

5. **Verify Success**: After successful authentication, you should be redirected to your <BrandName /> organization.


### Method 2: Direct OIDC Login (For Testing)

Since OIDC doesn't support classic IDP-based SSO login, you can use this URL to simulate the login process:

```
https://accounts.lambdatest.com/auth0/login?connection={connection-name}
```

Replace `{connection-name}` with the connection name you created in <BrandName />.

## Troubleshooting Common Issues

* * *

### Application Not Found
- **Issue**: "Application not found" error during login
- **Solution**: Verify that the Application (Client) ID is correct and the application is properly registered in Azure AD

### Invalid Client Secret
- **Issue**: "Invalid client secret" error
- **Solution**: Ensure the client secret is correctly copied and hasn't expired. Create a new secret if needed.

### Redirect URI Mismatch
- **Issue**: "Redirect URI mismatch" error
- **Solution**: Verify that the redirect URI in Azure AD exactly matches the one provided by <BrandName />

### User Not Assigned
- **Issue**: "User not assigned to application" error
- **Solution**: Ensure the user is assigned to the application in Azure AD under Users and groups

### Well-Known URL Issues
- **Issue**: "Invalid well-known URL" error
- **Solution**: Verify the OpenID Connect well-known URL is accessible and contains valid JSON configuration

### Domain Configuration
- **Issue**: Users from different domains cannot access <BrandName />
- **Solution**: Ensure all required domains are configured in both Azure AD and <BrandName /> settings




<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
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
        OIDC Integration
      </span>
    </li>
  </ul>
</nav>
