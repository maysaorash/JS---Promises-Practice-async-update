const {checkInventory, processPayment, shipOrder} = require('./5.1-helper.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

// Refactor, or rewrite, the code to avoid the two common mistakes: nesting and forgetting to return properly.

// checkInventory(order)
//   .then((resolvedValueArray) => {
//     return processPayment(resolvedValueArray)
//   }).then((resolvedValueArray) => {
//     return shipOrder(resolvedValueArray)
//   }).then((successMessage) => {
//     console.log(successMessage);
//   }).catch((err) => {
//     console.log(err)
//   });

async function checkMiss () {
  try {
    const order1 = await checkInventory(order);
    const process = await processPayment(order1)
    const shipping = await shipOrder(process)
    console.log(shipping)
  } catch (err) {
    console.log(err);
  }
}

checkMiss()