# KaneAI - Using Datasets on Test Manager

Datasets in KaneAI-TestMu AI allow you to manage and reuse input values for test cases efficiently. This guide explains how to create, edit, and manage these data sets while utilizing parameters to run test cases with a variety of inputs, improving flexibility and reducing manual data entry.

## Accessing Datasets within a Project
Navigate to the Parameters section within your project and review existing data sets under this section.
> **Note :** Parameters act as placeholders for data, enabling test cases to use varying inputs.

Every test case which uses parameters in KaneAI automatically generates a default data set during authoring. Example: A default data set might capture initial values like form submissions.
> Default Datasets are immutable in nature i.e. they cannot be modified.

## Creating and Editing Datasets
- To create a dataset, navigate to the Datasets section, click "Create Dataset," and define parameters and values as needed.
- For existing datasets, access the version history of a default dataset, create a copy, and edit the copied dataset to update or add values seamlessly.

## Adding Data to Datasets
Open the editable Dataset. Click on "**Add a Row After**". Enter your desired values (e.g., 5 or Mike).

### Autofill with AI

Alternatively, you can use the **Autofill with AI** option to automatically populate data fields. AI generates values based on the parameter's name, saving time and effort.

### Importing Data via CSV Files
Prepare your data set in CSV format. Use the Import Data feature in the data set editor and verify imported data and save the test case to ensure synchronization.

## Utilizing Version History
- **Version Tracking :** All changes to data sets are recorded.
- **Revert or Restore :** Easily revert to a previous version if needed.
- **Backup Assurance :** Ensure data integrity with a maintained history of edits.

## Executing Test Cases with Parameters
Combine multiple data sets with their respective parameters.
Execute test cases using these data sets to simulate diverse input scenarios.

## Video Explanation
