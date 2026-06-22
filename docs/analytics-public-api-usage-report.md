---
id: analytics-public-api-usage-report
title: Usage Report Public API
sidebar_label: Usage Report API
description: REST API reference for the LambdaTest Analytics Usage Report. Retrieve per-product test counts and per-user breakdowns programmatically using Basic Auth or Access Key.
keywords:
  - usage report api
  - analytics public api
  - usage report rest api
  - lambdatest usage api
  - test usage data
  - product usage api
url: https://www.lambdatest.com/support/docs/analytics-public-api-usage-report/
site_name: LambdaTest
slug: analytics-public-api-usage-report/
canonical: https://www.lambdatest.com/support/docs/analytics-public-api-usage-report/
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
          "name": "Analytics",
          "item": `${BRAND_URL}/support/docs/analytics-overview/`
        },{
          "@type": "ListItem",
          "position": 4,
          "name": "Usage Report API",
          "item": `${BRAND_URL}/support/docs/analytics-public-api-usage-report/`
        }]
      })
    }}
></script>

# Usage Report Public API

The <BrandName /> Usage Report Public API lets you retrieve your organization's test usage data programmatically. Use it to integrate usage metrics into your own dashboards, automate billing reconciliation, or audit consumption across products and users.

The API provides two endpoints:

- **Summary** — Org-wide totals (tests run, duration, screenshots) broken down by product for a given date range and user type.
- **Drilldown** — Per-user breakdown for a specific product, paginated and sorted by usage volume.

:::note
The Usage Report API is currently in **Beta**. If you have any feedback or questions, reach out to [support@lambdatest.com](mailto:support@lambdatest.com).
:::

## Before You Begin

- You must be an **organization admin** to call these endpoints. Non-admin users receive a `403 Forbidden` response.
- If your organization uses **Role-Based Access Control (RBAC)**, the calling account must hold the **Admin** role with the required analytics permissions.
- Authentication is via **Basic Auth** using your LambdaTest username and Access Key.  
  Find your Access Key under **Profile → Account Settings → Access Key**.

### Base URL

```
https://api.lambdatest.com
```

### Authentication

All Usage Report API endpoints use **HTTP Basic Authentication**:

```
Authorization: Basic <base64(username:access_key)>
```

**Example:**

```bash
curl -u "user@example.com:your-access-key" \
  "https://api.lambdatest.com/insights/api/v3/public/usage-report/summary?..."
```

---

## Common Query Parameters

Both endpoints share these parameters:

| Parameter  | Type   | Required | Description |
|------------|--------|----------|-------------|
| `type`     | string | Yes      | User population to include. `account-user` for human accounts; `service-user` for service/API accounts. |
| `from`     | string | Yes      | Range start in wall-clock time: `YYYY-MM-DD HH:MM:SS` interpreted in the specified `timezone`. |
| `to`       | string | Yes      | Range end in wall-clock time: `YYYY-MM-DD HH:MM:SS` interpreted in the specified `timezone`. |
| `timezone` | string | No       | Timezone offset for interpreting `from`/`to`. Accepts `±HH:MM` (e.g. `+05:30`) or raw minutes from JavaScript's `Date.getTimezoneOffset()` (e.g. `-330` for IST). Defaults to `+05:30`. |

**Date range constraints:**

- Maximum span: **92 days** per request.
- Both `from` and `to` are required.
- `to` must be after `from`.

---

## Endpoints

### 1. Usage Report Summary

Returns org-wide test usage totals per product for the specified date range.

```
GET /insights/api/v3/public/usage-report/summary
```

#### Query Parameters

| Parameter  | Type   | Required | Description |
|------------|--------|----------|-------------|
| `type`     | string | Yes      | `account-user` or `service-user` |
| `from`     | string | Yes      | Start datetime (`YYYY-MM-DD HH:MM:SS`) in `timezone` |
| `to`       | string | Yes      | End datetime (`YYYY-MM-DD HH:MM:SS`) in `timezone` |
| `timezone` | string | No       | Timezone offset (default: `+05:30`) |

#### Example Request

```bash
curl -u "user@example.com:your-access-key" \
  "https://api.lambdatest.com/insights/api/v3/public/usage-report/summary?type=account-user&from=2024-06-01+00:00:00&to=2024-06-30+23:59:59&timezone=+05:30"
```

#### Example Response

