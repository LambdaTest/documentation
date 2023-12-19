# lambdatest-docs

Supporting Docs

### Steps to clone

***

**Install node.js on your computer**

  * Go to Download | Node.js  > download and install node.js as per your system configuration (suggested node version 16.14.0)

  * Once installed verify the node.js version - Open Command Prompt/Terminal and run command node -v

**Install Git on your computer**

  * Git - Downloads 

**Install VS Code (Recommended Code Editor)**

  * https://code.visualstudio.com/download 

**Fork the repo**

  * Go to https://github.com/LambdaTest/lambdatest-docs

  * Click on Fork button at top right corner and complete the forking process as guided

  * Clone the repo on your computer

  * Go to Terminal and run the following command (change the path as per your preference)
  
  * Note: Replace **YOURGITHUBUSERNAME** to your actual GitHub username below


### Windows


  * mkdir C:\LambdaTest
  * cd C:\LambdaTest
  * git clone -b prod https://github.com/YOURGITHUBUSERNAME/lambdatest-docs.git docs
  * cd docs
  * npm install

### MacOS


  * mkdir ~/LambdaTest
  * cd ~/LambdaTest
  * git clone -b prod https://github.com/YOURGITHUBUSERNAME/lambdatest-docs.git docs
  * cd docs
  * npm install
 

### Set upstream for the repo
  * Step 1 - Run command 'git remote add upstream git@github.com:LambdaTest/lambdatest-docs.git'
  * Step 2 - Run command 'git remote -v'
you will see website repo in origin and your fork in upstream

**How to keep updating the forked repo**

Run command 'git pull upstream prod'

**How to run project on the local**

Run command 'npm start' (if this command not working then run **npm i react-scripts@latest** )


**How to raise PR from fork to upstream**
  * Step 1 - Commit your code using git desktop or VS Code
  * Step 2 - Open https://github.com/LambdaTest/lambdatest-docs
  * Step 3 - Open 'Pull request' tab
  * Step 4 - Click on 'New Pull request' button
  * Step 5 - Select following from drop down menu
    - Select base repository - 'LambdaTest/lambdatest-docs'
    - Base - 'Prod'
    - Head Repository - 'Your forked repository'
    - Compare - 'Your branch'
  * Click on 'Create pull request', copy the current page URL

**How to check the status of deployment on Github**
  * Open https://github.com/LambdaTest/lambdatest-docs/  in browser
  * Click on action tab for checking status of your merged PR
