angular.module('main.controller', [])

.controller('MainController',function($scope, $rootScope, RESTFunctions, $location, $timeout, $sce, InfoHandling, $ionicPopover, $ionicLoading) {
	$rootScope.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJ2ZXJ0dmVydCIsIl9pZCI6MCwiaWF0IjoxNDQyNDAyNjMyfQ.Xpk8BiF7KbsA1Kh9wSj57YQpheR6TLGZQWYK7-nO2m0';

	//Open a link in phone browser
	$rootScope.openLink = function (templink) {var ref = window.open(templink, "_system");};

	//Go to a specific view
	$rootScope.goTo = function(path) {
		$location.path(path);
	};

	//Grab the settings
	$rootScope.getSettings = function() {

		//Start the loader

		$rootScope.loaders.settings = true;

		//Get the settings
		RESTFunctions.get({
			url:'settings',
			callback: function(response) {

				//Stop the loader
				$rootScope.loaders.settings = false;

				if (!response.error) {
					//Store the event list in a model
					$rootScope.settings = response.data.settings;
				} else {

				}
			}
		});
	};
	$rootScope.getSettings();

	//Set the active color type
	$rootScope.setColor = function(index) {
		if (index === 0) {
			$rootScope.bools.activeColor = $rootScope.settings.colors.primary_color;
			$rootScope.bools.activeColorType = 0;
		} else if (index === 2) {
			$rootScope.bools.activeColor = $rootScope.settings.colors.text_color;
			$rootScope.bools.activeColorType = 2;
		}
	};

	//Update color
	$rootScope.updateColor = function() {
		if ($rootScope.bools.activeColorType === 0) {
			$rootScope.settings.colors.primary_color = $rootScope.bools.activeColor;
		} else if ($rootScope.bools.activeColorType === 2) {
			$rootScope.settings.colors.text_color = $rootScope.bools.activeColor;
		}
	};

	//Update settings
	$rootScope.updateSettings = function() {
		$rootScope.loaders.settings = true;
		RESTFunctions.post({
			url:'settings',
			data:'token=' + $rootScope.token + '&primary_color=' + $rootScope.settings.colors.primary_color + '&text_color=' + $rootScope.settings.colors.text_color,
			callback: function(response) {
				$rootScope.loaders.settings = false;
				if (!response.error) {
					$rootScope.getSettings();
					$ionicLoading.show({ template: 'Color settings updated', noBackdrop: true, duration: 2000 });
				}
			}
		});
	};

	setInterval(function(){console.log($rootScope.bools.editNews)},500);


	//Set the active icon type
	$rootScope.setIcon = function(index) {
		$rootScope.bools.activeIcon = index;
	};

	//Update icon
	$rootScope.updateIcon = function() {
		switch($rootScope.bools.activeIcon){
			case 0:
				$rootScope.settings.icons.tab_1 = $rootScope.ionicons[$rootScope.bools.activePickIcon];
				break;
			case 1:
				$rootScope.settings.icons.tab_2 = $rootScope.ionicons[$rootScope.bools.activePickIcon];
				break;
			case 2:
				$rootScope.settings.icons.tab_3 = $rootScope.ionicons[$rootScope.bools.activePickIcon];
				break;
			case 3:
				$rootScope.settings.icons.tab_4 = $rootScope.ionicons[$rootScope.bools.activePickIcon];
				break;
			case 4:
				$rootScope.settings.icons.subtab_1 = $rootScope.ionicons[$rootScope.bools.activePickIcon];
				break;
			case 5:
				$rootScope.settings.icons.subtab_2 = $rootScope.ionicons[$rootScope.bools.activePickIcon];
				break;
			case 6:
				$rootScope.settings.icons.subtab_3 = $rootScope.ionicons[$rootScope.bools.activePickIcon];
				break;
			case 7:
				$rootScope.settings.icons.tab_5 = $rootScope.ionicons[$rootScope.bools.activePickIcon];
				break;
			case 8:
				$rootScope.settings.icons.tab_6 = $rootScope.ionicons[$rootScope.bools.activePickIcon];
				break;
			case 9:
				$rootScope.settings.icons.edit = $rootScope.ionicons[$rootScope.bools.activePickIcon];
				break;
			case 10:
				$rootScope.settings.icons.cancel = $rootScope.ionicons[$rootScope.bools.activePickIcon];
				break;
			case 11:
				$rootScope.settings.icons.delete = $rootScope.ionicons[$rootScope.bools.activePickIcon];
				break;
			case 12:
				$rootScope.settings.icons.finish = $rootScope.ionicons[$rootScope.bools.activePickIcon];
				break;
			case 13:
				$rootScope.settings.icons.about = $rootScope.ionicons[$rootScope.bools.activePickIcon];
				break;
			case 14:
				$rootScope.settings.icons.title_edit = $rootScope.ionicons[$rootScope.bools.activePickIcon];
				break;
			case 15:
				$rootScope.settings.icons.date = $rootScope.ionicons[$rootScope.bools.activePickIcon];
				break;
			case 16:
				$rootScope.settings.icons.time = $rootScope.ionicons[$rootScope.bools.activePickIcon];
				break;
			case 17:
				$rootScope.settings.icons.city = $rootScope.ionicons[$rootScope.bools.activePickIcon];
				break;
			case 18:
				$rootScope.settings.icons.venue = $rootScope.ionicons[$rootScope.bools.activePickIcon];
				break;
			case 19:
				$rootScope.settings.icons.country = $rootScope.ionicons[$rootScope.bools.activePickIcon];
				break;
			case 20:
				$rootScope.settings.icons.state = $rootScope.ionicons[$rootScope.bools.activePickIcon];
				break;
			case 21:
				$rootScope.settings.icons.zip = $rootScope.ionicons[$rootScope.bools.activePickIcon];
				break;
			case 22:
				$rootScope.settings.icons.phone = $rootScope.ionicons[$rootScope.bools.activePickIcon];
				break;
			case 23:
				$rootScope.settings.icons.website = $rootScope.ionicons[$rootScope.bools.activePickIcon];
				break;
			case 24:
				$rootScope.settings.icons.facebook = $rootScope.ionicons[$rootScope.bools.activePickIcon];
				break;
			case 25:
				$rootScope.settings.icons.twitter = $rootScope.ionicons[$rootScope.bools.activePickIcon];
				break;
			case 26:
				$rootScope.settings.icons.instagram = $rootScope.ionicons[$rootScope.bools.activePickIcon];
				break;
			case 27:
				$rootScope.settings.icons.youtube = $rootScope.ionicons[$rootScope.bools.activePickIcon];
				break;
			case 28:
				$rootScope.settings.icons.email = $rootScope.ionicons[$rootScope.bools.activePickIcon];
				break;
			case 29:
				$rootScope.settings.icons.create = $rootScope.ionicons[$rootScope.bools.activePickIcon];
				break;
			case 30:
				$rootScope.settings.icons.app_name = $rootScope.ionicons[$rootScope.bools.activePickIcon];
				break;
		}
	};

	//Update settings-icon
	$rootScope.updateIconSettings = function() {
		$rootScope.loaders.settings = true;
		RESTFunctions.post({
			url:'settings-icons',
			data:'token=' + $rootScope.token + '&tab_1=' + $rootScope.settings.icons.tab_1 + '&tab_2=' + $rootScope.settings.icons.tab_2 + '&tab_3=' + $rootScope.settings.icons.tab_3 + '&tab_4=' + $rootScope.settings.icons.tab_4 + '&subtab_1=' + $rootScope.settings.icons.subtab_1 + '&subtab_2=' + $rootScope.settings.icons.subtab_2 + '&subtab_3=' + $rootScope.settings.icons.subtab_3 + '&tab_5=' + $rootScope.settings.icons.tab_5 + '&tab_6=' + $rootScope.settings.icons.tab_6 + '&edit=' + $rootScope.settings.icons.edit + '&cancel=' + $rootScope.settings.icons.cancel + '&delete=' + $rootScope.settings.icons.delete + '&finish=' + $rootScope.settings.icons.finish + '&about=' + $rootScope.settings.icons.about + '&title_edit=' + $rootScope.settings.icons.title_edit + '&date=' + $rootScope.settings.icons.date + '&time=' + $rootScope.settings.icons.time + '&city=' + $rootScope.settings.icons.city + '&venue=' + $rootScope.settings.icons.venue + '&country=' + $rootScope.settings.icons.country + '&state=' + $rootScope.settings.icons.state + '&zip=' + $rootScope.settings.icons.zip + '&phone=' + $rootScope.settings.icons.phone + '&website=' + $rootScope.settings.icons.website + '&facebook=' + $rootScope.settings.icons.facebook + '&twitter=' + $rootScope.settings.icons.twitter + '&instagram=' + $rootScope.settings.icons.instagram + '&youtube=' + $rootScope.settings.icons.youtube + '&email=' + $rootScope.settings.icons.email + '&create=' + $rootScope.settings.icons.create,
			callback: function(response) {
				$rootScope.loaders.settings = false;
				if (!response.error) {
					$rootScope.getSettings();
					$ionicLoading.show({ template: 'Icon settings updated', noBackdrop: true, duration: 2000 });
				}
			}
		});
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

				$ionicLoading.show({ template: 'About information updated', noBackdrop: true, duration: 2000 });
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
	$rootScope.updateSocial = function() {
		$rootScope.loaders.social = true;
		RESTFunctions.post({
			url:'contact',
			data:'token=' + $rootScope.token + '&twitter=' + $rootScope.inputs.socialTwitter + '&instagram=' + $rootScope.inputs.socialInstagram + '&youtube=' + $rootScope.inputs.socialYoutube + '&facebook=' + $rootScope.inputs.socialFacebook + '&city=' + $rootScope.inputs.socialCity + '&state=' + $rootScope.inputs.socialState + '&country=' + $rootScope.inputs.socialCountry + '&phone=' + $rootScope.inputs.socialPhone + '&mail=' + $rootScope.inputs.socialMail + '&name=' + $rootScope.inputs.socialName + '&postal_code=' + $rootScope.inputs.socialZip + '&website=' + $rootScope.inputs.socialWebsite,
			callback: function(response) {
				$rootScope.loaders.social = false;

				$rootScope.getSocial();

				$ionicLoading.show({ template: 'Social information updated', noBackdrop: true, duration: 2000 });
			}
		});
	};

	//Grab the news
	$rootScope.getNews = function() {
		$rootScope.loaders.news = true;
		RESTFunctions.get({
			url:'news',
			callback: function(response) {
				$rootScope.loaders.news = false;
				$rootScope.data.news = response.data;
				$rootScope.inputs.news = response.data;
			}
		});
	};
	$rootScope.getNews();

	//Create a new news item
	$rootScope.postNews = function() {
		$rootScope.loaders.news = true;
		RESTFunctions.post({
			url:'news',
			data:'token=' + $rootScope.token + '&title=' + $rootScope.inputs.addNewsTitle + '&body=' + $rootScope.inputs.addNewsBody + '&url=' + $rootScope.inputs.addNewsUrl,
			callback: function(response) {
				$rootScope.loaders.news = false;
				console.log(response);
				$rootScope.getNews();
				$ionicLoading.show({ template: 'News item created', noBackdrop: true, duration: 2000 });
			}
		});
	};

	//Update a news item
	$rootScope.updateNews = function(index) {
		$rootScope.loaders.news = true;
		RESTFunctions.post({
			url:'news/' + $rootScope.data.news[index]._id,
			data:'token=' + $rootScope.token + '&title=' + $rootScope.inputs.news[index].title + '&body=' + $rootScope.inputs.news[index].body + '&url=' + $rootScope.inputs.news[index].url,
			callback: function(response) {
				console.log(response);
				$rootScope.loaders.news = false;
				$rootScope.getNews();
				$ionicLoading.show({ template: 'News item updated', noBackdrop: true, duration: 2000 });
			}
		})
	};

	//Delete the news item
	$rootScope.deleteNews = function(index) {
		$rootScope.loaders.news = true;
		RESTFunctions.delete({
			url:'news/' + $rootScope.data.news[index]._id,
			callback: function(response) {
				console.log(response);
				$rootScope.loaders.news = false;
				$rootScope.getNews();
				$ionicLoading.show({ template: 'News item deleted', noBackdrop: true, duration: 2000 });
			}
		})
	};

	//Grab the music
	$rootScope.getMusic = function() {
		$rootScope.loaders.media = true;
		RESTFunctions.get({
			url:'media/music',
			callback: function(response) {
				$rootScope.loaders.media = false;
				$rootScope.data.media.music = response.data;
				$rootScope.inputs.media.music = response.data;
				
				for (x in $rootScope.data.media.music) {
					$rootScope.data.media.music[x].media_platform === 'soundcloud' ? $rootScope.sce.music.push('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/!SPL!&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true') : $rootScope.sce.music.push('https://player.vimeo.com/video/!SPL!');
				}
			}
		});
	};

	//Update the music item
	$rootScope.updateMusic = function(index) {
		$rootScope.loaders.media = true;
		RESTFunctions.post({
			url:'media/music/' + $rootScope.data.media.music[index]._id,
			data:'token=' + $rootScope.token + '&media_id=' + $rootScope.inputs.media.music[index].media_id + '&media_platform=' + $rootScope.inputs.media.music[index].media_platform + '&media_type=1',
			callback: function(response) {
				$rootScope.loaders.media = false;
				$rootScope.getMusic();
				$ionicLoading.show({ template: 'Music item updated', noBackdrop: true, duration: 2000 });
			}
		})
	};

	//Delete the music item
	$rootScope.deleteMusic = function(index) {
		$rootScope.loaders.media = true;
		RESTFunctions.delete({
			url:'media/music/' + $rootScope.data.media.music[index]._id,
			callback: function(response) {
				console.log(response);
				$rootScope.loaders.media = false;
				$rootScope.getMusic();

				$ionicLoading.show({ template: 'Music item deleted', noBackdrop: true, duration: 2000 });
			}
		})
	};

	//Create a new music item
	$rootScope.postMusic = function() {
		$rootScope.loaders.media = true;
		RESTFunctions.post({
			url:'media/music',
			data:'token=' + $rootScope.token + '&media_id=' + $rootScope.inputs.addMusicId + '&media_platform=' + $rootScope.inputs.addMusicPlatform + '&media_type=1',
			callback: function(response) {
				$rootScope.loaders.media = false;
				$rootScope.inputs.addMusicId = undefined;
				$rootScope.inputs.addMusicPlatform = undefined;
				$rootScope.getMusic();

				$ionicLoading.show({ template: 'Music item created', noBackdrop: true, duration: 2000 });
			}
		})
	};

	//Grab the videos
	$rootScope.getVideos = function() {
		$rootScope.loaders.media = true;
		RESTFunctions.get({
			url:'media/videos',
			callback: function(response) {
				$rootScope.loaders.media = false;
				$rootScope.data.media.videos = response.data;
				$rootScope.inputs.media.videos = response.data;
				$rootScope.sce.videos = [];
				
				for (x in $rootScope.data.media.videos) {
					switch ($rootScope.data.media.videos[x].media_platform) {
						case 'youtube':
							if ($rootScope.data.media.videos[x].media_type === 'video') {
								$rootScope.sce.videos.push('https://www.youtube.com/embed/');
							} else if ($rootScope.data.media.videos[x].media_type === 'playlist') {
								$rootScope.sce.videos.push('https://www.youtube.com/embed/videoseries?list=');
							}
							break;
						case 'vimeo':
							$rootScope.sce.videos.push('https://player.vimeo.com/video/');
							break;
					}
				}
			}
		});
	};

	//Create a new video item
	$rootScope.postVideo = function() {
		$rootScope.loaders.media = true;
		RESTFunctions.post({
			url:'media/videos',
			data:'token=' + $rootScope.token + '&media_id=' + $rootScope.inputs.addVideoId + '&media_platform=' + $rootScope.inputs.addVideoPlatform + '&media_type=' + $rootScope.inputs.addVideoType,
			callback: function(response) {
				$rootScope.loaders.media = false;
				$rootScope.inputs.addVideoId = undefined;
				$rootScope.inputs.addVideoPlatform = undefined;
				$rootScope.inputs.addVideoType = undefined;
				$rootScope.getVideos();

				$ionicLoading.show({ template: 'Video item created', noBackdrop: true, duration: 2000 });
			}
		})
	};

	//Update the video item
	$rootScope.updateVideo = function(index) {
		$rootScope.loaders.media = true;
		RESTFunctions.post({
			url:'media/videos/' + $rootScope.data.media.videos[index]._id,
			data:'token=' + $rootScope.token + '&media_id=' + $rootScope.inputs.media.videos[index].media_id + '&media_type=' + $rootScope.inputs.media.videos[index].media_type + '&media_platform=' + $rootScope.inputs.media.videos[index].media_platform,
			callback: function(response) {
				$rootScope.loaders.media = false;
				$rootScope.getVideos();

				$ionicLoading.show({ template: 'Video item updated', noBackdrop: true, duration: 2000 });
			}
		})
	};

	//Delete the video item
	$rootScope.deleteVideo = function(index) {
		$rootScope.loaders.media = true;
		RESTFunctions.delete({
			url:'media/videos/' + $rootScope.data.media.videos[index]._id,
			callback: function(response) {
				$rootScope.loaders.media = false;
				$rootScope.getVideos();

				$ionicLoading.show({ template: 'Video item deleted', noBackdrop: true, duration: 2000 });
			}
		})
	};

	//Grab the media
	$rootScope.getMedia = function() {
		$rootScope.getMusic();
		$rootScope.getVideos();
	};
	$rootScope.getMedia();
})
