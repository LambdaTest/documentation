# Network Throttling

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

The Network Throttling feature in Kane AI enables users to simulate various network conditions during mobile app testing.
This document outlines how to configure and use network throttling in Kane AI for mobile test creation & execution.

Following are the Network Throttling settings available:

| Throttling Setting | Download Speed |  Upload Speed | Latency |
| ---------  | ------------ | ----------- | ------------ |
| 2G | ↓ 30 - 50kbps | ↑ 1 - 16 kbps | 500ms |
| 3G | ↓ 100 - 200kbps | ↑ 50 - 64 kbps | 400ms |
| 3G+ | ↓ 3 - 5mbps | ↑ 1 - 2 mbps | 100ms |
| 4G LTE | ↓ 13 - 15mps | ↑ 4 - 7 kbps | 70ms |
| 4G Advanced | ↓ 23 - 25mbps | ↑ 9 - 12 mbps | 20ms |
| Custom | ~ kbps | ~ kbps | ~ ms |

You can create session-specific throttling by selecting the `Custom` option.

## How to Set Up Network Throttling ?
For your mobile app test session, network throttling can be set up in advance by applying those settings from the start of the Authoring session, or you can modify them at any point during the session.

### Selecting Network Setting
- Go to `Advanced Settings` in the `Create App Test` section to add Network Throttling setting in advance.

You can select desired Network setting & your session will start with that setting.

### Applying the Network Profile

KaneAI always honors the configured network throttling profile during authoring and test case execution. The **Honor network profile configuration** checkbox has been removed; no additional setting is required to apply the profile.

Low-bandwidth profiles also affect your authoring session, so application actions may take longer. Select **No Throttling** when you do not need to simulate a restricted network connection.

## Changing Network Throttling setting mid session :
To change Network Throttling setting in between the Authoring session:

- Click on the `Change network throttling` present in Actions Tab, or type `/` to access it.

- Then select desired Network setting.

A change in the network throttling profile is recorded as a step in the test case. The selected profile applies during authoring and when that step executes in a test run.

You can edit the Network Throttling setting at that particular step too. To do that:

- `Pause` the execution flow to enter into the **Draft** state.
- Click on the `Edit Instruction` button & change the Network setting.

## Changing network throttling in Edit Test Steps mode
Before you begin editing a test case , you can set up network throttling. This Edit mode specific setting will overwrite the network configuration previously established during the app session's initialization in Authoring mode.

 The network throttling for your Editing session is determined by what you set when you start that session. If you don't specify any network settings for the Edit mode, no throttling will be applied. The network settings mentioned while initializing the Authoring session will not be applicable in the Edit session, as saving changes in the Edit mode creates a new test case version.

 And all Test Case executions, like Test Runs and code generation, are performed on the test case's latest saved version.

## Network Throttling in Test Runs
During test case execution, KaneAI always honors the configured network throttling profile and every Network Throttle step. In addition to the Authoring & Editing mode, you can also select the Network setting to initialize your session with :

- Click on `Advanced Configurations` present in the `Run with HyperExecute` section or `Schedule Test Runs` section while executing a Test Run.

- Network Throttling setting is available in the `Network Settings` section.

- You can view where & when Network Throttling commands are executed in the command logs present in the App Automation page.

 Offline Mode is supported only for iOS devices.
