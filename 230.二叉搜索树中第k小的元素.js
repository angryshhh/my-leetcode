/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let temp = [root];
  while (temp.length) {
    let node = temp.shift();
    if (node.left) {
      let left = node.left;
      delete node.left;
      temp.unshift(node);
      temp.unshift(left);
    } else {
      k--;
      if (k === 0) return node.val;
      else if (node.right) temp.unshift(node.right);
    }
  }
};
// @lc code=end

