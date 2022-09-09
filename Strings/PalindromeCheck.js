// Time Complexity: O(n) - where n is the length of the input string
// Space Complexity: O(1)

function isPalindrome(string) {
  let p1 = 0, p2 = string.length - 1

 while (p1 < p2) {
   if (string[p1] === string[p2]) {
     p1++
     p2--
   } else {
     p1 = 1000
   }
 }

 return p1 !== 1000
}