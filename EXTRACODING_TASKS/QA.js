// buble sort
const arr = [38, 4, 1, 88, 9]
let temp = null;
for (let i = 0; i < arr.length; i++){ //i = 0
    for (let j = 0; j < (arr.length - 1); j++){ // j = 0
        if (arr[j] > arr[j + 1]){ // 38 > 4 == true
           // temp = arr[j]; // temp = 38
           // arr[j] = arr[j + 1]; // arr[0] = 4 [4, 4, 1, 88, 9]
           // arr[j + 1] = temp; // arr[1] = 38 [4, 38, 1, 88, 9] [4, 1, 38, 9, 88]
        [arr[j], arr[j + 1]] = [arr[j +1], arr[j]];
        }
    }
}
console.log(arr);