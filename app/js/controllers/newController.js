/*
angular.module('myApp.controllers')
	.controller('newController', ['$scope', 'courseProvider', '$location', 
		function($scope, courseProvider, $location) {

			$scope.addCourse = function(course, newCourseForm) {
				if (newCourseForm.$invalid) {
					alert('validation failed');
				} else {
					courseProvider.add(course);
					$location.url('/new');
					console.log('saving course : ' + course.name);
				}
			}

		}
	]);
*/


	angular.module('myApp.controllers')
	.controller('newController', ['$scope', 'courseProvider', '$location', 
		function($scope, courseProvider, $location) {
                  
               $scope.cr=courseProvider.cavgRating();

                  //$scope.description = 'describe describe describe';
            //$scope.comment = 'Hi, This is <i>my comment</i>';
			$scope.addCourse = function(course, newCourseForm) {

                   var cid=$scope.cr.length;

				if (newCourseForm.$invalid) {
					alert('validation failed');
				} else {
					course.id=String(cid+1);
					courseProvider.add(course);
					$location.url('/new');
					console.log('saving course : ' + course.name);
				}
			}

		}
	]);
	/*.directive('myPreview', function(){
  return {
    restrict: 'E',
    templateUrl : 'partials/preview.html',
    scope: {
      previewContent : '='
      
    }
  }
})*/
