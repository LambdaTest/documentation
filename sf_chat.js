function sf_messaging() {
    console.log("done")
    try {
        embeddedservice_bootstrap.settings.language = "en_US";
        var userToken = null;
        var loc = null;
        var userInfo = null;
        window.addEventListener("onEmbeddedMessagingReady", async (e) => {
            console.log("Received the onEmbeddedMessagingReady event…");
            loc = await getLocationDetails();
            userToken = getToken();
            
            if(userToken != null && userToken != undefined) {
                userInfo = await getUserDetails();
                if(userInfo != null && userInfo != undefined) {
                    embeddedservice_bootstrap.prechatAPI.setVisiblePrechatFields({
                        "_email": {
                          "value": userInfo.email,
                          "isEditableByEndUser": false
                        }
                    });
                }
            }

            if(loc != null) {
                embeddedservice_bootstrap.prechatAPI.setHiddenPrechatFields({
                    "country" : loc.country_name,
                    "continent" : loc.continent,
                    "country_code" : loc.iso_code,
                    "page_url" : window.location.href
                });
            }
        });

        embeddedservice_bootstrap.init(
            '00DF9000000cA7z',
            'LambdaTest_Chat_Support',
            'https://lambdatest.my.site.com/ESWSandBoxLambdaTest1732212450416',
            {
                scrt2URL: 'https://lambdatest.my.salesforce-scrt.com'
            }
        );
    } catch (err) {
      console.error('Error loading Embedded Messaging: ', err);
    }
  };

function fetchCookie(key) {
    const result = new RegExp(
        "(?:^|; )" + encodeURIComponent(key) + "=([^;]*)"
      ).exec(document.cookie);
    return result ? result[1] : null;
}

function getToken() {
    let tkn = null;
    if (window) {
        if(window.location.origin.indexOf("staging") >= 0 || window.location.origin.indexOf("localhost") >= 0 || window.location.origin.indexOf("stage-") >= 0) {
            tkn = fetchCookie("stageAccessToken");
        } else {
            tkn = fetchCookie("accessToken");
        }
    }
    return tkn
}

function  apiUrl() {
    if (window && (window.location.origin.indexOf("staging") >= 0 || window.location.origin.indexOf("localhost") >= 0 || window.location.origin.indexOf("stage-") >= 0)) {
      return 'https://stage-auth.lambdatestinternal.com/api/user';
    } else {
      return 'https://auth.lambdatest.com/api/user';
    }
};

async function getLocationDetails() {
    const url = "https://auth.lambdatest.com/api/country-details";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(error.message);
    }
}

async function getUserDetails() {
    let url = apiUrl();
    try {
        var token = getToken();
        const response = await fetch(url, {headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer "+token
        }});
        if (!response.ok) {
         throw new Error(`Response status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error.message);
     }
}

sf_messaging();