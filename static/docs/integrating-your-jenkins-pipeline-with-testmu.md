# Integrating Your Jenkins Pipeline With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Jenkins Pipeline is also referred to as "Pipeline" offers a suite of plugins to help integrate your continuous delivery pipeline into Jenkins. Jenkins Pipeline does so with the help of Pipeline DSL(Domain Specific Language) syntax that facilitates easy modelling of even the most complex delivery pipeline.

## Prerequisites For Configuring Jenkins Pipeline With TestMu AI



1.  Jenkins 2.X or greater version.
2.  A Jenkins User with root access.
3.  Ensure you have the Pipeline plugin, although, it is displayed under the "suggested plugins" during the post-installation setup of Jenkins.
4.  **TestMu AI Authentication Credentials**

Be aware of your TestMu AI authentication credentials i.e. your TestMu AI username, access key and HubURL. You need to set them up as your environment variables. You can retrieve them from your **[TestMu AI automation dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com)** by clicking on the key icon near the help button.

*   For Linux/Mac:

```javascript
$ export LT_USERNAME= {YOUR_LAMBDATEST_USERNAME}
$ export LT_ACCESS_KEY= {YOUR_LAMBDATEST_ACCESS_KEY}
```

*   For Windows:

```javascript
$ set LT_USERNAME= {YOUR_LAMBDATEST_USERNAME}
$ set LT_ACCESS_KEY= {YOUR_LAMBDATEST_ACCESS_KEY}
```

## Setting Up Jenkins Pipeline



You can find the Jenkins file for the Pipeline [here](https://github.com/LambdaTest/nightwatch-selenium-sample/blob/master/Jenkinsfile) or you can find the code for the Pipeline below. Below is the code for the Jenkins Pipeline.

```javascript
#!/usr/bin/env groovy

node {
withEnv(["LT_USERNAME=Your LambdaTest UserName",
"LT_ACCESS_KEY=Your LambdaTest Access Key",
"LT_TUNNEL=true"]){

echo env.LT_USERNAME
echo env.LT_ACCESS_KEY

stage('setup') {

// Get some code from a GitHub repository
try{
git 'https://github.com/LambdaTest/nightwatch-selenium-sample.git'

//Download Tunnel Binary
sh "wget https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip"

//Required if unzip is not installed
sh 'sudo apt-get install --no-act unzip'
sh 'unzip -o LT_Linux.zip'

//Starting Tunnel Process
sh "./LT -user ${env.LT_USERNAME} -key ${env.LT_ACCESS_KEY} &"
sh  "rm -rf LT_Linux.zip"
}
catch (err){
echo err
}

}
stage('build') {
// Installing Dependencies
sh 'npm install'
}

stage('test') {
try{
sh './node_modules/.bin/nightwatch -e chrome,edge tests'
}
catch (err){
echo err
}
}
stage('end') {
echo "Success"
}
}
}
```

Refer to our [Github sample repository](https://github.com/LambdaTest/nightwatch-selenium-sample). Now, follow the below steps for the setup.

**Step 1:** Create a new project for Pipeline by going to Jenkins --> New Item.

 **Step 2:** Select the Pipeline.


  **Step 3:** Scroll down to Advanced Project Options. Paste the Code in the code pane or fetch it via SCM & hit the **Save** button.
   **Note:** To run on the tunnel, Either you can use LT_TUNNEL Environment variable to set the tunnelling capability or you can pass in the code. Instructions on the tunnel are written in Repo Readme file.

## Additional Links

- [Integrate TestMu AI With Jenkins Freestyle Project](/support/docs/integrating-testmu-with-jenkins-freestyle-project/)
- [Integrating TestMu AI Report With Jenkins Pipeline](/support/docs/integrating-testmu-report-with-jenkins-pipeline/)
