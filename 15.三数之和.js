/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (23.89%)
 * Likes:    1503
 * Dislikes: 0
 * Total Accepted:    114.7K
 * Total Submissions: 470.8K
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？找出所有满足条件且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 
 * 满足要求的三元组集合为：
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 算法没问题，2个case超时，那两个case数据量太大了
var threeSum = function(nums) {
  nums = nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      break;
    }
    if (i > 0 && nums[i - 1] === nums[i]) {
      continue;
    }
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] + nums[j] > 0) {
        break;
      }
      if (j > i + 1 && nums[j - 1] === nums[j]) {
        continue;
      }
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] > 0) {
          break;
        }
        if (k > j + 1 && nums[k - 1] === nums[k]) {
          continue;
        }
        if (nums[i] + nums[j] + nums[k] === 0) {
          result.push([nums[i], nums[j], nums[k]]);
          break;
        }
      }
    }
  }
  return result;
};
// @lc code=end

