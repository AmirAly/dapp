doctorApp.controller("viewpatientController", function ($scope, $state) {

    $scope.text = 'viewpatientController';
    $scope.showMenu = function () {
        $state.go('menu');
    }
    $scope.logout = function () {
        $state.go('login');
    }
    $scope.addNote = false;
    $scope.addNewNote = function addNote(form) {
        angular.forEach($scope.frmAddNote.$error.required, function (field) {
            field.$setDirty();
        });

        if (form.$valid) {
            console.log($scope.frmAddNote.note);
            $scope.frmAddNote.note = '';
            $scope.frmAddNote.$setPristine();
            $scope.frmAddNote.$setUntouched();
            $scope.frmAddNote.$setValidity();
            $scope.addNote = !addNote;
            
        }
    }
});