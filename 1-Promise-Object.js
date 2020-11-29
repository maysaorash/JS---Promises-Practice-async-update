const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

/* 1: 
 * Create a fuction called executorFunction:
 * 
 * The executorFunction() should have two parameters: 
 * resolve and reject
 * 
 * Check if the sunglasses property on the inventory 
 * object has a value greater than zero
 * 
 * If it does, executorFunction() should invoke/call resolve() with 
 * the string 'Sunglasses order processed.'
 * 
 * If it does not, executorFunction() should invoke/call reject() 
 * with the string 'That item is sold out.'
*/

// Write your code here

const executorFunction = function (resolve, reject) {
  if(inventory.sunglasses > 0){
    resolve('Sunglasses order processed.');
  } else {
    reject('That item is sold out.');
  }
}

/* 2: 
 * Create a function, orderSunglasses().
 * This function should have no parameters. 
 * It should return a new promise constructed 
 * by passing your executorFunction() function into the 
 * Promise constructor.
 */ 

// Write your code here

const orderSunglasses = function() {
  return new Promise(executorFunction);
}

/* 3:
 * Create a variable orderPromise assigned to the 
 * returned value of your orderSunglasses() function.
 */ 

// Write your code here

let orderPromise = orderSunglasses(); 


/* 4: 
 * At the bottom of your index.js file, 
 * log orderPromise to the console.
 */

// Write your code here
// console.log(orderPromise)

module.exports = orderPromise;
