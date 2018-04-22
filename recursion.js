//FACTORIALIZE A NUMBER

function factorializeNumber(number) {
  //example 4*3, 3*2, etc
  if( number === 0){
    return 1;
  }else {
  }
  return number * factorializeNumber(number-1);
  }

//factorializeNumber(67)
console.log('factorial:__', factorializeNumber(20))
//5 should return 120
//10 should return 3628800
//20 should return 2432902008176640000

///Write a JavaScript program to
//find the greatest common divisor
//(gcd) of two positive numbers
//euclids algorithm:
//remainder = max % min
//If the remainder is equal to 0, you can stop because you have identified
//the GCD which is the smaller number from the previous step.
//Start back at step one, using the smaller number as
//the larger number and the remainder as the smaller number:
//max = min
//min = remainder
let maxNum, minNum, remainder;
let numArray = []
//Divide the larger number by the small one.
function greatestCommDiv(number1, number2) {
  if(number1> number2){
    maxNum = number1
  }
  if (number2> number1){
    maxNum = number2
  }
  if(remainder === 0) {
    return minNum
  }
    remainder = maxNum%minNum



    maxNum = minNum
    remainder = minNum

    greatestCommDiv(maxNum, maxNum%minNum)


}
greatestCommDiv(60,72)
