import express, { Request, Response } from 'express'
import ENV from './config/server-config'
import { StatusCodes } from 'http-status-codes'
import messages from './utils/messages'
import { response } from './common/responses'
import router from './routes/route'
import { urls } from './utils/enums'
import recieveFromRabbitMQ from './rabbitmq/reciever'
import { connectToLocalRedis } from './redis/connectToLocalRedis'

const app = express()

app.use(express.json())
app.use(urls.BASE, router)

app.get('/', (req:Request, res:Response)=>{
    try {
        response({res:res, statusCode:StatusCodes.OK, success:true, message:messages.SERVER_HEALTHY})
    } catch (error:any) {
        response({res:res, statusCode:StatusCodes.INTERNAL_SERVER_ERROR, success:false, message:messages.SERVER_UNHEALTHY, error: {error}})
    }
})

app.listen(ENV.PORT, async()=>{
    try {
        console.log(messages.SERVER_RUNNING)
        await recieveFromRabbitMQ()
        console.log(messages.RABBIT_CONNECTED)
        await connectToLocalRedis()
        console.log(messages.REDIS_CONNECTED)
    } catch (error) {
        console.log('Error Listen: ', error)
    }
})