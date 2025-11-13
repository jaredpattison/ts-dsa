/* 16. 3Sum Closest
Medium

Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

 

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
Example 2:

Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
 

Constraints:

3 <= nums.length <= 500
-1000 <= nums[i] <= 1000
-104 <= target <= 104 */

const threeSumClosest = (nums: number[], target: number): number => {

  nums.sort((a, b) => (a - b))
  let res = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      
      let sum = nums[i] + nums[left] + nums[right];
      
      if (Math.abs(sum - target) < Math.abs(res - target)) res = sum;
      if (sum === target) break;
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return res;
}


describe('Return expected string', () => {
  test('Case 1', () => {
    expect(threeSumClosest([-1,2,1,-4], 1)).toStrictEqual(2);
  });
  test('Case 2', () => {
    expect(threeSumClosest([0,0,0], 4)).toStrictEqual(0);
  });
  test('Case 3', () => {
    expect(threeSumClosest([1,1,1,0], -100)).toStrictEqual(2);
  });
  test('Case 4', () => {
    expect(threeSumClosest([1,2,7,13], 12)).toStrictEqual(10);
  });
});