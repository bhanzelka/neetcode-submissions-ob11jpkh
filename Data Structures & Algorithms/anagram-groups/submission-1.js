class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        for (let str of strs) {
            let freqArray = new Array(26).fill(0);
            for (let char of str) {
                let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
                freqArray[index]++ 
            }

            if (map.has(freqArray.join())) {
                let existing = map.get(freqArray.join());
                existing.push(str);
            } else {
                map.set(freqArray.join(), [str])
            }
        }

        return map.values().toArray();
    }
}
