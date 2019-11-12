/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 *
 * https://leetcode-cn.com/problems/search-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (36.15%)
 * Likes:    408
 * Dislikes: 0
 * Total Accepted:    53.5K
 * Total Submissions: 148K
 * Testcase Example:  '[4,5,6,7,0,1,2]\n0'
 *
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * 
 * ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
 * 
 * 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。
 * 
 * 你可以假设数组中不存在重复的元素。
 * 
 * 你的算法时间复杂度必须是 O(log n) 级别。
 * 
 * 示例 1:
 * 
 * 输入: nums = [4,5,6,7,0,1,2], target = 0
 * 输出: 4
 * 
 * 
 * 示例 2:
 * 
 * 输入: nums = [4,5,6,7,0,1,2], target = 3
 * 输出: -1
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length === 0) return -1;
  if (target < nums[0] && target > nums[nums.length - 1]) {
    return -1;
  }
  let i = 0;
  let lastIndex = nums.length - 1;
  if (nums[0] <= target) {
    while (nums[i] <= target) {
      if (nums[i] === target) return i;
      if (nums[i] > target) return -1;
      if (nums[i] >= nums[lastIndex - i]) {
        i++;
      } else {
        break;
      }
    }
  } else {
    while (nums[lastIndex + i] >= target) {
      if (nums[lastIndex + i] === target) return lastIndex + i;
      if (nums[lastIndex + i] < target) return - 1;
      if (nums[lastIndex + i] <= nums[0 - i]) {
        i--;
      } else {
        break;
      }
    }
  }
  if (i <= 0) {
    lastIndex += i;
    i = 0 - i;
  } else {
    lastIndex -= i;
  }
  while (i <= lastIndex) {
    if (nums[i] === target) return i;
    if (nums[lastIndex] === target) return lastIndex;
    i++;
    lastIndex--;
  }
  return -1;
};
// @lc code=end

