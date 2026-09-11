---
id: hyperexecute-accelq-integration
title: Accelq Integration with HyperExecute
hide_title: true
sidebar_label: Accelq Integration
description: Leverage TestMu AI's cloud mobile devices to run automation testing using Accelq Studio.
keywords:
  - accelq studio
  - integraion
  - automation easy
  - no code automation
  - no code mobile automation
  - gui based mobile automation
  - real devices
url: https://www.testmuai.com/support/docs/hyperexecute-accelq-integration/
site_name: TestMu AI
slug: hyperexecute-accelq-integration/
canonical: https://www.testmuai.com/support/docs/hyperexecute-accelq-integration/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "ACCELQ Integration",
          "item": `${BRAND_URL}/support/docs/hyperexecute-accelq-integration/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-accelq-integration/"
    },
    "headline": "Accelq Integration with HyperExecute",
    "description": "Leverage TestMu AI's cloud mobile devices to run automation testing using Accelq Studio.",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-accelq-integration/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "HyperExecute",
    "keywords": [
      "accelq studio",
      "integraion",
      "automation easy"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "Sample scripts in ACCELQ; Ensure that you have integrated ACCELQ with TestMu AI Cloud Selenium Grid; Parameters- accelq url, userId, apiKey, tenant code, Job Id; Agent.properties file for you configured agent with TestMu AI.",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 3: Execute HyperExecute job using the command",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "./hyperexecute --config hyperdemo.yaml -u <lambdausername> -k <lambda accesskey>"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Sample File",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "# name of the agent, which will appear in your Run modal\n# must be a unique name across all projects in the tenant\n# only accepts alphabets, numeric and underscore (_)\n# Maximum length 32 characters.\nagent_name = <Agent name by which JobID was created>\n\n# Port on which the Agent should run. Leave it blank to use an available port dynamically\n# agent_port=5000\n\n# ACCELQ server url along with port number (if applicable)\naccelq_server_url = <Accelq URL>\n\n# ACCELQ user id you use for login\nuser_id = <Accelq userID>\n\n# API key (available in the profile menu under the auth properties once you login to ACCELQ)\napi_key = <Accelq key>\n\n# Scope of the agent, which defines visibility (User, Project or Tenant)\n# \"User\" Agent is accessible only for the User starting this Agent\n# \"Project\" scope allows sharing the Agent for all Project users\n# \"Tenant\" scope allows all users on the Tenant to use this Agent\nagent_type = User\n\n# Project codes where this Agent should be visible, separated with a comma\n# Applicable only when scope of the Agent is set to \"Project\"\n# Project Code can be found in the profile menu under the auth properties once you login to ACCELQ\n# Example: project_code=proj1,proj2,proj3\n# project_code=\n\n# Web Provider Types - LOCALHOST, SAUCE_LABS, BROWSER_STACK, PERFECTO, LAMBDATEST, HEADSPIN, DIGITAL_AI\n# Refer to documentation for applicable properties for different providers\nweb_provider_type = LAMBDATEST\n# web_provider_type=LOCALHOST\nweb_provider_username = <LambdaTest Username>\nweb_provider_password = <LambdaTest AccessKey>\n# web_provider_cloud_name=\n# web_provider_security_token=\n# web_provider_serverUrl=\n# web_provider_hostname=\n# web_provider_port=\n# web_provider_data_center_endpoint=\n\n# Mobile Provider Types - LOCALHOST, SAUCE_LABS, BROWSER_STACK, PERFECTO, LAMBDATEST, HEADSPIN, DIGITAL_AI\n# Refer to documentation for applicable properties for different providers\nmobile_provider_type = LOCALHOST\n# mobile_provider_username=\n# mobile_provider_password=\n# mobile_provider_cloud_name=\n# mobile_provider_security_token=\n# mobile_provider_serverUrl=\n# mobile_provider_hostname=\n# mobile_provider_port=\n# mobile_provider_data_center_endpoint=\n\n# Browserstack Local Settings\n# auto_start_bs_local=true\n# browserstack_local_key=\n\n# Number of concurrent jobs to allow\n# Any invalid number will be considered as one concurrent job\nnum_concurrent_jobs = 2\n\n# Number of parallel test cases to execute in a given job\n# Any invalid number will be considered as single thread\nnum_parallel_tc_per_job = 4\n\n# Proxy settings for HTTP - uncomment following lines if applicable\n# http_proxy_host=\n# http_proxy_port=\n# http_proxy_user=\n# http_proxy_password=\n# http_proxy_nonproxyhosts=\n\n# Proxy settings for HTTPS - uncomment following lines if applicable\n# https_proxy_host=\n# https_proxy_port=\n# https_proxy_user=\n# https_proxy_password=\n# https_proxy_nonproxyhosts=\n\n# SSL Certificate Verification\n# ssl_cert_verification=true\n\n# Appuim URL\nappium_url = http://localhost:4723\n\n# TE Settings\n# te_start_server=false\n# te_server_port=9095\n\n# Indicates if the web driver should be auto-updated based on the browser version on the agent machine (local, server_side, off)\n# local       : Fetch driver jars directly from the Agent host\n# server_side : Fetch driver jars from ACCELQ server connection\n# off         : Do not auto-update the driver jars\n# web_driver_auto_update=local\n\n# Port numbers to use for virtualization servers\n# Leave this blank to use ports dynamically. If not, give the range with comma separation (e.g. 9000, 10000)\n# Number of available ports should be at least twice the number of concurrent threads running at any point\n# virtualization_ports_range=\n\n# Experimental Flags (Internal use only)\nagent_host = LT-MBP-194\ntenant_code = poc\n# work_root = file path of agent\n# Available Sharing Types: USER (0) or Shared (1)\nsharing_type = 0\n# cleanup_run_folders=true\n# virtualization_debug_log=true\n# run_re_trigger_timeout=30\n# tc_stmt_line_max_count=100000\n# sync_runtime=true\n# force_sync_runtime_at_startup=false\n# Available Image Qualities: high, medium or low\n# image_quality=high\n\n# Extra Flags\nprovider_type = LAMBDATEST\nprovider_password = <LambdaTest AccessKey>\nprovider_username = <LambdaTest Username>"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Single YAML File",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "version: 0.1\nuser: <Lambdatest Username>\nkey: <Lambdatest AccessKey>\nglobalTimeout: 150\ntestSuiteTimeout: 150\ntestSuiteStep: 150\n\nautosplit: true\nrunson: win\nconcurrency: 1\n\npre:\n  - move agent.properties C:\\Users\\ltuser.ghtestVM\\Downloads\\acc_installer_win\\ACCELQAgent\\AgentInstances\\agent\\agent.properties #move your agent file to hyperex machines agent folder\n  - acc start # start accelq agent on hyperexecute machines\n\ntestDiscovery:\n  type: raw \n  mode: remote\n  command: echo test\n\ntestRunnerCommand: node $env:ACCELQ --url \"https://poc.accelq.io\" --userID \"<Accelq UserID>\" --apiKey \"<Accelq API Key>\" --tenantCode \"poc\" --jobID \"<Accelq jobID>\"; C:\\Users\\ltuser.ghtestVM\\Downloads\\acc_installer_win\\ACCELQAgent\\Dashboard\\AQAgentControllerShutdown.exe;"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Parallel YAML File",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "version: 0.1\nglobalTimeout: 150\ntestSuiteTimeout: 150\ntestSuiteStep: 150\n  \nrunson: win\n\nmatrix: \n  jobID: [\"<jobID 1>\",\"<jobID 2>\"]\n  agent: [hyper1\\agent.properties,hyper2\\agent.properties]\n\nexclusionMatrix: \n  - jobID: ['<jobID 1>'] \n    agent: [hyper2\\agent.properties] \n  - jobID: ['<jobID 2>'] \n    agent: [hyper1\\agent.properties] \n\npre:\n  - move agent.properties C:\\Users\\ltuser.ghtestVM\\Downloads\\acc_installer_win\\ACCELQAgent\\AgentInstances\\agent\\agent.properties #move your agent file to hyperex machines agent folder\n  - acc start # start accelq agent on hyperexecute machines\n\n\ntestSuites: \n  - node $env:ACCELQ --url \"\" --userID \"\" --apiKey \"\" --tenantCode \"poc\" --jobID $jobID;"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

# ACCELQ Integration with HyperExecute

ACCELQ is a cloud-based, continuous testing platform for functional and API testing needs. It is a codeless test automation tool that allows users to create and execute tests without writing any code. ACCELQ uses a natural language abstraction to generate Java code, which makes it easy to learn and use.

## Integrate Accleq with HyperExecute
***
ACCELQ is the most powerful software testing tool to achieve Codeless test automation and accelerate continuous testing.

### Prerequisites
---
- Sample scripts in ACCELQ
- Ensure that you have integrated [ACCELQ with <BrandName />](/support/docs/accelq-integration/) Cloud Selenium Grid 
- Parameters- accelq url, userId, apiKey, tenant code, Job Id
- Agent.properties file for you configured agent with <BrandName />


### Steps to Integrate
---

**Step 1:** Copy your local `agent.properties` file from `<directory path>` to root folder of your HyperExecute project.

<!-- **Step 2:** Download ACCELQ Node runner in root folder of your HyperExecute project and unzip the file.

> You can download the Node Runner from [here](https://accelq.s3.amazonaws.com/releases/plugins/6.0/accelq_ci_cd.tar.gz) -->

**Step 2:** Update your YAML file with your account credentials.

**Step 3:** Execute HyperExecute job using the command:

```
./hyperexecute --config hyperdemo.yaml -u <lambdausername> -k <lambda accesskey>
```


## Additional Details
### Where to Find the Parameters?

#### ACCELQ - URL, User-ID, API key, Tenant Code
<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/accelq/accelq-1.webp').default} alt="accelq-dashboard"  width="1920" height="868" className="doc_img"/>

#### How to create a Job ID?

**Step 1:** Create an LT profile with with the below configuration and save it
<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/accelq/accelq-2.webp').default} alt="accelq-dashboard"  width="1920" height="868" className="doc_img"/>

**Step 2:** Create a [CI job](https://support.accelq.com/hc/en-us/articles/360016077871-How-do-I-create-a-job-that-I-can-invoke-from-CI-tool#:~:text=Step%201%3A%20On%20the%20ACCELQ,Click%20on%20%22Create%20Job%22) with the same profile and agent which has <BrandName /> configured with it.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/accelq/accelq-3.webp').default} alt="accelq-dashboard"  width="1920" height="868" className="doc_img"/>

**Step 3:** Copy the Job ID
<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/accelq/accelq-4.webp').default} alt="accelq-dashboard"  width="1920" height="868" className="doc_img"/>

### Agent.properties file
Agent.property file is a type of file that gets generated when you configures the agents from the ACCELQ to the <BrandName />.

- You can configure your [<BrandName /> from ACCELQ Agent Dashboard](/support/docs/accelq-integration/#integrating-lambdatest-from-accelq-agent-dashboard)
- You can also find the same at the location `(ACCELQAgent/AgentInstances/<agent folder>/agent.properties)` in your local system.

#### Sample File
```bash
# name of the agent, which will appear in your Run modal
# must be a unique name across all projects in the tenant
# only accepts alphabets, numeric and underscore (_)
# Maximum length 32 characters.
agent_name = <Agent name by which JobID was created>

