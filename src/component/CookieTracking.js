function getLoginUrlWithCookies(baseUrl = `https://stage-accounts.lambdatestinternal.com/login`) {
  if (typeof document === 'undefined' || typeof window === 'undefined') {
    return baseUrl;
  }

  const currentHost = window.location.hostname;
  const allowedDomains = ['testmuai.com', 'testmuaiinternal.com', 'testmuinternal.ai'];

  // Check if current domain is one of the allowed domains
  const isAllowedDomain = allowedDomains.some(domain =>
    currentHost === domain || currentHost.endsWith(`.${domain}`)
  );

  if (!isAllowedDomain) {
    return baseUrl;
  }

  // Only collect these specific cookies
  const allowedCookies = ['utm', 'utm_base', 'lt_gclid', 'gclid', 'initial_referrer', 'exit_popup_dismissed', 'google_button_clicked'];

  // Collect all cookies
  const cookies = document.cookie;

  if (!cookies || cookies.trim() === '') {
    return baseUrl;
  }

  try {
    // Parse cookies into array of {key, value} objects, filtering only allowed cookies
    const cookieArray = cookies
      .split(';')
      .map(cookie => cookie.trim())
      .filter(cookie => cookie)
      .map(cookie => {
        const [name, ...valueParts] = cookie.split('=');
        const value = valueParts.join('=');
        return { key: name.trim(), value: value };
      })
      .filter(cookie => allowedCookies.includes(cookie.key));

    // If no allowed cookies found, return base URL
    if (cookieArray.length === 0) {
      return baseUrl;
    }

    // Convert to JSON and base64 encode
    const encodedCookies = btoa(JSON.stringify(cookieArray));

    // Handle URL with existing query parameters (including cookies param)
    // Use URLSearchParams to properly handle and replace cookies parameter
    try {
      // Parse URL - handle both absolute and relative URLs
      let urlObj;
      if (baseUrl.startsWith('http://') || baseUrl.startsWith('https://')) {
        urlObj = new URL(baseUrl);
      } else {
        // For relative URLs, use current origin
        urlObj = new URL(baseUrl, window.location.origin);
      }

      // Add Amplitude deviceId for user's cross-domain tracking
      try {
        const amplitudeInstance = window.amplitude?.getInstance?.() || window.amplitude;
        let deviceId = amplitudeInstance?.options?.deviceId || amplitudeInstance?.getDeviceId?.();
        if (!deviceId) {
          amplitudeInstance?.regenerateDeviceId?.();
          deviceId = amplitudeInstance?.options?.deviceId;
        }
        if (deviceId) {
          urlObj.searchParams.set('deviceId', deviceId);
        }
      } catch (e) {
        console.error('Error adding deviceId to URL:', e);
      }
      
      // Set cookies parameter (will replace if already exists)
      urlObj.searchParams.set('cookies', encodedCookies);
      
      // Return the URL string (for relative URLs, return pathname + search)
      if (baseUrl.startsWith('http://') || baseUrl.startsWith('https://')) {
        return urlObj.toString();
      } else {
        return urlObj.pathname + urlObj.search;
      }
    } catch (error) {
      // Fallback to original logic if URL parsing fails
      const separator = baseUrl.includes('?') ? '&' : '?';
      // Remove existing cookies param if present
      const urlWithoutCookies = baseUrl.replace(/[&?]cookies=[^&]*/g, '');
      const finalSeparator = urlWithoutCookies.includes('?') ? '&' : '?';
      return `${urlWithoutCookies}${finalSeparator}cookies=${encodedCookies}`;
    }
  } catch (error) {
    console.error('Error parsing cookies:', error);
    return baseUrl;
  }
}

export const writeLocalCookie = (name, value, days) => {
  if (!days) {
    days = 1;
  }
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "; expires=" + date.toUTCString();
  document.cookie = name + "=" + value + expires + "; path=/";
}

export const setInitialReferrer = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  const currentHost = window.location.hostname;
  const allowedDomains = ['testmuai.com', 'lambdatest.com'];

  const isAllowedDomain = allowedDomains.some(domain =>
    currentHost === domain || currentHost.endsWith(`.${domain}`)
  );

  if (!isAllowedDomain) return;

  writeLocalCookie('initial_referrer', window.location.href, 30);
};
export default function CookieTrackingLogin(e) {
    if (typeof window.sendAnalytics === 'function') {
      window.sendAnalytics('all pages _login', {
        'event': 'all pages _login',
        'eventAction': 'success',
        'eventLabel': window.location.href,
      });
    }
    if (typeof window.logAmplitude === 'function') {
      window.logAmplitude("click CTA - web pages", { "cta_text": "Login", "cta_type": "page header", "page_category": "Website header" });
    }

    // Get the current href from the anchor element (which may already have GA parameters)
    const anchorElement = e.currentTarget;
    const currentHref = anchorElement?.href || `https://stage-accounts.lambdatestinternal.com/login`;

    // Append cookies to the current URL (preserving any existing query params like GA)
    const urlWithCookies = getLoginUrlWithCookies(currentHref);

    // Update the href before navigation
    if (anchorElement) {
      anchorElement.href = urlWithCookies;
    }
  };

  export const CookieTrackingSignup = (e) => {
    if (typeof window.sendAnalytics === 'function') {
      window.sendAnalytics('signup_button_clicked', {
        'event': 'signup_button_clicked',
        'eventCategory': 'Click',
        'eventAction': 'header',
        'eventLabel': window.location.href,
      });
    }
    if (typeof window.logAmplitude === 'function') {
      window.logAmplitude("click CTA - web pages", { "cta_text": "Get Started Free", "cta_type": "page header", "page_category": "Website header" });
    }

    // Get the current href from the anchor element (which may already have GA parameters)
    const anchorElement = e.currentTarget;
    const currentHref = anchorElement?.href || `https://stage-accounts.lambdatestinternal.com/register`;

    // Append cookies to the current URL (preserving any existing query params like GA)
    const urlWithCookies = getLoginUrlWithCookies(currentHref);

    // Update the href before navigation
    if (anchorElement) {
      anchorElement.href = urlWithCookies;
    }
  };


setTimeout(() => {
  if (typeof document !== "undefined") {
    setInitialReferrer()
  }
}, 500);


