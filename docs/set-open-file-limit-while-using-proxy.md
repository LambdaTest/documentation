---
id: set-open-file-limit-while-using-proxy
title: Setting The Open File Limit While Using TestMu AI Tunnel
hide_title: true
sidebar_label: Setting The Open File Limit While Using TestMu AI Tunnel
description: This document will help you modify your open file limit temporarily or permanently while using a proxy with TestMu AI tunnel for seamless cross browser testing.
keywords:
  - proxy settings
  - set open file limit
  - open file limit testmu ai
  - testmu ai proxy settings
  - testmu ai proxy profile
url: https://www.testmuai.com/support/docs/how-to-set-the-open-file-limit-while-using-tunnel/
site_name: TestMu AI
slug: how-to-set-the-open-file-limit-while-using-tunnel/
canonical: https://www.testmuai.com/support/docs/how-to-set-the-open-file-limit-while-using-tunnel/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Set Open File Limit",
          "item": `${BRAND_URL}/support/docs/how-to-set-the-open-file-limit-while-using-tunnel/`
        }]
      })
    }}
></script>

# How To Set The Open File Limit While Using <BrandName /> Tunnel?

***
If you are using a tunnel service with <BrandName /> for cross browser testing then you may get the following warning.

>
*File descriptor limit is too low! Increase your limit to at least 2000.*

This warning is sent across to help you avoid a lack of available file handles. If this warning is ignored for a long time then you might have issues connecting your tunnel with <BrandName />. This would also be reflected in the <BrandName /> logs if you fail to connect your tunnel with <BrandName />. The logs would be reflecting the below error message.

>
*accept tcp 127.0.0.1:9090: accept: too many open files.*

We recommend that you expand the open file limit to 2000 for a seamless browser testing experience.

## How To Expand The Open File Limit Using macOS/Linux?

* * *

You can increase the open file limit either temporarily or permanently for your profile. In case of temporary modification, your profile settings will be restored once the terminal is shut down.

### Increasing The Open File Limit Temporarily

* * *

**Step 1**: Gain Sudo rights and run the below command to set the open file limit to 2000.

`ulimit -SHn 2000`

<img loading="lazy" src={require('../assets/images/uploads/image1.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

> Note: If your system is capable of handling a higher limit then please feel free to set the limit above 2000. However, 2000 is the minimum recommendation.

**Step 2**: Next, we need to verify if the setting are modified by running the below command.

`ulimit -n`

**Step 3**: Restart the tunnel and you’re ready to go!

### Increasing The Open File Limit Permanently

* * *

**Step 1**: You would have to edit the profile settings and set the file limit in the your `.profile` or `.bashrc` file. Add the below command in your `.profile` or `.bashrc` file.

`ulimit -SHn 2000`

**Step 2**: Execute `source ~/.bash_profile` or `.bashrc` or the profile you're using.

**Step 3**: Run the command `ulimit -n` to verify if the setting are modified.

**Step 4**: Restart the tunnel and you're ready to go!

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        Set Open File Limit
      </span>
    </li>
  </ul>
</nav>
