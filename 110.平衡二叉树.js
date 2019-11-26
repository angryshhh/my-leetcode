/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  return (function depth (root) {
    if (!root) return 0;
    let leftDepth = depth(root.left);
    if (leftDepth === -1) return -1;
    let rightDepth = depth(root.right);
    if (rightDepth === -1) return -1;
    if (Math.abs(leftDepth - rightDepth) > 1) return -1;
    return Math.max(leftDepth, rightDepth) + 1;
  })(root) > -1;
};
// @lc code=end

