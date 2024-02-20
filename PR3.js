// 1.Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
function sum_of_four_numbers (arr,target) {
  for (i = 0; i < arr.length; i++)
  {
    for (j = i + 1; j < arr.length; j++)
    {
      for (k = j + 1; k < arr.length; k++)
      {
        for (l = k + 1; l < arr.length; l++)
        {
          if (target == arr[ i ] + arr[ j ] + arr[ k ] + arr[ l ])
          {
            console.log(i,j,k,l);
          }
        }
      }
    }
  }
}

arr = [ 2,-5,27,0,-40,60,2,-9,37 ];
sum_of_four_numbers(arr,22);

// 2.Given an integer array nums, return the third distinct maximum number in this array.If the third maximum does not exist, return the maximum number.

function thirdMax (nums) {
  let firstMax = -Infinity
  let secondMax = -Infinity
  let thirdMax = -Infinity

  for (const num of nums)
  {
    if (num === firstMax || num === secondMax || num === thirdMax) continue

    if (num > firstMax)
    {
      thirdMax = secondMax
      secondMax = firstMax
      firstMax = num
    }
    else if (num > secondMax)
    {
      thirdMax = secondMax
      secondMax = num
    }
    else if (num > thirdMax)
    {
      thirdMax = num
    }
  }
  return thirdMax === -Infinity ? firstMax : thirdMax
}

console.log(thirdMax([ 1,2,2,3 ]));


console.log(0 > Infinity) //false
console.log(1 > Infinity) //false
console.log(-1 > Infinity) //false
console.log(0 < Infinity) //true
console.log(1 < Infinity) //true
console.log(-1 < Infinity) //true

console.log(0 > -Infinity) //true
console.log(1 > -Infinity) //true
console.log(-1 > -Infinity) //true
console.log(0 < -Infinity) //false
console.log(1 < -Infinity) //false
console.log(-1 < -Infinity) //false
