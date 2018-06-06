(function() {
    'use strict';

    angular
        .module('jhipsterApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
            .state('material', {
                parent: 'entity',
                url: '/material',
                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'global.titlema'
                },
                views: {
                    'content@': {
                        templateUrl: 'app/entities/material/materials.html',
                        controller: 'MaterialController',
                        controllerAs: 'vm'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('home');
                        $translatePartialLoader.addPart('global');
                        return $translate.refresh();
                    }]
                }
            });
    }

})();
