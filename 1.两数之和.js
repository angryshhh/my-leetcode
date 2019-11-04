/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 遍历，o(n2)
// var twoSum = function(nums, target) {
//     for (let index = 0; index < nums.length; index++) {
//       const numA = nums[index];
//       for (let i = index + 1; i < nums.length; i++) {
//         if (numA + nums[i] === target) {
//           return [index, i];
//         }
//       }
//     }
// };

// 一次遍历，当前数的差不在已遍历的数中，则入表
// 使用哈希表map提升效率
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let d = target - nums[i];
    if (map.has(d)) {
      return [map.get(d), i];
    }
    map.set(nums[i], i);
  }
  return [];
}


