//angular.module('userManagementApp', [])
        app.controller('TreeController', ['$scope', function ($scope) {
                
             //  var newNode = [];
              //  var currentCache = [];   
        
                $scope.delete = function (data) {
                    data.nodes = [];
                };
                $scope.add = function (data) {
                    
                    
                    var post = data.nodes.length + 1  ;
                    var newNode = data.name + post + '.' ;
                    data.nodes.push({name: newNode, nodes: []});
                    // cache = currentCache;
                     //currentCache.push(cached);
               
                
                if(newNode !== ''){
                    
                    var newNode = '';
                    
                } };
               

                $scope.toggle = function () {
                     $scope.showhide = !$scope.showhide;

                   
                };

                $scope.tree = [{
                        name: "",
                        nodes: []

                    }];
                
            }]);