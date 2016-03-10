doctorApp.controller("LoginController", function ($scope, $state , $timeout) {
    
    $scope.email = '';
    $scope.password = '';
    $scope.submitForm = function (form) {
        if (form.$valid) {

            $state.go('listpatients');
        }

    }
});

// local storage update 
//var updatedUser = localstorage.getObject('currentUser');
//updatedUser.FirstName = "eeeeee";
//localstorage.resetObject('currentUser', updatedUser);