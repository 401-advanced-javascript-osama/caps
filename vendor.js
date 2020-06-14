require('dotenv').config();
const events = require('./events.js');
require('./caps.js')
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

module.exports = generateOrder;
