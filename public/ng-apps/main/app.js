angular.module("meanWreed", ['ngRoute', 'AppCtrl'])

// configuration
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		// #/test
		templateUrl: '/ng-apps/main/views/index.html',
		controller: 'AppCtrl'
	})
	// end /
	; // end $routeProvider statement
	// end project route
	// end routes
}]);