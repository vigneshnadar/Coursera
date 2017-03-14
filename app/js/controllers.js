'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('listingController', ['$scope', function ($scope) {

  	 $scope.message = "learning angular";



  var courses = [{
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
  ];

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
