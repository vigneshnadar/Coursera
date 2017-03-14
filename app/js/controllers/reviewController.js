angular.module('myApp.controllers')
	.controller('reviewController', ['$scope', 'courseProvider','reviewProvider', 'settings','$location', '$routeParams', 
		function($scope, courseProvider, reviewProvider, settings,$location, $routeParams) {




     $scope.description = 'describe describe describe';
            $scope.comment = 'Hi, This is <i>my comment</i>';


       $scope.reviews = reviewProvider.getReviews();

       //var dt=Date();

			var courseId = $routeParams.id;
      var reviewId = $routeParams.id;
			$scope.course = courseProvider.get(courseId);
      $scope.avgRate=reviewProvider.avgRating(courseId);
      //$scope.review = reviewProvider.get(reviewId);

      //console.log( $scope.review);
           /* $scope.showCourseDetails = function(course){
        courseProvider.selectedCourse = course;
        $nonsense.url('/details');*/
      //to add review
      $scope.addReview = function(review, newReviewForm) {
                
        if (newReviewForm.$invalid) {
          
          alert('validation failed');
        } else {
          review.id=courseId;
          review.date= new Date();
           $scope.dt=Date();
          console.log(review);
          reviewProvider.add(review);
          $scope.avgRate=reviewProvider.avgRating(courseId);
          $location.url('/details/'+courseId);
          console.log('saving course : ' + review.name);
        }
      }



			$scope.maxLength = settings.maxDescriptionLength;
      $scope.userLength = settings.maxUsernameLength;


		}
	])