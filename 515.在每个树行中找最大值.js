/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  if (!root) return [];
  let floor = [root];
  let result = [];
  while (floor.length) {
    let nextFloor = [];
    let max = floor[0].val;
    for (let node of floor) {
      if (node.val > max) {
        max = node.val;
      }
      if (node.left) nextFloor.push(node.left);
      if (node.right) nextFloor.push(node.right);
    }
    floor = nextFloor;
    result.push(max);
  }
  return result;
};
// @lc code=end

