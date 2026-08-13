module.exports = {

  // 'support-start', 'tas-overview', 'app-automation', 'web-automation', 'getting-started', 'getting-started-with-cypress-testing', { type: "html", value: "<span class=\"sidebar-stub\">Playwright Testing Guide</span>" }, { type: "html", value: "<span class=\"sidebar-stub\">Puppeteer Testing Guide</span>" }, 'k6-browser-testing', { type: "html", value: "<span class=\"sidebar-stub\">App Automation App Sim</span>" },'getting-started-with-appium-testing', 'getting-started-with-espresso-testing', { type: "html", value: "<span class=\"sidebar-stub\">Getting Started With Xcui Testing</span>" }, { type: "html", value: "<span class=\"sidebar-stub\">Record And Replay</span>" },

  HyperExecuteSidebar: [
    {
      "type": "link",
      "label": "Back",
      "href": "/docs/",
      "customProps": {
        "className": "back-to-main-menu"
      }
    },
    [
      {
        "type": "category",
        "collapsed": false,
        "label": "Get Started",
        "items": [
          {
            "type": "doc",
            "label": "Run First Test",
            "id": "getting-started-with-hyperexecute"
          },
          {
            "type": "html",
            "value": "<span class=\"sidebar-stub\">Run Tests With Agent Skills</span>"
          },
          {
            "type": "doc",
            "label": "Run Tests With GUI",
            "id": "hyperexecute-cli-gui"
          },
          {
            "type": "doc",
            "label": "Migrate from SauceLabs",
            "id": "saucelabs-to-hyperexecute-migrate"
          },
          {
            "type": "html",
            "value": "<span class=\"sidebar-stub\">View Test Results</span>"
          },
          {
            "type": "doc",
            "label": "Generate HyperExecute YAML File",
            "id": "hyperexecute-generate-sample-yaml"
          },
          {
            "type": "doc",
            "label": "Troubleshoot Errors",
            "id": "hyperexecute-how-to-debug-job"
          },
          {
            "type": "doc",
            "label": "Languages & Frameworks",
            "id": "hyperexecute-supported-languages-and-frameworks"
          }
        ]
      },
      {
        "type": "category",
        "collapsed": true,
        "label": "Features",
        "items": [
          {
            "type": "doc",
            "label": "Test Splitting and Multiplexing",
            "id": "hyperexecute-test-splitting-and-multiplexing"
          },
          {
            "type": "html",
            "value": "<span class=\"sidebar-stub\">Job Artifacts and Reports</span>"
          },
          {
            "type": "doc",
            "label": "FailFast",
            "id": "hyperexecute-failfast"
          },
          {
            "type": "doc",
            "label": "Jobs Prioritization",
            "id": "hyperexecute-prioritize-tests"
          },
          {
            "type": "doc",
            "label": "AI Native Root Cause Analysis",
            "id": "rca"
          },
          {
            "type": "doc",
            "label": "Background Services",
            "id": "hyperexecute-background-services"
          },
          {
            "type": "doc",
            "label": "Auto Heal",
            "id": "hyperexecute-auto-healing"
          },
          {
            "type": "doc",
            "label": "Projects",
            "id": "hyperexecute-projects"
          },
          {
            "type": "doc",
            "label": "Workflows",
            "id": "hyperexecute-workflows"
          },
          {
            "type": "doc",
            "label": "Jobs Archiving",
            "id": "hyperexecute-jobs-archiving"
          },
          {
            "type": "doc",
            "label": "Test Muting",
            "id": "hyperexecute-test-muting"
          },
          {
            "type": "doc",
            "label": "Task Metrics",
            "id": "hyperexecute-task-metrics"
          },
          {
            "type": "doc",
            "label": "Rerun Failed Tests",
            "id": "hyperexecute-rerun-failed-tests"
          }
        ]
      },
      {
        "type": "category",
        "collapsed": true,
        "label": "Knowledge Base",
        "link": {
          "type": "doc",
          "id": "hyperexecute-knowledge-base"
        },
        "items": [
          {
            "type": "html",
            "value": "<span class=\"sidebar-stub\">Secrets Management</span>"
          },
          {
            "type": "doc",
            "label": "Configure Tunnel",
            "id": "hyperexecute-how-to-configure-tunnel"
          },
          {
            "type": "doc",
            "label": "Configure Browser/OS",
            "id": "hyperexecute-how-to-configure-os-and-browser"
          },
          {
            "type": "doc",
            "label": "Find Correct Concurrency",
            "id": "hyperexecute-how-to-find-correct-concurrency"
          },
          {
            "type": "doc",
            "label": "Configure sourcePayload",
            "id": "hyperexecute-how-to-configure-sourcePayload"
          },
          {
            "type": "doc",
            "label": "List Supported Browsers via API",
            "id": "hyperexecute-browser-list-api"
          },
          {
            "type": "doc",
            "label": "Tests With Local Selenium WebDriver",
            "id": "hyperexecute-how-to-run-tests-using-local-selenium-drivers"
          },
          {
            "type": "doc",
            "label": "Dependent Test Case Discovery",
            "id": "hyperexecute-how-to-perform-dependent-test-based-discovery"
          },
          {
            "type": "doc",
            "label": "Group-Based Test Discovery",
            "id": "hyperexecute-how-to-perform-group-based-test-discovery-in-testng"
          },
          {
            "type": "doc",
            "label": "Resolve Version Conflict Issues",
            "id": "hyperexecute-how-to-resolve-version-conflict"
          },
          {
            "type": "doc",
            "label": "Build Mobile Apps",
            "id": "hyperexecute-build-mobile-apps-using-tools"
          },
          {
            "type": "doc",
            "label": "Access Org Product Preferences",
            "id": "hyperexecute-org-product-preferences"
          }
        ]
      },
      {
        "type": "category",
        "collapsed": true,
        "label": "Integrations",
        "link": {
          "type": "doc",
          "id": "integration-he"
        },
        "items": [
          {
            "type": "html",
            "value": "<span class=\"sidebar-stub\">Integrate with Tools</span>"
          }
        ]
      },
      {
        "type": "category",
        "collapsed": true,
        "label": "Private Cloud",
        "link": {
          "type": "doc",
          "id": "hyperexecute-private-cloud-setup"
        },
        "items": [
          {
            "type": "doc",
            "label": "HyperExecute Private Cloud Benefits",
            "id": "hyperexecute-private-cloud-benefits"
          },
          {
            "type": "category",
            "collapsed": true,
            "label": "Setup with Azure",
            "link": {
              "type": "doc",
              "id": "hyperexecute-private-cloud-setup-with-azure"
            },
            "items": [
              {
                "type": "doc",
                "label": "HyperExecute Private Cloud on JumpHost",
                "id": "hyperexecute-private-cloud-on-jumphost"
              },
              {
                "type": "doc",
                "label": "VNet Peering and VNet Links",
                "id": "hyperexecute-vnet-peering-for-private-cloud"
              }
            ]
          },
          {
            "type": "doc",
            "label": "Setup with AWS",
            "id": "hyperexecute-private-cloud-setup-with-aws"
          }
        ]
      }
    ]
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
          { type: "html", value: "<span class=\"sidebar-stub\">What is Agent Testing</span>" },
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
            id: "testmu-a2a-cli",
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
          { type: "html", value: "<span class=\"sidebar-stub\">FAQs</span>" },
        ],
      },
    ],
  ],

  KaneAISidebar: [
    {
      "type": "link",
      "label": "Back",
      "href": "/docs/",
      "customProps": {
        "className": "back-to-main-menu"
      }
    },
    [
      {
        "type": "doc",
        "label": "Overview",
        "id": "getting-started-with-kane-ai"
      },
      {
        "type": "category",
        "collapsed": false,
        "label": "Getting Started",
        "items": [
          {
            "type": "doc",
            "label": "Author Desktop Browser Test",
            "id": "author-your-first-desktop-browser-test"
          },
          {
            "type": "doc",
            "label": "Author Mobile Browser Test",
            "id": "author-your-first-mobile-browser-test"
          },
          {
            "type": "doc",
            "label": "Author Mobile App Test",
            "id": "author-your-first-mobile-app-test"
          }
        ]
      },
      {
        "type": "category",
        "collapsed": true,
        "label": "Knowledge Base",
        "link": {
          "type": "doc",
          "id": "kaneai-kb-knowledge-base-index"
        },
        "items": [
          {
            "type": "doc",
            "label": "Commands",
            "id": "kane-ai-command-guide"
          },
          {
            "type": "doc",
            "label": "Elements",
            "id": "kaneai-kb-finding-and-interacting-with-elements"
          },
          {
            "type": "doc",
            "label": "Smart Locators",
            "id": "kaneai-smart-locator-priority"
          },
          {
            "type": "doc",
            "label": "Forms",
            "id": "kaneai-kb-forms-inputs-and-data-entry"
          },
          {
            "type": "doc",
            "label": "Waits",
            "id": "kaneai-kb-dynamic-content-waits-and-page-state"
          },
          {
            "type": "doc",
            "label": "Assertions",
            "id": "kaneai-kb-assertions-and-validation"
          },
          {
            "type": "doc",
            "label": "Authentication",
            "id": "kaneai-kb-authentication-and-session-management"
          },
          {
            "type": "doc",
            "label": "API & Network",
            "id": "kaneai-kb-api-testing-and-network-assertions"
          },
          {
            "type": "doc",
            "label": "Failure Rules",
            "id": "kaneai-failure-conditions"
          },
          {
            "type": "doc",
            "label": "JS Snippets",
            "id": "kaneai-kb-js-snippets-and-workarounds"
          },
          {
            "type": "doc",
            "label": "Mobile Patterns",
            "id": "kaneai-kb-mobile-app-testing-patterns"
          },
          {
            "type": "html",
            "value": "<span class=\"sidebar-stub\">Variables & Secrets</span>"
          },
          {
            "type": "html",
            "value": "<span class=\"sidebar-stub\">Parameters & Datasets</span>"
          },
          {
            "type": "doc",
            "label": "Code Generation",
            "id": "kane-ai-automation-code-generation"
          },
          {
            "type": "doc",
            "label": "Errors",
            "id": "error-handling-kaneai"
          }
        ]
      },
      {
        "type": "category",
        "collapsed": true,
        "label": "Test Configuration",
        "items": [
          {
            "type": "doc",
            "label": "Advanced Settings",
            "id": "kaneai-advanced-settings"
          },
          {
            "type": "doc",
            "label": "Chrome Options",
            "id": "kaneai-chrome-options"
          },
          {
            "type": "doc",
            "label": "Custom Headers",
            "id": "kaneai-custom-headers"
          },
          {
            "type": "doc",
            "label": "Dynamic URL Replacement",
            "id": "kaneai-dynamic-url-replacement"
          },
          {
            "type": "doc",
            "label": "Geolocation, Tunnel, and Proxy",
            "id": "kane-ai-geolocation-tunnel-proxy"
          },
          {
            "type": "doc",
            "label": "Auto-Heal",
            "id": "kaneai-auto-heal"
          }
        ]
      },
      {
        "type": "category",
        "collapsed": true,
        "label": "Test Steps",
        "items": [
          {
            "type": "doc",
            "label": "Click Interactions",
            "id": "kane-ai-click-interactions"
          },
          {
            "type": "doc",
            "label": "Drag and Drop",
            "id": "kane-ai-drag-drop"
          },
          {
            "type": "doc",
            "label": "Scroll in Element",
            "id": "kane-ai-scroll-in-feature"
          },
          {
            "type": "doc",
            "label": "Scroll Until Element",
            "id": "kaneai-scroll-until-mobile"
          },
          {
            "type": "doc",
            "label": "Upload and Download Files",
            "id": "kaneai-upload-and-download-files"
          },
          {
            "type": "doc",
            "label": "Manual Interaction",
            "id": "kaneai-manual-interaction"
          },
          {
            "type": "doc",
            "label": "Rename Steps",
            "id": "kaneai-rename-instructions"
          }
        ]
      },
      {
        "type": "category",
        "collapsed": true,
        "label": "Logic & Data",
        "items": [
          {
            "type": "doc",
            "label": "Conditional Logic",
            "id": "kaneai-conditional-logic"
          },
          {
            "type": "doc",
            "label": "While Loops",
            "id": "kaneai-while-loops"
          },
          {
            "type": "doc",
            "label": "Modules",
            "id": "kane-ai-modules"
          },
          {
            "type": "doc",
            "label": "JavaScript Execution",
            "id": "kane-ai-javascript-execution"
          },
          {
            "type": "doc",
            "label": "Network Logs Assertions",
            "id": "kane-ai-network-assertions"
          },
          {
            "type": "doc",
            "label": "Database",
            "id": "kaneai-database"
          },
          {
            "type": "doc",
            "label": "TOTP Authentication",
            "id": "kaneai-totp"
          }
        ]
      },
      {
        "type": "doc",
        "label": "API Testing",
        "id": "kane-ai-api-testing"
      },
      {
        "type": "doc",
        "label": "Visual Testing",
        "id": "kaneai-smartui-visual-testing"
      },
      {
        "type": "category",
        "collapsed": true,
        "label": "Manage Test Cases",
        "items": [
          {
            "type": "doc",
            "label": "Test Planner",
            "id": "kane-ai-test-plan"
          },
          {
            "type": "doc",
            "label": "Test Runs",
            "id": "kaneai-hyperexecute-test-run-execution"
          },
          {
            "type": "doc",
            "label": "CI/CD",
            "id": "kaneai-ci-cd-automation"
          },
          {
            "type": "doc",
            "label": "Configurations",
            "id": "test-runs-configurations"
          },
          {
            "type": "doc",
            "label": "Scheduled Test Runs",
            "id": "kaneai-scheduled-test-runs"
          },
          {
            "type": "doc",
            "label": "Test Run Instance View",
            "id": "kaneai-test-run-instance-view"
          }
        ]
      },
      {
        "type": "category",
        "collapsed": true,
        "label": "Integrations",
        "items": [
          {
            "type": "doc",
            "label": "Jira",
            "id": "kane-ai-jira-integration"
          },
          {
            "type": "doc",
            "label": "GitHub App",
            "id": "github-app-integration"
          }
        ]
      }
    ]
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
          { type: "html", value: "<span class=\"sidebar-stub\">Pre Loaded Extension</span>" },
          "real-time-testing-troubleshooting",
          "http-basic-authentication",
          "webview-testing-in-android",
          "real-time-locally-hosted-pages",
          "real-time-recents-and-favourites",
          "real-time-upload-and-download-files",
        ],
      },
      { type: "html", value: "<span class=\"sidebar-stub\">Troubleshooting Ios Apps</span>" },
      { type: "html", value: "<span class=\"sidebar-stub\">Entitlements</span>" },
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
          { type: "html", value: "<span class=\"sidebar-stub\">Zohoproject Integration</span>" },
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
          { type: "html", value: "<span class=\"sidebar-stub\">Github Repo Based Oauth</span>" },
          { type: "html", value: "<span class=\"sidebar-stub\">Clubhouse Integration</span>" },
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
          { type: "html", value: "<span class=\"sidebar-stub\">Sumo Logic Integration</span>" },
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
          { type: "html", value: "<span class=\"sidebar-stub\">Slack App</span>" },
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
          { type: "html", value: "<span class=\"sidebar-stub\">Appium Bitrise</span>" },
          { type: "html", value: "<span class=\"sidebar-stub\">Espresso Bitrise</span>" },
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
          { type: "html", value: "<span class=\"sidebar-stub\">Tricentis Tosca Integration</span>" },
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
          { type: "html", value: "<span class=\"sidebar-stub\">Zephyr Scale</span>" },
          "testmo-integration",
          "alm-octane-integration"
        ],
      },

      {
        type: "category",
        collapsed: true,
        label: "Code Coverage Tools",
        items: [{ type: "html", value: "<span class=\"sidebar-stub\">Rktracer Integration</span>" }],
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
          { type: "html", value: "<span class=\"sidebar-stub\">Chrome Extensions</span>" },
          {
            type: "category",
            collapsed: true,
            label: "Jenkins Plugin",
            items: [
              "jenkins-plugin",
              "integrating-lambdaTest-with-jenkins-freestyle-project",
              { type: "html", value: "<span class=\"sidebar-stub\">Lambdatest Report With Jenkins Pipeline</span>" },
            ],
          },
          "wordpress-plugin",
          "npm-plugin-for-testcafe-integration-with-lambdatest",
          { type: "html", value: "<span class=\"sidebar-stub\">Fastlane Plugin</span>" },
          "azure-pipeline",
          "teamcity-plugin",
          // "shopify-integration",
          "vscode-extension",
          "xcode-plugin-lambdamax",
          "docker-tunnel-extension",
          "gradle-integration-with-lambdatest",
        ],
      },
      { type: "html", value: "<span class=\"sidebar-stub\">LT Debug</span>" },
      "zalenium-integration-with-lambdatest",
      "applitools-integration-with-lambdatest",
      "selenified-integration-with-lambdatest",
      "microsoft-team",
      "app-center-integration",
      { type: "html", value: "<span class=\"sidebar-stub\">App Center Automation</span>" },
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
      "type": "link",
      "label": "Back",
      "href": "/docs/",
      "customProps": {
        "className": "back-to-main-menu"
      }
    },
    [
      {
        "type": "category",
        "collapsed": false,
        "label": "Getting Started",
        "items": [
          {
            "type": "doc",
            "label": "Overview",
            "id": "accessibility-testing"
          },
          {
            "type": "doc",
            "label": "Test With Browser DevTools",
            "id": "accessibility-devtools"
          },
          {
            "type": "doc",
            "label": "Test With Native App Scanner",
            "id": "accessibility-app-scanner"
          },
          {
            "type": "doc",
            "label": "Automate First Accessibility Test",
            "id": "accessibility-automation"
          },
          {
            "type": "html",
            "value": "<span class=\"sidebar-stub\">Run Tests With Agent Skills</span>"
          },
          {
            "type": "doc",
            "label": "Supported Automation Capabilities",
            "id": "accessibility-automation-scan-configurations"
          },
          {
            "type": "doc",
            "label": "Assistive Technologies",
            "id": "screen-reader-on-accessibility"
          }
        ]
      },
      {
        "type": "html",
        "value": "<span class=\"sidebar-stub\">Supported Languages & Frameworks</span>"
      },
      {
        "type": "html",
        "value": "<span class=\"sidebar-stub\">Features</span>"
      },
      {
        "type": "doc",
        "label": "Checklist",
        "id": "accessibility-rules-checklist"
      },
      {
        "type": "html",
        "value": "<span class=\"sidebar-stub\">Rule Repository</span>"
      },
      {
        "type": "category",
        "collapsed": true,
        "label": "Reports",
        "link": {
          "type": "doc",
          "id": "accessibility-testing-navigating-dashboard"
        },
        "items": [
          {
            "type": "doc",
            "label": "Accessibility Score",
            "id": "accessibility-web-score"
          },
          {
            "type": "doc",
            "label": "Issue Summary",
            "id": "accessibility-testing-dashboard-issue-summary"
          },
          {
            "type": "doc",
            "label": "All Issues",
            "id": "accessibility-testing-dashboard-all-issues"
          },
          {
            "type": "doc",
            "label": "Exporting & Sharing Reports",
            "id": "accessibility-exporting-sharing-reports"
          },
          {
            "type": "doc",
            "label": "Passed Test Cases",
            "id": "accessibility-passed-test-cases"
          },
          {
            "type": "doc",
            "label": "Bug Report",
            "id": "accessibility-report-bug"
          }
        ]
      },
      {
        "type": "doc",
        "label": "Test Scheduling",
        "id": "accessibility-test-scheduling"
      },
      {
        "type": "doc",
        "label": "Integrations",
        "id": "accessibility-report-integrations"
      },
      {
        "type": "category",
        "collapsed": true,
        "label": "References",
        "items": [
          {
            "type": "doc",
            "label": "FAQs",
            "id": "accessibility-faq"
          },
          {
            "type": "doc",
            "label": "Supported WCAG Versions & Browsers",
            "id": "accessibility-supported-wcag-browsers"
          },
          {
            "type": "doc",
            "label": "Accessibility Compliance Guide (ADA / WCAG / EAA / 508)",
            "id": "accessibility-compliance-guide"
          },
          {
            "type": "doc",
            "label": "VPAT & ACR evidence",
            "id": "accessibility-vpat-report-generation"
          }
        ]
      }
    ]
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
          { type: "doc", id: "system-and-custom-fields", label: "Manage System & Custom fields" },
          { type: "doc", id: "copy-and-move-support-for-test-cases", label: "Copy & Move Test Cases" },
          { type: "html", value: "<span class=\"sidebar-stub\">Bulk Update Test Case fields</span>" },
          { type: "doc", id: "export-test-cases", label: "Export Test Cases" },
        ],
      },

      // 5. AI Test Case Generator (direct doc)
      { type: "html", value: "<span class=\"sidebar-stub\">AI Test Case Generator</span>" },

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
              "install-apps-from-app-center",
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
              { type: "html", value: "<span class=\"sidebar-stub\">Real Device Adb Shell</span>" },
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
              { type: "html", value: "<span class=\"sidebar-stub\">Set Date Time Hour Format Real Devices</span>" },
              "device-passcode-on-realdevice",
              "assistive-touch-on-real-ios-devices",
              "dark-mode-on-real-devices",
              { type: "html", value: "<span class=\"sidebar-stub\">Group Folder Redirect On Real Device</span>" },
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
          { type: "html", value: "<span class=\"sidebar-stub\">Browser Testing On Real Devices</span>" },
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
          { type: "doc", label: "Run First Test", id: "lambdatest-running-your-first-selenium-test" },
          { type: "doc", label: "Run Tests With Agent Skills", id: "selenium-agent-skills" },
          { type: "doc", label: "View Test Results", id: "inside-lambdatest-automation-platform" },
          { type: "doc", label: "Set Debugging Options", id: "debugging-options" },
          { type: "doc", label: "Filter Your Tests", id: "filter-your-selenium-tests" },
          { type: "doc", label: "Migrate Test Suites", id: "migrate-selenium-test-suite" },
          { type: "doc", label: "Automation Capabilities", id: "selenium-automation-capabilities" },
          { type: "doc", label: "Languages & Frameworks", id: "selenium-supported-languages-and-frameworks" },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Features",
        items: [
          { type: "doc", label: "Local Testing", id: "test-locally-hosted-websites-with-selenium" },
          { type: "doc", label: "Geolocation Testing", id: "selenium-geolocation-capabilities" },
          { type: "doc", label: "Network Throttling", id: "network-throttling" },
          { type: "doc", label: "Test Across Timezones", id: "configure-timezones" },
          { type: "doc", label: "SmartWait", id: "smart-wait" },
          { type: "doc", label: "Auto-Healing", id: "auto-heal" },
          { type: "doc", label: "WebDriver BiDi Testing", id: "selenium-bidi-integration" },
          { type: "doc", label: "Custom HTTP Headers", id: "custom-header" },
          { type: "doc", label: "Custom DNS Entry", id: "custom-dns-map" },
          { type: "doc", label: "Mock Video Stream", id: "mock-video-injection-web-automation-selenium-chromium" },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Guides",
        items: [
          { type: "doc", label: "Upload and Download Files", id: "upload-files-using-lambdatest" },
          { type: "doc", label: "Test in Headless Mode", id: "perform-selenium-automation-on-headless-browsers" },
          { type: "doc", label: "Test in IE Mode on Edge", id: "ie-mode-on-edge" },
          { type: "doc", label: "Upload Custom Chrome Profile", id: "custom-chrome" },
          { type: "doc", label: "Run a Pre-Test Script", id: "setup-pre-run-executable" },
          { type: "doc", label: "Run Tests Behind a Proxy", id: "run-selenium-test-behind-the-proxy" },
          { type: "doc", label: "Mask Test Data", id: "selenium-mask-your-data" },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Reference",
        items: [
          { type: "doc", label: "Generate Lighthouse Reports", id: "lighthouse-reports-hooks" },
          { type: "doc", label: "Speed Up Your Tests", id: "performance-tips" },
          { type: "doc", label: "Lambda Hooks", id: "lambda-hooks" },
        
        ],
      },
    ],
  ],

  CypressTestingSidebar: [
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
          { type: "doc", label: "Run First Test", id: "getting-started-with-cypress-testing" },
          { type: "doc", label: "Run Test With Agent Skills", id: "cypress-agent-skills" },
          { type: "doc", label: "CLI Reference", id: "cypress-cli-commands" },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Test Capabilities",
        items: [
          { type: "doc", label: "Browsers & OS", id: "supported-browsers-and-os" },
          { type: "doc", label: "Test Configuration", id: "run-settings" },
          { type: "doc", label: "Private Dependencies", id: "private-dependencies-cypress" },
          { type: "doc", label: "Download Artefacts", id: "download-artefacts-cypress" },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Integrations",
        items: [
          { type: "doc", label: "Cypress Dashboard", id: "integrate-lambdatest-with-cypress" },
          { type: "doc", label: "Applitools", id: "applitools-integration-cypress" },
          { type: "doc", label: "Reporters", id: "cyp-multi-reporters" },
          { type: "doc", label: "Command Logs", id: "cypress-detailed-command-logs" },
        ],
      },
    ],
  ],

  PlaywrightTestingSidebar: [
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
          { type: "doc", label: "Run First Test", id: "playwright-testing-guide" },
          { type: "doc", label: "Run Test With Agent Skills", id: "playwright-agent-skills" },
          { type: "doc", label: "Run Test With SDK", id: "playwright-sdk" },
          { type: "doc", label: "Migrate Playwright Tests", id: "migrate-playwright-tests" },
          { type: "doc", label: "Set up Test Environment", id: "playwright-test-execution-setup" },
          { type: "doc", label: "Supported Automation Capabilities", id: "playwright-caps" },
          { type: 'html', value: '<span class="sidebar-stub">Languages & Frameworks</span>' }

        ],
      },
    
      {
        type: "category",
        collapsed: true,
        label: "Features",
        items: [
          { type: "doc", label: "Auto Healing", id: "playwright-auto-heal" },
          { type: "doc", label: "Android Testing", id: "playwright-android-guide" },
          { type: "doc", label: "WebView Testing", id: "playwright-webview-test" },
          { type: "doc", label: "iOS Testing", id: "playwright-ios-guide" },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Integrations",
        items: [
          { type: "doc", label: "Playwright Test Runner", id: "playwright-playwrighttest" },
          { type: "doc", label: "Playwright Lighthouse Library", id: "playwright-lighthouse-library" },
        ],
      },
    ],
  ],

  PuppeteerTestingSidebar: [
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
          { type: "doc", label: "Run First Test", id: "puppeteer-testing-guide" },
          { type: "doc", label: "Run Test With Agent Skills", id: "puppeteer-agent-skills" },
          { type: "doc", label: "Set up Test Environment", id: "puppeteer-test-execution" },
          { type: "doc", label: "Supported Automation Capabilities", id: "puppeteer-capabilities" },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Integrations",
        items: [
          { type: "doc", label: "Mocha", id: "puppeteer-mocha" },
          { type: "doc", label: "Jest", id: "puppeteer-jest" },
          { type: "doc", label: "Pyppeteer", id: "puppeteer-pytest-pyppeteer" },
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
        type: "category",
        collapsed: false,
        label: "Get Started",
        items: [
          { type: "doc", id: "k6-browser-testing", label: "Run First Test" },
        ],
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
      {
        type: "category",
        collapsed: false,
        label: "Virtual Devices",
        items: [
          { type: "doc", label: "Run First Test", id: "app-automation-app-sim" },
          { type: "doc", label: "Build iOS App for Simulators", id: "build-ios-app-for-simulator-testing" },
          { type: "doc", label: "Test Flutter Apps", id: "virtual-device-flutter-apps" },
        ],
      },
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
          { type: "doc", label: "Run First Test", id: "getting-started-with-appium-testing" },
          { type: "html", value: "<span class=\"sidebar-stub\">Run Tests With Agent Skills</span>" },
          { type: "doc", label: "Migrate Appium Tests", id: "migrate-appium-tests-from-browserstack-and-saucelabs" },
          { type: "doc", label: "Automation Capabilities", id: "desired-capabilities-in-appium" },
          { type: "doc", label: "Languages & Frameworks", id: "appium-languages-and-frameworks" },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Configure Your Tests",
        items: [
          { type: "html", value: "<span class=\"sidebar-stub\">Upload Apps</span>" },
          { type: "doc", label: "Supported Versions & Plugins", id: "supported-appium-versions" },
          { type: "doc", label: "Locales & Timezones", id: "list-of-supported-locales" },
          { type: "doc", label: "App Testing APIs", id: "app-testing-apis" },
          { type: "doc", label: "Appium Hooks", id: "appium-lambdatest-hooks" },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Features",
        items: [
          { type: "doc", label: "Camera Image Injection", id: "camera-image-injection" },
          { type: "doc", label: "Video Injection", id: "video-injection" },
          { type: "doc", label: "Biometric Authentication", id: "biometric-authentication" },
          { type: "doc", label: "Audio Injection", id: "audio-injection" },
          { type: "doc", label: "Regular Expression", id: "regular-expression-appium" },
          { type: "doc", label: "Upload Files and Media", id: "appium-upload-media" },
          { type: "doc", label: "Upload Contacts", id: "appium-upload-contacts" },
          { type: "doc", label: "Network Configurations", id: "network-configurations" },
          { type: "doc", label: "Network Throttling", id: "app-auto-network-throttling" },
          { type: "doc", label: "Enable SIM", id: "sim-support" },
          { type: "doc", label: "IP Geolocation", id: "appium-ip-geolocation" },
          { type: "doc", label: "App Performance Analytics", id: "appium-app-performance" },
          { type: "doc", label: "Slack Notifications", id: "app-automation-slack-notifications" },
          { type: "doc", label: "iOS App Settings", id: "appium-ios-app-settings" },
          { type: "doc", label: "iOS Keychain Cleanup", id: "ios-keychain-cleanup" },
          { type: "doc", label: "Group Folder Redirect", id: "group-folder-redirects" },
          { type: "doc", label: "ADB Commands Support", id: "adb-commands-support" },
          { type: "doc", label: "Login To Google Account (Android)", id: "login-google-android" },
          { type: "doc", label: "Disable Screenshot Block", id: "disable-screenshot-block" },
          { type: "doc", label: "CustomHeaders", id: "appium-custom-header" },
          { type: "doc", label: "Safari Basic Authentication", id: "basic-authentication-for-web-automation" },
          { type: "doc", label: "Live Inspect", id: "live-debug-in-app-automation" },
          { type: "doc", label: "Set Date and Time", id: "appium-date-and-time" },
          { type: "doc", label: "Device Passcode", id: "device-passcode-appautomation" },
          { type: "doc", label: "Set Dark Mode", id: "set-device-dark-mode" },
          { type: "doc", label: "Smart Heal", id: "smart-heal-appium" },
          { type: "doc", label: "Apple Pay", id: "apple-pay-auto" },
          { type: "doc", label: "Button Click By Text", id: "button-text-click" },
          { type: "doc", label: "Shake Gesture (iOS)", id: "ios-shake-gesture-appautomation" },
          { type: "doc", label: "Terminal Logs", id: "appium-terminal-logs" },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Smart TV Automation",
        items: [
          { type: "doc", label: "Apple TV", id: "appium-appletv" },
          { type: "doc", label: "Fire TV Stick", id: "appium-firetv" },
          { type: "doc", label: "Android TV", id: "appium-androidtv" },
          { type: "doc", label: "Roku TV", id: "appium-rokutv" },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Integrations",
        items: [
          { type: "doc", label: "Appium Inspector", id: "appium-inspector" },
          { type: "doc", label: "AltTester (Unity)", id: "alttester-unity-game-automation" },
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
        type: "category",
        collapsed: false,
        label: "Get Started",
        items: [
          { type: "doc", label: "Run First Test", id: "getting-started-with-espresso-testing" },
          { type: "html", value: "<span class=\"sidebar-stub\">Run Tests With Agent Skills</span>" },
          { type: "doc", label: "Supported Capabilities", id: "espresso-supported-capabilities" },
          { type: "doc", label: "Debug Espresso Tests", id: "debug-espresso-tests" },
          { type: "doc", label: "Regular Expression", id: "regular-expression-espresso" },
          { type: "doc", label: "Supported Locales And Languages", id: "supported-locales-espresso" },
          { type: "doc", label: "Sharding", id: "sharding-espresso" },
          { type: "html", value: "<span class=\"sidebar-stub\">Test Filters</span>" },
          { type: "doc", label: "JUnit XML Reports", id: "espresso-junit-report" },
          { type: "doc", label: "MockWebServer & Localhost", id: "espresso-mockwebserver-localhost" },
        ],
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
        type: "category",
        collapsed: false,
        label: "Get Started",
        items: [
          { type: "doc", label: "Run First Test", id: "getting-started-with-xcui-testing" },
          { type: "html", value: "<span class=\"sidebar-stub\">Run Tests With Agent Skills</span>" },
          { type: "doc", label: "Supported Capabilities", id: "xcui-supported-capabilities" },
          { type: "doc", label: "Regular Expression", id: "regular-expression-xcui" },
          { type: "doc", label: "Supported Locales And Languages", id: "supported-locales-xcui" },
          { type: "doc", label: "Creating iOS Applications", id: "ios-ipa-files-xcui" },
          { type: "doc", label: "Sharding", id: "sharding-xcui" },
          { type: "html", value: "<span class=\"sidebar-stub\">Test Filters</span>" },
          { type: "doc", label: "Reports", id: "xcui-xml-report" },
        ],
      },
    ],
  ],

  FlutterTestingSidebar: [
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
          { type: "html", value: "<span class=\"sidebar-stub\">Run First Test</span>" },
          { type: "html", value: "<span class=\"sidebar-stub\">Run Tests With Agent Skills</span>" },
          { type: "doc", label: "Supported Capabilities", id: "flutter-supported-capabilities" },
          { type: "doc", label: "Appium Flutter Integration Driver Testing", id: "appium-flutter-integration" },
          { type: "doc", label: "Flutter Dart Testing", id: "getting-started-with-flutter-dart-android-automation" },
        ],
      },
    ],
  ],

  VisualRegressionTestingSidebar: [
    {
      "type": "link",
      "label": "Back",
      "href": "/docs/",
      "customProps": {
        "className": "back-to-main-menu"
      }
    },
    [
      {
        "type": "category",
        "collapsed": false,
        "label": "Getting Started",
        "items": [
          {
            "type": "doc",
            "label": "Run First Test",
            "id": "smartui-running-your-first-project"
          },
          {
            "type": "doc",
            "label": "Run Test With Agent Skills",
            "id": "smartui-agent-skills"
          },
          {
            "type": "html",
            "value": "<span class=\"sidebar-stub\">View Test Results</span>"
          },
          {
            "type": "html",
            "value": "<span class=\"sidebar-stub\">Upload & Capture</span>"
          },
          {
            "type": "html",
            "value": "<span class=\"sidebar-stub\">Test With SDKs</span>"
          },
          {
            "type": "html",
            "value": "<span class=\"sidebar-stub\">Test With Hooks</span>"
          },
          {
            "type": "doc",
            "label": "Storybook Testing",
            "id": "smart-ui-storybook"
          },
          {
            "type": "html",
            "value": "<span class=\"sidebar-stub\">Figma Testing</span>"
          },
          {
            "type": "doc",
            "label": "PDF Testing",
            "id": "smartui-pdf-comparison"
          }
        ]
      },
      {
        "type": "html",
        "value": "<span class=\"sidebar-stub\">Features</span>"
      },
      {
        "type": "category",
        "collapsed": true,
        "label": "Project Configuration",
        "items": [
          "smartui-project-settings",
          "test-settings-options",
          "html-dom-smartui-options",
          "smart-ui-build-options",
          "smartui-multiple-projects-per-repo"
        ]
      },
      {
        "type": "category",
        "collapsed": true,
        "label": "Git & Branching",
        "items": [
          "smartui-cli-git-branching-strategy",
          "smartui-smart-git-strategy",
          "smartui-branch-merging",
          "smartui-build-merging"
        ]
      },
      {
        "type": "html",
        "value": "<span class=\"sidebar-stub\">Stabilize Screenshots</span>"
      },
      {
        "type": "html",
        "value": "<span class=\"sidebar-stub\">Advanced CLI</span>"
      },
      {
        "type": "html",
        "value": "<span class=\"sidebar-stub\">Technical Configuration</span>"
      },
      {
        "type": "html",
        "value": "<span class=\"sidebar-stub\">Integrations</span>"
      },
      {
        "type": "doc",
        "label": "Troubleshooting Guide",
        "id": "smartui-troubleshooting-guide"
      }
    ]
  ],

  Analytics: [
    {
      "type": "link",
      "label": "Back",
      "href": "/docs/",
      "customProps": {
        "className": "back-to-main-menu"
      }
    },
    [
      {
        "type": "category",
        "collapsed": false,
        "label": "Getting Started",
        "link": {
          "type": "doc",
          "id": "analytics-overview"
        },
        "items": [
          {
            "type": "doc",
            "label": "Create with Pre-Built templates",
            "id": "analytics-dashboard-templates"
          },
          {
            "type": "doc",
            "label": "Create your Custom Dashboard",
            "id": "analytics-create-dashboard"
          }
        ]
      },
      {
        "type": "html",
        "value": "<span class=\"sidebar-stub\">Dashboards</span>"
      },
      {
        "type": "doc",
        "label": "Widgets",
        "id": "analytics-widgets"
      },
      {
        "type": "html",
        "value": "<span class=\"sidebar-stub\">Types of Insights</span>"
      },
      {
        "type": "category",
        "collapsed": true,
        "label": "Test Intelligence - AI",
        "items": [
          {
            "type": "doc",
            "label": "Test Insights",
            "id": "analytics-test-insights"
          },
          {
            "type": "doc",
            "label": "Flaky Test Analytics",
            "id": "analytics-modules-test-intelligence-flaky-test-analytics"
          },
          {
            "type": "doc",
            "label": "Build Insights",
            "id": "analytics-build-insights"
          },
          {
            "type": "doc",
            "label": "Build Comparison",
            "id": "analytics-build-comparison"
          },
          {
            "type": "doc",
            "label": "Unique Instances & Retry Detection",
            "id": "analytics-unique-instances-retry-detection"
          },
          {
            "type": "doc",
            "label": "Smart Tags",
            "id": "analytics-smart-tags-test-intelligence"
          },
          {
            "type": "doc",
            "label": "Failure Categorization AI",
            "id": "analytics-test-failure-classification"
          },
          {
            "type": "doc",
            "label": "AI Root Cause Analysis",
            "id": "analytics-ai-root-cause-analysis"
          },
          {
            "type": "doc",
            "label": "App Profiling Insights",
            "id": "insights-app-profiling"
          }
        ]
      },
      {
        "type": "html",
        "value": "<span class=\"sidebar-stub\">Reports</span>"
      },
      {
        "type": "category",
        "collapsed": true,
        "label": "References",
        "items": [
          {
            "type": "doc",
            "label": "Insights Best Practices",
            "id": "insights-best-practices"
          },
          {
            "type": "doc",
            "label": "Test Intelligence",
            "id": "test-intelligence-overview"
          },
          {
            "type": "doc",
            "label": "Flaky Test Detection",
            "id": "test-intelligence-modules-flaky-test-detection"
          },
          {
            "type": "doc",
            "label": "Error Logs Analytics",
            "id": "test-intelligence-command-error-logs-analytics"
          },
          {
            "type": "doc",
            "label": "FAQs",
            "id": "analytics-faqs"
          }
        ]
      }
    ]
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
      { type: "html", value: "<span class=\"sidebar-stub\">Flaky Tests Detection</span>" },
      { type: "html", value: "<span class=\"sidebar-stub\">Command Error Logs Analytics</span>" },
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
      { type: "html", value: "<span class=\"sidebar-stub\">TestMu AI Migration Guide</span>" },
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
      { type: "html", value: "<span class=\"sidebar-stub\">Legacy Platform To TestMu AI Migration</span>" },
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
      { type: "html", value: "<span class=\"sidebar-stub\">Getting Started With LT Browser 2.0</span>" },
      {
        type: "doc",
        label: "Performance Report",
        id: "performance-report",
      },
      { type: "html", value: "<span class=\"sidebar-stub\">Network Throttling</span>" },
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
          { type: "html", value: "<span class=\"sidebar-stub\">Testing Apps Locally</span>" },
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
          { type: "html", value: "<span class=\"sidebar-stub\">Socks5 Proxy Support</span>" },
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
      { type: "html", value: "<span class=\"sidebar-stub\">Release Notes</span>" },
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
      { type: "html", value: "<span class=\"sidebar-stub\">Service Accounts</span>" },
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
      "type": "link",
      "label": "Back",
      "href": "/docs/",
      "customProps": {
        "className": "back-to-main-menu"
      }
    },
    [
      {
        "type": "doc",
        "label": "Overview",
        "id": "browser-cloud-intro"
      },
      {
        "type": "category",
        "collapsed": false,
        "label": "Get Started",
        "items": [
          {
            "type": "doc",
            "label": "Test With SDK",
            "id": "browser-cloud-quickstart"
          },
          {
            "type": "doc",
            "label": "Test With Skills",
            "id": "browser-cloud-skills"
          },
          {
            "type": "doc",
            "label": "Debug and Troubleshoot",
            "id": "browser-cloud-debugging"
          }
        ]
      },
      {
        "type": "category",
        "collapsed": true,
        "label": "Guides",
        "items": [
          {
            "type": "doc",
            "label": "Manage Sessions",
            "id": "browser-cloud-sessions-overview"
          },
          {
            "type": "doc",
            "label": "Transfer Cookies & Storage",
            "id": "browser-cloud-context"
          },
          {
            "type": "doc",
            "label": "Stay Logged in Across Runs",
            "id": "browser-cloud-profiles"
          },
          {
            "type": "doc",
            "label": "Stealth Mode to Avoid Bot Detection",
            "id": "browser-cloud-stealth"
          },
          {
            "type": "doc",
            "label": "Upload and Download Files",
            "id": "browser-cloud-files"
          },
          {
            "type": "doc",
            "label": "Load Chrome Extensions",
            "id": "browser-cloud-extensions"
          },
          {
            "type": "doc",
            "label": "Access Localhost and Internal Networks",
            "id": "browser-cloud-tunnel"
          },
          {
            "type": "doc",
            "label": "One-Liner Scrape, Screenshot, and PDF",
            "id": "browser-cloud-quick-actions"
          }
        ]
      },
      {
        "type": "doc",
        "label": "API Reference",
        "id": "browser-cloud-api-reference"
      }
    ]
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
