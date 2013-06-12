'use strict';

angular.module('componentExampleApp', ['alchemy'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/example.html',
        controller: 'ExampleCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

function ExampleCtrl($scope){
};

function MenuCtrl($scope){
    $scope.logo = {
        src : 'images/logo_small.png',
        alt_text : "Logo Here"
    };

    $scope.showDropdown = function(menu){
        menu.hover = !menu.hover;
    };

    $scope.menu = {
        location : 'left',
        items : [
            {
                display : 'App',
                url     : '#/app',
                type    : 'dropdown',
                items   : [
                    {
                        display : 'Application 1',
                        url     : '#/app',
                    }
                ]
            },{
                display : 'Content',
                url     : '#/content',
                type    : 'dropdown',
                items   : [
                    {
                        display : 'Content 1 is super long',
                        url     : '#/content1'
                    },{
                        display : 'Content 2 is even looooonnnggerrr',
                        url     : '#/content2',
                        type    : 'flyout',
                        items   : [
                            {
                                display : 'Subcontent 1',
                                url     : '#/content/content1/subcontent1'
                            },{
                                display : 'Subcontent 2',
                            },{
                                display : 'Subcontent 3',
                            },{
                                display : 'Subcontent 4',
                            },{
                                display : 'Subcontent 5',
                        }]
                    },{
                        display : 'Content 5',
                    },{
                        display : 'Content 4',
                    },{
                        display : 'Content 6',
                    },{
                        display : 'Content 7',
                    },{
                        display : 'Content 8',
                }]
            },{
                display : 'Random Space',
                url     : '#random',
                type    : 'dropdown',
                items   : [
                    {
                        display : 'Random 1'
                    },{
                        display : 'Random 2'
                    },{
                        display : 'Random 3'
                    },{
                        display : 'Random 4'
                }]
            },{
                display : 'RaspberryPI',
                url     : '#raspberry'
            }
        ]
    };

    $scope.admin_menu = {
        location : 'right',
        items : [
            {
                display : 'Admin'
            },{
                display : 'Notifications'
            }

        ]
    };

    $scope.user_menu = {
        location : 'right',
        items : [
            {
                display: 'Admin User',
                type: 'dropdown',
                items: [
                    {
                        display : 'Admin'
                    },{
                        display : 'Notifications'
                    }
                ]
            }
        ]
    };


    $scope.menu.activeItem = $scope.menu.items[1];
    $scope.menu.activeItem.active = true;
}
