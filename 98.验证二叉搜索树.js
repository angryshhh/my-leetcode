/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function(root) {
  // if (root === null) return true;
  // let little = root;
  // while (little.left) {
  //   little = little.left;
  // }
  // let stack = [];
  // while (root || stack.length) {
  //   if (root) {
  //     stack.push(root);
  //     root = root.left;
  //   } else {
  //     root = stack.pop();
  //     if (little !== root && little.val >= root.val) return false;
  //     little = root;
  //     root = root.right;
  //   }
  // }
  // return true;

  // if (!root) return true;
  // if (root.left) {
  //   let biggestLess = root.left;
  //   while (biggestLess.right) {
  //     biggestLess = biggestLess.right;
  //   }
  //   if (biggestLess.val >= root.val) return false;
  // }
  // if (root.right) {
  //   let leastBigger = root.right;
  //   while (leastBigger.left) {
  //     leastBigger = leastBigger.left;
  //   }
  //   if (leastBigger.val <= root.val) return false;
  // }
  // return isValidBST(root.left) && isValidBST(root.right);

  let middleOrderArray = helper(root);
  if (middleOrderArray.length < 2) return true;
  for (let i = 1; i < middleOrderArray.length; i++) {
    if (middleOrderArray[i] <= middleOrderArray[i - 1]) {
      return false;
    }
  }
  return true;
};

function helper (root) {
  if (!root) return [];
  return [...helper(root.left), root.val, ...helper(root.right)]
}
// @lc code=end

