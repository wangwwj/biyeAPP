// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova','starter.controllers','starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    cache: false,//不缓存
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

    .state('app.home', {
      url: '/home',
      cache: false,//不缓存
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })
    
    .state('app.user', {
      url: '/user',
      cache: false,//不缓存
      views: {
        'menuContent': {
          templateUrl: 'templates/user.html',
          controller: 'UserCtrl'
        }
      }
    })

    .state('app.lvyou', {
      url: '/lvyou',
      cache: false,//不缓存
      views: {
        'menuContent': {
          templateUrl: 'templates/lvyou.html',
          controller: 'LvyouCtrl'
        }
      }
    })

    .state('app.shouc', {
      url: '/shouc',
      cache: false,//不缓存
      views: {
        'menuContent': {
          templateUrl: 'templates/shouc.html',
          controller: 'ShoucCtrl'
        }
      }
    })

    .state('app.lishi', {
      url: '/lishi',
      cache: false,//不缓存
      views: {
        'menuContent': {
          templateUrl: 'templates/lishi.html',
          controller: 'LishiCtrl'
        }
      }
    })

    .state('app.listdata', {
      url: '/listdata?id&title&city&eat',
      cache: false,//不缓存
      views: {
        'menuContent': {
          templateUrl: 'templates/listdata.html',
          controller: 'ListdataCtrl'
        }
      }
    })
    .state('app.baidu', {
      url: '/baidu?src&title',
      cache: false,//不缓存
      views: {
        'menuContent': {
          templateUrl: 'templates/baidu.html',
          controller: 'BaiduCtrl'
        }
      }
    })

    .state('app.jinqi', {
      url: '/jinqi',
      cache: false,//不缓存
      views: {
        'menuContent': {
          templateUrl: 'templates/jinqi.html',
          controller: 'JinqiCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
