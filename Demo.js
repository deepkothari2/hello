function findShortestSubArray(nums) {
    let left = {}, right = {}, count = {};
    for (let i = 0; i < nums.length; i++) {
        let x = nums[i];
        if (left[x] === undefined) {
            left[x] = i;
        }
        right[x] = i;
        console.log(right)
        count[x] = (count[x] || 0) + 1;
    }

    //console.log(right)
    let ans = nums.length;
    let degree = Math.max(...Object.values(count));
    for (let x in count) {
        if (count[x] === degree) {
            ans = Math.min(ans, right[x] - left[x] + 1);
        }
    }

    return ans;
}

var num = [10, 20, 10, 20, 20, 30, 40, 20, 10, 10]

console.log(findShortestSubArray(num))
