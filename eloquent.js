/*Minimum exercise
    Write a function min that takes two arguments and returns their minimum.
*/

function min(num1, num2){
    if (num1 < num2) return num1
     else return num2;
}


/*Recursion exercise
    We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. 
    Here’s another way to define whether a positive whole number is even or odd:
    - Zero is even.
    - One is odd.
    - For any other number N, its evenness is the same as N - 2.

    Define a recursive function isEven corresponding to this description. 
    The function should accept a single parameter (a positive, whole number) and return a Boolean.

    Base cases are literally the building blocks of recursion. 
    You cannot have a recursive function (without resulting in a stack overflow) without a base case.
*/

function isEven(num){
    //3 base cases
     if (num < 0){
        return false;
     }
     if (num === 0){
       return true;
     }
     else if (num === 1){
       return false;
     }
     //recursive starts to check the next number which is 2
       else return isEven(num - 2);
   }


/*
Bean Counting
Write a function countBs that takes a string as its only argument and 
returns a number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument 
that indicates the character that is to be counted (rather than counting only uppercase “B” characters). 

Rewrite countBs to make use of this new function.
*/

/*original countBs function
function countBs(str){
    let totalB = 0;
    for (let i = 0; i < str.length; i++){
      if (str.charAt(i)=="B"){
          totalB++;
        }
    }
    return totalB;
}
*/

//rewritten countBs function to utilise countChar function
function countBs(str){
    return countChar(str, "B");
}
  
function countChar(str, char){
    let totalChar =  0;
    
    for (let i = 0; i < str.length; i++){
        if (str.charAt(i)==char){
            totalChar++;
        }
    }
    return totalChar;
}
