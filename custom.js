(function () {
  if (typeof window !== "undefined") {
    window.lt_web_doc = {};
    window.lt_web_doc.username = "YOUR_LAMBDATEST_USERNAME"
    window.lt_web_doc.apiToken = "YOUR_LAMBDATEST_ACCESS_KEY"
    const getCookie = (name) => {
      const result = new RegExp(
        "(?:^|; )" + encodeURIComponent(name) + "=([^;]*)"
      ).exec(document.cookie);
      return result ? result[1] : null;
    }

    const writeCookie = (name, value, days) => {
      if (!days) {
        days = 365 * 20;
      }
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      const expires = "; expires=" + date.toUTCString();
      document.cookie =
        name + "=" + value + expires + ";domain=.lambdatest.com; path=/";
    }

    const removeCookie = (name) => {
      writeCookie(name, "", -1);
    }

    const getLTUserID = () => {
      var user_id;
      user_id = getCookie('user_id');
      if (user_id !== '') {
        return user_id;
      }
      return '';
    }

    const handleUTMCookie = (splitBy = "&") => {
      try {
        const queryString = window.location.search;
        let str = queryString.substring(1);
        let queryarr = str.split(splitBy);
        let obj = {};
        for (let i = 0; i < queryarr.length; i++) {
          let str = queryarr[i];
          let strS = str.split("=");
          obj[strS[0]] = decodeURI(strS[1]);
          if (strS[0].substring(0, 4) == 'utm_') {
            writeCookie(`${strS[0]}`, strS[1], 365);
          }
          if (strS[0] == 'gclid') {
            writeCookie(`lt_gclid`, strS[1], 365);
          }
        }
      } catch (err) {
        console.log("Err", err)
      }
    }


    const isStage = () => {
      if (
        window.location.origin.indexOf("staging") >= 0 ||
        window.location.origin.indexOf("dev") >= 0
      ) {
        return true;
      } else {
        return false;
      }
    };

    const getUsernameToken = (from) => {

      var token = getCookie(isStage() ? 'stageAccessToken' : 'accessToken');
      var apiURl = isStage() ? "https://stage-accounts.lambdatestinternal.com/api/user" : "https://accounts.lambdatest.com/api/user";
      fetch(apiURl, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`
        }
      }).then(response => response.json())
        .then((result) => {
          console.log(`in fetch ${from}`)
          if (result.username) {
            document.getElementById("signbtn").href = "https://billing.lambdatest.com/billing/plans"
            document.getElementById("signbtn").innerHTML = "Upgrade"
            window.lt_web_doc.username = result.username;
            window.lt_web_doc.apiToken = result.apiToken;
            const lambda__doc__username = document.querySelectorAll(".lambdatest__username");
            if (lambda__doc__username && lambda__doc__username.length > 0) {
              for (var i = 0; i < lambda__doc__username.length; i++) {
                let username = lambda__doc__username[i];
                username.innerHTML = result.username
              }
            }
            const lambda__doc__accessKey = document.querySelectorAll(".lambdatest__accessKey");
            if (lambda__doc__accessKey && lambda__doc__accessKey.length > 0) {
              for (var i = 0; i < lambda__doc__accessKey.length; i++) {
                let accessKey = lambda__doc__accessKey[i];
                accessKey.innerHTML = result.apiToken
              }
            }
            const lambda__doc__codeblock = document.querySelectorAll(".lambdatest__codeblock code");
            if (lambda__doc__codeblock && lambda__doc__codeblock.length > 0) {
              for (var i = 0; i < lambda__doc__codeblock.length; i++) {
                let codeblock = lambda__doc__codeblock[i];
                codeblock.innerHTML = codeblock.innerHTML.replace("YOUR_LAMBDATEST_USERNAME", result.username)
                codeblock.innerHTML = codeblock.innerHTML.replace("YOUR_LAMBDATEST_ACCESS_KEY", result.apiToken)
              }
            }
          } else {
            window.lt_web_doc.username = "YOUR_LAMBDATEST_USERNAME"
            window.lt_web_doc.apiToken = "YOUR_LAMBDATEST_ACCESS_KEY"
          }

        }).catch(err => {
          console.log(err)
          window.lt_web_doc.username = "YOUR_LAMBDATEST_USERNAME"
          window.lt_web_doc.apiToken = "YOUR_LAMBDATEST_ACCESS_KEY"
        })
    }

    window.addEventListener('DOMContentLoaded', (event) => {
      getUsernameToken('dom');
    });

    function selectText(htmlelement) {
      var node = htmlelement;
      if (document.body.createTextRange) {
        const range = document.body.createTextRange();
        range.moveToElementText(node);
        range.select();
      } else if (window.getSelection) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
      } else {
        console.log("Could not select text in node: Unsupported browser.");
        return;
      }
      document.execCommand('copy')
    }
    function sendAmplitudeEvents(eventName, data) {
      if (window.amplitude) {
        window.amplitude.getInstance().logEvent(eventName, {
          ...data,
        });
      }
    }
    window.sendAmplitudeEvents = sendAmplitudeEvents;
    window.addEventListener('click', function (event) {
      if (event.target.matches(".menu__link")) {
        const menuLink = event.target.closest("a");
        var page_title =
          menuLink.getAttribute("title") ||
          menuLink.textContent?.trim() ||
          "";
        var page_url = menuLink.href || "";
        const urlObj = new URL(page_url, window.location.origin);
        var page_path =
          urlObj.pathname.split("/").filter(Boolean).pop() || "";
        let params = window.location.href.split("/");
        let pageName = params[params.length - 2];
        if (pageName.includes('hyperexecute')) {
          sendAmplitudeEvents('HYP: page changed - docs', {
            pageName,
          });
        } else {
          sendAmplitudeEvents("Page Viewed", {
            page_title: page_title,
            page_url: page_url,
            page_path: page_path,
          });
        }
      }

      // Search result click tracking
      if (event.target.matches(".DocSearch-Hit a")) {
        const searchHit = event.target.closest(".DocSearch-Hit a");
        var page_title =
          searchHit.getAttribute("title") ||
          searchHit.textContent?.trim() ||
          "";
        var page_url = searchHit.href || "";
        const urlObj = new URL(page_url, window.location.origin);
        var page_path =
          urlObj.pathname.split("/").filter(Boolean).pop() || "";

        sendAmplitudeEvents("Page Viewed", {
          page_title: page_title,
          page_url: page_url,
          page_path: page_path,
        });
      }
      if (event.target.matches(".clean-btn")) {
        let target = event.target || event.srcElement;
        let codeblock = target.closest('.lambdatest__codeblock');
        if (codeblock) {
          selectText(codeblock)
        }
      }
    });

    window.sendAnalytics = async (eventName) => {

      let URL = "https://backend.lambdatest.com/api/analytics/event";
      let payload = {
        event: eventName,
        properties: {
          source: window.location.href,
          userAgent: window.navigator.userAgent
        }
      };
      if (getLTUserID() && getLTUserID() !== '') {
        payload.userId = getLTUserID();
      }
      try {
        await fetch(URL, {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
          "mode": "no-cors",
        });
        if (eventName == 'Download LT Browser 2.0') {
          dataLayer.push({
            'event': 'LT Browser',
            'eventCategory': 'LT Browser',
            'eventAction': 'Download',
            'eventLabel': 'LT Browser downloads',
          });
          if (window.amplitude) {
            amplitude.getInstance().logEvent('LT Browser Download',
              {
                source: window.location.href,
                userAgent: window.navigator.userAgent
              });
          }
        }
        console.log("Analytics Request successful ");
        // console.log(user_id);
      } catch (err) {
        console.error("Analytics Request ", err);
      }

      handleUTMCookie();
      (function (history) {
        var pushState = history.pushState;
        history.pushState = function (state) {
          setTimeout(function () {
            if (typeof document !== "undefined") {
              var youtube = document.querySelectorAll(".youtube");
              for (var i = 0; i < youtube.length; i++) {
                var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/sddefault.jpg";
                var image = new Image();
                image.src = source;
                image.alt = "Youtube Thumbnail";
                image.addEventListener("load", function () {
                  youtube[i].appendChild(image);
                }(i));
                youtube[i].addEventListener("click", function () {
                  var iframe = document.createElement("iframe");
                  iframe.setAttribute("frameborder", "0");
                  iframe.setAttribute("allowfullscreen", "");
                  iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");
                  this.innerHTML = "";
                  this.appendChild(iframe);
                });
              };
            }
          }, 500);
          getUsernameToken('history');
          return pushState.apply(history, arguments);
        };
      })(window.history);

    }

    handleUTMCookie();
    (function (history) {
      var pushState = history.pushState;
      history.pushState = function (state) {
        setTimeout(function () {
          if (typeof document !== "undefined") {
            var youtube = document.querySelectorAll(".youtube");
            youtubeIframe()
          }
        }, 500);
        return pushState.apply(history, arguments);
      };
    })(window.history);
    const tagNames = ["a"];
    function addRoleAndTabIndexAttributes() {
      tagNames.forEach(tagName => {
        const elements = document.getElementsByTagName(tagName);
        for (let i = 0; i < elements.length; i++) {
          const element = elements[i];
          if (!element.hasAttribute('role')) {
            element.setAttribute('role', 'button');
          }
          if (!element.hasAttribute('tabindex')) {
            element.setAttribute('tabindex', '0');
          }
        }
      }
      )
    }

    window.addEventListener('load', addRoleAndTabIndexAttributes);

    const ImgTagNames = ["svg"];
    function addRoleAndTabIndexAttributesOnImg() {
      ImgTagNames.forEach(tagName => {
        const elements = document.getElementsByTagName(tagName);
        for (let i = 0; i < elements.length; i++) {
          const element = elements[i];
          if (!element?.parentElement?.className?.includes("clean-btn")) {
            if (!element.hasAttribute('role')) {
              element.setAttribute('role', 'presentation');
            }
            if (!element.hasAttribute('aria-hidden')) {
              element.setAttribute('aria-hidden', 'true');
            }
          } else {
            element.setAttribute('role', 'img');
            element.setAttribute('aria-label', 'Document Theme Switch mode button');
          }
        }
      }
      )
    }

    window.addEventListener('load', addRoleAndTabIndexAttributesOnImg);
  }
  //username ends

})();


function youtubeIframe() {
  var youtube = document.querySelectorAll(".youtube");
  for (var i = 0; i < youtube.length; i++) {
    var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/sddefault.jpg";
    var loading = youtube[i].getAttribute("data-loading-attribute")
    var image = new Image();
    image.src = source;
    image.alt = "Youtube Image";
    image.loading = loading ? loading : "";
    image.addEventListener("load", function () {
      youtube[i].appendChild(image);
    }(i));
    youtube[i].addEventListener("click", function () {
      var iframe = document.createElement("iframe");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");
      this.innerHTML = "";
      this.appendChild(iframe);
    });
  };
}

function overflowMainScreen(){
  const path = window.location.pathname;
  if (path === "/support/docs/") {
    const mainWrapper = document.querySelector('.main-wrapper');
    if (mainWrapper) {
      const cleanButton = mainWrapper.querySelector('button.clean-btn');
      if (cleanButton) {
        const nextDiv = cleanButton.nextElementSibling;
        if (nextDiv && nextDiv.tagName.toLowerCase() === 'div') {
          nextDiv.classList.add('hide_extra_space_main_div');
          console.log("Class added to next div");
        } 
      } 
    } 
  }
}
setTimeout(function () {
  if (typeof document !== "undefined") {
    youtubeIframe()
    overflowMainScreen()
  }
}, 500);


