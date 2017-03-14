/*angular.module('myApp.controllers')
	.controller('jsonController', ['$http',
		function( $http) {

			var mainInfo = $http.get('course.json').success(function(response) {
       return mainInfo;
        //return response.data;
				//$nonsense.url('/cjson');
			}
		}
	]);8*/


			angular.module('myApp.controllers')
 .controller('jsonController', ['$scope', function($scope, $http) {
 $http.get('data/course.json')
      .then(function(res){
         $scope.datavar = res.data; 
         return datavar;               
       });
});