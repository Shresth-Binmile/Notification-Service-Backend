import nodemailer from 'nodemailer'
import ENV from '../config/server-config'
import amqp from 'amqplib/callback_api.js'
import decodeMessageFromNotificationQueue from './decodeMessage';
import { subjects } from '../utils/enums';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.email',
    port: 587,
    service: 'gmail',
    secure: false,
    auth: {
        user: ENV.SENDER_EMAIL,
        pass: ENV.SENDER_PASSKEY,
    },
});

export async function sendMail(msg: amqp.Message) {
    try {
        const decodedMsg = decodeMessageFromNotificationQueue(msg)
        console.log(decodedMsg.message)
        const info = await transporter.sendMail({
            from: ENV.SENDER_EMAIL,
            to: ENV.RECIEVER_EMAIL,
            subject: decodedMsg.message === 'shippmentMsg' ? subjects.SHIPPMENT : decodedMsg.status === true ? subjects.PAYMENT_SUCCESS : subjects.PAYMENT_FAILED,
            text: "Hello world?",
            html: decodedMsg.htmlMsg,
        });
        console.log(info);
        return info.messageId
    } catch (error) {
        console.error
    }
}