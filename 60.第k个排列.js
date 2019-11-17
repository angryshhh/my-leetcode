/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 第k个排列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  let result = '';
  let nums = [];
  let muls = [];
  for (let i = 0; i < n; i++) {
    nums.push(i + 1);
    if (i === 0) muls.push(1);
    else muls.push(muls[i - 1] * i);
  }
  while (n !== 0) {
    let numCount = Math.ceil(k / muls[n - 1]);
    k = k - (numCount - 1) * muls[n - 1];
    for (let i = 0; i < numCount; i++) {
      if (nums[i] === -1) numCount++;
    }
    result += (numCount + '');
    nums[numCount - 1] = -1;
    n--;
  }
  return result;
};
// @lc code=end

