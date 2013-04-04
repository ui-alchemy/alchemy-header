'use strict';

angular.module('alchemy').directive('alchMenu', function($window){
    return {
        restrict: 'EA',
        transclude: true,
        replace: true,
        scope: {
            'menu': '=alchMenu',
            'compact' : '@'
        },
        templateUrl: 'component/templates/menu.html',

        controller: function($scope) {
            $scope.active_item = {};
            $scope.dropdown = {};

            $scope.set_active = function(item){
                $scope.active_item.active = false;
                $scope.active_item = item;
                item.active = true;
            };

            $scope.handle_hover = function(item, mousein){
                if( item.type === 'dropdown' && mousein ){
                    $scope.dropdown = item.items;
                    $scope.dropdown.show = true;
                    $scope.dropdown.direction = $scope.menu.location;
                    item.active = true;
                } else {
                    $scope.dropdown.show = false;
                    
                    if( $scope.active_item !== item ){
                        item.active = false;
                    }
                }
            };

        },

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
});

angular.module('alchemy').directive('alchDropdown', function(){
    return {
        restrict: 'EA',
        transclude: true,
        replace: true,
        scope: {
            'dropdown' : '=alchDropdown'
        },
        templateUrl: 'component/templates/dropdown.html',

        controller: function($scope){
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

            $scope.handle_hover = function(item, mousein){
            };

            $scope.isRight = function(direction){
                return direction === 'right';
            };

        },

        link: function(scope, element) {
            /*scope.$watch('dropdown.show', function(value){
                if( value ){
                    var $dropdown  = $(element),
                        $menu_item = $(element).parent().find('.active-item');

                    console.log($menu_item);
                    if( $menu_item.offset() ){
                        console.log($menu_item.offset().left);
                        $dropdown.css('left', $menu_item.offset().left);
                        $dropdown.css('top', $menu_item.offset().top + 22);
                    }
                }
            });*/
        }
    };
});

angular.module('alchemy').directive('alchFlyout', function($window){
    return {
        restrict: 'EA',
        transclude: true,
        replace: true,
        scope: {
            'flyout' : '=alchFlyout'
        },
        templateUrl: 'component/templates/flyout.html',

        controller: function($scope){
            $scope.set_hover = function(item, mousein){
                if( mousein ){
                    item.active = true;
                } else {
                    item.active = false;
                }
            };
        },

        link: function(scope, element) {
            scope.$watch('flyout.show', function(){
                var $element = $(element),
                    $parent  = $element.parent();
            });
        }
    };
});
