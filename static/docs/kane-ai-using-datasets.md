# How to Use Datasets With KaneAI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

If parameters are the placeholders in your steps, datasets are what supply their values. Datasets in KaneAI group the input values a parameterized test case runs against, so you reuse them instead of re-entering data. For the parameters themselves, see [KaneAI Using Parameters](/support/docs/kane-ai-using-parameters/).

## Access Datasets in a Project


Go to the Parameters section within your project to review existing datasets.



Every test case that uses parameters generates a default dataset during authoring, capturing initial values such as a form submission.
> Default datasets are immutable and cannot be modified.



## Create and Edit Datasets


Create a new dataset or edit a copy of the default one.

- To create a dataset, go to the Datasets section, click **Create Dataset**, and define the parameters and values.
- To edit values, open the version history of a default dataset, create a copy, and edit the copy.



## Add Data to a Dataset


Open the editable dataset. Click **Add a Row After**, then enter your values (for example, 5 or Mike).



### Autofill With AI


Use the **Autofill with AI** option to populate data fields automatically. AI generates values based on each parameter's name.



### Import Data via CSV


Prepare your dataset in CSV format. Use the **Import Data** feature in the dataset editor, verify the imported data, and save the test case to synchronize it.



## Use Version History


Every dataset change is tracked, so you can restore an earlier state.

- **Version tracking:** all dataset changes are recorded.
- **Revert or restore:** revert to a previous version when needed.
- **Backup assurance:** a maintained history keeps data intact.



## Execute Test Cases With Datasets


Combine datasets with their parameters, then execute the test cases against those datasets to cover diverse input scenarios.



## Video Explanation


Watch datasets created and used to drive a test.





## Next Steps


Continue with these guides:

- [KaneAI Using Parameters](/support/docs/kane-ai-using-parameters/)
- [Test Manager](/support/docs/test-manager/)
