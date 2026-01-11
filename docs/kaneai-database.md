---
id: kaneai-database
title: Database Connection in KaneAI
hide_title: true
sidebar_label: Database
description: Guide for usage of Database connection in KaneAI
keywords:
  - database
  - sql
  - nosql
url: https://www.testmu.ai/support/docs/kaneai-database
site_name: LambdaTest
slug: kaneai-database
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
          "name": "Network Throttling",
          "item": `${BRAND_URL}/support/docs/kaneai-database/`
        }]
      })
    }}
></script>

# Database Connection in KaneAI

Managing test data in isolation or manually updating it across different test cases can lead to inconsistencies, increased maintenance efforts, and slower test execution. Integrating database connections within KaneAI allows teams to access and manipulate real-time data directly during test creation and execution. This capability ensures that tests are always aligned with the latest data, reducing manual data management, improving test accuracy, and enabling more efficient and scalable test automation workflows.

:::note
This document provides a step-by-step process to connect databases within the KaneAI platform. It covers the creation of a new connection, selecting database types, entering necessary details, and performing operations like queries and assertions. The guide ensures a smooth setup and usage experience for users looking to integrate their databases seamlessly with KaneAI.
:::

## Creating a database connection

To begin, you need to access the [database connections](https://kaneai.lambdatest.com/databases "database connections") page within KaneAI from and initiate the creation of a new connection.

<img loading="lazy" src={require('../assets/images/kane-ai/features/create_database.jpg').default} alt="create-database" className="doc_img"/>


### Add connection details

Select the connection type as either TCP/IP or over SSH. Enter the database name and choose from available database types, including MySQL, PostgreSQL, MSSQL, Oracle and Mongo DB.

Provide a description and input your host name, port, username, and other relevant details. You can enter the password using an **organisation-level secret** or directly entering the password. For PostgreSQL, ensure you select the database name.

:::tip
KaneAI supports both SQL and NoSQL database connections.
:::

<img loading="lazy" src={require('../assets/images/kane-ai/features/create_database_list.png').default} alt="create-database-list" className="doc_img"/>

### Connecting local databases

For local or private databases, select a tunnel if your tunnel is active. The tunnel can be activated easily by following the details available [here](/support/docs/kane-ai-geolocation-tunnel-proxy/#tunnel-support). Test the connection and create it to see the sample database added.


Following flag will be additionally required for database connections: `--expose database_type:host:port`. 

So, your command will look like:
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`./LT --user ${YOUR_LAMBDATEST_USERNAME()} --key ${YOUR_LAMBDATEST_ACCESS_KEY()} --expose mysql:0.0.0.0:3306 --verbose --env ht-prod`}
</CodeBlock>
</div>


## Using Database queries within KaneAI session

Navigate within your KaneAI session. Use the slash command to add a database query. All connected databases will be visible, allowing you to view the schema or directly enter a query.

<img loading="lazy" src={require('../assets/images/kane-ai/features/database-slash-command.jpg').default} alt="create-database" className="doc_img"/>

To perform a query, you can select any connected database and input your query to execute. You can leverage variables or parameters as well within the query to make your tests even more robust.

:::tip
KaneAI does not support altering queries such as ALTER, DELETE, or DROP commands for database queries.
:::

<img loading="lazy" src={require('../assets/images/kane-ai/features/database-modal.jpg').default} alt="create-database" className="doc_img"/>

Once you Run or Add query, your query will be recorded as a test step within KaneAI, and a JSON variable containing the table response will be generated if the query is successful. This JSON variable can be used to perform various assertions on the data. You can continue adding multiple database queries and validate responses easily.

## Video explanation

<iframe src="https://app.trupeer.ai/embed?slug=sMHMyK6dl" width="640" height="360" frameborder="0" allowfullscreen="true"></iframe>


Have any feedback or request? Reach out to us via [support@lambdatest.com](mailto:support@lambdatest.com) and we would be happy to hear from you.
