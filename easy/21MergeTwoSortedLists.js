/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
    let node1 = list1;
    let node2 = list2;
    let head = new ListNode();
    let current = head;

    while (node1 && node2) {
        if (node1.val > node2.val) {
            current.next = node2;
            node2 = node2.next;
        } else {
            current.next = node1;
            node1 = node1.next;
        }
        current = current.next;
    }
    if (node1) current.next = node1;
    if (node2) current.next = node2;

    return head.next;
};