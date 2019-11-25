/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (postorder.length === 0) return null;
  let rootVal = postorder[postorder.length - 1];
  let i = 0;
  while (inorder[i] !== rootVal) i++;
  let root = new TreeNode(rootVal);
  if (i === 0) root.left = null;
  else root.left = buildTree(inorder.slice(0, i), postorder.slice(0, i));
  if (i === inorder.length - 1) root.right = null;
  else root.right = buildTree(inorder.slice(i + 1), postorder.slice(i, postorder.length - 1));
  return root;
};
// @lc code=end

