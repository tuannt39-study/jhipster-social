(function() {
    'use strict';

    angular
        .module('jhipsterApp')
        .controller('CountryController', CountryController);

    CountryController.$inject = ['Country'];

    function CountryController(Country) {

        var vm = this;

        vm.countries = [];

        loadAll();

        function loadAll() {
            Country.query(function(result) {
                vm.countries = result;
                vm.searchQuery = null;
            });
        }
    }
})();
