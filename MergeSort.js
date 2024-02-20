function Merge (arr,si,mid,ei) {
  var leftIndex = si
  var rightIndex = mid + 1
  var k = si
  var temp = []
  while (leftIndex <= mid && rightIndex <= ei)
  {
    if (arr[ leftIndex ] < arr[ rightIndex ])
    {
      temp[ k++ ] = arr[ leftIndex++ ]
    } else
    {
      temp[ k++ ] = arr[ rightIndex++ ]
    }

  }
  while (leftIndex <= mid)
  {
    temp[ k++ ] = arr[ leftIndex++ ]
  }
  while (rightIndex <= ei)
  {
    temp[ k++ ] = arr[ rightIndex++ ]
  }

  for (var i = si; i < temp.length; i++)
  {
    arr[ i ] = temp[ i ]
    console.log(temp,ei)
  }
}
function MergeSort (arr,si,ei) {
  if (si < ei)
  {
    var mid = Math.floor((si + ei) / 2)
    console.log(mid)
    MergeSort(arr,si,mid)
    MergeSort(arr,mid + 1,ei)
    Merge(arr,si,mid,ei)
  }
}

var arr = [ 1,25,10,78,3,20 ]
MergeSort(arr,0,arr.length - 1)
// console.log(arr)



