# How to Assert Network Logs With KaneAI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Network logs assertions let you validate the network calls your application makes during a test session. KaneAI captures every request and response in the background, so you can verify backend behavior alongside frontend interactions, useful when the UI depends on API data or when you need to confirm the correct calls are made behind the scenes.

## Network Logs Assertions


Unlike making your own API calls, this validates what the app itself does behind the scenes, capturing every request and response during the session.

Network logs assertions work in **Desktop Web**, **Mobile Web**, and **Mobile App** sessions. Desktop Web captures automatically; for **Mobile Web** and **Mobile App**, first enable the **Capture Network Logs** toggle under **Advanced Settings → Session Settings**.



### How It Works


1. During a test session, **all network calls are recorded automatically** in the background. Open them with `/` → **Assert Network Logs**.



2. Filter the recorded requests by **Status Code** (200, 404, 500, etc.) or **HTTP Method** (GET, POST, etc.). Requests are shown in JSON format.



3. Select the request, then choose which **request header**, **request body**, or **response body** keys to validate.



4. Click **Add Assertion** to add the **request** or **response** blocks. All chosen values are validated in a single step.



5. Once added, the request is stored as a **variable**, and KaneAI asserts against it.



### Accessing Network Data as Variables


Once you add a network assertion, the request data is stored as a **variable** in JSON format. You can reuse it later with `{{variable}}` syntax.



Access nested values with dot notation (e.g., `{{network_req.response.data.userId}}` or `header.status`).



## Reuse an Assertion Across Tests


A network assertion can be included in a reusable **module**, so the same network-layer check runs in every test that imports it instead of being authored again each time. The assertion travels as a single step with all of its conditions, and it is re-evaluated against each importing test's own live traffic on every run.


Available on **Desktop Web**, **Mobile Web**, and **Mobile App** sessions in the Classic experience.


See [Include a Network Assertion in a Module](/support/docs/kane-ai-modules/#include-a-network-assertion).

## Best Practices


Follow these practices for reliable tests:

| Practice | Details |
|---|---|
| **Use API calls for test data setup** | Faster and more reliable than creating data through the UI |
| **Store API tokens as secrets** | Never hardcode tokens; use `{{secret.api_token}}` |
| **Validate both UI and API** | A test that only checks UI can miss backend errors |
| **Use network assertions for passive validation** | Verify what the app is doing under the hood without making separate calls |
| **Filter network logs by status code** | Quickly find 4xx/5xx errors your app might be making silently |
| **Chain API response variables** | Use output from one API call as input to the next |
| **Test error scenarios via API** | Set up invalid data via API, then verify UI handles it gracefully |

## Next Steps


Continue with these guides:

- [KaneAI Assertions and Validation](/support/docs/kaneai-kb-assertions-and-validation/)
- [KaneAI Using Variables](/support/docs/kane-ai-using-variables/)
- [KaneAI Modules](/support/docs/kane-ai-modules/)
- [KaneAI Dynamic Content Waits and Page State](/support/docs/kaneai-kb-dynamic-content-waits-and-page-state/)
- [KaneAI API Testing](/support/docs/kane-ai-api-testing/), make and validate your own API calls in a test.
