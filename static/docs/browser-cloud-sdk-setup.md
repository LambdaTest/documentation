# Set Up the Browser SDK

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

The TestMu AI Browser SDK is the primary way to integrate your agents with TestMu AI Browser Cloud. It handles session creation, browser connections, stealth, profiles, and more from a single Node.js client.

## TestMu AI Browser SDK

The TestMu AI Browser SDK is the fastest way to get your agents into the Browser
Cloud. It gives you full programmatic control over sessions, adapters, stealth,
profiles, files, extensions, and tunnels directly from your Node.js application.

### What you need to get started

- **Node.js 16+** installed on your machine
- Install the SDK:

```bash
npm install @testmuai/testmu-cloud
```

### Initialize the Client

From here, you can create sessions, configure stealth mode, manage profiles,
upload files, load extensions, and open tunnels - all through a single client
instance.

```typescript
import { Browser } from '@testmuai/testmu-cloud';
const client = new Browser();
```
