/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (head === null) return null;
  let map = new Map();
  return (function backtrack(node) {
    if (map.has(node)) return map.get(node);

    let newNode = new Node(node.val, null, null);
    map.set(node, newNode);
    if (node.next) newNode.next = backtrack(node.next);
    if (node.random) newNode.random = map.get(node.random);
    return newNode;
  })(head);
};
// @lc code=end

