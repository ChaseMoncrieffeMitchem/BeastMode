/** Linked List Palindrome **
 *
 * Return true if the given linked list is a palindrome.
 * Otherwise return false.
 *
 * @example
 * isPalindrome(1 -> 2 -> 2 -> 1) true
 * isPalindrome(10 -> 20 -> 30) false
 * isPalindrome(10 -> 20 -> 300 -> 20 -> 10) true
 *
 */

const isPalindrome = (head) => {
 let curr = head
 let value = []

 while(curr) {
    value.push(curr.val)
    curr = curr.next
 }

 let l = 0
 let r = value.length - 1
 
 while (l <= r) {
    if (value[l] !== value[r]) {
        return false
    }
    l++
    r--
 }
 return true
};

module.exports = isPalindrome;
