'use strict';

angular.module('alchemy').directive('alchMenu', ['$window', function($window){
    return {
        restrict: 'EA',
        transclude: true,
        replace: true,
        scope: {
            'menu': '=alchMenu',
            'compact' : '@'
        },
        templateUrl: 'component/templates/menu.html',

        controller: ['$scope', function($scope) {
            $scope.dropdown = {};

            $scope.handle_hover = function(item, mousein){
                if( item.type === 'dropdown' && mousein ){
                    item.active = true;
                    $scope.dropdown = item.items;
                    $scope.dropdown.show = true;
                    $scope.dropdown.direction = $scope.menu.location;
                } else {
                    $scope.dropdown.show = false;

                    if( item !== $scope.menu.active_item ){
                        item.active = false;
                    }
                }
            };

        }],

        link: function(scope, element, attrs){
            if( attrs.compact !== undefined ){
                angular.element($window).bind('scroll', function(){
                    var h = $('body').height();
                    var y = $($window).scrollTop();

                    if( y > (h*0.03) ){
                        element.parent().addClass('compact');
                    } else {
                        element.parent().removeClass('compact');
                    }
                 });
            }
        }
    };
}]);

angular.module('alchemy').directive('alchDropdown', function(){
    return {
        restrict: 'EA',
        transclude: true,
        replace: true,
        scope: {
            'dropdown' : '=alchDropdown'
        },
        templateUrl: 'component/templates/dropdown.html',

        controller: ['$scope', function($scope){
            $scope.set_hover = function(item, mousein){
                if( mousein ){
                    item.active = true;
                    
                    if( item.type === 'flyout' ){
                        $scope.flyout = item.items;
                        $scope.flyout.show = true;
                    }
                } else {
                    if( $scope.flyout ){
                        $scope.flyout.show = false;
                    }
                    item.active = false;
                }
            };

            $scope.isRight = function(direction){
                return direction === 'right';
            };
        }]
    };
});

angular.module('alchemy').directive('alchFlyout', function(){
    return {
        restrict: 'EA',
        transclude: true,
        replace: true,
        scope: {
            'flyout' : '=alchFlyout'
        },
        templateUrl: 'component/templates/flyout.html',

        controller: ['$scope', function($scope){
            $scope.set_hover = function(item, mousein){
                if( mousein ){
                    item.active = true;
                } else {
                    item.active = false;
                }
            };
        }]
    };
});
