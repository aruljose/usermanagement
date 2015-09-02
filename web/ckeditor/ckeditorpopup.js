var app = angular.module('userManagementApp',[]);
app.controller("editorController", function ($scope) {
    var editorList = this;
    $scope.ckeditordata = [];
    $scope.save = function () {
        $scope.ckeditordata = CKEDITOR.instances.editor.getData();
        console.log(CKEDITOR.instances.editor.getData());
    }
    editorList.addEditor = function () {
        editorList.ckeditors.push({text: editorList.editorText, done: false});
        editorList.editorText = '';
    };
    editorList.ckeditors = [
        {text: 'Angular', done: true},
        {text: 'Bootstrap', done: false},
        {text: 'Java', done: false},
        {text: 'CSS', done: false},
        {text: 'JavaScript', done: false},
        {text: 'Html', done: false}
    ];
});