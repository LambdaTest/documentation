# KaneAI - Using Datasets on Test Manager

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Datasets in KaneAI-TestMu AI allow you to manage and reuse input values for test cases efficiently. This guide explains how to create, edit, and manage these data sets while utilizing parameters to run test cases with a variety of inputs, improving flexibility and reducing manual data entry.

## Accessing Datasets within a Project
Navigate to the Parameters section within your project and review existing data sets under this section.
> **Note :** Parameters act as placeholders for data, enabling test cases to use varying inputs.


Go to the Parameters section within your project to review existing datasets.



Every test case that uses parameters generates a default dataset during authoring, capturing initial values such as a form submission.
> Default datasets are immutable and cannot be modified.



## Create and Edit Datasets


Create a new dataset or edit a copy of the default one.

Alternatively, you can use the **Autofill with AI** option to automatically populate data fields. AI generates values based on the parameter's name, saving time and effort.



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
