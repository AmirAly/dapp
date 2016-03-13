doctorApp.controller("addaccountController", function ($scope, $state) {

    $scope.email = 'assistant@mail.com';

    $scope.addAccount = function (form) {
        angular.forEach($scope.frmAddAccount.$error.required, function (field) {
            field.$setDirty();
        });

        if (form.$valid) {
            $scope.frmAddAccount.$setPristine();
            $scope.frmAddAccount.$setUntouched();
            $scope.frmAddAccount.$setValidity();
            $state.go('listpatients');
        }
    }

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