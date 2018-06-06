(function() {
    'use strict';

    angular
        .module('jhipsterApp')
        .controller('JobHistoryDetailController', JobHistoryDetailController);

    JobHistoryDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'JobHistory', 'Job', 'Department', 'Employee'];

    function JobHistoryDetailController($scope, $rootScope, $stateParams, previousState, entity, JobHistory, Job, Department, Employee) {
        var vm = this;

        vm.jobHistory = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('jhipsterApp:jobHistoryUpdate', function(event, result) {
            vm.jobHistory = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
