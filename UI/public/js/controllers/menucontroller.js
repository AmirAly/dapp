doctorApp.controller("menuController", function ($scope, $state) {

    $scope.text = 'menuController';
    $scope.showListPatient = function () {
        $state.go('listpatients');
    }
    $scope.showListAccounts = function () {
        $state.go('accounts');
    }
    $scope.menuItems = [
        { name: 'المرضي', imgSrc: 'images/1.png' },
        { name: 'المساعدين', imgSrc: 'images/2.png' },
        { name: 'المواعيد', imgSrc: 'images/4.png' },
        { name: 'الماليات', imgSrc: 'images/3.png' },
        { name: 'المرضي', imgSrc: 'images/1.png' },
        { name: 'المساعدين', imgSrc: 'images/2.png' },
        { name: 'المواعيد', imgSrc: 'images/4.png' },
        { name: 'الماليات', imgSrc: 'images/3.png' },

    ];
    $scope.logout = function () {
        $state.go('login');
    }
});