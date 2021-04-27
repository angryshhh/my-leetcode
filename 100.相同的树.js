/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  // if (!p && !q) return true;
  // if (!p || !q) return false;
  // if (p.val !== q.val) return false;
  // if (isSameTree(p.left, q.left) && isSameTree(p.right, q.right))
  //   return true;
  // return false;

  let queueP = [p], queueQ = [q];
  let nodeP, nodeQ;
  while (queueP.length && queueQ.length) {
    nodeP = queueP.shift();
    nodeQ = queueQ.shift();
    if (!nodeP && !nodeQ) continue;
    if (!nodeP || !nodeQ) return false;
    if (nodeP.val !== nodeQ.val) return false;
    queueP.push(nodeP.left, nodeP.right);
    queueQ.push(nodeQ.left, nodeQ.right);
  }
  return true;
};
// @lc code=end

