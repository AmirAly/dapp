doctorApp.controller("addaccountController", function ($scope, $state) {

    $scope.text = 'addaccountController';
    $scope.showMenu = function () {
        $state.go('menu');
    }
    $scope.showAccounts = function () {
        $state.go('accounts');
    }
    $scope.logout = function () {
        $state.go('login');
    }
});