function ChecklistController($scope) {
    //alert("test");
    $scope.checklists = [
        
    ];

    $scope.addChecklist = function () {
        //alert("test2");
        $scope.checklists.push({text: $scope.checklistText});
        $scope.checklistText = '';
        //alert("test3");
    };
    
  $scope.delete = function() {
    var oldChecklists = $scope.checklists;
    $scope.checklists = [];
    angular.forEach(oldChecklists, function(checklist) {
      if (!checklist.done) $scope.checklists.push(checklist);
    });
  };
}



