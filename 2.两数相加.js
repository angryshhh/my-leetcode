/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// var addTwoNumbers = function(l1, l2) {
//   function compu(l1, l2, jin) {
//     if (l1 || l2 || jin) {
//       let result = {};
//       result.val = ((l1 ? l1.val : 0) + (l2 ? l2.val : 0) + jin) % 10;
//       jin = ((l1 ? l1.val : 0) + (l2 ? l2.val : 0) + jin - result.val) / 10;
//       result.next = compu(
//         l1 ? l1.next : null,
//         l2 ? l2.next : null,
//         jin
//       );
//       return result;
//     } else {
//       return null;
//     }
//   }
//   return compu(l1, l2, 0);
// };

var addTwoNumbers = function(l1, l2) {
  let jin = 0;
  let val = 0;
  let temp = [];
  let result = new ListNode(0);
  while (l1 || l2 || jin) {
    l1 = l1 || new ListNode(0);
    l2 = l2 || new ListNode(0);

    val = (l1.val + l2.val + jin) % 10;
    temp.push(val);

    jin = (l1.val + l2.val + jin - val) / 10;
    l1 = l1.next;
    l2 = l2.next;
  }
  for (let i = temp.length - 1; i >= 0; i--) {
    let tempNode = new ListNode(temp[i]);
    tempNode.next = result.next;
    result.next = tempNode;
  }
  return result.next;
}
