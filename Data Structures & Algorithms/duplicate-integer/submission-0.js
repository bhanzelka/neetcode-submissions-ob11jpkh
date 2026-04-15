class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seen = new Set();

        for (let i = 0; i < nums.length; i++) {
            let value = nums[i];

            if (seen.has(value)) {
                return true;
            }

            seen.add(value);
        }

        return false;
    }
}
