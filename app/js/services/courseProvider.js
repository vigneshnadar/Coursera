/*'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
/*angular.module('myApp.services')
  .factory('courseProvider', ['$http', '$q',

    function($http, $q) {


      function getCourses() {
        return $http.get('data/course.json');
      }

      function addCourse(course) {
        courses.push(course);
      }

      function getCourse(id) {

        var deferred = $q.defer();

        var targetCourse;

        var courses;
        $http.get('data/course.json').success(function(data) {
          courses = data;

          angular.forEach(courses, function(item, index) {
            if (item.id === id) {
              targetCourse = item;

              deferred.resolve(targetCourse);
            }
          })
        });

        return deferred.promise;
      }

      return {
        getCourses: getCourses,
        add: addCourse,
        get: getCourse
      };

    }
  ]);*/

'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services')
  .factory('courseProvider', ['reviewProvider',

    function(reviewProvider) {

      var courses = [{
          id:"1",
    name: 'Cascading Style Sheets 3',
    description:'Cascading Style Sheets (CSS) is a style sheet language used for describing the look and formatting of a document written in a markup language. While most often used to style web pages and user interfaces written in HTML and XHTML, the language can be applied to any kind of XML document, including plain XML, SVG and XUL. CSS is a cornerstone specification of the web and almost all web pages use CSS style sheets to describe their presentation.CSS is designed primarily to enable the separation of document content from document presentation, including elements such as the layout, colors, and fonts.[1] This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple pages to share formatting, and reduce complexity and repetition in the structural content ',
  pic: 'UcM59y0.jpg',
 // bzXDArr.jpg
  price:500,
  rating:5,
  av:2//reviewProvider.avgRating("1")
  },
  {  id:"2",
    name: 'Angular Js',
    description:'AngularJS is an open-source web application framework, maintained by Google and community, that assists with creating single-page applications, one-page web applications that only require HTML, CSS, and JavaScript on the client side. Its goal is to augment web applications with model–view–controller (MVC) capability, in an effort to make both development and testing easier.',
    pic: 'g4vOW6w.jpg',
    price:1000,
    rating:5,
    av:3//reviewProvider.avgRating("2")
  },
  {  id:"3",
    name: 'JavaScript',
    description:'AngularJS is an open-source web application framework, maintained by Google and community, that assists with creating single-page applications, one-page web applications that only require HTML, CSS, and JavaScript on the client side. Its goal is to augment web applications with model–view–controller (MVC) capability, in an effort to make both development and testing easier.',
    pic: '6upF0zM.jpg',
    price:800,
    rating:5,
    av:5//reviewProvider.avgRating("3")
  },
  {  id:"4",
    name: 'Hedge Fund',
    description:'A hedge fund is a pooled investment vehicle administered by a professional management firm, and often structured as a limited partnership, limited liability company, or similar vehicle.[1][2] Hedge funds are generally distinct from mutual funds as their use of leverage is not capped by regulators[3] and from private equity funds as the majority of hedge funds invest in relatively liquid assets.[4] Hedge funds invest in a diverse range of markets and use a wide variety of investment styles and financial instruments.[2] The name "hedge fund" refers to the hedging techniques traditionally used by hedge funds, but hedge funds today do not necessarily hedge.[5] Hedge funds are made available only to certain sophisticated or accredited investors and cannot be offered or sold to the general public.[5] As such, they generally avoid direct regulatory oversight, bypass licensing requirements applicable to investment companies, and operate with greater flexibility than mutual funds and other investment funds.[6] Hedge funds have existed for many decades, but have become increasingly popular in recent years, growing to be one of the worlds major investment vehicles and sources of capital.',
    pic: 'FbxVOR1.png',
    price:700,
    rating:2,
    av:5//reviewProvider.avgRating("3")
  },
  {  id:"5",
    name: 'Stock Market',
    description:'A stock market or equity market is the aggregation of buyers and sellers (a loose network of economic transactions, not a physical facility or discrete entity) of stocks (shares); these are securities listed on a stock exchange as well as those only traded privately.A stock exchange is a place to trade stocks. Companies may want to get their stock listed on a stock exchange. Other stocks may be traded "over the counter", that is, through a dealer. A large company will usually have its stock listed on many exchanges across the world.[4]Market participants include individual retail investors and traders, institutional investors such as mutual funds, banks, insurance companies and hedge funds, and also publicly traded corporations trading in their own shares. Some studies have suggested that institutional investors and corporations trading in their own shares generally receive higher risk-adjusted returns than retail investors.[5] This may be attributable to their tendencies to hold investments for longer periods of time.',
    pic: 'fNW3vO8.png',
    price:900,
    rating:5,
    av:5//reviewProvider.avgRating("3")
  },
  {  id:"6",
    name: 'Mongo db',
    description:'MongoDB (from "humongous") is a cross-platform document-oriented database. Classified as a NoSQL database, MongoDB eschews the traditional table-based relational database structure in favor of JSON-like documents with dynamic schemas (MongoDB calls the format BSON), making the integration of data in certain types of applications easier and faster. Released under a combination of the GNU Affero General Public License and the Apache License, MongoDB is free and open-source software.First developed by the software company 10gen (now MongoDB Inc.) in October 2007 as a component of a planned platform as a service product, the company shifted to an open source development model in 2009, with 10gen offering commercial support and other services.[1] Since then, MongoDB has been adopted as backend software by a number of major websites and services, including Craigslist, eBay, Foursquare, SourceForge, Viacom, and the New York Times, among others. MongoDB is the most popular NoSQL database system.',
    pic: 'm8ZHxJo.jpg',
    price:800,
    rating:5,
    av:5//reviewProvider.avgRating("3")
  },
  {  id:"7",
    name: 'Financial Investment',
    description:'Investment is time, energy, or matter spent in the hope of future benefits actualized within a specified date or time frame. Investment has different meanings in economics and finance.In economics, investment is the accumulation of newly produced physical entities, such as factories, machinery, houses, and goods inventories.In finance, investment is putting money into an asset with the expectation of capital appreciation, dividends, and/or interest earnings. This may or may not be backed by research and analysis. Most or all forms of investment involve some form of risk, such as investment in equities, property, and even fixed interest securities which are subject, among other things, to inflation risk. It is indispensable for project investors to identify and manage the risks related to the investment.',
    pic: '6Go0axV.png',
    price:700,
    rating:2,
    av:5//reviewProvider.avgRating("3")
  }
  ];
  /*
js   6upF0zM

hedge  FbxVOR1


stock  fNW3vO8

finance  6Go0axV

mongo db m8ZHxJo

  */

      function getCourses() {
        return courses;
      }

      function addCourse(course) {
        courses.push(course);
      }

      function getCourse(id) {
        var targetCourse;

        angular.forEach(courses, function(item, index) {
          if (item.id === id) {
            targetCourse = item;
          }
        })

        return targetCourse;
      }




      function cavgRating() {
       // var targetReview;
        var cr=reviewProvider.getReviews();
       angular.forEach(courses, function(item, index) {
        var avgR,x,avg=0,n=0;
         x=item.id;
            
            

        angular.forEach(cr, function(item, index) {
          if (item.id == x) {
           // targetReview = item;
            avg+=item.rating;
            n++;

          }
        })//end of inner for each
        avgR=avg/n;
        if(n==0)
          item.av=0;
        else
        item.av=avgR;
        
        })//end of both for each
            return courses;

            }
       

        
          

        //return avgR;
      //}
 
      return {
        getCourses: getCourses,
        add: addCourse,
        get: getCourse,
        cavgRating:cavgRating
      };

    }
  ]);