angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
.service('CityService', function($http) {
        var City_DATA_KEY = 'CityDataKey';

        function getData() {
            var city = window.localStorage.getItem(City_DATA_KEY);

            if (!city || typeof(city) == "undefined") {
                return '河南';
            } else {
                return JSON.parse(city);
            }
        }

        function storeData(city) {
            window.localStorage.setItem(City_DATA_KEY, JSON.stringify(city));
        }

        return {
            getData: getData,
            storeData: storeData
        };

    })
.service('ImgService', function($http) {
        var Img_DATA_KEY = 'ImgDataKey';

        function getData() {
            var city = window.localStorage.getItem(Img_DATA_KEY);

            if (!city || typeof(city) == "undefined") {
                return '';
            } else {
                return JSON.parse(city);
            }
        }

        function storeData(city) {
            window.localStorage.setItem(Img_DATA_KEY, JSON.stringify(city));
        }

        return {
            getData: getData,
            storeData: storeData
        };

    })
