//manipulating arrays with push, pop, shift and unshift.

// push()
//An easy way to append data to the end of an array is via the push() function..push() takes one or more parameters and "pushes" them onto the end of the array.

let arr = [1,2,3];
var arr1 = arr.push(4);

console.log(arr1);
console.log(arr);
// arr is now [1,2,3,4]


// pop()
// Another way to change the data in an array is with the .pop() function..pop() is used to "pop" a value off of the end of an array. We can store this "popped off" value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.


var oneDown = arr.pop();
console.log(oneDown); // Returns 4
console.log(arr); // Returns [1, 2, 3]


// shift()
//It works just like .pop(), except it removes the first element instead of the last.

var arr2 = arr.shift();

console.log(arr2);
console.log(arr);

// shift()
// .unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.

var arr3 = arr.unshift(1);

console.log(arr3);
console.log(arr);