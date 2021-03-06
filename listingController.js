angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.newListing = '';
    //$scope.searchText = '';

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */

    $scope.addListing = function() {
      $scope.listings.push($scope.newListing);
      $scope.newListing = '';
    };
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
    };
    $scope.showDetails = function(index) {

      $scope.detailedInfo = {

        name: $scope.listings[index].name,
        code: $scope.listings[index].code,
        coordinates: $scope.listings[index].coordinates,
        address: $scope.listings[index].address

      }

    };
  }
]);
