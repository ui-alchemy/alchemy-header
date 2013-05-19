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
