'use strict';

angular.module('alchemy').directive('alchFlyout', function(){
    return {
        restrict: 'EA',
        transclude: true,
        replace: true,
        scope: {
            'flyout' : '=alchFlyout'
        },
        templateUrl: 'component/templates/flyout.html',

        controller: ['$scope', function($scope) {
            $scope.setHover = function(item, mousein) {
                if (mousein) {
                    item.active = true;
                } else {
                    item.active = false;
                }
            };
        }]
    };
});
