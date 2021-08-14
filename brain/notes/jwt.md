---
title: JWT
tags: programming
---

## JWT authentication
### JWT

JWT - JSON web token - secure way of transmitting information between parties as JSON objects. information can be verified and trusted because it is signed.

JWT structure ->   
`header.payload.signature`

Signature is generated from `header` and `payload`. 
Signing helps verify that the information is coming from the correct source. It also ensures the info hasn't been tampered with during transportation.  
The info can also be encrypted. Encryption hides the information from external parties.   

#### header

```
{
	"alg":"HS256",
	"typ":"JWT"
}
```

`alg` is the signing algorithm used. header value is base64 encoded for use in token.

#### payload

The data to be transferred JSON format. Encoded to base64 string. 

#### signature
the base64 encoded value of header and payload are used to generate signature using algorithm specified in header.

### authentication / autherisation process

#### Server side

1. Implement the sign up functionalities. The user password should be salted and hashed before storing in DB for security. 
2. When the user logs in, validate the supplied log in credentials using a DB call. 
3. If validated, create a JWT using the user DB id ( any id that uniquely identifies the user in DB will do ). JWT secret and expiration date can be specified in a configuration date.  Send it back to user/client.

#### Client side
1. Store the JWT received from server in a cookie / localStorage. 
2. Send this token in an authorisation header inside each subsequent requests.

#### Server side

1. If the user tries to access a protected route, check the authorisation header. 
2. If there is an authorisation header, calculate a signature using the token header, payload, secret stored on server side. Compare this signature with the token signature. If it match, then provide access to protected route. 















