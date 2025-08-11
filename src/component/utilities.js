export const getProductType = (return_arr = false) => {
    let product_arr = [
        { value: 0, type: 'Online-Browser-Testing', label: 'Online Browser Testing' },
        { value: 1, type: 'Selenium-Testing', label: 'Selenium Testing' },
        { value: 2, type: 'Cypress-Testing', label: 'Cypress Testing' },
        { value: 3, type: 'Hyperexecute', label: 'HyperExecute' },
        { value: 4, type: 'On-Premise-Selenium-Grid', label: 'On-premise Selenium Grid' },
        { value: 5, type: 'Mobile-App-Testing', label: 'Native App Testing' },
        { value: 6, type: 'Real-Device-Cloud', label: 'Real Device Cloud' },
        { value: 7, type: 'Smart-Visual-Testing', label: 'Visual Regression Cloud' },
        { value: 8, type: 'TAS', label: 'TAS - Test at Scale' },
        { value: 9, type: 'Appium', label: 'Appium' },
        { value: 10, type: 'Enterprise', label: 'Enterprise' },
        { value: 11, type: 'Test-Manager', label: 'Test Manager' },
        { value: 'Other', type: 'Other', label: 'Other', }
    ]
    if (return_arr) {
        return product_arr;
    } else {
        if (typeof window !== "undefined") {
            let obj = { value: '0', type: 'Online-Browser-Testing', label: 'Online browser testing', };
            let url_string = window.location.href;
            let url = new URL(url_string);
            let productType = url.searchParams.get("type");

            product_arr.filter((el) => {
                if (el.type === productType) {
                    obj = el;
                } else if (url_string.indexOf("zalenium-alternative") > -1) {
                    obj = { value: '3', type: 'Hyperexecute', label: 'Hyperexecute', }
                }
                else if (url_string.indexOf("real-device-contact") > -1) {
                    obj = { value: 6, type: 'Real-Device-Cloud', label: 'Real Device Cloud', }
                }
                else if (url_string.indexOf("lp/hyperexecute") > -1 || url_string.indexOf("ui-path-alternative") > -1 || url_string.indexOf("hyperexecute") > -1) {
                    obj = { value: '3', type: 'Hyperexecute', label: 'Hyperexecute', }
                }
                else if (url_string.indexOf("lp/contact-us-shlt") > -1) {
                    obj = { value: '10', type: 'Enterprise', label: 'Enterprise', }
                }
                else if (url_string.indexOf("lp/retail") > -1) {
                    obj = { value: '10', type: 'Enterprise', label: 'Enterprise', }
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