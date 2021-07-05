---
title: Authentication in NodeJS
tags: programming
---
## Authentication in NodeJS
### Set up a basic express server.

```
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.get('/',(req,res) => {
	res.sendStatus(200);
});

const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`Listening on port ${port}`));

```

### Configure express-session middleware

What does express-session do ->
1. Checks of incoming request from client has a cookie with session id. If not it'll create a unique  session id is a 24 character base64 string created using ``utils.uid(24)``  . This is attached to the request and sent back to client in the response. 
2. Client stores the session id in a [[cookies]]. Cookie value will have format [sid].[signature] where sid is the session id and signature is generated by signing sid using secret key. The secret key is a random string set up while initialising the middleware. Signing is done to prevent tampering of cookie in client side. Name of cookie will be ``connect.sid``.
3. This cookie is embedded in each subsequent request to server from the client.
4. In server side, the request from client is first passed through a session handler middleware which extracts the cookie and make it available as a JSON object to the request handler. The request handler can then use the session id from the cookie to lookup the corresponding session data stored locally ( default ) or better in a DB.

```
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const session = require('express-session');

app.use(session({
	secret:"some random string",
	resave:false,  
	saveUninitialised:false
}))

app.get('/',(req,res) => {
	res.sendStatus(200);
});

const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`Listening on port ${port}`));
```

Here we have set up our app to use express-session middleware. 
``secret`` should be a random string. It is used to sign the session id.
``saveUninitialised`` is set to ``false`` so that empty sessions are not stored in session store.
``resave`` is set to ``false`` so that session store is not overwritten if session object is not modified.

*To be continued*




















	






