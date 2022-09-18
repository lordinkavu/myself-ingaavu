---
title: HTTP/HTTPS
tags: programming
---

## HTTP
Internet protocol for communication b/w a web server and client (mostly the browser ). Client _requests_, server _responds_.
Proxies may be used to relay messages.
HTTP 1.1 not encrypted. HTTPS is encrypted communication.

### HTTP flow
1. Open TCP connection ( ? ).
2. Send request message : Request message contains HTTP method, path, protocol version, headres, body etc.
3. Read the response message : Consist of HTTP version, status code, status message, HTTP headers, response body.
4. Close / reuse connection.

_Want to learn_

- HTTP headers
- HTTP status codes
- HTTPS : how encryption ?
- OSI model

Useful resource : <https://jvns.ca/networking-zine.pdf>


