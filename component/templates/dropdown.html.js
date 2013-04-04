angular.module("alch-templates").run(function($templateCache) {
  $templateCache.put("component/templates/dropdown.html",
    "<ul class=\"dropdown\" " +
    "    ng-class=\"{ 'dropdown-right' : isRight(dropdown.direction), 'dropdown-active' : dropdown.show }\">" +
    "  <li ng-repeat=\"item in dropdown\"" +
    "      ng-mouseenter=\"set_hover(item, true)\"" +
    "      ng-mouseleave=\"set_hover(item, false)\">" +
    "  " +
    "    <a class=\"dropdown-menu-item-link\" href=\"{{ item.url }}\">" +
    "      {{ item.display }}" +
    "      <i class=\"right_arrow_icon-grey flyout-indicator\" ng-show=\"item.type=='flyout'\"></i>" +
    "    </a>" +
    "    <ul alch-flyout=\"item.items\" ng-show=\"flyout.show\" ng-class=\"{ 'dropdown-active' : dropdown.show }\"></ul>" +
    "  </li>" +
    "</ul>" +
    "");
});
