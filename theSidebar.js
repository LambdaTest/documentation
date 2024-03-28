module.exports = {
    docs: [
      {
        type: 'link',
        label: '<- Back',
        href: '/docs',
        // link: {
        //     type: "doc",
        //     id: "getting-started",
        //   },
        customProps: {
        className: 'back-to-main-menu'
        },
    },
      {
        type: "doc",
        label: "Overview",
        id: "support-start",
      },
  
      // Real Time Testing
      {
        type: "category",
        collapsed: true,
        label: "Real Time Testing",
        items: [
          {
            type: "category",
            collapsed: true,
            label: "Real Time Browser Testing",
            items: [
              "real-time-testing",
              "pre-loaded-extension",
              "real-time-testing-troubleshooting",
              "http-basic-authentication",
              "webview-testing-in-android",
            ],
          },
          "developer-tools",
          "mark-as-bug-in-real-time-testing",
          "live-interactive-mobile-app-testing",
          "troubleshooting-ios-apps",
          "entitlements",
        ],
      },
  
      // Automation Testing
      {
        type: "category",
        collapsed: true,
        label: "Automation Testing",
        // link: {
        //   type: "doc",
        //   id: "getting-started",
        // },
        items: [
          {
            type: "category",
            collapsed: true,
            label: "Selenium Testing",
            items: [
              {
                type: "category",
                collapsed: true,
                label: "Getting Started",
                link: {
                  type: "doc",
                  id: "inside-lambdatest-automation-platform",
                },
                items: [
                  "filter-your-selenium-tests",
                  "mark-as-bug-in-automation-testing",
                  "sharing-test-results",
                  "download-files-using-lambdatest-selenium-grid",
                  "live-interaction",
                  "group-tests-using-custom-tags",
                ],
              },
              {
                type: "category",
                collapsed: true,
                label: "Languages and Frameworks",
                type: "category",
                collapsed: true,
                items: [
                  {
                    type: "category",
                    collapsed: true,
                    label: "Java",
                    link: {
                      type: "doc",
                      id: "java-framework",
                    },
                    items: [
                      "testng-framework",
                      "junit-frameworks",
                      "selenide-frameworks",
                      "gauge-frameworks",
                      "running-serenity-test-on-selenium-grid",
                      "cucumber-script-testng-selenium",
                      "geb-frameworks",
                    ],
                  },
                  {
                    type: "category",
                    collapsed: true,
                    label: "JavaScript",
                    link: {
                      type: "doc",
                      id: "running-javascript-test-scripts-on-lambdatest",
                    },
                    items: [
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
                    ],
                  },
                  {
                    type: "category",
                    collapsed: true,
                    label: "CSharp",
                    link: {
                      type: "doc",
                      id: "csharp-with-selenium",
                    },
                    items: [
                      "nunit-with-selenium",
                      "mstest-with-selenium",
                      "specflow-with-selenium",
                    ],
                  },
                  {
                    type: "category",
                    collapsed: true,
                    label: "Python",
                    link: {
                      type: "doc",
                      id: "python-with-selenium-running-python-automation-scripts-on-lambdatest-selenium-grid",
                    },
                    items: [
                      "unit-testing-in-python",
                      "pytest-with-selenium-running-pytest-automation-script-on-lambdatest-selenium-grid",
                      "robot-with-selenium-running-robot-automation-scripts-on-lambdatest-selenium-grid",
                      "behave-with-selenium-running-behave-automation-scripts-on-lambdatest-selenium-grid",
                      "automation-testing-selenium-with-lettuce",
                    ],
                  },
                  {
                    type: "category",
                    collapsed: true,
                    label: "PHP",
                    link: {
                      type: "doc",
                      id: "php-framework",
                    },
                    items: [
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
                    link: {
                      type: "doc",
                      id: "ruby",
                    },
                    items: ["ruby-capybara", "ruby-rspec", "ruby-testunit"],
                  },
                  "executing-tesbo-automation-script-over-online-selenium-grid",
                ],
              },
              {
                type: "category",
                collapsed: true,
                label: "Test Capabilities",
                link: {
                  type: "doc",
                  id: "desired-capabilities",
                },
                items: [
                  "view-lighthouse-performance-metrics",
                  "network-throttling",
                  "perform-selenium-automation-on-headless-browsers",
                  "debugging-options",
                  "telemetry-logs",
                  "smart-wait",
      
                ],
              },
              {
                type: "category",
                collapsed: true,
                label: "Troubleshooting",
                items: [
                  "error-messages",
                  "timeouts-issues-and-resolutions",
                  "lambda-exceptions",
                  "performance-tips",
                ],
              },
              {
                type: "category",
                collapsed: true,
                label: "FAQs",
                items: [
                  {
                    type: "category",
                    collapsed: true,
                    label: "Configuration",
                    items: [
                      "environment-variables",
                      "Selenium-Grid-Configuration",
                      "supported-browsers-and-operating-systems-for-the-web-interface",
                      "change-individual-test-details",
                      "queuing",
                      "lambda-hooks",
                    ],
                  },
                  {
                    type: "category",
                    collapsed: true,
                    label: "Proxy Settings",
                    items: [
                      "white-listing-proxy-with-lambdatest",
                      "run-selenium-test-behind-the-proxy",
                    ],
                  },
                  "upload-files-using-lambdatest",
                  "daily-usage-limit",
                  "setup-pre-run-executable",
                  "build-split",
                ],
              },
              "mobile-web-automation-on-real-devices",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Cypress Testing ",
            items: [
              "getting-started-with-cypress-testing",
              "authentication",
              "run-your-cypress-tests-in-parallel",
              "supported-browsers-and-os",
              "supported-cypress-versions",
              "cypress-webkit",
              "cypress-cli-commands",
              "run-settings",
              "screen-resolution-cypress",
              "download-artefacts-cypress",
              "integrate-lambdatest-with-cypress",
              "private-dependencies-cypress",
              "applitools-integration-cypress",
              "report-portal-cypress",
              "cyp-multi-reporters",
              "cyp-environment",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Playwright Testing ",
            items: [
              {
                type: "category",
                collapsed: true,
                label: "Languages and Frameworks",
                items: [
                  {
                    type: "category",
                    collapsed: true,
                    label: "Java",
                    link: {
                      type: "doc",
                      id: "java-with-playwright",
                    },
                    items: ["junit-with-playwright"],
                  },
                  {
                    type: "category",
                    collapsed: true,
                    label: "JavaScript",
                    link: {
                      type: "doc",
                      id: "javascript-with-playwright",
                    },
                    items: ["jest-with-playwright", "playwright-cucumberjs"],
                  },
                  "typescript-with-playwright",
                  "python-with-playwright",
                  "csharp-with-playwright",
                ],
              },
      
              "playwright-testing-guide",
              {
                type: "category",
                collapsed: true,
                label: "Test on Android Device",
                link: {
                  type: "doc",
                  id: "playwright-android-guide",
                },
                items: [
                  "playwright-android-guide",
                  "playwright-android-caps"
                ],
              },
              "parallel-playwright-test",
              "migrate-playwright-tests",
              "playwright-test-execution",
              "playwright-caps",
              "local-testing-playwright",
              "playwright-playwrighttest",
              "playwright-cicd",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Puppeteer Testing ",
            items: [
              "puppeteer-testing-guide",
              "puppeteer-test-execution",
              "puppeteer-capabilities",
              "local-testing-puppeteer",
              "puppeteer-mocha",
              "puppeteer-jest",
              "puppeteer-codecept",
              "puppeteer-pytest-pyppeteer",
              "puppeteer-cicd",
            ],
          },
          {
            type: "doc",
            id: "k6-browser-testing",
            label: "K6 Browser Testing ",
          },
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
                ],
              },
              {
                type: "category",
                collapsed: true,
                label: "Setup",
                items: [
                  "desired-capabilities-in-appium",
                  "list-of-supported-locales",
                  "app-testing-apis",
                  "appium-lambdatest-hooks",
                  "appium-install-uninstall-lambdatest-hooks",
                  "appium-uploading-retrieving-files",
                  "appium-firebase-app-upload",
                ],
              },
              {
                type: "category",
                collapsed: true,
                label: "Features",
                items: [
                  "camera-image-injection",
                  "reg-expression",
                  "appium-app-performance",
                  "appium-ios-app-settings",
                  "adb-commands-support",
                  "login-google-android",
                ],
              },
              {
                type: "category",
                collapsed: true,
                label: "Smart TV Automation",
                items: ["appium-appletv", "appium-firetv", "appium-rokutv"],
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
          {
            type: "category",
            collapsed: true,
            label: "Espresso Testing",
            items: [
              "getting-started-with-espresso-testing",
              "debug-espresso-tests",
              "speedup-espresso",
              "getting-started-with-flutter-dart-android-automation",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "XCUI Testing",
            items: [
              "getting-started-with-xcui-testing",
              "ios-ipa-files-xcui",
              {
                type: "category",
                collapsed: true,
                label: "Speedup XCUI",
                items: ["filters-xcui", "sharding-xcui"],
              },
              ,
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Test At Scale",
            items: [
              {
                type: "doc",
                label: "Overview",
                id: "tas-overview",
              },
              {
                type: "category",
                label: "Getting Started",
                items: [
                  "tas-getting-started-creating-an-account",
                  "tas-getting-started-integrating-your-first-repo",
                ],
              },
              {
                type: "category",
                label: "Configuration",
                items: [
                  "tas-configuring-tas-yml",
                  "tas-configurations-framework",
                  "tas-configurations-managing-secrets",
                ],
              },
              {
                type: "category",
                label: "Test at Scale - Self Hosted",
                items: [
                  "tas-self-hosted-overview",
                  "tas-self-hosted-installation",
                  "tas-self-hosted-configuration",
                ],
              },
              {
                type: "category",
                label: "How to Guides",
                items: [
                  "tas-how-to-guides-gh-token",
                  "tas-how-to-guides-gl-token",
                  "tas-how-to-guides-bb-token",
                ],
              },
              {
                type: "category",
                label: "Tutorials",
                items: ["tas-tutorial-cloud-demo", "tas-tutorial-self-hosted-demo"],
              },
              {
                type: "category",
                label: "Learn about TAS",
                items: [
                  "tas-learn-about-tas-how-tas-works",
                  "tas-learn-about-tas-features-and-languages",
                ],
              },
              {
                type: "doc",
                label: "Tier and Credits",
                id: "tas-tier-and-credits",
              },
              // {
              //   type: 'doc',
              //   label: 'Telemetry and Security',
              //   id: 'tas-telemetry-and-security'
              // },
              {
                type: "doc",
                label: "FAQs",
                id: "tas-faq-and-troubleshooting",
              },
            ],
          },
          
          {
            type: "category",
            collapsed: true,
            label: "Testing Locally Hosted Pages",
            items: [
              {
                type: "category",
                collapsed: true,
                label: "Testing Locally Hosted Pages",
                items: [
                  "testing-locally-hosted-pages",
                  "local-testing-macos",
                  "local-testing-windows",
                  "local-testing-linux",
                  "lambda-tunnel-modifiers",
                  "underpass-tunnel-application",
                  "advanced-tunnel-features",
                  "environment-variables-supported-by-lambda-tunnel",
                  "maven-tunnel-for-locally-hosted-web-applications",
                ],
              },
              "sharing-lambda-tunnel",
              "docker-tunnel",
              "troubleshooting-lambda-tunnel",
              "set-open-file-limit-while-using-proxy",
              "load-balancing-in-lambda-tunnel",
              "dedicated-proxy",
              "charles-proxy",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Test Management",
            items: [
              "issue-tracker",
              "test-logs",
              "lambda-exceptions",
              "filter-your-selenium-tests",
              "group-and-filter-your-test-builds-using-build-tags",
            ],
          },
        ]
      },
  
      // HyperExecute Testing
      {
        type: "category",
        collapsed: true,
        label: "HyperExecute Testing",
        link: {
          type: "doc",
          id: "getting-started",
        },
        items: [
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
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "HyperExecute YAML",
            link: {
              type: "doc",
              id: "deep-dive-into-hyperexecute-yaml",
            },
            items: [
              {
                type: "doc",
                label: "Hyperexecute Yaml Version 0.2",
                id: "hyperexecute-yaml-version0.2",
              },
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
                id: "he-aws",
              },
            ],
          },
          // {
          //   type: "doc",
          //   label: "Run your first Hyperexecute test",
          //   id: "hyperexecute-sample-test",
          // },
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
                    label: "Matrix Multiplexing Strategy" ,
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
                label: "Downloading Job Reports",
                link: {
                  type: "doc",
                  id: "hyperexecute-reports",
                },
                items: [
                  {
                    type: "doc",
                    label: "Download via UI or HyperExecute YAML ",
                    id: "hyperexecute-reports-download",
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
                label: "Prioritize Your Jobs",
                id: "hyperexecute-prioritize-tests",
              },
              {
                type: "doc",
                label: "Construct URLs for Your Artifacts",
                id: "hyperexecute-artifacts-url",
              },
              {
                type: "doc",
                label: "Inherit Your YAML Configurations",
                id: "hyperexecute-inherit-config",
              },
              {
                type: "doc",
                label: "Hyperexecute Projects",
                id: "hyperexecute-projects",
              },
              {
                type: "doc",
                label: "Jobs Archiving",
                id: "hyperexecute-jobs-archiving",
              },
              {
                type: "doc",
                label: "HyperExecute Workflows",
                id: "hyperexecute-workflows",
              },
              {
                type: "doc",
                id: "rca",
              },
            ],
          },
          {
            type: "doc",
            label: "HyperExecute vs Traditional Grids",
            id: "hyperexecute-vs-traditional-test-grids",
          },
          {
            type: "doc",
            label: "HyperExecute Environment Variable Setup",
            id: "hyperexecute-environment-variable-setup",
          },
          {
            type: "category",
            collapsed: true,
            label: "Integrations",
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
                  // {
                  //   type: "doc",
                  //   label: "Travis CI",
                  //   id: "travis-ci-with-hyperexecute",
                  // },
                ],
              },
              {
                type: "category",
                label: "Integration with Products",
                collapsed: true,
                link: {
                  type: "doc",
                  id: "integration-products",
                },
                items: [
                  {
                    type: "doc",
                    label: "Tosca",
                    id: "tosca-integration-hyperexecute",
                  },
                  {
                    type: "doc",
                    label: "Katalon",
                    id: "katalon-integration-with-hyperexecute",
                  },
                  {
                    type: "doc",
                    label: "Microsoft Excel",
                    id: "he-excel",
                  },
                ],
              },
              {
                type: "category",
                label: "Integration with LambdaTest Products",
                collapsed: true,
                link: {
                  type: "doc",
                  id: "integration-lt-products",
                },
                items: [
                  {
                    type: "doc",
                    label: "Smart UI Testing with HyperExecute",
                    id: "smart-ui-testing",
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
            label: "Languages and Frameworks",
            items: [
              "hyperexecute-supported-languages-and-frameworks",
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
                    ],
                  },
                  {
                    type: "category",
                    collapsed: true,
                    label: "C#",
                    items: [
                      "nunit-on-hyperexecute-grid",
                      "specflow-on-hyperexecute-grid",
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
                    type: "category",
                    collapsed: true,
                    label: "Java",
                    items: ["playwright-junit-on-hyperexecute"],
                  },
                  {
                    type: "category",
                    collapsed: true,
                    label: "C#",
                    items: ["playwright-dotnet-on-hyperexecute"],
                  },
                ],
              },
              {
                type: "category",
                collapsed: true,
                label: "Cypress",
                items: [
                  "cypressv9-on-hyperexecute",
                  "cypressv10-on-hyperexecute",
                ],
              },
            ],
          },
          {
            type: "category",
            label: "HyperExecute FAQs",
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
            label: "Knowledge Base",
            collapsed: true,
            link: {
              type: "doc",
              id: "hyperexecute-knowledge-base",
            },
            items: [
              {
                type: "doc",
                label: "concepts",
                id: "hyperexecute-concepts",
              },
              {
                type: "doc",
                label: "How to Get my Username & Access Key",
                id: "hyperexecute-how-to-get-my-username-and-access-key",
              },
              {
                type: "doc",
                label: "How to Save and Manage Secrets",
                id: "hyperexecute-how-to-save-and-manage-secrets",
              },
              {
                type: "doc",
                label: "How to Configure Tunnel",
                id: "hyperexecute-how-to-configure-tunnel",
              },
              {
                type: "doc",
                label: "How to Find Correct Concurrency",
                id: "hyperexecute-how-to-find-correct-concurrency",
              },
              {
                type: "doc",
                label: "How to configure sourcePayload",
                id: "hyperexecute-how-to-configure-sourcePayload",
              },
  
            ],
          },
        ],
      },
      
      // Visual Regression Testing
      {
        type: "category",
        collapsed: true,
        label: "Visual Regression Testing",
        items: [
          {
            type: "category",
            collapsed: true,
            label: "SmartUI - Visual Regression Testing",
            items: [
              "selenium-visual-regression",
              "smart-ui-cypress",
              "playwright-visual-regression",
              "puppeteer-visual-regression",
              "smartui-k6-setup",
              "smart-ui-storybook",
              "appium-visual-regression",
              "smartui-upload-api-v2",
              "smartui-pdf-comparison",
              "smartui-cli",
              "smart-ui-build-options",
              "test-settings-options",
              "html-dom-smartui-options",
              "smartui-git-branching-strategy",
              "smartui-project-settings",
              "smartui-github-app-integration",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "LT Browser",
            items: [
              "lt-browser-two",
              "lt-browser",
              "performance-report",
              "network-throttling-for-responsive-testing",
              "scroll-sync",
              "full-page-screenshots",
              "mouse-pointer-for-touch-mode",
              "error-reports",
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Visual User Interface Testing",
            items: [
              {
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
          },
        ]
      },
  
      // Integration
      {
        type: "category",
        collapsed: true,
        label: "Integrations",
        items: [
          {
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
            ],
          },
          {
            type: "category",
            collapsed: true,
            label: "Analytics Tools",
            items: ["datadog-integration", "sumo-logic-integration"],
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
              "microsoft-teams-integration",
              "rocketchat-integration-with-lambdatest",
              "integrating-mattermost-with-lambdatest",
              "flock-integration",
              "google-chat-integration",
              "webex-teams-integration",
              "zoho-cliq-integration",
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
                label: "GoCD Integration",
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
                label: "Katalon Integration",
  
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
              "shopify-integration",
              "vscode-extension",
              "xcode-plugin-lambdamax",
              "android-studio-plugin-lambdroid",
              "docker-tunnel-extension",
            ],
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
          "algoshack-integration",
        ],
      },
  
      // Account Management
      {
        type: "category",
        collapsed: true,
        label: "Account Management",
        items: [
          "manage-subscriptions",
          "service-accounts",
          "sub-organizations",
          "support-access",
          "team-management",
          "multi-factor-authentication",
          "delete-lambdatest-account",
          "group-management",
        ],
      },

      //Analytics  
      
      {
        type: "category",
        collapsed: true,
        label: "Analytics",
        link: {
          type: "doc",
          id: "analytics-overview",
        },
        items: [
          "analytics-create-dashboard",
          "analytics-dashboard-templates",
          {
            type: "category",
            collapsed: true,
            label: "Analytics Widgets",
            items: [
              "analytics-widgets-tests-overview-landing",
              "analytics-modules-error-insights",
              "analytics-modules-resource-utilization",
              "analytics-modules-hyperexecute",
            ],
          },
          "analytics-modules-test-intelligence-flaky-test-analytics",
          "analytics-modules-test-intelligence-command-logs-analytics",
          "analytics-dashboard-edit-layout",
          "analytics-dashboard-features",
          "analytics-faqs",
        ],
      },

      // Test Intelligence
      {
        type: "category",
        collapsed: true,
        label: "Test Intelligence",
        items: [
          {
            type: "doc",
            label: "Overview",
            id: "test-intelligence-overview",
          },
          {
            type: "doc",
            label: "Flaky Tests Detection",
            id: "test-intelligence-modules-flaky-test-detection"
          },
          {
            type: "doc",
            label: "Command Error Logs Analytics",
            id: "test-intelligence-command-error-logs-analytics"
          }
        ],
      },

      // Migration
      {
        type: "category",
        collapsed: true,
        label: "LambdaTest Migration Guide",
        items: [
          "browserstack-to-lambdatest-migration-guide",
          "saucelabs-to-lambdatest-migration-guide",
          "capability-map",
        ],
      },
  
      // LT Debug
      {
        type: "category",
        collapsed: true,
        label: "LT Debug",
        items: [
          "record-and-replay",
  
        ],
      },

      // Scim
      {
        type: "category",
        collapsed: true,
        label: "SCIM",
        items: [
          "scim",
            "scim/azure-ad",
            "scim/okta",
        ],
      },

      // Single
      {
        type: "category",
        collapsed: true,
        label: "Single Sign-On",
        items: [
          "single-sign-on",
          "lambdatest-sso-self-serve",
          "lambdatest-sso-manage-connection",
          "lambdatest-sso-okta-integration",
          "lambdatest-sso-onelogin-using-saml",
          "sso-azure-integration",
        ],
      },



    ],
  };
  