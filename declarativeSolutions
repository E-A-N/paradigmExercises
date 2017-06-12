/*Write a short program that prints each number from 1 to 100 on a new line. 

For each multiple of 3, print "Fizz" instead of the number. 

For each multiple of 5, print "Buzz" instead of the number. 

For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
*/

const options = {
  3: "Fizz",
  5: "Buzz",
  15: "FizzBuzz",
};

const div = (n1,n2) => ( n1 % n2 == 0 ? n2 : 0);

const setNth = (nth) => {
    const key = div(nth,15) || div(nth,3) || div(nth,5);
    const statement = options[key];
    return key ? statement : nth;
};

[...Array(100).keys()].forEach( (nth) => (console.log(setNth(nth))))
