angular.module("alch-templates").run(function($templateCache) {
  $templateCache.put("app/views/example.html",
    "<div ng-controller=\"MenuCtrl\">" +
    "  <header class=\"header logo-header\">" +
    "    <nav alch-menu=\"user_menu\"></nav>" +
    "  </header>" +
    "  <header class=\"header nav-header\">" +
    "    <nav alch-menu=\"menu\"></nav>" +
    "    <nav alch-menu=\"admin_menu\"></nav>" +
    "  </header>" +
    "</div>" +
    "");
});
