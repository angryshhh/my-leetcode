/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
 *
 * https://leetcode-cn.com/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (47.49%)
 * Likes:    385
 * Dislikes: 0
 * Total Accepted:    54.1K
 * Total Submissions: 113.3K
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
 * 
 * 示例:
 * 
 * 输入:
 * [
 * 1->4->5,
 * 1->3->4,
 * 2->6
 * ]
 * 输出: 1->1->2->3->4->4->5->6
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let j = 0, len = lists.length;
  while (j < len) {
    if (!lists[j]) {
      lists.splice(j, 1);
      len -= 1;
    } else {
      j++;
    }
  }
  if (len === 0) return null;
  if (len === 1) return lists[0];
  let result = new ListNode(0);
  let tempResult = result;

  while (lists.length > 1) {
    let min = lists[0].val;
    let minIndex = 0;
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].val < min) {
        min = lists[i].val;
        minIndex = i;
      }
    }
    tempResult.next = new ListNode(min);
    tempResult = tempResult.next;
    if (lists[minIndex].next) {
      lists[minIndex] = lists[minIndex].next;
    } else {
      lists.splice(minIndex, 1);
    }
  }
  tempResult.next = lists[0];
  return result.next;
}
// @lc code=end

