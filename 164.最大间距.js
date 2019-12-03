/*
 * @lc app=leetcode.cn id=164 lang=javascript
 *
 * [164] 最大间距
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  if (nums.length === 1 || nums.length === 0) return 0;
  let max = 0;
  nums.sort((a, b) => a - b).reduce((prev, curr) => {
    let d = curr - prev;
    if (d > max) max = d;
    return curr;
  });
  return max;

  // if (nums.length === 1 || nums.length === 0) return 0;
  // let distances = [];
  // for (let num of nums) distances.push([0, 0])
  // let max = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   let [leftDistance, rightDistance] = distances[i];
  //   for (let j = i + 1; j < nums.length; j++) {
  //     let distance = nums[j] - nums[i];
  //     if (distance < 0) {
  //       if (distance > leftDistance || leftDistance === 0) {
  //         leftDistance = distance;
  //         distances[i][0] = distance;
  //       }
  //       if (distance + distances[j][1] > 0 || distances[j][1] === 0) {
  //         distances[j][1] = -distance;
  //       }
  //     } else if (distance > 0) {
  //       if (distance < rightDistance || rightDistance === 0) {
  //         rightDistance = distance;
  //         distances[i][1] = distance;
  //       }
  //       if (distance + distances[j][0] < 0 || distances[j][0] === 0) {
  //         distances[j][0] = -distance;
  //       }
  //     }
  //   }
  //   max = Math.max(-leftDistance, rightDistance, max);
  // }
  // return max;
};
// @lc code=end

