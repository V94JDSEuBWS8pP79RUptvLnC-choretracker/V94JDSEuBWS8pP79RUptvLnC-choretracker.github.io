!function(){function n(n,a){return{loadData:loadData}}angular.module("boilerplate").factory("getDataFromAPI",n),n.$inject=["$http","LocalStorage"]}(),function(){function n(n,a){}function a(n,a){function e(){var a=0,e=n.week;return n.days.forEach(function(n,t){0!==t&&n.forEach(function(n,t){var o=Math.floor(t/8)+1;"Washing Machine"!==n.name||o!==e||n.count<1||a>=2||n.ignore||a++})}),a}new Konami(function(){window.confirm("Really clear all data?")&&(window.localStorage.clear(),window.location.reload())});n.floor=Math.floor,n.increment=function(t){2===e()&&"Washing Machine"===t.name&&0===t.count&&(t.ignore=!0),t.count++,a.update("days",n.days),a.update("day",n.day),a.update("spent",n.spent)},n.decrement=function(t,o){t.count=Math.max(o,t.count-1),"Washing Machine"===t.name&&0===t.count&&(t.ignore=void 0,e()<=2&&n.days.forEach(function(n,a){0!==a&&n.forEach(function(n){n.ignore=void 0})})),a.update("days",n.days),a.update("day",n.day),a.update("spent",n.spent)},n.dayBalance=function(){return n.dayBalanceDay(n.day)},n.dayMaximum=function(n){return 10/7},n.dayBalanceDay=function(a){var e=0;if(!n.paused){var t=function(){var e=n.days[a].length,t=0,o=Math.floor(a/8)+1,c=0;return n.days.forEach(function(n,e){0!==e&&n.forEach(function(n,r){var u=Math.floor(r/8)+1;"Washing Machine"!==n.name||u!==o||n.count<1||e===a||t>=2||n.ignore||(t++,c=e)})}),t>=2?[10/7/(e-1),t,c]:[10/7/e,t,c]}(),o=t[1];t[2];t=t[0],n.days[a].forEach(function(c){c.ignore||(2===o&&(e+=Math.min(c.count>=1?1:0,10/7/n.days[a].length,10/7/n.days[a].length)),e+=Math.min((c.count>=1?1:0)*t,t))})}return e},n.moneyMade=function(){var a=0,e=0;return n.paused||n.days.forEach(function(){return 0===e?void e++:(a+=n.dayBalanceDay(e),void e++)}),a},n.balance=function(){return Math.max(n.moneyMade()-n.spent.count,0)},n.weekBalance=function(){var a=0,e=n.week;return n.days.forEach(function(t,o){if(0!==o){var c=Math.floor(o/8)+1;c===e&&(a+=n.dayBalanceDay(o))}}),a},n.weekMaximum=function(n){return 10},n.dayInitial=function(){return a.get("day")||1},n.daysArray=function(){return a.get("days")||[null,[{name:"Bed",count:0},{name:"Washing Machine",count:0},{name:"chore1",count:0},{name:"chore2",count:0},{name:"chore3",count:0},{name:"chore4",count:0}]]},n.spentInitial=function(){return a.get("spent")||{count:0}},n.weekInitial=function(){return Math.floor(n.day/8)+1},n.incrementDay=function(){n.paused=!0,n.day+1>=n.days.length&&n.days.push([{name:"Bed",count:0},{name:"Washing Machine",count:0},{name:"chore1",count:0},{name:"chore2",count:0},{name:"chore3",count:0},{name:"chore4",count:0}]),n.day++,a.update("days",n.days),a.update("day",n.day),n.day%8===0&&(n.week=Math.floor(n.day/8)+1),n.paused=!1},n.decrementDay=function(){n.paused=!0,n.day-1<1||(n.day--,a.update("days",n.days),a.update("day",n.day),n.day%8===7&&(n.week=Math.floor(n.day/8)+1),n.paused=!1)}}angular.module("boilerplate").controller("MainController",n).controller("IncrementController",a),n.$inject=["LocalStorage","QueryService"],a.$inject=["$scope","LocalStorage","QueryService"]}();