/**
 * Custom JavaScript for Mintlify Documentation
 * LambdaTest/TestMu - Optimized Version
 */
(function () {
  if (typeof window === "undefined") return;

  // Global namespace
  window.lt_web_doc = { username: "YOUR_LAMBDATEST_USERNAME", apiToken: "YOUR_LAMBDATEST_ACCESS_KEY" };

  // ============================================
  // Utilities
  // ============================================
  const getCookie = (name) => {
    const result = new RegExp("(?:^|; )" + encodeURIComponent(name) + "=([^;]*)").exec(document.cookie);
    return result ? result[1] : null;
  };

  const writeCookie = (name, value, days = 7300) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 86400000);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()};domain=.lambdatest.com; path=/`;
  };

  const isStage = () => /staging|dev/.test(window.location.origin);

  // ============================================
  // External Scripts (Chat Widget)
  // ============================================
  const loadExternalScripts = () => {
    const loadScript = (src, onLoad) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = false;
      if (onLoad) script.onload = onLoad;
      document.head.appendChild(script);
    };

    loadScript('https://assets.testmuai.com/resources/js/salesforce_chatwidget.js', () => {
      loadScript('https://assets.testmuai.com/resources/js/sf_chat.js', () => {
        if (typeof sf_messaging === 'function') sf_messaging();
      });
    });
  };

  // ============================================
  // UTM Cookie Handler
  // ============================================
  const handleUTMCookie = () => {
    try {
      const params = new URLSearchParams(window.location.search);
      params.forEach((value, key) => {
        if (key.startsWith('utm_')) writeCookie(key, value, 365);
        if (key === 'gclid') writeCookie('lt_gclid', value, 365);
      });
    } catch (e) {}
  };

  // ============================================
  // User Credentials
  // ============================================
  const getUsernameToken = () => {
    const token = getCookie(isStage() ? 'stageAccessToken' : 'accessToken');
    const apiURL = isStage() ? "https://stage-accounts.lambdatestinternal.com/api/user" : "https://accounts.lambdatest.com/api/user";

    fetch(apiURL, {
      headers: { "Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${token}` }
    })
    .then(r => r.json())
    .then(result => {
      if (result.username) {
        window.lt_web_doc.username = result.username;
        window.lt_web_doc.apiToken = result.apiToken;
        updateNavbarCTA(true);
        replaceCredentials(result.username, result.apiToken);
      }
    })
    .catch(() => {});
  };

  const replaceCredentials = (username, apiToken) => {
    document.querySelectorAll(".lambdatest__username").forEach(el => el.innerHTML = username);
    document.querySelectorAll(".lambdatest__accessKey").forEach(el => el.innerHTML = apiToken);
    document.querySelectorAll('pre code, [data-language] code, .lambdatest__codeblock code').forEach(el => {
      if (el.textContent.includes('YOUR_LAMBDATEST_USERNAME')) {
        el.innerHTML = el.innerHTML.replace(/YOUR_LAMBDATEST_USERNAME/g, username).replace(/YOUR_LAMBDATEST_ACCESS_KEY/g, apiToken);
      }
    });
  };

  // ============================================
  // Navbar CTA
  // ============================================
  const updateNavbarCTA = (isLoggedIn) => {
    if (!isLoggedIn) return;
    document.querySelectorAll('nav a[href*="register"], header a[href*="register"]').forEach(btn => {
      btn.href = "https://billing.lambdatest.com/billing/plans";
      btn.textContent = "Upgrade";
    });
  };

  const getLoginUrlWithCookies = (baseUrl) => {
    const allowedDomains = ['testmuai.com', 'testmuaiinternal.com', 'testmuinternal.ai', 'lambdatest.com'];
    if (!allowedDomains.some(d => window.location.hostname.endsWith(d))) return baseUrl;

    const allowedCookies = ['utm', 'utm_base', 'lt_gclid', 'gclid', 'initial_referrer'];
    const cookieArray = document.cookie.split(';').map(c => c.trim()).filter(Boolean).map(c => {
      const [name, ...v] = c.split('=');
      return { key: name.trim(), value: v.join('=') };
    }).filter(c => allowedCookies.includes(c.key));

    if (!cookieArray.length) return baseUrl;

    try {
      const url = new URL(baseUrl, window.location.origin);
      url.searchParams.set('cookies', btoa(JSON.stringify(cookieArray)));
      return url.toString();
    } catch (e) {
      return baseUrl;
    }
  };

  // ============================================
  // Analytics
  // ============================================
  const sendAmplitudeEvents = (eventName, data) => {
    if (window.amplitude) window.amplitude.getInstance().logEvent(eventName, data);
  };
  window.sendAmplitudeEvents = sendAmplitudeEvents;

  window.sendAnalytics = async (eventName) => {
    const payload = { event: eventName, properties: { source: window.location.href, userAgent: navigator.userAgent } };
    const userId = getCookie('user_id');
    if (userId) payload.userId = userId;

    try {
      await fetch("https://backend.lambdatest.com/api/analytics/event", {
        method: "POST", body: JSON.stringify(payload), headers: { "Content-Type": "application/json" }, mode: "no-cors"
      });
    } catch (e) {}
  };

  // ============================================
  // YouTube Lazy Loading
  // ============================================
  const initYouTubeIframes = () => {
    document.querySelectorAll(".youtube, .blog__youtube").forEach(el => {
      const embedId = el.dataset.embed;
      if (!embedId || el.querySelector('img')) return;

      const img = new Image();
      img.src = `https://img.youtube.com/vi/${embedId}/sddefault.jpg`;
      img.alt = "YouTube Video Thumbnail";
      img.onload = () => el.appendChild(img);

      el.onclick = function() {
        const iframe = document.createElement("iframe");
        iframe.frameBorder = "0";
        iframe.allowFullscreen = true;
        iframe.src = `https://www.youtube.com/embed/${this.dataset.embed}?rel=0&showinfo=0&autoplay=1`;
        this.innerHTML = "";
        this.appendChild(iframe);
      };
    });
  };

  // ============================================
  // Navigation Tracking
  // ============================================
  const setupNavbarTracking = () => {
    document.querySelectorAll('nav a[href*="register"], header a[href*="register"]').forEach(btn => {
      if (btn.hasAttribute('data-tracked')) return;
      btn.setAttribute('data-tracked', 'true');
      btn.addEventListener('click', function() {
        sendAmplitudeEvents("click CTA - web pages", { cta_text: "Get Started Free", cta_type: "page header" });
        this.href = getLoginUrlWithCookies(this.href);
      });
    });
  };

  // ============================================
  // SPA Navigation Handler
  // ============================================
  const setupHistoryListener = () => {
    const original = history.pushState;
    history.pushState = function() {
      const result = original.apply(this, arguments);
      setTimeout(reinitialize, 500);
      return result;
    };
    window.addEventListener('popstate', () => setTimeout(reinitialize, 500));
  };

  const reinitialize = () => {
    initYouTubeIframes();
    getUsernameToken();
    setupNavbarTracking();
    injectSidebarBottomLinks();
  };

  // ============================================
  // 404 Detection
  // ============================================
  const is404Page = () => {
    // Check for common 404 indicators
    const pageText = document.body?.innerText?.toLowerCase() || '';
    const title = document.title?.toLowerCase() || '';

    // Check if page contains 404 indicators
    if (title.includes('404') || title.includes('not found')) return true;

    // Check for Mintlify's 404 page elements
    const h1 = document.querySelector('h1');
    if (h1 && (h1.textContent.includes('404') || h1.textContent.toLowerCase().includes('not found'))) return true;

    // Check for specific 404 class patterns
    if (document.querySelector('[class*="not-found"], [class*="error-page"], [class*="404"]')) return true;

    // Check if main content area is missing or empty (indicating 404)
    const mainContent = document.querySelector('article, [class*="prose"], [class*="markdown"]');
    if (!mainContent || mainContent.children.length === 0) return true;

    return false;
  };

  // ============================================
  // Bottom CTA Banner
  // ============================================
  const injectBottomCTA = () => {
    // Don't inject on home page, docs index, 404 pages, or if already exists
    if (window.location.pathname === '/' || window.location.pathname === '/support/docs/' || document.querySelector('.lt-bottom-cta')) return;

    // Check if this is a 404 page - don't inject CTA on 404 pages
    if (is404Page()) return;

    const main = document.querySelector('main, article, [class*="content"]');
    if (!main) return;

    const html = `
      <div class="lt-bottom-cta">
        <div class="lt-cta-content">
          <h2>Test across 3000+ combinations of browsers, real devices & OS.</h2>
          <a href="https://www.testmuai.com/demo/" target="_blank" class="lt-cta-btn">Book a Demo</a>
        </div>
        <div class="lt-cta-image">
          <img src="https://assets.testmu.ai/resources/uploads/2024/05/DocBottomImg.png" alt="LambdaTest Platform" loading="lazy" />
        </div>
      </div>
      <div class="lt-help-support">
        <h3>Help and Support</h3>
        <div class="lt-help-support-content">
          <div class="lt-help-column">
            <p class="lt-help-column-title">Do you find this helpful?</p>
            <div class="lt-feedback-buttons">
              <button class="lt-feedback-btn" id="lt-thumbs-up" title="Yes" aria-label="thumbs up">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
              </button>
              <button class="lt-feedback-btn" id="lt-thumbs-down" title="No" aria-label="thumbs down">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"/></svg>
              </button>
            </div>
          </div>
          <div class="lt-help-column">
            <p class="lt-help-column-title">Still need help?</p>
            <div class="lt-help-links">
              <button class="lt-help-link" onclick="window.openLTChatWidget?window.openLTChatWidget():window.embeddedservice_bootstrap?embeddedservice_bootstrap.utilAPI.launchChat():alert('Chat loading...')">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>
                Chat with Us
              </button>
              <a href="https://community.lambdatest.com/" target="_blank" class="lt-help-link">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                Ask the Community
              </a>
            </div>
          </div>
        </div>
      </div>`;

    // Find the Previous/Next navigation to insert before it
    // Be specific to avoid matching headings like "### Next Steps"
    const navigation = main.querySelector('[class*="pagination"], [class*="PrevNext"], [class*="nav-footer"], [class*="page-nav"]')?.closest('div[class*="flex"], nav, div[class*="grid"]');

    // Only look for navigation links that are direct children of nav containers (not heading anchors)
    const prevNextLinks = Array.from(main.querySelectorAll('nav a, [class*="pagination"] a, [class*="footer"] a')).filter(a => {
      const text = a.textContent.trim();
      // Match exact "Previous" or "Next" or icons, not partial matches in headings
      return (text === 'Previous' || text === 'Next' || text.match(/^(←|→|<|>)\s*(Previous|Next)?\s*$/i));
    });
    const navContainer = prevNextLinks.length > 0 ? prevNextLinks[0].closest('div[class*="flex"], div[class*="grid"], nav') : null;

    const target = navigation || navContainer || main.querySelector('footer') || main.lastElementChild;
    if (target) target.insertAdjacentHTML('beforebegin', html);
    else main.insertAdjacentHTML('beforeend', html);

    setupFeedbackButtons();
  };

  // ============================================
  // Feedback Handlers
  // ============================================
  const setupFeedbackButtons = () => {
    const thumbsUp = document.getElementById('lt-thumbs-up');
    const thumbsDown = document.getElementById('lt-thumbs-down');
    const container = document.querySelector('.lt-feedback-buttons');

    if (thumbsUp && !thumbsUp.hasAttribute('data-bound')) {
      thumbsUp.setAttribute('data-bound', '1');
      thumbsUp.onclick = () => {
        fetch("https://test-backend.lambdatest.com/api/website_feed/thumbs_up", {
          method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ url: location.href })
        }).catch(() => {});
        sendAmplitudeEvents("docs_feedback", { type: "thumbs_up", page_url: location.href });
        if (container) container.innerHTML = '<p style="color:#059669;font-weight:500;margin:0">Thanks for your feedback!</p>';
      };
    }

    if (thumbsDown && !thumbsDown.hasAttribute('data-bound')) {
      thumbsDown.setAttribute('data-bound', '1');
      thumbsDown.onclick = () => {
        sendAmplitudeEvents("docs_feedback", { type: "thumbs_down_clicked", page_url: location.href });
        showFeedbackForm();
      };
    }
  };

  const showFeedbackForm = () => {
    if (document.querySelector('.lt-feedback-form')) return;
    const helpSupport = document.querySelector('.lt-help-support');
    if (!helpSupport) return;

    const options = [
      "The information that I need is partially explained",
      "This page does not contain what I am looking for.",
      "This content & code samples are not accurate and outdated",
      "The information that I need is not easy to understand"
    ];

    const html = `
      <div class="lt-feedback-form">
        <p style="font-weight:600;font-size:16px;color:#1a1a2e;margin:0 0 20px">We're sorry to hear that. Please share your feedback with us.</p>
        <form id="lt-negative-feedback-form">
          <div style="display:flex;flex-direction:column;gap:15px;margin-bottom:20px">
            ${options.map(o => `<label><input type="radio" name="feedback_option" value="${o}"> ${o}</label>`).join('')}
            <label><input type="radio" name="feedback_option" value="other"> Other (please tell us more below)</label>
          </div>
          <div id="lt-other-textarea" style="display:none;margin-bottom:20px">
            <textarea id="lt-feedback-message" placeholder="What were you looking for?"></textarea>
          </div>
          <p id="lt-feedback-error" style="color:#dc2626;font-size:14px;margin:0 0 15px;display:none"></p>
          <button type="submit">Submit</button>
        </form>
      </div>`;

    helpSupport.insertAdjacentHTML('beforeend', html);

    document.querySelectorAll('input[name="feedback_option"]').forEach(r => {
      r.onchange = function() { document.getElementById('lt-other-textarea').style.display = this.value === 'other' ? 'block' : 'none'; };
    });

    document.getElementById('lt-negative-feedback-form').onsubmit = function(e) {
      e.preventDefault();
      const selected = document.querySelector('input[name="feedback_option"]:checked');
      const errorEl = document.getElementById('lt-feedback-error');

      if (!selected) { errorEl.textContent = 'Please select an option.'; errorEl.style.display = 'block'; return; }

      let feedback = selected.value;
      if (feedback === 'other') {
        feedback = document.getElementById('lt-feedback-message').value.trim();
        if (!feedback) { errorEl.textContent = 'Please write your feedback.'; errorEl.style.display = 'block'; return; }
      }

      fetch("https://test-backend.lambdatest.com/api/website_feed/thumbs_down", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ feedback, url: location.href, utm: getCookie("utm") || "" })
      }).catch(() => {});

      sendAmplitudeEvents("docs_feedback_submitted", { type: "thumbs_down", feedback, page_url: location.href });
      document.querySelector('.lt-feedback-form').innerHTML = '<p style="color:#059669;font-weight:500;font-size:16px;margin:0;padding:20px 0">Thanks for your feedback!</p>';
    };
  };

  // ============================================
  // Cleanup CTA on 404
  // ============================================
  const cleanupOn404 = () => {
    if (is404Page()) {
      const existingCTA = document.querySelector('.lt-bottom-cta');
      const existingHelp = document.querySelector('.lt-help-support');
      if (existingCTA) existingCTA.remove();
      if (existingHelp) existingHelp.remove();
    }
  };

  // ============================================
  // Sidebar Bottom Links (Book a Demo, Changelog)
  // ============================================
  const injectSidebarBottomLinks = () => {
    if (document.querySelector('.lt-sidebar-bottom')) return;
    const sidebar = document.getElementById('sidebar') || document.getElementById('sidebar-content') || document.querySelector('aside nav') || document.querySelector('[class*="sidebar"]');
    if (!sidebar) return;

    const container = document.createElement('div');
    container.className = 'lt-sidebar-bottom';
    container.innerHTML = `
      <ul class="list-none">
        <li class="list-none">
          <a href="https://www.testmuai.com/demo/" target="_blank" rel="noreferrer" class="link nav-anchor pl-4 group flex items-center lg:text-sm lg:leading-6 mb-3 gap-3.5 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
            <div class="h-4 w-4 secondary-opacity group-hover:fill-primary-dark group-hover:bg-gray-900 dark:group-hover:bg-gray-300 bg-gray-400 dark:bg-gray-500" style="-webkit-mask-image:url(https://d3gk2c5xim1je2.cloudfront.net/v7.1.0/solid/calendar-check.svg);-webkit-mask-repeat:no-repeat;-webkit-mask-position:center;mask-image:url(https://d3gk2c5xim1je2.cloudfront.net/v7.1.0/solid/calendar-check.svg);mask-repeat:no-repeat;mask-position:center"></div>
            <span>Book a Demo</span>
          </a>
        </li>
        <li class="list-none">
          <a href="https://changelog.testmuai.com/" target="_blank" rel="noreferrer" class="link nav-anchor pl-4 group flex items-center lg:text-sm lg:leading-6 mb-3 gap-3.5 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
            <div class="h-4 w-4 secondary-opacity group-hover:fill-primary-dark group-hover:bg-gray-900 dark:group-hover:bg-gray-300 bg-gray-400 dark:bg-gray-500" style="-webkit-mask-image:url(https://d3gk2c5xim1je2.cloudfront.net/v7.1.0/solid/clock-rotate-left.svg);-webkit-mask-repeat:no-repeat;-webkit-mask-position:center;mask-image:url(https://d3gk2c5xim1je2.cloudfront.net/v7.1.0/solid/clock-rotate-left.svg);mask-repeat:no-repeat;mask-position:center"></div>
            <span>Changelog</span>
          </a>
        </li>
      </ul>`;
    sidebar.appendChild(container);
  };

  // ============================================
  // Initialize
  // ============================================
  const init = () => {
    handleUTMCookie();
    getUsernameToken();
    initYouTubeIframes();
    setupNavbarTracking();
    setupHistoryListener();
    injectSidebarBottomLinks();
  };

  // Load chat scripts
  if (!window._ltScriptsLoaded) {
    window._ltScriptsLoaded = true;
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', loadExternalScripts);
    else loadExternalScripts();
  }

  // Run init
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  // Handle Mintlify's dynamic rendering
  setTimeout(() => {
    init();
  }, 1000);
})();
