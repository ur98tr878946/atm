input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    if (_function == "A") {
        _function = "B"
        basic.clearScreen()
    } else {
        _function = "A"
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    soundExpression.giggle.playUntilDone()
    entry = "" + entry + "A"
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    if (entry == password) {
        basic.clearScreen()
        basic.showString("validating with your bank ...")
        basic.showIcon(IconNames.Yes)
        basic.showString("your balance is" + MONEY)
        if (MONEY > 11) {
            basic.showString("taking money")
            MONEY += -11
            basic.showString("take money from flap")
            entry = ""
            for (let index = 0; index < 4; index++) {
                basic.showLeds(`
                    . # . # .
                    . . # . .
                    # . . . #
                    . # . # .
                    . . # . .
                    `)
                basic.showLeds(`
                    . . . . .
                    . # . # .
                    . . # . .
                    # . . . #
                    . # . # .
                    `)
                basic.showLeds(`
                    . . # . .
                    . . . . .
                    . # . # .
                    . . # . .
                    # . . . #
                    `)
                basic.showLeds(`
                    . # . # .
                    . . # . .
                    . . . . .
                    . # . # .
                    . . # . .
                    `)
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . . . . .
                    . # . # .
                    `)
                basic.showLeds(`
                    . . # . .
                    # . . . #
                    . # . # .
                    . . # . .
                    . . . . .
                    `)
                basic.showLeds(`
                    . # . # .
                    . . # . .
                    # . . . #
                    . # . # .
                    . . # . .
                    `)
            }
        } else {
            basic.showString("not enough")
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        }
    } else {
        basic.showIcon(IconNames.No)
        entry = ""
    }
})
input.onButtonPressed(Button.B, function () {
    soundExpression.hello.playUntilDone()
    entry = "" + entry + "B"
})
let _function = ""
let entry = ""
let password = ""
let MONEY = 0
basic.showString("V§5")
music.setVolume(255)
MONEY = 1111
password = "ABAB"
entry = ""
_function = "B"
basic.showString("Hello!")
basic.showArrow(ArrowNames.North)
soundExpression.hello.playUntilDone()
soundExpression.happy.playUntilDone()
soundExpression.giggle.playUntilDone()
soundExpression.mysterious.playUntilDone()
soundExpression.sad.playUntilDone()
soundExpression.hello.playUntilDone()
soundExpression.happy.playUntilDone()
soundExpression.giggle.playUntilDone()
soundExpression.mysterious.playUntilDone()
soundExpression.sad.playUntilDone()
soundExpression.sad.playUntilDone()
basic.forever(function () {
    if (_function == "A") {
        basic.showString("this ATM is closed please call staff" + _function)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
