function areBracketsBalanced(expr) {
  let stack = [];

  for (let i = 0; i < expr.length; i++) {
    let x = expr[i];

    if (x == "(" || x == "{" || x == "[") {
      stack.push(x);
      continue;
    }

    let check;
    switch (x) {
      case ")":
        check = stack.pop();
        if (check == "}" || check == "]") return false;
        break;
      case "}":
        check = stack.pop();
        if (check == ")" || check == "]") return false;
        break;
      case "]":
        check = stack.pop();
        if (check == "}" || check == ")") return false;
        break;
    }
  }
  return true
}
console.log(areBracketsBalanced('([{}])'))
