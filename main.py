bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Heart)
})
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P8, 0)
basic.forever(function () {
    if (true) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
})
