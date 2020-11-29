const {checkInventory} = require('./4.1-helper.js');

const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};

/* 1:
 * We’re going to refactor the functionality of the 
 * previous exercise but this time we’ll use .catch()! 
 * 
 * First invoke the checkInventory() function with the 
 * order. Remember, this function will return a promise.
 * 
 * 2:
 * Add a .then() to the returned promise. 
 * Pass in the success handler handleSuccess().
 * 
 * 3:
 * Add a .catch() to the returned promise. 
 * Pass in the failure handler handleFailure().
 */

// Write your code here:
checkInventory(order).then(handleSuccess).catch(handleFailure)

async function handle () {
  try {
    const order1 = await checkInventory(order);
    console.log(order1)
  } catch (err) {
    console.log(err);
  }
}

handle()
