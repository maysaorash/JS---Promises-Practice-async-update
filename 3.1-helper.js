const inventory = {
    sunglasses: 0,
    pants: 1088,
    bags: 1344
};

const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let inStock = order.every(item => inventory[item[0]] >= item[1]);
            if (inStock) {
                resolve(`Thank you. Your order was successful.`);
            } else {
                reject(`We're sorry. Your order could not be completed because some items are sold out.`);
            }
        }, 1000);
    })
};

module.exports = { checkInventory };

/* 
 * checkInventory() builds on the logic of the 
 * orderSunglasses() function you wrote in a previous
 * exercise.
 * 
 * checkInventory() takes in an array representing an 
 * order and returns a promise.
 * 
 * If every item in the order is in stock, that promise 
 * resolves with the value "Thank you. Your order was 
 * successful."
 * 
 * Otherwise, the promise rejects with the value "We're 
 * sorry. Your order could not be completed because some 
 * items are sold out".
 * 
 * We used setTimeout() to ensure that the 
 * checkInventory() promise settles asynchronously.
 * 
 */