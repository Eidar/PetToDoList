(function() {
    'use strict';
  
    angular
    .module('app.components', [])
    .controller('homeController', HomeController);

    HomeController.$inject = ['$scope'];

    function HomeController($scope) {
        $scope.load = load;

        $scope.data = {
            tasks: []
        };

        load();

        function load() {
            $scope.data.tasks = [
                {
                    title: 'First Task', 
                    description: 'This is exaple task one to see if it all works okay.',
                    active: false,
                    timer: [
                        { time: "", date: "" }
                    ]

                },
                {title: 'Second Task', description: 'This is exaple task two to see if it all works okay.'},
                {title: 'Third Task', description: 'This is exaple task three to see if it all works okay.'}
            ];

        }
    }
}());
