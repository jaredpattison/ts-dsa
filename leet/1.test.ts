/* 1 Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1]. */

// Brute 33ms, 56MB
// Time complexity: O(n2)
// Space complexity: O(1)
// const twoSum = (nums: number[], target: number) => {

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) return [i, j];
//         }
//     }
//     return [];
// }

// Two-pass Hashmap 2ms, 59MB
// Time complexity: O(n)
// Space complexity: O(n)
// const twoSum = (nums: number[], target: number) => {
//     const map: Map<number, number> = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         map.set(nums[i], i);
//     }
//     for (let i = 0; i < nums.length; i++) {
//         let comp = target - nums[i];
//         if (map.has(comp) && map.get(comp) !== i) return [i, map.get(comp)];
//     }
// }

// One-pass Hashmap 4ms, 57MB
// Time complexity: O(n)
// Space complexity: O(n)
// const twoSum = (nums: number[], target: number) => {
//     const map: Map<number, number> = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         let comp = target - nums[i];
//         if (map.has(comp)) return [map.get(comp), i];
//         map.set(nums[i], i);
//     }
// }

// with simple object 3ms, 56MB
const twoSum = (nums: number[], target: number) => {
    const map: any = {};
    for (let i = 0; i < nums.length; i++) {
        const comp = target - nums[i];
        if (map.hasOwnProperty(comp)) return [map[comp], i];
        map[nums[i]] = i;
    }
}


describe('Test twoSum', () => {
    test('Case 1: nums = [2,7,11,15], target = 9', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
    });
    test('Case 2: nums = [3,2,4], target = 6', () => {
        expect(twoSum([3,2,4], 6)).toStrictEqual([1, 2]);
    });
});