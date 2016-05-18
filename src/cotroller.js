var testApp = angular.module("testApp", []);
testApp.controller("itemCtrl", function($scope) {
    $scope.sortType     = 'name';
    $scope.sortReverse  = false;  
    $scope.model = {
        items: [
            {'name': "chair", 'count': 4, 'price': 40},
            {'name': "table", 'count': 5, 'price': 50},
            {'name': "carpet", 'count': 6, 'price': 60},
            {'name': "window", 'count': 2, 'price': 80},
            {'name': "TV", 'count': 15, 'price': 400},
            {'name': "wardrobe", 'count': 1, 'price': 133},
            {'name': "pillow", 'count': 35, 'price': 5},
            {'name': "blanket", 'count': 22, 'price': 8},
        ],
        selected: {},
        name : ""
        
    };
    /*
//adding non actual
   $scope.addRow = function () {
       $scope.model.items.push({'name': $scope.model.selected.name, 'count':$scope.model.selected.count, 'price': $scope.model.selected.price});
       $scope.model.selected.name = '';
       $scope.model.selected.count = '';
       $scope.model.selected.price = '';
      };
   */

//delete
$scope.remove = function (name) {
    var ans = confirm("Are you sure?");
   if (ans==true) {
        var comArr = eval($scope.model.items);
        for (var i = 0; i < comArr.length; i++) {
            if (comArr[i].name === name) {
    var index = i;
    break;
}
        }
    console.log(index);
        if (index === -1) {
            alert("something gone wrong");
        }
        $scope.model.items.splice(index, 1);
   }
    
};
//edit
    $scope.edit = function (item) {
        $scope.model.name=item.name;
        $scope.model.selected = angular.copy(item);
    };
//saving to model
    $scope.save = function (name) {
        console.log("Saving item");
        if (!name )
        {
            $scope.model.items.push(angular.copy($scope.model.selected));
            $scope.reset();
        }

        var idx=$scope.model.items.findIndex(function (element,index,array) {
            return element.name===name;

        });
        $scope.model.items[idx] = angular.copy($scope.model.selected);
             $scope.reset();

    };


    $scope.reset = function () {
        $scope.model.selected = {};
        $scope.model.name="";
        $('#myModal').modal('hide');
   };


//filter for price to convert into money
    testApp.filter('currency', function() {
        return function(number, currencyCode) {
            var currency = { $: "$" },
                thousand, decimal, format;
            if ($.inArray(currencyCode, ["$"]) >= 0)
            {
                thousand = ",";
                decimal = ".";
                format = "%s%v";
            };
            return accounting.formatMoney(number, currency[currencyCode], 2, thousand, decimal, format);
        }
        });


});





/**
 * Created by Miron on 16.05.2016.
 */
