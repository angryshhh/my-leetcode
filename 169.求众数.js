/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  // if (nums.length === 1) return nums[0];
  // let half = ~~(nums.length / 2);
  // let map = {};
  // for (let i = 0; i < nums.length; i++) {
  //   let num = nums[i];
  //   if (!map[num]) map[num] = 1;
  //   else {
  //     map[num] += 1;
  //     if (map[num] > half) return num;
  //   }
  // }

  let count = 0;
  let curr;
  for (let i = 0; i < nums.length; i++) {
    if (count) {
      if (curr === nums[i]) count++;
      else count--;
    } else {
      curr = nums[i];
      count = 1;
    }
  }
  return curr;
};
// @lc code=end

