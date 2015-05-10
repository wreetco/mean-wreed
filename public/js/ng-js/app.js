angular.module("meanWreed", ['ngRoute', 'AppCtrl'])

// configuration
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		// #/test
		templateUrl: '/js/ng-js/views/index.html',
		controller: 'AppCtrl'
	})
	// end /
	; // end $routeProvider statement
	// end project route
	// end routes
}]);