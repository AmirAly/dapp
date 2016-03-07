doctorApp.controller("listpatientsController", function ($scope, $state) {

    $scope.text = 'listpatientsController';
    $scope.showMenu = function () {
        $state.go('menu');
    }
    $scope.getPatientDetails = function () {
        $state.go('viewpatient');
    }
    $scope.addPatient = function () {
        $state.go('addpatient');
    }
    $scope.logout = function () {
        $state.go('login');
    }
});