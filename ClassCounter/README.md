# ClassCounter
you have one of two options to use this bookmarklet
### Option 1:
Go to my [website](http://edcolosky.com) on the home page at the top you can drag the link for ClassCounter to your bookmark bar.
##### Known Issues
- The app will be rejected by HTTPS websites without specifically allowing mixed content in the browser.
- Some pages will have a CSP that will block all scripts, take a look in the console.

### Option 2:
Clone this code repository and host at the root on you own local HTTP server. I recommend using the Nodejs http-server.
```
sudo npm -g install ~/dir/subdir/ClassCounter/http-server
```
At the top of ```bookmarklet.js``` there is a line documenting the expected root of the app. If for some reason your server hosts this on a different port you will have to change this.
```javascript
var appRoot = 'http://localhost:8080/ClassCounter/';
```
now open the ```index.html``` and drag this link to your bookmark bar.

### Frameworks Used
- AngularJS
