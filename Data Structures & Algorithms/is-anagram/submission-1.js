class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = new Map();
        for (let char of s) {
            let count = map.get(char);
            if (count >= 1) {
                map.set(char, ++count);
            } else {
                map.set(char, 1);
            }
        }

        for (let char of t) {
            let count = 0;
            if (map.has(char)) {
                count = map.get(char)
                if (count === 1) {
                    map.delete(char);
                } else {
                    map.set(char, --count);
                }
            } else {
                return false;
            }
        }

       return map.size === 0;
    }
}