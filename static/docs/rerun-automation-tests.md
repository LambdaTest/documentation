# Re-Run Automation Tests

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

When a test fails, you often need to run it again, either to confirm a fix or to check whether the failure was a flake. The **Re-Run** button on the Test Detail Page lets you do this from the dashboard, without re-triggering your suite from CI or your local machine.

Re-Run offers two options:

- **Replay** - executes the test again, live, against your application.
- **Reproduce** - executes the test against the network state captured from the original run. Requires HAR logging.

## Re-Run a Test

1. Open the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) and select a build.
2. Select a test from the Test List Panel to open its Test Detail Page.
3. Click the dropdown arrow on the **Re-Run** button, in the top-right of the test summary.
4. Choose **Replay** or **Reproduce**.

The **Re-runs** field in the test summary shows how many times the test has been re-run.

## Replay

**Replay** executes the test again on a fresh session, using the same script and the same configuration (browser, browser version, operating system, and resolution) as the original run. Because it hits your application live, the result reflects the current state of your app and your environment.

Use Replay to:

- **Confirm a fix** - re-run a previously failing test after deploying a change.
- **Identify flaky tests** - run the same test repeatedly to see whether failures are intermittent. For a broader view, see [Flaky Test Detection](/support/docs/test-intelligence-flakiness-test-detection/).
- **Re-test after an environment change** - verify a test once a dependency or test environment issue is resolved.

## Reproduce

**Reproduce** re-runs the test against the network state captured from the original run, rather than against live network responses. This replicates the conditions the test originally encountered, which is useful when the failure depended on a specific set of network responses that you cannot easily recreate on demand.

Reproduce reads the HAR (HTTP Archive) network logs recorded during the original test. If those logs were not captured, the option is unavailable.

### Enable Reproduce

Reproduce requires HAR logging on the original run. Pass the following capability in your test:

```javascript
"network.full.har" : true
```

If the original test ran without this capability, **Reproduce** appears greyed out in the Re-Run menu with the tooltip:

> No Network Logs found, use network.full.har:true to replicate the test states.

In this case, add the capability and run the test again. The new run is then eligible for Reproduce.

`network.full.har` applies to web tests. Enabling it also populates the **Network** tab with a waterfall chart. See [HAR Log Viewer With Waterfall](/support/docs/har-log-viewer-with-waterfall/) for how to read it.

## Choosing Between Replay and Reproduce

| | Replay | Reproduce |
| --- | --- | --- |
| Network responses | Live, from your application | Captured from the original run |
| Prerequisite | None | `network.full.har : true` on the original run |
| Best for | Confirming fixes, detecting flakes | Investigating failures tied to specific network responses |

If you are not sure which to use, start with **Replay**. Reach for **Reproduce** when a failure will not recur on a live run and you suspect the original network responses are the reason.

## Next Steps

- [Explore the Automation Dashboard](/support/docs/inside-testmu-platform/)
- [HAR Log Viewer With Waterfall](/support/docs/har-log-viewer-with-waterfall/)
- [Debugging Options](/support/docs/debugging-options/)
