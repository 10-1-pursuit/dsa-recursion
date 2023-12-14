// Write a function that sums all of the number up to and including a given number
const addition = (num) => {
    // initalize a total var to 0
    let total = 0

    // iterate up to/ or down from the num
    // for(let i = 0; i <= num; i++){
    //     // add each number to our total
    //     total += i
    // }

    // Starting at num and going down
    for(let i = num; i > 0; i--){
        total += i
    }
    // return total var
    return total
}

// console.log(addition(10))



// Write a function that will take a number and multiply it by every number lower than that number until we get to one: 3! => 3 * 2 * 1 => 6 // 5! => 5 * 4 * 3 * 2 * 1 => 120
const factorial = (num) => {
    // Initialize accumulator at 1, so we can start by multiplying by 1 (not zero)
    let total = 1

    // Iterate while num is greater than zero
    while(num > 0){
        // Multiply total by num and assign it to total
        total = total * num
        // Decrement//subtract one from num
        num--
    }
    // Return accumulator
    return total
}

console.log(factorial(3))
console.log(factorial(5))