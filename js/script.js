$(document).ready(function() {

	
	
	getUserInput()

	

	function getUserInput() {
		var userInput = prompt("Please choose an ending point for Fizz Buzz.");
		userInput = parseFloat(userInput, 10)
				

		if ((isNaN(userInput)) || (userInput % 1 != 0) || (userInput === null)) {
			alert("Please enter a whole number!");
			getUserInput();		
		}else{
			fizzBuzz(userInput);
		}		
	}	


	function fizzBuzz(max) {
		
		var i = max;
		
		for(var i = 1; i < max; i++) {
			
			if((i % 3 === 0) && (i % 5 === 0)) {
				$("body").append("<p>FizzBuzz</p>");
			}else{
				if(i % 5 === 0) {
					$("body").append("<p>Buzz</p>");
				}else{
					if(i % 3 === 0) {
						$("body").append("<p>Fizz</p>");
					}else{
						$("body").append("<p>" + i + "</p>");
					}
				}
			}

		}
	}

	


	
	 
	
});