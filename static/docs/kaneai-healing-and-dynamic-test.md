# Adaptive Heal and Dynamic Test

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

A recorded test replays the steps it was authored with. When the application changes, a step can stop matching the page and the run stops there.

**Failure handling** decides what the run does instead. You pick one of three strategies, or leave it off and let the run stop at the first failed step.

| Strategy | Replays the recorded steps | When a step no longer matches | Credits |
|---|---|---|---|
| **Off** (default) | Yes | The run stops at the failed step | None |
| **Adaptive Heal** | Yes | Repairs the step and the run continues | Consumed when a repair runs |
| **Dynamic Test** | No | Not applicable, nothing is replayed | Consumed on every run |
| **Retry on Failure** | Yes | The test fails, then runs again from the start | None |

**Available on New Experience test cases running on Chrome**
Adaptive Heal and Dynamic Test apply to a test case only when it uses New Experience and its browser configuration is Chrome. Every other test case runs as it does today, whatever is set here.

## Only one strategy at a time

Adaptive Heal, Dynamic Test and Retry on Failure answer the same question in different ways, so only one can be active. Selecting one clears the others.

Leaving Failure handling off is a valid choice and is the default. A step that fails to replay ends the run and is reported.

## Adaptive Heal {#adaptive-heal}

Adaptive Heal repairs a step that fails to replay, so the run continues instead of stopping at the failure.

The repair is saved as a **new version of the test case**, and by default that version waits for your approval before it becomes current. The run itself finishes on the repaired content either way.

Use it when your application changes often enough that a recorded step goes stale, but the test is still describing the right thing.

**Adaptive Heal is not Auto-Heal**
[Auto-Heal](/support/docs/kaneai-auto-heal/) repairs a broken **element locator** at runtime by falling back to other locators for the same element. It creates no version and needs no approval.

Adaptive Heal repairs the **step** and records the change as a version you can review, approve or decline. The two are separate features.

## Dynamic Test {#dynamic-test}

Dynamic Test authors the test from its objective on every run, instead of replaying the recorded steps. There is no repair step, because the recorded steps are never used.

Use it for pages that change so much that a recorded script is a liability. The trade is cost.

**Dynamic Test consumes credits on every run**
Every run authors the test again, so every run consumes authoring credits. Replaying a recorded test does not. Turning this on at the organization level commits every eligible run in scope to that cost.

## Retry on Failure {#retry-on-failure}

Retry on Failure runs the whole test again from the start after it fails. Nothing about the test is changed, so nothing needs approval.

When it is selected, **Maximum Retries** sets how many further attempts to make. The maximum is 5.

Retry on Failure is available in a test run only. It is not an organization or project setting.

Test case failure retries are supported only for code exported from **May 10, 2026 onwards**. For previously exported code, retries are triggered only on test runner command failure.

## Auto-approve changes {#auto-approve-changes}

Adaptive Heal and Dynamic Test both produce a new version of the test case. **Auto-approve changes** decides what happens to it.

| Auto-approve | What happens to the new version |
|---|---|
| Off (default) | Held in Version History and becomes current only after your approval |
| On | Becomes current immediately, without review |

Auto-approve appears only when Adaptive Heal or Dynamic Test is selected, because those are the only strategies that produce a version. Retry on Failure never offers it.

A version approved automatically is marked as such in Version History, so the record always shows whether a person reviewed it.

**Why approval matters**
A repair is sometimes correct, because a locator drifted. Sometimes the step failed because the product genuinely broke, and repairing it turns a real defect into a passing test. Reviewing the change is what keeps the second case visible.

## Where to set it

Failure handling is set at three levels. Each one is a starting position for the level below it.

| Level | Where | Applies to | Strategies available |
|---|---|---|---|
| **Organization** | Organization Settings → Org Product Preferences → Kane AI → Healing and Dynamic Test | Every project in the organization | Adaptive Heal, Dynamic Test |
| **Project** | Test Manager → Project Settings → Healing and Dynamic Test | Every run in the project | Adaptive Heal, Dynamic Test |
| **Test run** | Advanced Configurations → Test Configurations | That run only | Adaptive Heal, Dynamic Test, Retry on Failure |

A project follows the organization until someone changes it there. Once changed, the project keeps its own value and later organization changes no longer overwrite it.

A test run starts from the project's value and can override it for that run. Changing it in a run never writes back to the project or the organization.

Retry on Failure exists only at the run level, so it is chosen per run.

### Set it for a run

1. On the test run screen, click **Advanced Configurations**.
2. Turn **Failure handling** on.
3. Select **Adaptive Heal**, **Dynamic Test** or **Retry on Failure**.
4. For Adaptive Heal or Dynamic Test, set **Auto-approve changes**. For Retry on Failure, set **Maximum Retries**.
5. Click **Execute**.

See [KaneAI Test Runs](/support/docs/kaneai-hyperexecute-test-run-execution/#advanced-configurations) for the rest of the Advanced Configurations panel.

## Reviewing a change

When Adaptive Heal or Dynamic Test produces a new version and auto-approve is off, the version appears in the test case's **Version History** marked as a draft, attributed to the strategy that produced it rather than to the person who started the run.

From there you can read the proposed steps in full, compare them against the current version, and then **Approve** or **Decline**.

- **Approve** makes it the current version and regenerates the exported code for it.
- **Decline** discards it and leaves the current version untouched.

A draft cannot be edited while it is waiting for a verdict. Approve or decline it first, then edit the result like any other version.

## Limitations

- Adaptive Heal and Dynamic Test apply only to New Experience test cases whose browser configuration is Chrome.
- Only one strategy can be active at a time.
- Retry on Failure is a run-level setting and has no organization or project equivalent.
- Maximum Retries accepts a value up to 5.

## Next Steps

- [KaneAI Test Runs](/support/docs/kaneai-hyperexecute-test-run-execution/)
- [Auto-Heal in KaneAI](/support/docs/kaneai-auto-heal/)
- [Scheduled Test Runs](/support/docs/kaneai-scheduled-test-runs/)
