/*'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
/*angular.module('myApp.services', []).
  value('version', '0.1')
.value('settings', {
	maxDescriptionLength : 50,
	maxResults : 20
}).value('parseSettings',{
  'X-Parse-Application-Id': '8yU3BThBAJuVDYPAF80ZOjHtsceEccQn4W4bXbEk',
  'X-Parse-REST-API-Key': 'YFC7wxkjjQEEmyhusmjT2tmYaEqxeDUu3GSMyWfJ'}
);
  */

  'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1')
.value('settings', {
	maxDescriptionLength : 200,
  maxUsernameLength : 50,
	maxResults : 20
}).directive('myProgress', function(){
  return {
    restrict: 'E',
    templateUrl : 'partials/progressbar.html',
    /*scope: {
      previewContent : '='
      
    }*/
    
  }
}).directive('myProgresss', function(){
  return {
    restrict: 'E',
    templateUrl : 'partials/progressbar1.html',
    /*scope: {
      previewContent : '='
      
    }*/
    
  }
})
