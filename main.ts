input.onButtonPressed(Button.A, function () {
    led.setBrightness(105)
    if (led.brightness() < 80) {
        led.setBrightness(255)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (led.brightness() < 120) {
        led.setBrightness(212)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    led.setBrightness(0)
})
