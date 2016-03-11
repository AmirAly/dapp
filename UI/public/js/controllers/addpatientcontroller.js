doctorApp.controller("addpatientController", function ($scope, $state) {

    $scope.text = 'addpatientController';
    $scope.showMenu = function () {
        $state.go('menu');
    }
    $scope.showPatients = function () {
        $state.go('listpatients');
    }
    $scope.logout = function () {
        $state.go('login');
    }
    $scope.gender = 'male';
    $scope.txtDobRequired = false;

    $scope.addPatient = function (form) {
        console.log($('#txtDob').val());
        angular.forEach($scope.frmAddPatient.$error.required, function (field) {
            field.$setDirty();
        });
        if (!($('#txtDob').val())) {
            $scope.txtDobRequired = true;
            $('#txtDob').attr('style', 'border-bottom:2px solid red');
            console.log('dob null');
        }
        else {
            $scope.txtDobRequired = false;
            console.log('dob val');
            if (form.$valid) {
                console.log('valid');
                $state.go('listpatients');
            }
        }

    }

    $(document).on('click', '#txtDob', function (event) {
        event.preventDefault();
        $(".Zebra_DatePicker_Icon").click();
    });

    $('#txtDob').click(function () {
        $(this).css({
            'border-bottom': '2px solid red'
        });
        // date picker
        $('#txtDob').Zebra_DatePicker({
            direction: -1,
            view: 'years',
            format: 'M d, Y',
            onSelect: function (view, elements) {
                $('.Zebra_DatePicker_Icon_Wrapper ~ label').css({
                    color: '#4fc24f'
                });
                $(this).css({
                    'border-bottom': '2px solid #4fc24f'
                });
                $scope.txtDobRequired = false;
            },
            onClear: function (view, elements) {
                $('.Zebra_DatePicker_Icon_Wrapper ~ label').css({
                    color: 'red'
                });
                $(this).css({
                    'border-bottom': '2px solid red'
                });
                $scope.txtDobRequired = true;
            },
        });
        if ($('#txtDob').val()) {
            $('.Zebra_DatePicker_Icon_Wrapper ~ label').css({
                color: '#4fc24f'
            });
            $(this).css({
                'border-bottom': '2px solid #4fc24f'
            });
        }

    });

});