const arr = [1, 6, 2, 1, 8, 8, 2, 7, 3];
function sameElement(arr){
    const pairs = [];
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] == arr[j]){
                pairs.push(arr[i], arr[j]);
            }
        }
    }
    return pairs;
}
console.log(sameElement(arr))