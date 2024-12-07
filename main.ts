function* prod(arr: string[], n: number): Generator<string[]> {
    if (n === 0) {
      yield [];
      return;
    }
    for (const x of arr) {
      for (const y of prod(arr, n - 1)) {
        yield [x, ...y];
      }
    }
  }
  
  async function readInp(file: string) {
    const data = await Deno.readTextFile(file);
    return data.trim().split("\n").map(line => {
      const [target, nums] = line.split(":");
      return [
        parseInt(target.trim()),
        nums.trim().split(" ").map(Number),
      ];
    });
  }
  
  function calc(nums: number[], ops: string[]) {
    let r = nums[0];
    for (let i = 0; i < ops.length; i++) {
      if (ops[i] === "+") r += nums[i + 1];
      else if (ops[i] === "*") r *= nums[i + 1];
    }
    return r;
  }
  
  async function solve(file: string) {
    const data = await readInp(file);
    let total = 0;
  
    for (const [t, nums] of data) {
        //@ts-ignore
      const n = nums.length - 1;
      for (const ops of prod(["+", "*"], n)) {
        //@ts-ignore
        if (calc(nums, ops) === t) {
          total += t;
          break;
        }
      }
    }
  
    console.log("Result:", total);
  }
  
  solve("./input2.txt");