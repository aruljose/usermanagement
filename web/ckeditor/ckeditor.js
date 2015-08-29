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

$scope.ckeditorHide = false;
        $scope.toggleckeditopen = function() {
            $scope.ckeditorHide = $scope.ckeditorHide = false;
        };
        
	$scope.toggleckeditclose = function() {
            $scope.ckeditorHide = $scope.ckeditorHide =true;
        };



    $scope.ckEditors = [];
   
        var rand = "";
        $scope.ckEditors.push({value:rand});
    
$scope.save = function () {
$scope.ckeditordata = CKEDITOR.instances.ckeditor.getData();

$scope.ckeditorHide = $scope.ckeditorHide =true;

console.log( CKEDITOR.instances.ckeditor.getData());
}
}

app.filter('htmlToPlaintext', function() {
    return function(editor) {
      return  editor ? String(editor).replace(/<[^>]+>/gm, '') : '';
    };
  }
);