# Port on which the Agent should run. Leave it blank to use an available port dynamically
# agent_port=5000

# ACCELQ server url along with port number (if applicable)
accelq_server_url = <Accelq URL>

# ACCELQ user id you use for login
user_id = <Accelq userID>

# API key (available in the profile menu under the auth properties once you login to ACCELQ)
api_key = <Accelq key>

# Scope of the agent, which defines visibility (User, Project or Tenant)
# "User" Agent is accessible only for the User starting this Agent
# "Project" scope allows sharing the Agent for all Project users
# "Tenant" scope allows all users on the Tenant to use this Agent
agent_type = User

# Project codes where this Agent should be visible, separated with a comma
# Applicable only when scope of the Agent is set to "Project"
# Project Code can be found in the profile menu under the auth properties once you login to ACCELQ
# Example: project_code=proj1,proj2,proj3
# project_code=

# Web Provider Types - LOCALHOST, SAUCE_LABS, BROWSER_STACK, PERFECTO, LAMBDATEST, HEADSPIN, DIGITAL_AI
# Refer to documentation for applicable properties for different providers
web_provider_type = LAMBDATEST
# web_provider_type=LOCALHOST
web_provider_username = <LambdaTest Username>
web_provider_password = <LambdaTest AccessKey>
# web_provider_cloud_name=
# web_provider_security_token=
# web_provider_serverUrl=
# web_provider_hostname=
# web_provider_port=
# web_provider_data_center_endpoint=

