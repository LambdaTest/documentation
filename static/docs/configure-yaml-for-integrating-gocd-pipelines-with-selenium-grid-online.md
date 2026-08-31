# Configure YAML For Integrating GoCD Pipelines With TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Through our previous document, you were able to integrate GoCD pipelines with TestMu AI, and executed your first Selenium testing script through GoCD on TestMu AI. However, in our previous chapter we ran the test by copying the YAML from the cloned [repository for GoCD](https://github.com/LambdaTest/nightwatch-gocd-sample). This topic will teach you how you can configure your own YAML through GoCD and then integrate your pipeline with our online Selenium Grid.

> **Note:** If you are just getting started with GoCD then make sure to visit our documentation to [integrate TestMu AI with GoCD](/docs/gocd-integration-with-testmu/).

## Configuring YAML through GoCD


**Step 1:** Visit your GoCD dashboard and use Pipeline as a code.



**Step 2:** By default, the configuration language will be set as YAML. Under Part 1, mention the link to our [GitHub repository for GoCD](https://github.com/LambdaTest/nightwatch-gocd-sample) and test the connection.



**Step 3:** Now, in Part 2, make sure to label your Pipeline with a name of your choice. Here we have labelled it as Sample-GoCD-Pipeline. Similarly, in Part 3 for Stage details, provide a label for your Staging environment.



**Step 4:** In Part 4 i.e. Job & Tasks, you need to specify a Job name as per your choice and enter the below commands.

```
npm install
./node_modules/.bin/nightwatch -e chrome
```



**Step 5:** Under Advanced setting, you need to specify your TestMu AI authentication credentials as the environment variables.



**Step 6:** You will find the YAML configuration file generated over the right side panel. In rare cases, if it doesn’t then you need to select the configuration language to first JSON, and then select YAML again. Now, if you scroll to bottom you will find a section to "Add Your Pipeline as Code Definitions to Your SCM Repository". Click on the button to "Download Config".



Now, you just need to execute the job like we did in the previous chapter when we [integrated GoCD with TestMu AI](/docs/gocd-integration-with-testmu/). That is all you need to do if you wish to configure a private YAML file before you run your Selenium testing scripts over TestMu AI Selenium Grid.
