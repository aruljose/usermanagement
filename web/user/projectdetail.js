//var app = angular.module('userManagementApp', []);

app.controller("ProjectDetailController",function($scope){
    var data = {
            "links": [{
                "sub": [
		{"name": "Solution Description"}, 
		{"name": "System Use Case (overall)"}, 
		{"name": "Usability Study and Ergonomic requirements"}, 
		{"name": "User Interface (GUI) Requirement"},   
		{"name": "Regulatory Requirements"}
		]

        },
/*{
            "name": "Design Phase",
                "sub": [
		{"name": "System Architecture Document"}, 
		{"name": "Hardware Architecture Document"}, 
		{"name": "Software Architecture Document"}, 
		{"name": "Enclosure Design Document"}, 
		{"name": "Proof of Concept document"}
		]
        },

{
            
        },
{
            "name": "NPI (New Product Introduction) Phase",
                "sub": [
		{"name": "Design for Supply Chain"}, 
		{"name": "Design for Test Document"}, 
		{"name": "Design for Assembly Document"}, 
		{"name": "Design for Manufacturing Document"}, 
		{"name": "Design for Compliance Document"}
		]
        },

{
            "name": "Manufacturing Phase ",
                "sub": [
		{"name": "PCB Fabrication Document"}, 
		{"name": "Bill of Materials"}, 
		{"name": "Manufacturing Documents"}, 
		{"name": "System Assembly Document"}, 
		{"name": "PCBA testing"},
		{"name": "System Testing"}
		]
        },

{
            "name": "Support Phase ",
                "sub": [
		{"name": "Manufacturing Support"}, 
		{"name": "Value Engineering"}, 
		{"name": "Test & Repair Document"}, 
		{"name": "Homologation Document"}, 
		{"name": "Disposal/Recycling Documents "}
		
		]
        },*/


]
    };

    $scope.nav = data;
    $scope.links = data.links;


var data = {
            "designphases": [{
            "name": "Design Phase",
                "sub": [
		{"name": "System Architecture Document"}, 
		{"name": "Hardware Architecture Document"}, 
		{"name": "Software Architecture Document"}, 
		{"name": "Enclosure Design Document"}, 
		{"name": "Proof of Concept document"}
		]
        },



]
    };

    $scope.nav = data;
    $scope.designphases = data.designphases;
    
    var data = {
            "engineeringphases": [{
            "name": "Engineering Phase",
                "sub": [
		{"name": "System Engineering Document "}, 
		{"name": "Electronics Packaging"}, 
		{"name": "Compliance Engineering"}, 
		{"name": "Cable Harness Design"}, 
		{"name": "PCB Design"}
		]
        },
]
    };

    $scope.nav = data;
    $scope.engineeringphases = data.engineeringphases;
    
    
    var data = {
            "npiphases": [{
            "name": "NPI (New Product Introduction) Phase",
                "sub": [
		{"name": "Design for Supply Chain"}, 
		{"name": "Design for Test Document"}, 
		{"name": "Design for Assembly Document"}, 
		{"name": "Design for Manufacturing Document"}, 
		{"name": "Design for Compliance Document"}
		]
        },
]
    };

    $scope.nav = data;
    $scope.npiphases = data.npiphases;
    
    var data = {
            "manufacturingphases": [{
            "name": "Manufacturing Phase ",
                "sub": [
		{"name": "PCB Fabrication Document"}, 
		{"name": "Bill of Materials"}, 
		{"name": "Manufacturing Documents"}, 
		{"name": "System Assembly Document"}, 
		{"name": "PCBA testing"},
		{"name": "System Testing"}
		]
        },
]
    };

    $scope.nav = data;
    $scope.manufacturingphases = data.manufacturingphases;
    
    var data = {
            "supportphases": [{
            "name": "Support Phase ",
                "sub": [
		{"name": "Manufacturing Support"}, 
		{"name": "Value Engineering"}, 
		{"name": "Test & Repair Document"}, 
		{"name": "Homologation Document"}, 
		{"name": "Disposal/Recycling Documents "}
		
		]
        },
]
    };

    $scope.nav = data;
    $scope.supportphases = data.supportphases;
});