/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  if (!root) return [];
  if (!root.left && !root.right) {
    if (root.val === sum) return [[root.val]];
    else return [];
  }
  let result = [];
  if (root.left) {
    let routes = pathSum(root.left, sum - root.val);
    for (let route of routes) {
      result.push([root.val, ...route]);
    }
  }
  if (root.right) {
    let routes = pathSum(root.right, sum - root.val);
    for (let route of routes) {
      result.push([root.val, ...route]);
    }
  }
  return result;
};
// @lc code=end

