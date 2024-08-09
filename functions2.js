function isOdd(n){
    if(n % 2 !== 0){
        return true
    }else{
        return false
    }
}

console.log(isOdd(7))
console.log(isOdd(10))

function oddsSmallerThan(n){
    return Math.floor(n / 2);
}
console.log(oddsSmallerThan(7))
console.log(oddsSmallerThan(15))

function squareOrDouble(n){
    if(n % 2 !== 0){
        return(n * n)
    }else{
        return(n * 2)
    }
}
console.log(squareOrDouble(7))