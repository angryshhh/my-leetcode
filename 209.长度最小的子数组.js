/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  // let i = 0, j = 0;
  // let sum = 0;
  // let min = nums.length;
  // while (j < nums.length) {
  //   while (sum < s && j < nums.length) {
  //     sum += nums[j];
  //     j++;
  //   }

  //   if (sum < s) {
  //     if (min === nums.length) return 0;
  //     else return min;
  //   }
  //   min = Math.min(min, j - i);
  //   sum -= nums[i];
  //   i++;
  // }
  // while (sum >= s) {
  //   sum -= nums[i];
  //   i++;
  // }
  // min = Math.min(min, j - i + 1);
  // return min;

  let start = 0, end = 0;
  let sum = 0;
  let minLen = 0;

  while (end <= nums.length) {
    if (sum < s) {
      sum += nums[end];
      end++;
    } else {
      if (minLen === 0) {
        minLen = end - start;
      } else {
        minLen = Math.min(end - start, minLen);
      }
      sum -= nums[start];
      start++;
    }
  }

  return minLen;
};
// @lc code=end

