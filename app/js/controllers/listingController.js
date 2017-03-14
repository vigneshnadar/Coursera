/*angular.module('myApp.controllers')
	.controller('listingController', ['$scope', 'settings', 'courseProvider', '$location',
		function($scope, settings, courseProvider, $nonsense) {

			$scope.maxLength = settings.maxDescriptionLength;
			$scope.maxResults = settings.maxResults;
			courseProvider.getCourses().success(function (data){
				$scope.courses = data;	
			});

			$scope.showCourseDetails = function(course){
				courseProvider.selectedCourse = course;
				$nonsense.url('/details');
			}
		}
	]);*/



	angular.module('myApp.controllers')
	.controller('listingController', ['$scope', 'settings', 'courseProvider', '$location',
		function($scope, settings, courseProvider, $nonsense) {

			$scope.maxLength = settings.maxDescriptionLength;
			$scope.maxResults = settings.maxResults;
			//$scope.courses = courseProvider.getCourses();

			   $scope.courses= courseProvider.cavgRating();
			   //var slides = $scope.courses = [];
			   $scope.predicate='av';
			   $scope.reverse=false;
			   $scope.dynamic=5;
			   $scope.max=5;


			   $scope.currentSliderIndex = 0;

  // the image sources for the slides
  $scope.images = [
    'http://distilleryimage9.ak.instagram.com/6113581809eb11e39e3522000a9f18ab_7.jpg',
    'http://distilleryimage4.ak.instagram.com/e27029bc1d4211e3852e22000ae90903_7.jpg',
    'http://distilleryimage3.ak.instagram.com/67345d703be411e3b3da22000aa804fa_8.jpg'
  ];


                /*var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length;
    slides.push({
      image: 'http://placekitten.com/' + newWidth + '/300',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }*/


			$scope.showCourseDetails = function(course){
				courseProvider.selectedCourse = course;
				$nonsense.url('/details');
			}
		}
	]);


	