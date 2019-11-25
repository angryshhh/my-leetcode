/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
var levelOrderBottom = function(root) {
  if (!root) return [];
  let result = [];
  let queue = [root];
  while (queue.length) {
    let temp = [];
    let len = queue.length;
    while (len > 0) {
      let node = queue[0];
      queue.splice(0, 1);
      temp.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      len--;
    }
    result.splice(0, 0, temp);
  }
  return result;
};
// @lc code=end

