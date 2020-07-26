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