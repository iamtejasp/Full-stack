/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // Initialize an empty object to store total spent by category
  const categoryTotals = {};

  // Iterate through each transaction
  transactions.forEach((transaction) => {
    const { category, price } = transaction;

    // Update the total spent for the category
    if (categoryTotals[category]) {
      categoryTotals[category] += price;
    } else {
      categoryTotals[category] = price;
    }
  });

  // Convert the object to an array of objects
  const result = Object.keys(categoryTotals).map((category) => ({
    category: category,
    totalSpent: categoryTotals[category],
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;
