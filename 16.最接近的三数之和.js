/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 *
 * https://leetcode-cn.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (41.65%)
 * Likes:    287
 * Dislikes: 0
 * Total Accepted:    53.2K
 * Total Submissions: 126.7K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target
 * 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 * 
 * 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
 * 
 * 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums = nums.sort((a, b) => a - b);
  let result = nums[0] + nums[1] + nums[2];
  if (nums.length === 3) return result;
  let dis = Math.abs(result - target);
  let len = nums.length;
  for (let i = 0; i < len - 2; i++) {
    if (nums[i] + nums[i + 1] + nums[i + 2] - target >= dis) break;
    for (let j = i + 1; j < len - 1; j++) {
      if (nums[i] + nums[j] + nums[j + 1] - target >= dis) break;
      for (let k = j + 1; k < len; k++) {
        if (nums[i] + nums[j] + nums[k] - target >= dis) break;
        if (Math.abs(nums[i] + nums[j] + nums[k] - target) < dis) {
          result = nums[i] + nums[j] + nums[k];
          dis = Math.abs(result - target);
        }
      }
    }
  }
  return result;
};
// @lc code=end

