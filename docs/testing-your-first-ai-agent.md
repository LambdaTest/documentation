---
id: testing-your-first-ai-agent
title: Testing Your First AI Agent
hide_title: false
sidebar_label: Test Your First AI Agent
description: Validate test chatbots, voice assistants, and hybrid deployments across all interaction types with industry's first Agent-to-Agent testing platform. 
keywords:
 - agent to agent testing
 - agentic testing
 - ai agent testing
url: https://www.testmu.ai/support/docs/testing-your-first-ai-agent
site_name: LambdaTest
slug: testing-your-first-ai-agent
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Testing Your First AI Agent",
          "item": "https://www.lambdatest.com/support/docs/testing-your-first-ai-agent"
        }]
      })
    }}
></script>



**Step 1:** Click on the **Create Agent** button in the left sidebar and give your Agent a name and a description. Once done, click on the **Create Agent** button.
 
<img loading="lazy" src={require('../assets/images/agent-to-agent/agentic-one.png').default} alt="Image" width="1347" height="616"  className="doc_img"/>

**Step 2:** Now, upload the required documents so that the testing system can understand the particular requirements of your agentic chatbot. This helps the platform analyse your requirements and generate relevant scenarios for your chatbot. 

<img loading="lazy" src={require('../assets/images/agent-to-agent/agentic-two.png').default} alt="Image" width="1347" height="616"  className="doc_img"/>

**Step 3:** After the initial analysis, you can select which types of tests you want to generate. The platform offers a plethora of test categories to choose from. For instance, the **Personality & Tone** category helps you generate scenarios, ensuring that your agent is responding in a professional manner. You can also select multiple categories to generate a wide range of tests.

<img loading="lazy" src={require('../assets/images/agent-to-agent/agentic-three.png').default} alt="Image" width="1347" height="616"  className="doc_img"/>

**Step 4:** Once done, click on the **Generate Test Scenarios** button. In the background, a team of specialised AI agents will start generating multiple test scenarios in parallel. 

<img loading="lazy" src={require('../assets/images/agent-to-agent/agentic-four.png').default} alt="Image" width="1347" height="616"  className="doc_img"/>  

**Step 5:** As you can see, the test scenarios have been generated. You can filter them based on the test categories you had selected, and the system also assigns a complexity and risk level to each scenario. For instance, a scenario for **tone adaptation in case of delivering bad news** would suggest how your bot should respond.

<img loading="lazy" src={require('../assets/images/agent-to-agent/agentic-seven.png').default} alt="Image" width="1347" height="616"  className="doc_img"/>

**Step 6:** Once you are satisfied with the scenarios, enter your bot/agent's API URL and click on **Run Evaluation**.

<img loading="lazy" src={require('../assets/images/agent-to-agent/agentic-eight.png').default} alt="Image" width="1347" height="616"  className="doc_img"/>

**Step 7:** Under the **Evaluation Results** tab, you can see a breakdown of the execution results across different metrics, such as whether the conversation was relevant, if the agent stayed on topic, and more.

<img loading="lazy" src={require('../assets/images/agent-to-agent/agentic-five.png').default} alt="Image" width="1347" height="616"  className="doc_img"/>

>**Note:** If you have a voice bot, the system can test it by automatically generating audio for the test cases and evaluating the transcribed audio responses from your agent to ensure they are relevant.

