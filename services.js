/**
 * Created by Sergey on 23/10/2015.
 */

/* service */
/*
var baseLogger = function () {
	this.messageCount = 0;
	this.log = function (msg) {
		console.log(this.msgType + ": " + (this.messageCount++) + " " + msg);
	}
};
var debugLogger = function () { };
debugLogger.prototype = new baseLogger();
debugLogger.prototype.msgType = "Debug";
var errorLogger = function () { };
errorLogger.prototype = new baseLogger();
errorLogger.prototype.msgType = "Error";

angular.module("customServices", [])
  .service("logService", debugLogger)
  .service("errorService", errorLogger);
*/

/* factory */
/*
.factory("logService", function () {
 var messageCount = 0;
 return {
 log: function (msg) {
 console.log("(LOG + " + messageCount++ + ") " + msg);
 }
 };
 })
*/

angular.module("customServices", [])
	.provider("logService", function () {
		var counter = true;
		var debug = true;
		return {
			messageCounterEnabled: function (setting) {
				if (angular.isDefined(setting)) {
					counter = setting;
					return this;
				} else {
					return counter;
				}
			},
			debugEnabled: function (setting) {
				if (angular.isDefined(setting)) {
					debug = setting;
					return this;
				} else {
					return debug;
				}
			},
			$get: function () {
				return {
					messageCount: 0,
					log: function (msg) {
						if (debug) {
							console.log("(LOG"
								+ (counter ? " + " + this.messageCount++ + ") " : ") ")
								+ msg);
						}
					}
				};
			}
		}
	});