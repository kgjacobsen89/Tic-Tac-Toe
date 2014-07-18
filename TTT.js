var TicTacToeapp = angular.module("TicTacToe",[]);
TicTacToeapp.controller("TicTacToecontroller",function($scope){


	$scope.boxes = [
	[{owner:""},{owner:""},{owner:""}],
	[{owner:""},{owner:""},{owner:""}],
	[{owner:""},{owner:""},{owner:""}]
	];

	$scope.Player_Name = "Player 1";

	$scope.claim = function(object){
		if (object.owner == "P1" || object.owner == "P2"){
			alert("Sorry, that's already taken!");
		} else {				
				if ($scope.Player_Name == "Player 1"){				
				object.owner = "P1";
				$scope.Player_Name = "Player 2";
				$scope.test();
			} else {				
				object.owner = "P2";
				$scope.Player_Name = "Player 1";
				$scope.test();
			}
		}
	};


	$scope.test = function(){	
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
			alert("P1 wins!");
			replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
		} else if (box4.owner == "P1" && box5.owner == "P1" && box6.owner == "P1"){
			alert("P1 wins");
			replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
		} else if (box7.owner == "P1" && box8.owner == "P1" && box9.owner == "P1"){
			alert("P1 wins");
			replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
		} else if (box1.owner == "P1" && box4.owner == "P1" && box7.owner == "P1"){
			alert("P1 wins");
			replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
		} else if (box2.owner == "P1" && box5.owner == "P1" && box8.owner == "P1"){
			alert("P1 wins");
			replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
		} else if (box3.owner == "P1" && box6.owner == "P1" && box9.owner == "P1"){
			alert("P1 wins");
			replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
		} else if (box1.owner == "P1" && box5.owner == "P1" && box9.owner == "P1"){
			alert("P1 wins");
			replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
		} else if (box3.owner == "P1" && box5.owner == "P1" && box7.owner == "P1"){
			alert("P1 wins");
			replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
		} else if (box1.owner == "P2" && box2.owner == "P2" && box3.owner == "P2"){
			alert("P2 wins");
			replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
		} else if (box4.owner == "P2" && box5.owner == "P2" && box6.owner == "P2"){
			alert("P2 wins");
			replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
		} else if (box7.owner == "P2" && box8.owner == "P2" && box9.owner == "P2"){
			alert("P2 wins");
			replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
		} else if (box1.owner == "P2" && box4.owner == "P2" && box7.owner == "P2"){
			alert("P2 wins");
			replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
		} else if (box2.owner == "P2" && box5.owner == "P2" && box8.owner == "P2"){
			alert("P2 wins");
			replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
		} else if (box3.owner == "P2" && box6.owner == "P2" && box9.owner == "P2"){
			alert("P2 wins");
			replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
		} else if (box1.owner == "P2" && box5.owner == "P2" && box9.owner == "P2"){
			alert("P2 wins");
			replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
		} else if (box3.owner == "P2" && box5.owner == "P2" && box7.owner == "P2"){
			alert("P2 wins");
			replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
		} else if ((box1.owner == "P1" || box1.owner == "P2") && (box2.owner == "P1" || box2.owner == "P2") && (box3.owner == "P1" || box3.owner == "P2") && (box4.owner == "P1" || box4.owner == "P2") && (box5.owner == "P1" || box5.owner == "P2") && (box6.owner == "P1" || box6.owner == "P2") && (box7.owner == "P1" || box7.owner == "P2") && (box8.owner == "P1" || box8.owner == "P2") && (box9.owner == "P1" || box9.owner == "P2")){
			alert("It's a catsgame!!!");
			replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
		}
	};

	function replay(b1,b2,b3,b4,b5,b6,b7,b8,b9){
		$scope.Player_Name = "Player 1";
		b1.owner ="";
		b2.owner ="";
		b3.owner ="";
		b4.owner ="";
		b5.owner ="";
		b6.owner ="";
		b7.owner ="";
		b8.owner ="";
		b9.owner ="";
	};


});






