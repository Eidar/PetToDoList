(function() {
    'use strict';
  
    angular
    .module('app.components')
    .controller('stats', stats);

    stats.$inject = ['$scope'];

    function stats() {
        $scope = {
            
        };
        $scope.add = add;

        function add() {

        }
        return true;
    }

}());
