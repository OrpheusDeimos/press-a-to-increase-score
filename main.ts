controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.baDing.play()
    info.changeScoreBy(1)
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 50, 50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (true) {
        mySprite.destroy()
        game.over(false)
    }
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(1)
mySprite = sprites.create(img`
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
mySprite.setBounceOnWall(true)
controller.moveSprite(mySprite)
