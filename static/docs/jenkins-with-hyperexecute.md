# Jenkins Integration

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Jenkins is an open-source automation server that is easy to install and configure. It can also be used as a simple CI server or turned into a continuous delivery hub for any project.

You can now integrate HyperExecute with your Jenkins project to shorten your test cycles.


**How to Integrate HyperExecute with Jenkins**

To integrate HyperExecute with your Jenkins project, follow the steps listed below.

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**
Download or Clone the code sample from the TestMu AI GitHub repository to run the tests on the HyperExecute.

 View on GitHub


1. Log Into your Jenkins account. You will be directed to your Jenkins dashboard.




2. Select the project you want to integrate with HyperExecute. Or else, click on **+ New Item** on the left panel to create a new project.



3. After opening your project, click on **Configure**.



4. Click on **Build Steps**.




5. Add a new build step and select **Execute Shell** if you are running your tests on MacOS. Alternatively, select **Execute Windows** batch command if you want to run your test on Windows.



6. Copy and paste the following code snippet in the **Command** section of your Build Step. Click on **Save** to add your Build Step.

  - **For MacOS**:

```
curl -O https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute
chmod u+x hyperexecute
./hyperexecute --user <your_username> --key <your_access_key> --config hyperexecuteStatic.yaml
```
  - **For Windows**:

```
curl -O https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe
hyperexecute.exe -u <your_username> -k <your_access_key> -i <path_of_RELATIVE_PATH_OF_YOUR_YAML_FILE>
```

    **Note**: Replace the placeholder values in the code with your username and access key for HyperExecute.



7. Build your Jenkins project by clicking on **Build Now** and wait for a few minutes.



  After your build is successful, go to the [HyperExecute dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute) to monitor the progress of your tests.



  The **HyperExecute Dashboard**:



  Click on the job to find out more details about your tests.




You have successfully integrated your Jenkins project with HyperExecute.

## Sample Jenkins File

```bash
pipeline {
agent any

stages {
# Download and Run Hyperexecute stage (optional)
stage('Download & Run Hyperexecute') {
steps {
# Download Hyperexecute CLI for macOS (adjust for other OS)
sh name: 'Download Hyperexecute CLI', script: 'wget https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute'
# Grant execute permission to the downloaded binary
sh name: 'Make Hyperexecute executable', script: 'chmod +x hyperexecute'
# Run Hyperexecute with user credentials and configuration file
sh name: 'Run Hyperexecute Tests', script: './hyperexecute --user <your_username> --key <your_access_key> --config <RELATIVE_PATH_OF_YOUR_YAML_FILE_path>
}
}
}
}
```
