(function() {
    'use strict';
  
    angular
    .module('app.components')
    .controller('addGroup', addGroup);

    addGroup.$inject = ['$scope'];

    function addGroup() {
        $scope = {
            
        };
        $scope.add = add;

        function add() {

        }
        return true;
    }

}());
