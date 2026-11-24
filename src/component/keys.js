// Static render (SSR) and logged-out readers get the placeholders that custom.js
// swaps for the real username and access key in the browser after login.
const USERNAME_PLACEHOLDER = 'YOUR_LAMBDATEST_USERNAME';
const ACCESS_KEY_PLACEHOLDER = 'YOUR_LAMBDATEST_ACCESS_KEY';

const readCredential = (field, placeholder) => {
    if(typeof window !== 'undefined' && window.lt_web_doc) {
        const value = window.lt_web_doc[field];
        if(typeof value === 'string' && value.trim() !== '') {
            return value;
        }
    }
    return placeholder;
}

export const YOUR_LAMBDATEST_USERNAME = () => readCredential('username', USERNAME_PLACEHOLDER);
export const YOUR_LAMBDATEST_ACCESS_KEY = () => readCredential('apiToken', ACCESS_KEY_PLACEHOLDER);