angular.module("alch-templates").run(function($templateCache) {
  $templateCache.put("component/templates/flyout.html",
    "<ul class=\"flyout\">" +
    "  <li ng-repeat=\"item in flyout\"" +
    "      ng-class=\"{ 'dropdown-highlight' : item.active }\"" +
    "      ng-mouseenter=\"set_hover(item, true)\"" +
    "      ng-mouseleave=\"set_hover(item, false)\">" +
    "  " +
    "    <a href=\"{{ item.url }}\">{{ item.display }}</a>" +
    "  </li>" +
    "</ul>" +
    "");
});
