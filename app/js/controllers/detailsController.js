


/*
angular.module('myApp.controllers')
	.controller('detailsController', ['$scope', 'courseProvider', 'settings', '$routeParams', 
		function($scope, courseProvider, settings, $routeParams) {

			var courseId = $routeParams.id;

			var promise = courseProvider.get(courseId);

			promise.then(function(data){
				$scope.course = data;
			})

			$scope.maxLength = settings.maxDescriptionLength;


		}
	]);*/

	angular.module('myApp.controllers')
	.controller('detailsController', ['$scope', 'courseProvider', 'settings', '$routeParams', 
		function($scope, courseProvider, settings, $routeParams) {

			var courseId = $routeParams.id;

			$scope.course = courseProvider.get(courseId);

			$scope.maxLength = settings.maxDescriptionLength;


		}
	]);