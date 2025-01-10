let min = 1
let max = 100
let guess = 0
let tries = 0

input.onButtonPressed(Button.A, function () {
    if (guess > 0) {
        max = guess - 1
    }
    guess = Math.floor((min + max) / 2)
    tries += 1
    basic.showNumber(guess)
})

input.onButtonPressed(Button.B, function () {
    if (guess < 100) {
        min = guess + 1
    }
    guess = Math.floor((min + max) / 2)
    tries += 1
    basic.showNumber(guess)
})

input.onButtonPressed(Button.AB, function () {
    basic.showString("good!")
    basic.showNumber(tries)
    min = 1
    max = 100
    tries = 0
    guess = Math.floor((min + max) / 2)
})