---
title: cookies
tags: programming
---
## cookies

Small piece of data that a server sends to the user's web browser. The browser may store it and send it back with later requests to the same server. Use cases:
- Session management
- Customise the server response to user.
- User data persistence
- Tracking ( 🚨 )


### Cookie lifetime
- Session cookie : Expires after the browser session
- Persistent cookie : Expiry date set using `expires` / `max-age` attribute.

If cookie doesn't contain an expiration date it is considered a session cookie.


### Cookie scope
Domain and path parameters decide if cookie will be sent w/ a request.
- `domain` : Let's say we set cookie 'A' while host is example.com.
	- No domain specified : 'A' is sent w/ request to _example.com_ only.
	- We set  `domain : '.example.com'` : 'A' is sent to all subdomains of _example.com_ (_subdomain.example.com_ etc ).
- `path` : A cookie specified for a particular path will be sent along w/ requests to that path or its child paths only.


### How to make cookies secure ?
Some attributes to consider :
- `secure` : send cookie data to server only over https connections. This ensures that  the data is encrypted.
- `httpOnly` : access to cookies is not possible via javascript APIs. Set from server only. Browser has no access.
- `samesite` : This requires a separate section :)

### SameSite
Decides if cookie is sent along w/ a request based on how the request is being made.
Can take three values :
- `Strict` : Cookie is sent w/ request from origin (original site)
- `Lax` : Cookie is sent w/ requests from the origin and requests made as a result of link click from somewhere else.
- `None` : Cookies is sent w/ all requests no matter how it is made. Requires `secure` attribute to be set else cookie will be blocked.

Reference : [MDN doc](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) , [Youtube](https://www.youtube.com/watch?v=sovAIX4doOE&ab_channel=HusseinNasser)
