angular.module('GeekService', []).factory('Geek', ['$http', function($http) {
  return {
    // call to get all geeks
    get: function() {
      return $http.get('/api/geeks');
    },

    // call to POST and create a new geek
    create: function(geekData) {
      return $http.post('/api/geeks', geekData);
    },

    // call to delete a geek
    delete: function(id) {
      retirn $http.delete('/api/geeks' + id);
    }
  }
}]);