```json
{
  "status": "success",
  "data": {
    "metadata": {
      "type": "account-user",
      "totalUsers": 12,
      "from": "2024-06-01 00:00:00",
      "to": "2024-06-30 23:59:59",
      "timezone": "+05:30",
      "organization": {
        "id": "12345",
        "name": "Acme Corp"
      }
    },
    "products": {
      "automation": {
        "totalTests": 8450,
        "totalDuration": 312540
      },
      "app-automation": {
        "totalTests": 1200,
        "totalDuration": 98400
      },
      "hyperexecute": {
        "totalTests": 3100,
        "totalDuration": 210000
      },
      "realtime": {
        "totalTests": 540,
        "totalDuration": 43200
      },
      "realdevice": {
        "totalTests": 275,
        "totalDuration": 22000
      },
      "smartui": {
        "totalScreenshots": 6800
      }
    }
  }
}
```

#### Response Fields

**`data.metadata`**

| Field          | Type    | Description |
|----------------|---------|-------------|
| `type`         | string  | The user type requested (`account-user` or `service-user`). |
| `totalUsers`   | integer | Number of distinct users who ran tests in the date range, scoped to the requested `type`. |
| `from`         | string  | The `from` value as provided in the request. |
| `to`           | string  | The `to` value as provided in the request. |
| `timezone`     | string  | The resolved timezone offset used (e.g. `+05:30`). |
| `organization` | object  | The authenticated caller's organization: `{ id, name }`. |
| `partial`      | boolean | Present and `true` when one or more product data fetches failed. Treat partial results as **incomplete**, not as a real zero. |

**`data.products`**

Each key is a product identifier. Most products return `{ totalTests, totalDuration }`:

| Field           | Type    | Description |
|-----------------|---------|-------------|
| `totalTests`    | integer | Total number of tests run across all users in the date range. |
| `totalDuration` | integer | Total test execution time in milliseconds. |

**Smart UI** (`smartui`) returns a different shape — it counts compared screenshots, not tests:

| Field              | Type    | Description |
|--------------------|---------|-------------|
| `totalScreenshots` | integer | Total number of screenshots compared via Smart UI in the date range. |

**Supported product keys:**

| Key              | Description |
|------------------|-------------|
| `automation`     | Web browser automation (Selenium, Playwright, etc.) |
| `app-automation` | Mobile app automation (Appium, Espresso, XCUITest, etc.) |
| `hyperexecute`   | HyperExecute grid-based test execution |
| `realtime`       | Real-time interactive browser testing |
| `realdevice`     | Real device testing (live and automated) |
| `smartui`        | Visual regression testing via Smart UI |

---

### 2. Usage Report Drilldown

Returns a paginated per-user breakdown for a single product over the specified date range.

```
GET /insights/api/v3/public/usage-report/drilldown
```

#### Query Parameters

