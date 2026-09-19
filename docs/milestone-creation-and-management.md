---
id: milestone-creation-and-management
title: Milestones - Creation and Management
hide_title: false
sidebar_label: Milestones
description: Check the milestones - datasets, test run and 
keywords:
  - milestone creation 
url: https://www.testmuai.com/support/docs/milestone-creation-and-management/
site_name: TestMu AI
slug: milestone-creation-and-management/
canonical: https://www.testmuai.com/support/docs/milestone-creation-and-management/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Milestone",
          "item": `${BRAND_URL}/support/docs/milestone-creation-and-management/`
        }]
      })
    }}
></script>
Milestones in <BrandName /> serve as a central organizational tool for grouping test runs. They are particularly useful for tracking progress related to feature releases, ensuring comprehensive oversight of associated testing activities.

This guide provides a comprehensive walkthrough for creating and managing milestones within <BrandName />, enabling efficient organization of test runs and tracking feature releases.

## Creating a Milestone
### Step 1: Access the Milestone Section
- Navigate to the Milestone section in the <BrandName /> dashboard.
- Click **"Create Milestone**" and locate the Create Milestone button and click it to start the creation process.
<img loading="lazy" src={require('../assets/images/milestones/1.png').default} alt="Real "  className="doc_img"/>

### Step 2: Provide the required configurations
- Enter the following mandatory fields:
    - **Milestone Name :** Provide a clear and descriptive name for the milestone.
    - **Associated Test Runs:** Select or specify the test runs you want to include.
    - Optional fields:
        - **Description :** Add additional information about the milestone’s purpose or scope.
        - **Tags :** Assign relevant tags for categorization.
        - **Owner :** Designate a team member responsible for the milestone.
        - **Duration :** Set the expected duration for completing the milestone.
        - **Attachments :** Upload any relevant files or documentation.
<img loading="lazy" src={require('../assets/images/milestones/2.png').default} alt="Real "  className="doc_img"/>

### Step 3: Finalize the Milestone
- Review all entered details for accuracy.
- Click **Create Milestone** to finalize the creation.
<img loading="lazy" src={require('../assets/images/milestones/3.png').default} alt="Real "  className="doc_img"/>

## Managing Milestones
### Viewing Milestone Details
Once created, all milestones are listed for easy tracking. You can:
- Select a specific milestone to view its detailed information.
- Access associated test runs and other milestone attributes.
<img loading="lazy" src={require('../assets/images/milestones/4.png').default} alt="Real "  className="doc_img"/>

### Marking Milestones as Completed
When a milestone is finished, you can mark it as Completed:
- Navigate to the desired milestone.
- Use the Mark as Completed option to update its status.
<img loading="lazy" src={require('../assets/images/milestones/5.png').default} alt="Real "  className="doc_img"/>

### Viewing Completed Milestones
To review completed milestones:
- Navigate to the View Completed section in the milestone management area.
- This section provides a history of all milestones marked as complete.
<img loading="lazy" src={require('../assets/images/milestones/6.png').default} alt="Real "  className="doc_img"/>

## Video Explanation
<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/milestones/output.mp4').default} type="video/mp4" />
</video>
