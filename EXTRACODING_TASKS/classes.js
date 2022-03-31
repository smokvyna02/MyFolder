//=====================Lesson 8==============================
//functions

// //1. Напишите функцию, которая принимает массив чисел arr
// // и возвращает все пары одинаковых элементов в виде двумерного массива
// // Например, const arr = [2, 1, 5, 9, 6, 4, 1, 5, 6]
// // Результат:            [[1, 1], [5, 5], [6, 6]]

// function returnArray(arr){
//   const newArr = [];
// for (let i = 0; i < arr.length - 1; i++){
//   for (let j = i + 1; j < arr.length; j++){
//   if(arr[i] === arr[j]){
//     newArr.push([arr[i], arr[j]])
//       }
//     }
//  }
//   return newArr;
// }
//   console.log(returnArray([2, 1, 5, 9, 6, 4, 1, 5, 6]));




// // 2. Последовательность Фибоначчи: 0,1,1,2,3,5,8,13,21,34,...
// // Создайте функцию, которая получает число n и 
// // возвращает последовательность n чисел Фибоначчи

// function getFibonachi(n){
//   const arr = [0, 1];
//   for(let i = 2; i <= n; i++){
//     arr.push(arr[i-2] + arr[i - 1]);
//   }
//   return arr;
// }
// console.log(getFibonachi(20));

// function fib(n){
//     var arr = [];
//     for(var i = 0; i <n; i++ ){
//         if(i == 0 || i == 1){
//             arr.push(i);
//         } else {
//             var a = arr[i - 1];
//             var b = arr[i - 2];
//             arr.push(a + b);
//         }
//     }
//     return arr
// }
// console.log(fib(8))


// // 3. Палиндромы:
// // 3.1 Напишите функцию, которая получает имя и выводит 
// //     его в обратном порядке

// function palindrom(name){
//   let pName = "";
//   for(let i = name.length - 1; i >=0; i--){
//    pName += name[i];
//   }
//   return pName;
// }
// console.log(palindrom("Tatiana"));


// // 3.2 Напишите функцию isPalindrome, которая принимает строку и определяет, 
// //     является ли строка палиндромом после удаления из нее всех пробелов
// //     Выполните проверку на примере строки: "was it a car or a cat i saw"

// function isPalindrom(str){
//   let nStr = ""
//   let pStr = "";
//   for(let i = str.length - 1; i >=0; i--){
// if (str[i] != " "){
//   pStr += str[i];
//     }
//   }
//   for(let i = 0; i < str.length; i++){
//     if(str[i] != " "){
//       nStr += str[i];
//     }
//   }
//   if(pStr === nStr){
//     return true;
//   }
//   return false;
// }
// console.log(isPalindrom("was it a car or a cat i saw"));

// let str2 = "was it a car or a cat i saw"; 
//     function isPalindrome(str) {
//       let reverseStr = "";
//       let strWithoutSpaces = "";
//       for (let i = str.length - 1; i >= 0; i--) {
//             if (str[i] != " ") {
//                 reverseStr += str[i];
//             }
//       }
//         for (let i = 0; i < str.length; i++) {
//             if (str[i] != " ") {
//                 strWithoutSpaces += str[i];
//             }
//         }
//         if (reverseStr === strWithoutSpaces) {
//             return true;
//         }
//         return false;
//     }
//     console.log(isPalindrome(str2));

// let str2 = "was it a car or a cat i saw"; 
//     function isPalindrome(str) {
//       let strWithoutSpaces = "";
//       for (let i = 0; i < str.length; i++) {
//             if (str[i] != " ") {
//                 strWithoutSpaces += str[i];
//             }
//         }
//         if (reverseName(strWithoutSpaces)===strWithoutSpaces ) {
//             return true;
//         }
//         return false;
//     }
//     console.log(isPalindrome(str2));



// let str = "123";
// let sum = 0;

// for(let i = 0; i < str.length; i++) {
//  sum += +str[i];

// }

// console.log(sum);


//4. Напишите функцию draw, которая 
// принимает количество строк n и возвращает строку,
// содержащую рисунок:
// *****
// ****
// ***
// **
// *

// function draw(n){
// let str = "";
// for(let i = n; i >= 1; i--){
//   str += "*".repeat(i) + "\n";
// }  
//   return str;
// }
// console.log(draw(5));


//5. Напишите функцию draw которая 
// принимает ширину треугольника (здесь 7) n и возвращает строку],
// содержащую рисунок:

//     *
//    ***
//   *****
//  *******

// function draw(n){ 
//   let newStr= '' ;
//   for(let i = 1; i <= n; i+=2){
//      newStr +=' '.repeat((n-i)/2) + '*'.repeat(i) +'\n';
//   }
//   return newStr;
// }
// console.log(draw(7))


//5. Напишите функцию draw которая выводит содержащий рисунок:

