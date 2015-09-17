// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','main.controller','canthugeverycat.services'])

.run(function($ionicPlatform, $rootScope, $location, $timeout) {

  //Set up the variables

  $rootScope.bools === undefined ? $rootScope.bools = {} : null;
  $rootScope.data === undefined ? $rootScope.data = {} : null;
  $rootScope.data.media === undefined ? $rootScope.data.media = {} : null;
  $rootScope.loaders === undefined ? $rootScope.loaders = {} : null;
  $rootScope.inputs === undefined ? $rootScope.inputs = {} : null;
  $rootScope.inputs.media === undefined ? $rootScope.inputs.media = {} : null;
  $rootScope.model === undefined ? $rootScope.model = {} : null;
  $rootScope.model.media === undefined ? $rootScope.model.media = {} : null;
  $rootScope.sce === undefined ? $rootScope.sce = {} : null;
  $rootScope.sce.videos === undefined ? $rootScope.sce.videos = [] : null;
  $rootScope.sce.music === undefined ? $rootScope.sce.music = [] : null;
  $rootScope.display === undefined ? $rootScope.display = {} : null;
  $rootScope.display.videos === undefined ? $rootScope.display.videos = [] : null;
  $rootScope.settings === undefined ? $rootScope.settings = {} : null;
  $rootScope.settings.colors === undefined ? $rootScope.settings.colors = {} : null;
  $rootScope.inputs.addMusicPlatform = 'soundcloud';
  $rootScope.inputs.addVideoPlatform = 'youtube';
  $rootScope.inputs.addVideoType = 'video';
  $rootScope.bools.showMedia = false;
  $rootScope.bools.showAbout = false;
  $rootScope.bools.editVideo = -1;
  $rootScope.bools.editMusic = -1;
  $rootScope.loaders.events = false;


  //Set up the icons array

  $rootScope.ionicons = ['ion-ios-arrow-back','ion-ios-arrow-forward','ion-ios-arrow-up','ion-ios-arrow-right','ion-ios-arrow-left','ion-ios-arrow-thin-up','ion-ios-arrow-thin-right','ion-ios-arrow-thin-down','ion-ios-arrow-thin-left','ion-ios-circle-filled','ion-ios-circle-outline','ion-ios-checkmark-empty','ion-ios-checkmark-outline','ion-ios-plus-empty','ion-ios-plus-outline','ion-ios-plus','ion-ios-close-empty','ion-ios-close-outline','ion-ios-close','ion-ios-minus-empty','ion-ios-minus','ion-ios-minus-outline','ion-ios-information-empty','ion-ios-information-outline','ion-ios-information','ion-ios-help-empty','ion-ios-help-outline','ion-ios-help','ion-ios-search','ion-ios-search-strong','ion-ios-star','ion-ios-star-half','ion-ios-star-outline','ion-ios-heart','ion-ios-heart-outline','ion-ios-more','ion-ios-more-outline','ion-ios-home','ion-ios-home-outline','ion-ios-cloud','ion-ios-cloud-outline','ion-ios-cloud-upload','ion-ios-cloud-upload-outline','ion-ios-cloud-download','ion-ios-cloud-download-outline','ion-ios-upload','ion-ios-upload-outline','ion-ios-download','ion-ios-download-outline','ion-ios-refresh','ion-ios-refresh-outline','ion-ios-refresh-empty','ion-ios-reload','ion-ios-loop','ion-ios-bookmarks','ion-ios-bookmarks-outline','ion-ios-book','ion-ios-book-outline','ion-ios-flag-outline','ion-ios-glasses','ion-ios-glasses-outline','ion-ios-browsers','ion-ios-browsers-outline','ion-ios-at-outline','ion-ios-pricetag','ion-ios-pricetag-outline','ion-ios-pricetags','ion-ios-pricetags-outline','ion-ios-cart','ion-ios-cart-outline','ion-ios-chatboxes','ion-ios-chatboxes-outline','ion-ios-chatbubble','ion-ios-chatbubble-outline','ion-ios-cog','ion-ios-cog-outline','ion-ios-gear','ion-ios-gear-outline','ion-ios-settings','ion-ios-toggle','ion-ios-toggle-outline','ion-ios-analytics','ion-ios-analytics-outline','ion-ios-pie','ion-ios-pie-outline','ion-ios-pulse','ion-ios-filing','ion-ios-filing-outline','ion-ios-box','ion-ios-box-outline','ion-ios-compose','ion-ios-compose-outline','ion-ios-trash','ion-ios-trash-outline','ion-ios-copy','ion-ios-copy-outline','ion-ios-email','ion-ios-email-outline','ion-ios-undo','ion-ios-undo-outline','ion-ios-redo','ion-ios-redo-outline','ion-ios-paperplane','ion-ios-paperplane-outline','ion-ios-folder','ion-ios-folder-outline','ion-ios-paper','ion-ios-paper-outline','ion-ios-list','ion-ios-list-outline','ion-ios-world','ion-ios-world-outline','ion-ios-alarm','ion-ios-alarm-outline','ion-ios-speedometer','ion-ios-speedometer-outline','ion-ios-stopwatch','ion-ios-stopwatch-outline','ion-ios-timer','ion-ios-timer-outline','ion-ios-clock','ion-ios-clock-outline','ion-ios-time','ion-ios-time-outline','ion-ios-calendar','ion-ios-calendar-outline','ion-ios-photos','ion-ios-photos-outline','ion-ios-albums','ion-ios-albums-outline','ion-ios-camera','ion-ios-camera-outline','ion-ios-reverse-camera','ion-ios-reverse-camera-outline','ion-ios-eye','ion-ios-eye-outline','ion-ios-bolt','ion-ios-bolt-outline','ion-ios-color-wand','ion-ios-color-wand-outline','ion-ios-color-filter','ion-ios-color-filter-outline','ion-ios-grid-view','ion-ios-grid-view-outline','ion-ios-crop-strong','ion-ios-barcode','ion-ios-barcode-outline','ion-ios-briefcase','ion-ios-briefcase-outline','ion-ios-medkit','ion-ios-medkit-outline','ion-ios-medical','ion-ios-medical-outline','ion-ios-infinite','ion-ios-infinite-outline','ion-ios-calculator','ion-ios-calculator-outline','ion-ios-keypad','ion-ios-keypad-outline','ion-ios-telephone','ion-ios-telephone-outline','ion-ios-location','ion-ios-location-outline','ion-ios-navigate','ion-ios-navigate-outline','ion-ios-locked','ion-ios-locked-outline','ion-ios-unlocked','ion-ios-unlocked-outline','ion-ios-monitor','ion-ios-monitor-outline','ion-ios-printer','ion-ios-printer-outline','ion-ios-game-controller-a','ion-ios-game-controller-a-outline','ion-ios-game-controller-b','ion-ios-game-controller-b-outline','ion-ios-americanfootball','ion-ios-americanfootball-outline','ion-ios-baseball','ion-ios-baseball-outline','ion-ios-basketball','ion-ios-basketball-outline','ion-ios-tennisball','ion-ios-tennisball-outline','ion-ios-football','ion-ios-football-outline','ion-ios-body','ion-ios-body-outline','ion-ios-person','ion-ios-person-outline','ion-ios-personadd','ion-ios-personadd-outline','ion-ios-musical-notes','ion-ios-musical-note','ion-ios-bell','ion-ios-bell-outline','ion-ios-mic','ion-ios-mic-outline','ion-ios-mic-off','ion-ios-volume-high','ion-ios-volume-low','ion-ios-play','ion-ios-play-outline','ion-ios-pause','ion-ios-pause-outline','ion-ios-recording','ion-ios-recording-outline','ion-ios-fastforward','ion-ios-fastforward-outline','ion-ios-rewind','ion-ios-rewind-outline','ion-ios-skipbackward','ion-ios-skipbackward-outline','ion-ios-skipforward','ion-ios-skipforward-outline','ion-ios-shuffle','ion-ios-videocam','ion-ios-videocam-outline','ion-ios-film','ion-ios-film-outline','ion-ios-flask','ion-ios-lightbulb','ion-ios-lightbulb-outline','ion-ios-wineglass','ion-ios-wineglass-outline','ion-ios-pint','ion-ios-pint-outline','ion-ios-nutrition','ion-ios-nutrition-outline','ion-ios-flower','ion-ios-flower-outline','ion-ios-rose','ion-ios-rose-outline','ion-ios-paw','ion-ios-paw-outline','ion-ios-flame','ion-ios-flame-outline','ion-ios-sunny','ion-ios-sunny-outline','ion-ios-partlysunny','ion-ios-partlysunny-outline','ion-ios-cloudy','ion-ios-cloudy-outline','ion-ios-rainy','ion-ios-rainy-outline','ion-ios-thunderstorm','ion-ios-thunderstorm-outline','ion-ios-snowy','ion-ios-moon','ion-ios-moon-outline','ion-ios-cloudy-night','ion-ios-cloudy-night-outline','ion-social-facebook','ion-social-facebook-outline','ion-social-twitter','ion-social-twitter-outline','ion-social-instagram','ion-social-instagram-outline','ion-social-youtube','ion-social-youtube-outline'];
  

  $timeout(function() {
    angular.element(document.querySelector('.spinner-loader')).addClass('spinner-loader-' + $rootScope.settings.colors.primary_color);
  }, 1000);

  $timeout(function() {
    $location.path('tab/social');
    
    $timeout(function() {
      $location.path('tab/events');

      $timeout(function() {
        $location.path('tab/news');

        $timeout(function() {
          $location.path('tab/media');

          $timeout(function() {
          $location.path('tab/settings');

            $timeout(function() {
              $location.path('tab/landing');

              angular.element(document.querySelector('.landing-overlay')).css('opacity',0);

              $timeout(function() {
                angular.element(document.querySelector('.landing-overlay')).remove();
              },600);
            },50);
          },50);
        },50);
      },50);
    },50);
  },50);

  $ionicPlatform.ready(function() {

    //Set the x-app-id
    $rootScope.appId = 'molim';

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
})

.config(function($stateProvider, $urlRouterProvider, $httpProvider, $ionicConfigProvider) {
  var appId = 'molim';

  //Setting up a custom http header
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
          templateUrl: 'templates/tab-events.html'
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
    .state('tab.settings', {
      url: '/settings',
      views: {
        'tab-settings': {
          templateUrl: 'templates/tab-settings.html'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/landing');

})

//Whitelist the URLs for embedding
.filter('trustUrl', function ($sce) {
  return function(url) {
    return $sce.trustAsResourceUrl(url);
  };
});
