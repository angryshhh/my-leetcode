/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
// 左树左中右遍历，右🌲同步右中左遍历，一项不对应就false
var isSymmetric = function(root) {
  if (!root) return true;
  let leftStack = [], rightStack = [];
  let leftP = root.left, rightP = root.right;
  while (leftP || rightP || leftStack.length || rightStack.length) {
    if (leftP && rightP) {
      leftStack.push(leftP);
      rightStack.push(rightP);
      leftP = leftP.left;
      rightP = rightP.right;
    } else if(!leftP && !rightP && leftStack.length) {
      leftP = leftStack.pop();
      rightP = rightStack.pop();
      if (leftP.val !== rightP.val) return false;
      leftP = leftP.right;
      rightP = rightP.left;
    } else {
      return false;
    }
  }
  console.log(leftP, rightP, leftStack, rightStack);
  return true;
};
// @lc code=end

