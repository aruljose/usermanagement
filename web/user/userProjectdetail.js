//var app = angular.module('userManagementApp', []);

app.controller("userprojectdetailController", function ($scope) {
    var data = {
        "sidelinks": [{
                "name": "Concept Phase",
            },
            /*{
                "name": "Design Phase",
            },
            {
                
            },
            {
                "name": "NPI (New Product Introduction) Phase",
            },
            {
                "name": "Manufacturing Phase ",
            },
            {
                "name": "Support Phase ",
            },*/
        ]
    };

    $scope.nav = data;
    $scope.sidelinks = data.sidelinks;
    
    var data = {
        "designphaseusers": [{
               
                "name": "Design Phase",
            },
            
        ]
    };

    $scope.nav = data;
    $scope.designphaseusers = data.designphaseusers;
    
    
    
    var data = {
        "engineeringphaseusers": [{
               
                "name": "Engineering Phase"
            },
            
        ]
    };

    $scope.nav = data;
    $scope.engineeringphaseusers = data.engineeringphaseusers;
    
    
    
    
    var data = {
        "npiusers": [{
               
                "name": "NPI (New Product Introduction) Phase"
            },
            
        ]
    };

    $scope.nav = data;
    $scope.npiusers = data.npiusers;
    
    
    
    var data = {
        "manufacturingphaseusers": [{
               
                "name": "Manufacturing Phase"
            },
            
        ]
    };

    $scope.nav = data;
    $scope.manufacturingphaseusers = data.manufacturingphaseusers;
    
    
    var data = {
        "supportphaseusers": [{
               
                "name": "Support Phase"
            },
            
        ]
    };

    $scope.nav = data;
    $scope.supportphaseusers = data.supportphaseusers;
});