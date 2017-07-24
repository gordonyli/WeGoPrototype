angular.module('starter.controllers', [])

.service('EventService', function() {
  return {
    events: [
      {
        title: 'Music Midtown',
        id: 1,
        description: "The greatest artists around the country come together in one single music festival to bring Atlanta the best music.",
        friendsdown: 3,
        date: "August 11, 2017",
        day: "11",
        month: "AUG",
        year: "2017",
        location: "Piedmont Park",
        distance: "17 miles away",
        background: "http://wallpapersdsc.net/wp-content/uploads/2016/10/John-Mayer-Widescreen.jpg",
      },
      {
        title: 'Taste of Atlanta',
        id: 2,
        description: "yummy food",
        friendsdown: 17,
        date: "September 25, 2017",
        day: "25",
        month: "SEP",
        year: "2017",
        location: "Tech Square",
        distance: "0.6 miles",
        background: "https://c2.staticflickr.com/6/5736/23295852105_9c8b104dca_b.jpg"
      },
      {
        title: 'HackGT',
        id: 3,
        description: "hack gt",
        friendsdown: 12,
        date: "October 5, 2017",
        day: "5",
        month: "OCT",
        year: "2017",
        location: "College of Computing at GT",
        distance: "0.1 miles away",
        background: "https://4.bp.blogspot.com/-pigPfRWS3Sw/VWX-feGd7II/AAAAAAABjLE/K3JemRkjclI/s0/Coding_with_Style_wallpaper.jpg"
      },
      {
        title: 'Pride Parade',
        id: 4,
        description: "naked people",
        friendsdown: 21,
        date: "September 22, 2017",
        location: "Gasworks Park",
        day: "22",
        month: "SEP",
        year: "2017",
        distance: "1.1 miles away",
        background: "http://www.tbo.com/storyimage/TB/20160326/ARTICLE/160329365/AR/0/AR-160329365.jpg"
      },
      {
        title: 'TED Talk',
        id: 5,
        description: "speeches",
        friendsdown: 3,
        date: "July 30, 2017",
        day: "30",
        month: "JUL",
        year: "2017",
        location: "Scheller College of Business",
        distance: "1.9 miles away",
        background: "http://www.newstatesman.com/sites/all/themes/creative-responsive-theme/images/new_statesman_events.jpg"
      },
      {
        title: 'Oasis Pool Party',
        id: 6,
        description: "water ballons",
        friendsdown: 12,
        date: "December 1, 2017",
        day: "1",
        month: "DEC",
        year: "2017",
        location: "Bruck's mom house",
        distance: "0.5 miles away",
        background: "http://www.arizonagrandresort.com/wp-content/uploads/2014/08/Gallery_OasisEvent.jpg"
      }
    ],
    getEvents: function () {
      return this.events;
    },
    getEvent: function (eventId) {
      for (i = 0; i < this.events.length; i++) {
        if (this.events[i].id == eventId) {
          return this.events[i];
        }
      }
    }
  }
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('EventsCtrl', function($scope, EventService) {
  $scope.events = EventService.getEvents();

  $scope.deleteItem = function (item) {
    $scope.events.splice($scope.events.indexOf(item), 1);
  };
})

.controller('EventCtrl', function($scope, $stateParams, EventService) {
  $scope.eventId = $stateParams.eventId;
  $scope.event = EventService.getEvent($scope.eventId);
})

.controller("DownCtrl", function($scope, $stateParams, EventService) {
  $scope.events = EventService.getEvents();
});
