# Network Throttling

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

The Network Throttling feature in Kane AI enables users to simulate various network conditions during mobile app testing.
This document outlines how to configure and use network throttling in Kane AI for mobile test creation & execution.

## Set Network Throttling at Session Start


Follow these steps to apply a network profile when the session begins. See [Network profiles](#network-profiles) for the available options and their values.

### Step 1: Select a Network Profile


In the `Create App Test` section, open **Advanced Settings** and select a network profile.



**Result:** The session starts with the selected network profile applied to test execution.

### Step 2: Honor the Profile in the Authoring Session (optional)


To apply the same profile to the authoring experience, enable the `Honor network profile configuration` toggle.



**Result:** The authoring session runs under the selected profile, so you experience the application as it behaves on that network.


Enable this only when necessary. Low-bandwidth profiles slow down the authoring experience.



The network profile is always honored during test case execution and code generation. The honor toggle applies to authoring mode only.


## Change Throttling Mid-session


Follow these steps to switch the network profile while a session is running.

### Step 1: Open the Throttling Action


In the Actions tab, click `Change network throttling`, or type `/` to access it.



**Result:** The network profile options open.

### Step 2: Select a Profile


Select the network profile you want.



**Result:** The new profile applies, and the change is recorded as a step in the test case.

### Step 3: Edit the Throttling Step (optional)


To change the profile at that step, `Pause` the execution flow to enter the **Draft** state, then click `Edit Instruction` and select a different profile.



**Result:** The throttling step updates to the new profile.

## Change Throttling in Edit Mode


Before you edit a test case, you can set a network profile for the edit session. This profile overwrites the network configuration set during authoring.




The network profile for an edit session is determined by what you set when you start that session. If you set no profile, no throttling is applied. The profile from the authoring session does not carry into the edit session, because saving changes in Edit mode creates a new test case version. All executions, such as Test Runs and code generation, run on the latest saved version.


## Change Throttling in Test Runs


Every network throttling step is honored during execution. You can also set a profile to initialize the run.

### Step 1: Open Advanced Settings for the Run


Click **Advanced Settings** in the `Run with HyperExecute` section or the `Schedule Test Runs` section while executing a Test Run.



**Result:** The run-time configuration opens.

### Step 2: Select a Profile in Network Settings


Select the network profile in the `Network Settings` section.



**Result:** The run initializes with the selected profile. You can view where and when throttling commands run in the command logs on the App Automation page.



## Network Profiles


KaneAI provides the following network profiles. Select **Custom** to define your own bandwidth and latency values.

| Throttling Setting | Download Speed |  Upload Speed | Latency |
| ---------  | ------------ | ----------- | ------------ |
| 2G | ↓ 30 - 50kbps | ↑ 1 - 16 kbps | 500ms |
| 3G | ↓ 100 - 200kbps | ↑ 50 - 64 kbps | 400ms |
| 3G+ | ↓ 3 - 5mbps | ↑ 1 - 2 mbps | 100ms |
| 4G LTE | ↓ 13 - 15mps | ↑ 4 - 7 kbps | 70ms |
| 4G Advanced | ↓ 23 - 25mbps | ↑ 9 - 12 mbps | 20ms |
| Custom | ~ kbps | ~ kbps | ~ ms |

You can create session-specific throttling by selecting the `Custom` option.


Keep these limitations in mind:

### Selecting Network Setting
- Go to `Advanced Settings` in the `Create App Test` section to add Network Throttling setting in advance.

You can select desired Network setting & your session will start with that setting.


Continue with these guides:

- Click on the `Honor network profile configuration` toggle.

This will apply network setting in the Authoring session too, allowing you to experience how your Application works under that particular Network setting.

 Recommended to use this setting only if its absolutely necessary, as this will hamper Authoring experience in low Network Bandwidth settings.

 Network setting will always be Honored while executing the Test Case & code generation, the Honoring option is applicable for Authoring mode only.

## Changing Network Throttling setting mid session :
To change Network Throttling setting in between the Authoring session:

- Click on the `Change network throttling` present in Actions Tab, or type `/` to access it.

- Then select desired Network setting.

A change in Network throttling setting is also condidered as a step in the Test Case.

You can edit the Network Throttling setting at that particular step too. To do that:

- `Pause` the execution flow to enter into the **Draft** state.
- Click on the `Edit Instruction` button & change the Network setting.

## Changing network throttling in Edit Test Steps mode
Before you begin editing a test case , you can set up network throttling. This Edit mode specific setting will overwrite the network configuration previously established during the app session's initialization in Authoring mode.

 The network throttling for your Editing session is determined by what you set when you start that session. If you don't specify any network settings for the Edit mode, no throttling will be applied. The network settings mentioned while initializing the Authoring session will not be applicable in the Edit session, as saving changes in the Edit mode creates a new test case version.

 And all Test Case executions, like Test Runs and code generation, are performed on the test case's latest saved version.

## Network Throttling in Test Runs
While executing your Test Cases every Network Throttle step will be honoered. In addition to the Authoring & Editing mode, you can also select the Network setting to initialize your session with :

- Click on `Advanced Configurations` present in the `Run with HyperExecute` section or `Schedule Test Runs` section while executing a Test Run.

- Network Throttling setting is available in the `Network Settings` section.

- You can view where & when Network Throttling commands are executed in the command logs present in the App Automation page.

 Offline Mode is supported only for iOS devices.
