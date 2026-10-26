# KaneAI - API Testing

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

This document provides a detailed guide to performing API testing using KaneAI. The API testing feature allows for comprehensive backend testing, complementing existing UI testing capabilities. Follow the instructions below to execute API tests using the PetStore API as an example.

## 1. Adding an API in a Web Test

To start API testing on KaneAI, create a web test using the PetStore API, a commonly available sample. This will allow you to demonstrate API testing capabilities effectively.

- **Step**: Add an API through the slash command and navigate to the API module.

## 2. Adding a Curl Command

Within the API module, you can input the curl command to configure the API settings automatically.

- **Step**: Paste your curl command into the designated area. KaneAI will populate all necessary details. You may choose to validate the API response or add it directly to the test steps.

## 3. Validating API Response on KaneAI

To ensure the API works as expected, use the validation feature. This step confirms that the API responds correctly and can be added to test steps.

- **Step**: Click the 'validate' option to check the API response. A 200 response status indicates successful validation, automatically adding the API to your test steps. You can now proceed to submit multiple APIs simultaneously if needed.

## 4. Adding Non-Success APIs in Test Steps

For APIs that do not return a 200 status, you can review the response body and manually add them to the test steps as required.

- **Step**: If the API returns a 400 Bad Request or another error, it will not be added automatically. Review the response and add the API manually if needed.

## 5. Adding Multiple APIs in One Go

KaneAI allows batch processing of multiple APIs to streamline testing. This feature is helpful for scenarios requiring the execution of several API calls in succession.

- **Step**: Add multiple APIs by clicking the plus icon and selecting each API, or paste multiple curl commands to add them automatically to the test steps.

## 6. Handling Different HTTP Methods

KaneAI supports various HTTP methods like POST, PUT, GET, and DELETE, allowing you to test diverse API interactions.

- **Step**: Add APIs using different HTTP methods, such as a PUT or DELETE command. Validate each API as before, and if successful, they will be automatically included in the test steps.

## 7. Executing and Reviewing Test Steps

Once all APIs are added, KaneAI enables simultaneous execution, with details available on methods used, response statuses, and execution times.

- **Step**: Click to execute all added APIs in one go and review the response details for insights into API performance and data returned.

## 8. Inspecting API Requests in the Console

The Console shows the exact request KaneAI sent and how the call went. It sits in the response section of the API modal, alongside Body, Cookies, and Headers, and is available after you validate an API or reopen an API step from the test steps. Use it to debug an API step that returns an unexpected response, or one that returns no response at all, because the Console still shows what was sent.

### Pretty and Raw Views

The Console opens in the **Pretty** view, which groups the details into the collapsible sections described below. Switch to **Raw** to see the request and response as plain HTTP text, with the request line, headers, and body exactly as they went over the wire.

### Request Sent

This section shows the request after KaneAI has resolved every variable:

- **Method and URL**: The HTTP method and the fully resolved URL the request went to.
- **Values used**: Each `{{variable}}` in the request, the value it resolved to, and where that value came from, such as a variable, parameter, secret, or environment. A variable that had no value is flagged as empty, which helps you spot a missing environment or an unset variable.
- **Headers**: Every header sent with the request and its source: typed by you in the Headers tab, generated from the Authorization tab, or added by KaneAI. KaneAI adds standard headers such as `Host`, `User-Agent`, `Accept`, `Accept-Encoding`, `Connection`, and `Content-Length`.
- **Body**: The request body that was sent, if the request had one.

### Response Received

This section shows the response the API returned: the status code, the response headers, and the response body along with its format and size.

### Timing

The Console breaks the total request time into phases: preparing the request, DNS lookup, connecting, establishing the secure (TLS) connection, waiting for the first byte, and downloading the response. The total matches the time shown on the API step.

- If the request failed, the Console shows the phase where it stopped, so you can tell a DNS failure from a connection or TLS failure.
- If KaneAI reused an existing connection, the connection phases are marked as skipped.

### Network

The Console shows how the request traveled:

- The IP address and region the request was sent from.
- The server address the request reached.
- The route, such as a direct connection, a tunnel, or a proxy.
- Whether a new connection was opened or an existing one was reused.
- TLS and certificate details for HTTPS requests.

If the API only accepts requests from known IP addresses, share the sent-from address with the team that manages the API so they can add it to their allowlist.

### Copy cURL and Download HAR

- **Copy cURL**: Copy the resolved request as a cURL command to rerun it in a terminal or share it with your team outside KaneAI.
- **Download HAR**: Download the API call as a HAR (HTTP Archive) file. Open it in your browser's developer tools or any HAR viewer, or attach it to a bug report.

This structure provides logical groupings for different aspects of API testing with KaneAI, making it easier to follow each type of action required for comprehensive API testing.
