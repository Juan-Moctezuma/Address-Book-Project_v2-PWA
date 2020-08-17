# Address-Book-Project_v2-PWA

### Introduction

The script in this repository represents a modified version of the
Address-Book-Project / contact management system; the link to the original
version is provided below.

The address book's code allows changes to get automatically 
saved in your browser. Meaning that any added / deleted person(s), or 
modifications done to elements within your address book will remain
after refreshing or closing your browser. Please note that your initial
contacts are fictional characters that were included by default.

Link on Github Repository (original version): https://github.com/Juan-Moctezuma/Address-Book-Project

### How to run local web server for testing purposes?

`python -m SimpleHTTPServer 1779`

if you are on Mac, use terminal and type the previous command; but first 
make sure you are in the correct directory (the folder containing your project).
NOTE that you don't need to request port 9000, you may use (e.g.) 8000.

### Does the code require a local web server to run?
Yes, but only once; afterwards you can simply visit your your local host on Google Chrome
and your script should be able to run with or without internet connection

If you decide to run my code be sure to use the following link
in order to view the app: http://localhost:1779/public/

Please note that you don't need to use port 1779, you can change it
on the server.js file.

### Technologies

1. HTML
2. CSS
   * Responsive Framework: Bootstrap
3. JavaScript
   * ES6
   * jQuery
   * JSON
   * Regular Expressions (For Form-Validation)
4. Node.js
   * Web Application Framework: Express.js
   * Body-Parser
5. Python 2 (via Live/local Server)
