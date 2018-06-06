(function() {
    'use strict';

    angular
        .module('jhipsterApp')
        .controller('RegionDetailController', RegionDetailController);

    RegionDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Region'];

    function RegionDetailController($scope, $rootScope, $stateParams, previousState, entity, Region) {
        var vm = this;

        vm.region = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('jhipsterApp:regionUpdate', function(event, result) {
            vm.region = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
