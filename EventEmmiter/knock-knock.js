const EventEmitter = require('events')
const { emit } = require('process')

class Emitter extends EventEmitter {}

emitter = new Emitter()

emitter.on('knock', function() {
    console.log('Who\'s there?')
})

emitter.on('knock', function(){
    console.log('Go Away !')
})

emitter.emit('knock')
emitter.removeAllListeners()
emitter.emit('knock')