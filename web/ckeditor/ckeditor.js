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
}])

function editorController($scope){
//$scope.ckeditorHide = true;
       $scope.toggleckeditopen = function() {
            $scope.ckeditorHide = $scope.ckeditorHide = false;
        };
        
	$scope.toggleckeditclose = function() {
            $scope.ckeditorHide = $scope.ckeditorHide =true;
        };
$scope.showDiv = function () {
    $scope.toggleckeditor = !$scope.toggleckeditor;
    
}


    $scope.ckEditors = [];
   
       // var randsss = "";
       // $scope.ckEditors.push({value:randsss});
    
$scope.save = function () {
    $scope.ckEditors.push({
        editorvalue : $scope.editor.value
    })
//$scope.ckeditordata = CKEDITOR.instances.ckeditor.getData();

$scope.ckeditorHide = $scope.ckeditorHide =true;

//console.log( CKEDITOR.instances.ckeditor.getData());
}
}

app.filter('htmlToPlaintext', function() {
    return function(editor) {
      return  editor ? String(editor).replace(/<[^>]+>/gm, '') : '';
    };
  }
);
