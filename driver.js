const events = require('./events.js');
require('./caps.js');
const order =   require('./vendor.js');

function cups() {
    setTimeout(() => {
        let newOrder = order();
        events.emit('pickup', newOrder)
        setTimeout(() => {
            console.log(`DRIVER: picked up ${newOrder.orderID}`);
            events.emit('in-transit', newOrder)
        }, 1000)
        setTimeout(() => {
            console.log(`DRIVER: delivered up ${newOrder.orderID}`);
            console.log(`VENDOR: Thank you for delivering ${newOrder.orderID}`);
            events.emit('delivered', newOrder)
            console.log('thank you');
        }, 3000)
        cups()
    }, 5000)
}
cups()


