// To find to duplicate numbers in the array n(0):
const arr = [2, 8, 3.5, -4, 20, 38, 20, 0];
const duplicates = arr.filter(el => arr.indexOf(el) !== arr.lastIndexOf(el));
console.log(duplicates[0]);

// To find to duplicate numbers in the array n(0)2:
function findNumber (array){
    for (let i = 0; i < array.length; i++){
        for (let j = i + 1; j < array.length; j++){
            if (array[i] == array[j]){
                return array[i];
            }
        }
    }
}

const array = [...arr]; //... - метод распаковать array
console.log(findNumber(array));