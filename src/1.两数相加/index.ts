function twoSum(nums: number[], target: number) {
    const hash:Record<number, number> = {}
    const l = nums.length;

    for(let i = 0; i < l; i++ ){
        const j = nums[i];
        const x = target - nums[i];
        console.info(x, hash[x]);
        if(hash[j] !== undefined) return [hash[j], i];
        hash[x] = i;
    }
};

const cases: {nums: number[], target: number}[] = [{
    nums: [2,7,11,15],
    target: 9
}, {
    nums: [3,2,4],
    target: 6
}]

function run() {
    return cases.map((c) => twoSum(c.nums, c.target))
}

console.log(run());