var TicTacToeapp = angular.module("TicTacToe",["firebase"]);
TicTacToeapp.controller("TicTacToecontroller",function($scope, $firebase){

	$scope.boxes = [
	[{owner:""},{owner:""},{owner:""}],
	[{owner:""},{owner:""},{owner:""}],
	[{owner:""},{owner:""},{owner:""}]
	];
	

	$scope.formOne = false;
	$scope.formTwo = false;
	

	$scope.submit = function(player) {
		if (player==1) {
			$scope.formOne = true;
		}
		else if (player==2) {
			$scope.formTwo = true;
		}
		$scope.Player_Name = $scope.textOne;
	};

	$scope.gamebegins = true;
	$scope.beforegame = false;

	$scope.startgame = function(){
		$scope.beforegame = true;
		$scope.gamebegins = false;
	}

	$scope.Player_Turn = "Player 1";

	$scope.claim = function(box){
		if (box.owner == "P1" || box.owner == "P2") {
	 		alert("Sorry, that's already taken!");
		} else if ($scope.Player_Turn == "Player 1") {
			box.owner = "P1";
			$scope.Player_Turn = "Player 2";
			$scope.Player_Name = $scope.textTwo;
			$scope.compare();
		} else if ($scope.Player_Turn == "Player 2") {				
			box.owner = "P2";
			$scope.Player_Turn = "Player 1";
			$scope.Player_Name = $scope.textOne;
			$scope.compare();
		}
	};


	$scope.compare = function(){	
		var box1 = $scope.boxes[0][0];
		var box2 = $scope.boxes[0][1];
		var box3 = $scope.boxes[0][2];
		var box4 = $scope.boxes[1][0];
		var box5 = $scope.boxes[1][1];
		var box6 = $scope.boxes[1][2];
		var box7 = $scope.boxes[2][0];
		var box8 = $scope.boxes[2][1];
		var box9 = $scope.boxes[2][2];	

		if (box1.owner == "P1" && box2.owner == "P1" && box3.owner == "P1"){
			alert($scope.textOne + " wins!");
			replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
		} else if (box4.owner == "P1" && box5.owner == "P1" && box6.owner == "P1"){
			alert($scope.textOne + " wins!");
			replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
		} else if (box7.owner == "P1" && box8.owner == "P1" && box9.owner == "P1"){
			alert($scope.textOne + " wins!");
			replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
		} else if (box1.owner == "P1" && box4.owner == "P1" && box7.owner == "P1"){
			alert($scope.textOne + " wins!");
			replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
		} else if (box2.owner == "P1" && box5.owner == "P1" && box8.owner == "P1"){
			alert($scope.textOne + " wins!");
			replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
		} else if (box3.owner == "P1" && box6.owner == "P1" && box9.owner == "P1"){
			alert($scope.textOne  + " wins!");
			replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
		} else if (box1.owner == "P1" && box5.owner == "P1" && box9.owner == "P1"){
			alert($scope.textOne + " wins!");
			replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
		} else if (box3.owner == "P1" && box5.owner == "P1" && box7.owner == "P1"){
			alert($scope.textOne + " wins!");
			replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
		} else if (box1.owner == "P2" && box2.owner == "P2" && box3.owner == "P2"){
			alert($scope.textTwo + " wins!");
			replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
		} else if (box4.owner == "P2" && box5.owner == "P2" && box6.owner == "P2"){
			alert($scope.textTwo + " wins!");
			replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
		} else if (box7.owner == "P2" && box8.owner == "P2" && box9.owner == "P2"){
			alert($scope.textTwo + " wins!");
			replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
		} else if (box1.owner == "P2" && box4.owner == "P2" && box7.owner == "P2"){
			alert($scope.textTwo + " wins!");
			replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
		} else if (box2.owner == "P2" && box5.owner == "P2" && box8.owner == "P2"){
			alert($scope.textTwo + "wins!");
			replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
		} else if (box3.owner == "P2" && box6.owner == "P2" && box9.owner == "P2"){
			alert($scope.textTwo + " wins!");
			replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
		} else if (box1.owner == "P2" && box5.owner == "P2" && box9.owner == "P2"){
			alert($scope.textTwo + " wins!");
			replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
		} else if (box3.owner == "P2" && box5.owner == "P2" && box7.owner == "P2"){
			alert($scope.textTwo + " wins!");
			replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
		} else if ((box1.owner == "P1" || box1.owner == "P2") && (box2.owner == "P1" || box2.owner == "P2") && (box3.owner == "P1" || box3.owner == "P2") && (box4.owner == "P1" || box4.owner == "P2") && (box5.owner == "P1" || box5.owner == "P2") && (box6.owner == "P1" || box6.owner == "P2") && (box7.owner == "P1" || box7.owner == "P2") && (box8.owner == "P1" || box8.owner == "P2") && (box9.owner == "P1" || box9.owner == "P2")){
			alert("Cat's Game!!!");
			replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
		}
	};

	function replay(box1,box2,box3,box4,box5,box6,box7,box8,box9){

		$scope.formOne = false;
		$scope.formTwo = false;

		$scope.submit = function(player) {
			if (player==1) {
				$scope.formOne = true;
			}
			else if (player==2) {
				$scope.formTwo = true;
			}
			$scope.Player_Name = $scope.textOne;
		};

		$scope.Player_Turn = "Player 1";
		$scope.Player_Name = $scope.textOne;

		box1.owner ="";
		box2.owner ="";
		box3.owner ="";
		box4.owner ="";
		box5.owner ="";
		box6.owner ="";
		box7.owner ="";
		box8.owner ="";
		box9.owner ="";

	};


});






