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

    const getLoginUrlWithCookies = (baseUrl) => {
      const currentHost = window.location.hostname;
      const allowedDomains = ['testmuai.com', 'testmuaiinternal.com', 'testmuinternal.ai'];
      const isAllowedDomain = allowedDomains.some(domain =>
        currentHost === domain || currentHost.endsWith('.' + domain)
      );
      if (!isAllowedDomain) return baseUrl;

      const allowedCookies = ['utm', 'utm_base', 'lt_gclid', 'gclid', 'msclkid', 'fbclid', 'initial_referrer', 'exit_popup_dismissed', 'google_button_clicked', 'previous_url_testmu'];
      const cookies = document.cookie;
      if (!cookies || cookies.trim() === '') return baseUrl;

      try {
        const cookieArray = cookies.split(';').map(c => c.trim()).filter(Boolean).map(c => {
          const [name, ...valueParts] = c.split('=');
          return { key: name.trim(), value: valueParts.join('=') };
        }).filter(c => allowedCookies.includes(c.key));

        if (cookieArray.length === 0) return baseUrl;

        const encodedCookies = btoa(JSON.stringify(cookieArray));
        try {
          const urlObj = new URL(baseUrl.startsWith('http') ? baseUrl : baseUrl, window.location.origin);
          try {
            const amplitudeInstance = window.amplitude?.getInstance?.() || window.amplitude;
            let deviceId = amplitudeInstance?.options?.deviceId || amplitudeInstance?.getDeviceId?.();
            if (!deviceId) { amplitudeInstance?.regenerateDeviceId?.(); deviceId = amplitudeInstance?.options?.deviceId; }
            if (deviceId) urlObj.searchParams.set('deviceId', deviceId);
          } catch (e) { /* ignore */ }
          urlObj.searchParams.set('cookies', encodedCookies);
          return baseUrl.startsWith('http') ? urlObj.toString() : urlObj.pathname + urlObj.search;
        } catch (error) {
          const urlWithoutCookies = baseUrl.replace(/[&?]cookies=[^&]*/g, '');
          const separator = urlWithoutCookies.includes('?') ? '&' : '?';
          return urlWithoutCookies + separator + 'cookies=' + encodedCookies;
        }
      } catch (error) {
        return baseUrl;
      }
    };

    window.addEventListener('DOMContentLoaded', (event) => {
      writeCookie("previous_url_testmu", document.referrer || window.location.href);
      getUsernameToken('dom');

      // Attach CookieTrackingSignup handler to the navbar "Get Started" button
      const signBtn = document.getElementById('signbtn');
      if (signBtn) {
        signBtn.addEventListener('click', function (e) {
          if (typeof window.sendAnalytics === 'function') {
            window.sendAnalytics('signup_button_clicked', {
              'event': 'signup_button_clicked',
              'eventCategory': 'Click',
              'eventAction': 'header',
              'eventLabel': window.location.href,
            });
          }
          if (typeof window.logAmplitude === 'function') {
            window.logAmplitude("click CTA - web pages", { "cta_text": "Get Started Free", "cta_type": "page header", "page_category": "Documentation header" });
          }

          // Append cookies to the URL before navigation
          const anchorElement = e.currentTarget;
          const currentHref = anchorElement?.href || 'https://stage-accounts.lambdatestinternal.com/register';
          const urlWithCookies = getLoginUrlWithCookies(currentHref);
          if (anchorElement) {
            anchorElement.href = urlWithCookies;
          }
        });
      }
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
      // Sidebar navigation tracking
      const menuLink = event.target.closest(".menu__link");
      // Search result click tracking
      const searchHit = event.target.closest(".DocSearch-Hit a");

      // Determine which link was actually clicked
      const clickedLink = searchHit || menuLink;
      if (clickedLink && clickedLink.href) {
        const page_title =
          clickedLink.getAttribute("title") ||
          clickedLink.textContent?.trim() ||
          "";
        const page_url = clickedLink.href || "";
        const urlObj = new URL(page_url, window.location.origin);
        const page_path =
          urlObj.pathname.split("/").filter(Boolean).pop() || "";

        let params = window.location.href.split("/");
        let pageName = params[params.length - 2];

        if (pageName.includes("hyperexecute")) {
          sendAmplitudeEvents("HYP: page changed - docs", {
            pageName,
          });
        } else {
          sendAmplitudeEvents("Page Viewed", {
            page_title,
            page_url,
            page_path,
          });
        }
      }

      if (event.target.matches(".clean-btn")) {
        let target = event.target || event.srcElement;
        let codeblock = target.closest('.lambdatest__codeblock');
        if (codeblock) {
          selectText(codeblock)
        }
      }
    });

    window.sendAnalytics = async (eventName, extraProperties = {}) => {

      let URL = "https://backend.lambdatest.com/api/analytics/event";
      let payload = {
        event: eventName,
        properties: {
          source: window.location.href,
          userAgent: window.navigator.userAgent,
          ...extraProperties,
        }
      };
      if (getLTUserID() && getLTUserID() !== '') {
        payload.userId = getLTUserID();
      }
      try {
        await fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
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
        writeCookie("previous_url_testmu", window.location.href);
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
    image.classList.add("no-zoom");
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

/* AGENT_CALLOUT_START — Coding-agent callout, injected just below each doc's
   title on the client (no docusaurus.config.js change; works for both body-`#`
   and front-matter titles because it targets the rendered <header>). */
(function () {
  if (typeof window === "undefined") return;

  var SKILL_URL = "https://www.testmuai.com/support/docs/SKILL.md";
  var PROMPT = "Read " + SKILL_URL + " to set up TestMu AI (formerly LambdaTest) cloud testing.";

  // Only these docs get the callout. Keys are the doc slugs (no /support/docs
  // prefix, no trailing slash) so the lookup is independent of baseUrl.
  var ALLOWED_SLUGS = {
    "testmu-running-your-first-selenium-test": true,
    "getting-started-with-cypress-testing": true,
    "playwright-testing": true,
    "puppeteer-testing": true,
    "getting-started-with-appium-testing": true,
    "getting-started-with-espresso-testing": true,
    "getting-started-with-xcuitest": true,
    "testing-flutter-apps": true,
    "smartui-running-your-first-project": true,
    "accessibility-testing": true
  };

  function isAllowedPage() {
    var path = window.location.pathname.replace(/\/+$/, "");
    var slug = path.slice(path.lastIndexOf("/") + 1);
    return ALLOWED_SLUGS[slug] === true;
  }
  var INFO_SVG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';
  var COPY_SVG = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
  var CHECK_SVG = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';

  function copyText(text) {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text);
      } else {
        var ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
    } catch (e) { /* clipboard unavailable */ }
  }

  function buildCallout() {
    var aside = document.createElement("aside");
    aside.className = "agentSkillCallout";
    aside.setAttribute("aria-label", "Using a coding agent");
    aside.innerHTML =
      '<span class="agentSkillCallout__icon" aria-hidden="true">' + INFO_SVG + "</span>" +
      '<div class="agentSkillCallout__body">' +
        '<p class="agentSkillCallout__lead"><strong>Using Claude Code, Cursor, or another coding agent?</strong> ' +
        "Paste this into your prompt to run cross-browser and real-device tests, debug sessions, and wire up CI on the TestMu AI cloud:</p>" +
        '<div class="agentSkillCallout__snippet">' +
          '<code class="agentSkillCallout__code"></code>' +
          '<button type="button" class="agentSkillCallout__copy" aria-label="Copy prompt" title="Copy prompt">' + COPY_SVG + "</button>" +
        "</div>" +
        '<span class="agentSkillCallout__sr" role="status" aria-live="polite"></span>' +
      "</div>";
    aside.querySelector(".agentSkillCallout__code").textContent = PROMPT;
    var btn = aside.querySelector(".agentSkillCallout__copy");
    var sr = aside.querySelector(".agentSkillCallout__sr");
    btn.addEventListener("click", function () {
      copyText(PROMPT);
      btn.innerHTML = CHECK_SVG;
      sr.textContent = "Prompt copied to clipboard";
      setTimeout(function () {
        btn.innerHTML = COPY_SVG;
        sr.textContent = "";
      }, 2000);
    });
    return aside;
  }

  function injectAgentCallout() {
    if (typeof document === "undefined") return;
    var md = document.querySelector("article .theme-doc-markdown") || document.querySelector(".theme-doc-markdown");
    if (!md) return;                                     // not a doc page
    if (!isAllowedPage()) {                              // drop any callout left over from SPA nav
      var stale = md.querySelector(".agentSkillCallout");
      if (stale) stale.remove();
      return;
    }
    if (md.querySelector(".agentSkillCallout")) return;  // already injected
    var header = md.querySelector("header");
    var node = buildCallout();
    if (header) header.insertAdjacentElement("afterend", node);
    else md.insertBefore(node, md.firstElementChild);
  }

  // Exposed so the route hook (and tests) can call it; run once after hydration.
  window.__injectAgentCallout = injectAgentCallout;
  setTimeout(injectAgentCallout, 300);
})();
/* AGENT_CALLOUT_END */

// Re-inject after client-side (SPA) navigation between docs.
export function onRouteDidUpdate() {
  if (typeof window !== "undefined" && window.__injectAgentCallout) {
    setTimeout(window.__injectAgentCallout, 0);
  }
}


