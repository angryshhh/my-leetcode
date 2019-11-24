/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function(root) {
  // JavaScript heap out of memory
  // if (!root) return 0;
  // let floor = [root];
  // let depth = 0;
  // while (floor.length) {
  //   depth++;
  //   let len = floor.length;
  //   for (let node of floor) {
  //     if (node.left) floor.push(node.left);
  //     if (node.right) floor.push(node.right);
  //   }
  //   floor.splice(0, len);
  // }
  // return depth;

  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
// @lc code=end

