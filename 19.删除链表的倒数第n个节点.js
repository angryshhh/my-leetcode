/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 *
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (35.41%)
 * Likes:    576
 * Dislikes: 0
 * Total Accepted:    89.6K
 * Total Submissions: 247.1K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * 
 * 示例：
 * 
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
 * 
 * 当删除了倒数第二个节点后，链表变为 1->2->3->5.
 * 
 * 
 * 说明：
 * 
 * 给定的 n 保证是有效的。
 * 
 * 进阶：
 * 
 * 你能尝试使用一趟扫描实现吗？
 * 
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
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function(head, n) {
//   let arr = [];
//   let len = 0;
//   let list = head;
//   while (list) {
//     arr.push(list);
//     len++;
//     if (!list.next) {
//       break;
//     }
//     list = list.next;
//   }
//   if (len < n) {
//     return head;
//   } else if (len === n) {
//     return head.next;
//   } else {
//     arr[len - n - 1].next = arr[len - n].next;
//     return arr[0];
//   }
// };

var removeNthFromEnd = function(head, n) {
  let a = new ListNode(0), b = head;
  a.next = head;
  let step = 0;
  while (b) {
    b = b.next;
    if (step < n) {
      step++;
    } else {
      a = a.next;
    }
  }
  if (step < n) {
    return head;
  } else if (a.next === head) {
    return head.next;
  } else {
    a.next = a.next.next;
    return head;
  }
};
// @lc code=end

