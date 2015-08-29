

app.controller("editorController", function($scope) {

$scope.ckeditorHide = true;
        $scope.toggleckeditopen = function() {
            $scope.ckeditorHide = $scope.ckeditorHide = false;
        };
        
	$scope.toggleckeditclose = function() {
            $scope.ckeditorHide = $scope.ckeditorHide =true;
        };

$scope.ckeditordata = [];

$scope.save = function () {
$scope.ckeditordata = CKEDITOR.instances.editor.getData();

$scope.ckeditorHide = $scope.ckeditorHide =true;

console.log( CKEDITOR.instances.editor.getData());
}

})



 app.filter('htmlToPlaintext', function() {
    return function(editor) {
      return  editor ? String(editor).replace(/<[^>]+>/gm, '') : '';
    };
  }
);

