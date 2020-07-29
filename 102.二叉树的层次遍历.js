/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  // if (!root) return [];
  // let queue = [root];
  // let result = [];
  // while (queue.length) {
  //   let len = queue.length;
  //   let temp = [];
  //   for (let i = 0; i < len; i++) {
  //     temp.push(queue[i].val);
  //     if (queue[i].left) queue.push(queue[i].left);
  //     if (queue[i].right) queue.push(queue[i].right);
  //   }
  //   queue.splice(0, len);
  //   result.push(temp);
  // }
  // return result;

  if (!root) return [];
  let result = [];
  let queue = [root];
  while (queue.length) {
    let len = queue.length;
    let level = [];
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
  }
  return result;
};
// @lc code=end

