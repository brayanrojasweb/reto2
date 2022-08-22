input.onButtonPressed(Button.A, function () {
    basic.showNumber(1)
    basic.pause(5000)
    basic.showNumber(2)
    basic.pause(5000)
    basic.showNumber(3)
    basic.pause(5000)
    basic.showNumber(4)
    basic.pause(5000)
    basic.showNumber(5)
    basic.pause(5000)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.pause(50)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(5)
    basic.pause(5000)
    basic.showNumber(4)
    basic.pause(5000)
    basic.showNumber(3)
    basic.pause(5000)
    basic.showNumber(2)
    basic.pause(5000)
    basic.showNumber(1)
    basic.pause(5000)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.pause(50)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
