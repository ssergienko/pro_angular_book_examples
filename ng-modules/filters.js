/**
 * Created by Sergey on 11/08/2015.
 */
angular.module("exampleApp.Filters", []).filter("dayName", function () {
	var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday",	"Thursday", "Friday", "Saturday"];
	return function (input) {
		return angular.isNumber(input) ? dayNames[input] : input;
	};
});
