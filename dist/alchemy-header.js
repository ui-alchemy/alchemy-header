angular.module("alch-templates").run(["$templateCache", function($templateCache) {
  $templateCache.put("component/templates/dropdown.html",
    "<ul class=\"dropdown\" " +
    "    ng-class=\"{ 'dropdown-right' : isRight(dropdown.direction), 'dropdown-active' : dropdown.show }\">" +
    "  <li class=\"dropdown-item\"" +
    "      ng-repeat=\"item in dropdown\"" +
    "      ng-mouseenter=\"setHover(item, true)\"" +
    "      ng-mouseleave=\"setHover(item, false)\">" +
    "  " +
    "    <a class=\"dropdown-item-link\" " +
    "       href=\"{{ item.url }}\" " +
    "       ng-class=\"{'menu-anchor' : item.type, 'dropdown-item-link-active' : item.active }\">" +
    "" +
    "      {{ item.display }}" +
    "      <i class=\"right_arrow_icon-grey flyout-indicator\" ng-show=\"item.type=='flyout'\"></i>" +
    "    </a>" +
    "    <ul alch-flyout=\"item.items\" " +
    "        ng-show=\"flyout.show\" " +
    "        ng-class=\"{ 'dropdown-active' : dropdown.show }\">" +
    "    </ul>" +
    "  </li>" +
    "</ul>" +
    "");
}]);

angular.module("alch-templates").run(["$templateCache", function($templateCache) {
  $templateCache.put("component/templates/flyout.html",
    "<ul class=\"flyout\">" +
    "  <li class=\"flyout-item\"" +
    "      ng-repeat=\"item in flyout\"" +
    "      ng-class=\"{ 'dropdown-highlight' : item.active }\"" +
    "      ng-mouseenter=\"setHover(item, true)\"" +
    "      ng-mouseleave=\"setHover(item, false)\">" +
    "  " +
    "    <a class=\"flyout-item-link\" href=\"{{ item.url }}\">{{ item.display }}</a>" +
    "  </li>" +
    "</ul>" +
    "");
}]);

angular.module("alch-templates").run(["$templateCache", function($templateCache) {
  $templateCache.put("component/templates/menu.html",
    "<nav ng-class=\"menu.location\">" +
    "  <ul class=\"menu-container\">" +
    "    <li class=\"menu-item\"" +
    "        ng-repeat=\"item in menu.items\"" +
    "        ng-mouseenter=\"handleHover(item, true)\"" +
    "        ng-mouseleave=\"handleHover(item, false)\">" +
    "        " +
    "        <a href=\"{{ item.url }}\" " +
    "           ng-class=\"{ 'active-item' : item.active, 'menu-anchor' : item.type }\"" +
    "           class=\"menu-item-link\">" +
    "        " +
    "          {{ item.display }}" +
    "          <i class=\"down_arrow_icon-white\" ng-show=\"item.type == 'dropdown'\"></i>" +
    "        </a>" +
    "        <ul alch-dropdown=\"item.items\"></ul>" +
    "    </li>" +
    "  </ul>" +
    "</nav>" +
    "");
}]);

'use strict';

angular.module('alchemy').directive('alchDropdown', function(){
    return {
        restrict: 'EA',
        transclude: true,
        replace: true,
        scope: {
            'dropdown' : '=alchDropdown'
        },
        templateUrl: 'component/templates/dropdown.html',

        controller: ['$scope', function($scope) {
            $scope.setHover = function(item, mousein) {
                if (mousein) {
                    item.active = true;

                    if (item.type === 'flyout') {
                        $scope.flyout = item.items;
                        $scope.flyout.show = true;
                    }
                } else {
                    if ($scope.flyout) {
                        $scope.flyout.show = false;
                    }
                    item.active = false;
                }
            };

            $scope.isRight = function(direction) {
                return direction === 'right';
            };
        }]
    };
});

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

            $scope.handleHover = function(item, mousein) {
                if (item.type === 'dropdown' && mousein) {
                    item.active = true;
                    $scope.dropdown = item.items;
                    $scope.dropdown.show = true;
                    $scope.dropdown.direction = $scope.menu.location;
                } else {
                    $scope.dropdown.show = false;

                    if (item !== $scope.menu.activeItem) {
                        item.active = false;
                    }
                }
            };

        }],
        link: function(scope, element, attrs) {
            var element_original_offset;

            if (attrs.compact !== undefined) {
                element_original_offset = $(element).offset().top;

                angular.element($window).bind('scroll', function() {
                    var window_scroll_top = $($window).scrollTop();

                    if (window_scroll_top > element_original_offset + 2) {
                        element.parent().addClass('compact');
                    } else if (window_scroll_top < element_original_offset) {
                        element.parent().removeClass('compact');
                    }
                 });
            }
        }
    };
}]);
