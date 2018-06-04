(function() {
    'use strict';

    angular
        .module('jhipsterApp')
        .controller('ActivationController', ActivationController);

    ActivationController.$inject = ['$stateParams', 'Auth'];

    function ActivationController ($stateParams, Auth) {
        var vm = this;
        vm.login = login;

        Auth.activateAccount({key: $stateParams.key}).then(function () {
            vm.error = null;
            vm.success = 'OK';
        }).catch(function () {
            vm.success = null;
            vm.error = 'ERROR';
        });
        function login () {
            $state.go('login');
        }
    }
})();
