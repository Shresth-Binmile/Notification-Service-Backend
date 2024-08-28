import amqp from 'amqplib/callback_api'
import { decodeMessageTypes, paymentQueueMsgTypes, shippedQueueMsgTypes } from '../interfaces/types'
import msgForPayment from '../utils/msgForPayment'
import msgForShippment from '../utils/msgForShipping'

export default function decodeMessageFromNotificationQueue (msg:amqp.Message) {
    const contents = msg?.content?.toString()

    const parsedContents:decodeMessageTypes = JSON.parse(contents)
    const {userID, orderID, paymentID, shippmentID, status} = parsedContents
    console.log('paymentID:', paymentID)
    if(shippmentID){
        const message = 'shippmentMsg'
        const htmlMsg = msgForShippment(shippmentID!, orderID!, userID!)
        return {userID, orderID, message, shippmentID, status, htmlMsg}
    }
    const message = 'paymentMsg' 
    const htmlMsg = msgForPayment(status!, userID!, orderID!)
    return {userID, orderID, paymentID, message, status, htmlMsg}
}