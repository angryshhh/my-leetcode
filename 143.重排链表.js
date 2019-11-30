/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  // runtime beats 5.68%
  // memory usage beats 75%
  // if (!head) return;
  // let end = null;
  // while (head.next !== end || head !== end) {
  //   let p = head;
  //   while (p.next !== end) p = p.next;
  //   end = p;
  //   end.next = head.next;
  //   head.next = end;
  //   head = end.next;
  // }
  // end.next = null;

  // runtime beats 88.64 %
  // memory usage beats 41.67 %
  if (!head) return;
  let stack = [];
  let p = head;
  while (p) {
    stack.push(p);
    p = p.next;
  }
  let end = null;
  while (head.next !== end || head !== end) {
    end = stack.pop();
    end.next = head.next;
    head.next = end;
    head = end.next;
  }
  end.next = null;
};
// @lc code=end

