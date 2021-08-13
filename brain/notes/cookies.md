---
title: cookies
tags: programming
---
## cookies
  small piece of data that a server sends to the user's web browser. The browser may store it and send it back with later requests to the same server. This can help
- customise the server response to user.
- store user data so that it isn't lost when page is refreshed etc.

```
// NodeJS
response.setHeader('Set-Cookie', ['type=ninja', 'language=javascript']);
```

*Note that current practice is to use Web Storage APIs like localStorage and sessionStorage for storing data on client side.*

external parties may intercept cookie data by gaining access to client side storage or intercepting the client requests.

How to make cookies secure ? by adding *secure* and *httpOnly* attributes.
secure -> send cookie data to server only over https connections. This ensures that  the data is encrypted.    
httpOnly -> access to cookies is not possible via javascript APIs.


[MDN doc](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
