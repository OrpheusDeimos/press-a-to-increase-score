controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    music.baDing.play()
    info.changeScoreBy(1)
})
scene.setBackgroundColor(8)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . f f e e e e f f . . . . . 
    . . f e e e f f e e e f . . . . 
    . . f f f f 2 2 f f f f . . . . 
    . f f e 2 e 2 2 e 2 e f f . . . 
    . f e f 2 f f f 2 f 2 e f . . . 
    . f f f 2 2 e e f 2 f f f . . . 
    . f e e f 2 e e f f 2 e f . . . 
    . f e e e f e e e f f e f f . . 
    . f e e e e e e e e e e f f . . 
    . f f e e e e e e e e f . . . . 
    . f 4 f f f f f f f f e . . . . 
    . f d d e 2 2 2 2 2 f 4 . . . . 
    . f 4 e e f f f f f f e . . . . 
    . . . . . . . . f f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
