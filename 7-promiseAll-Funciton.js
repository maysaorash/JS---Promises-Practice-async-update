const {checkAvailability} = require('./7.1-helper.js');

const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
	console.log(rejectionReason);
};

/* Intro:
 * We want to reach out to some distributors to see if 
 * they have the items we need. We only want to make one 
 * restocking order, so we’ll only want to place the 
 * order if all of the items are available.
 * 
 * Take a look at the provided code. We require in one 
 * function: checkAvailability().
 * 
 * In 7.1-helper.js, checkAvailability() expects two 
 * string arguments: an item and a distributor. It 
 * returns a promise. The function simulates checking 
 * that the given distributor has a given item. 80% of 
 * the time it will resolve the promise with the item, 
 * and 20% of the time it will reject the promise with an 
 * error message stating that the item isn’t available.
 * 
 * We also provided two functions which will serve as 
 * success and failure handlers.
 */

/* 1: 
 * Create three variables each assigned to a separate 
 * promise:
 
 * checkSunglasses should be assigned the value returned 
 * from invoking checkAvailability() with 'sunglasses' as 
 * its first argument and 'Favorite Supply Co.' as its 
 * second argument.
 
 * checkPants should be assigned the value returned from 
 * invoking checkAvailability() with 'pants' as its first 
 * argument and 'Favorite Supply Co.' as its second 
 * argument.
 
 * checkBags should be assigned the value returned from i
 * invoking checkAvailability() with 'bags' as its first 
 * argument and 'Favorite Supply Co.' as its second 
 * argument.
 * 
 * Write your code below:
 */ 

const checkSunglasses = checkAvailability('sunglasses','Favorite Supply Co.')
const checkPants = checkAvailability('pants', 'Favorite Supply Co.')
const checkBags = checkAvailability('bags', 'Favorite Supply Co.')

/* 2: 
 * Invoke Promise.all() with an array containing 
 * checkSunglasses, checkPants, and checkBags.
 *
 * Write your code below:
 */ 
//const allPromises = Promise.all([checkSunglasses, checkPants, checkBags])

/* 3: 
 * Chain a .then() to the promise returned from 
 * Promise.all(). You should pass in onFulfill to serve 
 * as the success handler.
 *
 * Write your code below:
 */ 
// allPromises.then(onFulfill).catch(onReject)

/* 4:
 * Add a .catch() to the chain. You should pass in 
 * onReject to serve as the failure handler.
 *
 * Write your code below:
 */ 

async function handlePromise() {
    const allPromises = await Promise.all([checkSunglasses, checkPants, checkBags]);
		onFullfill(allPromises);
	}

handlePromise().catch(onReject);