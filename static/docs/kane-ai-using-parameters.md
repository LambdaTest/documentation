# KaneAI - Using Parameters

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

This guide provides a detailed walkthrough for utilizing parameters in KaneAI to streamline test case management and execute tests with various data inputs. By leveraging data parameters, testers and developers can manage configurations effortlessly. Follow the step-by-step instructions below for successful implementation.

## Key Features of Parameters in KaneAI
- **Dynamic Data Input :** Use parameters to define and input test data dynamically during test execution.
- **Multiple Configurations :** Simplify the execution of tests with different data sets.
- **Seamless Test Management :** Centralized management of parameters improves efficiency and reduces redundancy.

### Seed Value and test case values

The **Seed Value** is defined with a global parameter in **KaneAI** > **Variables** > **Parameters**. It prepopulates a new parameter column when that parameter is first used in a test case. The test case stores its own value in row 1 of its Default Dataset, so you can use the same parameter with different values in different test cases without changing the global Seed Value.

If a Dataset cell is empty, KaneAI uses the empty value; it does not fall back to the Seed Value.

## Import parameters from a CSV

When you have many parameters to create, such as the columns of a test data sheet, import them from a CSV file instead of creating them one at a time. Each column in the file becomes one parameter.

### Prepare the CSV file

Put each parameter's name in row 1 and its Seed Value in row 2:

```csv
user_name,email,city,plan
John Doe,john.doe@example.com,Bengaluru,Pro
```

- Each import takes one `.csv` file, up to 5 MB and 500 columns. To import an Excel sheet, save it as CSV first.
- Only rows 1 and 2 are read. A value in row 3 or below doesn't become a Seed Value, even if row 2 of that column is empty.
- Parameter names can contain only letters, digits, and underscores. Names that don't follow this rule aren't corrected for you, so fix them in the file before you upload it.

### Import the parameters

1. Go to **KaneAI** > **Variables** > **Parameters**.
2. Open the dropdown next to **Create new** and select **Import CSV**.
3. Drag your file into the panel, or click **Browse CSV file**. To start from a template, click **Download Sample CSV**.

4. Review the preview, which lists every column in the file and what will happen to it. You can search by name and filter by outcome. Nothing is created until you confirm, so you can still cancel, or go back and upload a corrected file.

5. Click **Import Parameters**. The new parameters are added to the Parameters list, and a confirmation shows how many were imported.

If every column already exists or is excluded, there is nothing to import and **Import Parameters** stays disabled.

Imported parameters work the same way as parameters you create one at a time. To load the rest of the rows from your file as test data, see [Importing Data via CSV Files](/support/docs/kane-ai-using-datasets/#importing-data-via-csv-files).

### What happens to each column

| Preview outcome | When it applies | Result |
|---|---|---|
| **Will be imported** | The column has a valid new name and a Seed Value. | A new parameter is created. |
| **Already exist & skipped** | A parameter with the same name already exists. Letter case is ignored, so `AGE` matches `age`. | The column is skipped. The existing parameter and its Seed Value don't change. |
| **Excluded from import** | The column breaks one of the rules below. | No parameter is created. |

A column is excluded from the import if:

- Its name is empty, or contains spaces, symbols, or accented letters. Spaces before or after the name also count.
- Its name repeats an earlier column in the file. Letter case is ignored, and the first column is the one imported.
- Row 2 of the column is empty.
- Its value in row 2 is longer than 255 characters.

To include an excluded column, fix it in the CSV and upload the file again.

### Import an updated file

Each import is a one-time copy of the file, so later changes to the CSV don't update your parameters. When your sheet gains new columns, upload it again: columns you already imported are skipped, and only the new ones are created. To change the Seed Value of an existing parameter, edit it in the Parameters list.

### Keep sensitive values out of the file

Parameters are visible to everyone in your organization, and the import doesn't flag columns that look sensitive. Remove passwords, tokens, and similar values from the CSV, and store them as [Secrets](/support/docs/kane-ai-secrets/) instead.

## Define Parameters in a Web or App Agent Test
- Navigate to the specific web agent test URL and configure the test to accept input parameters.

## Create a parameter in a test
- Confirm that parameters are already defined in the system. To add a new parameter, use one of the following methods to define the parameter:
  - Type a **`slash (/)`** and select the Parameter option.
  - Click the Plus icon and choose the Parameter icon.

Click **Create Parameter** to save.

## Reference the parameter in test step
Reference any parameter using **dollar-curly braces syntax** (e.g.,`${phone_number}`). Enter the name in its designated input field.

### Set or change the value while authoring

When you insert a parameter into a test step, you can enter the value to use for that test case. You can also pause the authoring session, click the parameter in the step, and update it in the **Parameter Value** dialog. Enter **New value for this test case** and click **Save**. This replaces row 1 for that parameter in the test case's Default Dataset; it does not change the global Seed Value or another test case's value.

To run the same test case with further values, add rows to a Dataset and select it for the run. See [Using Datasets](/support/docs/kane-ai-using-datasets/).

## From a Manual Interaction step

You can also convert a hard-coded value in a Manual Interaction step into a Parameter directly, without deleting or re-recording the step. This flow is available on both **Desktop** and **Mobile App** sessions, and works while the session is **Paused**, where step editing is available.

1. Open the recorded Manual Interaction step.
2. **Select the portion** of the instruction text you want to parameterize (for example, highlight `test.com`).

3. In the **Convert as** popover that appears, switch to the **`{$}` Parameter** tab.
4. Either pick an existing parameter from the searchable list, or click **`+` Create Parameter** to define a new one inline.
5. The selected text in the step is replaced with the parameter reference (for example, `{{search_query}}`). The parameterized step is now ready for data-driven execution.

This flow is only supported for `Click` and `Type` commands. For the full Convert as popover behavior across Parameters, Variables, and Secrets, see [Creating variables from a Manual Interaction step](/support/docs/kane-ai-using-variables/#from-a-manual-interaction-step).

## Test Summary Page
Upon completing the test, review the Test Summary Page, where all utilized parameters are clearly displayed, and the corresponding generated code is readily available for seamless integration into future test scenarios.

## Using parameters for test runs

### Step 1: Navigate to Test Project
Open the Test Project dashboard and go to the **Test Run** section.

### Step 2: Create a New Test Run
- Click **Create New Test Run** and name it (e.g., parameters test run).
- Select the KaneAI-generated test cases.
- Optionally, add a description or relevant tags.
- Click **Create Test Run**.

### Step 3: Add Test Cases and Data Sets
- Select and add the desired test cases to the run.
- Specify configurations (e.g., Windows 10 Chrome).
- Attach the required data sets for the test run.

### Step 4: Apply Data Sets
- Ensure the data sets containing necessary parameters are pre-filtered and accessible.
- Click **Apply** to confirm the Dataset selection.

### Step 5: Save and Prepare for Execution
- Save the test run with the selected parameters and Datasets. The system will create test instances ready for execution in a hybrid environment.

### Step 6: Execute Tests with Parameters
Utilize the parameters to run your test cases with different data sets and inputs. You can manage and monitor execution using the TestMu AI Test Manager interface.

## Video Explanation
