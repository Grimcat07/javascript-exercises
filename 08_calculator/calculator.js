const add = function(a,b) {
  let sum=a+b;
  return sum;
	
};

const subtract = function(a,b) {
  let diff=a-b;
	return diff;
};

const sum = function(arr) {
    let sum=0;
    arr.forEach(element => {
      sum=sum+element;

      
    });
    return sum;
  
	
};

const multiply = function(arr) {
  let mul=1;
  arr.forEach(element => {
    mul=mul*element;

    
  });
  return mul;
};

const power = function(a,b) {
  let pow=Math.pow(a,b);
  return pow;
	
};

const factorial = function(a) {

  let fact=1;
  while(a>0)
  {
   fact=fact*a;
   a--;
  }

	return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
