const net = require('net');
const client = new net.Socket();
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
const faker = require('faker');
const storeName = process.env.SRORE_NAME || 'caps-shop'
client.connect(PORT, HOST, () => {

setInterval(() => {
    let newOrder = {
        store: storeName,
        orderID: faker.random.number(),
        customer: faker.name.firstName(),
        address: faker.address.city()
    }
    const event = JSON.stringify({ event: 'pickup', payload: newOrder });
    client.write(event);
    
},5000)
        client.on('data', (data) => {
        
          const even = JSON.parse(data);
          if (even.event === 'delivered') {
              console.log(`VENDOR: Thank you for delivering ${even.payload.orderID}`);
          }
        });

});

client.on('error', (err) => console.log('Client Error ', err.message));
