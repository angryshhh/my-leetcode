/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function(nums) {
  // one case exceeds the time limit
  // let lastIndex = nums.length - 1;
  // return (function rec(index) {
  //   if (index + nums[index] >= lastIndex) return true;
  //   for (let i = 1; i <= nums[index]; i++) {
  //     if (rec(index + i)) return true;
  //   }
  //   return false;
  // })(0);

  // nums[nums.length - 1] = -1;
  if (nums.length === 1) return true;
  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      if (j === i && nums[0] < j) return false;
      if (nums[i - j] >= j) {
        nums[i - j] = -1;
        i = i - j + 1;
        break;
      }
    }
  }
  return nums[0] === -1;
};
// @lc code=end

