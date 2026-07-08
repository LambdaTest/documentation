# Version 0.0.1 - Beta

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

### Proximity-Based Hub Region Allocation for Code Generation
We’ve introduced proximity-based hub region allocation to optimize code generation performance by selecting the nearest hub region to the user. This enhancement ensures faster execution and reduced latency during test script generation.

### Proximity-Based VM Allocation for Web Tests
KaneAI now allocates virtual machines (VMs) for web tests based on proximity, improving test execution speed and stability by choosing the closest VM location to the user.

### Removed Auto Trigger of Code-Export on Test Failures or Queued Instructions
The automatic triggering of code export has been removed when instructions in the test are either failed or queued. This update provides users with better control over the export process and avoids unnecessary actions during troubleshooting.

### Improved Stability in Manual Interaction with Multiple XPaths
We've enhanced manual interactions by allowing the use of multiple XPaths, providing more stability and accuracy when interacting with elements on web pages.

### Code Generation
Addressed multiple issues in the code generation process, including:

- Click interception problems
- Websites failing to load correctly
- Failures in identifying and interacting with XPaths

### Document and Element Scroll Fix in Manual Interaction
Fixed a bug causing issues with scrolling documents and elements during manual interactions, ensuring smoother navigation and interaction within the testing interface.
