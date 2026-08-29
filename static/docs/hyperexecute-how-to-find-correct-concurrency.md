# How to Find the Correct Concurrency for my Job

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

This page explains how you can find what concurrency would be best suited for your test execution job.

The `concurrency` is one of the parameters in the HyperExecute Yaml. It indicates the number of concurrent tasks to run for processing all your test scenarios/test-cases. A HyperExecute job, thus triggered, creates as many threads(also known as tasks) as per the value provided in the `concurrency` key.

```bash
concurrency: 10
```

This is a **required** parameter in case you are using [autosplit](/support/docs/hyperexecute-test-splitting-and-multiplexing/#autosplit-strategy). However if you are using [matrix](/support/docs/hyperexecute-test-splitting-and-multiplexing/#matrix-multiplexing-strategy) the number of concurrent threads is automatically defined by the possible permutations and combinations of parameters give.

The platform automatically analyzes your usage and test cases and will guide you to increase the concurrency to obtain substantial time savings. You can find this information on the left side banner.

You can also see the overall concurrency trends using our analytics widgets. [Learn more](/support/docs/analytics-modules-resource-utilization/#concurrency-trends)

>If you have more questions, feel free to Chat with us.
