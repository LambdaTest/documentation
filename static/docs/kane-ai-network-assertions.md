# Network Logs Assertions

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

The **Network Logs Assertions** feature in KaneAI enables you to test and validate the behavior of your application at the **network layer**.
This is useful when you need to ensure that API calls, response codes, payloads, or request timings meet expected conditions during your test executions.

## Let's see how to add Network Logs Assertions in a Test

- **Start a test session** (Desktop Web, Mobile Web, or Mobile App).

- For **Mobile Web** and **Mobile App** sessions, you need to enable the **Capture Network Logs** toggle before starting your session. Navigate to **Advanced Settings** > **Session Settings** and turn on the **Capture Network Logs** option.

- All network calls are automatically recorded in the background as you navigate through your application. You can see the Network calls made so far through the **Assert Network Logs** option available in the " / " commands.

- Here you will find all the Network requests made in this session so far and **having the Json data format**, you can filter the requests on basis of **Status Code** or **HTTP Methods**:

**Latest call used for assertions**
If the same API is called multiple times, KaneAI uses only the **latest matching call** available when the assertion step runs. This applies even if you selected an earlier call in the network logs; selecting that entry does not make the assertion validate the earlier call.

For example, if `GET /user` returns `Rahul` on the first call and `Priya` on the second, an assertion added from either entry checks the latest call, which returns `Priya`.

- Select the specific key's that you want to add in the assertion from the **Request Headers**.

- To add **Request** or **Response blocks** in assertions click on the `Add Assertion` button. All the chosen values will be validated in a single step.

- Once added, the request will be stored as a **variable**. KaneAI then makes assertions based on this variable.

### How to validate a specific object in request or response of an API?

- You can reuse the request later in your test using the familiar `{{variable}}` syntax.

- The stored variable is in **JSON format**, so you can easily access nested values with dot-notation (e.g., `header.status`).

## Reuse an Assertion Across Tests

A network assertion can be included in a reusable **module**, so the same network-layer check runs in every test that imports it instead of being authored again each time. The assertion travels as a single step with all of its conditions, and it is re-evaluated against each importing test's own live traffic on every run.

Available on **Desktop Web**, **Mobile Web**, and **Mobile App** sessions in the Classic experience.

See [Include a Network Assertion in a Module](/support/docs/kane-ai-modules/#include-a-network-assertion-in-a-module).
