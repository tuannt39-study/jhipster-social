(function() {
    'use strict';

    angular
        .module('jhipsterApp')
        .controller('RegionController', RegionController);

    RegionController.$inject = ['Region'];

    function RegionController(Region) {

        var vm = this;

        vm.regions = [];

        loadAll();

        function loadAll() {
            Region.query(function(result) {
                vm.regions = result;
                vm.searchQuery = null;
            });
        }
    }
})();
