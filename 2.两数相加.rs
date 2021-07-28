/*
 * @lc app=leetcode.cn id=2 lang=rust
 *
 * [2] 两数相加
 */

// @lc code=start
// Definition for singly-linked list.
// #[derive(PartialEq, Eq, Clone, Debug)]
// pub struct ListNode {
//   pub val: i32,
//   pub next: Option<Box<ListNode>>
// }
//
// impl ListNode {
//   #[inline]
//   fn new(val: i32) -> Self {
//     ListNode {
//       next: None,
//       val
//     }
//   }
// }
impl Solution {
    pub fn add_two_numbers(l1: Option<Box<ListNode>>, l2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut result: Option<Box<ListNode>> = None;
        let mut tail = &mut result;
        let mut temp = (l1, l2, 0, 0); // (l1, l2, sum, carry)

        loop {
            temp = match temp {
                (None, None, _, 0) => break,
                (None, None, _, carry) => (None, None, carry, 0),
                (Some(list), None, _, carry) | (None, Some(list), _, carry) if list.val + carry >= 10 => {
                    (list.next, None, list.val + carry - 10, 1)
                }
                (Some(list), None, _, carry) | (None, Some(list), _, carry) => {
                    (list.next, None, list.val + carry, 0)
                }
                (Some(list1), Some(list2), _, carry) if list1.val + list2.val + carry >= 10 => {
                    (list1.next, list2.next, list1.val + list2.val + carry - 10, 1)
                }
                (Some(list1), Some(list2), _, carry) => {
                    (list1.next, list2.next, list1.val + list2.val + carry, 0)
                }
            };
            *tail = Some(Box::new(ListNode::new(temp.2)));
            tail = &mut tail.as_mut().unwrap().next;
        }
        result
    }
}
// @lc code=end

