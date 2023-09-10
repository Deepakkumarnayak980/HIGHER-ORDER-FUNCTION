function validateLinkedInURL(url) {
	const linkedInPattern = /^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
   
	if (linkedInPattern.test(url)) {
	  console.log(`${url} is a valid LinkedIn profile URL.`);
	} else {
	  console.log(`${url} is not a valid LinkedIn profile URL.`);
	}
  }
   
  // Test cases
  const url1 = "https://www.linkedin.com/in/john-doe_123";
  const url2 = "https://www.linkedin.com/in/mary123";
  const url3 = "https://www.linkedin.com/in/user-name-abc-xyz";
  const url4 = "https://www.linkedin.com/in/invalid@user";
  const url5 = "https://www.linkedin.com/in/short";
  const url6 = "https://www.linkedin.com/in/this-is-a-very-long-profile-url-that-exceeds-thirty-characters";
   
  validateLinkedInURL(url1);
  validateLinkedInURL(url2);
  validateLinkedInURL(url3);
  validateLinkedInURL(url4);
  validateLinkedInURL(url5);
  validateLinkedInURL(url6);
  
  