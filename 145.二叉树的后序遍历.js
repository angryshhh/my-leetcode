/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  // backtrack
  // Your runtime beats 98.46 % of javascript submissions
  // Your memory usage beats 5.74 % of javascript submissions (34 MB)
  // if (!root) return [];
  // else return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val];

  // Your runtime beats 73.21 % of javascript submissions
  // Your memory usage beats 51.64 % of javascript submissions (33.8 MB)
  if (!root) return [];
  let stack = [root];
  let result = [];
  while (stack.length) {
    let node = stack.pop();
    let left = node.left, right = node.right;
    if (left || right) {
      node.left = null;
      node.right = null;
      stack.push(node);
      if (right) stack.push(right);
      if (left) stack.push(left);
    } else {
      result.push(node.val);
    }
  }
  return result;
};
// @lc code=end

