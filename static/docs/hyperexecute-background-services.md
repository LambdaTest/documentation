# Background Services

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

## Frequently Asked Questions

Is the service intended to operate within the same Virtual Machine or externally? Yes, the service will run within the same Virtual Machine.

What is the service's commencement and cessation schedule? It initiates the execution of all background commands concurrently with the pre-stage and continues until the completion of post-run command execution.

Will the Database, for example, run on a single VM and be accessible for testing on other VMs? No, the background service can only be accessed from within the same VM.

Will the identical set of background services be initiated within every VM? Yes, if the same set of background services, such as **`npm run server`**, are establishing HTTP servers on the same port, it is likely that one of the commands will encounter a binding issue and fail.
