/*
 * @lc app=leetcode.cn id=1 lang=rust
 *
 * [1] 两数之和
 */

// @lc code=start
use std::collections::HashMap;
impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut targets = HashMap::new();
        let mut result = Vec::new();
        for (i, v) in nums.iter().enumerate() {
            match targets.get(&(target - *v)) {
                Some(ii) => {
                    result.push(*ii as i32);
                    result.push(i as i32);
                    break;
                },
                _ => {
                    targets.insert(v, i);
                }
            }
        };
        return result;
    }
}
// @lc code=end

