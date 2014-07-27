var TicTacToeapp = angular.module("TicTacToe",["firebase"]);
TicTacToeapp.controller("TicTacToecontroller",function($scope, $timeout, $firebase){

	$scope.boxes = [
	[{owner:""},{owner:""},{owner:""}],
	[{owner:""},{owner:""},{owner:""}],
	[{owner:""},{owner:""},{owner:""}]
	];
	
	$scope.quotes = [
		"'All you need is love. But a little chocolate now and then doesn't hurt.' - Charles M. Schulz",
		"'There's nothing better than a good friend, except a good friend with chocolate.' - Charles Dickens",
		"'Love is a game that two can play and both win.' - Eva Gabor",
		"'There is no remedy for love but to love more.' - Henry David Thoreau",
		"'Love conquers all.' - Virgil",
		"'He is not a lover who does not love forever.' - Euripides",
		"'If you could only love enough, you could be the most powerful person in the world.' - Emmet Fox",
		"'Love is love's reward.' - John Dryden",
		"'Chocolate symbolizes, as does no other food, luxry, comfort, sensuality, gratification, and love.' - Karl Petzke",
		"'The quarrels of lovers are the renewal of love.' - Jean Racine",
		"'Never underestimate the power of chocolate.' - Anonymous",
		"'The course of love never did run smooth.' - William Shakespeare",
		"'Love is like war: easy to begin but very hard to stop.' - H. L. Mencken",
		"'The way to love anything is to realize that it may be lost.' - Gilbert K. Chesterton",
		"'Forget love. I'd rather fall in chocolate.' - Sandra J. Dykes",
		"'Love makes the world go round, but chocolate makes the trip worthwhile.' - Anonymous",
		"'Money can't buy love. But it can buy chocolate, and that's the next best thing.' - Anonymous",
		"'To witness two lovers is a spectacle for the gods.' - Johann Wolfgang von Goethe"
	];

	$scope.formOne = false;
	$scope.formTwo = false;
	$scope.winner1 = true;
	$scope.winner2 = true;
	$scope.wins = true;
	$scope.Cats1 = true;
	$scope.Game = true;
	$scope.isDisabled = false;
	

	$scope.submit = function(player) {
		if (player==1) {
			$scope.formOne = true;
		}
		else if (player==2) {
			$scope.formTwo = true;
		}
		$scope.Player_Name = $scope.textOne;
	};

	$scope.gamebegins1 = true;
	$scope.gamebegins = true;
	$scope.beforegame = false;

	$scope.startgame = function(){
		$scope.beforegame = true;
		$scope.gamebegins = false;
		$scope.gamebegins1 = false;
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
			$scope.winner1 = false;
			$scope.wins = false;
			$scope.gamebegins1 = true;
			$scope.isDisabled = true;
			$timeout(function() {
				alert($scope.quotes[Math.floor(Math.random() * $scope.quotes.length)]);
				replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
			}, 1500);
		} else if (box4.owner == "P1" && box5.owner == "P1" && box6.owner == "P1"){
			$scope.winner1 = false;
			$scope.wins = false;
			$scope.gamebegins1 = true;
			$scope.isDisabled = true;
			$timeout(function() {
				alert($scope.quotes[Math.floor(Math.random() * $scope.quotes.length)]);
				replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
			}, 1500);
		} else if (box7.owner == "P1" && box8.owner == "P1" && box9.owner == "P1"){
			$scope.winner1 = false;
			$scope.wins = false;
			$scope.gamebegins1 = true;
			$scope.isDisabled = true;
			$timeout(function() {
				alert($scope.quotes[Math.floor(Math.random() * $scope.quotes.length)]);
				replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
			}, 1500);
		} else if (box1.owner == "P1" && box4.owner == "P1" && box7.owner == "P1"){
			$scope.winner1 = false;
			$scope.wins = false;
			$scope.gamebegins1 = true;
			$scope.isDisabled = true;
			$timeout(function() {
				alert($scope.quotes[Math.floor(Math.random() * $scope.quotes.length)]);
				replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
			}, 1500);
		} else if (box2.owner == "P1" && box5.owner == "P1" && box8.owner == "P1"){
			$scope.winner1 = false;
			$scope.wins = false;
			$scope.gamebegins1 = true;
			$scope.isDisabled = true;
			$timeout(function() {
				alert($scope.quotes[Math.floor(Math.random() * $scope.quotes.length)]);
				replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
			}, 1500);
		} else if (box3.owner == "P1" && box6.owner == "P1" && box9.owner == "P1"){
			$scope.winner1 = false;
			$scope.wins = false;
			$scope.gamebegins1 = true;
			$scope.isDisabled = true;
			$timeout(function() {
				alert($scope.quotes[Math.floor(Math.random() * $scope.quotes.length)]);
				replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
			}, 1500);
		} else if (box1.owner == "P1" && box5.owner == "P1" && box9.owner == "P1"){
			$scope.winner1 = false;
			$scope.wins = false;
			$scope.gamebegins1 = true;
			$scope.isDisabled = true;
			$timeout(function() {
				alert($scope.quotes[Math.floor(Math.random() * $scope.quotes.length)]);
				replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
			}, 1500);
		} else if (box3.owner == "P1" && box5.owner == "P1" && box7.owner == "P1"){
			$scope.winner1 = false;
			$scope.wins = false;
			$scope.gamebegins1 = true;
			$scope.isDisabled = true;
			$timeout(function() {
				alert($scope.quotes[Math.floor(Math.random() * $scope.quotes.length)]);
				replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
			}, 1500);
		} else if (box1.owner == "P2" && box2.owner == "P2" && box3.owner == "P2"){
			$scope.winner2 = false;
			$scope.wins = false;
			$scope.gamebegins1 = true;
			$scope.isDisabled = true;
			$timeout(function() {
				alert($scope.quotes[Math.floor(Math.random() * $scope.quotes.length)]);
				replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
			}, 1500);
		} else if (box4.owner == "P2" && box5.owner == "P2" && box6.owner == "P2"){
			$scope.winner2 = false;
			$scope.wins = false;
			$scope.gamebegins1 = true;
			$scope.isDisabled = true;
			$timeout(function() {
				alert($scope.quotes[Math.floor(Math.random() * $scope.quotes.length)]);
				replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
			}, 1500);
		} else if (box7.owner == "P2" && box8.owner == "P2" && box9.owner == "P2"){
			$scope.winner2 = false;
			$scope.wins = false;
			$scope.gamebegins1 = true;
			$scope.isDisabled = true;
			$timeout(function() {
				alert($scope.quotes[Math.floor(Math.random() * $scope.quotes.length)]);
				replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
			}, 1500);
		} else if (box1.owner == "P2" && box4.owner == "P2" && box7.owner == "P2"){
			$scope.winner2 = false;
			$scope.wins = false;
			$scope.gamebegins1 = true;
			$scope.isDisabled = true;
			$timeout(function() {
				alert($scope.quotes[Math.floor(Math.random() * $scope.quotes.length)]);
				replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
			}, 1500);
		} else if (box2.owner == "P2" && box5.owner == "P2" && box8.owner == "P2"){
			$scope.winner2 = false;
			$scope.wins = false;
			$scope.gamebegins1 = true;
			$scope.isDisabled = true;
			$timeout(function() {
				alert($scope.quotes[Math.floor(Math.random() * $scope.quotes.length)]);
				replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
			}, 1500);
		} else if (box3.owner == "P2" && box6.owner == "P2" && box9.owner == "P2"){
			$scope.winner2 = false;
			$scope.wins = false;
			$scope.gamebegins1 = true;
			$scope.isDisabled = true;
			$timeout(function() {
				alert($scope.quotes[Math.floor(Math.random() * $scope.quotes.length)]);
				replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
			}, 1500);
		} else if (box1.owner == "P2" && box5.owner == "P2" && box9.owner == "P2"){
			$scope.winner2 = false;
			$scope.wins = false;
			$scope.gamebegins1 = true;
			$scope.isDisabled = true;
			$timeout(function() {
				alert($scope.quotes[Math.floor(Math.random() * $scope.quotes.length)]);
				replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
			}, 1500);
		} else if (box3.owner == "P2" && box5.owner == "P2" && box7.owner == "P2"){
			$scope.winner2 = false;
			$scope.wins = false;
			$scope.gamebegins1 = true;
			$scope.isDisabled = true;
			$timeout(function() {
				alert($scope.quotes[Math.floor(Math.random() * $scope.quotes.length)]);
				replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
			}, 1500);
		} else if ((box1.owner == "P1" || box1.owner == "P2") && (box2.owner == "P1" || box2.owner == "P2") && (box3.owner == "P1" || box3.owner == "P2") && (box4.owner == "P1" || box4.owner == "P2") && (box5.owner == "P1" || box5.owner == "P2") && (box6.owner == "P1" || box6.owner == "P2") && (box7.owner == "P1" || box7.owner == "P2") && (box8.owner == "P1" || box8.owner == "P2") && (box9.owner == "P1" || box9.owner == "P2")){
			$scope.Cats1 = false;
			$scope.Game = false;
			$scope.gamebegins1 = true;
			$scope.isDisabled = true;
			$timeout(function() {
				alert($scope.quotes[Math.floor(Math.random() * $scope.quotes.length)]);
				replay(box1,box2,box3,box4,box5,box6,box7,box8,box9);
			}, 1500);
		}
	};

	function replay(box1,box2,box3,box4,box5,box6,box7,box8,box9){
		
		$scope.textOne = "";
		$scope.textTwo = "";
		$scope.formOne = false;
		$scope.formTwo = false;
	
		$scope.Player_Name = "";

		$scope.Player_Turn = "Player 1";

		$scope.gamebegins1 = false;
		$scope.winner1 = true;
		$scope.winner2 = true;
		$scope.wins = true;
		$scope.Cats1 = true;
		$scope.Game = true;
		$scope.isDisabled = false;

		$scope.submit = function(player) {
			if (player==1) {
				$scope.formOne = true;
			}
			else if (player==2) {
				$scope.formTwo = true;
			}
			// $scope.Player_Name = $scope.textOne;
		};

		

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






