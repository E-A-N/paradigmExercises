/*Write a short program that prints each number from 1 to 100 on a new line. 

For each multiple of 3, print "Fizz" instead of the number. 

For each multiple of 5, print "Buzz" instead of the number. 

For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
*/

for (let x = 1; x < 100; x++){
  let val;
  if (x % 3 == 0){
      if (x % 5 == 0){
          val = "fizzBuzz";
      }
      else{
          val = "fizz";
      }
  }
  else if (x % 5 == 0){
      val = "buzz";
  }
  else{
      val = x;
  }
  console.log(val);
}
