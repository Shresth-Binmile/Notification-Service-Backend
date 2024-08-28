import dotenv from 'dotenv'
import { envTypes } from '../interfaces/types'

dotenv.config()

const ENV:envTypes = {
    PORT: process.env.PORT!,
    RABBITMQ_URI: process.env.RABBITMQ_URI!,
    SENDER_EMAIL: process.env.SENDER_EMAIL!,
    SENDER_PASSKEY: process.env.SENDER_PASSKEY!,
    RECIEVER_EMAIL: process.env.RECIEVER_EMAIL!
}

export default ENV