/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  if (nums1.length === 0) {
    return middle(nums2, nums2.length);
  }
  if (nums2.length === 0) {
    return middle(nums1, nums1.length);
  }
  let [left, right] = nums1[0] < nums2[0] ? [nums1, nums2] : [nums2, nums1];
  if (left[left.length - 1] <= right[0]) {
    if (left.length > right.length) {
      return middle(left, left.length + right.length);
    } else if (left.length < right.length) {
      return middle(right, right.length - left.length);
    } else {
      return (left[left.length - 1] + right[0]) / 2;
    }
  }
  let i = 0, j = 0;
  let middleIndex =
    (left.length + right.length) % 2 ?
    ~~((left.length + right.length) / 2) :
    (left.length + right.length) / 2 - 1;
  let temp = [];
  while (temp.length <= middleIndex + 1
  ) {
    if (i >= left.length) {
      temp.push(right[j++]);
    } else if (j >= right.length) {
      temp.push(left[i++]);
    } else {
      temp.push(left[i] < right[j] ? left[i++] : right[j++]);
    }
  }
  return (left.length + right.length) % 2 ?
    temp[middleIndex] :
    (temp[middleIndex] + temp[middleIndex + 1]) / 2;
};

function middle(nums = [], length) {
  return length % 2 ?
    nums[~~(length / 2)] :
    (nums[length / 2 - 1] + nums[length / 2]) / 2;
};

// @lc code=end

