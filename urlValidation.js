 
function validateURL(url) {
	const urlPattern = /^(http|https):\/\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+[.][a-zA-Z]+$/;
   
	if (urlPattern.test(url)) {
	  console.log(`${url} is a valid URL.`);
	} else {
	  console.log(`${url} is not a valid URL.`);
	}
  }
   
  // Test cases
  const url1 = "http://www.example.com";
  const url2 = "https://subdomain.example123.co";
  const url3 = "ftp://invalidurl.com";
   
  validateURL(url1);
  validateURL(url2);
  validateURL(url3);
 