doctorApp.controller("accountsController", function ($scope, $state) {

    $scope.text = 'accountsController';
    $scope.showMenu = function () {
        $state.go('menu');
    }
    $scope.addAccount = function () {
        $state.go('addaccount');
    }
    $scope.logout = function () {
        $state.go('login');
    }
}); 