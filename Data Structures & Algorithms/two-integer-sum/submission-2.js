class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let twoSum = new Map();
        for (let i = 0; i < nums.length; i++) {
            let difference = target - nums[i];
            if (!twoSum.has(difference)) {
                twoSum.set(nums[i], i);
            } else {
                return [twoSum.get(difference), i];
            }
        }
        return [];
    }
}
