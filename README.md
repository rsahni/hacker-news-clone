# hacker-news-clone
I have used basic create-react-app to make this HN clone and used express server for the node app and implemented SSR on top of Create React App.

Project structure is:
- public
    - index.html
    - favicon.ico
    - robots.txt
    - logo192.png
    - logo512.png
- server
    - index.js
    - start.js //this is to convert ES6 import commands inside index.js using babel. This will be called first
- src
    - components
        - tests
            - pagination.test.js
            - header.test.js
            - middleContainer.test.js
        - header.js
        - middleContainer.js
        - footer.js
        - pagination.js
        - postDescription.js
        - footerCharts.js
    - utils
        - getSiteHostName.js //to extract site host name from the post url
    - app.js
    - grayarrow.gif //arrow used for upvote icon
    - index.css
    - index.js
    - serviceWorker.js
    - setupTests.js
- .babelrc
- package.json
- README.md

To run on local machine clone the app:
- Node Server
 - NPM RUN INSTALL
 - NPM RUN BUILD
 - NPM RUN START
- Webpack Dev Server
  - NPM RUN INSTALL
  - NPM RUN START-WEBPACK

For upvotes and hide functionality I have used Local Storage API of the browser as it lets you access stored object across browser sessions.

For Graph (Line Chart) I have used react-chartjs-2 npm package

For CI Pipeline I have used Circle CI and integrated it with github
For App Deployment I have used Heruko server also I have activated CD on the github Master branch

LIGHTHOUSE Score on the Heruko Server are as follow:
Performance: 81
Accessibility: 96
Best Practices: 93
SEO: 100
PWA: 
    Fast and reliable: 3/3
    Installable: 3/3
    PWA Optimized: 6/7