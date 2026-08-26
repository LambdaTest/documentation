module.exports = {

  // 'support-start', 'tas-overview', 'app-automation', 'web-automation', 'getting-started', 'getting-started-with-cypress-testing', 'playwright-testing-guide', 'puppeteer-testing-guide', 'k6-browser-testing', 'app-automation-app-sim','getting-started-with-appium-testing', 'getting-started-with-espresso-testing', 'getting-started-with-xcui-testing', 'record-and-replay',

  HyperExecuteSidebar: [
    {
      type: 'link',
      label: 'Back',
      href: '/docs/',
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "category",
        collapsed: true,
        label: "Getting Started",
        items: [
          "getting-started-with-hyperexecute",
          "hyperexecute-vs-traditional-test-grids",
          "key-features-of-hyperexecute",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Set Up & Authenticate",
        items: [
          "hyperexecute-environment-variable-setup",
          "hyperexecute-how-to-configure-tunnel",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Run Your First Job",
        items: [
          "hyperexecute-running-your-first-job",
          "hyperexecute-guided-walkthrough",
          "hyperexecute-cli-gui",
          "saucelabs-to-hyperexecute-migrate",
          "hyperexecute-supported-languages-and-frameworks",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Performance Testing",
        items: [
          "hyperexecute-performance-testing",
          "hyperexecute-run-jmeter-tests",
          "hyperexecute-gattling-testing",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Configure Your YAML",
        items: [
          {
            type: "category",
            collapsed: true,
            label: "Test Splitting and Multiplexing",
            link: {
              type: "doc",
              id: "hyperexecute-test-splitting-and-multiplexing",
            },
            items: [
              {
                type: "doc",
                label: "Auto Split Strategy",
                id: "hyperexecute-auto-split-strategy",
              },
              {
                type: "doc",
                label: "Matrix Multiplexing Strategy",
                id: "hyperexecute-matrix-multiplexing-strategy",
              },
              {
                type: "doc",
                label: "Hybrid Strategy",
                id: "hyperexecute-hybrid-strategy",
              },
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Job Artifacts and Reports",
            items: [
              {
                type: "doc",
                label: "HyperExecute Job Artifacts ",
                id: "hyperexecute-artifacts",
              },
              {
                type: "doc",
                label: "Test Artifact Management",
                id: "hyperexecute-artifacts-url",
              },
              {
                type: "doc",
                label: "HyperExecute Job Reports ",
                id: "hyperexecute-reports",
              },
              {
                type: "doc",
                label: "Receive the Job Reports as an Email",
                id: "hyperexecute-email-reports",
              },
              {
                type: "doc",
                label: "Process Artifacts in Global Post",
                id: "hyperexecute-global-post-artifacts",
              },
            ],
          },
          {
            type: "doc",
            label: "FailFast",
            id: "hyperexecute-failfast",
          },
          {
            type: "doc",
            label: "Jobs Prioritization",
            id: "hyperexecute-prioritize-tests",
          },
          {
            type: "doc",
            id: "rca",
          },
          {
            type: "doc",
            id: "hyperexecute-background-services",
          },
          {
            type: "doc",
            label: "Auto Healing",
            id: "hyperexecute-auto-healing",
          },
          {
            type: "doc",
            label: "Hyperexecute Projects",
            id: "hyperexecute-projects",
          },
          {
            type: "doc",
            label: "Workflows",
            id: "hyperexecute-workflows",
          },
          {
            type: "doc",
            label: "Jobs Archiving",
            id: "hyperexecute-jobs-archiving",
          },
          {
            type: "doc",
            label: "Test Muting",
            id: "hyperexecute-test-muting",
          },
          {
            type: "doc",
            label: "Test Metrics",
            id: "hyperexecute-task-metrics",
          },
          {
            type: "doc",
            label: "Global Policies",
            id: "hyperexecute-global-policies",
            customProps: { beta: true },
          },
          "hyperexecute-rerun-failed-tests"
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Scale Your Test Runs",
        items: [
          "hyperexecute-test-splitting-and-multiplexing",
          "hyperexecute-auto-split-strategy",
          "hyperexecute-matrix-multiplexing-strategy",
          "hyperexecute-hybrid-strategy",
          "hyperexecute-how-to-find-correct-concurrency",
          "hyperexecute-prioritize-tests",
          "hyperexecute-failfast",
          "hyperexecute-test-muting",
          "hyperexecute-rerun-failed-tests",
          "hyperexecute-background-services",
          "hyperexecute-auto-healing",
          "hyperexecute-projects",
          "hyperexecute-workflows",
          "hyperexecute-test-chains",
          "hyperexecute-jobs-archiving",
          "hyperexecute-how-smart-caching-boosts-tests-speed",
          "hyperexecute-org-product-preferences",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "View Results & Reports",
        items: [
          "hyperexecute-status",
          "hyperexecute-reports",
          "hyperexecute-artifacts",
          "error-categorization-report",
          "hyperexecute-task-metrics",
          "rca",
          "hyperexecute-widgets",
          "hyperexecute-test-widgets",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Debug Failed Jobs",
        items: [
          "hyperexecute-how-to-debug-job",
          "hyperexecute-cli-error",
          "hyperexecute-pre-steps-error",
          "hyperexecute-scenario-steps-error",
          "hyperexecute-how-to-resolve-version-conflict",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Set Up Private Cloud",
        items: [
          "hyperexecute-private-cloud-benefits",
          "hyperexecute-private-cloud-setup-with-azure",
          "hyperexecute-private-cloud-setup-with-aws",
          "hyperexecute-private-cloud-on-jumphost",
          "hyperexecute-vnet-peering-for-private-cloud",
          "hyperexecute-github-app-integration",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Integrate With SmartUI (Visual Testing)",
        items: [
          "smart-ui-testing",
          "hyperexecute-smart-ui-capture-onboarding",
          "hyperexecute-smart-ui-testing-using-selenium",
          "hyperexecute-smart-ui-testing-using-cypress",
          "hyperexecute-smart-ui-test-using-playwright",
          "hyperexecute-smart-ui-sdk-selenium-javascript",
          "hyperexecute-smart-ui-sdk-maestro",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Integrate with CI/CD",
        items: [
          "hyperexecute-integration-with-ci-cd-tools",
          "github-actions-with-hyperexecute",
          "gitlab-integration-with-hyperexecute",
          "jenkins-with-hyperexecute",
          "bitbucket-pipeline-with-hyperexecute",
          "circle-ci-with-hyperexecute",
          "azure-with-hyperexecute",
          "aws-codepipeline-with-hyperexecute",
          "travis-ci-with-hyperexecute",
          "teamcity-with-hyperexecute",
          "gocd-integration-with-hyperexecute",
          "bamboo-integration-with-hyperexecute",
          "semaphore-integration-with-hyperexecute",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Integrate Test Tools",
        items: [
          "hyperexecute-integration-with-products",
          "hyperexecute-azure-test-plan",
          "tosca-integration-with-hyperexecute-using-commander",
          "tosca-integration-with-hyperexecute-using-dex",
          "tosca-integration-with-hyperexecute-for-sap",
          "hyperexecute-accelq-integration",
          "hyperexecute-algoqa-integration",
          "katalon-integration-with-hyperexecute",
          "hyperexecute-provar-integration",
          "hyperexecute-qtest-integration",
          "hyperexecute-sikuli-integration",
          "hyperexecute-testim-integration",
          "hyperexecute-testsigma-integration",
          "hyperexecute-winapp-integration",
          "hyperexecute-zephyr-scale-integration",
          "hyperexecute-slack-integration",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Reference",
        items: [
          "hyperexecute-cli-run-tests-on-hyperexecute-grid",
          "hyperexecute-browser-list-api",
          "hyperexecute-supported-languages-and-packages",
          "hyperexecute-emu-simu-devices-list",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Troubleshoot & FAQs",
        items: [
          "he-general-faqs",
          "hyperexecute-yaml-faqs",
          "he-cli-faqs",
          "he-feature-faqs",
          "he-platform-faqs",
          "he-pricing-faqs",
          "he-security-faqs",
          "he-enterprise-faqs",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Release Notes",
        items: [
          "hyperexecute-release-notes",
          "hyperexecute-release-notes-2025",
          "hyperexecute-release-notes-2024",
          "hyperexecute-release-notes-2023",
          "hyperexecute-cli-release-notes-0-2-249",
          "hyperexecute-mcp-server-release-notes-1-0-0",
        ],
      },
    ],
  ],

  AgentToAgentSidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "category",
        label: "Overview",
        collapsed: false,
        items: [
          {
            type: "doc",
            label: "What is Agent Testing",
            id: "getting-started-with-agent-testing-platform",
          },
          {
            type: "doc",
            label: "Architecture & Working",
            id: "architecture-and-how-evaluation-works",
          },
        ],
      },

       {
        type: "category",
        label: "Supported Agent Types",
        collapsed: false,
        items: [
          {
            type: "doc",
            label: "Chat Agent Testing",
            id: "chat-agent",
          },
          {
            type: "doc",
            label: "Voice Agent Testing",
            id: "voice-agent",
          },
          {
            type: "doc",
            label: "Video Agent Testing",
            id: "video-agent",
          },
          {
            type: "doc",
            label: "Phone Agent Testing",
            id: "phone-agent",
          },
          {
            type: "doc",
            label: "Inbound Phone Agent Testing",
            id: "inbound-phone-agent",
          },
          {
            type: "doc",
            label: "Outbound Phone Agent Testing",
            id: "outbound-phone-agent",
          },
          {
            type: "doc",
            label: "Image Analyzer Testing",
            id: "image-analyzer",
          },
        ],
      },

      {
        type: "category",
        label: "Getting Started",
        collapsed: false,
        items: [
          {
            type: "doc",
            label: "Quickstart (UI)",
            id: "testing-your-first-ai-agent",
          },
          {
            type: "doc",
            label: "Quickstart (CLI)",
            id: "agent-testing-cli",
          },
          {
            type: "doc",
            label: "Quickstart (API)",
            id: "chat-agent-api-integration",
          },

        ],
      },

      {
        type: "category",
        label: "Guides",
        collapsed: true,
        items: [
          { type: "doc", label: "Test Retell Agents", id: "test-retell-agents" },
          { type: "doc", label: "Test Vapi Agents", id: "test-vapi-agents" },
          { type: "doc", label: "Test Bland Agents", id: "test-bland-agents" },
          { type: "doc", label: "Test ElevenLabs Agents", id: "test-elevenlabs-agents" },
          { type: "doc", label: "Test LiveKit Agents", id: "test-livekit-agents" },
          { type: "doc", label: "Test Pipecat Agents", id: "test-pipecat-agents" },
          { type: "doc", label: "Test Synthflow Agents", id: "test-synthflow-agents" },
          { type: "doc", label: "Test Voiceflow Agents", id: "test-voiceflow-agents" },
          { type: "doc", label: "Test Twilio IVR", id: "test-twilio-ivr" },
          { type: "doc", label: "Test Amazon Connect Bots", id: "test-amazon-connect-bots" },
          { type: "doc", label: "Test LangGraph Agents", id: "test-langgraph-agents" },
          { type: "doc", label: "Test Vertex Agent Builder Agents", id: "test-vertex-agent-builder-agents" },
          { type: "doc", label: "Test Copilot Studio Agents", id: "test-copilot-studio-agents" },
          { type: "doc", label: "Test Amazon Lex Bots", id: "test-amazon-lex-bots" },
          { type: "doc", label: "Test watsonx Assistant Bots", id: "test-watsonx-assistant-bots" },
        ],
      },

      {
        type: "category",
        label: "Frequently Asked Questions",
        collapsed: false,
        items: [
          {
            type: "doc",
            label: "FAQs",
            id: "agent-testing-platform-faqs",
          },
        ],
      },
      {
        type: "category",
        label: "Agent Assurance",
        collapsed: false,
        items: [
          { type: "doc", label: "Overview", id: "agent-assurance-overview" },
          { type: "doc", label: "Getting Started", id: "agent-assurance-quickstart" },
           { type: "doc", label: "Command Reference", id: "agent-assurance-command-reference" },
          {
            type: "category",
            label: "Configure",
            collapsed: true,
            items: [
              { type: "doc", label: "Connect and Explore Agents", id: "agent-assurance-connect-and-explore-agents" },
              { type: "doc", label: "Invocation Profiles", id: "agent-assurance-profiles" },
              { type: "doc", label: "Scenarios", id: "agent-assurance-scenarios" },
              { type: "doc", label: "MCP Servers", id: "agent-assurance-mcp" },
            ],
          },
          {
            type: "category",
            label: "Run & Review",
            collapsed: true,
            items: [
              { type: "doc", label: "Run Tests", id: "agent-assurance-run-tests" },
              { type: "doc", label: "Results and Evidence", id: "agent-assurance-results-and-evidence" },
              { type: "doc", label: "CI/CD and Automation", id: "agent-assurance-ci-cd" },
            ],
          },

           { type: "doc", label: "Troubleshooting", id: "agent-assurance-troubleshooting" },
         
        
        ],
      },
    ],
  ],

  KaneAISidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      // 1. Get Started
      {
        type: "category",
        collapsed: true,
        label: "Get Started",
        items: [
          { type: "doc", id: "getting-started-with-kane-ai", label: "Overview" },
          { type: "doc", id: "author-your-first-desktop-browser-test", label: "Author Desktop Browser Test" },
          { type: "doc", id: "author-your-first-mobile-browser-test", label: "Author Mobile Browser Test" },
          { type: "doc", id: "author-your-first-mobile-app-test", label: "Author Mobile App Test" },
        ],
      },

      // 2. Author Tests
      {
        type: "category",
        collapsed: true,
        label: "Author Tests",
        items: [
          { type: "doc", id: "kaneai-kb-finding-and-interacting-with-elements", label: "Elements" },
          { type: "doc", id: "kane-ai-click-interactions", label: "Clicks, Long-Press & Drag" },
          { type: "doc", id: "kane-ai-scroll-in-feature", label: "Scroll" },
          { type: "doc", id: "kaneai-kb-forms-inputs-and-data-entry", label: "Forms" },
          { type: "doc", id: "kaneai-upload-and-download-files", label: "Upload & Download Files" },
          { type: "doc", id: "kaneai-kb-dynamic-content-waits-and-page-state", label: "Waits" },
          { type: "doc", id: "kaneai-manual-interaction", label: "Manual Interaction" },
          { type: "doc", id: "kaneai-kb-assertions-and-validation", label: "Assertions" },
          { type: "doc", id: "kaneai-conditional-logic", label: "Conditional Logic" },
          { type: "doc", id: "kaneai-while-loops", label: "While Loops" },
          { type: "doc", id: "kane-ai-modules", label: "Modules" },
          { type: "doc", id: "kaneai-kb-authentication-and-session-management", label: "Authentication" },
          { type: "doc", id: "kaneai-kb-api-testing-and-network-assertions", label: "Network" },
          { type: "doc", id: "kaneai-database", label: "Database" },
          { type: "doc", id: "kane-ai-javascript-execution", label: "JavaScript Execution & Snippets" },
          { type: "doc", id: "kane-ai-api-testing", label: "API Testing" },
          { type: "doc", id: "kaneai-smartui-visual-testing", label: "Visual Testing" },
          { type: "doc", id: "kane-ai-deeplink-support", label: "Mobile Deeplinks" },
          { type: "doc", id: "kaneai-kb-mobile-app-testing-patterns", label: "Mobile Patterns" },
          { type: "doc", id: "kaneai-mobile-app-accessibility", label: "Mobile App Accessibility" },
          { type: "doc", id: "kane-ai-using-variables", label: "Variables & Secrets" },
          { type: "doc", id: "kane-ai-using-parameters", label: "Parameters" },
          { type: "doc", id: "kane-ai-using-datasets", label: "Datasets" },
        ],
      },

      // 3. Configure Tests
      {
        type: "category",
        collapsed: true,
        label: "Configure Tests",
        items: [
          { type: "doc", id: "kaneai-advanced-settings", label: "Advanced Settings" },
          { type: "doc", id: "kaneai-chrome-options", label: "Chrome Options" },
          { type: "doc", id: "kaneai-custom-headers", label: "Custom Headers" },
          { type: "doc", id: "kane-ai-geolocation-tunnel-proxy", label: "Geolocation, Tunnel & Proxy" },
          { type: "doc", id: "kaneai-network-throttling", label: "Mobile Network Throttling" },
          { type: "doc", id: "kaneai-gps-location", label: "Mobile GPS Location" },
          { type: "doc", id: "kaneai-smart-locator-priority", label: "Smart Locators" },
        ],
      },

      // 4. Run & Analyze
      {
        type: "category",
        collapsed: true,
        label: "Run & Analyze",
        items: [
          { type: "doc", id: "kane-ai-automation-code-generation", label: "Code Generation" },
          { type: "doc", id: "kaneai-hyperexecute-test-run-execution", label: "Test Runs" },
          { type: "doc", id: "kaneai-test-run-instance-view", label: "Test Run Instance View" },
          { type: "doc", id: "kaneai-scheduled-test-runs", label: "Scheduled Test Runs" },
          { type: "doc", id: "kaneai-sequential-test-runs", label: "Sequential Test Runs" },
          { type: "doc", id: "kaneai-dynamic-url-replacement", label: "Dynamic URL Replacement" },
          { type: "doc", id: "kaneai-failure-conditions", label: "Failure Conditions" },
          { type: "doc", id: "test-runs-configurations", label: "Configurations" },
          { type: "doc", id: "kaneai-ci-cd-automation", label: "CI/CD" },
        ],
      },

      // 5. Integrations
      {
        type: "category",
        collapsed: true,
        label: "Integrations",
        items: [
          { type: "doc", id: "kane-ai-jira-integration", label: "Jira" },
          { type: "doc", id: "github-app-integration", label: "GitHub App" },
          { type: "doc", id: "kane-ai-azure-devops-integration", label: "Azure DevOps" },
        ],
      },

      // 6. Reference
      {
        type: "category",
        collapsed: true,
        label: "Reference",
        items: [
          { type: "doc", id: "kane-ai-command-guide", label: "Commands" },
          { type: "doc", id: "error-handling-kaneai", label: "Errors" },
          { type: "doc", id: "kaneai-auto-heal", label: "Auto-Heal" },
          { type: "doc", id: "kane-ai-mobile-app-capabilities", label: "Mobile Authoring Capabilities" },
        ],
      },
    ],
  ],

  RealTimeBrowserTestingSiebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "category",
        collapsed: true,
        label: "Web Browser Testing",
        items: [
          "getting-started-with-desktop-browser-real-time-testing",
          "real-time-desktop-browser-testing-tools",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Mobile Browser Testing",
        items: [
          "getting-started-with-mobile-browser-real-time-testing",
          "real-time-mobile-browser-testing-tools",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Mobile App Testing",
        items: [
          "getting-started-with-mobile-app-real-time-testing",
          "real-time-mobile-app-testing-tools",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "ChromeOS Testing",
        link: {
          type: "doc",
          id: "chrome-os-testing",
        },
        items: [
          {
            type: "doc",
            label: "ChromeOS Web BrowserTesting",
            id: "chrome-os-web-browser-testing",
          },
          {
            type: "doc",
            label: "ChromeOS App Testing",
            id: "chrome-os-app-testing",
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Key Features",
        items: [
          "developer-tools",
          "pre-loaded-extension",
          "real-time-testing-troubleshooting",
          "http-basic-authentication",
          "webview-testing-in-android",
          "real-time-locally-hosted-pages",
          "real-time-recents-and-favourites",
          "real-time-upload-and-download-files",
        ],
      },
      "troubleshooting-ios-apps",
      "entitlements",
    ],
  ],

  IntegrationsSidebar: [
    {
      type: 'link',
      label: 'Back',
      href: '/docs/',
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        // type: "category",
        // collapsed: true,
        // label: "Integrations",
        // items: [
        //   {
        type: "category",
        collapsed: true,
        label: "Bug Tracking Tools",
        link: {
          type: "doc",
          id: "bug-tracking-tools",
        },
        items: [
          "jira-integration",
          "jira-self-hosted-integration",
          "airtable-integration",
          "notion-integration",
          "linear-app-integration",
          "azure-devops-integration",
          "youtrack-integration",
          "mantis-integration",
          "pagerduty-integration",
          "bugasura-integration",
          "zoho-bugtracker-integration",
          "goodday-integration",
          "bugherd-integration",
          "zipboard-integration",
          "bugzilla-integration",
          "bugsnag-integration",
          "devrev-integration",
          "fogbugz-integration",
          "airbrake-integration",
          "userback-integration",
          "zenkit-integration",
          "spirateam-integration",
          "assembla-integration",
          "taiga-integration",
          "servicenow-integration",
          "zohoproject-integration",
          "rally-integration",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Project Management Tools",
        link: {
          type: "doc",
          id: "project-management-tools",
        },
        items: [
          "clickup-integration",
          "project-management-tools-github-integration",
          "github-repo-based-oauth",
          "clubhouse-integration",
          "project-management-tools-gitlab-integration",
          "redmine-integration",
          "asana-integration",
          "monday-integration",
          "trello-integration",
          "miro-integration",
          "project-management-tools-bitbucket-integration",
          "integrating-wrike-with-lambdatest",
          "pivotal-tracker-integration",
          "hive-integration",
          "teamwork-integration",
          "targetprocess-integration",
          "project-management-tools-paymo-integration",
          "practitest-integration",
          "breeze-integration",
          "backlog-integration",
          "favro-integration",
          "zapier-integration-with-lambdatest",
          "n8n-integration",
          "axosoft-integration",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Analytics Tools",
        items: [
          "datadog-integration",
          "sumo-logic-integration",
          "new-relic-integration",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Team Communication Tools",
        link: {
          type: "doc",
          id: "team-communication-tools",
        },
        items: [
          "slack-integration",
          "slack-app",
          "opsgenie-integration",
          "microsoft-teams-integration",
          "rocketchat-integration-with-lambdatest",
          "integrating-mattermost-with-lambdatest",
          "flock-integration",
          "google-chat-integration",
          "webex-teams-integration",
          "zoho-cliq-integration",
          "webhooks-integration",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Integrations With CI/CD Tools",
        link: {
          type: "doc",
          id: "integrations-with-ci-cd-tools",
        },
        items: [
          "bitbucket-pipelines-integration",
          "aws-codepipeline-Integration",
          "bamboo-integration",
          {
            type: "category",
            collapsed: true,
            label: "Jenkins Plugin",
            items: [
              "jenkins-plugin",
              "integrating-your-jenkins-pipeline-with-lambdatest",
            ],
          },
          "semaphore-ci-integration",
          "circleci-integration",
          "travis-ci-with-lambdatest",
          "gitlab-ci-integration",
          "codeship-integration",
          "codefresh-ci-integration",
          "teamcity-integration",
          {
            type: "category",
            collapsed: true,
            label: "Integrate Azure Pipelines",
            items: [
              "azure-pipeline",
              "integrate-lambdatest-extension-with-azure-pipelines",
            ],
          },
          "concource-ci",
          {
            type: "category",
            collapsed: true,
            label: "GoCD",
            items: ["gocd-integration", "yaml-integration"],
          },
          "drone-ci",
          "appveyor-ci-integration",
          "google-cloud-ci-integration",
          "appium-bitrise",
          "espresso-bitrise",
          "bitrise-integration-xcuitest",
          "buildkite-integration",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Codeless Automation Tools",
        link: {
          type: "doc",
          id: "codeless-automation-tools",
        },
        items: [
          {
            type: "category",
            collapsed: true,
            label: "Katalon",
            items: [
              "katalon-integration-with-lambdatest",
              "katalon-integration",
              "running-groovy-script-in-katalon",
            ],
          },
          "run-selenium-ide-tests-on-lambdatest-selenium-cloud-grid",
          "ranorex-integration-with-lambdatest",
          "oxygen-integration",
          "leapwork-integration",
          "vividus-integration",
          "qmetry-integration",
          "cerberus-integration",
          "testingwhiz-integration",
          "testsigma-integration",
          "tricentis-tosca-integration",
          "ghost-inspector-integration",
          "accelq-integration",
          "algoshack-integration",
        ],
      },

      {
        type: "category",
        collapsed: true,
        label: "Accessibility Testing Tools",
        items: ["deque-integration"],
      },
      {
        type: "category",
        collapsed: true,
        label: "Test Reporting & Test Management Tools",
        link: {
          type: "doc",
          id: "integrate-test-reporting-test-management-tools",
        },
        items: [
          "testrail-integration-with-lambdatest-selenium-grid",
          "zebrunner-integration",
          "zephyr-scale",
          "testmo-integration",
          "alm-octane-integration"
        ],
      },

      {
        type: "category",
        collapsed: true,
        label: "Code Coverage Tools",
        items: ["rktracer-integration"],
      },
      {
        type: "category",
        collapsed: true,
        label: "Plugins and Extensions",
        link: {
          type: "doc",
          id: "plugins-and-extensions",
        },
        items: [
          "chrome-extensions",
          {
            type: "category",
            collapsed: true,
            label: "Jenkins Plugin",
            items: [
              "jenkins-plugin",
              "integrating-lambdaTest-with-jenkins-freestyle-project",
              "lambdatest-report-with-jenkins-pipeline",
            ],
          },
          "wordpress-plugin",
          "fastlane-plugin",
          "azure-pipeline",
          "teamcity-plugin",
          // "shopify-integration",
          "vscode-extension",
          "xcode-plugin-lambdamax",
          "docker-tunnel-extension",
          "gradle-integration-with-lambdatest",
        ],
      },
      {
        type: "doc",
        label: "LT Debug",
        id: "record-and-replay",
      },
      "zalenium-integration-with-lambdatest",
      "applitools-integration-with-lambdatest",
      "selenified-integration-with-lambdatest",
      "microsoft-team",
      "siesta-integration",
      "testcomplete-integration",
      "testrigor-integration",
      "localstack-integration-with-lambdatest",
      "genrocket-integration",
      "netlify-integration-with-lambdatest",
      "testim-integration",
      "simplifyqa-integration",
      "uipath-integration",
    ],
    // },
  ],

  AccessibilityTestingSidebar: [
    {
      type: 'link',
      label: 'Back',
      href: '/docs/',
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "category",
        collapsed: false,
        label: "Getting Started",
        link: {
          type: "doc",
          id: "accessibility-testing",
        },
        items: [
          {
            type: "doc",
            label: "Choose Your Tool",
            id: "accessibility-choosing-the-right-tool",
          },
          {
            type: "doc",
            label: "Agent Skills",
            id: "accessibility-agent-skills",
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Manual Testing (DevTools)",
        link: {
          type: "doc",
          id: "accessibility-devtools",
        },
        items: [
          {
            type: "doc",
            label: "Install Toolkit",
            id: "accessibility-testing-install-devtools",
          },
          {
            type: "doc",
            label: "Run a Quick Scan",
            id: "accessibility-testing-run-quick-scan",
          },
          {
            type: "category",
            collapsed: true,
            label: "Scanning Methods",
            items: [
              {
                type: "doc",
                label: "Full Page Scan",
                id: "accessibility-testing-full-page-scanner",
              },
              {
                type: "doc",
                label: "Partial Page Scan",
                id: "accessibility-testing-partial-page-scanner",
              },
              {
                type: "doc",
                label: "Multi-Page Scan",
                id: "accessibility-testing-multi-page-scanner",
              },
              {
                type: "doc",
                label: "Workflow Scan",
                id: "accessibility-testing-workflow-scanner",
              },
              {
                type: "doc",
                label: "Keyboard Scan",
                id: "accessibility-keyboard-scan",
              },
            ],
          },
          {
            type: "doc",
            label: "DevTools Settings",
            id: "accessibility-devtools-settings",
          },
          {
            type: "doc",
            label: "Update DevTools",
            id: "accessibility-update-devtools-extension",
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Automation",
        link: {
          type: "doc",
          id: "accessibility-automation",
        },
        items: [
          {
            type: "category",
            collapsed: true,
            label: "Framework Setup Guides",
            items: [
              {
                type: "doc",
                label: "Selenium",
                id: "accessibility-automation-test",
              },
              {
                type: "doc",
                label: "Cypress v10",
                id: "cypress-v10-accessibility-test",
              },
              {
                type: "doc",
                label: "Cypress v9 (Legacy)",
                id: "cypress-v9-accessibility-test",
              },
              {
                type: "doc",
                label: "Playwright",
                id: "playwright-accessibility-test",
              },
              {
                type: "doc",
                label: "TestNG",
                id: "accessibility-testng-test",
              },
              {
                type: "doc",
                label: "JUnit 5",
                id: "accessibility-junit5-test",
              },
              {
                type: "doc",
                label: "NUnit (C#)",
                id: "accessibility-nunit-csharp-test",
              },
              {
                type: "doc",
                label: "Robot Framework",
                id: "accessibility-robot-framework-test",
              },
              {
                type: "doc",
                label: "Cucumber (Java)",
                id: "accessibility-cucumber-java-test",
              },
            ],
          },
          {
            type: "doc",
            label: "Automation Settings",
            id: "accessibility-automation-settings",
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Test Scheduling",
        link: {
          type: "doc",
          id: "accessibility-test-scheduling",
        },
        items: [
          {
            type: "doc",
            label: "Sitemap Extraction & URL Import",
            id: "accessibility-sitemap-extraction-url-import",
          },
          {
            type: "doc",
            label: "Login & Authentication",
            id: "accessibility-test-scheduling-login-authentication",
          },
          {
            type: "doc",
            label: "Create Scheduled Scan",
            id: "accessibility-test-scheduling-scan",
          },
          {
            type: "doc",
            label: "Edit Scheduled Scan",
            id: "accessibility-test-scheduling-edit",
          },
          {
            type: "doc",
            label: "Crawler",
            id: "accessibility-test-crawler",
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Integrations with TestMu AI products",
        items: [
          {
            type: "category",
            collapsed: true,
            label: "Web Scanner",
            link: {
              type: "doc",
              id: "web-scanner-getting-started",
            },
            items: [
              {
                type: "doc",
                label: "Starting an Accessibility Scan",
                id: "web-scanner-accessibility-scan",
              },
              {
                type: "doc",
                label: "Adding URLs",
                id: "web-scanner-adding-urls",
              },
              {
                type: "doc",
                label: "Scheduling Options",
                id: "web-scanner-scheduling-options",
              },
              {
                type: "doc",
                label: "Advanced Features",
                id: "web-scanner-advanced-features",
              },
            ],
          },
          {
            type: "doc",
            label: "KaneAI Mobile App Testing",
            id: "kaneai-mobile-app-accessibility",
          },
          {
            type: "doc",
            label: "HyperExecute (Selenium)",
            id: "selenium-hyperexecute-accessibility-tests",
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "External integrations",
        items: [
          {
            type: "doc",
            label: "CI/CD Integration Guide",
            id: "accessibility-cicd-integration-guide",
          },
          {
            type: "doc",
            label: "Integrations (Jira / Slack)",
            id: "accessibility-report-integrations",
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Mobile App Testing",
        items: [
          {
            type: "doc",
            label: "Manual App Scanner",
            id: "accessibility-app-scanner",
          },
          {
            type: "doc",
            label: "Scan Configurations",
            id: "accessibility-app-scanner-scan-configurations",
          },
          {
            type: "category",
            collapsed: true,
            label: "Appium Automation",
            link: {
              type: "doc",
              id: "accessibility-native-app-automation-test",
            },
            items: [
              {
                type: "doc",
                label: "Scan Configurations",
                id: "accessibility-automation-scan-configurations",
              },
              {
                type: "doc",
                label: "Appium TestNG",
                id: "accessibility-appium-testng",
              },
              {
                type: "doc",
                label: "Appium WebdriverIO",
                id: "accessibility-appium-webdriverio",
              },
            ],
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Reports",
        link: {
          type: "doc",
          id: "accessibility-testing-navigating-dashboard",
        },
        items: [
          {
            type: "doc",
            label: "Accessibility Score",
            id: "accessibility-web-score",
          },
          {
            type: "doc",
            label: "Issue Summary",
            id: "accessibility-testing-dashboard-issue-summary",
          },
          {
            type: "doc",
            label: "All Issues",
            id: "accessibility-testing-dashboard-all-issues",
          },
          {
            type: "doc",
            label: "Exporting & Sharing Reports",
            id: "accessibility-exporting-sharing-reports",
          },
          {
            type: "doc",
            label: "Passed Test Cases",
            id: "accessibility-passed-test-cases",
          },
          {
            type: "doc",
            label: "Bug Report",
            id: "accessibility-report-bug",
          },
          {
            type: "doc",
            label: "Merge Reports (Mobile)",
            id: "accessibility-merge-mobile-reports",
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Features",
        link: {
          type: "doc",
          id: "accessibility-hide-restore-issues",
        },
        items: [
          {
            type: "category",
            collapsed: true,
            label: "Web",
            link: {
              type: "doc",
              id: "accessibility-hide-restore-issues",
            },
            items: [
              {
                type: "doc",
                label: "Hide and Restore Issues",
                id: "accessibility-hide-restore-issues",
              },
              {
                type: "doc",
                label: "AI Issue Detection Agent",
                id: "accessibility-ai-issue-detection-agent",
              },
              {
                type: "doc",
                label: "Capture Screenshot",
                id: "accessibility-capture-screenshot",
              },
              {
                type: "doc",
                label: "Fragment Identifier",
                id: "accessibility-fragment-identifier",
              },
              {
                type: "doc",
                label: "PDF Accessibility Scanning",
                id: "accessibility-pdf-accessibility-scanning",
              },
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Mobile",
            link: {
              type: "doc",
              id: "accessibility-tag-support",
            },
            items: [
              {
                type: "doc",
                label: "Tag Support",
                id: "accessibility-tag-support",
              },
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Common",
            link: {
              type: "doc",
              id: "accessibility-issue-remediation-guide",
            },
            items: [
              {
                type: "doc",
                label: "Issue Remediation Guide",
                id: "accessibility-issue-remediation-guide",
              },
              {
                type: "doc",
                label: "Analytics Widgets",
                id: "analytics-modules-accessibility-widgets",
              },
            ],
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Checklists",
        items: [
          {
            type: "doc",
            label: "Web Checklist",
            id: "accessibility-web-what-we-cover",
          },
          {
            type: "doc",
            label: "iOS Checklist",
            id: "accessibility-ios-what-we-cover",
          },
          {
            type: "doc",
            label: "Android Checklist",
            id: "accessibility-android-what-we-cover",
          },
          {
            type: "category",
            collapsed: true,
            label: "Web Rule Repository",
            link: {
              type: "doc",
              id: "accessibility-web-rule-repository",
            },
            items: [
              "accessibility-web-rule-1-1-1-non-text-content",
              "accessibility-web-rule-1-3-1-info-and-relationships",
              "accessibility-web-rule-1-3-4-orientation",
              "accessibility-web-rule-1-4-1-use-of-color",
              "accessibility-web-rule-1-4-2-audio-control",
              "accessibility-web-rule-1-4-3-contrast-minimum",
              "accessibility-web-rule-1-4-10-reflow",
              "accessibility-web-rule-1-4-11-non-text-contrast",
              "accessibility-web-rule-1-4-12-text-spacing",
              "accessibility-web-rule-2-1-1-keyboard",
              "accessibility-web-rule-2-1-2-no-keyboard-trap",
              "accessibility-web-rule-2-1-4-character-key-shortcuts",
              "accessibility-web-rule-2-2-1-timing-adjustable",
              "accessibility-web-rule-2-2-2-pause-stop-hide",
              "accessibility-web-rule-2-3-1-three-flashes",
              "accessibility-web-rule-2-4-1-bypass-blocks",
              "accessibility-web-rule-2-4-2-page-titled",
              "accessibility-web-rule-2-4-3-focus-order",
              "accessibility-web-rule-2-4-4-link-purpose",
              "accessibility-web-rule-2-4-7-focus-visible",
              "accessibility-web-rule-2-4-11-focus-not-obscured",
              "accessibility-web-rule-2-5-1-pointer-gestures",
              "accessibility-web-rule-2-5-2-pointer-cancellation",
              "accessibility-web-rule-2-5-3-label-in-name",
              "accessibility-web-rule-2-5-4-motion-actuation",
              "accessibility-web-rule-2-5-7-dragging-movements",
              "accessibility-web-rule-2-5-8-target-size",
              "accessibility-web-rule-3-2-1-on-focus",
              "accessibility-web-rule-3-2-2-on-input",
              "accessibility-web-rule-3-2-6-consistent-help",
              "accessibility-web-rule-3-3-1-error-identification",
              "accessibility-web-rule-3-3-2-labels-or-instructions",
              "accessibility-web-rule-3-3-7-redundant-entry",
              "accessibility-web-rule-3-3-8-accessible-authentication",
              "accessibility-web-rule-4-1-1-parsing",
              "accessibility-web-rule-4-1-2-name-role-value",
              "accessibility-web-rule-4-1-3-status-messages",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Android Rule Repository",
            link: {
              type: "doc",
              id: "accessibility-android-rule-repository",
            },
            items: [
              "accessibility-android-rule-missing-image-alt",
              "accessibility-android-rule-missing-field-label",
              "accessibility-android-rule-interactive-role-undefined",
              "accessibility-android-rule-missing-view-accessibility",
              "accessibility-android-rule-unlabeled-checkbox-element",
              "accessibility-android-rule-insufficient-color-ratio",
              "accessibility-android-rule-non-accessible-interaction",
              "accessibility-android-rule-missing-screen-title",
              "accessibility-android-rule-unlabeled-toggle-control",
              "accessibility-android-rule-mismatched-label-text",
              "accessibility-android-rule-missing-input-value",
              "accessibility-android-rule-inaccessible-text-focus",
              "accessibility-android-rule-misplaced-field-label",
              "accessibility-android-rule-nested-control-issues",
              "accessibility-android-rule-unnamed-nested-element",
              "accessibility-android-rule-fixed-orientation-lock",
              "accessibility-android-rule-undersized-touch-target",
              "accessibility-android-rule-insufficient-target-spacing",
              "accessibility-android-rule-duplicate-accessibility-label",
              "accessibility-android-rule-button-capitalization-check",
              "accessibility-android-rule-emoji-symbol-label",
              "accessibility-android-rule-redundant-state-label",
              "accessibility-android-rule-redundant-role-label",
              "accessibility-android-rule-non-descriptive-link-text",
              "accessibility-android-rule-traversal-order-mismatch",
              "accessibility-android-rule-dynamic-type-support",
              "accessibility-android-rule-non-responsive-container",
              "accessibility-android-rule-unique-option-names",
              "accessibility-android-rule-invalid-range-values",
              "accessibility-android-rule-images-with-text",
              "accessibility-android-rule-meaningful-sequence",
              "accessibility-android-rule-non-focusable-interactive-element",
              "accessibility-android-rule-minimum-text-size",
              "accessibility-android-rule-text-spacing",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "iOS Rule Repository",
            link: {
              type: "doc",
              id: "accessibility-ios-rule-repository",
            },
            items: [
              "accessibility-ios-rule-missing-accessibility-labels",
              "accessibility-ios-rule-touch-target-sizing",
              "accessibility-ios-rule-color-contrast-issues",
              "accessibility-ios-rule-assistive-technology-access",
              "accessibility-ios-rule-text-truncation-issues",
              "accessibility-ios-rule-accessibility-role-definition",
              "accessibility-ios-rule-dynamic-type-support",
              "accessibility-ios-rule-accessibility-label-not-punctuated",
              "accessibility-ios-rule-missing-image-element-label",
              "accessibility-ios-rule-missing-button-element-label",
              "accessibility-ios-rule-button-element-capitalisation-check",
              "accessibility-ios-rule-missing-checkbox-element-label",
              "accessibility-ios-rule-missing-editable-element-label",
              "accessibility-ios-rule-missing-switch-element-label",
              "accessibility-ios-rule-duplicate-accessibility-label",
              "accessibility-ios-rule-emoji-symbol-label",
              "accessibility-ios-rule-fixed-orientation-lock",
              "accessibility-ios-rule-images-with-text",
              "accessibility-ios-rule-insufficient-touch-target-spacing",
              "accessibility-ios-rule-interactive-role-undefined",
              "accessibility-ios-rule-invalid-range-values",
              "accessibility-ios-rule-meaningful-sequence",
              "accessibility-ios-rule-minimum-text-size",
              "accessibility-ios-rule-mismatched-label-text",
              "accessibility-ios-rule-misplaced-field-label",
              "accessibility-ios-rule-non-accessible-interaction",
              "accessibility-ios-rule-non-descriptive-link-text",
              "accessibility-ios-rule-overlapping-interactive-elements",
              "accessibility-ios-rule-redundant-role-label",
              "accessibility-ios-rule-redundant-state-label",
              "accessibility-ios-rule-traversal-order-mismatch",
              "accessibility-ios-rule-two-dimensional-scrolling",
              "accessibility-ios-rule-unique-option-names",
            ],
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Assistive technology (manual)",
        items: [
          {
            type: "doc",
            label: "Overview",
            id: "screen-reader-on-accessibility",
          },
          {
            type: "doc",
            label: "NVDA on Windows",
            id: "accessibility-nvda-windows",
          },
          {
            type: "doc",
            label: "VoiceOver on macOS",
            id: "accessibility-voiceover-macos",
          },
          {
            type: "doc",
            label: "JAWS on Windows",
            id: "accessibility-jaws-windows",
          },
          {
            type: "doc",
            label: "TalkBack on Android",
            id: "accessibility-talkback-android",
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "FAQs & Reference",
        items: [
          {
            type: "doc",
            label: "Accessibility FAQs",
            id: "accessibility-faq",
          },
          {
            type: "doc",
            label: "Supported WCAG Versions & Browsers",
            id: "accessibility-supported-wcag-browsers",
          },
          {
            type: "doc",
            label: "Compliance Guide (ADA / WCAG / EAA / 508)",
            id: "accessibility-compliance-guide",
          },
          {
            type: "doc",
            label: "VPAT & ACR evidence",
            id: "accessibility-vpat-report-generation",
          },
        ],
      },
    ],
  ],


  SettingsAndSecuritySidebar: [
    {
      type: 'link',
      label: 'Back',
      href: '/docs/',
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "doc",
        label: "Account Management",
        id: "account-management",
      },
      {
        type: "doc",
        label: "Network Whitelisting Guide",
        id: "network-whitelisting-and-tunnel-guide",
      },
      {
        type: "doc",
        label: "TestMu AI Public IP Ranges",
        id: "lambdatest-public-ip",
      },
      {
        type: "doc",
        label: "Getting Started",
        id: "single-sign-on",
      },
      {
        type: "doc",
        label: "SCIM",
        id: "scim",
      },
    ],
  ],

  TestManagerSidebar: [
    {
      type: 'link',
      label: 'Back',
      href: '/docs/',
      customProps: {
        className: 'back-to-main-menu'
      },
    },
    [
      // NOTE: 'manual-to-automated-test-conversion' is NOT in the proposed
      // structure and has been dropped from the nav (file retained on disk,
      // still 200). Re-add if this omission was unintended.

      // 1. Get Started
      {
        type: "category",
        collapsed: true,
        label: "Get Started",
        items: [
          { type: "doc", id: "test-manager", label: "Introduction" },
        ],
      },

      // 2. Set up your project (direct doc)
      {
        type: "doc",
        id: "create-projects",
        label: "Set up your project",
      },

      // 3. Import Test Case Data
      {
        type: "category",
        collapsed: true,
        label: "Import Test Case Data",
        items: [
          { type: "doc", id: "csv-import", label: "Import from CSV" },
          { type: "doc", id: "one-click-migration-from-testrail", label: "Migrate from TestRail" },
          { type: "doc", id: "one-click-migration-from-xray", label: "Migrate from X-Ray" },
          { type: "doc", id: "one-click-migration-from-zephyr-scale", label: "Migrate from Zephyr Scale" },
          { type: "doc", id: "migrate-from-zephyr-enterprise", label: "Migrate from Zephyr Enterprise" },
          { type: "doc", id: "one-click-migration-from-qtest", label: "Migrate from qTest" },
        ],
      },

      // 4. Test Case Organization
      {
        type: "category",
        collapsed: true,
        label: "Test Case Organization",
        items: [
          { type: "doc", id: "manual-test-case-creation", label: "Create and Manage Test Cases" },
          { type: "doc", id: "test-case-versioning", label: "Manage Versions" },
          { type: "doc", id: "create-modules", label: "Modules: Share Test steps" },
          { type: "doc", id: "modules-in-manual-testcases", label: "Importing Modules into Test Cases" },
          { type: "doc", id: "system-and-custom-fields", label: "Manage System & Custom fields" },
          { type: "doc", id: "copy-and-move-support-for-test-cases", label: "Copy & Move Test Cases" },
          { type: "doc", id: "update-fields", label: "Bulk Update Test Case fields" },
          { type: "doc", id: "export-test-cases", label: "Export Test Cases" },
        ],
      },

      // 5. AI Test Case Generator (direct doc)
      {
        type: "doc",
        id: "generate-test-cases-with-ai",
        label: "AI Test Case Generator",
      },

      // 6. Run Tests and Track Execution
      {
        type: "category",
        collapsed: true,
        label: "Run Tests and Track Execution",
        items: [
          { type: "doc", id: "test-run-creation-and-management", label: "Create and Manage Test Runs" },
          { type: "doc", id: "sync-test-instance", label: "Sync Test Instances" },
          { type: "doc", id: "test-instance-audit-logs", label: "Test Instance Audit Logs" },
          { type: "doc", id: "track-issues-in-test-runs", label: "Raise and Manage Defects" },
          { type: "doc", id: "milestone-creation-and-management", label: "Milestones" },
        ],
      },

      // 7. Link Automated Tests
      {
        type: "category",
        collapsed: true,
        label: "Link Automated Tests",
        items: [
          { type: "doc", id: "automated-test-cases-with-ai", label: "Link Automation Runs Automatically" },
          { type: "doc", id: "automated-test-cases-linked-using-dashboard", label: "Link Runs Manually from Dashboard" },
          { type: "doc", id: "automated-test-cases-linked-using-capability", label: "Link Runs Via Capabilities" },
        ],
      },

      // 8. Reporting and Analysis
      {
        type: "category",
        collapsed: true,
        label: "Reporting and Analysis",
        items: [
          { type: "doc", id: "insights-dashboard", label: "View Test metrics and trends" },
          { type: "doc", id: "tms-reports", label: "Generate execution and Traceability reports" },
        ],
      },

      // 9. Issue Tracker Integration
      {
        type: "category",
        collapsed: true,
        label: "Issue Tracker Integration",
        items: [
          { type: "doc", id: "link-jira-issues-with-test-manager", label: "Jira Integration for Test Manager" },
          { type: "doc", id: "lambdatest-jira-app", label: "TestMu AI Jira App" },
          { type: "doc", id: "link-ado-issues-with-test-manager", label: "Azure DevOps Integration for Test Manager" },
          { type: "doc", id: "lambdatest-azure-devops-app", label: "TestMu AI Azure DevOps App" },
        ],
      },
    ]
  ],

  RealDeviceSidebar: [
    {
      type: 'link',
      label: 'Back',
      href: '/docs/',
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "category",
        collapsed: true,
        label: "App Testing",
        items: [
          "app-testing-on-real-devices",
          "how-to-use-testing-tools-in-session",
          "gesture-support-ios",
          {
            type: "category",
            collapsed: true,
            label: "App Management and Distribution",
            items: [
              "upload-apps-on-real-device-cloud",
              "app-settings",
              "app-manager",
              { type: "doc", id: "app-distribution", customProps: { beta: true } },
              { type: "doc", id: "beta-testers-management", customProps: { beta: true } },
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "App Source",
            items: [
              "install-apps-from-play-store",
              "install-apps-from-test-flight",
              "install-apps-from-app-store",
              "install-apps-from-firebase",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Features",
            items: [
              "camera-image-injection-on-real-devices",
              "ip-geolocation-on-real-devices-app",
              "biometric-authentication-on-real-devices",
              "network-configurations-in-real-devices",
              "sim-support-realdevices",
              "contacts-on-real-devices",
              "real-device-adb-shell",
              "ui-inspector",
              {
                type: "category",
                collapsed: true,
                label: "Screen Reader",
                items: [
                  "screen-reader-on-real-devices-app",
                  "screen-reader-voiceover-real-devices-app",
                ],
              },
              "accessibility-settings-ios",
              "devtools-on-real-devices-app",
              "set-date-time-hour-format-real-devices",
              "device-passcode-on-realdevice",
              "certificate-injection-on-realdevice",
              "assistive-touch-on-real-ios-devices",
              "dark-mode-on-real-devices",
              "low-power-mode-on-real-devices",
              "group-folder-redirect-on-real-device",
              "apple-pay-manual",
              "audio-injection-manual",
              "upload-files-media",
              "multi-device-testing",
              "manual-app-profiling",
            ],
          },
          "manual-tests-dashboard",
        ],
      },
    ],
    [
      {
        type: "category",
        collapsed: true,
        label: "Browser Testing",
        items: [
          "browser-testing-on-real-devices",
          "how-to-use-in-session-testing-tools",
          {
            type: "category",
            collapsed: true,
            label: "Features",
            items: [
              {
                type: "category",
                collapsed: true,
                label: "Screen Reader",
                items: [
                  "screen-reader-on-real-devices-browser",
                  "screen-reader-voiceover-real-devices-browser",
                ],
              },
              "ip-geolocation-on-real-devices-browser",
              "assistive-touch-on-real-ios-browser",
              "dark-mode-on-browser",
              "low-power-mode-on-browser",
              "network-configurations-in-browser",
              "contacts-on-real-devices-browser",
              "set-date-time-hour-format-real-devices-browser",
              "audio-injection-manual-browser",
            ]
          },
          "manual-tests-dashboard",
        ],
      },
    ],
    [
      {
        type: "category",
        collapsed: true,
        label: "Private Cloud",
        items: [
          "public-cloud-vs-private-cloud",
          "select-pre-installed-apps",
          "private-device-allocation-to-teams",
        ],
      },
    ],
  ],

  SeleniumTestingSidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: { className: "back-to-main-menu" },
    },
    [
      {
        type: "category",
        collapsed: false,
        label: "Get Started",
        items: [
          { type: "doc", id: "lambdatest-running-your-first-selenium-test" },
          { type: "doc", id: "selenium-agent-skills" },
          { type: "doc", id: "inside-lambdatest-automation-platform" },
          { type: "doc", id: "debugging-options" },
          { type: "doc", id: "filter-your-selenium-tests" },
          { type: "doc", id: "migrate-selenium-test-suite" },
          { type: "doc", id: "selenium-automation-capabilities" },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Languages & Frameworks",
        items: [
          { type: "doc", id: "java-framework" },
          { type: "doc", id: "running-javascript-test-scripts-on-lambdatest" },
          { type: "doc", id: "python-with-selenium-running-python-automation-scripts-on-testmu-selenium-grid" },
          { type: "doc", id: "ruby" },
          { type: "doc", id: "php-framework" },
          { type: "doc", id: "csharp-with-selenium" },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Features",
        items: [
          { type: "doc", id: "test-locally-hosted-websites-with-selenium" },
          { type: "doc", id: "selenium-geolocation-capabilities" },
          { type: "doc", id: "network-throttling" },
          { type: "doc", id: "configure-timezones" },
          { type: "doc", id: "smart-wait" },
          { type: "doc", id: "auto-heal" },
          { type: "doc", id: "run-tests-with-webdriver-bidi" },
          { type: "doc", id: "custom-header" },
          { type: "doc", id: "custom-dns-map" },
          { type: "doc", id: "mock-video-injection-web-automation-selenium-chromium" },
          { type: "doc", id: "mute-test-scenarios" },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Guides",
        items: [
          { type: "doc", id: "upload-files-using-lambdatest" },
          { type: "doc", id: "perform-selenium-automation-on-headless-browsers" },
          { type: "doc", id: "ie-mode-on-edge" },
          { type: "doc", id: "custom-chrome" },
          { type: "doc", id: "setup-pre-run-executable" },
          { type: "doc", id: "run-selenium-test-behind-the-proxy" },
          { type: "doc", id: "selenium-mask-your-data" },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Reference",
        items: [
          { type: "doc", id: "lighthouse-reports-hooks" },
          { type: "doc", id: "performance-tips" },
          { type: "doc", id: "lambda-hooks" },
          { type: "doc", id: "error-messages" },
          { type: "doc", id: "timeouts-issues-and-resolutions" },
        ],
      },
    ],
  ],


  CypressTestingSidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: { className: "back-to-main-menu" },
    },
    [
      {
        type: "category",
        collapsed: false,
        label: "Getting Started",
        items: [
          { type: "doc", id: "getting-started-with-cypress-testing" },
          { type: "doc", id: "cypress-agent-skills" },
          { type: "doc", id: "cypress-cli-commands" },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Test Capabilities",
        items: [
          { type: "doc", id: "supported-browsers-and-os" },
          { type: "doc", id: "run-settings" },
          { type: "doc", id: "private-dependencies-cypress" },
          { type: "doc", id: "download-artefacts-cypress" },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Integrations",
        items: [
          { type: "doc", id: "integrate-lambdatest-with-cypress" },
          { type: "doc", id: "applitools-integration-cypress" },
          { type: "doc", id: "cypress-mochaawesome-report" },
          { type: "doc", id: "cypress-detailed-command-logs" },
        ],
      },
    ],
  ],

  PlaywrightTestingSidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: { className: "back-to-main-menu" },
    },
    [
      {
        type: "category",
        collapsed: false,
        label: "Get Started",
        items: [
          { type: "doc", id: "playwright-testing-guide" },
          { type: "doc", id: "playwright-agent-skills" },
          { type: "doc", id: "migrate-playwright-tests" },
          { type: "doc", id: "playwright-test-execution-setup" },
          { type: "doc", id: "playwright-caps" },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Languages & Frameworks",
        items: [
          { type: "doc", id: "java-with-playwright" },
          { type: "doc", id: "javascript-with-playwright" },
          { type: "doc", id: "python-with-playwright" },
          { type: "doc", id: "csharp-with-playwright" },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Features",
        items: [
          { type: "doc", id: "playwright-auto-heal" },
          { type: "doc", id: "playwright-android-guide" },
          { type: "doc", id: "playwright-webview-test" },
          { type: "doc", id: "playwright-ios-guide" },
          { type: "doc", id: "mute-test-scenarios" },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Integrations",
        items: [
          { type: "doc", id: "playwright-playwrighttest" },
          { type: "doc", id: "playwright-lighthouse-library" },
        ],
      },
    ],
  ],

  PuppeteerTestingSidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: { className: "back-to-main-menu" },
    },
    [
      {
        type: "category",
        collapsed: false,
        label: "Get Started",
        items: [
          { type: "doc", id: "puppeteer-testing-guide" },
          { type: "doc", id: "puppeteer-agent-skills" },
          { type: "doc", id: "puppeteer-test-execution" },
          { type: "doc", id: "puppeteer-capabilities" },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Integrations",
        items: [
          { type: "doc", id: "puppeteer-mocha" },
          { type: "doc", id: "puppeteer-jest" },
          { type: "doc", id: "puppeteer-pytest-pyppeteer" },
        ],
      },
    ],
  ],

  K6BrowserTestingSidebar: [
    {
      type: 'link',
      label: 'Back',
      href: '/docs/',
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "doc",
        id: "k6-browser-testing",
        label: "K6 Browser Testing ",
      },
    ],
  ],

  EmuSimuSidebar: [
    {
      type: 'link',
      label: 'Back',
      href: '/docs/',
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      "app-automation-app-sim",
      "build-ios-app-for-simulator-testing",
      "virtual-device-flutter-apps",
    ],
  ],

  AppiumTestingSidebar: [
    {
      type: 'link',
      label: 'Back',
      href: '/docs/',
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "category",
        collapsed: true,
        label: "Appium Testing",
        link: {
          type: "doc",
          id: "getting-started-with-appium-testing",
        },
        items: [

          {
            type: "category",
            collapsed: true,
            label: "Languages and Frameworks",
            link: {
              type: "doc",
              id: "appium-languages-and-frameworks",
            },
            items: [
              {
                type: "category",
                collapsed: true,
                label: "Java",
                link: {
                  type: "doc",
                  id: "appium-java",
                },
                items: [
                  "appium-java-junit",
                  "appium-java-jbehave",
                  "appium-java-cucumber",
                  "appium-java-testng",
                ],
              },
              {
                type: "category",
                collapsed: true,
                label: "JavaScript",
                link: {
                  type: "doc",
                  id: "appium-nodejs",
                },
                items: ["appium-nodejs-webdriverio", "appium-nodejs-mocha"],
              },
              {
                type: "category",
                collapsed: true,
                label: "Python",
                link: {
                  type: "doc",
                  id: "appium-python",
                },
                items: [
                  "appium-python-behave",
                  "appium-python-robot",
                  "appium-python-gauge",
                  "appium-python-pytest",
                ],
              },
              {
                type: "category",
                collapsed: true,
                label: "Ruby",
                link: {
                  type: "doc",
                  id: "appium-ruby",
                },
                items: ["appium-ruby-cucumber", "appium-ruby-rspec"],
              },
              {
                type: "category",
                collapsed: true,
                label: "PHP",
                link: {
                  type: "doc",
                  id: "appium-php",
                },
                items: ["appium-php-behat"],
              },
              {
                type: "category",
                collapsed: true,
                label: "C#",
                link: {
                  type: "doc",
                  id: "appium-csharp",
                },
                items: ["appium-csharp-nunit"],
              },
              "appium-kotlin",
              "test-flutter-apps",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Setup",
            items: [
              {
                type: "category",
                collapsed: true,
                label: "Application",
                items: [
                  "application-setup-via-api",
                  "application-setup-via-gui",
                ],
              },
              "desired-capabilities-in-appium",
              "supported-appium-versions",
              "supported-appium-plugins",
              "list-of-supported-locales",
              //"appium-ip-geolocation",
              "supported-timezone",
              "app-testing-apis",
              "appium-lambdatest-hooks",
              "appium-install-uninstall-lambdatest-hooks",
              "appium-uploading-retrieving-files",
              "appium-firebase-app-upload",
              "appium-flutter-integration",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Features",
            items: [
              "camera-image-injection",
              "video-injection",
              "biometric-authentication",
              "audio-injection",
              "regular-expression-appium",
              "appium-upload-media",
              "appium-upload-contacts",
              "network-configurations",
              "app-auto-network-throttling",
              "sim-support",
              "appium-ip-geolocation",
              "appium-app-performance",
              "app-automation-slack-notifications",
              "appium-ios-app-settings",
              "ios-keychain-cleanup",
              "group-folder-redirects",
              "adb-commands-support",
              "login-google-android",
              "disable-screenshot-block",
              "appium-custom-header",
              "basic-authentication-for-web-automation",
              "live-debug-in-app-automation",
              "appium-date-and-time",
              "device-passcode-appautomation",
              "certificate-injection-appautomation",
              "set-device-dark-mode",
              "smart-heal-appium",
              "apple-pay-auto",
              "button-text-click",
              "ios-shake-gesture-appautomation",
              "appium-terminal-logs",
              "mute-test-scenarios",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Smart TV Automation",
            items: ["appium-appletv", "appium-firetv", "appium-androidtv"],
          },
          {
            type: "category",
            collapsed: true,
            label: "Integrations",
            items: ["appium-inspector", "alttester-unity-game-automation"],
          },
          {
            type: "category",
            collapsed: true,
            label: "Local Testing",
            items: ["testing-apps-locally"],
          },
          "migrate-appium-tests-from-browserstack-and-saucelabs",
        ],
      },
    ],
  ],

  EspressoTestingSidebar: [
    {
      type: 'link',
      label: 'Back',
      href: '/docs/',
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "doc",
        label: "Getting Started with Espresso Testing",
        id: "getting-started-with-espresso-testing",
      },

      {
        type: "category",
        collapsed: true,
        label: "Supported Capabilities",
        link: {
          type: "doc",
          id: "espresso-supported-capabilities",
        },
        items: ["espresso-env-variables-settings"],
      },
      {
        type: "doc",
        label: "RegEx in Espresso",
        id: "regular-expression-espresso",
      },
      {
        type: "doc",
        label: "Supported Locales",
        id: "supported-locales-espresso",
      },
      {
        type: "doc",
        label: "Debug Espresso Tests",
        id: "debug-espresso-tests",
      },
      {
        type: "doc",
        label: "Troubleshoot Espresso Tests",
        id: "troubleshoot-espresso-tests",
      },
      {
        type: "category",
        collapsed: true,
        label: "Speedup Espresso Tests",
        items: [
          {
            type: "doc",
            label: "Sharding for Espresso",
            id: "sharding-espresso",
          },
          "speedup-espresso",
        ],
      },
      {
        type: "doc",
        label: "JUnit Report",
        id: "espresso-junit-report",
      },
      {
        type: "doc",
        label: "MockWebServer & Localhost",
        id: "espresso-mockwebserver-localhost",
      },
    ],
  ],

  XCUITestingSidebar: [
    {
      type: 'link',
      label: 'Back',
      href: '/docs/',
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "doc",
        label: "Getting Started with XCUI Testing",
        id: "getting-started-with-xcui-testing",
      },
      {
        type: "doc",
        label: "Supported Capabilities",
        id: "xcui-supported-capabilities",
      },
      {
        type: "doc",
        label: "RegEx in XCUI",
        id: "regular-expression-xcui",
      },
      {
        type: "doc",
        label: "Supported Locales",
        id: "supported-locales-xcui",
      },
      {
        type: "doc",
        label: "Creating iOS Applications",
        id: "ios-ipa-files-xcui",
      },
      {
        type: "category",
        collapsed: true,
        label: "Speedup XCUI Tests",
        items: ["sharding-xcui", "speedup-xcui"],
      },
      {
        type: "doc",
        label: "XCTestPlan",
        id: "xctestplan",
      },
      {
        type: "doc",
        label: "Xml Report",
        id: "xcui-xml-report",
      },
      {
        type: "doc",
        label: "XCResult",
        id: "xcresult",
      },
      {
        type: "doc",
        label: "SmartUI Visual Regression",
        id: "xcui-visual-regression",
      },
    ],
  ],

  FlutterTestingSidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "doc",
        label: "Getting Started with Flutter Integration Driver",
        id: "appium-flutter-integration",
      },
      {
        type: "doc",
        label: "Getting Started with Flutter Android",
        id: "getting-started-with-flutter-dart-android-automation",
      },
      {
        type: "doc",
        label: "Getting Started with Flutter iOS",
        id: "getting-started-with-flutter-dart-ios-automation",
      },
      {
        type: "doc",
        label: "Flutter Supported Capabilities",
        id: "flutter-supported-capabilities",
      },
    ],
  ],

  VisualRegressionTestingSidebar: [
    {
      type: 'link',
      label: 'Back',
      href: '/docs/',
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "category",
        collapsed: false,
        label: "Getting Started",
        link: {
          type: "doc",
          id: "smart-visual-regression-testing",
        },
        items: [
          "smartui-running-your-first-project",
          "smartui-omni-projects",
          "smartui-agent-skills",
          "smartui-guided-walkthrough",
          "smartui-cli-env-variables",
          "smartui-approval-workflow-guide",
        ],
      },
      {
        type: "category",
        collapsed: false,
        label: "Testing Frameworks",
        items: [
          {
            type: "category",
            label: "SDK Integration",
            collapsed: true,
            items: [
              {
                type: "category",
                label: "Selenium SDKs",
                collapsed: true,
                items: [
                  {
                    type: "doc",
                    label: "Java SDK",
                    id: "smartui-selenium-java-sdk",
                  },
                  {
                    type: "doc",
                    label: "JavaScript SDK",
                    id: "smartui-selenium-js-sdk",
                  },
                  {
                    type: "doc",
                    label: "C# SDK",
                    id: "smartui-selenium-csharp-sdk",
                  },
                  {
                    type: "doc",
                    label: "Python SDK",
                    id: "smartui-selenium-python-sdk",
                  },
                  {
                    type: "doc",
                    label: "Ruby SDK",
                    id: "smartui-selenium-ruby-sdk",
                  },
                ],
              },
              {
                type: "category",
                label: "Playwright SDKs",
                collapsed: true,
                items: [
                  {
                    type: "doc",
                    label: "Java SDK",
                    id: "smartui-playwright-java-sdk",
                  },
                  {
                    type: "doc",
                    label: "JavaScript SDK",
                    id: "smartui-playwright-sdk",
                  },
                  {
                    type: "doc",
                    label: "Python SDK",
                    id: "smartui-playwright-python-sdk",
                  },
                ],
              },
              {
                type: "doc",
                label: "Cypress SDK",
                id: "smartui-cypress-sdk",
              },
              {
                type: "doc",
                label: "Puppeteer SDK",
                id: "smartui-puppeteer-sdk",
              },
              {
                type: "doc",
                label: "TestCafe SDK",
                id: "smartui-testcafe-sdk",
              },
              {
                type: "doc",
                label: "WebdriverIO SDK",
                id: "smartui-wdio-sdk",
              },
              {
                type: "doc",
                label: "K6 Setup",
                id: "smartui-k6-setup",
              },
              {
                type: "category",
                label: "Mobile Testing",
                collapsed: true,
                items: [
                  {
                    type: "category",
                    label: "Mobile SDKs",
                    collapsed: true,
                    items: [
                      {
                        type: "doc",
                        label: "Appium Java SDK",
                        id: "smartui-appium-java-sdk",
                      },
                    ],
                  },
                  {
                    type: "category",
                    label: "Native Apps",
                    collapsed: true,
                    items: [
                      {
                        type: "doc",
                        label: "Espresso",
                        id: "espresso-visual-regression",
                      },
                      {
                        type: "doc",
                        label: "XCUITest",
                        id: "xcui-visual-regression",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "category",
            label: "Lambda Hooks",
            collapsed: true,
            items: [
              {
                type: "doc",
                label: "Selenium Hooks",
                id: "selenium-visual-regression",
              },
              {
                type: "doc",
                label: "Element Screenshot",
                id: "smartui-hooks-element-screenshot",
              },
              {
                type: "doc",
                label: "Region Ignore + Select",
                id: "smartui-hooks-region-ignore",
              },
              {
                type: "doc",
                label: "Hooks Layout + Full Page",
                id: "smartui-hooks-layout-fullpage-smartignore",
              },
              {
                type: "doc",
                label: "Fetch Status Auto-Wait",
                id: "smartui-hooks-fetch-status-timeout",
              },
              {
                type: "doc",
                label: "Comparison via Capabilities",
                id: "smartui-comparison-capabilities",
              },
              {
                type: "doc",
                label: "Playwright Hooks",
                id: "playwright-visual-regression",
              },
              {
                type: "doc",
                label: "Cypress Hooks",
                id: "smart-ui-cypress",
              },
              {
                type: "doc",
                label: "Appium Hooks",
                id: "smartui-appium-hooks",
              },
              {
                type: "doc",
                label: "Puppeteer Hooks",
                id: "puppeteer-visual-regression",
              },
            ],
          },
          {
            type: "doc",
            label: "Storybook Integration",
            id: "smart-ui-storybook",
          },
          {
            type: "category",
            collapsed: true,
            label: "Figma Integration",
            items: [
              {
                type: "doc",
                label: "Figma Web CLI",
                id: "smartui-cli-figma-web",
              },
              {
                type: "doc",
                label: "Figma App CLI",
                id: "smartui-cli-figma-app",
              },
              {
                type: "doc",
                label: "Figma CLI",
                id: "smartui-cli-figma",
              },
            ],
          },
          {
            type: "category",
            collapsed: false,
            label: "PDF Testing",
            link: {
              type: "doc",
              id: "smartui-pdf-comparison",
            },
            items: [
              {
                type: "doc",
                label: "PDF Upload via API",
                id: "smartui-pdf-api-upload",
              },
              {
                type: "doc",
                label: "PDF Upload via SDK",
                id: "smartui-pdf-java-sdk",
              },
              {
                type: "doc",
                label: "PDF Upload via CLI",
                id: "smartui-pdf-cli-upload",
              },
            ],
          },
        ],
      },

      {
        type: "category",
        collapsed: true,
        label: "Core Features",
        items: [
          {
            type: "doc",
            label: "SmartUI in Automation Dashboard",
            id: "smartui-automation-dashboard",
          },
          {
            type: "doc",
            label: "Baseline Management",
            id: "smartui-baseline-management",
          },
          {
            type: "doc",
            label: "A/B Testing & Variations",
            id: "smartui-ab-testing-variations",
          },
          {
            type: "doc",
            label: "Smart RCA (Root Cause Analysis)",
            id: "smartui-root-cause-analysis",
          },
          {
            type: "doc",
            label: "Visual AI Agent",
            id: "smartui-visual-ai",
          },
          {
            type: "doc",
            label: "Multiselect & Bulk Operations",
            id: "smartui-multiselect-bulkops",
          },
          {
            type: "doc",
            label: "Group by Test Cases",
            id: "smartui-group-by-test-cases",
          },
          {
            type: "doc",
            label: "Export Build Data",
            id: "smartui-export-build-data",
          },
          {
            type: "doc",
            label: "Audit & Activity Logs",
            id: "smartui-audit-logs",
          },
          {
            type: "doc",
            label: "Annotations in Audit Logs",
            id: "smartui-audit-logs-annotations",
          },
          {
            type: "doc",
            label: "Smart Comments",
            id: "smartui-smart-comments",
          },
          {
            type: "doc",
            label: "Draw on UI",
            id: "smartui-draw-on-ui",
          },
          {
            type: "doc",
            label: "Layout Regions",
            id: "smartui-layout-regions",
          },
          {
            type: "doc",
            label: "customCSS",
            id: "smartui-custom-css",
          },
          {
            type: "category",
            collapsed: true,
            label: "Smart Comparison Options",
            items: [
              {
                type: "doc",
                label: "Smart Ignore",
                id: "smartui-smartignore",
              },
              {
                type: "doc",
                label: "Ignore Colors",
                id: "smartui-ignore-colors",
              },
              {
                type: "doc",
                label: "Layout Testing",
                id: "smartui-layout-testing",
              },
              {
                type: "doc",
                label: "Mismatch Thresholds",
                id: "smartui-mismatch-thresholds",
              },
              {
                type: "doc",
                label: "Diff Highlighter",
                id: "smartui-diff-highlighter",
              },
            ],
          },
        ],
      },

      {
        type: "category",
        collapsed: true,
        label: "Upload & Capture",
        items: [
          {
            type: "doc",
            label: "CLI Upload",
            id: "smartui-cli-upload",
          },
          {
            type: "doc",
            label: "API Upload",
            id: "smartui-upload-api-v2",
          },
          {
            type: "doc",
            label: "Capture Static URLs via CLI",
            id: "smartui-cli",
          },
          {
            type: "doc",
            label: "CLI Complete Reference",
            id: "smartui-cli-complete-reference",
          },
        ],
      },

      {
        type: "category",
        collapsed: true,
        label: "Project Configuration",
        items: [
          {
            type: "doc",
            label: "Project Settings",
            id: "smartui-project-settings",
          },
          {
            type: "doc",
            label: "Test Settings",
            id: "test-settings-options",
          },
          {
            type: "doc",
            label: "HTML DOM Options",
            id: "html-dom-smartui-options",
          },
          {
            type: "doc",
            label: "Build Config & Options",
            id: "smart-ui-build-options",
          },
          {
            type: "doc",
            label: "Multiple Projects per Repo",
            id: "smartui-multiple-projects-per-repo",
          },
        ],
      },

      {
        type: "category",
        collapsed: true,
        label: "Git & Branching",
        items: [
          {
            type: "doc",
            label: "Default Branching Strategy",
            id: "smartui-cli-git-branching-strategy",
          },
          {
            type: "doc",
            label: "Smart Git Strategy",
            id: "smartui-smart-git-strategy",
          },
          {
            type: "doc",
            label: "Merging Branches",
            id: "smartui-branch-merging",
          },
          {
            type: "doc",
            label: "Build Merging",
            id: "smartui-build-merging",
          },
        ],
      },

      {
        type: "category",
        collapsed: true,
        label: "Stabilize Screenshots",
        items: [
          {
            type: "doc",
            label: "Handling Dynamic Data",
            id: "smartui-handle-dynamic-data",
          },
          {
            type: "doc",
            label: "Freezing Animations",
            id: "smartui-freeze-animations",
          },
          {
            type: "doc",
            label: "Handle Videos",
            id: "smartui-handle-videos",
          },
          {
            type: "doc",
            label: "Handle Lazy Loading",
            id: "smartui-handle-lazy-loading",
          },
          {
            type: "doc",
            label: "Handle Sticky Elements",
            id: "smartui-handle-sticky-elements",
          },
          {
            type: "doc",
            label: "CustomScroll Screenshots",
            id: "smartui-customscroll",
          },
        ],
      },

      {
        type: "category",
        collapsed: true,
        label: "Advanced CLI",
        items: [
          {
            type: "doc",
            label: "Exec Command",
            id: "smartui-cli-exec",
          },
          {
            type: "doc",
            label: "Groups Screenshots by Build Names",
            id: "smartui-sdk-build-name",
          },
          {
            type: "doc",
            label: "Fetch Results",
            id: "smartui-sdk-fetch-results",
          },
          {
            type: "doc",
            label: "Configuration Options",
            id: "smartui-sdk-config-options",
          },
          {
            type: "doc",
            label: "SmartUI SDK Capabilities",
            id: "smartui-sdk-capabilities",
          },
          {
            type: "doc",
            label: "Advanced Comparison Settings",
            id: "smartui-cli-responsive-dom",
          },
        ],
      },

      {
        type: "category",
        collapsed: true,
        label: "Technical Configuration",
        items: [
          {
            type: "doc",
            label: "Tunnel Configuration",
            id: "smartui-sdk-tunnel",
          },
          {
            type: "doc",
            label: "Shadow DOM",
            id: "smartui-shadow-dom",
          },
          {
            type: "doc",
            label: "Capturing Multiple Asset Hosts",
            id: "smartui-multiple-assets-hosts",
          },
          {
            type: "doc",
            label: "Custom Request Headers",
            id: "smartui-cli-request-headers",
          },
          {
            type: "doc",
            label: "Basic Authentication",
            id: "smartui-cli-basic-auth",
          },
        ],
      },

      {
        type: "category",
        collapsed: true,
        label: "Integrations",
        items: [
          {
            type: "category",
            collapsed: true,
            label: "CI/CD Tools",
            items: [
              {
                type: "doc",
                label: "GitHub Actions",
                id: "smartui-with-github-actions",
              },
              {
                type: "doc",
                label: "GitLab",
                id: "smartui-with-gitlab",
              },
              {
                type: "doc",
                label: "Bitbucket",
                id: "smartui-with-bitbucket",
              },
              {
                type: "doc",
                label: "Semaphore",
                id: "smartui-with-semaphore",
              },
              {
                type: "doc",
                label: "Azure",
                id: "smartui-with-azure",
              },
              {
                type: "doc",
                label: "Buildkite",
                id: "smartui-with-buildkite",
              },
              {
                type: "doc",
                label: "Circle CI",
                id: "smartui-with-circle-ci",
              },
              {
                type: "doc",
                label: "Travis CI",
                id: "smartui-with-travis-ci",
              },
              {
                type: "doc",
                label: "Netlify",
                id: "smartui-with-netlify",
              },
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "TestMu AI Products",
            items: [
              {
                type: "doc",
                label: "KaneAI Integration",
                id: "kaneai-smartui-visual-testing",
              },
              {
                type: "category",
                collapsed: true,
                label: "HyperExecute Integration",
                items: [
                  {
                    type: "category",
                    collapsed: true,
                    label: "SmartUI Hooks",
                    items: [
                      {
                        type: "doc",
                        label: "SmartUI Capture Onboarding",
                        id: "hyperexecute-smart-ui-capture-onboarding",
                      },
                      {
                        type: "doc",
                        label: "Selenium",
                        id: "hyperexecute-smart-ui-testing-using-selenium",
                      },
                      {
                        type: "doc",
                        label: "Cypress",
                        id: "hyperexecute-smart-ui-testing-using-cypress",
                      },
                      {
                        type: "doc",
                        label: "Playwright",
                        id: "hyperexecute-smart-ui-test-using-playwright",
                      },
                    ],
                  },
                  {
                    type: "category",
                    collapsed: true,
                    label: "SmartUI SDK",
                    items: [
                      {
                        type: "category",
                        collapsed: true,
                        label: "Selenium",
                        items: [
                          {
                            type: "doc",
                            label: "JavaScript",
                            id: "hyperexecute-smart-ui-sdk-selenium-javascript",
                          },
                          {
                            type: "doc",
                            label: "C#",
                            id: "hyperexecute-smart-ui-sdk-selenium-csharp",
                          },
                        ],
                      },
                      {
                        type: "doc",
                        label: "Cypress",
                        id: "hyperexecute-smart-ui-sdk-using-cypress",
                      },
                      {
                        type: "doc",
                        label: "Maestro",
                        id: "hyperexecute-smart-ui-sdk-maestro",
                      },
                      {
                        type: "doc",
                        label: "Playwright",
                        id: "hyperexecute-smart-ui-sdk-using-playwright",
                      },
                      {
                        type: "doc",
                        label: "Puppeteer",
                        id: "hyperexecute-smart-ui-sdk-using-puppeteer",
                      },
                    ],
                  },
                ],
              },
              {
                type: "category",
                collapsed: true,
                label: "WebScanner Integration",
                items: [
                  {
                    type: "doc",
                    label: "Visual Scan",
                    id: "web-scanner-visual-scan",
                  },
                ],
              },
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Third-Party Products",
            items: [
              {
                type: "doc",
                label: "Katalon Plugin",
                id: "smartui-katalon-plugin",
              },
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Pull Request Testing",
            items: [
              {
                type: "doc",
                label: "GitHub App",
                id: "smartui-github-app-integration",
              },
              {
                type: "doc",
                label: "GitLab PR Checks (Hooks)",
                id: "smartui-gitlab-pr-checks-hooks",
              },
              {
                type: "doc",
                label: "GitLab PR Checks (Exec)",
                id: "smartui-gitlab-pr-checks-exec",
              },
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Communication",
            items: [
              {
                type: "doc",
                label: "Slack Integration",
                id: "smartui-slack-integration",
              },
            ],
          },
        ],
      },

      {
        type: "doc",
        label: "Troubleshooting Guide",
        id: "smartui-troubleshooting-guide",
      },
    ],
  ],

  Analytics: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    {
      type: "doc",
      id: "analytics-overview",
    },
    {
      type: "category",
      collapsed: false,
      label: "Getting Started",

      items: ["analytics-dashboard-templates", "analytics-create-dashboard"],
    },
    {
      type: "category",
      collapsed: true,
      label: "Dashboards",
      items: [
        "analytics-dashboard-copilot",
        "analytics-dashboard-edit-layout",
        "analytics-dashboard-features",
        "analytics-widget-drill-down-export",
        "analytics-widget-filter-by-regex",
        "analytics-filter-by-custom-data",
        "analytics-dashboard-settings",
        "analytics-report-scheduling",
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "Widgets",
      link: {
        type: "doc",
        id: "analytics-widgets",
      },
      items: [
        {
          type: "category",
          collapsed: true,
          label: "Overview",
          items: [
            "analytics-modules-automation-test-overview",
            "analytics-modules-hyperexecute",
            "analytics-modules-manual-test-overview",
            "analytics-modules-smartui-analytics",
            "analytics-modules-accessibility-widgets",
            "analytics-modules-test-manager-widgets",
          ],
        },
        {
          type: "category",
          collapsed: false,
          label: "Custom Widgets",
          link: {
            type: "doc",
            id: "dashboards-custom-widgets",
          },
          items: [
            "analytics-heatmap-widgets",
            "analytics-bar-line-widgets",
            "analytics-table-widgets",
          ],
        },
        "analytics-test-case-insights",
        "analytics-modules-resource-utilization",
        "analytics-test-time-trends",
        {
          type: "category",
          collapsed: true,
          label: "Error Insights",
          items: [
            "analytics-modules-test-intelligence-command-logs-analytics",
            "analytics-modules-error-insights",
          ],
        },
        "analytics-allure-api-widgets",
        "analytics-modules-groups",
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "Test Intelligence - AI",
      items: [
        "analytics-test-insights",
        "analytics-modules-test-intelligence-flaky-test-analytics",
        "analytics-build-insights",
        "analytics-build-comparison",
        "analytics-unique-instances-retry-detection",
        "analytics-smart-tags-test-intelligence",
        "analytics-test-failure-classification",
        "analytics-ai-root-cause-analysis",
        {
          type: "category",
          collapsed: true,
          label: "App Profiling",
          items: [
            "insights-app-profiling",
            "insights-app-profiling-comparison",
          ],
        },
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "Reports",
      items: [
        "insights-usage-report",
        "analytics-project-report",
        "insights-private-real-devices",
        "insights-private-desktop",
        "analytics-sub-organization-widgets",
      ],
    },
    "insights-best-practices",
    "analytics-faqs",
  ],

  TestIntelligence: [
    {
      type: 'link',
      label: 'Back',
      href: '/docs/',
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "doc",
        label: "Overview",
        id: "test-intelligence-overview",
      },
      {
        type: "doc",
        label: "Flaky Tests Detection",
        id: "test-intelligence-modules-flaky-test-detection",
      },
      {
        type: "doc",
        label: "Command Error Logs Analytics",
        id: "test-intelligence-command-error-logs-analytics",
      },
    ],
  ],

  LambdaTestMigrationGuideSidebar: [
    {
      type: 'link',
      label: 'Back',
      href: '/docs/',
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "doc",
        label: "TestMu AI Migration Guide",
        id: "capability-map",
      },
      {
        type: "doc",
        label: "BrowserStack To TestMu AI Migration",
        id: "browserstack-to-lambdatest-migration-guide",
      },
      {
        type: "doc",
        label: "Sauce Labs To TestMu AI Migration",
        id: "saucelabs-to-lambdatest-migration-guide",
      },
      {
        type: "doc",
        label: "Legacy Platform To TestMu AI Migration",
        id: "migrate-legacy-lambdatest",
      },
    ],
  ],

  VisualUITestingSidebar: [
    {
      type: 'link',
      label: 'Back',
      href: '/docs/',
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "doc",
        label: "Visual User Interface Testing",
        id: "visual-ui-testing",
      },
      {
        // type: "category",
        // collapsed: true,
        // label: "Visual User Interface Testing",
        // items: [
        //   {
        type: "category",
        collapsed: true,
        label: "Automated Screenshot Testing",
        items: [
          "automated-st",
          "mark-as-bug",
          "automated-ss-api",
          "ss-behind-login",
          "default-list-of-browsers-for-screesnshot-testing",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Responsive Testing",
        items: ["responsive-testing", "mark-as-bug-responsive-testing"],
      },

      "smart-visual-testing",
    ],
    // },
  ],

  WebScannerSidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "doc",
        id: "web-scanner-overview",
        label: "Web Scanner Overview",
      },
      {
        type: "category",
        collapsed: false,
        label: "Getting Started",
        link: {
          type: "doc",
          id: "web-scanner-getting-started",
        },
        items: [
          "web-scanner-visual-scan",
          "web-scanner-accessibility-scan",
          "web-scanner-adding-urls",
          "web-scanner-scheduling-options",
          "web-scanner-advanced-features",
        ],
      },
    ],
  ],

  LTBrowserSidebar: [
    {
      type: 'link',
      label: 'Back',
      href: '/docs/',
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "doc",
        label: "LT Browser",
        id: "lt-browser",
      },
      {
        type: "doc",
        label: "Getting Started With LT Browser 2.0",
        id: "lt-browser-two",
      },
      {
        type: "doc",
        label: "Performance Report",
        id: "performance-report",
      },
      {
        type: "doc",
        label: "Network Throttling",
        id: "network-throttling-for-responsive-testing",
      },
      {
        type: "doc",
        label: "Scroll Sync",
        id: "scroll-sync",
      },
      {
        type: "doc",
        label: "Full Page Screenshots",
        id: "full-page-screenshots",
      },
      {
        type: "doc",
        label: "JavaScript Error Reports",
        id: "error-reports",
      },
    ],
  ],

  LTMCPServerSidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "doc",
        label: "Set up TestMu AI MCP Server",
        id: "lambdatest-mcp-server",
      },
      {
        type: "category",
        collapsed: true,
        label: "MCP Tools",
        items: [
          {
            type: "doc",
            label: "HyperExecute MCP",
            id: "hyperexecute-mcp-server",
          },
          {
            type: "doc",
            label: "Automation MCP",
            id: "automation-mcp-server",
          },
          {
            type: "doc",
            label: "Native App Automation",
            id: "native-app-automation-mcp",
          },
          {
            type: "doc",
            label: "SmartUI MCP",
            id: "smartui-mcp-server",
          },
          {
            type: "doc",
            label: "Accessibility MCP",
            id: "accessibility-mcp-server",
          },
          {
            type: "doc",
            label: "Test Manager MCP",
            id: "test-manager-mcp-server",
          },
        ],
      },
    ],
  ],


  TestingLocalPagesSidebar: [
    {
      type: 'link',
      label: 'Back',
      href: '/docs/',
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "category",
        collapsed: true,
        label: "Getting started with Tunnel",
        link: {
          type: "doc",
          id: "lambdatest-tunnel",
        },
        items: [
          "testing-locally-hosted-pages",
          "local-testing-linux",
          "local-testing-windows",
          "local-testing-macos",
          "real-time-locally-hosted-pages",
          "testing-apps-locally",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Configuration and Modifiers",
        items: [
          "lambda-tunnel-modifiers",
          "advanced-tunnel-features",
          "environment-variables-supported-by-lambda-tunnel",
        ],
      },
      {
        type: "doc",
        label: "GUI Application: Underpass",
        id: "underpass-tunnel-application",
      },
      {
        type: "category",
        collapsed: true,
        label: "Integration and Automation",
        items: [
          "hyperexecute-how-to-configure-tunnel",
          "smartui-sdk-tunnel",
          "maven-tunnel-for-locally-hosted-web-applications",
          "integrate-lambdatest-extension-with-azure-pipelines",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Docker Integration",
        items: ["docker-tunnel", "docker-tunnel-extension"],
      },
      {
        type: "category",
        collapsed: true,
        label: "Advanced Features",
        items: [
          "sharing-lambda-tunnel",
          "load-balancing-in-lambda-tunnel",
          "charles-proxy",
          "dedicated-proxy",
          "bypass-proxy-domains",
          "socks5-proxy-support",
          "http2-support",
          "site-to-site-ipsec-vpn-setup",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Troubleshooting",
        items: [
          "troubleshooting-lambda-tunnel",
          "set-open-file-limit-while-using-proxy",
        ],
      },
      {
        type: "doc",
        label: "Release Notes",
        id: "tunnel-release-notes",
      },
    ],
  ],

  TestManagementSidebar: [
    {
      type: 'link',
      label: 'Back',
      href: '/docs/',
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "doc",
        label: "Test Logs",
        id: "test-logs",
      },
    ],
  ],

  AccountManagementSidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "doc",
        label: "Account Management",
        id: "account-management",
      },
      {
        type: "doc",
        label: "Manage Subscriptions",
        id: "manage-subscriptions",
      },
      {
        type: "doc",
        label: "Credits Management",
        id: "credits-management",
      },
      {
        type: "doc",
        label: "Service Accounts",
        id: "service-accounts",
      },
      {
        type: "doc",
        label: "Sub Organizations",
        id: "sub-organizations",
      },
      {
        type: "doc",
        label: "Support Access",
        id: "support-access",
      },
      {
        type: "doc",
        label: "User Management",
        id: "user-management",
      },
      {
        type: "doc",
        label: "Team Management",
        id: "team-management",
      },
      {
        type: "doc",
        label: "Roles and Permissions (RBAC)",
        id: "rbac-roles-and-permissions",
      },
      {
        type: "doc",
        label: "Multi Factor Authentication",
        id: "multi-factor-authentication",
      },
      {
        type: "doc",
        label: "Deleting TestMu AI Account",
        id: "delete-lambdatest-account",
      },
      {
        type: "doc",
        label: "Group Management",
        id: "group-management",
      },
      {
        type: "doc",
        label: "Audit Logs",
        id: "audit-logs",
      },
      {
        type: "doc",
        label: "Password and Access Key Expiration Policy",
        id: "password-and-access-key-expiration-policy",
      },
      {
        type: "doc",
        label: "Tunnel Security",
        id: "tunnel-security",
      },
      {
        type: "doc",
        label: "Access Management - KaneAI <> Test Manager",
        id: "kaneai-test-manager-access-management",
      },
      {
        type: "doc",
        label: "Manage AI Capabilities",
        id: "manage-ai-capabilities",
      },
    ],
  ],

  ScimSidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "doc",
        label: "SCIM Provisioning",
        id: "scim",
      },
      {
        type: "doc",
        label: "Azure AD",
        id: "azure-scim",
      },
      {
        type: "doc",
        label: "Okta",
        id: "okta-scim",
      },
      {
        type: "doc",
        label: "JumpCloud",
        id: "jumpcloud-scim",
      },
      {
        type: "doc",
        label: "PingOne",
        id: "pingone-scim",
      },
    ],
  ],

  SingleSignOnSidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "doc",
        label: "Getting Started with Single Sign-on",
        id: "single-sign-on",
      },
      {
        type: "doc",
        label: "Create SSO Connection",
        id: "lambdatest-sso-self-serve",
      },
      {
        type: "doc",
        label: "Manage SSO Connection",
        id: "lambdatest-sso-manage-connection",
      },
      {
        type: "doc",
        label: "Okta Integration",
        id: "lambdatest-sso-okta-integration",
      },
      {
        type: "doc",
        label: "OneLogin Integration",
        id: "lambdatest-sso-onelogin-using-saml",
      },
      {
        type: "doc",
        label: "Google Custom Integration",
        id: "lambdatest-sso-google",
      },
      {
        type: "doc",
        label: "Azure AD",
        id: "sso-azure-integration",
      },
      {
        type: "doc",
        label: "PingIdentity",
        id: "lambdatest-sso-pingidentity-integration",
      },
      {
        type: "doc",
        label: "OIDC",
        id: "lambdatest-sso-oidc",
      },
    ],
  ],

  ConcurrencyWidgetSidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "doc",
        label: "Concurrency Widget",
        id: "concurrency-widget",
      },
    ],
  ],

  BrowserCloudSidebar: [
    {
      type: 'link',
      label: 'Back',
      href: '/docs/',
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "category",
        collapsed: true,
        label: "Get Started",
        items: [
          {
            type: "doc",
            label: "What is Browser Cloud",
            id: "browser-cloud-intro",
          },
          {
            type: "doc",
            label: "Launch Session With SDK",
            id: "browser-cloud-quickstart",
          },
          {
            type: "doc",
            label: "Launch Session With Agent Skills",
            id: "browser-cloud-skills",
          },
          {
            type: "doc",
            label: "Connect to a Session",
            id: "browser-cloud-connect",
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Manage Your Sessions",
        items: [
          {
            type: "doc",
            label: "Understand the Sessions API",
            id: "browser-cloud-sessions-overview",
          },
          {
            type: "doc",
            label: "Handle Session Lifecycle",
            id: "browser-cloud-session-lifecycle",
          },
          {
            type: "doc",
            label: "Configure Session Options",
            id: "browser-cloud-session-configuration",
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Preserve Browser State",
        items: [
          {
            type: "doc",
            label: "Transfer Cookies & Storage",
            id: "browser-cloud-context",
          },
          {
            type: "doc",
            label: "Stay Logged in Across Runs",
            id: "browser-cloud-profiles",
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Extend Your Browser",
        items: [
          {
            type: "doc",
            label: "Stealth Mode to Avoid Bot Detection",
            id: "browser-cloud-stealth",
          },
          {
            type: "doc",
            label: "Upload and Download Files",
            id: "browser-cloud-files",
          },
          {
            type: "doc",
            label: "Load Chrome Extensions",
            id: "browser-cloud-extensions",
          },
          {
            type: "doc",
            label: "Access Localhost and Internal Networks",
            id: "browser-cloud-tunnel",
          },
          {
            type: "doc",
            label: "One-Liner Scrape, Screenshot, and PDF",
            id: "browser-cloud-quick-actions",
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Debug and Troubleshoot",
        items: [
          {
            type: "doc",
            label: "Replay and Debug Sessions",
            id: "browser-cloud-debugging",
          },
          {
            type: "doc",
            label: "API Reference",
            id: "browser-cloud-api-reference",
          },
        ],
      },
    ],
  ],

  KaneCLISidebar: [
    {
      type: "link",
      label: "Back",
      href: "/docs/",
      customProps: {
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "category",
        collapsed: false,
        label: "Getting Started",
        link: {
          type: "doc",
          id: "kane-cli-introduction",
        },
        items: [
          {
            type: "doc",
            label: "Installation",
            id: "kane-cli-installation",
          },
          {
            type: "doc",
            label: "Quick Start",
            id: "kane-cli-quickstart",
          },
          {
            type: "doc",
            label: "Authentication",
            id: "kane-cli-authentication",
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Core Concepts",
        items: [
          {
            type: "doc",
            label: "Modes of Operation",
            id: "kane-cli-modes",
          },
          {
            type: "doc",
            label: "Writing Objectives",
            id: "kane-cli-writing-objectives",
          },
          {
            type: "doc",
            label: "API Calls",
            id: "kane-cli-api-calls",
          },
          {
            type: "doc",
            label: "Browser State",
            id: "kane-cli-browser-state",
          },
          {
            type: "doc",
            label: "Variables & Context",
            id: "kane-cli-variables-and-context",
          },
          {
            type: "doc",
            label: "Configuration",
            id: "kane-cli-configuration",
          },
          {
            type: "doc",
            label: "Test Manager Integration",
            id: "kane-cli-tms-integration",
          },
          {
            type: "doc",
            label: "Test.md",
            id: "kane-cli-testmd",
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Mobile Testing",
        link: {
          type: "doc",
          id: "kane-cli-mobile",
        },
        items: [
          {
            type: "doc",
            label: "iOS Simulator Setup",
            id: "kane-cli-mobile-simulator",
          },
          {
            type: "doc",
            label: "Android Emulator Setup",
            id: "kane-cli-mobile-emulator",
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Use Cases",
        link: {
          type: "doc",
          id: "kane-cli-use-cases",
        },
        items: [
          {
            type: "doc",
            label: "API Testing",
            id: "api-testing-with-kane-cli",
          },
          {
            type: "doc",
            label: "AI Coding Agents",
            id: "kane-cli-with-ai-coding-agents",
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Generate Test Cases",
        items: [
          {
            type: "doc",
            label: "Overview",
            id: "kane-cli-generate",
          },
          {
            type: "doc",
            label: "Workflow",
            id: "kane-cli-generate-workflow",
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Assurance",
        items: [
          {
            type: "doc",
            label: "Overview",
            id: "kane-cli-assurance",
          },
          {
            type: "doc",
            label: "Context Graph",
            id: "kane-cli-assurance-context",
          },
          {
            type: "doc",
            label: "Designing Tests",
            id: "kane-cli-assurance-design",
          },
          {
            type: "doc",
            label: "Coverage",
            id: "kane-cli-assurance-coverage",
          },
          {
            type: "doc",
            label: "Maintaining the Suite",
            id: "kane-cli-assurance-maintain",
          },
          {
            type: "doc",
            label: "Agents & CI",
            id: "kane-cli-assurance-automation",
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Evidence",
        items: [
          {
            type: "doc",
            label: "Overview",
            id: "kane-cli-evidence",
          },
          {
            type: "doc",
            label: "Pack Structure",
            id: "kane-cli-evidence-pack-structure",
          },
          {
            type: "doc",
            label: "Viewing Evidence",
            id: "kane-cli-evidence-viewing",
          },
          {
            type: "doc",
            label: "Validating Packs",
            id: "kane-cli-evidence-validate",
          },
          {
            type: "doc",
            label: "Merging Packs",
            id: "kane-cli-evidence-merge",
          },
          {
            type: "doc",
            label: "Debugging from a Pack",
            id: "kane-cli-evidence-debugging",
          },
          {
            type: "doc",
            label: "The .evidence Format",
            id: "kane-cli-evidence-format",
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Checkpoints",
        items: [
          {
            type: "doc",
            label: "Overview",
            id: "kane-cli-checkpoints",
          },
          {
            type: "doc",
            label: "Visual",
            id: "kane-cli-checkpoint-visual",
          },
          {
            type: "doc",
            label: "Textual (DOM)",
            id: "kane-cli-checkpoint-textual",
          },
          {
            type: "doc",
            label: "URL",
            id: "kane-cli-checkpoint-url",
          },
          {
            type: "doc",
            label: "Title",
            id: "kane-cli-checkpoint-title",
          },
          {
            type: "category",
            collapsed: true,
            label: "DevTools",
            items: [
              {
                type: "doc",
                label: "Overview",
                id: "kane-cli-checkpoint-devtools",
              },
              {
                type: "doc",
                label: "Network",
                id: "kane-cli-checkpoint-devtools-network",
              },
              {
                type: "doc",
                label: "Console",
                id: "kane-cli-checkpoint-devtools-console",
              },
              {
                type: "doc",
                label: "Performance",
                id: "kane-cli-checkpoint-devtools-performance",
              },
              {
                type: "doc",
                label: "Cookies",
                id: "kane-cli-checkpoint-devtools-cookies",
              },
              {
                type: "doc",
                label: "localStorage",
                id: "kane-cli-checkpoint-devtools-localstorage",
              },
              {
                type: "doc",
                label: "Clipboard",
                id: "kane-cli-checkpoint-devtools-clipboard",
              },
            ],
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Agent Mode",
        items: [
          {
            type: "doc",
            label: "Agent Mode",
            id: "kane-cli-agent-mode",
          },
          {
            type: "doc",
            label: "Parallel Execution",
            id: "kane-cli-parallel-execution",
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "CI/CD & Skills",
        items: [
          {
            type: "doc",
            label: "CI/CD Integration",
            id: "kane-cli-cicd",
          },
          {
            type: "doc",
            label: "Skills for AI Agents",
            id: "kane-cli-skills",
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Reference",
        items: [
          {
            type: "doc",
            label: "CLI Reference",
            id: "kane-cli-cli-reference",
          },
          {
            type: "doc",
            label: "Error Codes",
            id: "kane-cli-error-codes",
          },
          {
            type: "doc",
            label: "Troubleshooting",
            id: "kane-cli-troubleshooting",
          },
          {
            type: "doc",
            label: "Changelog",
            id: "kane-cli-changelog",
          },
        ],
      },
    ],
  ],

};
