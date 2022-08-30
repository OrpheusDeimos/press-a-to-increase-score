sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(1)
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
sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . b d b . . . . . . 
    . . . . . . . b d b c . . . . . 
    . . . . b b c 5 5 5 c b b . . . 
    . . . . b 5 5 5 1 5 5 5 b . . . 
    . . . c c 5 5 5 1 5 5 5 c c . . 
    . . b b 5 5 5 1 1 1 5 5 5 b b . 
    . . d d 5 1 1 1 1 1 1 1 5 d d . 
    . . b b 5 5 5 1 1 1 5 5 5 b b . 
    . . . c c 5 5 5 1 5 5 5 c c . . 
    . . . . b 5 5 5 1 5 5 5 b . . . 
    . . . . b b c 5 5 5 c b b . . . 
    . . . . . . c b d b c . . . . . 
    . . . . . . . b d b . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food).setStayInScreen(true)
sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . b d b . . . . . . 
    . . . . . . . b d b c . . . . . 
    . . . . b b c 5 5 5 c b b . . . 
    . . . . b 5 5 5 1 5 5 5 b . . . 
    . . . c c 5 5 5 1 5 5 5 c c . . 
    . . b b 5 5 5 1 1 1 5 5 5 b b . 
    . . d d 5 1 1 1 1 1 1 1 5 d d . 
    . . b b 5 5 5 1 1 1 5 5 5 b b . 
    . . . c c 5 5 5 1 5 5 5 c c . . 
    . . . . b 5 5 5 1 5 5 5 b . . . 
    . . . . b b c 5 5 5 c b b . . . 
    . . . . . . c b d b c . . . . . 
    . . . . . . . b d b . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food).setVelocity(50, 50)
forever(function () {
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
    pause(100)
})
