---
id: hyperexecute-how-to-perform-dependent-test-based-discovery
title: How to Perform Dependent Test Case Discovery
hide_title: false
sidebar_label: How to Perform Dependent Test Case Discovery
description: How to Perform Dependent Test Case Discovery
keywords:
    - hyperexecute yaml
    - How to Perform Dependent Test Case Discovery
url: https://www.testmuai.com/support/docs/hyperexecute-how-to-perform-dependent-test-based-discovery/
site_name: TestMu AI
slug: hyperexecute-how-to-perform-dependent-test-based-discovery/
canonical: https://www.testmuai.com/support/docs/hyperexecute-how-to-perform-dependent-test-based-discovery/
---


import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "How to Perform Dependent Test Case Discovery",
          "item": `${BRAND_URL}/support/docs/hyperexecute-how-to-perform-dependent-test-based-discovery/`
        }]
      })
    }}
></script>

Dependent tests signify that one test relies on the outcome of another. To achieve this, TestNG offers the '**dependsOnMethods**' attribute within @Test annotations.

For instance, consider the code snippet in which '**SignIn()**' depends on '**OpenBrowser()**,' and '**LogOut()**' depends on 'SignIn().'

```java
import org.testng.annotations.Test;
public class DependsOnTest {
  @Test
  public void OpenBrowser() {
	  System.out.println("The browser is opened");
  }
  
  @Test (dependsOnMethods = { "OpenBrowser" })
  public void SignIn() {
	  System.out.println("User has signed in successfully");
  }
  
  @Test (dependsOnMethods = { "SignIn" })
  public void LogOut() {
	  System.out.println("The user logged out successfully");
  }
}
```

To discover and manage dependent tests using the Test Discovery command, you can use the following syntax:

```yaml
mvn test -Dmode=discover -Dplatname=win -Dframework=testng -Ddiscovery=dependent
```

This command will provide a Test Discovery Result that lists the tests and their dependencies, ensuring that dependent tests are executed in the correct order, such as ["Test1#SignIn,Test1#LogOut,Test1#OpenBrowser"].
