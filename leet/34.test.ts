/* Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109 */

const searchRange = (nums: number[], target: number): number[] => {

    let res = [-1, -1];

    if (nums.length === 0) return res;

    const left = findLeftBound(nums, target);
    if (left === -1) return res;

    const right = findRightBound(nums, target);

    res[0] = left;
    res[1] = right;

    return res;
};

const findLeftBound = (nums: number[], target: number): number => {
    let left = 0;
    let right = nums.length -1;
    let res = -1;

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);

        if (nums[mid] === target) {
            res = mid;
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return res;
}

const findRightBound = (nums: number[], target: number): number => {
    let left = 0;
    let right = nums.length - 1;
    let res = -1;

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);

        if (nums[mid] === target) {
            res = mid;
            left = mid + 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return res;
}

/* const res = [];
let left = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] === target) {
    res.push(i);
    left = i;
    break;
  }
}
for (let j = nums.length - 1; j >= left; j--) {
  if (nums[j] === target) {
    res.push(j);
    break;
  }
}
return res.length ? res : [-1, -1];
}; */

describe('Return expected range', () => {
  test('Case 1', () => {
    expect(searchRange([5,7,7,8,8,10], 8)).toStrictEqual([3,4]);
  });
  test('Case 2', () => {
    expect(searchRange([5,7,7,8,8,10], 6)).toStrictEqual([-1,-1]);
  });
  test('Case 3', () => {
    expect(searchRange([], 0)).toStrictEqual([-1,-1]);
  });
});