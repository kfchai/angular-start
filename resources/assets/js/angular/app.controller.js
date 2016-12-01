
export default function AppController($scope){
	var titles = ["Bootstrap starter template", "From Angular Controller!"];
	var idx = 0;
	$scope.title = titles[idx];

	$scope.changeTitle = function(){
		idx = ++idx % 2;
		$scope.title = titles[idx];
	}
}

AppController.$inject = ['$scope'];