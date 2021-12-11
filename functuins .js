                                      //function max and min two numbs
function max(a,b){
    if (a>=b) return(console.log('max=%s and min=%s',a,b));
    else return(console.log('max=%s and min=%s',b,a));
}

console.log(max(50,40));
console.log(max(20,40));



                                       // 2. string type check
function isString(yourString){
    if (typeof(yourString)==='string') return true
    else return false;
}
// console.log(isString('jim'))
// console.log(isString(156))
// console.log(isString('156'))
// console.log(isString(true))
// console.log(isString({}))


                                           //3. FizzBuzz problem
function fizzbuzz(a){
    if ((a%15===0)) return 'fizzbuzz';
    if (a%3===0) return 'fizz';
    if (a%5===0) return 'buzz';
    else return a;

}
// console.log(fizzbuzz(10))
// console.log(fizzbuzz(2))
// console.log(fizzbuzz(84))
// console.log(fizzbuzz(40))


                         //4.squard num
function powerTwo(a){
    let n=0;
    while ((2**n<=a)) n++;
    return 2**n;
}
// console.log(powerTwo(87))
// console.log(powerTwo(1010))
// console.log(powerTwo(3812))
// console.log(powerTwo(72))
// console.log(powerTwo(66))
// console.log(powerTwo(98))

                              // 5. perfect Num
function isPerfect(n) {
    let sumDiv = 0;
    for (let i = 1; i <= (n / 2); i++) {
        if ((n % i) === 0) sumDiv += i
    }
    if (sumDiv === n) return "yes";
    else return "no";
}
// console.log(isPerfect(8))
// console.log(isPerfect(47))

//perfect number between 1-2000
// for (let i = 1; i < 2000; i++) {
//     if (isPerfect(i) === "yes") console.log(i)
// }

                                                           //6. prime num

function isPrime(a){
    if (a===2)  return true
    if (a===1) return false
    for(let i=2;i<=((a/2)+1);i++){
        if (a%i===0) return false
    }
    return true;
}
// console.log(isPrime(67))
// console.log(isPrime(1))
// console.log(isPrime(2))
// console.log(isPrime(101))
// console.log(isPrime(89))


                                                     //7. hard num
function isHard(i) {
    let iCopy = i;
    while (isPrime(iCopy)){
        iCopy=(iCopy-iCopy%10)/10
        if (iCopy<=10){
            if (isPrime(iCopy)) return true;
        }
    }
    return false;

}
// let n=3
// let num=10**(n-1)
// let maxLim=(10**n)
// for (num;num<maxLim;num++){
//    if(isHard(num)) console.log(num)
// }