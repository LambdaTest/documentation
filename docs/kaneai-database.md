---
id: kaneai-database
title: How to Query a Database With KaneAI
hide_title: true
toc_max_heading_level: 2
sidebar_label: Database
description: Connect a database in KaneAI and run queries inside a test session, storing the response as a reusable JSON variable.
keywords:
  - database
  - sql
  - nosql
  - gcp spanner
url: https://www.testmuai.com/support/docs/kaneai-database/
site_name: TestMu AI
slug: kaneai-database/
canonical: https://www.testmuai.com/support/docs/kaneai-database/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "name": "Database Connection in KaneAI",
          "item": `${BRAND_URL}/support/docs/kaneai-database/`
        }]
      })
    }}
></script>

# Database Connection in KaneAI
***

Connect KaneAI to your database to read and write real-time data during test authoring and execution, so tests use current data instead of hardcoded values you maintain by hand. KaneAI supports SQL, NoSQL, and cloud-native (GCP Spanner) databases. You create a connection once, then query it with a slash command inside any test session.

## Prerequisites
***

Before you begin, make sure you have:

:::note
Before you create a database connection, have the following ready.
- A KaneAI account with access to the [database connections](https://www.testmuai.com/login/?redirectTo=https://kaneai.lambdatest.com/databases "database connections") page.
- Connection details for your database: host, port, database name, username, and password (or an organisation-level secret holding the password).
- For a local or private database, an active tunnel (covered in Step 2).
:::

## Create a Database Connection
***

Open the [database connections](https://www.testmuai.com/login/?redirectTo=https://kaneai.lambdatest.com/databases) page in KaneAI and click **Create New Connection** to start a new connection.

<img loading="lazy" src={require('../assets/images/kane-ai/features/create_database.png').default} alt="create-database" className="doc_img"/>

**Result:** A blank connection form opens, ready for your database details.

### Step 1: Add Connection Details
***

Select the connection type, either **TCP/IP** or **over SSH**. Enter the database name and choose the database type: MySQL, PostgreSQL, MSSQL, Oracle, MongoDB, or GCP Spanner.

Add a description and enter your host name, port, username, and other details. For the password, enter it directly or use an organisation-level secret. For PostgreSQL, select the database name.

<img loading="lazy" src={require('../assets/images/kane-ai/features/create_database_list.png').default} alt="create-database-list" className="doc_img"/>

GCP Spanner does not use standard hostnames, ports, usernames, or passwords. To connect to a Spanner instance, provide these fields instead:

*   **Instance ID**: the Spanner instance name.
*   **Database ID**: the database name within the instance.
*   **Credentials JSON**: the service account credentials file used for authentication.

<img loading="lazy" src={require('../assets/images/kane-ai/features/create_database_gcp_spanner.png').default} alt="create-database-list" className="doc_img"/>

**Result:** The form holds the credentials KaneAI uses to reach your database.

### Step 2: Connect a Local Database
***

For a local or private database, select an active tunnel. To bring a tunnel up, follow the [Tunnel support](/support/docs/kane-ai-geolocation-tunnel-proxy/#tunnel) guide. Test the connection, then create it to see the sample database added.

:::note
GCP Spanner does not support SSH tunneling. It uses Google Cloud's native security and networking instead.
:::

Database connections need one additional tunnel flag: `--expose database_type:host:port`. Your command looks like this:
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`./LT --user ${YOUR_LAMBDATEST_USERNAME()} --key ${YOUR_LAMBDATEST_ACCESS_KEY()} --expose mysql:0.0.0.0:3306 --verbose --env ht-prod`}
</CodeBlock>
</div>

**Result:** The tunnel exposes your local database, and the connection appears in KaneAI ready to query.

## Run a Database Query
***

In a KaneAI session, use the slash command to add a database query. All connected databases appear, so you can view a schema or enter a query directly. For GCP Spanner, schema discovery automatically shows every user-created table and its column data types for the configured database.

<img loading="lazy" src={require('../assets/images/kane-ai/features/database-slash-command.jpg').default} alt="create-database" className="doc_img"/>

Select a connected database and enter your query to execute it. Use variables or parameters inside the query to drive it with dynamic data.

:::tip Safe Queries Only
KaneAI allows only `SELECT`, `INSERT`, and `UPDATE` operations. Destructive queries such as `ALTER`, `CREATE`, `DELETE`, and `DROP` are not supported and return an error. This protects your data from accidental changes during a test.
:::

<img loading="lazy" src={require('../assets/images/kane-ai/features/database-modal.jpg').default} alt="create-database" className="doc_img"/>

:::info Spanner Row Limit
GCP Spanner enforces a 100-row limit on every `SELECT` query to keep queries fast and limit data transfer. Add a `WHERE` clause to filter your results within that limit.
:::

When you run or add a query, KaneAI records it as a test step. A successful query generates a JSON variable holding the table response, which you can then assert against. Add as many database queries as your flow needs and validate each response.

**Result:** The query runs against the live database and its response is stored in a JSON variable you can reuse in later steps.

## Limitations
***

Keep these constraints in mind when you design database-backed tests.

- Only `SELECT`, `INSERT`, and `UPDATE` queries run. `ALTER`, `CREATE`, `DELETE`, and `DROP` return an error.
- GCP Spanner caps every `SELECT` query at 100 rows.
- GCP Spanner does not support SSH tunneling.

## Video Explanation
***

Watch a database connection created and queried end to end.

<iframe src="https://app.trupeer.ai/embed?slug=sMHMyK6dl" width="640" height="360" frameborder="0" allowfullscreen="true"></iframe>

## Next Steps
***

Now that queries return live data as JSON variables, use that data across your test.

- Assert on the query response and reuse it with [KaneAI Using Variables](/support/docs/kane-ai-using-variables/).
- Drive queries with different inputs using [KaneAI Using Parameters](/support/docs/kane-ai-using-parameters/).

Have feedback or a request? Reach out at [support@testmuai.com](mailto:support@testmuai.com).
