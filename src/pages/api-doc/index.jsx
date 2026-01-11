import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { useLocation } from 'react-router-dom';

function ApiDoc() {
    const location = useLocation();
    useEffect(() => {
        console.log(location.pathname)
        if (location.pathname === '/support/api-doc/') {
            const removeAlternateLinks = () => {
                const alternateLinks = document.querySelectorAll('link[rel="alternate"]');
                alternateLinks.forEach(link => link.parentNode.removeChild(link));
            };

            removeAlternateLinks();

            const observer = new MutationObserver((mutationsList) => {
                for (const mutation of mutationsList) {
                    if (mutation.type === 'childList') {
                        removeAlternateLinks();
                    }
                }
            });

            observer.observe(document.body, { childList: true, subtree: true });
            
            return () => observer.disconnect();
        }
    }, [location.pathname]);
    return (
        <Layout title="TestMu AI API Documentation"
            description="Manage and organize your test builds, test sessions, tunnel status and more with TestMu AI APIs for Selenium automation, App automation, Smart UI automation and Automated screenshots. ">
            <div className="lambda-api">
                <Tabs groupId="key" queryString>
                    <TabItem value="selenium-automation-api" label="Selenium Automation API">
                        <iframe className="embed-responsive-item"
                            src="https://swagger-api-support.lambdatest.com/index.html"></iframe>
                    </TabItem>
                    <TabItem value="automated-screenshot-api" label="Automated Screenshots API">
                        <iframe className="embed-responsive-item"
                            src="https://falcon-screenshot-public-api.lambdatest.com/"></iframe>
                    </TabItem>
                    <TabItem value="app-automation-api" label="App Automation API (Real Devices)">
                        <iframe className="embed-responsive-item"
                            src="https://app-automation-apis-docs.lambdatest.com"></iframe>
                    </TabItem>
                    <TabItem value="smart-ui" label="Smart UI">
                        <iframe className="embed-responsive-item"
                            src="https://swagger-api-support.lambdatest.com/smartui/index.html"></iframe>
                    </TabItem>
                    <TabItem value="cypress-automation" label="Cypress Automation">
                        <iframe className="embed-responsive-item"
                            src="https://swagger-api-support.lambdatest.com/cypress/index.html"></iframe>
                    </TabItem>
                    <TabItem value="user-management" label="User Management">
                        <iframe className="embed-responsive-item"
                            src="https://swagger-api-support.lambdatest.com/user_management/index.html"></iframe>
                    </TabItem>
                    <TabItem value="test-management" label="Test Manager">
                        <iframe className="embed-responsive-item"
                            src="https://swagger-api-support.lambdatest.com/test_management/index.html"></iframe>
                    </TabItem>
                    <TabItem value="hyperexecute" label="HyperExecute">
                        <iframe className="embed-responsive-item"
                            src="https://swagger-api-support.lambdatest.com/hyperexecute/index.html"></iframe>
                    </TabItem>
                    <TabItem value="accessibility-testing" label="Accessibility Testing">
                        <iframe className="embed-responsive-item"
                            src="https://swagger-api-support.lambdatest.com/accessibility/index.html"></iframe>
                    </TabItem>
                    <TabItem value="auditlogs" label="Audit Logs">
                        <iframe className="embed-responsive-item"
                            src="https://swagger-api-support.lambdatest.com/audit-logs/index.html"></iframe>
                    </TabItem>
                    <TabItem value="performance-testing" label="Performance Testing">
                        <iframe className="embed-responsive-item"
                            src="https://swagger-api-support.lambdatest.com/performance_testing/index.html"></iframe>
                    </TabItem>
                </Tabs>
            </div>
        </Layout>
    );
}

export default ApiDoc;