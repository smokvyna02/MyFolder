// To find to duplicate numbers in the array O(n):
const arr = [2, 8, 3.5, -4, 20, 38, 20, 0];
const duplicates = arr.filter(el => arr.indexOf(el) !== arr.lastIndexOf(el));
console.log(duplicates[0]);

// To find to duplicate numbers in the array O(n^2):
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

//1. Напишите функцию, которая принимает массив чисел arr
// и возвращает все пары одинаковых элементов в виде двумерного массива
// Например, const arr1 = [2, 1, 5, 9, 6, 4, 1, 5, 6]
// Результат:            [[1, 1], [5, 5], [6, 6]]
const arr1 = [2, 1, 5, 9, 6, 4, 1, 5, 6];
function sameEl(arr1){
    const pairs = [];
    for (let i = 0; i < arr1.length; i++){
        for (let j = i + 1; j < arr1.length; j++){
            if (arr1[i] == arr1[j]){
                pairs.push([arr1[i], arr1[j]]);
            }
        }
    }
    return pairs;
}
console.log(sameEl(arr1));