# FailFast

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

HyperExecute's FailFast feature lets you to optimize your testing regimen by automatically aborting jobs that surpass a specified number of consecutive failures. This intelligent feature ensures that you receive prompt feedback and maintain a well-orchestrated testing process.

## `maxNumberOfTests`

The  `maxNumberOfTests`  flag serves as a parameter that determines the number of consecutive tests that need to be failed before the job is aborted automatically.

For instance, if you set the `maxNumberOfTests` flag to 4, then your job will be aborted after four consecutive test failures. However, if three of your tests fail and the fourth one is passed, then the FailFast feature will reset and look for the next four consecutive tests that are failing.

This allows you to speed up your test execution process and provide you with faster feedback.

## Implementing FailFast

To leverage the **FailFast** feature, simply incorporate the following command in your HyperExecute YAML file:

```yaml
failFast:
maxNumberOfTests: 2
```

To apply `failFast` at the **scenario** level instead of the default test level, set the `level: scenario` in the YAML configuration.

```yaml
failFast:
maxNumberOfTests: 2
level: scenario
```

> **NOTE :** You can specify `failFast` at either the test level or scenario level, depending on your requirements. Both configurations will work, but can lead to unexpected results, only one should be used at a time.

For a deeper understanding of the HyperExecute YAML and its versatile features, we invite you to explore our dedicated [HyperExecute YAML documentation](/support/docs/deep-dive-into-hyperexecute-yaml/) page. This resource-rich section provides valuable insights to empower your testing endeavors.

>If you have more questions, then just give us a shout and we will answer them for you.
