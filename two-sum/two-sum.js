function twoSum(nums = [3, 3], target = 6) {
  for (let i = 0; i < nums.length; i++) {
    if (
      nums.includes(target - nums[i]) &&
      nums.indexOf(target - nums[i]) !== i
    ) {
      return [i, nums.indexOf(target - nums[i])];
    }
  }
}

export default twoSum;
