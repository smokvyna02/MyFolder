// What should be printed
let rainForestAcres=10;
let animals=0;
while(rainForestAcres<13 || animals<=2){rainForestAcres++ animals +=2;}
console.log(animals);
/* 
6
2
8------------??????
4
*/
// -----------------------------------------------------------------------------------------
class Animal {static belly = []; eat() {Animal.belly.push("food");}} let a = new Animal(); a.eat(); 
console.log(Animal.belly[0]) 
// Prints food
/*
Animal.belly[0]-------------food
Object.getPrototypeof(a).belly[0] 
a.belly[0]
a.prototype.belly[0]
*/
// ---------------------------------------------------------------------------------------
let rainForests=["Amazon", "Borneo", "Cerrado", "Congo"];
rainForests.splice(0,2);
console.log(rainForests);
/*
["Amazon", "Borneo", "Cerrado", "Congo"]
["Amazon", "Borneo"]
["Cerrado", "Congo"]--------------correct
["Amazon", "Borneo", "Cerrado"]
*/
// --------------------------------------------------------------------------------------
const x = [1,2];
const y = [5,7];
const z = [...x, ...y];
console.log(z);
/*
[1,2,5,7]-----------correct
[2,1,7,5]
[2,7]
[[1,2], [5,7]]
*/
// ---------------------------------------------------------------------------------------
const myFunc = () => { const b = 2; return () => console.log("b is " + b);};
const b = 1;
const test = myFunc();
test();
/*
b is undefined
b is 2--------------------correct
It won't print anything
b is 1
*/
// -------------------------------------------------------------------------------------
const person = {name: "Dave", age: 40, hairColor: "blue"};
const result = Object.keys(person).map(x => x.toUpperCase());
console.log(result);
/*
["NAME", "AGE", "HAIRCOLOR"]------------correct
It will throw a TypeError
["DAVE", 40, "BLUE"]
["Name", "Age", "HairColor"]
*/
// --------------------------------------------------------------------------------------
"pot".indexOf("potato") !== -1 
"potato".includes("Pot")
"potato".includes("pot")
// "potato".includes("pot") --------true, "pot" is in the word "potato"
"potato".contains("pot")
// --------------------------------------------------------------------------------------
document.querySelectorAll('img');
// --------------------------------------------------------------------------------------
let bear = {sound: "roar", roar(){console.log(this.sound);}}
bear.sound = "grunt";
let bearSound = bear.roar;
bearSound();
/*
grunt
Nothing is printed to the console.
undefined-------------------correct
roar
*/
// ------------------------------------------------------------------------------------
console.log(typeof(42.1));
/*
number---------correct
float
Nothing. It results in a ReferenceError.
decimal
*/
// ------------------------------------------------------------------------------------
let animal = ["jaguar", "eagle"];
// Missing line
console.log(animal[0]);

/* Should print eagle
animal.pop();---deletes the last element
animal.push("eagle");---adds element to the end
animal.unshift("jaguar");---add element to the beginning
animal.shift();------------------correct (deletes first element)
*/
// ----------------------------------------------------------------------------------
var pokedex = ["Snorlax", "Jigglypuff", "Charmander", "Squirtle"];
pokedex.pop();
console.log(pokedex.pop());
/*
Charmander---------------correct
Jigglypuff
Squirtle
Snorlax
*/
// ---------------------------------------------------------------------------------
const obj = {a:1, b:2, c:3, }; 
const obj2= {...obj, a:0, };
console.log(obj2.a, obj2.b);
/*
Nothing, it will throw an error
0 2-----------correct
1 2
undefined 2
*/
// ---------------------------------------------------------------------------------
var thing;
let func = (str = 'no arg') => {console.log(str);}
func(thing);
func(null);
/* Prints to log
null no arg
null null
no arg null ----------correct
no arg no arg
*/
// -------------------------------------------------------------------------------