function run(expression, data) {
  // console.log("data ", data);
  // get all the expressions
  const exps = expression
    .split(/(\+|\-)/g)
    .filter((exp) => exp != "+" && exp != "-");
  // console.log("expressions: ", exps);

  let condition,
    left_node,
    right_node,
    valid_expression_regex =
      /if \((var_\d{1,} == \d{1,})\, (\d{1,})\, ((\d{1,}\))|(if \(var_\d == \d, \d{1,}\, \d{1,}\)\)))/g;
  for (const exp of exps) {
    for (const match of exp.matchAll(valid_expression_regex)) {
      condition = match[1];
      left_node = match[2];
      right_node = match[3].slice(0, -1);
    }
    condition = condition.split(" == ");
    // console.log("condition", condition);
    // console.log("left_node:", left_node);
    // console.log("right_node:", right_node);

    condition = data[condition[0]] == condition[1];
    if (condition && Boolean(left_node)) return left_node;
    else {
      const is_num = isNaN(right_node) && !isNaN(parseFloat(right_node));
      if (is_num && Boolean(left_node)) return right_node;
      if (!is_num && right_node.match(valid_expression_regex))
        run(right_node, data);
      else continue;
    }
  }
}


