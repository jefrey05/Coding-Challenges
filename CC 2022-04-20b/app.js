/* A Narcissistic Number is a number of length n in which the sum of its digits to the power of n is equal to the original number. If this seems confusing, refer to the example below.

Ex: 153, where n = 3 (number of digits in 153)
13 + 53 + 33 = 153

Write a method is_narcissistic(i) (in Haskell: isNarcissistic :: Integer -> Bool) which returns whether or not i is a Narcissistic Number. */

function isNarcissistic(n) {
  let str = n.toString();
  let size = str.length;
  let arr = str.split("");
  let newArr = arr.map((number) => Number(number));

  let sum = arr.reduce((accu, current) => accu + Math.pow(current, size), 0);
  return sum === n;
}

console.log(isNarcissistic(153)); //true
console.log(isNarcissistic(1)); //true
console.log(isNarcissistic(3248)); //false;
