First of all, install all node dependences with the command

    node i
then run `node server.js`


### The following steps solve the domain connection
Go to your minecraft folder

for exemple
> Roaming\\.minecraft\saves\yourmap\serverconfig\computercraft-server.toml

Open with some text editor

There you will allow this option: *action = "allow"*
Like this:

``` 
#Controls the HTTP API
[http]
	#The number of http requests a computer can make at one time. Additional requests will be queued, and sent when the running requests have finished. Set to 0 for unlimited.
	#Range: > 0
	max_requests = 16
	#The number of websockets a computer can have open at one time. Set to 0 for unlimited.
	#Range: > 1
	max_websockets = 4
	#Enable the "http" API on Computers (see "rules" for more fine grained control than this).
	enabled = true
	#Enable use of http websockets. This requires the "http_enable" option to also be true.
	websocket_enabled = true

	#A list of rules which control behaviour of the "http" API for specific domains or IPs.
	#Each rule is an item with a 'host' to match against, and a series of properties. The host may be a domain name ("pastebin.com"),
	#wildcard ("*.pastebin.com") or CIDR notation ("127.0.0.0/8"). If no rules, the domain is blocked.
	[[http.rules]]
		host = "$private"
		action = "allow"
```

Now just go to the turtle and run your code name.

> remote 

That's it!