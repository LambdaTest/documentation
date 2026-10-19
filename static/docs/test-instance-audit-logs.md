# Test Instance Audit Logs

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Test Manager now provides Audit Logs for test instance execution. Audit Logs bring visibility into the **who, what, and when** for every test execution. This is critical for teams working in regulated environments, or those needing high accountability in their QA processes.

With Audit logs you can store the execution history of your tests and even run parallel execution sessions without losing the context on individual executions as every action will be logged with clear indication of time stamps & executor.

## Details captured in Audit Logs

- Test Instance & Steps `Status` changes.
- Test Instance & Steps `Remarks or attachment` changes.
- Test Instance Assignee changes.
- Test Instance `Status` changes derived from step results, recorded against the person who changed the step and naming the step that drove the change. See [How the Test Instance Status Is Derived](/support/docs/test-run-creation-and-management/#how-the-test-instance-status-is-derived).

A derived change is logged only when it actually changes the stored status.

You can view the Audit Logs by clicking on the `View Execution Log`.

For the Steps level execution logs, you can preview the step with respect to which the log was created.

 As step level Audit logs are with respect to that specific steps in case the step changes the old logs will still show the preview of the older step.

 When you delete a configuration or a test case, all associated audit logs are removed. This is because the action deletes the entire instance. If you then add the same test case and configuration again, it creates a brand new instance with no prior audit history.
