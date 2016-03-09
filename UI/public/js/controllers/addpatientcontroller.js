doctorApp.controller("addpatientController", function ($scope, $state) {

    $scope.text = 'addpatientController';
    $scope.showMenu = function () {
        $state.go('menu');
    }
    $scope.showAccounts = function () {
        $state.go('listpatients');
    }
    $scope.logout = function () {
        $state.go('login');
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
            },
            onClear: function (view, elements) {
                $('.Zebra_DatePicker_Icon_Wrapper ~ label').css({
                    color: 'red'
                });
                $(this).css({
                    'border-bottom': '2px solid red'
                });
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