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
