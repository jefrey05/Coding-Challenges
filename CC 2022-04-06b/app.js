/* Challenge:
Given a two-dimensional array, return a new array which carries over only those arrays from the original,
which were not empty and whose items are all of the same type (i.e. homogenous). For simplicity, the arrays
inside the array will only contain characters and integers.

Example:

Given [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]], your function should return [[1, 5, 4], ['b']].

Addendum:
Please keep in mind that for this kata, we assume that empty arrays are not homogenous.
The resultant arrays should be in the order they were originally in and should not have its values changed.
No implicit type casting is allowed. A subarray [1, '2'] would be considered illegal and should be filtered out. */

function filterHomogenous(arrays) {
    let newArray = [];
    arrays.forEach(row=>{
      let countStrings =0;
      let countNumber = 0;
      if(row.length == 0){
        countStrings =-1;
        countNumber = -1;
      }
      row.forEach(col=>{
        
        if (typeof col == 'number'){
          countNumber++;
         }else{
           if (typeof col == 'string'){
             countStrings++;
           }}
      })
      if(countStrings == 0){
        newArray.push(row)
      }else{
        if(countNumber == 0){
          newArray.push(row)
        }
      }
      
    })
    return newArray;
  }

  console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]));//[[1, 5, 4], ['b']]
  console.log(filterHomogenous([[123, 234, 432], ['', 'abc'], [''], ['', 1], ['', '1'], []]));//[[123, 234, 432], ['', 'abc'], [''], ['', '1']]