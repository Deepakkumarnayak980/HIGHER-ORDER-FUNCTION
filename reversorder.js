const input = "Hello, world!";
// Function to reverse the string
function reverseString(str) {
  return str.split('').reverse().join('');
}
 
// Delay function using setTimeout
function delay(callback, time) {
  setTimeout(callback, time);
}
 
// Implementing the program
function reverseStringWithDelay(inputString) {
  // Delay for 2 seconds and then reverse the string
  delay(function() {
	const reversedString = reverseString(inputString);
    console.log("Reversed string:", reversedString);
  }, 2000);
}
// Call the function with the input string
reverseStringWithDelay(input);