// "
//                                     1 1
//                                 1 2 2 1
//                             1 2 3 3 2 1
//                         1 2 3 4 4 3 2 1
//                     1 2 3 4 5 5 4 3 2 1
//                 1 2 3 4 5 6 6 5 4 3 2 1
//             1 2 3 4 5 6 7 7 6 5 4 3 2 1
//         1 2 3 4 5 6 7 8 8 7 6 5 4 3 2 1
//     1 2 3 4 5 6 7 8 9 9 8 7 6 5 4 3 2 1
// 1 2 3 4 5 6 7 8 9 0 0 9 8 7 6 5 4 3 2 1"

// function drawTriangle(n){
//   let str = '';
//   let revStr = '';
//   let totStr = '';
//   for (let i = 0; i <= n.length - 1; i ++) {
//      str += '\n' + ' '.repeat((n.length - i) * 4)
//    for (let j = 0; j <= i; j ++){
//      str += n[j] + ' ';
//    }
//     for (let j = i; j >= 0; j --){
//      str += n[j] + ' ';
//     }
//  }
//   return str.trimEnd()
// }

// console.log(drawTriangle([1,2,3,4,5,6,7,8,9,0]));

// function draw(n) {
//   for (var i = 1; i <= n; i++) {
//      let str = ‘’;
//     for (var j = 1; j <= i; j++){
//       var str1 = ‘’;
//       str +=j + ' ‘;
//     }
//       for (var k = str.length-2; k >= 0; k--) {
//         str1 += str[k];
//       }
//   console.log(’ ’.repeat(31-(str+str1).length)+str+str1);
//       }
// }
// console.log(draw(10));

// function draw3() {
//     let result = "";
//     for (let i = 1; i <= 10; i++) {
//       let res = " ".repeat( 4 * (10 - i));
//       for (let j = 1; j <= i; j++) {
//         res += ' ' + (j % 10);
//       }
//       for (let k = i; k >= 1; k--) {
//         res += ' ' + (k % 10);
//       }
//       result += "\n" + res;
//     }
//     return result;
//   }
//   console.log(draw3());
  
  // 6. Напишите Функция fahrenheitToCelcius для  перевода градусов 
  // Фаренгейта в градусы Цельсия. Функция принимает значение 
  // температуры в градусах фаренгейта
  // и возвращает температуру в градусах Цельсия
  
  // function fahrenheitToCelcius(f){
  //   let c = (f - 32)*5/9;
  //   return c;
  // }
  // console.log(fahrenheitToCelcius(100));
  
  // 7. Функция - calculator
  // принимает два числа a, b и операцию operation (+, -, *, /)
  // и возвращает результат выполнения операции над числами или сообщение об
  // ошибке в случае некорректной операции или деления на ноль
  
  // function calculator(a, b, operation){
  //   switch (operation){
  //   case "+":
  //   return a + b;
  //   case "-":
  //   return a - b; 
  //   case "*":
  //   return a * b; 
  //   case "/":
  //   return b !=0 ? a/b : "error";
  //   }
  // }
  // console.log(calculator(20, 0, "/"));
  
  
  // 8. функция isBrakets, которая принимает строку s, 
  // содержащую скобки '[]', проверяет правильность 
  // расстановки скобок. 
  // Возвращает 'valid' or 'invalid'
   
  // function isBalanced (s) {
  //     let open = 0;
  //     let closed = 0;
  //     for (let i = 0; i < s.length; i++) {
  //         if(s[i] == "[") {
  //             open++;
  //         } else if (s[i] == "]") {
  //             closed++;
  //         } else {
  //             return "Incorrect value";
  //         }
  //         if (closed > open) {
  //             return "invalid";
  //         }
  //     }
  //     if (open === closed) {
  //         return "valid";
  //     } else {
  //         return "invalid";
  //     }
  // }
  // console.log(isBalanced('[][][[]]')); // valid
  // console.log(isBalanced('[[[[]]]][[[]]][[]][]')); // valid  
  // console.log(isBalanced('[]][[[]]')); // invalid 
  // console.log(isBalanced('][[[]][][')); // invalid
  
  // function isBalanced(s) {
  //   let result = [];
  //   for (let i = 0; i < s.length; i++) {
  //     if (s[i] === '[') {
  //       result.push(s[i]);
  //     } else if (s[i] === ']') {
  //       if (result[result.length - 1] === '[') result.pop();
  //       else return 'invalid';
  //     }
  //   }
  //   return result.length === 0 ? 'valid' : 'invalid';
  // }
  // console.log(isBalanced('[][][[]]')); // valid
  // console.log(isBalanced('[[[[]]]][[[]]][[]][]')); // valid  
  // console.log(isBalanced('[]][[[]]')); // invalid 
  // console.log(isBalanced('][[[]][][')); // invalid
  
  
  // function isBalanced(s) {
  //     const arr = [];
  //     for (let i = 0; i <= s.length - 1; i++) {
  //         if (arr[arr.length - 1] == s[i]) {
  //             arr.pop();
  //         } else {
  //             arr.push(s[i]);
  //         }
  //     }
  //     return arr.join('');
  // }
  // console.log(isBalanced('[][][[]]')); // valid
  // console.log(isBalanced('[[[[]]]][[[]]][[]][]')); // valid  
  // console.log(isBalanced('[]][[[]]')); // invalid 
  // console.log(isBalanced('][[[]][][')); // invalid
  
  
  
  