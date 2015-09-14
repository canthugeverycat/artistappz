angular.module('main.controller', [])

.controller('MainController',function($scope, $rootScope, RESTFunctions, $location, $timeout, $sce, InfoHandling, $ionicPopover) {
	$rootScope.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJ2ZXJ0dmVydCIsIl9pZCI6MCwiaWF0IjoxNDQxMTg3MzEzfQ.HvuWXiVixIenqIUOIh1ghr8sFYIblnJxZv6s1YR5OXk';

	//Open a link in phone browser
	$rootScope.openLink = function (templink) {var ref = window.open(templink, "_system");};

	//Go to a specific view
	$rootScope.goTo = function(path) {
		$location.path(path);
	};

	//Grab the list of events
	$rootScope.getEvents = function() {

		//Start the loader

		$rootScope.loaders.events = true;

		//Get the event list
		RESTFunctions.get({
			url:'events',
			callback: function(response) {

				//Stop the loader
				$rootScope.loaders.events = false;

				if (!response.error) {
					//Store the event list in a model
					$rootScope.data.events = response.data;
				} else {

				}
			}
		});
	};
	$rootScope.getEvents();

	//Get a specific event
	$rootScope.getEventDetails = function(event, animate) {

		//Store the event in a model
		$rootScope.data.selectedEvent = event;

		if (animate === true) {
			angular.element(document.querySelector('.container-featured-event')).addClass('active');

			$timeout(function() {
				angular.element(document.querySelector('.container-featured-event')).removeClass('active');
				$location.path('tab/event-details');
			},500)
		} else {
			//Go to event-details screen
			$location.path('tab/event-details');
		}
	};

	//Grab the about info
	$rootScope.getAbout = function() {
		RESTFunctions.get({
			url:'about',
			callback: function(response) {
				$rootScope.data.about = response.data.about;

				$rootScope.inputs.aboutTitle = $rootScope.data.about.title;
				$rootScope.inputs.aboutBody = $rootScope.data.about.body;
			}
		})
	};
	$rootScope.getAbout();

	//Post new data to about info
	$rootScope.postAbout = function() {
		$rootScope.bools.editAbout = false;
		$rootScope.loaders.landing = true;
		RESTFunctions.post({
			url:'about',
			data:'token=' + $rootScope.token + '&title=' + $rootScope.inputs.aboutTitle + '&body=' + $rootScope.inputs.aboutBody,
			callback: function(response) {
				$rootScope.loaders.landing = false;
				
				$rootScope.getAbout();
			}
		});
	};



	//Grab the contact info
	$rootScope.getSocial = function() {
		RESTFunctions.get({
			url:'contact',
			callback: function(response) {
				$rootScope.data.contact = response.data.contact;

				$rootScope.inputs.socialName = $rootScope.data.contact.info.name;
				$rootScope.inputs.socialCity = $rootScope.data.contact.info.city;
				$rootScope.inputs.socialState = $rootScope.data.contact.info.state;
				$rootScope.inputs.socialCountry = $rootScope.data.contact.info.country;
				$rootScope.inputs.socialPhone = $rootScope.data.contact.info.phone;
				$rootScope.inputs.socialMail = $rootScope.data.contact.info.mail;
				$rootScope.inputs.socialZip = $rootScope.data.contact.info.postal_code;
				$rootScope.inputs.socialWebsite = $rootScope.data.contact.info.website;
				$rootScope.inputs.socialTwitter = $rootScope.data.contact.social.twitter;
				$rootScope.inputs.socialFacebook = $rootScope.data.contact.social.facebook;
				$rootScope.inputs.socialInstagram = $rootScope.data.contact.social.instagram;
				$rootScope.inputs.socialYoutube = $rootScope.data.contact.social.youtube;
			}
		})
	};
	$rootScope.getSocial();

	//Update the contact info
	$rootScope.postSocial = function() {
		$rootScope.loaders.social = true;
		RESTFunctions.post({
			url:'contact',
			data:'token=' + $rootScope.token + '&twitter=' + $rootScope.inputs.socialTwitter + '&instagram=' + $rootScope.inputs.socialInstagram + '&youtube=' + $rootScope.inputs.socialYoutube + '&facebook=' + $rootScope.inputs.socialFacebook + '&city=' + $rootScope.inputs.socialCity + '&state=' + $rootScope.inputs.socialState + '&country=' + $rootScope.inputs.socialCountry + '&phone=' + $rootScope.inputs.socialPhone + '&mail=' + $rootScope.inputs.socialMail + '&name=' + $rootScope.inputs.socialName + '&postal_code=' + $rootScope.inputs.socialZip + '&website=' + $rootScope.inputs.socialWebsite,
			callback: function(response) {
				$rootScope.loaders.social = false;

				$rootScope.getSocial();
			}
		});
	};

	//Grab the news
	$rootScope.getNews = function() {
		RESTFunctions.get({
			url:'news',
			callback: function(response) {
				$rootScope.data.news = response.data;
			}
		});
	};
	$rootScope.getNews();

	//Grab the music
	$rootScope.getMusic = function() {
		RESTFunctions.get({
			url:'media/music',
			callback: function(response) {
				$rootScope.data.media.music = response.data;
				
				for (x in $rootScope.data.media.music) {
					$rootScope.data.media.music[x].media_id = $sce.trustAsResourceUrl('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + $rootScope.data.media.music[x].media_id + '&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true');
				}
			}
		});
	};

	//Grab the videos
	$rootScope.getVideos = function() {
		RESTFunctions.get({
			url:'media/videos',
			callback: function(response) {
				$rootScope.data.media.videos = response.data;
				
				for (x in $rootScope.data.media.videos) {
					$rootScope.data.media.videos[x].media_id = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + $rootScope.data.media.videos[x].media_id);
				}	
			}
		});
	};

	//Grab the media
	$rootScope.getMedia = function() {
		$rootScope.getMusic();
		$rootScope.getVideos();
	};
	$rootScope.getMedia();
})
