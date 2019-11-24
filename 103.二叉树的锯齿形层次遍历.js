/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (!root) return [];
  let stack = [root];
  let result = [];
  while (stack.length) {
    let len = stack.length;
    let temp = [];
    for (let i = len - 1; i >= 0; i--) {
      let node = stack[i];
      temp.push(node.val);
      if (result.length % 2) {
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
      } else {
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
      }
    }
    stack.splice(0, len);
    result.push(temp);
  }
  return result;
};
// @lc code=end

