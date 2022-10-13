function test(num) {
    if(num > 0) {
        console.log("Positive!");
    } else if(num < 0) {
        console.org("Negative!");
    } else if (num === 0) {
        console.log("Your answer is zero")

    } else {
        console.log("That is not a number")
    }
}

//calling a function
test(-5); //negative
test(10) //calling functions again
test(0)
test("Danielle")

const allowedAge = 7;

if(allowedAge >= 18 ) {
    console.log("access granted. welcome aboard!")
} else {
    console.log("You are too young to access this content")
}
