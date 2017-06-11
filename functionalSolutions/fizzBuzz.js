/*Write a short program that prints each number from 1 to 100 on a new line. 

For each multiple of 3, print "Fizz" instead of the number. 

For each multiple of 5, print "Buzz" instead of the number. 

For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
*/

let amt = 101;
let ray = Array(amt);
ray.fill(0,0)
  .map((cur, ind) => {
        return ind !== 0 ? 
             ind % 3 === 0 ? (ind % 5 === 0 ? "fizzBuzz" : "fizz")
             : ind : ind;
});
    
    
