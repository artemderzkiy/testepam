var testApp = angular.module("testApp", []);
testApp.controller("itemCtrl", function($scope) {
    $scope.sortType     = 'name';
    $scope.sortReverse  = false;  
    $scope.model = {
        items: [
            {'name': "чайник", 'count': 4, 'price': 40},
            {'name': "ведро", 'count': 5, 'price': 50},
            {'name': "ваза", 'count': 6, 'price': 60}
        ],
        selected: {},
        name : ""
        
    };
//добавление
 ///   $scope.addRow = function () {
  //      $scope.model.items.push({'name': $scope.model.selected.name, 'count':$scope.model.selected.count, 'price': $scope.model.selected.price});
  //      $scope.model.selected.name = '';
  //      $scope.model.selected.count = '';
  //      $scope.model.selected.price = '';
    
   
    

   // };
//удаление
$scope.remove = function (name) {
    var ans = confirm("Вы подтверждаете удаление?");
    if (ans==true) {
        var comArr = eval($scope.model.items);
        for (var i = 0; i < comArr.length; i++) {
            if (comArr[i].name === name) {
                index = i;
                break;
            }
        }
        if (index === -1) {
            alert("something gone wrong");
        }
        $scope.model.items.splice(index, 1);
    }
    
};
//не воркает
    $scope.edit = function (item) {
        $scope.model.name=item.name;
        $scope.model.selected = angular.copy(item);
    };
//тоже почему то
    $scope.save = function (name) {
        console.log("Saving contact");
        if (!name )
        {
            $scope.model.items.push(angular.copy($scope.model.selected));
            $scope.reset();
        }

        var idx=$scope.model.items.findIndex(function (element,index,array) {
            return element.name===name;

        });
        $scope.model.items[idx] = angular.copy($scope.model.selected);

        console.log($scope.model.selected);
        $scope.reset();
    };

//пока не ебу для чего
    $scope.reset = function () {
        $scope.model.selected = {};
   };



});


/**
 * Created by Miron on 16.05.2016.
 */
