"use strict";

module.exports = {
	"serviceName": "proxy",
	"serviceGroup": "SOAJS Core Services",
	"servicePort": 4009,
	"requestTimeout": 30,
	"requestTimeoutRenewal": 5,
	"extKeyRequired": true,
	"awareness": true,
	"bodyParser": false,
	"awarenessEnv": true,

	"errors": {
		"400": "Database Error",
		"401": "You do not have access to this environment %envCode%"
	},
	"schema": {
		"/redirect" : {
			"_apiInfo": {
				"l": "Proxy Redirector",
				"group": "Proxy",
				"groupMain": true
			},
			"__env" : {
				"required": true,
				"source": ["query.__env"],
				"validation": {
					"type": "string"
				}
			},
			"__envauth" : {
				"required": true,
				"source": ["query.__envauth"],
				"validation": {
					"type": "string"
				}
			}
		}
	}
};