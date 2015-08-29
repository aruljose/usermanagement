//angular.module('userManagementApp', [])
        app.controller('TreeController', ['$scope', function ($scope) {
                
             $scope.toggleGuidelineCkeditor = false;
                $scope.showDiv = function () {
                    $scope.toggleGuidelineCkeditor = !$scope.toggleGuidelineCkeditor;
                };   
        
                $scope.delete = function (data) {
                    data.nodes = [];
                };
                $scope.add = function (data) {
                    
                    
                    var post = data.nodes.length + 1  ;
                    var newNode = data.name + post + '.' ;
                    data.nodes.push({name: newNode, nodes: []});
                    };
               

                $scope.tree = [{
                        name: "",
                        nodes: []

                    }];
                
            }]);