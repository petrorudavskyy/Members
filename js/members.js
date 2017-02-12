var app = angular.module('store-members', []);

app.directive("descriptions", function() {
  return {
    restrict: "E",
    templateUrl: "tabs/descriptions.html"
  };
});

app.directive("reviews", function() {
  return {
    restrict: "E",
    templateUrl: "tabs/reviews.html"
  };
});

app.directive("about", function() {
  return {
    restrict: "E",
    templateUrl: "tabs/about.html"
  };
});

app.directive("memberTabs", function() {
  return {
    restrict: "E",

    templateUrl: "tabs/member-tabs.html",
    controller: function() {
      this.tab = 1;

      this.isSet = function(checkTab) {
        return this.tab === checkTab;
      };

      this.setTab = function(activeTab) {
        this.tab = activeTab;
      };
    },
    controllerAs: "tab"
  };
});
