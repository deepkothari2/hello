// Find Next 3rd Greater Element Using stack

function nextGreater (arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++)
  {
    let next = -1;
    for (let j = i + 3; j < arr.length; j++)
    {
      if (arr[ j ] > arr[ i ])
      {
        next = arr[ j ];
        break;
      }
    }
    result.push(arr[ i ] + '->' + (next !== -1 ? next : 'null') + '-----');
  }

  return result;
}

console.log(nextGreater([ 1,5,2,8,6,40 ]));
