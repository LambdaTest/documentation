# Modules - Creation and Management

Tired of recreating the same test steps for repetitive testing flows? With Modules in TestMu AI Test Manager you can streamline your workflow by reusing pre-existing test steps across multiple test cases. This powerful feature enables you to encapsulate redundant testing flows into modular, reusable components, saving time and ensuring consistency across your projects.

## 1.1 Module Creation from existing Test Steps

To export test steps as a module,
- Navigate to the Test Steps page of your desired Test Case.
- Select the test steps you wish to include in the module and click the `Create a module` button.

 Only **sequential** steps can be clubbed to create a module.

- Clearly define your new module by entering a concise name and a detailed description. This will help you easily identify and understand its purpose later on.

## 1.2 Create Module from Modules section

### Step 1: Go to Modules page

- Click on `Modules` button in the navbar to go to the [Modules listing page](https://www.testmuai.com/login/?redirectTo=https://test-manager.lambdatest.com/module).
- Click on `Create a Module`.

 When you duplicate a module, its steps, description, and linked projects will also be duplicated.

### Step 2: Create New Module

- Click on the `Create a Module` button.
- Define your module and outline the steps you want to include.

Don't worry if you don't have all the details now; you can always edit or add them later.

 You must provide **Module name** & create at **least one test step** to be able to create a new module.

 Keep in mind Modules can't be deleted but only updated after creation.

## 2. Update Module
Modules support duplication, editing and versioning; however, a new version is only triggered when specific fields are edited.
- Add a step by clicking on `Add Step` or update a step through edit icon.
- Click on `update` on top right to save changes.

 Only **Test Step** or **Expected Outcome** updation will create a new version of the module.

## 3. Module Versions

### Revert to previous Version
- Click on `revert` to revert your module to that version. Reverting to a previous version will create a new version in your module's history, ensuring a clear audit trail of all changes.

### Compare Versions
Compare your version history side-by-side to easily identify differences and track changes between various iterations of your module.

- Click on `Compare` & select the version to compare with.

You will be redirected to the Version Comparison page where you can track changes:

Project linking is only added for manual tests in test cases. Hence, modules linked to a particular project are only available to be added in a manual test case. However, for KaneAI test cases, all modules in all projects will be available for selection.
