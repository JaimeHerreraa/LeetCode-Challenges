function romanToInt(s: string = "MCMXCIV"): number {
  const symbols: any = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let int: number = 0;

  for (let index = 0; index < s.length; index++) {
    const symbol: string = s[index];

    if (symbol === "I" && (s[index + 1] === "V" || s[index + 1] === "X")) {
      int += s[index + 1] === "V" ? 4 : 9;
      index++;
      continue;
    } else if (
      symbol === "X" &&
      (s[index + 1] === "L" || s[index + 1] === "C")
    ) {
      int += s[index + 1] === "L" ? 40 : 90;
      index++;
      continue;
    } else if (
      symbol === "C" &&
      (s[index + 1] === "D" || s[index + 1] === "M")
    ) {
      int += s[index + 1] === "D" ? 400 : 900;
      index++;
      continue;
    } else {
      int += symbols[symbol];
    }
  }

  return int;
}

console.log(romanToInt());
