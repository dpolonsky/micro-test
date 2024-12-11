music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
let led2 = 0
let ledincr = 1
loops.everyInterval(500, function () {
    led.plotBarGraph(
    led2,
    4
    )
    led2 += ledincr
    if (led2 == 4) {
        ledincr = -1
    }
    if (true) {
    	
    }
})
basic.forever(function () {
	
})
