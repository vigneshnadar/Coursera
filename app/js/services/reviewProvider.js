'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services')
  .factory('reviewProvider', [

    function() {

      var reviews = [{
          id:"1",
    name: 'Vignesh',
    comment:'Simply in love with css.Though now i find bootstrap better for styling.',
  date: new Date("25 Dec, 1995 23:15:00"),
  //Date("dd-M-yyyy"),
  rating:9,
  cntup:0,
  cntdown:0
  },
  {
          id:"2",
    name: 'Abhinav',
    comment:'Forget about jquery.Angular js removes all the plumbing code and gives more functionality',
  date: new Date("25 Dec, 1998 23:15:00"),
  //Date("dd-M-yyyy"),
  rating:7,
  cntup:0,
  cntdown:0
  },
  {
          id:"1",
    name: 'Akshay',
    comment:'I am a UI person.Can work with CSS all day long',
  date: new Date("15 Jan, 2014 11:15:00"),
  rating:9,
  cntup:0,
  cntdown:0
  },
  {
          id:"3",
    name: 'Anupama',
    comment:'First learn javascript then move on to AngularJS',
  date:new Date("17 Dec, 1992 03:15:00"),
  rating:5,
  cntup:0,
  cntdown:0
  },
  {
          id:"4",
    name: 'Mohanish',
    comment:'Learn about hedge funds along with technology and no one can touch you.',
  date:new Date("28 Feb, 1995 23:15:00"),
  rating:7,
  cntup:0,
  cntdown:0
  },
  {
          id:"5",
    name: 'Jordon Bellfort',
    comment:'Learn about the stock market and live life king size.:)',
  date:new Date("08 Aug, 1995 23:15:00"),
  rating:10,
  cntup:0,
  cntdown:0
  },
  {
          id:"6",
    name: 'Aniket',
    comment:'Yet to learn this one.Still excited.',
  date:new Date("18 Oct, 2012 23:15:00"),
  rating:4,
  cntup:0,
  cntdown:0
  },
  {
          id:"7",
    name: 'Warren Buffet',
    comment:'Dont put all your eggs in one basket',
  date:new Date("28 Feb, 1999 23:15:00"),
  rating:4,
  cntup:0,
  cntdown:0
  }


  /*date:'29/06/1992',{  id:"2",
    name: 'Angular Js',
    description:'AngularJS is an open-source web application framework, maintained by Google and community, that assists with creating single-page applications, one-page web applications that only require HTML, CSS, and JavaScript on the client side. Its goal is to augment web applications with model–view–controller (MVC) capability, in an effort to make both development and testing easier.',
    pic: 'g4vOW6w.jpg',
    price:1000,
    rating:5
  },
  {  id:"3",
    name: 'JavaScript',
    description:'AngularJS is an open-source web application framework, maintained by Google and community, that assists with creating single-page applications, one-page web applications that only require HTML, CSS, and JavaScript on the client side. Its goal is to augment web applications with model–view–controller (MVC) capability, in an effort to make both development and testing easier.',
    pic: 'g4vOW6w.jpg',
    price:800,
    rating:5
  }*/
  ];

      function getReviews() {
        return reviews;
      }

      function addReview(review) {
         review.cntdown=0;
         review.cntup=0;
        reviews.push(review);
      }

      function getReview(id) {
        var targetReview;

        angular.forEach(reviews, function(item, index) {
          if (item.id === id) {
            targetReview = item;
          }
        })

        return targetReview;
      }


      function avgRating(id) {
       // var targetReview;
        var avgR,avg=0,n=0;

        angular.forEach(reviews, function(item, index) {
          if (item.id === id) {
           // targetReview = item;
            avg+=item.rating;
            n++;

          }
        })
         if(n==0)
          avgR=0;
        else
          avgR=avg/n;
          

        return avgR;
      }

      
      /*function cavgRating() {
       // var targetReview;
        var cr=courseProvider.getCourses();
       angular.forEach(cr, function(item, index) {
        var avgR,x,avg=0,n=0;
         x=item.id;
            

        angular.forEach(reviews, function(item, index) {
          if (item.id === x) {
           // targetReview = item;
            avg+=item.rating;
            n++;

          }
        })//end of inner for each
        avgR=avg/n;
        cr.av=avgR;
        })//end of both for each


       return cr;

        
          

        //return avgR;
      }*/





      return {
        getReviews: getReviews,
        add: addReview,
        get: getReview,
        avgRating: avgRating,
        //cavgRating:cavgRating
      };

    }
  ]);