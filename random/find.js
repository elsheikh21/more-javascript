//   A         B
//  / \       / \
// O1 O2     O   O
//    /|\       /|\
//   x O O     y O O

// y = find(A, B, x);

function fetchElements(root) {
  // create to be return array of elements
  var arrayOfEl = [];
  var rootChildren = root.children; // array
  // fetch length to find no of children
  var rootChildrenLength = rootChildren.length;
  // stopping condition for the recursive method
  if (rootChildrenLength === 0) {
    return arrayOfEl;
  }
  // looping until no more children are there, O(n)
  for (let i = 0; i < rootChildrenLength; i++) {
    var el = root.Children[i];
    // push the child
    arrayOfEl.push(el);
    // push the elements of the child tree
    arrayOfEl.concat(fetchElements(el));
  }
  return arrayOfEl;
}

function find(A, B, x) {
  var arrayA = [];
  var arrayB = [];
  // 1. start by searching tree A
  // 2. push the elements of tree A, to an array called treeAelements
  arrayA = fetchElements(A);
  arrayB = fetchElements(B);
  // 3. find element A, after pushing all the el of tree A by using indexOf()
  var indexOfElX = arrayA.indexOf(x);
  // 4. fetch the index of elment x in tree B array
  return arrayB[indexOfElX];
}
