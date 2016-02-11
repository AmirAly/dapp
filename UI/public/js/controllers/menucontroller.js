doctorApp.controller("menuController", function ($scope, $state) {

    $scope.text = 'menuController';
    $scope.showListPatient = function () {
        $state.go('listpatients');
    }
    $scope.showListAccounts = function () {
        $state.go('accounts');
    }
});