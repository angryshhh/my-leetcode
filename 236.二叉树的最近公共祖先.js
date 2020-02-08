/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
  if (!root) return null;
  if (root === p || root === q) return root;

  let leftResult = lowestCommonAncestor(root.left, p, q);
  let rightResult = lowestCommonAncestor(root.right, p, q);
  if (leftResult && rightResult) return root;
  if (leftResult) return leftResult;
  if (rightResult) return rightResult;

  // function findRoute(rootNode, targetVal) {
  //   if (rootNode.val === targetVal) return [rootNode];
  //   if (rootNode.left) {
  //     let result = findRoute(rootNode.left, targetVal);
  //     if (result) return [rootNode, ...result];
  //   }
  //   if (rootNode.right) {
  //     let result = findRoute(rootNode.right, targetVal);
  //     if (result) return [rootNode, ...result];
  //   }
  //   return null;
  // }

  // let pRoute = findRoute(root, p.val);
  // let qRoute = findRoute(root, q.val);
  // let i = 0;
  // while (
  //   pRoute[i] && qRoute[i] &&
  //   pRoute[i].val === qRoute[i].val
  // ) i++;
  // return pRoute[i - 1];
}
// @lc code=end

