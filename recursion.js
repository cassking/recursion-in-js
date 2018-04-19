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
console.log(factorializeNumber(20))
//5 should return 120
//10 should return 3628800
//20 should return 2432902008176640000
