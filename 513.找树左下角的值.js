/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
var findBottomLeftValue = function(root) {
  // let floorQueue = [root];
  // while (floorQueue.length) {
  //   let nextFloor = [];
  //   for (let node of floorQueue) {
  //     if (node.left) {
  //       nextFloor.push(node.left);
  //     }
  //     if (node.right) {
  //       nextFloor.push(node.right);
  //     }
  //   }
  //   if (nextFloor.length === 0) {
  //     return floorQueue[0].val;
  //   }
  //   floorQueue = nextFloor;
  // }
  let floor = [root];
  let node = root;
  while (floor.length) {
    node = floor.shift();
    // 从右向左
    if (node.right) floor.push(node.right);
    if (node.left) floor.push(node.left);
  }
  return node.val;
};
// @lc code=end

