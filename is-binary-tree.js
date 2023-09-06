// This function returns the reason why it considers the input
// not a binary tree. "ok" otherwise.
function isBinaryTree(edgesStr) {
    const childToParent = new Map(edgesStr.map(edge => edge.match(/\d+/g)));
    console.log(childToParent)
    // No node should have 2 parents
    if (childToParent.size < edgesStr.length) return "node with two parents";
    // No node should have 3 children
    const degree = {};
    for (const [child, parent] of childToParent) {
        console.log(child, parent)
         if ((++degree[parent] || (degree[parent] = 1)) > 2) return "node with three children";
    }
    // All upward paths lead to the same root (no cycles)
    const nodes = {};
    let current = 0;
    let countRoots = 0;
    for (let node of childToParent.keys()) {
        current++;
        while (node && !nodes[node]) {
            nodes[node] = current;
            node = childToParent.get(node);
        }
        if (!node && countRoots++) return "disconnected";
        if (node && nodes[node] == current) return "cycle";
    }
    return "ok";
}
console.log(isBinaryTree(["(2,1)", "(3,1)", "(4,2)", "(5,2)", "(6,3)", "(7,3)"]))