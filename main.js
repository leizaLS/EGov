const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

//****/
const { newMessage } = require ('./messages/menu.js')

const client = new Client({
    puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    }
});
client.initialize();

client.on('ready', () => {
    console.log('El bot esta cargando!');
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true})
});

//mensajes
client.on('message_create', message => {
        //message.body = message.body.replace(/\s/g, '').replace(/[^\w\s]/gi, '').toLowerCase();
        //console.log(message.body)
        //if (message.body.length > 0) {
        //    newMessage(client, message)
        //}
        newMessage(client, message)
    }
);

//to do
//subir plan de estudios de ing y sociales


