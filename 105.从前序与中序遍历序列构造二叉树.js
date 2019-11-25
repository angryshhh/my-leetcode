/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (preorder.length === 0) return null;
  let rootVal = preorder[0];
  let i = 0;
  while (inorder[i] !== rootVal) i++;
  let root = new TreeNode(rootVal);
  if (i === 0) root.left = null;
  else root.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i));
  if (i === inorder.length - 1) root.right = null;
  else root.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1));
  return root;
};
// @lc code=end

