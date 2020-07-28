/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  // let index1 = 0;
  // while (index1 < m) {
  //   if (nums1[index1] > nums2[0]) {
  //     let temp = nums1[index1]
  //     nums1[index1] = nums2[0];
  //     let i = 1;
  //     while (i < n && nums2[i] < temp) {
  //       nums2[i - 1] = nums2[i];
  //       i++;
  //     }
  //     nums2[i - 1] = temp;
  //   }
  //   index1++;
  // }
  // for (let i = 0; i < n; i++) {
  //   nums1[index1 + i] = nums2[i];
  // }
  
  let index1 = m - 1, index2 = n - 1;
  let index = m + n - 1;
  while (index1 >= 0 && index2 >= 0) {
    if (nums1[index1] > nums2[index2]) {
      nums1[index] = nums1[index1];
      index--;
      index1--;
    } else {
      nums1[index] = nums2[index2];
      index--;
      index2--;
    }
  }
  while (index2 >= 0) {
    nums1[index2] = nums2[index2];
    index2--;
  }
};
// @lc code=end

