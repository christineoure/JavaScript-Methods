// let age = 21
// console.log(age)

// let temperature = 37
// console.log(temperature)

// // let x = myfunction(3,4);

// // function myfunction (a,b){
// //     return a*b;
// // }

// //finding the square root of a number 


// const number = 4;

// const result = Math.sqrt(4);
// console.log(`The square root of ${number} is ${result}`);

// const numb = 25;

// const ans = Math.sqrt(numb);
// console.log({ans})

// const digit = 0
// const digitno = Math .sqrt(0)
// console.log({digitno})

// const digs = -4
// const digsno = Math .sqrt(-4)
// console.log({digsno})
// //if statements
// a=5 
// b=3
// if (a<b){
//     console.log(a);
// }

// console.log(b);

// // if else statements
// function testNum(a) {
//     let result;
//     if (a > 0) {
//       result = 'positive';
//     } else {
//       result = 'NOT positive';
//     }
//     return result;
//   }
//   console.log(testNum(-5));

// function cont(c) {
//     let result;
//     if (c === 6) {
//         result = 'Hello World'
//     }
//     else{
//         result = 'Goodbye World'
//     }
//     return result;
// }
// console.log(cont(6));


// function myno(x) {
//     let result;
//     if (x>5){
//         result = 'Thank you!'
//     }
//     else{
//         result = 'Come back later'
//     }
//     return result;
// }
// console.log(myno(10));

//else if statements


// a=40
// a=50
// a=90
// function numbers() {
//     let result;
//     if (z<50)
//     {
//         result = 'That is my name'
//     }
//     else if (z===50)
//     {
//         result = 'Congratulations!'
//     }
//     else if (z>50)
//     {
//         result = 'Come back'
//     }
//     else;
//     {
//         result = 'see you later'
//     }
//     return result
// }
// // console.log(numbers(90));
// // console.log(numbers(40));
// console.log(numbers(a));

//for loops
// const n = 5;

// for (let i = 1; i <= n; i++) {
//     console.log(`I love Coding.`);
// }

// const q = 10;

// for (let i = 1; i <= q; i++) {
//     console.log('Hello world.');
// }

// const qp = 10;

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

function one(){
    a = 100
    function two(){
        console.log(a);
    }
     two()
}
one()

console.log(number);
var number = 2;
console.log(number);


function marks (scores){
    // let result;
    if (scores === 49 ){
        console.log("E");
    }
    else if (scores>=50 && scores <= 59){
        console.log("D");

    }
    else if (scores>=60 && scores<=69){  
        console.log("C");

    }
    else if (scores>=70 && scores<=89){  
        console.log("B");

    }
    else if (scores>=90 && scores<=100){  
        console.log("A");

    }
    else{
        console.log("Failed")
    }
}
marks (70)

//Using two pointer methods

// const array = [1,2,3,4,5,6,7,8]

// const k = 9;
// function findPairs(array, k){
//     let start = 0;
//     let end = array.length - 1;
//     let occurrences = [];
    
//     while(start < end){
//         if (array[start]+ array[end] === k){
//             occurrences.push([start, end]);
//             start++;
//             end--;
//         } else if (array[start] + array[end] < k) {
//             start++;
//         } else {
//             end--;
//         }
//     }
//     return occurrences;
// }
// console.log(findPairs(array, k));

const myArray = [1,2,3,4,5,6,7,8,9];

const sum = 10;

function both (myArray, sum) {
    let start = 0;
    let end = myArray.length - 1;
    let occurances = [];
  
    while (start < end) {
      if (myArray[start] + myArray[end] === sum) {
        occurances.push([start, end]);
        start++;
        end--;
      } else if (myArray[start] + myArray[end] < sum) {
        start++;
      } else {
        end--;
      }
    }
    return occurances;
  }
  
  console.log(both(myArray, sum));

const smallarray = [1, 2, 3, 4, 5, 6, 7, 8];
const x = 9;

function spotSums (smallarray, x){
    let start = 0;
    let end = smallarray.length - 1;
    let occurances = [];

    while(start < end){
        if(smallarray[start] + smallarray[end] === x){
            occurances.push([start, end]);
            start++;
            end--;
        }else if (smallarray[start] + smallarray[end] < x){
            start++;
        }else{
            end--;
        }
    }
    return occurances;
}
console.log(spotSums(smallarray, x));

//String Methods

// let word = "Mwamba";
// let length = word.length;

var  a = [  function  (x) {  return  x*x; }, 20];   // An  array literal 
console.log(a[0](a[1]));  

// function  operate  (operator, operand1, operand2) { 
//     return  operator(operand1, operand2); 
//     } 
//     var  i = operate(add, operate(add, 2, 3), operate(multiply,  4, 5));  // i 


// concatenating an array 

const arr1 =[1,2,3];
const arr2 =[4,5,6];

const merged = arr1.concat(arr2);

console.log(merged);
console.log(arr1);
console.log(arr2);

const first = ["mango", "pawpaw", "pears"]
const next =["coconut", "apples", "cherry"]
const cool =["me", "you", "us"]

const merge = first.concat(next, cool);

console.log(merge)

const feelings = ['happy', 'angry','sad']
const joined = feelings.join('<=>');
console.log(joined);

const Array =[68,6,85,90,9];
console.log(Array);


//looping through arrays using the for loop
const IArray = [10,20,30,40,50,60,78,76,34]
for (let i = 0; i < IArray.length; i++){
    console.log(i);
    console.log(IArray[i]);
    console.log(`Element at index ${i} is ${IArray[i]}`);
}
//add elements into the array

const thisArray = [56,78,34,65,23,5,6];
thisArray.push("orange");
console.log(thisArray);

thisArray.unshift("cocoa");
console.log(thisArray);

thisArray.shift("cocoa");
console.log(thisArray);

thisArray.pop("orange");
console.log(thisArray);

thisArray.slice();
console.log(thisArray);

// **thisArray.isArray([ 56, 78, 34, 65, 23, 5, 6 ]);
// console.log(thisArray);


//Array destructuring
let [k,y,z] =[1,2,3];
console.log(k,y,z);
console.log(z);

let [v,m,b] = [40,50,60];
console.log(v,m,b);
console.log(v);
console.log(m);

//Assigning a default value to a variable





//reversing an array using 2 pointer method


// const thisArray = [1,2,3,4,5,6,7];
// let reverseString = function(s) {
//     let left = 0, right = s.length - 1;
//     while (left < right) {
//         let temp = s[left];
//         s[left] = s[right];
//         s[right] = temp;
//         ++left;
//         --right;
//     }
//     return s;
// };


// finding the median of two sorted arrays
 const a0 = [1, 2, 3];
 const a1 = [4,5,6,7];

 match = a0.concat(a1);
 console.log(match);
 function match(a0,a1){
 let start = 0;
 let end = match.length - 1;
 median = (a0+a1)/2;

 while(start <end){
    if (match[start]< match[end]){
        start ++;
        end--;
    }
    else if (match[start] > match[end]){
        start ++;
    }
    else{
        end--;
    }
    return median
 }
}

 console.log(match(a0,a1));