# Mobile Provider Types - LOCALHOST, SAUCE_LABS, BROWSER_STACK, PERFECTO, LAMBDATEST, HEADSPIN, DIGITAL_AI
# Refer to documentation for applicable properties for different providers
mobile_provider_type = LOCALHOST
# mobile_provider_username=
# mobile_provider_password=
# mobile_provider_cloud_name=
# mobile_provider_security_token=
# mobile_provider_serverUrl=
# mobile_provider_hostname=
# mobile_provider_port=
# mobile_provider_data_center_endpoint=

# Browserstack Local Settings
# auto_start_bs_local=true
# browserstack_local_key=

# Number of concurrent jobs to allow
# Any invalid number will be considered as one concurrent job
num_concurrent_jobs = 2

# Number of parallel test cases to execute in a given job
# Any invalid number will be considered as single thread
num_parallel_tc_per_job = 4

# Proxy settings for HTTP - uncomment following lines if applicable
# http_proxy_host=
# http_proxy_port=
# http_proxy_user=
# http_proxy_password=
# http_proxy_nonproxyhosts=

# Proxy settings for HTTPS - uncomment following lines if applicable
# https_proxy_host=
# https_proxy_port=
# https_proxy_user=
# https_proxy_password=
# https_proxy_nonproxyhosts=

