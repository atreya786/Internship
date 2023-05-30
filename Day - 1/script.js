// let a = [10,20,30,40,50]
// let i = 5
// while(i--){
//     console.log(a[i])
// }
// for(let i = 0; i<a.length; i++){
//     console.log(a[i])
// }

function isPrime(a) {
  if (a < 2) return false;
  else {
    for (let i = 2; i < a; i++) {
      if (a % i === 0) {
        return false;
      }
    }
  }
  return true;
}

let b = [10, 23, 30, 40, 50];
for (let i = 0; i < b.length; i++) {
  if (isPrime(b[i]) === true) {
    console.log(b[i]);
  }
}
