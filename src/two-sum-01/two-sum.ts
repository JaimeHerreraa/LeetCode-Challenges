function TwoSum(nums: number[], target: number): number[] {
  for (let index = 0; index < nums.length; index++) {
    for (let subIndex = 0; subIndex < nums.length; subIndex++) {
      if (subIndex === index) {
        continue;
      } else {
        if (nums[index] + nums[subIndex] === target) {
          return [index, subIndex];
        }
      }
    }
  }

  return [];
}
