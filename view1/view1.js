'use strict';

angular.module('myApp.view1', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])
  .controller('View1Ctrl', ['$scope', '$mdMedia', '$mdDialog', '$window', function ($scope, $mdMedia, $mdDialog, $window) {
    angular.element(document).ready(function() {
      var elementAddButtonSrc = document.getElementById('elementAddButton');
      var elementAddButton = angular.element(elementAddButtonSrc);
      var windowWidth = $window.innerWidth;
      var buttonPositionX = (windowWidth / 2) - 21;

      elementAddButton.css('left', buttonPositionX + 'px');
    });

    $scope.showDetail = function(ev) {
      var sourceElement = angular.element(ev.srcElement);
      console.log(sourceElement);
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'meetingDetail.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: true,
        openFrom: sourceElement,
        closeTo: sourceElement
      })
    };

    $scope.showAdvanced = function (ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'dialog1.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      })
        .then(function (answer) {
        }, function () {
        });
      //$scope.$watch(function () {
      //  return $mdMedia('xs') || $mdMedia('sm');
      //}, function (wantsFullScreen) {
      //  $scope.customFullscreen = (wantsFullScreen === true);
      //});
    };
  }]);

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}