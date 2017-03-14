'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/def', {
      templateUrl: 'deflt.html',
      controller: 'listingController'
    });
    $routeProvider.when('/new', {
      templateUrl: 'partials/listing.html',controller: 'listingController'
    });

    $routeProvider.when('/formc', {
      templateUrl: 'partials/formc.html',controller: 'newController'
    });

    $routeProvider.when('/thumb', {
      templateUrl: 'partials/thumbn.html',controller:'listingController'
    });

    $routeProvider.when('/details/:id', {
      templateUrl: 'partials/details.html',controller:'reviewController'
    });


    $routeProvider.when('/review/:id', {
      templateUrl: 'partials/reviews.html',controller:'reviewController'
    });

     $routeProvider.when('/slide', {
      templateUrl: 'partials/slider.html',controller:'slideController'
    });
   


    /*$routeProvider.when('/cjson', {
      templateUrl: 'data/course.json',controller:'listingController'
    });*/
    $routeProvider.otherwise({redirectTo: '/new'});
  }
]);


angular.module('myApp.controllers', []);
/*
function mainController($scope) {
  $scope.message = "learning angular";



  $scope.employees = [{
    name: 'Cascading Style Sheets',
    description:'Cascading Style Sheets (CSS) is a style sheet language used for describing the look and formatting of a document written in a markup language. While most often used to style web pages and interfaces written in HTML and XHTML, the language can be applied to any kind of XML document, including plain XML, SVG and XUL. CSS is a cornerstone specification of the web and almost all web pages use CSS style sheets to describe their presentation.',
  pic: 'bzXDArr.jpg',
  price:500
  },
  {
    name: 'Angular Js',
    description:'AngularJS is an open-source web application framework, maintained by Google and community, that assists with creating single-page applications, one-page web applications that only require HTML, CSS, and JavaScript on the client side. Its goal is to augment web applications with model–view–controller (MVC) capability, in an effort to make both development and testing easier.',
    pic: 'g4vOW6w.jpg',
    price:1000
  },
  {
    name: 'JavaScript',
    description:'AngularJS is an open-source web application framework, maintained by Google and community, that assists with creating single-page applications, one-page web applications that only require HTML, CSS, and JavaScript on the client side. Its goal is to augment web applications with model–view–controller (MVC) capability, in an effort to make both development and testing easier.',
    pic: 'g4vOW6w.jpg',
    price:800
  }
  ]
}*/