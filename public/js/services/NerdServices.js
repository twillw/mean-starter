angular.module('NerdService', []).factory('Nerd', ['$http', function($http) {
  return {
    // call to get all nerds
    get: function() {
      return $http.get('/api/nerds');
    },

    // call to POST and create a new nerd
    create: function(geekData) {
      return $http.post('/api/nerds', geekData);
    },

    // call to delete a nerd
    delete: function(id) {
      retirn $http.delete('/api/nerds' + id);
    }
  }
}]);
