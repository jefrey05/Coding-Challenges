/* Task
Given an array/list [] of integers , Find the product of the k maximal numbers.
Notes
Array/list size is at least 3 .
Array/list's numbers Will be mixture of positives , negatives and zeros
Repetition of numbers in the array/list could occur.
Input >> Output Examples
maxProduct ({4, 3, 5}, 2) ==>  return (20)
Explanation:
Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20 .
maxProduct ({8, 10 , 9, 7}, 3) ==>  return (720)
Explanation:
Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is 8 * 9 * 10 = 720 .
maxProduct ({10, 8, 3, 2, 1, 4, 10}, 5) ==> return (9600)
Explanation:
Since the size (k) equal 5 , then the subsequence of size 5 whose gives product of maxima is 10 * 10 * 8 * 4 * 3 = 9600 . */

function maxProduct(numbers, size){
    let product = 1;
    let newArray = numbers.sort((a,b)=> b - a);
     for (let i = 0;i < size;i++){
       product*= newArray.shift();
     }
    return product;
  }

  console.log(maxProduct([4,3,5], 2));//20
  console.log(maxProduct([10,8,7,9], 3));//720
  console.log(maxProduct([8,6,4,6], 3))//288