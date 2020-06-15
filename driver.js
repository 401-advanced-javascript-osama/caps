const events = require('./events.js');

events.on('pickup', (payload) => {
    setTimeout(() => {
        console.log(`DRIVER: picked up ${payload.orderID}`);
        events.emit('in-transit', payload)
        setTimeout(() => {
            console.log(`DRIVER: delivered up ${payload.orderID}`);
            events.emit('delivered', payload)
        }, 3000)
    }, 1000)
})


