/*Write a short program that prints each number from 1 to 100 on a new line. 

For each multiple of 3, print "Fizz" instead of the number. 

For each multiple of 5, print "Buzz" instead of the number. 

For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
*/

//EXAMPLE #1
let amt = 101;
let ray = Array(amt);
ray.fill(0,0)
  .map((cur, ind) => {
        return ind !== 0 ? 
             ind % 3 === 0 ? (ind % 5 === 0 ? "fizzBuzz" : "fizz")
             : ind : ind;
});
console.log(ray);


//EXAMPLE #2
var rayray = [...Array(100).keys()];
rayray = rayray.map(i => i + 1)
  .map(i => i % 15 == 0 ? "FizzBuzz" : i)
  .map(i => i % 3  == 0 ? "Fizz" : i)
  .map(i => i % 5  == 0 ? "Buzz" : i)
