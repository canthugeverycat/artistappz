// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'main.controller','canthugeverycat.services'])

.run(function($ionicPlatform, $rootScope) {

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });

  $rootScope.bools === undefined ? $rootScope.bools = {} : null;
  $rootScope.data === undefined ? $rootScope.data = {} : null;
  $rootScope.data.media === undefined ? $rootScope.data.media = {} : null;
  $rootScope.loaders === undefined ? $rootScope.loaders = {} : null;
  $rootScope.inputs === undefined ? $rootScope.inputs = {} : null;
  $rootScope.bools.showMedia = false;
  $rootScope.bools.showAbout = false;
  $rootScope.loaders.events = false;
})

.config(function($stateProvider, $urlRouterProvider, $httpProvider, $ionicConfigProvider) {

  //Setting up a custom http header
  var appId = '5596509a810db91aa8566ea2';
  $httpProvider.defaults.headers.get = {'x-app-id' : appId};
  $httpProvider.defaults.headers.post = {'x-app-id' : appId};
  $httpProvider.defaults.headers.delete = {'x-app-id' : appId};

  $ionicConfigProvider.tabs.position('bottom');


  $stateProvider


    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

    .state('tab.landing',{
      url:'/landing',
      views:{
        'tab-landing':{
          url:'/landing',
          templateUrl:'templates/tab-landing.html'
        }
      }
    })
    .state('tab.events', {
      url: '/events',
      views: {
        'tab-events': {
          templateUrl: 'templates/tab-events.html',
          controller: 'EventsController'
        }
      }
    })
    .state('tab.event-details', {
      url: '/event-details',
      views: {
        'tab-events': {
          templateUrl: 'templates/tab-event-details.html'
        }
      }
    })
    .state('tab.news', {
      url: '/news',
      views: {
        'tab-news': {
          templateUrl: 'templates/tab-news.html'
        }
      }
    })
    .state('tab.media', {
      url: '/media',
      views: {
        'tab-media': {
          templateUrl: 'templates/tab-media.html'
        }
      }
    })
    .state('tab.social', {
      url: '/social',
      views: {
        'tab-social': {
          templateUrl: 'templates/tab-social.html'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/landing');

})
