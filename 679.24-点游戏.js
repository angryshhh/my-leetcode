/*
 * @lc app=leetcode.cn id=679 lang=javascript
 *
 * [679] 24 点游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var judgePoint24 = function(nums) {
  if (nums.length === 2) {
    return Math.abs(nums[0] + nums[1] - 24) < 0.001 ||
      Math.abs(nums[0] - nums[1] - 24) < 0.001 ||
      Math.abs(nums[1] - nums[0] - 24) < 0.001 ||
      Math.abs(nums[0] * nums[1] - 24) < 0.001 ||
      (nums[1] !== 0 && Math.abs(nums[0] / nums[1] - 24) < 0.001) ||
      (nums[0] !== 0 && Math.abs(nums[1] / nums[0] - 24) < 0.001);
  } else if (nums.length === 3) {
    return judgePoint24([nums[0] + nums[1], nums[2]]) ||
      judgePoint24([nums[0] - nums[1], nums[2]]) ||
      judgePoint24([nums[1] - nums[0], nums[2]]) ||
      judgePoint24([nums[0] * nums[1], nums[2]]) ||
      (nums[0] !== 0 && judgePoint24([nums[1] / nums[0], nums[2]])) ||
      (nums[1] !== 0 && judgePoint24([nums[0] / nums[1], nums[2]])) ||
      judgePoint24([nums[0] + nums[2], nums[1]]) ||
      judgePoint24([nums[0] - nums[2], nums[1]]) ||
      judgePoint24([nums[2] - nums[0], nums[1]]) ||
      judgePoint24([nums[0] * nums[2], nums[1]]) ||
      (nums[0] !== 0 && judgePoint24([nums[2] / nums[0], nums[1]])) ||
      (nums[2] !== 0 && judgePoint24([nums[0] / nums[2], nums[1]])) ||
      judgePoint24([nums[1] + nums[2], nums[0]]) ||
      judgePoint24([nums[1] - nums[2], nums[0]]) ||
      judgePoint24([nums[2] - nums[1], nums[0]]) ||
      judgePoint24([nums[1] * nums[2], nums[0]]) ||
      (nums[1] !== 0 && judgePoint24([nums[2] / nums[1], nums[0]])) ||
      (nums[2] !== 0 && judgePoint24([nums[1] / nums[2], nums[0]]));
  } else if (nums.length === 4) {
    return judgePoint24([nums[0] + nums[1], nums[2], nums[3]]) ||
      judgePoint24([nums[0] - nums[1], nums[2], nums[3]]) ||
      judgePoint24([nums[1] - nums[0], nums[2], nums[3]]) ||
      judgePoint24([nums[0] * nums[1], nums[2], nums[3]]) ||
      (nums[0] !== 0 && judgePoint24([nums[1] / nums[0], nums[2], nums[3]])) ||
      (nums[1] !== 0 && judgePoint24([nums[0] / nums[1], nums[2], nums[3]])) ||
      judgePoint24([nums[0] + nums[2], nums[1], nums[3]]) ||
      judgePoint24([nums[0] - nums[2], nums[1], nums[3]]) ||
      judgePoint24([nums[2] - nums[0], nums[1], nums[3]]) ||
      judgePoint24([nums[0] * nums[2], nums[1], nums[3]]) ||
      (nums[0] !== 0 && judgePoint24([nums[2] / nums[0], nums[1], nums[3]])) ||
      (nums[2] !== 0 && judgePoint24([nums[0] / nums[2], nums[1], nums[3]])) ||
      judgePoint24([nums[0] + nums[3], nums[1], nums[2]]) ||
      judgePoint24([nums[0] - nums[3], nums[1], nums[2]]) ||
      judgePoint24([nums[3] - nums[0], nums[1], nums[2]]) ||
      judgePoint24([nums[0] * nums[3], nums[1], nums[2]]) ||
      (nums[0] !== 0 && judgePoint24([nums[3] / nums[0], nums[1], nums[2]])) ||
      (nums[3] !== 0 && judgePoint24([nums[0] / nums[3], nums[1], nums[2]])) ||
      judgePoint24([nums[1] + nums[2], nums[0], nums[3]]) ||
      judgePoint24([nums[1] - nums[2], nums[0], nums[3]]) ||
      judgePoint24([nums[2] - nums[1], nums[0], nums[3]]) ||
      judgePoint24([nums[1] * nums[2], nums[0], nums[3]]) ||
      (nums[1] !== 0 && judgePoint24([nums[2] / nums[1], nums[0], nums[3]])) ||
      (nums[2] !== 0 && judgePoint24([nums[1] / nums[2], nums[0], nums[3]])) ||
      judgePoint24([nums[1] + nums[3], nums[0], nums[2]]) ||
      judgePoint24([nums[1] - nums[3], nums[0], nums[2]]) ||
      judgePoint24([nums[3] - nums[1], nums[0], nums[2]]) ||
      judgePoint24([nums[1] * nums[3], nums[0], nums[2]]) ||
      (nums[1] !== 0 && judgePoint24([nums[3] / nums[1], nums[0], nums[2]])) ||
      (nums[3] !== 0 && judgePoint24([nums[1] / nums[3], nums[0], nums[2]])) ||
      judgePoint24([nums[2] + nums[3], nums[0], nums[1]]) ||
      judgePoint24([nums[2] - nums[3], nums[0], nums[1]]) ||
      judgePoint24([nums[3] - nums[2], nums[0], nums[1]]) ||
      judgePoint24([nums[2] * nums[3], nums[0], nums[1]]) ||
      (nums[2] !== 0 && judgePoint24([nums[3] / nums[2], nums[0], nums[1]])) ||
      (nums[3] !== 0 && judgePoint24([nums[2] / nums[3], nums[0], nums[1]]));
  }
};
// @lc code=end

