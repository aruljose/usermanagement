var app = angular.module('ckEditorapp', ['ui.bootstrap']);
app.controller('ckeditorController',['$scope', '$modal','$log','$rootScope',
 function controller($scope, $modal, $log, $rootScope)
 {     
     $scope.ckeditorhide = false;
     
     $rootScope.setData = function(editor)
     {
         $scope.editor = $rootScope.editor;
     };

$scope.save = function (editor){
$scope.toggle =false;
     $scope.ckeditorhide = true;
};

$scope.cancel = function (editor){

$scope.toggle =false;

};

 $scope.open = function (editor) {

$scope.toggle =true;
 $scope.val = ""; 
 };
 }]);




 var ModalInstanceCtrl = function ($scope,$rootScope, $modalInstance) {
 $scope.save = function (text) {
     console.log("ckEditor Data: ",text);
     $scope.editor = text;
     $rootScope.editor = $scope.editor;
     $rootScope.setData($rootScope.editor);
 $modalInstance.close();
 };
 $scope.cancel = function () {
$scope.toggle =false;
 $modalInstance.dismiss('cancel');
 };
 };
app.directive('ckEditor', [function () {
    return {
        require: '?ngModel',
        restrict: 'C',
        link: function (scope, elm, attr, model) {
            var isReady = false;
            var editor = [];
            var ck = CKEDITOR.replace(elm[0],{
                allowedContent: true
            });
            if (model) {
                ck.on('change', function () {
                    scope.$apply(function () {
                        var editor = ck.getData();
                        if (editor == '<span></span>') {
                            editor = null;
                        }
                        model.$setViewValue(editor);
                    });
                });

                model.$render = function (value) {
                  editor.push(model.$viewValue);
                };
            }
        }
    };
}]);