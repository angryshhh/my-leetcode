/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function(root) {
  // backtrack
  if (root)
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
  else
    return [];

  // no backtrack
  // let result = [];
  // let stack = [];
  // let node = root;
  // while (node) {
  //   if (node.left) {
  //     stack.push(node);
  //     node = node.left;
  //   } else {
  //     result.push(node.val);
  //     if (node.right) {
  //       node = node.right;
  //     } else if (stack.length) {
  //       node = stack.pop();
  //       node.left = null;
  //     } else {
  //       break;
  //     }
  //   }
  // }
  // return result;
};
// @lc code=end

