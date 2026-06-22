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
        link: {
          type: "doc",
          id: "getting-started-with-hyperexecute",
        },
        items: [
          {
            type: "doc",
            label: "Running Your First Job on HyperExecute",
            id: "hyperexecute-running-your-first-job",
          },

          {
            type: "doc",
            label: "Guided Walkthrough",
            id: "hyperexecute-guided-walkthrough",
          },
          {
            type: "doc",
            label: "HyperExecute vs Traditional Grids",
            id: "hyperexecute-vs-traditional-test-grids",
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "HyperExecute YAML",
        link: {
          type: "doc",
          id: "hyperexecute-yaml-parameters",
        },
        items: [
          "hyperexecute-generate-sample-yaml",
          "deep-dive-into-hyperexecute-yaml",
          "hyperexecute-snooper",
          "hyperexecute-inherit-config",
          "hyperexecute-yaml-version0.2",
          "hyperexecute-yaml-capability-overrides",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "HyperExecute CLI",
        link: {
          type: "doc",
          id: "hyperexecute-cli-run-tests-on-hyperexecute-grid",
        },
        items: [
          {
            type: "doc",
            label: "GitIgnore and HyperexecuteIgnore",
            id: "hyperexecute-gitignore",
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "HyperExecute GUI App",
        link: {
          type: "doc",
          id: "hyperexecute-cli-gui",
        },
        items: [
          {
            type: "doc",
            label: "Search Query in GUI",
            id: "hyperexecute-gui-query",
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Key features of HyperExecute",
        link: {
          type: "doc",
          id: "key-features-of-hyperexecute",
        },
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
          "hyperexecute-rerun-failed-tests"
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Languages and Frameworks",
        link: {
          type: "doc",
          id: "hyperexecute-supported-languages-and-frameworks",
        },
        items: [
          {
            type: "category",
            collapsed: true,
            label: "Selenium",
            items: [
              {
                type: "category",
                collapsed: true,
                label: "Java",
                items: [
                  "testng-on-hyperexecute-grid",
                  "junit-on-hyperexecute-grid",
                  "cucumber-on-hyperexecute-grid",
                ],
              },
              {
                type: "category",
                collapsed: true,
                label: "JavaScript",
                items: [
                  "webdriverio-on-hyperexecute-grid",
                  "protractor-on-hyperexecute-grid",
                  "nightwatch-on-hyperexecute-grid",
                  "hyperexecute-bidi-testing"
                ],
              },
              {
                type: "category",
                collapsed: true,
                label: "C#",
                items: [
                  "nunit-on-hyperexecute-grid",
                  "specflow-on-hyperexecute-grid",
                  "reqnroll-on-hyperexecute-grid",
                ],
              },
              {
                type: "category",
                collapsed: true,
                label: "Python",
                items: [
                  "pyunit-on-hyperexecute-grid",
                  "pytest-on-hyperexecute-grid",
                  "robot-on-hyperexecute-grid",
                  "behave-on-hyperexecute-grid",
                ],
              },
              {
                type: "category",
                collapsed: true,
                label: "Ruby",
                items: [
                  "ruby-on-hyperexecute-grid",
                  "capybara-on-hyperexecute-grid",
                ],
              },
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Puppeteer",
            items: [
              "jest-on-hyperexecute",
              "mocha-on-hyperexecute",
              "codecept-on-hyperexecute",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Playwright",
            link: {
              type: "doc",
              id: "playwright-integration-with-hyperexecute",
            },
            items: [
              {
                type: "category",
                collapsed: true,
                label: "Python",
                items: [
                  "pytest-on-hyperexecute",
                  "playwright-python-on-hyperexecute",
                ],
              },
              {
                type: "category",
                collapsed: true,
                label: "Javascript",
                items: [
                  "playwright-vanillajs-on-hyperexecute",
                  "playwright-codeceptjs-on-hyperexecute",
                  "playwright-jest-on-hyperexecute",
                ],
              },
              {
                type: "doc",
                label: "Java",
                id: "playwright-junit-on-hyperexecute",
              },
              {
                type: "doc",
                label: "C#",
                id: "playwright-dotnet-on-hyperexecute",
              },
              {
                type: "doc",
                label: "Real Device",
                id: "playwright-real-device-on-hyperexecute",
              },
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Cypress",
            link: {
              type: "doc",
              id: "cypress-integration-with-hyperexecute",
            },
            items: ["cypressv9-on-hyperexecute", "cypressv10-on-hyperexecute"],
          },
          {
            type: "category",
            collapsed: true,
            label: "Appium",
            items: [
              "hyperexecute-appium-testing",
              "hyperexecute-webapp-appium-testing",
              "hyperexecute-appium-virtual-device",
              "hyperexecute-emu-simu-devices-list",
            ],
          },
          {
            type: "doc",
            label: "Espresso",
            id: "hyperexecute-espresso-testing",
          },
          {
            type: "doc",
            label: "Maestro",
            id: "hyperexecute-maestro-testing",
          },
          {
            type: "doc",
            label: "Detox",
            id: "hyperexecute-detox-testing",
          },
          {
            type: "doc",
            label: "XCUI",
            id: "hyperexecute-xcui-testing",
          },
          {
            type: "doc",
            label: "k6",
            id: "hyperexecute-k6-testing",
          },
          {
            type: "category",
            collapsed: true,
            label: "Performance Testing",
            link: {
              type: "doc",
              id: "hyperexecute-performance-testing",
            },
            items: [
              "hyperexecute-run-jmeter-tests",
              "hyperexecute-gattling-testing",
            ],
          },
          {
            type: "doc",
            label: "API Testing",
            id: "hyperexecute-api-testing",
          },
          {
            type: "doc",
            label: "Karate",
            id: "hyperexecute-karate-testing",
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Troubleshooting Guide",
        link: {
          type: "doc",
          id: "hyperexecute-how-to-debug-job",
        },
        items: [
          "hyperexecute-cli-error",
          "hyperexecute-pre-steps-error",
          "hyperexecute-scenario-steps-error",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Integrate with HyperExecute",
        link: {
          type: "doc",
          id: "integration-he",
        },
        items: [
          {
            type: "category",
            label: "Integration with CI/CD tools",
            collapsed: true,
            link: {
              type: "doc",
              id: "hyperexecute-integration-with-ci-cd-tools",
            },
            items: [
              {
                type: "doc",
                label: "AWS Codepipeline",
                id: "aws-codepipeline-with-hyperexecute",
              },
              {
                type: "doc",
                label: "Azure Devops",
                id: "azure-with-hyperexecute",
              },
              {
                type: "doc",
                label: "GitHub Actions",
                id: "github-actions-with-hyperexecute",
              },
              {
                type: "doc",
                label: "GitLab",
                id: "gitlab-integration-with-hyperexecute",
              },
              {
                type: "doc",
                label: "CircleCI",
                id: "circle-ci-with-hyperexecute",
              },
              {
                type: "doc",
                label: "Bitbucket",
                id: "jenkins-with-hyperexecute",
              },
              {
                type: "doc",
                label: "Bitbucket",
                id: "bitbucket-pipeline-with-hyperexecute",
              },
              {
                type: "doc",
                label: "Travis CI",
                id: "travis-ci-with-hyperexecute",
              },
              {
                type: "doc",
                label: "TeamCity",
                id: "teamcity-with-hyperexecute",
              },
              {
                type: "doc",
                label: "GoCD",
                id: "gocd-integration-with-hyperexecute",
              },
              {
                type: "doc",
                label: "Bamboo CI",
                id: "bamboo-integration-with-hyperexecute",
              },
              {
                type: "doc",
                label: "Semaphore",
                id: "semaphore-integration-with-hyperexecute",
              },
            ],
          },
          {
            type: "category",
            label: "Integration with Products",
            collapsed: true,
            link: {
              type: "doc",
              id: "hyperexecute-integration-with-products",
            },
            items: [
              {
                type: "doc",
                label: "Accelq",
                id: "hyperexecute-accelq-integration",
              },
              {
                type: "doc",
                label: "algoQA",
                id: "hyperexecute-algoqa-integration",
              },
              {
                type: "doc",
                label: "GitHub App",
                id: "hyperexecute-github-app-integration",
              },
              {
                type: "category",
                collapsed: true,
                label: "Azure Test Plan",
                link: {
                  type: "doc",
                  id: "hyperexecute-azure-test-plan",
                },
                items: [
                  "hyperexecute-azure-setup-test-plan",
                  "hyperexecute-azure-associate-test-case",
                  "hyperexecute-integrate-azure-test-plan",
                ],
              },
              {
                type: "doc",
                label: "Katalon",
                id: "katalon-integration-with-hyperexecute",
              },
              {
                type: "doc",
                label: "Provar",
                id: "hyperexecute-provar-integration",
              },
              {
                type: "doc",
                label: "qTest",
                id: "hyperexecute-qtest-integration",
              },
              {
                type: "doc",
                label: "Sikuli",
                id: "hyperexecute-sikuli-integration",
              },
              {
                type: "doc",
                label: "Slack",
                id: "hyperexecute-slack-integration",
              },
              {
                type: "doc",
                label: "Testim",
                id: "hyperexecute-testim-integration",
              },
              {
                type: "doc",
                label: "Testsigma",
                id: "hyperexecute-testsigma-integration",
              },
              {
                type: "category",
                collapsed: true,
                label: "Tosca",
                link: {
                  type: "doc",
                  id: "tosca-integration-hyperexecute",
                },
                items: [
                  "tosca-integration-with-hyperexecute-using-commander",
                  "tosca-integration-with-hyperexecute-using-dex",
                  "tosca-integration-with-hyperexecute-for-sap",
                ],
              },
              {
                type: "doc",
                label: "WinApp Driver",
                id: "hyperexecute-winapp-integration",
              },
              {
                type: "doc",
                label: "Zephyr",
                id: "hyperexecute-zephyr-scale-integration",
              },
            ],
          },
          {
            type: "category",
            label: "Integration with TestMu AI Products",
            collapsed: true,
            link: {
              type: "doc",
              id: "integration-lt-products",
            },
            items: [
              {
                type: "doc",
                label: "SmartUI Capture Onboarding",
                id: "hyperexecute-smart-ui-capture-onboarding",
              },
              {
                type: "category",
                label: "HyperExecute Smart UI - Hooks",
                collapsed: true,
                link: {
                  type: "doc",
                  id: "smart-ui-testing",
                },
                items: [
                  {
                    type: "doc",
                    label: "Hyperexecute Smart UI Testing - Selenium",
                    id: "hyperexecute-smart-ui-testing-using-selenium",
                  },
                  {
                    type: "doc",
                    label: "Hyperexecute Smart UI Testing - Cypress",
                    id: "hyperexecute-smart-ui-testing-using-cypress",
                  },
                  {
                    type: "doc",
                    label: "Hyperexecute Smart UI Testing - Playwright",
                    id: "hyperexecute-smart-ui-test-using-playwright",
                  },
                ],
              },
              {
                type: "category",
                label: "HyperExecute Smart UI - SDK",
                collapsed: true,
                items: [
                  {
                    type: "category",
                    label: "Selenium",
                    collapsed: true,
                    items: [
                      "hyperexecute-smart-ui-sdk-selenium-javascript",
                      "hyperexecute-smart-ui-sdk-selenium-csharp",
                    ],
                  },
                  {
                    type: "doc",
                    label: "Hyperexecute Smart UI Testing - Cypress",
                    id: "hyperexecute-smart-ui-sdk-using-cypress",
                  },
                  {
                    type: "doc",
                    label: "Hyperexecute Smart UI Testing - Maestro",
                    id: "hyperexecute-smart-ui-sdk-maestro",
                  },
                  {
                    type: "doc",
                    label: "Hyperexecute Smart UI Testing - Playwright",
                    id: "hyperexecute-smart-ui-sdk-using-playwright",
                  },
                  {
                    type: "doc",
                    label: "Hyperexecute Smart UI Testing - Puppeteer",
                    id: "hyperexecute-smart-ui-sdk-using-puppeteer",
                  },
                ],
              },
              {
                type: "doc",
                label: "Hyperexecute Virtual Devices Testing",
                id: "hyperexecute-integration-with-virtual-devices",
              },
              {
                type: "doc",
                label: "Hyperexecute Real Devices Testing",
                id: "real-devices-integration-with-hyperexecute",
              },
            ],
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "HyperExecute Private Cloud",
        link: {
          type: "doc",
          id: "hyperexecute-private-cloud-setup",
        },
        items: [
          {
            type: "doc",
            label: "HyperExecute Private Cloud Benefits",
            id: "hyperexecute-private-cloud-benefits",
          },
          {
            type: "category",
            collapsed: true,
            label: "Setup with Azure",
            link: {
              type: "doc",
              id: "hyperexecute-private-cloud-setup-with-azure",
            },

            items: [
              {
                type: "doc",
                label: "HyperExecute Private Cloud on JumpHost",
                id: "hyperexecute-private-cloud-on-jumphost",
              },
              {
                type: "doc",
                label: "VNet Peering and VNet Links",
                id: "hyperexecute-vnet-peering-for-private-cloud",
              },
            ],
          },
          {
            type: "doc",
            label: "Setup with AWS",
            id: "hyperexecute-private-cloud-setup-with-aws",
          },
        ],
      },
      {
        type: "category",
        label: "Knowledge Base",
        collapsed: true,
        link: {
          type: "doc",
          id: "hyperexecute-knowledge-base",
        },
        items: [
          {
            type: "doc",
            label: "HyperExecute Status",
            id: "hyperexecute-status",
          },
          {
            type: "category",
            collapsed: true,
            label: "How To Guide",
            link: {
              type: "doc",
              id: "hyperexecute-how-to-guide",
            },
            items: [
              "hyperexecute-how-to-get-my-username-and-access-key",
              "hyperexecute-environment-variable-setup",
              {
                type: "category",
                collapsed: true,
                label: "Secrets Management",
                items: [
                  "hyperexecute-how-to-save-and-manage-secrets",
                  "hyperexecute-how-to-manage-project-level-secrets",
                ],
              },
              "hyperexecute-how-to-configure-tunnel",
              "hyperexecute-how-to-configure-os-and-browser",
              "hyperexecute-how-to-find-correct-concurrency",
              "hyperexecute-how-to-configure-sourcePayload",
              "hyperexecute-browser-list-api",
              "hyperexecute-how-to-run-tests-using-local-selenium-drivers",
              "hyperexecute-how-to-perform-dependent-test-based-discovery",
              "hyperexecute-how-to-perform-group-based-test-discovery-in-testng",
              "hyperexecute-how-to-resolve-version-conflict",
              "hyperexecute-org-product-preferences",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Use Cases",
            link: {
              type: "doc",
              id: "hyperexecute-use-cases",
            },
            items: [
              "hyperexecute-how-smart-caching-boosts-tests-speed",
              "hyperexecute-seamless-integration-with-tools",
              "hyperexecute-build-mobile-apps-using-tools",
              "hyperexecute-utilizing-custom-libraries",
              "hyperexecute-supported-languages-and-packages",
              "hyperexecute-test-chains",
              "hyperexecute-testng-use-cases",
              "hyperexecute-yaml-creation-for-playwright",
              "hyperexecute-python-use-cases",
              "hyperexecute-csharp-use-cases"
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Widgets",
            link: {
              type: "doc",
              id: "hyperexecute-widgets",
            },
            items: [
              "hyperexecute-job-widgets",
              "hyperexecute-stage-widgets",
              "hyperexecute-task-widgets",
              "hyperexecute-test-widgets",
              "hyperexecute-resource-widgets",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Job Reports",
            link: {
              type: "doc",
              id: "hyperexecute-job-reports",
            },
            items: [
              "extent-report",
              "native-extent-report",
              "hyperexecute-native-testng-report",
              "allure-reports",
              "cucumber-report",
              "playwright-html-report",
              "specflow-report",
              "custom-speclow-report",
              "cypress-mochaawesome-report",
              "error-categorization-report",
              "junit-xml-report",
              "karate-report",
              "robot-report",
              "hyperexecute-katalon-report"
            ],
          },

          {
            type: "category",
            collapsed: true,
            label: "Migration Guide",
            items: ["saucelabs-to-hyperexecute-migrate"],
          },
        ],
      },
      {
        type: "category",
        label: "FAQs",
        collapsed: true,
        link: {
          type: "doc",
          id: "hyperexecute-faqs",
        },
        items: [
          {
            type: "doc",
            label: "General FAQs",
            id: "he-general-faqs",
          },
          {
            type: "doc",
            label: "YAML FAQs",
            id: "hyperexecute-yaml-faqs",
          },
          {
            type: "doc",
            label: "CLI FAQs",
            id: "he-cli-faqs",
          },
          {
            type: "doc",
            label: "Features FAQs",
            id: "he-feature-faqs",
          },
          {
            type: "doc",
            label: "Platform FAQs",
            id: "he-platform-faqs",
          },
          {
            type: "doc",
            label: "Pricing FAQs",
            id: "he-pricing-faqs",
          },
          {
            type: "doc",
            label: "Security FAQs",
            id: "he-security-faqs",
          },
          {
            type: "doc",
            label: "Enterprise FAQs",
            id: "he-enterprise-faqs",
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Release Notes",
        link: {
          type: "doc",
          id: "hyperexecute-release-notes",
        },
        items: [
          // CLI releases
          {
            type: "category",
            collapsed: true,
            label: "CLI Releases",
            items: [
              {
                type: "category",
                collapsed: true,
                label: "January, 2025",
                items: ["hyperexecute-cli-release-notes-0-2-249"],
              },
            ],
          },

          // MCP Server Release Notes
          {
            type: "category",
            collapsed: true,
            label: "MCP Releases",
            items: [
              {
                type: "category",
                collapsed: true,
                label: "May, 2025",
                items: ["hyperexecute-mcp-server-release-notes-1-0-0"],
              },
            ],
          },

          // 2025 releases
          {
            type: "category",
            collapsed: true,
            label: "2025 Releases",
            items: ["hyperexecute-release-notes-2025"],
          },

          // 2024 releases
          {
            type: "category",
            collapsed: true,
            label: "2024 Releases",
            items: ["hyperexecute-release-notes-2024"],
          },

          // 2023 releases
          {
            type: "category",
            collapsed: true,
            label: "2023 Releases",
            items: ["hyperexecute-release-notes-2023"],
          },
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
            label: "Getting Started",
            id: "getting-started-with-agent-testing-platform",
          },
          {
            type: "doc",
            label: "Platform Overview",
            id: "ai-agent-testing-platform-overview",
          },
        ],
      },
      {
        type: "category",
        label: "Setup & Integration",
        collapsed: false,
        items: [

          {
            type: "doc",
            label: "A2A CLI",
            id: "testmu-a2a-cli",
          },
          {
            type: "doc",
            label: "Chat Agent API Integration",
            id: "chat-agent-api-integration",
          },
          {
            type: "doc",
            label: "Test Your First AI Agent",
            id: "testing-your-first-ai-agent",
          },

        ],
      },
      {
        type: "category",
        label: "Reference",
        collapsed: false,
        items: [
          {
            type: "doc",
            label: "Features & Metrics",
            id: "agent-features-and-metrics",
          },
          {
            type: "doc",
            label: "FAQs",
            id: "agent-testing-platform-faqs",
          },
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
      {
        type: "category",
        collapsed: true,
        label: "Getting Started",
        link: {
          type: "doc",
          id: "getting-started-with-kane-ai",
        },
        items: [
          "why-we-need-kane-ai",
          "use-cases-of-kane-ai",
          {
            type: "category",
            collapsed: true,
            label: "Author Your First Test",
            items: [
              "author-your-first-desktop-browser-test",
              "author-your-first-mobile-browser-test",
              "author-your-first-mobile-app-test"
            ],
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Knowledge Base",
        link: {
          type: "doc",
          id: "kaneai-kb-knowledge-base-index",
        },
        items: [
          {
            type: "category",
            label: "Authoring Guides",
            collapsed: true,
            items: [
              "kaneai-kb-finding-and-interacting-with-elements",
              "kaneai-kb-forms-inputs-and-data-entry",
              "kaneai-kb-assertions-and-validation",
              "kaneai-kb-dynamic-content-waits-and-page-state",
              "kaneai-kb-mobile-app-testing-patterns",
            ],
          },
          {
            type: "category",
            label: "Advanced Testing",
            collapsed: true,
            items: [
              "kaneai-kb-authentication-and-session-management",
              "kaneai-kb-api-testing-and-network-assertions",
              "kaneai-kb-js-snippets-and-workarounds",
              "kaneai-failure-conditions",
              "kaneai-smart-locator-priority",
            ],
          },
          {
            type: "category",
            label: "Variables and Parameters",
            collapsed: true,
            link: {
              type: "doc",
              id: "kaneai-variables-and-parameters",
            },
            items: [
              "kane-ai-using-variables",
              "kane-ai-secrets",
              "kane-ai-smart-variables",
              "kane-ai-using-parameters",
              "kane-ai-using-datasets",
            ],
          },
          "kane-ai-command-guide",
          "kane-ai-automation-code-generation",
          "error-handling-kaneai",
        ],
      },

      {
        type: "category",
        collapsed: true,
        label: "Features",
        items: [
          {
            type: "category",
            collapsed: true,
            label: "Common",
            items: [
              "kaneai-manual-interaction",
              "kane-ai-javascript-execution",
              "kane-ai-geolocation-tunnel-proxy",
              "kaneai-auto-heal",
              "kane-ai-scroll-in-feature",
              "kane-ai-drag-drop",
              "kane-ai-click-interactions",
              "kane-ai-jira-integration",
              "kane-ai-api-testing",
              {
                type: "category",
                collapsed: true,
                label: "Modules",
                link: {
                  type: "doc",
                  id: "kane-ai-modules",
                },
                items: [
                  "kaneai-modules-versions-and-enhancement",
                  "kaneai-bulk-module-update",
                ],
              },
              "kaneai-upload-and-download-files",
              "kaneai-totp",
              "kaneai-database",
              "kaneai-rename-instructions",
              "kaneai-conditional-logic",
              "kaneai-while-loops",
              "kane-ai-network-assertions",
              "kaneai-advanced-settings",
              "kaneai-custom-headers",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Desktop Browser",
            items: [
              "kaneai-dynamic-url-replacement",
              "kaneai-chrome-options",
              "kaneai-smartui-visual-testing",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Mobile",
            items: [
              "kane-ai-mobile-app-capabilities",
              "kane-ai-deeplink-support",
              "kaneai-network-throttling",
              "kaneai-gps-location",
              "kaneai-scroll-until-mobile",
              "kaneai-mobile-app-accessibility",
            ],
          },
        ],
      },

      {
        type: "category",
        collapsed: true,
        label: "Test Manager",
        items: [
          "kane-ai-test-plan",
          "kaneai-hyperexecute-test-run-execution",
          "kaneai-sequential-test-runs",
          "kaneai-ci-cd-automation",
          "test-runs-configurations",
          "kaneai-scheduled-test-runs",
          "kaneai-test-run-instance-view",
        ],
      },

      {
        type: "doc",
        label: "GitHub App Integration",
        id: "github-app-integration",
      },
      // {
      //   type: "category",
      //   collapsed: true,
      //   label: "Knowledge Base",
      //   items: [
      //     "kane-ai-command-guide",
      //     "kaneai-failure-conditions",
      //     "kane-ai-web-test-writing-guidelines",
      //     "kane-ai-app-test-writing-guidelines",
      //     "error-handling-kaneai",
      //     "kane-ai-automation-code-generation",
      //   ],
      // },
      {
        type: "category",
        collapsed: true,
        label: "Video Tutorials",
        items: [
          "kaneai-test",
          "kaneai-test-manual-interaction-video",
          "kaneai-edit-test-steps",
        ],
      },
      {
        type: "doc",
        label: "FAQs",
        id: "kaneai-faqs",
      },
      // {
      //   type: "category",
      //   collapsed: true,
      //   label: "Release Notes",
      //   link: {
      //     type: "doc",
      //     id: "kaneai-release-notes",
      //   },
      //   items: [
      //     {
      //       type: "category",
      //       collapsed: true,
      //       label: "September, 2024",
      //       items: ["kaneai-release-notes-0-0-2", "kaneai-release-notes-0-0-1"],
      //     },
      //   ],
      // },
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
          "npm-plugin-for-testcafe-integration-with-lambdatest",
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
      "app-center-integration",
      "app-center-automation",
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
                label: "Accessibility Web Score",
                id: "accessibility-web-score",
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
      {
        type: "doc",
        label: "Introduction to Test Manager",
        id: "test-manager",
      },
      "manual-to-automated-test-conversion",
      {
        type: "category",
        collapsed: true,
        label: "Projects",
        items: ["create-projects", "system-and-custom-fields"],
      },
      {
        type: "category",
        collapsed: true,
        label: "Test Cases",
        items: [
          {
            type: "category",
            collapsed: true,
            label: "Import Test Cases",
            items: ["csv-import", "one-click-migration-from-testrail", "one-click-migration-from-xray", "one-click-migration-from-zephyr-scale"],
          },
          "generate-test-cases-with-ai",
          // "create-manage-test-cases",
          "manual-test-case-creation",
          "test-case-versioning",
          "create-modules",
          "copy-and-move-support-for-test-cases",
          "update-fields",
          "export-test-cases",
          {
            type: "category",
            collapsed: true,
            label: "Linking Automated Test Cases",
            link: {
              type: "doc",
              id: "automated-test-cases-with-ai",
            },
            items: [
              "automated-test-cases-linked-using-dashboard",
              "automated-test-cases-linked-using-capability",
            ],
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Test Runs",
        items: [
          "test-run-creation-and-management",
          "track-issues-in-test-runs",
          "sync-test-instance",
          "test-instance-audit-logs"
        ],
      },
      {
        type: "doc",
        label: "Milestones",
        id: "milestone-creation-and-management",
      },
      {
        type: "category",
        collapsed: true,
        label: "Insights & Reports",
        items: [
          "insights-dashboard",
          "tms-reports"
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Issue Tracker Integration",
        items: [
          "link-jira-issues-with-test-manager",
          "lambdatest-jira-app",
          "link-ado-issues-with-test-manager",
          "lambdatest-azure-devops-app",
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
              "assistive-touch-on-real-ios-devices",
              "dark-mode-on-real-devices",
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
        collapsed: true,
        label: "Get Started",
        items: [
          "getting-started-with-lambdatest-automation",
          "lambdatest-running-your-first-selenium-test",
          "selenium-agent-skills",
          "migrate-selenium-test-suite",
          "inside-lambdatest-automation-platform",
          "selenium-supported-languages-and-frameworks",
          "supported-browsers-and-operating-systems-for-the-web-interface",

        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Choose Your Language & Framework",
        items: [

          {
            type: "category",
            collapsed: true,
            label: "Java",
            items: [
              "java-framework",
              "selenium-java-sdk",
              "testng-framework",
              "junit-frameworks",
              "cucumber-script-testng-selenium",
              "selenide-frameworks",
              "gauge-frameworks",
              "geb-frameworks",
              "running-serenity-test-on-selenium-grid",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "JavaScript",
            items: [
              "running-javascript-test-scripts-on-lambdatest",
              "running-protractor-test-scripts-on-lambdatest",
              "automation-testing-with-mocha-and-selenium",
              "run-nightwatch-tests-on-lambdatest-selenium-grid",
              "run-wd-atomation-test-on-lambdatest-selenium-grid",
              "automation-testing-using-webdriverIO-5-6-2",
              "run-webdriverio-automation-scripts-on-lambdatest",
              "automation-testing-with-selenium-and-jest",
              "run-automation-tests-using-angularjs-with-karma",
              "cucumberjs-testing-using-lambdatest-selenium-grid",
              "automation-testing-using-jasmine-with-karma",
              "karma-integration-with-lambdatest",
              "npm-plugin-for-testcafe-integration-with-lambdatest",
              "selenium-tests-with-nemojs",
              "codeceptjs-with-selenium",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "C#",
            items: [
              "csharp-with-selenium",
              "nunit-with-selenium",
              "selenium-xunit",
              "mstest-with-selenium",
              "specflow-with-selenium",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Python",
            items: [
              "python-with-selenium-running-python-automation-scripts-on-testmu-selenium-grid",
              "unit-testing-in-python",
              "pytest-with-selenium-running-pytest-automation-script-on-testmu-selenium-grid",
              "robot-with-selenium-running-robot-automation-scripts-on-testmu-selenium-grid",
              "behave-with-selenium-running-behave-automation-scripts-on-testmu-selenium-grid",
              "automation-testing-selenium-with-lettuce",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "PHP",
            items: [
              "php-framework",
              "behat-php-framework",
              "laravel-php-framework",
              "codeception-php-framework",
              "phpunit-php-framework",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Ruby",
            items: [
              "ruby",
              "ruby-capybara",
              "ruby-rspec",
              "ruby-testunit",
            ],
          },
          "executing-tesbo-automation-script-over-online-selenium-grid",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Set Up Test Environment",
        items: [
          {
            type: "category",
            collapsed: true,
            label: "Configure Capabilities",
            items: [
              "selenium-automation-capabilities",
              "selenium-default-capabilities",
              "selenium-three-capabilities",
              "selenium-four-capabilities",
              "lambdatest-selenium-advance-capabilities",
            ],
          },
          "perform-selenium-automation-on-headless-browsers",
          "custom-chrome",
          "selenium-set-browser-options",
          "ie-mode-on-edge",
          "change-browser-window-size",
          "Selenium-Grid-Configuration",
          "auto-heal",
          "autoheal-with-hooks",
          "smart-wait",
        ],
      },

      {
        type: "category",
        collapsed: true,
        label: "Simulate Real User Conditions",
        items: [
          "selenium-geolocation-capabilities",
          "network-throttling",
          "configure-timezones",
          "custom-header",
          "custom-dns-map",
          "mock-video-injection-web-automation-selenium-chromium",
          "mobile-web-automation-on-real-devices",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Handle Files and Sensitive Data",
        items: [
          "upload-files-using-lambdatest",
          "download-files-using-lambdatest-selenium-grid",
          "selenium-mask-your-data",
          "network-data-masking",
          "setup-pre-run-executable",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Test in Local Environments",
        items: [
          "test-locally-hosted-websites-with-selenium",
          "white-listing-proxy-with-lambdatest",
          "run-selenium-test-behind-the-proxy",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Manage Your Runs",
        items: [
          "filter-your-selenium-tests",
          "group-tests-using-custom-tags",
          "group-and-filter-your-test-builds-using-build-tags",
          "change-individual-test-details",
          "sharing-test-results",
          "mark-as-bug-in-automation-testing",
          "live-interaction",
          "build-split",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Debug Your Test Suites",
        items: [
          "debugging-options",
          "telemetry-logs",
          "extended-debugging-options",
          "har-log-viewer",
          "view-lighthouse-performance-metrics",
          "lighthouse-reports-hooks",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Connect Your Tools",
        items: [
          "selenium-bidi-integration",
          "lambda-hooks",
          "command-annotations",
          "selenium-add-test-meta-data",
        ],
      },
      {
        type: "link",
        label: "Trigger Tests From CI/CD",
        href: "/support/docs/integrations-with-ci-cd-tools/",

      },
      {
        type: "category",
        collapsed: true,
        label: "Troubleshoot",
        items: [
          "error-messages",
          "timeouts-issues-and-resolutions",
          "lambda-exceptions",
          "performance-tips",
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
          {
            type: "doc",
            label: "Cypress Testing",
            id: "getting-started-with-cypress-testing",
          },
          {
            type: "doc",
            label: "Run Your Test With Agent Skills",
            id: "cypress-agent-skills",
          },
          {
            type: "doc",
            label: "Authentication",
            id: "authentication",
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Test Capabilities",
        items: [
          {
            type: "doc",
            label: "Parallel Testing",
            id: "run-your-cypress-tests-in-parallel",
          },
          {
            type: "doc",
            label: "Specify Browsers and OS",
            id: "supported-browsers-and-os",
          },
          {
            type: "doc",
            label: "Supported Cypress Versions",
            id: "supported-cypress-versions",
          },
          {
            type: "doc",
            label: "Cypress Testing Using WebKit",
            id: "cypress-webkit",
          },
          {
            type: "doc",
            label: "Cypress CLI Commands",
            id: "cypress-cli-commands",
          },
          {
            type: "doc",
            label: "Configure Cypress Test Execution",
            id: "run-settings",
          },
          {
            type: "doc",
            label: "Test On Different Screen Resolutions",
            id: "screen-resolution-cypress",
          },
          {
            type: "doc",
            label: "Environment Variables Support for Cypress Tests",
            id: "cyp-environment",
          },
          {
            type: "doc",
            label: "Execute Including Private Dependencies",
            id: "private-dependencies-cypress",
          },
          {
            type: "doc",
            label: "Install NPM via Tunnel",
            id: "npm-via-tunnel",
          },
          {
            type: "doc",
            label: "Download Artefacts For Cypress Project",
            id: "download-artefacts-cypress",
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Integrations",
        items: [
          {
            type: "doc",
            label: "Integrate TestMu AI with Cypress Dashboard",
            id: "integrate-lambdatest-with-cypress",
          },
          {
            type: "doc",
            label: "Applitools Integration For Cypress",
            id: "applitools-integration-cypress",
          },
          {
            type: "doc",
            label: "Report Portal IO Integration For Cypress",
            id: "report-portal-cypress",
          },
          {
            type: "doc",
            label: "Multi Reporters Support",
            id: "cyp-multi-reporters",
          },
          {
            type: "doc",
            label: "Cypress Terminal Reports",
            id: "cypress-detailed-command-logs",
          },
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
        label: "Getting Started",
        items: [
          "playwright-testing-guide",
          "playwright-agent-skills",
          "playwright-sdk",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Languages and Frameworks",
        items: [
          {
            type: "category",
            collapsed: true,
            label: "Java",
            items: ["java-with-playwright", "junit-with-playwright"],
          },
          {
            type: "category",
            collapsed: true,
            label: "JavaScript",
            items: [
              "javascript-with-playwright",
              "jest-with-playwright",
              "typescript-with-playwright",
              "playwright-sdk",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "C#",
            items: ["csharp-with-playwright"],
          },
          {
            type: "category",
            collapsed: true,
            label: "Python",
            items: ["python-with-playwright"],
          },
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Test Capabilities",
        items: [
          {
            type: "category",
            collapsed: true,
            label: "Test on Android Device",
            link: {
              type: "doc",
              id: "playwright-android-guide",
            },
            items: ["playwright-android-caps", "playwright-webview-test"],
          },
          "playwright-ios-guide",
          "parallel-playwright-test",
          "migrate-playwright-tests",
          "playwright-test-execution-setup",
          "playwright-bundled-browser-support",
          "playwright-caps",
          "local-testing-playwright",
          "playwright-auto-heal",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Integrations",
        items: [
          "playwright-playwrighttest",
          "playwright-cucumberjs",
          "playwright-cicd",
          "playwright-lighthouse-library",
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
        label: "Getting Started",
        items: [
          "puppeteer-testing-guide",
          "puppeteer-agent-skills",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Test Capabilities",
        items: [
          "puppeteer-test-execution",
          "puppeteer-capabilities",
          "local-testing-puppeteer",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "Frameworks",
        items: [
          "puppeteer-mocha",
          "puppeteer-jest",
          "puppeteer-pytest-pyppeteer",
        ],
      },
      {
        type: "category",
        collapsed: true,
        label: "CI/CD",
        items: [
          "puppeteer-cicd",
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
              "set-device-dark-mode",
              "smart-heal-appium",
              "apple-pay-auto",
              "button-text-click",
              "ios-shake-gesture-appautomation",
              "appium-terminal-logs"
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Smart TV Automation",
            items: ["appium-appletv", "appium-firetv", "appium-rokutv", "appium-androidtv"],
          },
          {
            type: "category",
            collapsed: true,
            label: "Integrations",
            items: ["appium-inspector"],
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
                label: "Hooks Layout + Full Page",
                id: "smartui-hooks-layout-fullpage-smartignore",
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
        "insights-app-profiling",
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
            label: "SmartUI MCP",
            id: "smartui-mcp-server",
          },
          {
            type: "doc",
            label: "Accessibility MCP",
            id: "accessibility-mcp-server",
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
