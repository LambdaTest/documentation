export const getProductType = (return_arr = false) => {
    let product_arr = [
        { value: 0, type: 'Kane-CLI', label: 'Kane CLI' },
        { value: 1, type: 'Kane-AI', label: 'KaneAI' },
        { value: 2, type: 'Agent-Assurance', label: 'Agent Assurance' },
        { value: 3, type: 'Agent Testing', label: 'Chat, Voice, and Video Agent Testing' },
        { value: 4, type: 'Test-Manager', label: 'AI Test Management' },
        { value: 5, type: 'AI-Test-Insights', label: 'AI Test Insights' },
        { value: 6, type: 'Accessibility-Testing', label: 'Accessibility Testing Agent' },
        { value: 7, type: 'Smart-Visual-Testing', label: 'SmartUI - Visual Testing' },
        // Agentic Cloud
        { value: 8, type: 'Hyperexecute', label: 'HyperExecute' },
        { value: 9, type: 'Real-Device-Cloud', label: 'Real Device Cloud' },
        { value: 10, type: 'Test-Automation-Platform', label: 'Test Automation Platform' },
        { value: 11, type: 'Mobile-App-Testing', label: 'Native App Automation Cloud' },
        { value: 12, type: 'Browser-Cloud', label: 'Browser Cloud for AI Agents' },
        { value: 13, type: 'Performance-Testing', label: 'Performance Testing' },
        { value: 14, type: 'Enterprise', label: 'Enterprise' },
        { value: 15, type: 'Professional-Services', label: 'Professional Services' },
        // Remaining old items
        { value: 16, type: 'Selenium-Testing', label: 'Selenium Testing' },
        { value: 17, type: 'Cypress-Testing', label: 'Cypress Testing' },
        { value: 18, type: 'On-Premise-Selenium-Grid', label: 'On-premise Selenium Grid' },
        { value: 19, type: 'Appium', label: 'Appium' },
        { value: 'Other', type: 'Other', label: 'Other', }
    ]
    if (return_arr) {
        return product_arr;
    } else {
        if (typeof window !== "undefined") {
            // Default to the first option (Kane CLI) so the preselected product is always in the list
            let obj = product_arr[0];
            let url_string = window.location.href;
            let url = new URL(url_string);
            let productType = url.searchParams.get("type");

            product_arr.filter((el) => {
                if (el.type === productType) {
                    obj = el;
                } else if (url_string.indexOf("zalenium-alternative") > -1) {
                    obj = { value: 8, type: 'Hyperexecute', label: 'HyperExecute', }
                }
                else if (url_string.indexOf("real-device-contact") > -1) {
                    obj = { value: 9, type: 'Real-Device-Cloud', label: 'Real Device Cloud', }
                }
                else if (url_string.indexOf("lp/hyperexecute") > -1 || url_string.indexOf("ui-path-alternative") > -1 || url_string.indexOf("hyperexecute") > -1) {
                    obj = { value: 8, type: 'Hyperexecute', label: 'HyperExecute', }
                }
                else if (url_string.indexOf("lp/contact-us-shlt") > -1) {
                    obj = { value: 14, type: 'Enterprise', label: 'Enterprise', }
                }
                else if (url_string.indexOf("lp/retail") > -1) {
                    obj = { value: 14, type: 'Enterprise', label: 'Enterprise', }
                }

            });
            return obj;
        }
    }

}

export const getCookie = (name) => {
    // if (typeof document !== "undefined") {
    const result = new RegExp(
        "(?:^|; )" + encodeURIComponent(name) + "=([^;]*)"
    ).exec(document.cookie);
    return result ? result[1] : null;
    // }
}


// export function parseJwt(token) {
//     // console.log("token",token)
//     var base64Url = token && token.split('.')[1];
//     var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//     var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
//         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//     }).join(''));

//     return JSON.parse(jsonPayload);
// }

export const injectRevenueHero = () => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://app.revenuehero.io/scheduler.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
        document.body.removeChild(script);
    };
}