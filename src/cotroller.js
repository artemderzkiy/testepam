var testApp = angular.module("testApp", []);
testApp.controller("itemCtrl", function($scope) {
    $scope.sortType     = 'name';
    $scope.sortReverse  = false;  
    $scope.model = {
        items: [
            {'name': "чайник", 'count': 4, 'price': "40"},
            {'name': "ведро", 'count': 5, 'price': "50"},
            {'name': "ваза", 'count': 6, 'price': "60"}
        ],
        selected: {}
    };

    $scope.addRow = function () {
        $scope.model.items.push({'name': $scope.name, 'count':$scope.count, 'price': $scope.price});
        $scope.name = '';
        $scope.count = '';
        $scope.price = '';

    };

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

    $scope.edit = function (item) {
        $scope.model.selected = angular.copy(item);
    };

    $scope.save = function (name) {
        console.log("Saving contact");
        $scope.model.items[name] = angular.copy($scope.model.selected);
        $scope.reset();
    };


    $scope.reset = function () {
        $scope.model.selected = {};
    };





});


/**
 * Created by Miron on 16.05.2016.
 */
