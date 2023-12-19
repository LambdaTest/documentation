export const YOUR_LAMBDATEST_USERNAME = () => {
    if(typeof window !== 'undefined') {
        return window.lt_web_doc.username;
    }
}
export const YOUR_LAMBDATEST_ACCESS_KEY = () => {
    if(typeof window !== 'undefined') {
        return window.lt_web_doc.apiToken;
    }
}