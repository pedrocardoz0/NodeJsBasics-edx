const EventEmiter = require('events')

class Emitter extends EventEmiter {}

emitter = new Emitter()

emitter.once('knock', function(){
    console.log('Who\'s there ?')
})

emitter.emit('knock')
emitter.emit('knock')

/*
The .once(emitterName, callback() )  -> Whill run just once*/