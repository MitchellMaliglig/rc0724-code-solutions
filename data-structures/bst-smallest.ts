import { BinarySearchTree, TreeNode } from './lib/bst';

/**
 * Returns the smallest value in the BST, or `Infinity` if the tree is empty.
 */
export function smallest(bst: BinarySearchTree): number {
  return smallestRecursive(bst.root);
}

function smallestRecursive(node: TreeNode | undefined): number {
  if (!node) {
    return Infinity;
  } else if (!node.left) {
    return node.value;
  } else {
    return smallestRecursive(node.left);
  }
}
