# LambdaTest Documentation

Welcome to LambdaTest's documentation repository! Help us enhance our documentation by contributing—whether it's fixing a typo or adding new topics. We appreciate all contributions.

---

## Installation

### Dependencies

1. **Node.js Installation**
   - Download [NodeJS](https://nodejs.org/en/download/) based on your system configuration (recommended node version: 16.14.0)
   - Verify the Node.js version by opening Command Prompt/Terminal and running `node -v`

2. **Git Installation**
   - Download Git [here](https://git-scm.com/downloads)

3. **Recommended Code Editor**
   - [VS Code](https://code.visualstudio.com/download)

### Cloning the Repository

1. **Fork the Repository**
   - Go to [LambdaTest/lambdatest-docs](https://github.com/LambdaTest/lambdatest-docs)
   - Click "Fork" at the top-right corner and complete the forking process as guided

2. **Clone the Repository to Your Computer**

**Windows**

  * mkdir C:\LambdaTest
  * cd C:\LambdaTest
  * git clone -b staging https://github.com/YOURGITHUBUSERNAME/lambdatest-docs.git docs
  * cd docs
  * npm install


**MacOS**

  * mkdir ~/LambdaTest
  * cd ~/LambdaTest
  * git clone -b staging https://github.com/YOURGITHUBUSERNAME/lambdatest-docs.git docs
  * cd docs
  * npm install

### Setting Upstream and Creating Pull Requests

**Set Upstream for the Repository**

1. Run `git remote add upstream git@github.com:LambdaTest/lambdatest-docs.git`
2. Run `git remote -v` to verify

**Raising Pull Requests from Fork to Upstream**

1. Commit your changes using Git Desktop or VS Code
2. Visit [LambdaTest/lambdatest-docs](https://github.com/LambdaTest/lambdatest-docs)
3. Open the "Pull request" tab
4. Click "New Pull request"
5. Select the following from the dropdown menus:
   - Base repository: `LambdaTest/lambdatest-docs`
   - Base: `staging`
   - Head Repository: Your forked repository
   - Compare: Your branch
6. Click "Create pull request" and copy the page URL

## Update the Forked Repository

Run `git pull upstream staging` to keep your forked repository updated.

## Run the Project Locally

Run `npm start`. If the command doesn't work, try `npm i react-scripts@latest` followed by `npm start`. This will redirect to [http://localhost:3000/support/docs/](http://localhost:3000/support/docs/).

