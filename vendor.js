require('dotenv').config();
const events = require('./events.js');
const storeName = process.env.STORE_NAME;

const faker = require('faker');

function generateOrder() {
    let newOrder = {
        store: storeName,
        orderID: faker.random.number(),
        customer: faker.name.firstName(),
        address: faker.address.city()
    };
    return newOrder
}

setInterval(() => {
    events.emit('pickup', generateOrder())
},5000)

events.on('delivered' , ()=>{
console.log(`VENDOR: Thank you for delivering ${generateOrder().orderID}`);
})
