# Kane CLI Authentication

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Kane CLI authenticates against your TestMu AI account before it can run tests, upload sessions, or interact with Test Manager. There are two authentication methods:

- **OAuth**: recommended for everyday local use. Opens a browser, you approve once, and tokens are stored on your machine.
- **Basic auth**: your TestMu AI username and access key. Use this in CI and other non-interactive environments where no browser is available.

## OAuth Login

```bash
kane-cli login --oauth
```

Kane CLI opens your default browser to the TestMu AI consent page. Sign in and approve the request. When the browser hands control back, Kane CLI stores your tokens locally and you are signed in. You usually do not need to log in again on the same machine. Kane CLI reuses the stored session on subsequent runs.

If you run `kane-cli login` interactively without flags, Kane CLI launches a guided login wizard that walks you through choosing a method, profile, and (for basic auth) entering credentials.

## Basic Auth

Basic auth uses your TestMu AI username and account access key. It is the right choice for CI runners, Docker containers, and any other environment where opening a browser is not possible.

### Per-Run Flags

Pass credentials directly on the command you are running. They take precedence over any stored credentials:

{`kane-cli run "Search for a product" \\
  --username "${ YOUR_LAMBDATEST_USERNAME()}" \\
  --access-key "${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

Both `kane-cli run` and `kane-cli feedback` accept `--username` and `--access-key`.

### Persistent Basic Auth

To save basic auth credentials for a profile so you do not have to pass them every time, log in with the basic auth flags:

{`kane-cli login --username "${ YOUR_LAMBDATEST_USERNAME()}" --access-key "${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

Saved basic auth is used automatically for subsequent commands run under that profile.

### Where to Find Your Access Key

Sign in to the TestMu AI [dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard) > **Credentials** and copy your access key. Treat it like a password. Anyone with your username and access key can run tests on your account.

## Profiles

A profile is a named login. Profiles are useful when you work with more than one TestMu AI account or organisation, or when you want separate credentials for personal and team use without re-authenticating each time you switch.

### Create a Profile

Pass `--profile ` to `login` to authenticate under a named profile. If you omit `--profile`, Kane CLI uses the profile named `default`.

```bash
kane-cli login --oauth --profile work
kane-cli login --oauth --profile personal
```

You can mix methods. One profile can use OAuth and another can use basic auth.

### List Profiles

```bash
kane-cli profiles list
```

Prints each saved profile with its environment, marking the active one.

### Switch the Active Profile

```bash
kane-cli profiles switch work
```

Subsequent commands run under `work` until you switch again.

### Delete a Profile

```bash
kane-cli profiles delete personal
```

Removes the stored credentials for that profile.

### Run Against a Specific Profile Without Switching

A few commands accept `--profile ` so you can target a profile for a single invocation without changing the active one. This is supported on `kane-cli login`, `kane-cli whoami`, and `kane-cli balance`. For other commands, use `kane-cli profiles switch` first.

## Check Who You Are Logged In As

```bash
kane-cli whoami
```

`whoami` prints an identity card showing the active profile, environment, authentication method (OAuth or basic), the username (when known), and (for OAuth) whether the stored token is valid, expired, or missing, along with its expiry date.

Pass `--profile ` to inspect a profile other than the active one.

## Log Out

```bash
kane-cli logout
```

`logout` signs out of the active profile. For OAuth profiles, Kane CLI revokes the stored tokens with TestMu AI before deleting them. The on-disk credentials for the profile are removed. If you have other profiles configured, Kane CLI automatically switches to one of them; otherwise you are left with no active profile.

## Where Credentials Are Stored

Credentials live under your home directory:

```text
~/.testmuai/kaneai/profiles/<profile>/<env>/credentials
```

The file is created with restricted permissions (mode `0600`) so only your user account can read it. There is no need to inspect or edit this file by hand. Use `kane-cli login`, `kane-cli logout`, and the `kane-cli profiles` commands to manage it.
