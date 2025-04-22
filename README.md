# Project-3
CS 198-99 Project 3: Final Project

step1: open the terminal in laptop and 
node.js and npm should be installed in your laptop.

  code : node --version

  
  code : npm --version


step2: make folder : ""C:\Users\chhw\react-projects\my-app"
(It is most important not to work in OneDrive folders (such as Desktop, Documents, Pictures, etc.)

make folder > open that folder on the vscode > make new terminal in vscode > write code

  code : npx create-react-app .


step3: check if it works well
  code : npm start

if it says, " Compiled with problems: ×
ERROR in ./src/reportWebVitals.js 5:4-24
Module not found: Error: Can't resolve 'web-vitals' in 'C:\Users\chhw\react-projects\my-app\src'"

In the reportWebVitals.js file, the module called "web-vitals" is being imported, but an error occurred because "web-vitals" is not installed.

  code : npm install web-vitals


  code : npm start
