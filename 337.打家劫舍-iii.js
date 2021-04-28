/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
 * @return {number}
 */
var rob = function(root) {
  if (!root) return 0;
  if (root.left && root.right) {
    return Math.max(
      rob(root.left) + rob(root.right),
      root.val + rob(root.left.left) + rob(root.left.right) + rob(root.right.left) + rob(root.right.right)
    );
  }
  if (root.left) {
    return Math.max(
      rob(root.left),
      root.val + rob(root.left.left) + rob(root.left.right)
    );
  }
  if (root.right) {
    return Math.max(
      rob(root.right),
      root.val + rob(root.right.left) + rob(root.right.right)
    );
  }
  return root.val;
};
// @lc code=end

