---
id: scim
title: Getting Started With Scim User Provisioning
hide_title: false
sidebar_label: SCIM
description: The SCIM specification is designed to make managing user identities easier. SCIM allows your Identity Provider (IdP) to manage users within your TestMu AI workspace  
keywords:
    - TestMu AI SCIM
url: https://www.lambdatest.com/support/docs/scim/
site_name: LambdaTest
slug: scim/
---

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
          "name": "Scim",
          "item": "https://www.lambdatest.com/support/docs/scim/"
        }]
      })
    }}
></script>
The SCIM specification is designed to make managing user identities easier. SCIM allows your Identity Provider (IdP) to manage users within your LambdaTest workspace
> SSO must be integrated before enabling SCIM. Please see [Getting Started With Single Sign On (SSO)](/support/docs/single-sign-on/) or [support@lambdatest.com](mailto:support@lambdatest.com) for questions.

## Benefits Of SCIM
Here are the following benefits of integrating SCIM with LambdaTest:

- **Efficiency and Automation**: SCIM automates the process of user identity management, making it more efficient and less error-prone. It enables automatic provisioning and de-provisioning of user accounts, reducing manual administrative tasks and associated errors.
- **Consistency:**: SCIM ensures that user data is consistent across different systems and services. When a user's attributes (like role) are updated in the identity provider, SCIM can be used to propagate those changes to all connected service providers, maintaining accurate and up-to-date information.
- **Security and Access Control:**:  By centralizing identity management through SCIM, organizations can better enforce access control policies and ensure that users have appropriate access rights to the resources they need. This can help mitigate security risks associated with improper access permissions.
- **Assigning Groups to Users (If Groups Are Activated in Your Organization) :** If your organization has group functionality enabled, you can assign existing LambdaTest groups to users provisioned through an Identity Provider (IdP) such as Microsoft Azure AD, Okta, and others using SCIM. 
> Connect with our [24/7 customer support](mailto:support@lambdatest.com) team to get the **Group** feature enabled for your organization.


## Feature Of SCIM
LambdaTest provides the support for the below SCIM features.

- **User Provisioning and De-provisioning**:  SCIM facilitates the automatic provisioning and de-provisioning of user accounts across different systems and services. When a user is added or removed from the identity provider, SCIM can be used to propagate these changes to your LambdaTest account.
- **Updating User Attributes**: Using SCIM you can update user attribute such as **Organization Role** directly from your Identity Provider.

## Copy SCIM Base URL and Bearer Token (Auth Header Required by IdP)
**Step 1:** Sign in to your LambdaTest account. Don't have an account, [register for free](https://accounts.lambdatest.com/register).