# SSL Certificate Verification
# ssl_cert_verification=true

# Appuim URL
appium_url = http://localhost:4723

# TE Settings
# te_start_server=false
# te_server_port=9095

# Indicates if the web driver should be auto-updated based on the browser version on the agent machine (local, server_side, off)
# local       : Fetch driver jars directly from the Agent host
# server_side : Fetch driver jars from ACCELQ server connection
# off         : Do not auto-update the driver jars
# web_driver_auto_update=local

# Port numbers to use for virtualization servers
# Leave this blank to use ports dynamically. If not, give the range with comma separation (e.g. 9000, 10000)
# Number of available ports should be at least twice the number of concurrent threads running at any point
# virtualization_ports_range=

# Experimental Flags (Internal use only)
agent_host = LT-MBP-194
tenant_code = poc
# work_root = file path of agent
# Available Sharing Types: USER (0) or Shared (1)
sharing_type = 0
# cleanup_run_folders=true
# virtualization_debug_log=true
# run_re_trigger_timeout=30
# tc_stmt_line_max_count=100000
# sync_runtime=true
# force_sync_runtime_at_startup=false
# Available Image Qualities: high, medium or low
# image_quality=high

# Extra Flags
provider_type = LAMBDATEST
provider_password = <LambdaTest AccessKey>
provider_username = <LambdaTest Username>
```

### Sample YAML Files

#### Single YAML File

```bash
version: 0.1
user: <Lambdatest Username>
key: <Lambdatest AccessKey>
globalTimeout: 150
testSuiteTimeout: 150
testSuiteStep: 150

autosplit: true
runson: win
concurrency: 1

pre:
  - move agent.properties C:\Users\ltuser.ghtestVM\Downloads\acc_installer_win\ACCELQAgent\AgentInstances\agent\agent.properties #move your agent file to hyperex machines agent folder
  - acc start # start accelq agent on hyperexecute machines

testDiscovery:
  type: raw 
  mode: remote
  command: echo test

testRunnerCommand: node $env:ACCELQ --url "https://poc.accelq.io" --userID "<Accelq UserID>" --apiKey "<Accelq API Key>" --tenantCode "poc" --jobID "<Accelq jobID>"; C:\Users\ltuser.ghtestVM\Downloads\acc_installer_win\ACCELQAgent\Dashboard\AQAgentControllerShutdown.exe;
```

#### Parallel YAML File

```bash
version: 0.1
globalTimeout: 150
testSuiteTimeout: 150
testSuiteStep: 150
  
runson: win

matrix: 
  jobID: ["<jobID 1>","<jobID 2>"]
  agent: [hyper1\agent.properties,hyper2\agent.properties]

exclusionMatrix: 
  - jobID: ['<jobID 1>'] 
    agent: [hyper2\agent.properties] 
  - jobID: ['<jobID 2>'] 
    agent: [hyper1\agent.properties] 

pre:
  - move agent.properties C:\Users\ltuser.ghtestVM\Downloads\acc_installer_win\ACCELQAgent\AgentInstances\agent\agent.properties #move your agent file to hyperex machines agent folder
  - acc start # start accelq agent on hyperexecute machines


testSuites: 
  - node $env:ACCELQ --url "" --userID "" --apiKey "" --tenantCode "poc" --jobID $jobID;
```
