/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = (head) => {
    let arr = [head];

    while (arr[arr.length - 1].next) {
        arr.push(arr[arr.length - 1].next);
    }

    return arr[Math.floor(arr.length / 2)];
};