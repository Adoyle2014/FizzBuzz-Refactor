$(document).ready(function() {

	
		for(var i = 1; i < 101; i++) {
			
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
	 
	
});