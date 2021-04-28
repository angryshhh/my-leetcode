/*
 * @lc app=leetcode.cn id=502 lang=javascript
 *
 * [502] IPO
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
  // 维护一个大顶堆和一个小顶堆
  // 大顶堆中是capital小于等于w的项目，顶是profits最大的项目
  // 小顶堆是capital大于w的项目，顶capital最小的项目
  // 每一轮推出大顶堆的顶，将其profits加给w
  // 并维护小顶堆，将小雨等于新w的项目推出到大顶堆
  // 进行k轮
  let minHeap = [], maxHeap = [];
  for (let i = 0; i < capital.length; i++) {
    if (capital[i] > w) {
      minHeap.push(i);
      adjustMinHeapUp(minHeap, capital);
    } else {
      maxHeap.push(i);
      adjustMaxHeapUp(maxHeap, profits);
    }
  }
  for (let i = 0; i < k; i++) {
    if (maxHeap.length) {
      w += profits[maxHeap[0]];
      if (maxHeap.length === 1) {
        maxHeap = [];
      } else {
        maxHeap[0] = maxHeap.pop();
        adjustMaxHeapDown(maxHeap, profits);
      }
      while (minHeap.length && capital[minHeap[0]] <= w) {
        maxHeap.push(minHeap[0]);
        adjustMaxHeapUp(maxHeap, profits);
        if (minHeap.length === 1) {
          capital = [];          
        } else {
          minHeap[0] = minHeap.pop();
          adjustMinHeapDown(minHeap, capital);
        }
      }
    } else {
      break;
    }
  }
  return w;
};

// var findMaximizedCapital = function(k, w, profits, capital) {
  // 维护一个大顶堆和一个降序数组
  // 大顶堆中是capital小于等于w的项目，顶是profits最大的项目
  // 降序数组capital大于w的项目，按capital降序排序
  // 每一轮推出大顶堆的顶，将其profits加给w
  // 并维护讲叙数组，将小于等于新w的项目推出到大顶堆
  // 进行k轮
  // let bigCapital = [], maxHeap = [];
  // for (let i = 0; i < capital.length; i++) {
    // if (capital[i] > w) {
      // bigCapital.push(i);
    // } else {
      // maxHeap.push(i);
      // adjustMaxHeapUp(maxHeap, profits);
    // }
  // }
  // bigCapital.sort((a, b) => capital[b] - capital[a]);
  // for (let i = 0; i < k; i++) {
    // if (maxHeap.length) {
      // w += profits[maxHeap[0]];
      // if (maxHeap.length === 1) {
        // maxHeap = [];
      // } else {
        // maxHeap[0] = maxHeap.pop();
        // adjustMaxHeapDown(maxHeap, profits);
      // }
      // while (bigCapital.length && capital[bigCapital[bigCapital.length - 1]] <= w) {
        // maxHeap.push(bigCapital.pop());
        // adjustMaxHeapUp(maxHeap, profits);
      // }
    // } else {
      // break;
    // }
  // }
  // return w;
// };

function adjustMinHeapDown(heap, capital) {
  let nodeIndex = 0;
  while (nodeIndex < heap.length) {
    let leftChildIndex = nodeIndex * 2 + 1;
    let rightChildIndex = nodeIndex * 2 + 2;
    let minChildIndex = leftChildIndex;
    if (leftChildIndex < heap.length && rightChildIndex < heap.length) {
      minChildIndex = capital[heap[leftChildIndex]] > capital[heap[rightChildIndex]] ? rightChildIndex : leftChildIndex;
    } else if (leftChildIndex < heap.length) {
      // 
    } else if (rightChildIndex < heap.length) {
      minChildIndex = rightChildIndex;
    } else {
      break;
    }
    if (capital[heap[minChildIndex]] < capital[heap[nodeIndex]]) {
      heap[nodeIndex] += heap[minChildIndex];
      heap[minChildIndex] = heap[nodeIndex] - heap[minChildIndex];
      heap[nodeIndex] -= heap[minChildIndex];
      nodeIndex = minChildIndex;
    } else {
      break;
    }
  }
}
// 
function adjustMinHeapUp(heap, capital) {
  let nodeIndex = heap.length - 1;
  while (nodeIndex > 0) {
    let parentIndex = Math.ceil(nodeIndex / 2) - 1;
    if (capital[heap[parentIndex]] > capital[heap[nodeIndex]]) {
      heap[parentIndex] += heap[nodeIndex];
      heap[nodeIndex] = heap[parentIndex] - heap[nodeIndex];
      heap[parentIndex] -= heap[nodeIndex];
      nodeIndex = parentIndex;
    } else {
      break;
    }
  }
}

function adjustMaxHeapDown(heap, profits) {
  let nodeIndex = 0;
  while (nodeIndex < heap.length) {
    let leftChildIndex = nodeIndex * 2 + 1;
    let rightChildIndex = nodeIndex * 2 + 2;
    let minChildIndex = leftChildIndex;
    if (leftChildIndex < heap.length && rightChildIndex < heap.length) {
      minChildIndex = profits[heap[leftChildIndex]] < profits[heap[rightChildIndex]] ? rightChildIndex : leftChildIndex;
    } else if (leftChildIndex < heap.length) {
      // 
    } else if (rightChildIndex < heap.length) {
      minChildIndex = rightChildIndex;
    } else {
      break;
    }
    if (profits[heap[minChildIndex]] > profits[heap[nodeIndex]]) {
      heap[nodeIndex] += heap[minChildIndex];
      heap[minChildIndex] = heap[nodeIndex] - heap[minChildIndex];
      heap[nodeIndex] -= heap[minChildIndex];
      nodeIndex = minChildIndex;
    } else {
      break;
    }
  }
}

function adjustMaxHeapUp(heap, profits) {
  let nodeIndex = heap.length - 1;
  while (nodeIndex > 0) {
    let parentIndex = Math.ceil(nodeIndex / 2) - 1;
    if (profits[heap[parentIndex]] < profits[heap[nodeIndex]]) {
      heap[parentIndex] += heap[nodeIndex];
      heap[nodeIndex] = heap[parentIndex] - heap[nodeIndex];
      heap[parentIndex] -= heap[nodeIndex];
      nodeIndex = parentIndex;
    } else {
      break;
    }
  }
}
// @lc code=end
