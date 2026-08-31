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
        label: "Get Started",
        items: [
          "getting-started-with-hyperexecute",
          "hyperexecute-running-your-first-job",
          "hyperexecute-agent-skills",
          "hyperexecute-guided-walkthrough",
          "hyperexecute-job-reports",
          "deep-dive-into-hyperexecute-yaml",
          "hyperexecute-how-to-debug-job",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Languages & Frameworks",
        items: [
          "hyperexecute-selenium-testing",
          "playwright-integration-with-hyperexecute",
          "cypress-integration-with-hyperexecute",
          "hyperexecute-puppeteer-testing",
          "hyperexecute-appium-testing",
          "hyperexecute-espresso-testing",
          "hyperexecute-maestro-testing",
          "hyperexecute-detox-testing",
          "hyperexecute-xcui-testing",
          "hyperexecute-k6-testing",
          "hyperexecute-run-jmeter-tests",
          "hyperexecute-gattling-testing",
          "hyperexecute-api-testing",
          "hyperexecute-karate-testing",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Features",
        items: [
          "hyperexecute-test-splitting-and-multiplexing",
          "hyperexecute-artifacts",
          "hyperexecute-widgets",
          "hyperexecute-failfast",
          "hyperexecute-prioritize-tests",
          "analytics-ai-root-cause-analysis",
          "hyperexecute-background-services",
          "hyperexecute-auto-healing",
          "hyperexecute-projects",
          "hyperexecute-workflows",
          "hyperexecute-jobs-archiving",
          "hyperexecute-test-muting",
          "hyperexecute-task-metrics",
          "hyperexecute-rerun-failed-tests",
          "hyperexecute-bidi-testing",
          "rca",
          "mainframe-testing-with-hyperexecute",
          "hyperexecute-snooper",
          { type: "doc", label: "Global Policies", id: "hyperexecute-global-policies", customProps: { beta: true } },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Guides",
        items: [
          "hyperexecute-how-to-save-and-manage-secrets",
          "hyperexecute-how-to-configure-tunnel",
          "hyperexecute-how-to-configure-os-and-browser",
          "hyperexecute-how-to-find-correct-concurrency",
          "hyperexecute-how-to-configure-sourcePayload",
          "hyperexecute-browser-list-api",
          "hyperexecute-how-to-run-tests-using-local-selenium-drivers",
          "hyperexecute-how-to-perform-dependent-test-based-discovery",
          "hyperexecute-how-to-perform-group-based-test-discovery-in-testng",
          "hyperexecute-how-to-resolve-version-conflict",
          "hyperexecute-build-mobile-apps-using-tools",
          "hyperexecute-org-product-preferences",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Integrations",
        items: [
          "aws-codepipeline-with-hyperexecute",
          "azure-with-hyperexecute",
          "github-actions-with-hyperexecute",
          "gitlab-integration-with-hyperexecute",
          "circle-ci-with-hyperexecute",
          "jenkins-with-hyperexecute",
          "bitbucket-pipeline-with-hyperexecute",
          "travis-ci-with-hyperexecute",
          "teamcity-with-hyperexecute",
          "gocd-integration-with-hyperexecute",
          "bamboo-integration-with-hyperexecute",
          "semaphore-integration-with-hyperexecute",
          "hyperexecute-accelq-integration",
          "hyperexecute-algoqa-integration",
          "hyperexecute-github-app-integration",
          "hyperexecute-azure-test-plan",
          "katalon-integration-with-hyperexecute",
          "hyperexecute-provar-integration",
          "hyperexecute-qtest-integration",
          "hyperexecute-sikuli-integration",
          "hyperexecute-slack-integration",
          "hyperexecute-testim-integration",
          "hyperexecute-testsigma-integration",
          "tosca-integration-hyperexecute",
          "hyperexecute-winapp-integration",
          "hyperexecute-zephyr-scale-integration",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Private Cloud",
        items: [
          "hyperexecute-private-cloud-setup",
          "hyperexecute-private-cloud-setup-with-azure",
          "hyperexecute-private-cloud-setup-with-aws",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "References",
        items: [
          "hyperexecute-yaml-parameters",
          "hyperexecute-cli-run-tests-on-hyperexecute-grid",
          "hyperexecute-emu-simu-devices-list",
          "hyperexecute-shared-cloud-usage-limit",
          "hyperexecute-vs-traditional-test-grids",
          "hyperexecute-testng-use-cases",
          "hyperexecute-python-use-cases",
          "hyperexecute-csharp-use-cases",
          "saucelabs-to-hyperexecute-migrate",
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
        items: [
          { type: "doc", label: "Overview", id: "accessibility-testing" },
          { type: "doc", label: "Test With Browser DevTools", id: "accessibility-devtools" },
          { type: "doc", label: "Test With Native App Scanner", id: "accessibility-app-scanner" },
          { type: "doc", label: "Automate First Accessibility Test", id: "accessibility-automation-test" },
          { type: "doc", label: "Run Tests With Agent Skills", id: "accessibility-agent-skills" },
          { type: "doc", label: "Supported Automation Capabilities", id: "accessibility-automation-scan-configurations" },
          { type: "doc", label: "Test With Assistive Technologies", id: "screen-reader-on-accessibility" },
          { type: "doc", label: "View Reports", id: "accessibility-testing-navigating-dashboard" },
          { type: "doc", label: "Test Scheduling", id: "accessibility-test-scheduling" },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Languages & Frameworks",
        items: [
          { type: "doc", label: "Selenium", id: "accessibility-testng-test" },
          { type: "doc", label: "Cypress", id: "cypress-v10-accessibility-test" },
          { type: "doc", label: "Playwright", id: "playwright-accessibility-test" },
          { type: "doc", label: "Appium", id: "accessibility-native-app-automation-test" },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Features",
        items: [
          { type: "doc", label: "Hide and Restore Issues", id: "accessibility-hide-restore-issues" },
          { type: "doc", label: "AI Issue Detection Agent", id: "accessibility-ai-issue-detection-agent" },
          { type: "doc", label: "Capture Screenshot", id: "accessibility-capture-screenshot" },
          { type: "doc", label: "Fragment Identifier", id: "accessibility-fragment-identifier" },
          { type: "doc", label: "PDF Accessibility Scanning", id: "accessibility-pdf-accessibility-scanning" },
          { type: "doc", label: "Tag Support", id: "accessibility-tag-support" },
          { type: "doc", label: "Issue Remediation", id: "accessibility-issue-remediation-guide" },
        ],
      },
      {
        type: "doc",
        label: "Checklist",
        id: "accessibility-web-what-we-cover",
        className: "menu-bold",
      },
      {
        type: "doc",
        label: "Rule Repository",
        id: "accessibility-rule-repository",
        className: "menu-bold",
      },
      {
        type: "category",
        collapsed: true,
        label: "Web Scanner",
        items: [
          { type: "doc", label: "Overview", id: "web-scanner-getting-started" },
          { type: "doc", label: "Starting an Accessibility Scan", id: "web-scanner-accessibility-scan" },
          { type: "doc", label: "Adding URLs", id: "web-scanner-adding-urls" },
          { type: "doc", label: "Scheduling Options", id: "web-scanner-scheduling-options" },
          { type: "doc", label: "Advanced Features", id: "web-scanner-advanced-features" },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Integrations",
        items: [
          { type: "doc", label: "CI/CD", id: "accessibility-cicd-integration-guide" },
          { type: "doc", label: "JIRA / Slack", id: "accessibility-report-integrations" },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "References",
        items: [
          { type: "doc", label: "FAQs", id: "accessibility-faq" },
          { type: "doc", label: "Supported WCAG Versions & Browsers", id: "accessibility-supported-wcag-browsers" },
          { type: "doc", label: "Accessibility Compliance Guide (ADA / WCAG / EAA / 508)", id: "accessibility-compliance-guide" },
          { type: "doc", label: "VPAT & ACR evidence", id: "accessibility-vpat-report-generation" },
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
        className: "back-to-main-menu",
      },
    },
    [
      {
        type: "category",
        collapsed: false,
        label: "Get Started",
        items: [
          { type: "doc", id: "test-manager" },
          { type: "doc", id: "create-projects" },
          { type: "doc", id: "generate-test-cases-with-ai" },
          { type: "doc", id: "manual-test-case-creation" },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Import Test Cases",
        items: [
          "csv-import",
          "one-click-migration-from-testrail",
          "one-click-migration-from-xray",
          "one-click-migration-from-zephyr-scale",
          "one-click-migration-from-qtest",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Manage Test Cases",
        items: [
          "test-case-versioning",
          "copy-and-move-support-for-test-cases",
          "export-test-cases",
          "automated-test-cases-with-ai",
          "system-and-custom-fields",
          "sync-test-instance",
        ],
      },
      { type: "doc", id: "create-modules", className: "menu-bold" },
      { type: "doc", id: "test-run-creation-and-management", className: "menu-bold" },
      { type: "doc", id: "milestone-creation-and-management", className: "menu-bold" },
      { type: "doc", id: "tms-reports", className: "menu-bold" },
      {
        type: "category",
        collapsed: true,
        label: "Integrations",
        items: [
          "link-jira-issues-with-test-manager",
          "link-ado-issues-with-test-manager",
          "lambdatest-jira-app",
          "lambdatest-azure-devops-app",
        ],
      },
    ],
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
          { type: "doc", id: "selenium-bidi-integration" },
          { type: "doc", id: "custom-header" },
          { type: "doc", id: "custom-dns-map" },
          { type: "doc", id: "mock-video-injection-web-automation-selenium-chromium" },
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
            collapsed: false,
            label: "Get Started",
            items: [
              "getting-started-with-appium-testing",
              "appium-agent-skills",
              "migrate-existing-appium-test-suites",
              "desired-capabilities-in-appium",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Languages & Frameworks",
            items: [
              "appium-java",
              "appium-nodejs",
              "appium-python",
              "appium-ruby",
              "appium-php",
              "appium-csharp",
              "appium-kotlin",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Configure Your Tests",
            items: [
              "upload-apps-on-real-device-cloud",
              "supported-appium-versions",
              "list-of-supported-locales",
              "app-testing-apis",
              "appium-lambdatest-hooks",
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
              // "mute-test-scenarios-appium"
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Smart TV Automation",
            items: ["appium-appletv", "appium-firetv", "appium-androidtv", "appium-rokutv"],
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
            label: "References",
            items: ["migrate-appium-tests-from-browserstack-and-saucelabs"],
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
        type: "category",
        collapsed: false,
        label: "Getting Started",
        items: [
          "getting-started-with-espresso-testing",
          "espresso-agent-skills",
          "espresso-supported-capabilities",
          "debug-espresso-tests",
        ],
      },
      "espresso-env-variables-settings",
      "regular-expression-espresso",
      "supported-locales-espresso",
      "sharding-espresso",
      "speedup-espresso",
      "espresso-junit-report",
      "espresso-mockwebserver-localhost",
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
        type: "category",
        collapsed: false,
        label: "Getting Started",
        items: [
          "getting-started-with-xcui-testing",
          "xcuitest-agent-skills",
          "xcui-supported-capabilities",
          "xcui-xml-report",
          "xctestplan",
        ],
      },
      "regular-expression-xcui",
      "supported-locales-xcui",
      "ios-ipa-files-xcui",
      "sharding-xcui",
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
        type: "category",
        collapsed: false,
        label: "Getting Started",
        items: [
          "test-flutter-apps",
          "flutter-agent-skills",
          "flutter-supported-capabilities",
          "appium-flutter-integration",
          "getting-started-with-flutter-dart-android-automation",
        ],
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
        items: [
          { type: "doc", label: "Overview", id: "smart-visual-regression-testing" },
          { type: "doc", label: "Run First Test", id: "smartui-running-your-first-project" },
          { type: "doc", label: "Run Test With Agent Skills", id: "smartui-agent-skills" },
          { type: "doc", label: "View Test Results", id: "smartui-automation-dashboard" },
          { type: "doc", label: "Configure Projects", id: "smartui-project-settings" },
          { type: "doc", label: "Upload & Capture", id: "smartui-cli-complete-reference" },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Test With SDKs",
        items: [
          { type: "doc", label: "Selenium", id: "smartui-selenium-js-sdk" },
          { type: "doc", label: "Playwright", id: "smartui-playwright-sdk" },
          { type: "doc", label: "Puppeteer", id: "smartui-puppeteer-sdk" },
          { type: "doc", label: "Cypress", id: "smartui-cypress-sdk" },
          { type: "doc", label: "TestCafe", id: "smartui-testcafe-sdk" },
          { type: "doc", label: "WebdriverIO", id: "smartui-wdio-sdk" },
          { type: "doc", label: "Appium", id: "smartui-appium-java-sdk" },
          { type: "doc", label: "Espresso", id: "espresso-visual-regression" },
          { type: "doc", label: "XCUITest", id: "xcui-visual-regression" },
                    { type: "doc", label: "k6", id: "smartui-k6-setup" },

        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Test With Hooks",
        items: [
          { type: "doc", label: "Selenium", id: "selenium-visual-regression" },
          { type: "doc", label: "Playwright", id: "playwright-visual-regression" },
          { type: "doc", label: "Puppeteer", id: "puppeteer-visual-regression" },
          { type: "doc", label: "Appium", id: "smartui-appium-hooks" },
          { type: "doc", label: "Cypress", id: "smart-ui-cypress" },
        ],
      },
      {
        type: "doc",
        label: "Storybook Testing",
        id: "smart-ui-storybook",
        className: "menu-bold",
      },
      {
        type: "doc",
        label: "Figma Testing",
        id: "smartui-cli-figma",
        className: "menu-bold",
      },
      {
        type: "doc",
        label: "PDF Testing",
        id: "smartui-pdf-comparison",
        className: "menu-bold",
      },

      {
        type: "category",
        collapsed: true,
        label: "Features",
        items: [
          { type: "doc", label: "Comparison via Capabilities", id: "smartui-comparison-capabilities" },
          { type: "doc", label: "Baseline Management", id: "smartui-baseline-management" },
          { type: "doc", label: "Visual AI Agent", id: "smartui-visual-ai" },
          { type: "doc", label: "A/B Testing & Variations", id: "smartui-ab-testing-variations" },
          { type: "doc", label: "Smart RCA", id: "smartui-root-cause-analysis" },
          { type: "doc", label: "Custom CSS", id: "smartui-custom-css" },
          { type: "doc", label: "Draw on UI", id: "smartui-draw-on-ui" },
          { type: "doc", label: "Layout Regions", id: "smartui-layout-regions" },
          { type: "doc", label: "Smart Ignore", id: "smartui-smartignore" },
          { type: "doc", label: "Ignore Colors", id: "smartui-ignore-colors" },
          { type: "doc", label: "Layout Testing", id: "smartui-layout-testing" },
          { type: "doc", label: "Region Ignore + Select", id: "smartui-hooks-region-ignore" },
          { type: "doc", label: "Hooks Layout + Full Page", id: "smartui-hooks-layout-fullpage-smartignore" },
          { type: "doc", label: "Element Screenshot", id: "smartui-hooks-element-screenshot" },
          { type: "doc", label: "Mismatch Thresholds", id: "smartui-mismatch-thresholds" },
          { type: "doc", label: "Diff Highlighter", id: "smartui-diff-highlighter" },
          { type: "doc", label: "Audit & Activity Logs", id: "smartui-audit-logs" },
          { type: "doc", label: "Annotations in Audit Logs", id: "smartui-audit-logs-annotations" },
          { type: "doc", label: "Multiselect & Bulk Operations", id: "smartui-multiselect-bulkops" },
          { type: "doc", label: "Export Build Data", id: "smartui-export-build-data" },
          { type: "doc", label: "Group by Test Cases", id: "smartui-group-by-test-cases" },
          { type: "doc", label: "Smart Comments", id: "smartui-smart-comments" },
          { type: "doc", label: "Fetch Status Auto-Wait", id: "smartui-hooks-fetch-status-timeout" },
        ],
      },

      {
        type: "doc",
        label: "Git & Branching",
        id: "smartui-git-branching-strategy",
        className: "menu-bold",
      },
      {
        type: "doc",
        label: "Visual Testing with KaneAI",
        id: "kaneai-smartui-visual-testing",
        className: "menu-bold",
      },
      {
        type: "doc",
        label: "Visual Testing with Web Scanner",
        id: "web-scanner-visual-scan",
        className: "menu-bold",
      },
      {
        type: "category",
        collapsed: true,
        className: "menu-bold",
        label: "SmartUI Integration with HyperExecute",
        items: [
          {
            type: "doc",
            label: "Test with Hooks",
            id: "smartui-hooks-with-hyperexecute",
          },
          {
            type: "doc",
            label: "Test with SDK",
            id: "smartui-sdk-with-hyperexecute",
          },
        ],
      },


      {
        type: "category",
        collapsed: true,
        label: "Guides",
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
        label: "SDK & CLI Reference",
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
        label: "Integrations",
        items: [
          { type: "doc", label: "GitHub Actions", id: "smartui-with-github-actions" },
          { type: "doc", label: "GitLab", id: "smartui-with-gitlab" },
          { type: "doc", label: "Bitbucket", id: "smartui-with-bitbucket" },
          { type: "doc", label: "Semaphore", id: "smartui-with-semaphore" },
          { type: "doc", label: "Azure", id: "smartui-with-azure" },
          { type: "doc", label: "Buildkite", id: "smartui-with-buildkite" },
          { type: "doc", label: "Circle CI", id: "smartui-with-circle-ci" },
          { type: "doc", label: "Travis CI", id: "smartui-with-travis-ci" },
          { type: "doc", label: "Netlify", id: "smartui-with-netlify" },
          { type: "doc", label: "Katalon Plugin", id: "smartui-katalon-plugin" },
          { type: "doc", label: "Slack", id: "smartui-slack-integration" },
          { type: "doc", label: "GitHub", id: "smartui-github-app-integration" },
        ],
      },

      {
        type: "doc",
        label: "Troubleshooting Errors",
        id: "smartui-troubleshooting-guide",
        className: "menu-bold",
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
            label: "Requirement Sources",
            id: "kane-cli-assurance-sources",
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
