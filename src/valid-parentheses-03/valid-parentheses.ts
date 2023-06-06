class Stack {
  private items: string[];
  constructor() {
    this.items = [];
  }
  push(element: string) {
    this.items.push(element);
  }
  pop(): string | undefined {
    if (this.items.length === 0) return "underflow";
    return this.items.pop();
  }
  peek(): string {
    return this.items[this.size() - 1];
  }
  size(): number {
    return this.items.length;
  }
  toString(): string {
    let str = "";
    for (let i = this.items.length; i > 0; i--) {
      str += i > 1 ? `${this.items[i - 1]}, ` : `${this.items[i - 1]}`;
    }
    return `[${str}]`;
  }
}

function isValid(s: string): boolean {
  const stack = new Stack();
  for (const char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    }
    if (char === ")" || char === "]" || char === "}") {
      if (
        (char === ")" && stack.peek() === "(") ||
        (char === "]" && stack.peek() === "[") ||
        (char === "}" && stack.peek() === "{")
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  if (stack.size() > 0) return false;
  return true;
}

console.log(isValid("[()]{[([{}])]}{"));
