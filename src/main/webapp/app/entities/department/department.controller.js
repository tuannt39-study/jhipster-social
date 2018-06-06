(function() {
    'use strict';

    angular
        .module('jhipsterApp')
        .controller('DepartmentController', DepartmentController);

    DepartmentController.$inject = ['Department'];

    function DepartmentController(Department) {

        var vm = this;

        vm.departments = [];

        loadAll();

        function loadAll() {
            Department.query(function(result) {
                vm.departments = result;
                vm.searchQuery = null;
            });
        }
    }
})();
