(function() {
    'use strict';

    angular
        .module('jhipsterApp', [
            'ngStorage',
            'tmh.dynamicLocale',
            'pascalprecht.translate',
            'ngResource',
            'ngCookies',
            'ngAria',
            'ngCacheBuster',
            'ngFileUpload',
            'ui.bootstrap',
            'ui.bootstrap.datetimepicker',
            'ui.router',
            'infinite-scroll',
            // jhipster-needle-angularjs-add-module JHipster will add new module here
            'angular-loading-bar',
            'ngAnimate',
            'ngMaterial',
            'ngMessages'
        ])
        .run(run)
        .config(config);

    run.$inject = ['stateHandler', 'translationHandler'];
    config.$inject = ['$mdThemingProvider'];

    function run(stateHandler, translationHandler) {
        stateHandler.initialize();
        translationHandler.initialize();
    }
    function config($mdThemingProvider) {
        $mdThemingProvider.theme('altTheme').primaryPalette('purple');
    }
})();
