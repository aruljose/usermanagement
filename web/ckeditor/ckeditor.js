app.controller("editorController", function ($scope) {
    $scope.ckeditorarray = {};
});
app.directive("clickToEdit", function () {
    var editorTemplate = '' +
            '<div class="click-to-edit">' +
            '<div ng-hide="editor.editorEnabled">' +
            '<div ng-bind-html="value | unsafe"></div>' +
            '[ <span class="editButton" ng-click="enableEditor()">Edit</span> ]<br>' +
            '</div>' +
            '<div ng-show="editor.editorEnabled">' +
            '<textarea data-ng-model="editor.editableValue" data-ck-editor id="ckeditor">' +
            '</textarea>' + '<br>' +
            '<div class = "pull-right">' +
            '<button class="btn btn-primary" ng-click="save()">Save</button>' +
            '<button class="btn btn-danger" ng-click="disableEditor()">cancel</button>' +
            '</div>' +
            '</div>' +
            '</div>';
    return {
        restrict: "A",
        replace: true,
        template: editorTemplate,
        scope: {
            value: "=clickToEdit"
        },
        link: function (scope, element, attrs) {
            scope.editor = {
                editableValue: scope.value,
                editorEnabled: false
            };
            scope.enableEditor = function () {
                scope.editor.editorEnabled = true;
                scope.editor.editableValue = scope.value;
                setTimeout(function () {
                    // element.find('input')[0].focus();
                    //element.find('input').focus().select(); // w/ jQuery
                });
            };
            scope.disableEditor = function () {
                scope.editor.editorEnabled = false;
            };
            scope.save = function () {
                scope.value = scope.editor.editableValue;
                scope.disableEditor();
            };
        }
    };
});
app.directive('ckEditor', [function () {
        return {
            require: '?ngModel',
            link: function ($scope, elm, attr, ngModel) {

                var ck = CKEDITOR.replace(elm[0]);

                ck.on('pasteState', function () {
                    $scope.$apply(function () {
                        ngModel.$setViewValue(ck.getData());
                    });
                });

                ngModel.$render = function (value) {
                    ck.setData(ngModel.$modelValue);
                };
            }
        };
    }]);
app.filter('htmlToPlaintext', function () {
    return function (editor) {
        var decoded = $('<div/>').html(editor).html();
        console.log(decoded);
        return  decoded;
    };
});

app.filter('unsafe', function ($sce) {
    return $sce.trustAsHtml;
});