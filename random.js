// Function to generate a random number within a range
function generateRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
  }
   
  // Function to display progress indications
  function displayProgress(seconds) {
	const interval = setInterval(function() {
	  console.log(`Generating number in ${seconds} seconds...`);
	  seconds--;
   
	  if (seconds < 0) {
		clearInterval(interval);
	  }
	}, 1000);
  }
   
  // Function to delay and generate a random number
  function generateRandomNumberWithDelay(delayInSeconds) {
	displayProgress(delayInSeconds);
   
	setTimeout(function() {
	  const randomNumber = generateRandomNumber(1, 100);
	  console.log(`Random number generated: ${randomNumber}`);
	}, delayInSeconds * 1000);
  }
   
  // Set the delay time (in seconds)
  const delayTime = 3;
   
  // Call the function to generate a random number with delay
  generateRandomNumberWithDelay(delayTime);
  