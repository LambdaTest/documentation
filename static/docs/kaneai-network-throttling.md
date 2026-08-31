# How to use Network Throttling in KaneAI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Network Throttling in KaneAI simulates different network conditions during mobile app test creation and execution, so you can see how your application behaves under varying bandwidth and latency profiles. You set it in **Advanced Settings** at session start and can change it at any point during a session.

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
| 2G | ↓ 30 - 50 kbps | ↑ 1 - 16 kbps | 500ms |
| 3G | ↓ 100 - 200 kbps | ↑ 50 - 64 kbps | 400ms |
| 3G+ | ↓ 3 - 5 mbps | ↑ 1 - 2 mbps | 100ms |
| 4G LTE | ↓ 13 - 15 mbps | ↑ 4 - 7 mbps | 70ms |
| 4G Advanced | ↓ 23 - 25 mbps | ↑ 9 - 12 mbps | 20ms |
| Custom | ~ kbps | ~ kbps | ~ ms |

## Limitations


Keep these limitations in mind:

- Offline Mode is supported only for iOS devices.

## Next Steps


Continue with these guides:

- [KaneAI Advanced Settings](/support/docs/kaneai-advanced-settings/)
- [KaneAI GPS Location](/support/docs/kaneai-gps-location/)
