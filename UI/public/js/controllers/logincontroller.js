doctorApp.controller("LoginController", function ($scope, $state ) {
    
    //$scope.email = '';
    //$scope.password = '';
    $scope.submitForm = function (form) {
        
        if (form.$valid) {

            console.debug($scope.frmLogin.mail);
            $scope.frmLogin.mail = '';
            $scope.frmLogin.password = '';
            $scope.frmLogin.$setPristine();
            $scope.frmLogin.$setUntouched();
            $scope.frmLogin.$setValidity();

            $state.go('listpatients');
        }

    }


});

// local storage update 
//var updatedUser = localstorage.getObject('currentUser');
//updatedUser.FirstName = "eeeeee";
//localstorage.resetObject('currentUser', updatedUser);