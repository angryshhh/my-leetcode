/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function(root) {
  // if (!root) return [];
  // let result = [];
  // let queue = [root];
  // while (queue.length) {
  //   let node = queue.pop();
  //   result.push(node.val);
  //   let len = queue.length;
  //   for (let i = 0; i < len; i++) {
  //     let otherNode = queue.shift();
  //     if (otherNode.left) queue.push(otherNode.left);
  //     if (otherNode.right) queue.push(otherNode.right);
  //   }
  //   if (node.left) queue.push(node.left);
  //   if (node.right) queue.push(node.right);
  // }
  // return result;

  if (!root) return [];
  let queue = [root];
  let result = [];
  while (queue.length) {
    result.push(queue[0].val);
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (node.right) queue.push(node.right);
      if (node.left) queue.push(node.left);
    }
  }
  return result;
};
// @lc code=end

