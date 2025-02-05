handlebit.onHandleButtonPressed(handlebit.HandleButton.B2, function () {
    radio.sendString("CC")
    handlebit.handle_setPixelRGB(handlebit.HandleLights.Light2, HandleRGBColors.Red)
    handlebit.handle_showLight()
    senden = 1
    handlebit.clearLight()
    handlebit.handle_showLight()
})
function send (num: number, variable: string) {
    if (Math.floor(num / 20) != 6) {
        radio.sendValue(variable, pins.map(
        num,
        0,
        255,
        -100,
        100
        ))
        senden = 1
    }
}
handlebit.onHandleButtonPressed(handlebit.HandleButton.JOYSTICK1, function () {
    radio.sendString("J1")
    handlebit.handle_setPixelRGB(handlebit.HandleLights.Light1, HandleRGBColors.Green)
    handlebit.handle_showLight()
    senden = 1
    handlebit.clearLight()
    handlebit.handle_showLight()
})
handlebit.onHandleButtonPressed(handlebit.HandleButton.JOYSTICK2, function () {
    radio.sendString("J2")
    handlebit.handle_setPixelRGB(handlebit.HandleLights.Light2, HandleRGBColors.Green)
    handlebit.handle_showLight()
    senden = 1
    handlebit.clearLight()
    handlebit.handle_showLight()
})
function drawxy () {
    led.plot(pins.map(
    handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_X1),
    0,
    240,
    0,
    4
    ), pins.map(
    handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_Y1),
    250,
    20,
    0,
    4
    ))
    led.plot(pins.map(
    handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_X2),
    0,
    240,
    0,
    4
    ), pins.map(
    handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_Y2),
    250,
    20,
    0,
    4
    ))
}
handlebit.onHandleButtonPressed(handlebit.HandleButton.B1, function () {
    radio.sendString("CO")
    handlebit.handle_setPixelRGB(handlebit.HandleLights.Light1, HandleRGBColors.Yellow)
    handlebit.handle_showLight()
    senden = 1
    handlebit.clearLight()
    handlebit.handle_showLight()
})
let senden = 0
handlebit.handlebitInit()
basic.showIcon(IconNames.Yes)
radio.setGroup(1)
basic.forever(function () {
    basic.clearScreen()
    drawxy()
    send(handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_X1), "LX")
    send(handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_Y1), "LY")
    send(handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_X2), "RX")
    send(handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_Y2), "RY")
    if (senden == 1) {
        led.plot(0, 4)
        senden = 0
        basic.pause(50)
    } else {
        radio.sendString("stop")
    }
})
