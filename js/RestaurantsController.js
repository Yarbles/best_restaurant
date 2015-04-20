bestRestaurants.controller('RestaurantsCtrl', function RestaurantsCtrl($scope) {
    $scope.restaurants = [
        { name: "McDonalds", type: "fast food", price: "$" },
        { name: "Arby's", type: "fast food", price: "$" },
        { name: "Wendy's", type: "fast food", price: "$$" },
        { name: "Olive Garden", type: "Italian", price: "$$" },
        { name: "Stuckey's", type: "diner", price: "$$$" },
        { name: "Hooters", type: "classy", price: "$$$$" }
    ]
});
