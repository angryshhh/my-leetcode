/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  let list = new Map();
  function backtrack(currNode) {
    if (list.has(currNode)) return list.get(currNode);
    let tempNode = new Node(currNode.val, []);
    list.set(currNode, tempNode);
    for (let neighbor of currNode.neighbors) {
      tempNode.neighbors.push(backtrack(neighbor));
    }
    return tempNode;
  }
  return backtrack(node);
};
// @lc code=end

