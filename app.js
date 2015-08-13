var app = angular.module('cashApp', []);
// new controller
app.controller('MainCtrl', ['$scope', function($scope) {
	// creating a variable in angular called posts
	// The $scope variable serves as the bridge between Angular controllers and Angular templates. If you want something to be accessible in the template such as a function or variable, bind it to $scope
	// add a function addPost
	$scope.posts=[];
	$scope.date='';
	$scope.title='';
	$scope.myDecimal='';
	$scope.sum = 0.00; 

	$scope.addPost = function(){
		if(!$scope.title || $scope.title === '') {return;}
		$scope.posts.push({
			date: $scope.date, 
			title: $scope.title, 
			amount: $scope.myDecimal
			
		});
		$scope.sum += $scope.myDecimal
		$scope.sum = Math.round($scope.sum * 100) / 100
		
	};
	$scope.deletePost = function() {
	    $scope.posts.splice($scope.toRemove, 1);
	    $scope.toRemove = null;
	};
   
   
    


}]);
