// @ts-ignore
import { TreeNode, BinaryTree } from "../../lib/binary-tree.ts";

const preOrder = <T>(tree: BinaryTree<T>): T[] => {

  let res: T[] = [];

  let _walk = (node: TreeNode<T>) => {
    res.push(node.value);
    if(node.left) _walk(node.left);
    if(node.right) _walk(node.right)
  };
  if (tree.root) _walk(tree.root);;

  return res;
}

const postOrder = <T>(tree: BinaryTree<T>): T[] => {
  let res: T[] = [];

  let _walk = (node: TreeNode<T>) => {
    if (node.left) _walk(node.left);
    if (node.right) _walk(node.right);
    res.push(node.value);
  };
  if (tree.root) _walk(tree.root);

  return res;
}

const inOrder = <T>(tree: BinaryTree<T>): T[] => {
  let res: T[] = [];

  let _walk = (node: TreeNode<T>) => {
    if (node.left) _walk(node.left);
    res.push(node.value);
    if (node.right) _walk(node.right);
  };
  if (tree.root) _walk(tree.root);

  return res;
}

const levelOrder = <T>(tree: BinaryTree<T>): T[] => {
  let res: T[] = [];
  let nodeQueue: TreeNode<T>[] = [];

  if (tree?.root) nodeQueue.push(tree.root);

  while(nodeQueue.length) {
    let curr = nodeQueue.shift();
    if (curr?.value) res.push(curr.value);
    if (curr?.left) nodeQueue.push(curr.left);
    if (curr?.right) nodeQueue.push(curr.right);
  }

  return res;

}

let one = new TreeNode<number>(1);
let two = new TreeNode<number>(2);
let three = new TreeNode<number>(3);
let four = new TreeNode<number>(4);
let five = new TreeNode<number>(5);
let six = new TreeNode<number>(6);
let seven = new TreeNode<number>(7);
let eight = new TreeNode<number>(8);
let nine = new TreeNode<number>(9);

one.left = two;
one.right = three;
three.left = four;
three.right = five;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;

const testTree = new BinaryTree<number>(one);
console.log(testTree.root?.value);

console.log('preOrder()');
console.log(preOrder(testTree));
console.log('postOrder()');
console.log(postOrder(testTree));
console.log('inOrder()');
console.log(inOrder(testTree));
console.log('levelOrder()');
console.log(levelOrder(testTree));
