// let num = prompt("please enter a number");
const prime = (num) =>{
  if (num <= 1){
    alert("this is not a prime number");
    return false;
   }
   else if(num >= 2){
    for (let i = 2; i < num; i++) {
      if( num % i == 0){
        alert("This is not a prime number either");
        return false;
      }else {
        alert("This is a prime number");
        return true;
      }
    }
  }
}
prime(-17);


function solution (arg) {
  return prime(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
