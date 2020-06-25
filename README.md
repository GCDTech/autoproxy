AutoProxy
=========
AutoProxy is a simple http server to server a `proxy.pac` file used for automatic proxy configuration. Do you regularly use a proxy for debugging network calls from your app? Are you sick of haveing to add and remove the proxy IP and port, or find yourself confused when network activity breaks on your device because you forgot to remove the configuration and closed your debugging proxy?

AutoProxy serves a single file `proxy.pac` used for automatic proxy configuration, it allows you to specify specific domains/patterns that you want to proxy, all other trffic from your device will simply bypass the proxy.

Usage
-----

1. Edit  `patterns.txt` and add any domains you wish to proxy, 1 per line
1. On the machine running the debugging proxy run `node index.js`
1. Under WiFi setting on the target device coose `Configure Proxy` > `Automatic` and enter the URL displayed on your console (Universal Clipboard on macOS/iOS makes this easy)
1. Thats it your device should now proxy any URL's configured

Proxy port is assumed to be 9090, but can be changed in `proxy.pac` file.