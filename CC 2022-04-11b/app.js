/* You are given two arrays arr1 and arr2, where arr2 always contains integers.

Write the function find_array(arr1, arr2) such that:

For arr1 = ['a', 'a', 'a', 'a', 'a'], arr2 = [2, 4] find_array returns ['a', 'a']

For arr1 = [0, 1, 5, 2, 1, 8, 9, 1, 5], arr2 = [1, 4, 7] find_array returns [1, 1, 1]

For arr1 = [0, 3, 4], arr2 = [2, 6] find_array returns [4]

For arr1=["a","b","c","d"] , arr2=[2,2,2], find_array returns ["c","c","c"]

For arr1=["a","b","c","d"], arr2=[3,0,2] find_array returns ["d","a","c"]

If either arr1 or arr2 is empty, you should return an empty arr */

function findArray(arr1, arr2) {
  return arr1.length == 0 || arr2.length == 0
    ? []
    : arr2.map((index) => arr1[index]);
}

console.log(findArray(["a", "a", "a", "a", "a"], [2, 4])); //['a', 'a']
console.log(findArray([0, 1, 5, 2, 1, 8, 9, 1, 5], [1, 4, 7])); //[1, 1, 1]
console.log(findArray(["this", "is", "test"], [0, 1, 2])); //['this', 'is', 'test']
