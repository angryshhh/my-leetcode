/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function adjustMinHeapDown(heap) {
  let nodeIndex = 0;
  while (nodeIndex < heap.length) {
    let leftChildIndex = nodeIndex * 2 + 1;
    let rightChildIndex = nodeIndex * 2 + 2;
    let minChildIndex = leftChildIndex;
    if (leftChildIndex < heap.length && rightChildIndex < heap.length) {
      minChildIndex = heap[leftChildIndex] > heap[rightChildIndex] ? rightChildIndex : leftChildIndex;
    } else if (leftChildIndex < heap.length) {
      
    } else if (rightChildIndex < heap.length) {
      minChildIndex = rightChildIndex;
    } else {
      break;
    }
    if (heap[minChildIndex] < heap[nodeIndex]) {
      heap[nodeIndex] += heap[minChildIndex];
      heap[minChildIndex] = heap[nodeIndex] - heap[minChildIndex];
      heap[nodeIndex] -= heap[minChildIndex];
      nodeIndex = minChildIndex;
    } else {
      break;
    }
  }
}

function adjustMinHeapUp(heap) {
  let nodeIndex = heap.length - 1;
  while (nodeIndex > 0) {
    let parentIndex = Math.ceil(nodeIndex / 2) - 1;
    if (heap[parentIndex] > heap[nodeIndex]) {
      heap[parentIndex] += heap[nodeIndex];
      heap[nodeIndex] = heap[parentIndex] - heap[nodeIndex];
      heap[parentIndex] -= heap[nodeIndex];
      nodeIndex = parentIndex;
    } else {
      break;
    }
  }
}

var findKthLargest = function(nums, k) {
  // nums.sort((a, b) => b - a);
  // return nums[k - 1];
  let minHeap = [];
  for (let i = 0; i < nums.length; i++) {
    if (minHeap.length === k) {
      if (minHeap[0] < nums[i]) {
        minHeap[0] = nums[i];
        adjustMinHeapDown(minHeap);
      }
    } else {
      minHeap.push(nums[i]);
      adjustMinHeapUp(minHeap);
    }
  }
  return minHeap[0];
};
// @lc code=end

