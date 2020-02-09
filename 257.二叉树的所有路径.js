/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (!root) return [];
  let result = [];
  if (root.left) {
    result = [...result, ...binaryTreePaths(root.left).map(str => `${root.val}->${str}`)];
  }
  if (root.right) {
    result = [...result, ...binaryTreePaths(root.right).map(str => `${root.val}->${str}`)];
  }
  if (!root.left && !root.right) return [`${root.val}`];
  return result;
};
// @lc code=end

