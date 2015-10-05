function findPrimeNumbersUnder(max_prime){

		//First we define an empty array for our prime numbers. We will be adding values to this array later on.
		var primes = [];
		
		//We'll run a for loop that starts at the number entered and runs all the way down until 0
		for(var i = max_prime; i > 0; i--){
				
				//What  do all prime numbers have in common? They have only two factors. Now we have to create a new array that will hold the factors of the number we're currently testing.
				var factors = [];
				
				//Inside our for loop we need to create another for loop to test and see how many factors the number has
				for(var j = i; j > 0; j--){

						//We'll use modulo to check and see if the current number is a factor
						if(i % j === 0){
								factors.push(j);
						}

				}
		
				//By the time the above loop finishes, all the number's factors will be inside the 'factors' array.

				//Now we'll check and see the length of the factors array to deterimne if the number is a prime. (Prime numbers have 2 factors only)
				//If it does only have 2 factors, then we'll add it to our 'primes' array.
				if(factors.length === 2){
						primes.unshift(i);
				}
				
		}
		
		//Now we return our 'primes' array. That way whenever we call our fucncion this is the value it will give us.
		return primes;
}

sprintf(findPrimeNumbersUnder(50));