# Test Artifacts Management

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

HyperExecute now allows you to access your _Artifacts_ directly from the HyperExecute UI and create URLs for them.

## Navigating Artifacts

To view or download your Artifacts, click the **Artifacts** button.

### For a Single file

If you only have one file as an _Artifact_, then a preview of the file will be opened on your browser.

### For Multiple files

If you have multiple files as an _Artifact_, then you will get an option to download all the files directly.

## Managing Test Artifacts URL

To make the most of this feature, follow the steps below.

> **Prioritize**: To access your _Artiacts_ for a particular _Job ID_, they must have a name.

### 1. Constructing the URL

The URL to view an _Artifact_ in a standard job is:

`https://hyperexecute.lambdatest.com/artifact/view/?artifactName=`

- Insert the **_Job ID_** of your test and the name of your _Artifact_ in place of the `` and `` placeholder values.

- This URL will take you to a page where you can access the _Artifact_ and its contents.

For example, if you want to access the _Artifacts_ for a job with _Job ID_: `2d835a95-e7ea-4ea7-83e8-608c2f71d95c`, and the name of your _Artifact_ is `ExecutionSnapshots`, then your URL should be:

`https://hyperexecute.lambdatest.com/artifact/view/`**2d835a95-e7ea-4ea7-83e8-608c2f71d95c**`?artifactName=`**ExecutionSnapshots**

### 2. Additional Filters

You can also use this feature to cycle through the files in your _Artifacts_.

**1. `filter=*.log`:** You can filter through all of your files by adding this at the end of your URL. However, you will have to insert the entire path of your _Artifacts_ folder or the names of the folder you want to use the filter in.

- For example, if you want to filter through the `.html` files of a folder called `site` with the path `/target/site/`, for the same job that was used above, then your URL will be:

`https://hyperexecute.lambdatest.com/artifact/view/2d835a95-e7ea-4ea7-83e8-608c2f71d95c?artifactName=ExecutionSnapshots&`**filter=target/site/*.html**

**2. `view=flat`:** If you add this at the end of the Artifact URL, then you will be able to view your artifacts in a list instead of a tree structure.

- For example, if you want to view the results of the filter used above in a flat manner, then your URL will be:

`https://hyperexecute.lambdatest.com/artifact/view/2d835a95-e7ea-4ea7-83e8-608c2f71d95c?artifactName=ExecutionSnapshots&filter=target/site/*.html&`**view=flat**

**3. `&taskId=`:** If you want to access the Artifacts for a particular task, then add this in your URL.

- For example, if you want to view the _Artifacts_ for a task with _Task ID_ `df8604cf-7af2-48b6-903d-786028078640` for the same job that was used above, then your URL will be:

`https://hyperexecute.lambdatest.com/artifact/view/2d835a95-e7ea-4ea7-83e8-608c2f71d95c?artifactName=ExecutionSnapshots&`**taskId=2731df9f-bc9f-4fbc-85c4-fe675aeffeb7**
