import amqp from 'amqplib/callback_api'
import { bindingKeys } from '../utils/enums';
import messages from '../utils/messages';
import { sendMail } from '../controllers/sendMail';

async function recieveFromRabbitMQ () {
    amqp.connect('amqp://localhost', function(error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function(error1, channel) {
            if (error1) {
                throw error1;
            }
    
            var queue = bindingKeys.NOTIFY_MESSAGES;
    
            channel.assertQueue(queue, {
                durable: true
            });
    
            console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
    
            channel.consume(queue,async function(msg) {
                console.log(` [x] Received %s from ${queue}`, msg?.content.toString());
                await sendMail(msg!)
                channel.ack(msg!)
                console.log(`Acknowledged ${queue}:`, messages.MESSAGE_SEND)
            }, {
                noAck: false
            });
        });
    });
}

export default recieveFromRabbitMQ