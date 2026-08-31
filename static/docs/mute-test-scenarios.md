# How to Mute Test Scenarios on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Muting on TestMu AI lets you flag known-broken or flaky tests so they stop failing your build. A muted test still runs and reports its real result, but is excluded from the build's pass/fail verdict and summary counts across automation.

Muting is the third option. A muted test **still runs and still reports its real result**, but it is excluded from the build's pass/fail verdict and summary counts. You keep the build green and keep the data to fix the test later.

Muting works for Selenium and Playwright web automation, and for Appium app and web automation on real and virtual devices. It is **not** available for Cypress, or for HyperExecute framework runs (Espresso, XCUITest, Flutter), which have their own [Test Muting](/support/docs/hyperexecute-test-muting/).

**Limited Availability**
Muting is enabled per organization and may not be turned on for your account yet. To get it enabled, reach out to our **24/7 chat support** or email us at [support@testmuai.com](mailto:support@testmuai.com).


## Mute a Test


1. Open the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) and select a build, or open the test's detail page.
2. Wait for the test to finish. Muting acts on a result, so the action appears only once the test has settled on **Passed** or **Failed**.
3. From the test's options menu, select **Mute Test...** and choose one of:
   - **Mute this test** - mutes this one run and nothing else.
   - **Mute the combination** - mutes this run and saves a rule so the same test on the same configuration is muted automatically on every future build.
4. The build recomputes immediately. If the muted test was the last failing one, the build flips to **Passed**.

To lift a mute, select **Unmute Test...** from the same menu. The build recomputes back to its real status. If the test is muted *because* the combination is muted, the dialog offers **Unmute the combination** - a rule cannot be lifted for a single run.

There is no capability to set. Mute rules are applied server-side when a test is created, so your existing suite picks them up on the next run with no change to your script or capabilities block.

## What a Combination Matches On


A combination rule is stored against your **organization**, so it applies to everyone on the team and persists until it is removed. Incoming tests are matched on:

| Field | Part of the match | Applies to |
| --- | --- | --- |
| Test name | Yes | All tests |
| Operating system | Yes | All tests |
| OS version | Yes | All tests |
| Browser | Yes | Web tests |
| Device | Yes | Mobile tests |
| Real vs. virtual device | Yes | Mobile tests |
| App build ID | No | App tests |

Matching is **exact**. If the browser, device, OS, or OS version differs at all from the rule, including `13` versus `13.0`, the rule does not apply.


The app build ID is deliberately excluded. It changes on every upload, so including it would silently break your mutes each time you shipped a new APK or IPA. Real and virtual devices are kept separate for the opposite reason: a mute for a physical Pixel 4 is not a request to mute an emulated one.


## What Muting Changes


- **The test still runs.** It executes as before and records its real status, shown in the test list with a muted badge. Muting is not skipping and not hiding.
- **The badge appears while the test is still queued.** A test caught by a saved rule is marked from the moment it is created, in the test list, the build page, and the test detail header.
- **The build verdict ignores muted failures.** This includes runs that later error or time out, since the rule applies at creation time.
- **Build counts and tiles exclude muted tests**, including the live counters during a running build.
- **An all-muted build reads Passed**, not "Completed" or "Failed".
- **Unmuting is symmetric.** The build recomputes straight back to its real status, including builds that already finished as Failed, Error, Stopped, Cancelled, or Timed out.

## Limitations


| Limitation | Detail |
| --- | --- |
| **Only Passed and Failed tests can be muted** | The action is offered only on tests that settled on **Passed** or **Failed**. It is not available on queued or running tests, or on tests that ended in any other status, such as **Stopped**, **Cancelled**, **Lambda Error**, **Aborted**, **Error**, **Timeout**, **Skipped**, or **Unknown**, because there is no definitive result to silence. To silence a test that always ends in one of these states, use **Mute the combination** from a run that did pass or fail. |
| **A mismatched mute fails silently** | Matching is exact, and a mute that does not apply raises no error or warning. If a mute "is not working", compare the run's configuration against the rule first. |
| **Analytics do not honour muting** | Dashboards report a fully muted build as passed with 0 failures, but analytics and reporting surfaces still count those tests as failures. |
| **Mutes do not expire** | Nothing ages out a saved mute or reminds you it exists, so review them periodically or they will hide real regressions. |
| **Org-level control only** | No per-test, per-user, or per-team scoping in this release. |

## Next Steps


- [Explore the Automation Dashboard](/support/docs/inside-testmu-platform/) - read build and test results for web automation
- [App Automation Dashboard](/support/docs/app-automation-dashboard/) - read build and session results for app automation
- [Flaky Test Detection](/support/docs/test-intelligence-flakiness-test-detection/) - find the tests worth muting
