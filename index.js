function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i =0; i < array.length; i++) {
    const sumNumber = target - array[i]
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === sumNumber) return true 
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  function hasTargetSum(array, target)
    interate through the array
      for each number, find another number that adds with it to the target number
      iterate over the rest of the array
        check if any other number adds with the number to the target number
          if so, return true
    if not, return false 
*/ 

/*
  Add written explanation of your solution here
  the function iterates through the array and chooses a number (i) 
  then it iterates through the rest of the array and sees if theres 
  a number (j) that equals the target when added to the original number (i)
  if so, the function returns true
  if not, the function returns false 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-5, 2, 5], 0));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([8], 8));
}

module.exports = hasTargetSum;
