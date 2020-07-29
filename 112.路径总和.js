/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  // if (!root) return false;
  // let queue = [root];
  // while (queue.length) {
  //   let len = queue.length;
  //   while (len--) {
  //     let node = queue[0];
  //     if (!node.left && !node.right && node.val === sum) return true;
  //     if (node.left) {
  //       node.left.val += node.val;
  //       queue.push(node.left);
  //     }
  //     if (node.right) {
  //       node.right.val += node.val;
  //       queue.push(node.right);
  //     }
  //     queue.splice(0, 1);
  //   }
  // }
  // return false;

  if (!root) return false;
  
  if (!root.left && !root.right && root.val === sum)
    return true;
  
  return hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val);
};
// @lc code=end

