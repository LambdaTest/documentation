---
id: scoped-api-tokens
title: Scoped API Tokens
hide_title: true
sidebar_label: Scoped API Tokens
description: Create scoped, expiring API tokens to authenticate integrations with least-privilege access instead of sharing your account access key.
keywords:
  - scoped api tokens
  - api authentication
  - bearer token
  - service account tokens
  - least privilege api access
  - revoke api token
url: https://www.testmuai.com/support/docs/scoped-api-tokens/
site_name: TestMu AI
slug: scoped-api-tokens/
canonical: https://www.testmuai.com/support/docs/scoped-api-tokens/
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
          "name": "Scoped API Tokens",
          "item": `${BRAND_URL}/support/docs/scoped-api-tokens/`
        }]
      })
    }}
></script>

# Scoped API Tokens

A scoped API token is a credential you create for a single integration. Unlike your
account access key, it carries only the permissions you grant it, it expires on a date
you choose, and you can revoke it on its own without affecting anything else.

Use a scoped token when a CI pipeline, a script, or an internal service needs to call the
<BrandName /> APIs, so your access key stays out of that system.

:::info Limited availability
Scoped API tokens are being rolled out per organization. If the **Tokens** section does
not appear in your settings, the feature is not yet enabled for your organization —
contact your <BrandName /> account team to request access.
:::

## Why use a scoped token

Your username and access key authenticate as **you**, with everything your account can
do. A scoped token instead lets you grant only what one integration needs, expire it on a
schedule, and revoke it without disturbing anything else.

Basic authentication with your access key continues to work exactly as before. Scoped
tokens are an addition, not a replacement.

## Choosing scopes

When you create a token you choose what it may act on and what it may do. Each permission
is one of:

| Operation | Grants |
|---|---|
| `read` | View the resource |
| `write` | Create and update, and everything `read` allows |
| `delete` | Remove, and everything `write` allows |

The resources you can grant are listed on the token creation screen.

:::tip
Grant the fewest permissions your integration needs — start with `read` and add more only
when a call fails. It is far easier to widen a token later than to work out what an
over-scoped one was actually using.
:::

## Using a token

Send the token as a bearer credential in the `Authorization` header:

```bash
curl --request GET \
  --url 'https://api.testmuai.com/automation/api/v1/builds' \
  --header 'Authorization: Bearer <YOUR_SCOPED_TOKEN>'
```

Copy the token in full when it is shown to you — it is displayed only once. Because it is
a bearer credential it replaces the `-u username:accesskey` pair entirely, so do not send
both.

:::warning
Treat a token exactly as you would a password. Store it in your CI provider's secret
store, never in source control, and never paste it into a support ticket or a chat
message. If a token is exposed, revoke it.
:::

## Expiry and revocation

Each token has an expiry date you set when you create it. After it expires, requests using
it fail with `401` and you will need to create a replacement.

Revoke a token as soon as the integration using it is retired, or immediately if you
believe it has been exposed. Revocation is permanent — a revoked token cannot be
reactivated.

Tokens are independent of your password and access key: changing either does not
invalidate your tokens, and revoking a token does not affect your ability to log in.

## What is not supported

Scoped tokens are not accepted on Selenium Grid and Appium hub endpoints, or by tunnel
clients. Continue to use your username and access key for those.

## Troubleshooting

| Response | What to do |
|---|---|
| `401 Unauthorized` | Check that the token has not expired and that the header reads `Authorization: Bearer <token>`. Create a new token if it has expired |
| `403` naming a permission | The token is valid but lacks that permission. Create a token that includes it — permissions cannot be added to an existing token |

If every request fails immediately after you start using tokens, ask an organization
administrator whether scoped tokens are enabled for your organization.

## See also

- [Password and Access Key Expiration Policy](/support/docs/password-and-access-key-expiration-policy/)
- [Roles and Permissions (RBAC)](/support/docs/rbac-roles-and-permissions/)
- [Audit Logs](/support/docs/audit-logs/)
