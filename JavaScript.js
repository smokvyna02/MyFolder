// To find to duplicate numbers in the array n(0):
const arr = [2, 8, 3.5, -4, 20, 38, 20, 0];
const duplicates = arr.filter(el => arr.indexOf(el) !== arr.lastIndexOf(el));
console.log(duplicates[0]);
