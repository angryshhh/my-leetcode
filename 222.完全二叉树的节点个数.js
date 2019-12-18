/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
var countNodes = function(root) {
  if (!root) return 0;
  let queue = [root];
  let floor = 0;
  let len = queue.length;
  while (len) {
    let a = 2 ** floor;
    if (len < a) {
      return len + a - 1;
    } else {
      for (let i = 0; i < len; i++) {
        let node = queue.shift();
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
      floor++;
      len = queue.length;
    }
  }
  if (!len) return 2 ** floor - 1;
};
// @lc code=end

