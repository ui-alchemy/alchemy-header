angular.module("alch-templates").run(function($templateCache) {
  $templateCache.put("component/templates/menu.html",
    "<nav ng-class=\"menu.location\">" +
    "  <ul class=\"menu-container\">" +
    "    <li class=\"menu-item\"" +
    "        ng-repeat=\"item in menu.items\"" +
    "        ng-mouseenter=\"handle_hover(item, true)\"" +
    "        ng-mouseleave=\"handle_hover(item, false)\">" +
    "        " +
    "        <a href=\"{{ item.url }}\" " +
    "           ng-class=\"{ 'active-item' : item.active }\"" +
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
});
