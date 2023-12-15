// Write a function that prints numbers in the Fibonacci sequence up to and including n
// Ex: fibSequence(1) => [0, 1]
// fibSequence(2) => [0, 1, 1]
// fibSequence(3) => [0, 1, 1, 2]
// fibSequence(25) => [0, 1, 1, 2, 3, 5, 8, 13, 21]

const iterativeFibSequence = (n) => {
    // Initialize accumulator
    const fibs = [0, 1]
    // Iterate while the last number in the fibs array is less than or equal to n
    while(fibs[fibs.length - 1] <= n){
        // Add the sum of last two numbers in the array to the array
        const sum = fibs[fibs.length - 1] + fibs[fibs.length - 2]
        fibs.push(sum)
    }
    // If the last number in the array is greater than n, pop off the last number
    if(fibs[fibs.length - 1] > n){
        fibs.pop()
    }
    return fibs
}
// console.log(iterativeFibSequence(8))


const recursiveFibSequence = (n, fibs=[0, 1]) => {
    // Guard clauses
    if(n === 0) return [0]
    if(n === 1) return fibs

    // Base case, if the last number in fibs is greater than n, return fibs
    if(fibs[fibs.length - 1] > n){
        fibs.pop()
        return fibs
    }
    // Get the sum of the last two numbers in our fibs array and push the sum to fibs
    let sum = fibs[fibs.length - 1] + fibs[fibs.length - 2]
    fibs.push(sum)
    // [0, 1, 1]
    
    // Calling function again recursively and passing in the same n, but also passing in the updated fibs array
    return recursiveFibSequence(n, fibs)
    // Args at second function call are (2, [0, 1, 1])
    // Args at the third function call are (2, [0, 1, 1, 2])
}
console.log(recursiveFibSequence(21))