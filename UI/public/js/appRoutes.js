var doctorApp = angular.module("doctorApp", ['ionic']).run(function ($templateCache, $http) {

    $http.get('templates/login.html', { cache: $templateCache });
    $http.get('templates/listpatients.html', { cache: $templateCache });
    $http.get('templates/viewpatient.html', { cache: $templateCache });
    $http.get('templates/menu.html', { cache: $templateCache });
    $http.get('templates/accounts.html', { cache: $templateCache });
    $http.get('templates/addaccount.html', { cache: $templateCache }); 
    $http.get('templates/addpatient.html', { cache: $templateCache });
});

doctorApp.config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router, which uses the concept of states.
    // Learn more here: https://github.com/angular-ui/ui-router.
    // Set up the various states in which the app can be.
    // Each state's controller can be found in controllers.js.
    $urlRouterProvider.otherwise('/login');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
     .state('login', {
         url: '/login',
         controller: "LoginController",
         templateUrl: 'templates/login.html'
     })
     .state('listpatients', {
         url: '/listpatients',
         controller: "listpatientsController",
         templateUrl: 'templates/listpatients.html'
     })
    .state('viewpatient', {
        url: '/viewpatient',
        controller: "viewpatientController",
        templateUrl: 'templates/viewpatient.html'
    })
    .state('menu', {
        url: '/menu',
        controller: "menuController",
        templateUrl: 'templates/menu.html'
    })
    .state('accounts', {
        url: '/accounts',
        controller: "accountsController",
        templateUrl: 'templates/accounts.html'
    })
     .state('addaccount', {
         url: '/addaccount',
         controller: "addaccountController",
         templateUrl: 'templates/addaccount.html'
     })
    .state('addpatient', {
        url: '/addpatient',
        controller: "addpatientController",
        templateUrl: 'templates/addpatient.html'
    })
    //// ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        //.state('about', {
        //    // we'll get to this in a bit       
        //})
    ;

})