<img loading="lazy" src={require('../assets/images/lambdatest-mfa/dashboard.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 2:**  Head to **Settings** and select **Organization Settings** from the dropdown.

<img loading="lazy" src={require('../assets/images/lambdatest-mfa/org-settings.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 3:**  Head to the **Security** tab and click and copy the **SCIM Base URL and Bearer Token** option.

<img loading="lazy" src={require('../assets/images/lambdatest-scim/scim-base-url.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

## SCIM User Attributes
```javascript
{
    "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:User",
        "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User"
    ],
    "userName": "tester@test.com",
    "active": true,
    "name": {
        "formatted": "givenName familyName",
        "familyName": "familyName",
        "givenName": "givenName"
    },
  "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User": {
    "OrganizationRole" : "User"
  }
}
```

**schemas(required)**: An array of schema URNs (Uniform Resource Names) that define the structure and attributes of the user object. In this case, the JSON conforms to the SCIM (System for Cross-domain Identity Management) schema for users, including an extension schema for enterprise-specific attributes.

**id** Unique Identifier assigned to provisioned users by LambdaTest

**userName(required)**: The username associated with the user **(Must be Email)**

**active(required)**: A boolean indicating whether the user's account is active or not.

**name(required)** An object containing the user's name information. The formatted property provides the full name, while familyName and givenName represent the family and given names respectively.

**urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User**:This extension schema is used to add custom attributes or properties to the user object that are not part of the standard SCIM (System for Cross-domain Identity Management) core schema.
Here you can set **OrganizationRole** which can have either of (Admin/User/Guest) values. If this attribute is not passed OrganizationRole is set to **User** by default

## Creating Users 

If the user you want to add does not have a LambdaTest account, user will be created. If the user has an existing account with LambdaTest and is part of another organization then the user won't be auto provisioned, and you will need to add the user to your organization via team invite

## Updating User Attributes
Only Organization Role can be updated for users, userName(email) can't be updated once user is created and Name can only be updated from LambdaTest Account Settings page


## Deleting or Deactivating users 
User accounts can only be deactivated (active:false) via PUT/PATCH or DELETE User requests, For permanently deleting account users need to request account deletion from LambdaTest Account Settings page

## User Operations
## Create User 

### Request 

POST `https://auth.lambdatest.com/api/scim/Users`

```javascript
{
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:User",
    "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User"
  ],
  "userName": "tester@test.com",
  "active": true,
  "name": {
    "formatted": "givenName familyName",
    "familyName": "familyName",
    "givenName": "givenName"
  },
  "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User": {
    "OrganizationRole" : "User"
  }
}
```

### Response 

HTTP/1.1 201 Created

```json
{
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:User",
    "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User"
  ],
  "id": "23123",
  "userName": "tester@test.com",
  "active": true,
  "name": {
    "formatted": "givenName familyName",
    "familyName": "familyName",
    "givenName": "givenName"
  },
  "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User": {
    "OrganizationRole" : "User"
  }
}
```

## GET Users

### Request 

GET `https://auth.lambdatest.com/api/scim/USERS`

### Response

HTTP/1.1 200 OK

```json
{
    "schemas": ["urn:ietf:params:scim:api:messages:2.0:ListResponse"],
    "totalResults": 1,
    "Resources": [{
      "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:User",
        "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User"
      ],
      "id": "23123",
      "userName": "tester@test.com",
      "active": true,
      "name": {
        "formatted": "givenName familyName",
        "familyName": "familyName",
        "givenName": "givenName"
      },
      "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User": {
        "OrganizationRole" : "User"
      }
    }],
    "startIndex": 1,
    "itemsPerPage": 20
}
```

### Response - Zero Results

HTTP/1.1 200 OK
```json
{
    "schemas": ["urn:ietf:params:scim:api:messages:2.0:ListResponse"],
    "totalResults": 0,
    "Resources": [],
    "startIndex": 1,
    "itemsPerPage": 20
}
```

## GET Users by query

### Request

You can only filter users using email in the following format

GET `https://auth.lambdatest.com/api/scim/Users?filter=userName` eq "tester@test.com"

### Response

```json
{
    "schemas": ["urn:ietf:params:scim:api:messages:2.0:ListResponse"],
    "totalResults": 1,
    "Resources": [{
      "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:User",
        "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User"
      ],
      "id": "23123",
      "userName": "tester@test.com",
      "active": true,
      "name": {
        "formatted": "givenName familyName",
        "familyName": "familyName",
        "givenName": "givenName"
      },
      "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User": {
        "OrganizationRole" : "User"
      }
    }],
    "startIndex": 1,
    "itemsPerPage": 20
}
```

### Response Zero results
HTTP/1.1 200 OK
```json
{
    "schemas": ["urn:ietf:params:scim:api:messages:2.0:ListResponse"],
    "totalResults": 0,
    "Resources": [],
    "startIndex": 1,
    "itemsPerPage": 20
}
```
### Response User is part of a different org
HTTP/1.1 400 Bad Request


## GET User by id

### Request

GET `https://auth.lambdatest.com/api/scim/Users/id`

### Response 
HTTP/1.1 200 OK
```json
{
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:User",
    "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User"
  ],
  "id": "23123",
  "userName": "tester@test.com",
  "active": true,
  "name": {
    "formatted": "givenName familyName",
    "familyName": "familyName",
    "givenName": "givenName"
  },
  "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User": {
    "OrganizationRole" : "User"
  }
}
```

### Response User not found 
HTTP/1.1 404 Not Found

### Response User is part of a different org
HTTP/1.1 400 Bad Request


## Update a specific User (PUT)

Only  OrganizationRole or Active Fields can be updated

### Request 

PUT `https://auth.lambdatest.com/api/scim/Users/id` HTTP/1.1
```json
{
    "schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"],
  "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User": {
    "OrganizationRole" : "User"
  },
  "active": true
}
```

### Response 
HTTP/1.1 200 OK
```json
{
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:User",
    "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User"
  ],
  "id": "23123",
  "userName": "tester@test.com",
  "active": true,
  "name": {
    "formatted": "givenName familyName",
    "familyName": "familyName",
    "givenName": "givenName"
  },
  "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User": {
    "OrganizationRole" : "User"
  }
}
```
### Response User not found
HTTP/1.1 404 Not Found

### Response User is part of a different org
HTTP/1.1 400 Bad Request

## Update a specific User (PATCH)

Only OrganizationRole or Active Fields can be updated

### Request

PATCH `https://auth.lambdatest.com/api/scim/Users/id` HTTP/1.1
```json
{
  "schemas": [
    "urn:ietf:params:scim:api:messages:2.0:PatchOp"
  ],
  "Operations": [
    {
      "op": "Replace",
      "path": "active",
      "value": false
    },
    {
      "op": "Replace",
      "path": "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User:OrganizationRole",
      "value": "User"
    }
  ]
}
```

### Response
HTTP/1.1 200 OK
```json
{
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:User",
    "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User"
  ],
  "id": "23123",
  "userName": "tester@test.com",
  "active": false,
  "name": {
    "formatted": "givenName familyName",
    "familyName": "familyName",
    "givenName": "givenName"
  },
  "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User": {
    "OrganizationRole" : "User"
  }
}
```
### Response User not found
HTTP/1.1 404 Not Found

### Response User is part of a different org
HTTP/1.1 400 Bad Request

## Disable a specific User (PATCH)

Only OrganizationRole or Active Fields can be updated

### Request

PATCH `https://auth.lambdatest.com/api/scim/Users/id` HTTP/1.1
```json
{
  "schemas": [
    "urn:ietf:params:scim:api:messages:2.0:PatchOp"
  ],
  "Operations": [
    {
      "op": "Replace",
      "path": "active",
      "value": false
    }
  ]
}
```

### Response
HTTP/1.1 200 OK
```json
{
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:User",
    "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User"
  ],
  "id": "23123",
  "userName": "tester@test.com",
  "active": false,
  "name": {
    "formatted": "givenName familyName",
    "familyName": "familyName",
    "givenName": "givenName"
  },
  "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User": {
    "OrganizationRole" : "User"
  }
}
```
### Response User not found
HTTP/1.1 404 Not Found

### Response User is part of a different org
HTTP/1.1 400 Bad Request

## Delete User

Note: Delete User Request only sets user account to inactive

### Request

DELETE `https://auth.lambdatest.com/api/scim/Users/id` HTTP/1.1


### Response
HTTP/1.1 204 No Content

### Response User not found
HTTP/1.1 404 Not Found

### Response User is part of a different org
HTTP/1.1 400 Bad Request


## See Limitations

The following is the list of LambdaTest SCIM limitations

* Users existing in another organizations won't be auto provisioned
* Delete User Request only sets user account to inactive


> That's all you need to know about Single sign-on(SSO) authentication feature.In case you have any questions please feel free to reach out to us via the <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or email us over [support@lambdatest.com](mailto:support@lambdatest.com).


<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="https://www.lambdatest.com">
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
        Single Sign On
      </span>
    </li>
  </ul>
</nav>
