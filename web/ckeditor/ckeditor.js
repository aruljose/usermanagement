var app = angular.module('ckEditorapp', ['ui.bootstrap']);
app.controller('ckeditorController', ['$scope', '$modal', '$log', '$rootScope',
    function controller($scope, $modal, $log, $rootScope)
    {
        $rootScope.setData = function (editor)
        {
            $scope.editor = $rootScope.editor;
        };

        $scope.save = function (editor) {

            $scope.toggle = false;

        };

        $scope.cancel = function (editor) {

            $scope.toggle = false;

        };

        $scope.open = function (editor, size) {

            $scope.toggle = true;
            $scope.val = "";

            var modalInstance = $modal.open({
                templateUrl: 'myModalContent',
                controller: ModalInstanceCtrl,
                size: size,
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
    }]);
var ModalInstanceCtrl = function ($scope, $rootScope, $modalInstance) {
    $scope.save = function (text) {
        console.log("ckEditor Data: ", text);
        $scope.editor = text;
        $rootScope.editor = $scope.editor;
        $rootScope.setData($rootScope.editor);
        $modalInstance.close();
    };
    $scope.cancel = function () {
        $scope.toggle = false;
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
                var ck = CKEDITOR.replace(elm[0], {
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
