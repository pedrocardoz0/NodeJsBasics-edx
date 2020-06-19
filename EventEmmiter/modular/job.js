const EventEmitter = require('events')

class Job extends EventEmitter {
    constructor(props) {
        super(props)
        this.on('start', () => {
            this.process()
        })
    }
    process() {
        setTimeout( () => {
            this.emit('done', { completedOn: new Date() })
        }, 700)
    }
}

module.exports = Job