(function() {
    'use strict';
  
    angular
    .module('app.components')
    .controller('timer', timer);

    timer.$inject = ['$scope'];

    function timer() {
        $scope = {
            
        };
        $scope.add = add;

        function add() {

        }
        return true;
    }

}());
