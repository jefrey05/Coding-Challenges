/* No description!!!

Input :: [10,20,25,0]

Output :: ["+0", "+10", "+15", "-10"]
 */

function equalize(array) {
  let add = "+";
  let sub = "-";
  let arr = [];
  let starter = array[0];
  array.forEach((number) => {
    if (number >= starter) {
      arr.push(add + (number - starter));
    } else {
      arr.push(sub + Math.abs(number - starter));
    }
  });
  return arr;
}

console.log(equalize([20, 30, 35, 10])); //["+0","+10","+15","-10"]
console.log(equalize([])); //[]
console.log(equalize([10, 12, 24, 50, 0, 15, 20])); //["+0","+2","+14","+40","-10","+5","+10"]
