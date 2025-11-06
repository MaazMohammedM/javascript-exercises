const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(arr) {
	return arr.reduce((sum,current)=>sum+current,0);
};

const multiply = function(arr) {
return arr.reduce((product,current)=>product*current,1);
};

const power = function(base,exponent) {
  return Math.pow(base,exponent)
	
};

const factorial = function(number) {
  if(number<0){
    return
  }

  if(number === 0){
    return 1
  }

  let factorial = 1;

  for(let i=1;i<=number;i++){
    factorial*=i
  }

  return factorial
	
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
