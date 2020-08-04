/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  // let obj = {};
  // for (let i = 0; i < nums.length; i++) {
  //   if (!obj[nums[i]]) obj[nums[i]] = 1;
  //   else return nums[i];
  // }

  // take the element as a next pointer in a link
  let slow = 0, fast = 0;
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);
  fast = 0;
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
};
// @lc code=end