| Parameter  | Type    | Required | Description |
|------------|---------|----------|-------------|
| `type`     | string  | Yes      | `account-user` or `service-user` |
| `product`  | string  | Yes      | One of the supported product keys (see [Supported product keys](#supported-product-keys) above). |
| `from`     | string  | Yes      | Start datetime (`YYYY-MM-DD HH:MM:SS`) in `timezone` |
| `to`       | string  | Yes      | End datetime (`YYYY-MM-DD HH:MM:SS`) in `timezone` |
| `timezone` | string  | No       | Timezone offset (default: `+05:30`) |
| `page`     | integer | No       | Page number (1-based). Default: `1`. |
| `limit`    | integer | No       | Results per page. Default: `10`, maximum: `100`. |

#### Example Request

```bash
curl -u "user@example.com:your-access-key" \
  "https://api.lambdatest.com/insights/api/v3/public/usage-report/drilldown?type=account-user&product=automation&from=2024-06-01+00:00:00&to=2024-06-30+23:59:59&timezone=+05:30&page=1&limit=10"
```

#### Example Response (non-Smart UI product)

```json
{
  "status": "success",
  "data": {
    "metadata": {
      "type": "account-user",
      "product": "automation",
      "totalUsers": 8,
      "totalTests": 8450,
      "totalDuration": 312540,
      "from": "2024-06-01 00:00:00",
      "to": "2024-06-30 23:59:59",
      "timezone": "+05:30",
      "organization": {
        "id": "12345",
        "name": "Acme Corp"
      },
      "pagination": {
        "limit": 10,
        "page": 1,
        "total": 8,
        "totalPages": 1
      }
    },
    "users": [
      {
        "id": "67890",
        "username": "johndoe",
        "email": "john@example.com",
        "totalTestsRun": 3200,
        "totalDuration": 120000
      },
      {
        "id": "67891",
        "username": "janedoe",
        "email": "jane@example.com",
        "totalTestsRun": 2100,
        "totalDuration": 85000
      }
    ]
  }
}
```

#### Example Response (Smart UI)

```json
{
  "status": "success",
  "data": {
    "metadata": {
      "type": "account-user",
      "product": "smartui",
      "totalUsers": 4,
      "totalScreenshots": 6800,
      "from": "2024-06-01 00:00:00",
      "to": "2024-06-30 23:59:59",
      "timezone": "+05:30",
      "organization": {
        "id": "12345",
        "name": "Acme Corp"
      },
      "pagination": {
        "limit": 10,
        "page": 1,
        "total": 4,
        "totalPages": 1
      }
    },
    "users": [
      {
        "id": "67890",
        "username": "johndoe",
        "email": "john@example.com",
        "totalScreenshots": 4200
      }
    ]
  }
}
```

#### Response Fields

**`data.metadata` (non-Smart UI)**

| Field           | Type    | Description |
|-----------------|---------|-------------|
| `type`          | string  | The user type requested. |
| `product`       | string  | The product key requested. |
| `totalUsers`    | integer | Number of distinct users with usage for this product, scoped to the requested `type`. |
| `totalTests`    | integer | Org-wide total tests for this product in the date range (across ALL users, not just those matching `type`). |
| `totalDuration` | integer | Org-wide total test duration in milliseconds for this product. |
| `from`          | string  | The `from` value as provided in the request. |
| `to`            | string  | The `to` value as provided in the request. |
| `timezone`      | string  | The resolved timezone offset used. |
| `organization`  | object  | The authenticated caller's organization: `{ id, name }`. |
| `pagination`    | object  | Page metadata (see [Pagination](#pagination) below). |
| `partial`       | boolean | Present and `true` when the underlying data fetch failed; breakdown is empty. |

**`data.metadata` (Smart UI)**

Same as above, except `totalTests`/`totalDuration` are replaced by:

| Field              | Type    | Description |
|--------------------|---------|-------------|
| `totalScreenshots` | integer | Org-wide total screenshots compared via Smart UI. |

**`data.users` (non-Smart UI)**

| Field           | Type    | Description |
|-----------------|---------|-------------|
| `id`            | string  | The user's LambdaTest account ID. |
| `username`      | string  | The user's username. |
| `email`         | string  | The user's email address. |
| `totalTestsRun` | integer | Total tests run by this user for the product in the date range. |
| `totalDuration` | integer | Total test execution time in milliseconds for this user. |

**`data.users` (Smart UI)**

| Field              | Type    | Description |
|--------------------|---------|-------------|
| `id`               | string  | The user's LambdaTest account ID. |
| `username`         | string  | The user's username. |
| `email`            | string  | The user's email address. |
| `totalScreenshots` | integer | Total screenshots compared by this user via Smart UI. |

#### Pagination

The `pagination` object in metadata describes the current page window:

| Field        | Type    | Description |
|--------------|---------|-------------|
| `page`       | integer | The current page number (1-based). |
| `limit`      | integer | The number of results per page. |
| `total`      | integer | Total number of matching users. |
| `totalPages` | integer | Total number of pages (`ceil(total / limit)`). |

Users are returned in **descending order** of usage (highest usage first).

:::note Scoping note
`totalTests` / `totalDuration` / `totalScreenshots` in the drilldown `metadata` are **org-wide** totals for the product — they include all users regardless of `type`. The `totalUsers` count and the `users` list are **scoped to the requested `type`**. These two numbers are intentionally independent.
:::

---

## Timezone Parameter

The `timezone` parameter controls how the `from` and `to` wall-clock datetimes are interpreted. It accepts two formats:

**ISO offset (recommended):**
```
+05:30   # IST
-08:00   # US Pacific
+00:00   # UTC
```

**JavaScript `Date.getTimezoneOffset()` minutes:**

If you are building a web integration, you can pass the raw output of `new Date().getTimezoneOffset()` directly. This value is **sign-inverted** from the ISO convention (IST returns `-330`, not `+330`) — the API handles the conversion automatically.

```
-330   → +05:30  (IST)
300    → -05:00  (US Eastern)
0      → +00:00  (UTC)
```

:::tip URL encoding
The `+` character in timezone offsets (e.g. `+05:30`) must be **percent-encoded** as `%2B` in URL query strings, or passed as a space (the API normalizes leading spaces to `+`). Example:

```bash
# Correct
&timezone=%2B05:30

# Also accepted
&timezone= 05:30
```
:::

---

## Error Responses

| HTTP Status | Reason |
|-------------|--------|
| `400 Bad Request` | Missing or invalid parameter (e.g. unknown `type`, `product`, bad date format, range exceeds 92 days). |
| `401 Unauthorized` | Missing or invalid Basic Auth credentials. |
| `403 Forbidden` | The authenticated user is not an org admin, or (for RBAC orgs) does not have the required analytics admin permissions. |
| `500 Internal Server Error` | Unexpected server error. |

**Example 400 response:**

```json
{
  "status": "error",
  "message": "invalid or missing type (valid: [account-user service-user])"
}
```

**Example 403 response (RBAC):**

```json
{
  "status": "error",
  "message": "access restricted: your role does not have the required permissions to view the usage report. Required permissions to add: analytics:admin"
}
```

---

## Code Examples

### Fetch June 2024 Usage Summary (cURL)

```bash
curl -u "user@example.com:your-access-key" \
  "https://api.lambdatest.com/insights/api/v3/public/usage-report/summary?type=account-user&from=2024-06-01+00:00:00&to=2024-06-30+23:59:59&timezone=%2B05:30"
```

### Fetch Automation Drilldown — Page 2 (cURL)

```bash
curl -u "user@example.com:your-access-key" \
  "https://api.lambdatest.com/insights/api/v3/public/usage-report/drilldown?type=account-user&product=automation&from=2024-06-01+00:00:00&to=2024-06-30+23:59:59&timezone=%2B05:30&page=2&limit=25"
```

### Fetch Usage Summary (Python)

```python
import requests
from requests.auth import HTTPBasicAuth

USERNAME = "user@example.com"
ACCESS_KEY = "your-access-key"

params = {
    "type": "account-user",
    "from": "2024-06-01 00:00:00",
    "to": "2024-06-30 23:59:59",
    "timezone": "+05:30",
}

response = requests.get(
    "https://api.lambdatest.com/insights/api/v3/public/usage-report/summary",
    params=params,
    auth=HTTPBasicAuth(USERNAME, ACCESS_KEY),
)
response.raise_for_status()
data = response.json()

print(f"Total users: {data['data']['metadata']['totalUsers']}")
for product, stats in data['data']['products'].items():
    print(f"{product}: {stats}")
```

### Fetch All Drilldown Pages (Python)

```python
import requests
from requests.auth import HTTPBasicAuth

USERNAME = "user@example.com"
ACCESS_KEY = "your-access-key"

def fetch_drilldown_all_pages(product, from_dt, to_dt, tz="+05:30", limit=100):
    all_users = []
    page = 1
    while True:
        params = {
            "type": "account-user",
            "product": product,
            "from": from_dt,
            "to": to_dt,
            "timezone": tz,
            "page": page,
            "limit": limit,
        }
        resp = requests.get(
            "https://api.lambdatest.com/insights/api/v3/public/usage-report/drilldown",
            params=params,
            auth=HTTPBasicAuth(USERNAME, ACCESS_KEY),
        )
        resp.raise_for_status()
        body = resp.json()
        all_users.extend(body["data"]["users"])

        meta = body["data"]["metadata"]["pagination"]
        if page >= meta["totalPages"]:
            break
        page += 1

    return all_users

users = fetch_drilldown_all_pages(
    product="automation",
    from_dt="2024-06-01 00:00:00",
    to_dt="2024-06-30 23:59:59",
)
print(f"Fetched {len(users)} users")
```

---

## Related Resources

- [Usage Report Dashboard](/support/docs/insights-usage-report/) — View usage metrics in the <BrandName /> Analytics UI.
- [Analytics Overview](/support/docs/analytics-overview/) — Overview of all <BrandName /> Analytics features.
- [Analytics API Widgets](/support/docs/analytics-allure-api-widgets/) — Embed analytics widgets using the <BrandName /> API.
