/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  // runtime beats 99.47%
  // memory usage beats 73.68%
  if (!root) return;
  let stack = [];
  while (root) {
    if (root.left) {
      if (root.right) {
        stack.push(root.right);
      }
      root.right = root.left;
      root.left = null;
    }
    if (!root.right && stack.length) root.right = stack.pop();
    root = root.right;
  }
};
// @lc code=end

