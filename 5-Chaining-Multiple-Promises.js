const {checkInventory, processPayment, shipOrder} = require('./5.1-helper.js');

/* Intro:
 * checkInventory() expects an order argument and returns 
 * a promise. If there are enough items in stock to fill 
 * the order, the promise will resolve to an array. 
 * The first element in the resolved value array will be 
 * the same order and the second element will be the 
 * total cost of the order as a number.
 * 
 * processPayment() expects an array argument with the 
 * order as the first element and the purchase total as 
 * the second. This function returns a promise. If there 
 * is a large enough balance on the giftcard associated 
 * with the order, it will resolve to an array. The first 
 * element in the resolved value array will be the same 
 * order and the second element will be a tracking number.
 * 
 * shipOrder() expects an array argument with the order 
 * as the first element and a tracking number as the 
 * second. It returns a promise which resolves to a 
 * string confirming the order has shipped.
 */

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

// checkInventory(order)
// .then((resolvedValueArray) => {
/* 1:
 * We set up a promise chain but it’s missing a couple 
 * important lines of code to make it function properly.
 * 
 * We invoked checkInventory() with order and chained 
 * a .then() function to it. This .then() has an 
 * anonymous function as its success handler, but it’s 
 * missing a return statement.
 * 
 * The success handler should return a processPayment()
 * promise.
 * 
 * Write the correct return statement below:
 */
// return processPayment(resolvedValueArray)
 
// })
// .then((resolvedValueArray) => {
/* 2:
 * We have a second .then() function on the chain. 
 * This .then() also has an anonymous function as its
 * success handler and is missing a return statement.
 * The success handler should return a shipOrder() 
 * promise.
 * 
 * Write the correct return statement below:
 */
//   return shipOrder(resolvedValueArray)
// })
// .then((successMessage) => {
//   console.log(successMessage);
// })
// .catch((errorMessage) => {
//   console.log(errorMessage);
// });


// Async / Await
// Resquests
async function onSale () {
  try {
    const order1 = await checkInventory(order);
    const process = await processPayment(order1)
    const shipping = await shipOrder(process)
    console.log(shipping)
  } catch (err) {
    console.log(err);
  }
}

onSale()

