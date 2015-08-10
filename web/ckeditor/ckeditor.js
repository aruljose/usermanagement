var app = angular.module("ckeditorApp", []);
app.controller("ckEditor", function($scope) {
$scope.ckeditordata = [];
$scope.save = function () {
$scope.ckeditordata = CKEDITOR.instances.editor.getData();
console.log( CKEDITOR.instances.editor.getData());
}
})

CKEDITOR.replace( 'editor');