/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let max = Math.max(p.val, q.val);
  let min = Math.min(p.val, q.val);
  let node = root;
  while (node) {
    if (node.val >= min && node.val <= max) return node;
    if (node.val < min) node = node.right;
    else if (node.val > max) node = node.left;
  }
};
// @lc code=end

