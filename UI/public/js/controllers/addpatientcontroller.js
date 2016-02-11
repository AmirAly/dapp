doctorApp.controller("addpatientController", function ($scope, $state) {

    $scope.text = 'addpatientController';
    $scope.showMenu = function () {
        $state.go('menu');
    }
    $scope.showAccounts = function () {
        $state.go('listpatients');
    }
});