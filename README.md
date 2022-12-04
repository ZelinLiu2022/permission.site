# permission.site

A simple site to test permission-related UI for web APIs.

This is a testing site brought to life by [@lgarron](https://github.com/lgarron), and currently maintained by Chromium project members, but note that this is not an official Google product.

# Isolated Web App
To install permission.site as an Isolated Web App:
1. Build the latest version of Chromium: [Here](https://www.chromium.org/developers/how-tos/get-the-code/)
2. Start a server hosting the content of this repository. There are many ways to do this, one of the easiest is probably to use [http-server](https://www.npmjs.com/package/http-server).
```
npm install -g http-server
http-server
```
3. Launch Chrome using the following flag (updated 12/03/22):
```
[PATH_TO_CHROME] --enable-features=IsolatedWebApps,IsolatedWebAppDevMode --install-isolated-web-app-from-url=[SERVER_URL]

```
4. Verify the app is installed in `chrome://apps`