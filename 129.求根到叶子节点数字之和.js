/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根到叶子节点数字之和
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
var sumNumbers = function(root) {
  // let result = 0;
  // let temp = 0;
  // let stack = [];
  // let node = root;
  // while (node) {
  //   temp *= 10;
  //   temp += node.val;
  //   if (node.left) {
  //     let leftChild = node.left;
  //     node.left = null;
  //     stack.push(node);
  //     node = leftChild;
  //   } else if (node.right) {
  //     let rightChild = node.right;
  //     node.right = null;
  //     stack.push(node);
  //     node = rightChild;
  //   } else {
  //     result += temp;
  //     while (stack.length && !node.right) {
  //       temp = ~~(temp / 10);
  //       node = stack.pop();
  //     }
  //     if (!node.right) return result;
  //     else {
  //       let rightChild = node.right;
  //       node.right = null;
  //       stack.push(node);
  //       node = rightChild;
  //     }
  //   }
  // }
  // return result;

  return helper(root, 0);
};

function helper (node, parentSum) {
  if (!node) return 0;
  let currentSum = parentSum * 10 + node.val;
  if (!node.left && !node.right)
    return currentSum;
  return helper(node.left, currentSum) + helper(node.right, currentSum);
}
// @lc code=end

