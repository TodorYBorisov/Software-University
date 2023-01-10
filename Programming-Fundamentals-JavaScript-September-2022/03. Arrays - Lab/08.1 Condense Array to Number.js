function solve(nums) {

    while (nums.length > 1) {

        for (let i = 0; i < nums.length; i++) {
            nums[i] = nums[i] + nums[i + 1];

        }
        nums.length--;

    }
    console.log(nums[0]);
}

solve([1, 2, 3, 4, 5])