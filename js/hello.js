// let a = Math.ceil(3.4);
// console.log(a)

// let b = Math.trunc(3.3)

// console.log(b)


// let c = Math.floor(4.6)


// console.log(c)


// let random_num = Math.floor(Math.random()*10);

// console.log(random_num)


















function fib(num){
    if (num<=1) {
        return num
    }
    else {
        return fib(num-1) + fib(num-2)
    }
}

for (let index = 0; index < 10; index++) {
    console.log(fib(index));
    
}