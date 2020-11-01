bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
})
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
})
input.onButtonPressed(Button.AB, function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P8, 1)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_DOWN) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_DOWN) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.showLeds(`
            . . # . .
            . . # # .
            . . # # #
            . . # # .
            . . # . .
            `)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_DOWN) {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # . .
            . # # . .
            . . # . .
            `)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_UP) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P8, 0)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_UP) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P8, 0)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_UP) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P8, 0)
    } else {
    	
    }
})
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
