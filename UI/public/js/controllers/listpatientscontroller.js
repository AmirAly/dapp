doctorApp.controller("listpatientsController", function ($scope, $state) {

    $scope.text = 'listpatientsController';
    $scope.showMenu = function () {
        $state.go('menu');
    }
    $scope.allPatients = [
        { name: 'علي سالم حسين', description: 'ارتفاع نسبه السكر في الدم ارتفاع نسبه السكر في الدم ارتفاع نسبه السكر في الدم ارتفاع نسبه السكر في الدم' },
        { name: 'محمود سعيد السيد', description: 'ارتفاع نسبه السكر في الدم' },
        { name: 'احمد جمال محمد', description: 'ارتفاع الضغط' },
        { name: 'علاء السيد حسين', description: 'زياده ضربات القلب' },
        { name: 'محمود عبد الغنى سلامه', description: 'ارتفاع نسبه السكر في الدم' },
        { name: 'بدر مصطفي احمد', description: 'انسدد الجيوب الانفية' },
        { name: 'كامل مصطفي محمد', description: 'زياده ضربات القلب' },
        { name: 'حامد مصطفي السيد', description: 'ارتفاع الضغط' },

    ];
    $scope.getPatientDetails = function () {
        $state.go('viewpatient');
    }
    $scope.addPatient = function () {
        $state.go('addpatient');
    }
    $scope.logout = function () {
       // $state.go('login', {}, { reload: true });
        window.location = '#/login';

    }
});