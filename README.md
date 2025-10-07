# [LambdaTest Documentation](https://lambdatest.com/support/docs/)
Welcome to LambdaTest's documentation repository! Help us enhance our documentation by contributing—whether it's fixing a typo or adding new topics. We appreciate all contributions.

## Contributing Content
We recommend forking the repo, creating all content changes in branches, and submitting pull requests. We will work with you to get this content reviewed, tested, and merged for publishing.

## Building Locally
Docusaurus requires the following to build on locals:

- [NodeJS](https://nodejs.org/en/download/) version recommended: `16.14.0`
- Verify the Node.js version by opening Command Prompt/Terminal and running `node -v`
- Download Git [here](https://git-scm.com/downloads)
- [VS Code Editor](https://code.visualstudio.com/download)

To build on your local:

1. Clone the repo using Git or tools like GitHub Desktop.
2. In a terminal, change to the cloned repo folder. Run the install command: `npm install --legacy --peer-deps`.
3. To serve and review your content, use one of the following:
   - Use start, hot reloads as you make changes: `npm start`. 
4. To build locally and test your links, run `npm run build`. Any issues with broken links and images are listed according to file. Locate and update those issues, then run `npm serve` and start again to verify.

Note: If the command doesn't work, try `npm i react-scripts@latest` followed by `npm start`.

The static files are generated in the build folder and run on your local machine at: http://localhost:3000/. To stop the build or served site, hit Ctrl + C to interrupt. You can enter new commands in terminal, rebuild, and restart.

[LambdaTest Documentation](https://lambdatest.com/support/docs/) was created using [Docusaurus 2](https://docusaurus.io/) with React

## Publishing Content
- Clone the repository to your local machine
- Switch to the `stage` branch / you can create your desired branch as well.
- Now after completing your changes, raise the PR for the `stage` branch only and ask to the docs team to review and merge it for `stage`.
- Verify your changes on the stage domain.
- Now to deploy your changes to the PROD, provide all the PRs related to that feature to the docs team, they will merge it to PROD.

As pull requests are merged to the `main` branch by the [LambdaTest Documentation](https://lambdatest.com/support/docs/) team, the content builds and deploys to a staging site. This allows you to review and test your content thoroughly on a server, rather than a local build, prior to merging your code to production.