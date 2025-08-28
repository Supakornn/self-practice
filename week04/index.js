// 1. Median of Two Sorted Arrays
var findMedianSortedArrays = function (nums1, nums2) {
    const arr = [...nums1, ...nums2].sort((a, b) => a - b);
    const mid = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
        return (arr[mid - 1] + arr[mid]) / 2;
    } else {
        return arr[mid];
    }
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));

// -----------------------------------------------------
