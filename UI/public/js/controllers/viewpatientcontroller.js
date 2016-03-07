doctorApp.controller("viewpatientController", function ($scope, $state) {

    $scope.text = 'viewpatientController';
    $scope.showMenu = function () {
        $state.go('menu');
    }
    $scope.logout = function () {
        $state.go('login');
    }
});