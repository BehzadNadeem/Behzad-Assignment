
// question no-1
// for(var i=1; i<=10; i++ ){
//     console.log(i);
// }


// question no-2

// for(var i=1; i<=10; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }


// question no-3

// for(var i=1; i<=15 ; i++){
//     if(i % 2 ==1){
//         console.log(i);
//     }
// }


// question no-4
// Write a loop to calculate and print the factorial of a number (let's say 5).
 
// var num = 5;   
// var factorial=1;

// for( var i=1; i<=num; i++){
//  console.log(factorial*=i);     
// }


// question no=6

// Write a loop to print the multiplication table of a number (let's say 7) up to 10.
// for(var i=1 ; i<=10 ; i++){
//     console.log(i * 7 );
// }


// question no-7

// Write a loop to print the Fibonacci series up to the 10th term

// var a = 0 ;
// var b = 1 ;
// console.log(a);
// console.log(b);
// for (var i=0 ; i<=10 ; i++){
//     var temp = a +b;
//     console.log(temp);
//     a=b;
//     b= temp;
// }


// question no-8

// Write a loop to find and print the sum of digits of a number (let's say 123).













// question no-9
// Write a loop to print the square of numbers from 1 to 10.


// for(var i = 1 ; i<=10 ; i++){
//     console.log(i * i);
// }

// question no-10
// Write a loop to find and print the largest element in an array (let's say [3, 7, 2, 9, 5]).


var nums = [ 3 , 7 ,2 ,9 , 5];
var largestNum = 0;
for (var i = 0; i < nums.length; i++) {
  console.log(
    "index->",
    i,
    "arr value=>",
    nums[i],
    "largest number=>",
    largestNum,
    "condition=>",
    nums[i] > largestNum
  );
  if (nums[i] > largestNum) {
    largestNum = nums[i];
  }
}
console.log("Largest number is-> ", largestNum);