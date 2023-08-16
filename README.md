# NetworkStatusChecker
This is a simple Internet Status Checker built with HTML, CSS, and JavaScript.

The HTML file contains the basic structure of the web page, including the header, body, and footer. The CSS file defines the style of the web page, such as the colors, fonts, and layout. The JavaScript file contains the logic for the web page, such as checking the internet connection status and displaying the results.

To check the internet connection status, the JavaScript file uses the `navigator.onLine` property. This property returns a boolean value that indicates whether the browser is connected to the internet. If the browser is connected to the internet, the JavaScript file uses the `fetch` API to get the user's IP address. The `fetch` API is a JavaScript function that allows you to make HTTP requests.

Once the user's IP address is obtained, the JavaScript file uses the `navigator.connection` property to get the network strength. The `navigator.connection` property returns an object that contains information about the network connection, such as the downlink speed and the type of network (e.g., Wi-Fi, cellular, etc.).

The results of the internet connection check are displayed in the web page. If the browser is connected to the internet, the following information is displayed:

* Connection status: Connected
* IP address: The user's IP address
* Network strength: The network strength in Mbps

If the browser is not connected to the internet, the following information is displayed:

* Connection status: Disconnected
* IP address: -
* Network strength: -

I hope this helps!
