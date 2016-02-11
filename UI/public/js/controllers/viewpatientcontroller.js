doctorApp.controller("viewpatientController", function ($scope, $state) {

    $scope.text = 'viewpatientController';
    $scope.showMenu = function () {
        $state.go('menu');
    }
});