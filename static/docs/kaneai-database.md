# Database Connection in KaneAI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Managing test data in isolation or manually updating it across different test cases can lead to inconsistencies, increased maintenance efforts, and slower test execution. Integrating database connections within KaneAI allows teams to access and manipulate real-time data directly during test creation and execution. This capability ensures that tests are always aligned with the latest data, reducing manual data management, improving test accuracy, and enabling more efficient and scalable test automation workflows.

This document provides a step-by-step process to connect databases within the KaneAI platform. It covers the creation of a new connection, selecting database types, entering necessary details, and performing operations like queries and assertions. The guide ensures a smooth setup and usage experience for users looking to integrate their databases seamlessly with KaneAI.


Before you begin, make sure you have:


Before you create a database connection, have the following ready.
- A KaneAI account with access to the [database connections](https://www.testmuai.com/login/?redirectTo=https://kaneai.lambdatest.com/databases "database connections") page.
- Connection details for your database: host, port, database name, username, and password (or an organisation-level secret holding the password).
- For a local or private database, an active tunnel (covered in Step 2).


## Create a Database Connection


Open the [database connections](https://www.testmuai.com/login/?redirectTo=https://kaneai.lambdatest.com/databases) page in KaneAI and click **Create New Connection** to start a new connection.



**Result:** A blank connection form opens, ready for your database details.

**Special Connection Types (GCP Spanner):**
Unlike traditional databases, GCP Spanner does not use standard hostnames, ports, usernames, or passwords. To connect to a Spanner instance, you will instead need to provide:
*   **Instance ID** (The Spanner instance name)
*   **Database ID** (The database name within the instance)
*   **Credentials JSON** (The service account credentials file used for authentication)


Select the connection type, either **TCP/IP** or **over SSH**. Enter the database name and choose the database type: MySQL, PostgreSQL, MSSQL, Oracle, MongoDB, or GCP Spanner.

### Connecting local databases



GCP Spanner does not use standard hostnames, ports, usernames, or passwords. To connect to a Spanner instance, provide these fields instead:

*Note: GCP Spanner does not support SSH tunneling since it utilizes Google Cloud's native built-in security and networking.*



**Result:** The form holds the credentials KaneAI uses to reach your database.

### Step 2: Connect a Local Database


For a local or private database, select an active tunnel. To bring a tunnel up, follow the [Tunnel support](/support/docs/kane-ai-geolocation-tunnel-proxy/#tunnel) guide. Test the connection, then create it to see the sample database added.


GCP Spanner does not support SSH tunneling. It uses Google Cloud's native security and networking instead.


Database connections need one additional tunnel flag: `--expose database_type:host:port`. Your command looks like this:


{`./LT --user ${YOUR_LAMBDATEST_USERNAME()} --key ${YOUR_LAMBDATEST_ACCESS_KEY()} --expose mysql:0.0.0.0:3306 --verbose --env ht-prod`}



**Result:** The tunnel exposes your local database, and the connection appears in KaneAI ready to query.

Navigate within your KaneAI session. Use the slash command to add a database query. All connected databases will be visible, allowing you to view the schema or directly enter a query. For instances like GCP Spanner, the schema discovery will automatically show all user-created tables and column data types for the configured database.


In a KaneAI session, use the slash command to add a database query. All connected databases appear, so you can view a schema or enter a query directly. For GCP Spanner, schema discovery automatically shows every user-created table and its column data types for the configured database.



Select a connected database and enter your query to execute it. Use variables or parameters inside the query to drive it with dynamic data.

**Safe Queries Only**
For safety and data integrity, KaneAI only allows `SELECT`, `INSERT`, and `UPDATE` operations. Altering or destructive queries such as `ALTER`, `CREATE`, `DELETE`, or `DROP` commands are not supported and will return an error.




**Spanner Row Limit**
For **GCP Spanner** queries, a **100-row limit** is enforced on all `SELECT` queries to ensure fast performance and prevent excessive data transfer. It is recommended to use `WHERE` clauses to filter your data.


When you run or add a query, KaneAI records it as a test step. A successful query generates a JSON variable holding the table response, which you can then assert against. Add as many database queries as your flow needs and validate each response.

## Video explanation

## Limitations


Keep these constraints in mind when you design database-backed tests.

- Only `SELECT`, `INSERT`, and `UPDATE` queries run. `ALTER`, `CREATE`, `DELETE`, and `DROP` return an error.
- GCP Spanner caps every `SELECT` query at 100 rows.
- GCP Spanner does not support SSH tunneling.

## Video Explanation


Watch a database connection created and queried end to end.



## Next Steps


Now that queries return live data as JSON variables, use that data across your test.

- Assert on the query response and reuse it with [KaneAI Using Variables](/support/docs/kane-ai-using-variables/).
- Drive queries with different inputs using [KaneAI Using Parameters](/support/docs/kane-ai-using-parameters/).

Have feedback or a request? Reach out at [support@testmuai.com](mailto:support@testmuai.com).
