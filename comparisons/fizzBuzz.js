//Functional
var ray = [...Array(100).keys()];
ray = ray.map(i => i + 1)
  .map(i => i % 15 == 0 ? "FizzBuzz" : i)
  .map(i => i % 3  == 0 ? "Fizz" : i)
  .map(i => i % 5  == 0 ? "Buzz" : i)
console.log(ray)

//Declarative
const options = {
  3: "Fizz",
  5: "Buzz",
  15: "FizzBuzz",
};
const div = (n1,n2) => ( n1 % n2 == 0 ? n2 : 0);
const setNth = (nth) => {
    const key = div(nth,15) || div(nth,3) || div(nth,5);
    const statement = options[key];
    return key ? statement : nth;};
[...Array(100).keys()].forEach( (nth) => (console.log(setNth(nth))))

//Imperative
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
