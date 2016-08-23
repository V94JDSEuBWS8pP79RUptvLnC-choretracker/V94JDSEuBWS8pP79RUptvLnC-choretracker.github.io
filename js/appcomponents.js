!function(){function e(e,o,t,r){o.html5Mode(!1),e.when("/",{templateUrl:"views/home.html"}).otherwise({redirectTo:"/"}),t.interceptors.push("authInterceptor")}function o(e,o,t,r){return{request:function(e){return e.headers=e.headers||{},e},responseError:function(e){return 404===e.status?(r.path("/"),o.reject(e)):o.reject(e)}}}function t(e,o){}angular.module("boilerplate",["ngRoute"]).config(e),e.$inject=["$routeProvider","$locationProvider","$httpProvider","$compileProvider"],angular.module("boilerplate").factory("authInterceptor",o),o.$inject=["$rootScope","$q","LocalStorage","$location"],angular.module("boilerplate").run(t),t.$inject=["$rootScope","$location"]}(),function(){angular.module("boilerplate").constant("CONSTANTS",{API_URL:"http://www.yourAPIurl.com/"})}(),function(){"use strict";function e(e,o){function t(o,t){return i||console.log("localStorage not supported, make sure you have the $cookies supported."),null===window.localStorage.getItem(o)?e.localStorage&&e.localStorage.setItem(o,angular.toJson(t)):void console.warn("localStorage with the name "+o+" already exists. Please pick another name.")}function r(o){return i||console.log("localStorage not supported, make sure you have the $cookies supported."),e.localStorage&&angular.fromJson(e.localStorage.getItem(o))}function n(o,t){return i||console.log("localStorage not supported, make sure you have the $cookies supported."),e.localStorage&&e.localStorage.setItem(o,angular.toJson(t))}function a(o){return i||console.log("localStorage not supported, make sure you have the $cookies supported."),e.localStorage&&e.localStorage.removeItem(o)}function l(){return i||console.log("localStorage not supported, make sure you have the $cookies supported."),e.localStorage&&e.localStorage.clear()}function u(){return e.localStorage}var c="undefined"==typeof window.localStorage?void 0:window.localStorage,i=!(void 0===typeof c||void 0===typeof window.JSON);return angular.element(e).on("storage",function(e,t){e.key===t&&o.$apply()}),{set:t,get:r,update:n,remove:a,removeAll:l,list:u}}angular.module("boilerplate").factory("LocalStorage",["$window","$rootScope",e])}(),function(){"use strict";function e(e,o,t){function r(r,n,a,l){var u=o.defer();return e({method:r,url:t.API_URL+n,params:a,data:l}).then(function(e){e.config||console.log("Server error occured."),u.resolve(e)},function(e){u.reject(e)}),u.promise}var n={query:r};return n}angular.module("boilerplate").factory("QueryService",["$http","$q","CONSTANTS",e])}(),function(){"use strict";function e(){var e={restrict:"E",templateUrl:"components/directives/main-nav.html"};return e}angular.module("boilerplate").directive("mainNav",e)}(),function(){"use strict";function e(){var e={restrict:"E",templateUrl:"components/directives/responsive-nav.html",link:function(e,o,t,r){o.on("click",function(e){$(".responsive-wrapper").slideToggle(150,"swing"),e.preventDefault()})}};return e}angular.module("boilerplate").directive("responsiveNav",e)}(),function(){"use strict";function e(){var e={restrict:"AE",link:function(e,o,t){e.$watch(function(){angular.element(document).ready(function(){$(".slider").owlCarousel({autoPlay:2500,items:1,margin:0,nav:!0,dots:!1,navText:"",pauseOnHover:!0})})}),$(document).keyup(function(e){37==e.keyCode?$(".gallery").trigger("prev.owl.carousel"):39==e.keyCode&&$(".gallery").trigger("next.owl.carousel")})}};return e}angular.module("boilerplate").directive("myslider",e)}();