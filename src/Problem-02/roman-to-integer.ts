function romanToInt(s: string): number {
  const symbols: any = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let int: number = 0;

  for (let index = 0; index < s.length; index++) {
    if (symbols[s[index]] < symbols[s[index + 1]]) {
      int -= symbols[s[index]];
    } else {
      int += symbols[s[index]];
    }
  }

  return int;
}
