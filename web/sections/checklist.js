function ChecklistController($scope) {
    $scope.checklists = [];

    $scope.addChecklist = function () {
        $scope.checklists.push({text: $scope.checklistText});
        $scope.checklistText = '';
    };
}



