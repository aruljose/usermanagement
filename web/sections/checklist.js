function ChecklistController($scope) {
    $scope.checklists = [
        
    ];

    $scope.addChecklist = function () {
        $scope.checklists.push({text: $scope.checklistText});
        $scope.checklistText = '';
    };
    
  $scope.delete = function() {
    var oldChecklists = $scope.checklists;
    $scope.checklists = [];
    angular.forEach(oldChecklists, function(checklist) {
      if (!checklist.done) $scope.checklists.push(checklist);
    });
  };
}



