function editorController($scope)
{
    $scope.ckeditorhide = false;
    $scope.ckeditordata = [];

    $scope.save = function (ckeditortest) {
        $scope.ckeditordata = CKEDITOR.instances.editor.getData();
//$scope.toggle =false;
        $scope.ckeditorhide = true;
        console.log(CKEDITOR.instances.editor.getData());
    };

    $scope.cancel = function (ckeditortest) {
//$scope.toggle =false;
    };
    $scope.open = function (ckeditortest) {
//$scope.toggle =true;
        $scope.val = "";
    };
};