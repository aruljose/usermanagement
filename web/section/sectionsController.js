var app = angular.module('userManagementApp', []);
    app.controller('SectionController', ['$scope', function($scope) {
            
            $scope.addItem = function () {
                
                    
            }
     
      
      }]);
      
     app.$inject = ['$scope'];
      
       app.directive("boxCreator", function($compile,$window){   
      return{
        restrict: 'A',
        link: function(scope , element){        
           element.bind("click", function(e){
              
               var childNode = $compile('<button ng-click="showStages()" class="btn btn-success">Section</button>')(scope)
            element.parent().append(childNode);
               
           });
           scope.showStages = function(){
           
            $window.location.href = "../stages/stagesview.html";
            }
        }
    }
    });
      
      
    
    