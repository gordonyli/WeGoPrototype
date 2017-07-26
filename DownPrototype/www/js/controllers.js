angular.module('starter.controllers', [])

.service('EventService', function() {
  return {
    users: [
    {
      name: "Peter Wayne",
      picture: "http://www.colemanphotographix.com/wp-content/uploads/MensHeadshot-0016.jpg",
      did: "is down for Music Midtown"
    },
    {
      name: "Lily Johnson",
      picture: "https://digital-photography-school.com/wp-content/uploads/2016/02/Headshot-Photography-London-1052.jpeg",
      did: "went to Taste of Atlanta"
    },
    {
      name: "Sara O'Neill",
      picture: "https://s-media-cache-ak0.pinimg.com/originals/e7/ca/b7/e7cab7dcff08b0dfe5b4fd065366dd5c.jpg",
      did: "posted in HackGT"
    },
    {
      name: "Joseph Hopper",
      picture: "http://www.mackephotography.com/headshots/men/31_medium.jpg",
      did: "is down for Music Midtown"
    },
    {
      name: "Chandler Smith",
      picture: "https://s-media-cache-ak0.pinimg.com/236x/b7/86/f3/b786f3c78b69f2a7f41e4e008f682eb6--headshot-photography-men-photography.jpg",
      did: "is down for Oasis Pool Party"
    },
    {
      name: "Becky Beckerson",
      picture: "https://www.headshotsnyc.com/wp-content/uploads/galleries/post-13/05-Location-headshot-of-smiling-black-woman-with-long-afro-on-NYC-street-(Shamara-Loraine).jpg",
      did: "liked HackGT's picture"
    }
  ],

    events: [
      {
        title: 'Music Midtown',
        id: 1,
        description: "The greatest artists around the country come together in one single music festival to bring Atlanta the best music.",
        friendsdown: 3,
        date: "August 11, 2017",
        // day: "11",
        // month: "AUG",
        // year: "2017",
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
        // day: "25",
        // month: "SEP",
        // year: "2017",
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
        // day: "5",
        // month: "OCT",
        // year: "2017",
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
        // day: "22",
        // month: "SEP",
        // year: "2017",
        distance: "1.1 miles away",
        background: "http://www.tbo.com/storyimage/TB/20160326/ARTICLE/160329365/AR/0/AR-160329365.jpg"
      },
      {
        title: 'TED Talk',
        id: 5,
        description: "speeches",
        friendsdown: 3,
        date: "July 30, 2017",
        // day: "30",
        // month: "JUL",
        // year: "2017",
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
        // day: "1",
        // month: "DEC",
        // year: "2017",
        location: "Bruck's mom house",
        distance: "0.5 miles away",
        background: "http://www.arizonagrandresort.com/wp-content/uploads/2014/08/Gallery_OasisEvent.jpg"
      }
    ],
    downs: [],

    pushDownEvent: function(event) {
      this.downs.push(event);
    },

    getDownEvents: function () {
      return this.downs;
    },

    getEvents: function () {
      return this.events;
    },
    getEvent: function (eventId) {
      for (i = 0; i < this.events.length; i++) {
        if (this.events[i].id == eventId) {
          return this.events[i];
        }
      }
    },
    getDay: function(date) {
      return date.split(" ")[1].replace(",", "");
    },
    getMonth: function (date) {
      month = date.split(" ")[0];
      switch(month) {
          case "January": return "JAN";
          case "February": return "FEB";
          case "March": return "MAR";
          case "April": return "APR";
          case "May": return "MAY";
          case "June": return "JUN";
          case "July": return "JUL";
          case "August": return "AUG";
          case "September": return "SEP";
          case "October": return "OCT";
          case "November": return "NOV";
          case "December": return "DEC";
      }
    },
    getUsers: function () {
      return this.users;
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

.controller('EventCtrl', function($scope, $ionicPopup, $stateParams, EventService) {
  $scope.eventId = $stateParams.eventId;
  $scope.event = EventService.getEvent($scope.eventId);
  $scope.month = EventService.getMonth($scope.event.date);
  $scope.day = EventService.getDay($scope.event.date);
  $scope.pushDownEvent = function(event) {
    var alertPopup = $ionicPopup.alert({
      title: "You're Down!",
      template: event.title + " added!"
    });
    alertPopup.then(function(res) {
      console.log('Thank you for not eating my delicious ice cream cone');
    });
    EventService.pushDownEvent(event);
  }
})

.controller("DownCtrl", function($scope, $stateParams, EventService, $location) {
  $scope.events = EventService.getDownEvents();
  $scope.changeView = function(event){
    console.log("/events/" + event.id);
      $location.path("/events/"+ event.id); // path not hash
  };
  $scope.goToEvent = function(event) {
    return event.id;
  };

})

.controller("FriendsCtrl", function($scope, EventService) {
  $scope.users = EventService.getUsers();
});
