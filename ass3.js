const inventory = {
	apple: 0.5,
	banana: 0.3,
	orange: 0.6,
	mango: 1.2,
  };
   
  // Conversion function to convert USD to INR
  function convertToINR(priceUSD) {
	const exchangeRate = 80;
	return priceUSD * exchangeRate;
  }
   
  // Convert prices to INR using the map function
  function convertInventoryToINR(inventory) {
	const inventoryINR = {};
   
	for (const item in inventory) {
	  const priceUSD = inventory[item];
	  const priceINR = convertToINR(priceUSD);
	  inventoryINR[item] = priceINR;
	}
   
	return inventoryINR;
  }
   
  // Convert and display the inventory in INR
  const inventoryINR = convertInventoryToINR(inventory);
  console.log("Inventory in INR:", inventoryINR);

  