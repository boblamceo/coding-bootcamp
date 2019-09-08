// nums: [0, 1, 8]
// target: 9
export default (nums: number[], target: number): number[] => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i == j) {
                continue
            }

            // TODO: only change the following line
            if (nums[i] + nums[j] === target) {
                return [ i, j ]
            }
        }
    }

    return [ -1, -1 ]
}
