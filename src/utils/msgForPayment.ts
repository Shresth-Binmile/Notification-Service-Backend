export default function msgForPayment (status:boolean, userID:string, orderID:string) {
    if(status === true){
        return `<!DOCTYPE html>
                <html>
                <head>
                    <style>
                        .container {
                            font-family: Arial, sans-serif;
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                            border: 1px solid #e0e0e0;
                            border-radius: 8px;
                            background-color: #f9f9f9;
                        }
                        .header {
                            background-color: #5cb85c;
                            color: #ffffff;
                            padding: 10px;
                            text-align: center;
                            border-radius: 8px 8px 0 0;
                        }
                        .content {
                            margin-top: 20px;
                        }
                        .footer {
                            margin-top: 30px;
                            text-align: center;
                            font-size: 12px;
                            color: #888888;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h2>Payment Successful</h2>
                        </div>
                        <div class="content">
                            <p>Dear User,</p>
                            <p>We are pleased to inform you that your payment for Order ID <strong>#${orderID}</strong> has been successfully processed.</p>
                            <p>Your order is now being prepared for shipment. We will notify you once it is dispatched.</p>
                            <p>Thank you for shopping with us!</p>
                        </div>
                        <div class="footer">
                            <p>&copy; 2024 Your Company. All Rights Reserved.</p>
                        </div>
                    </div>
                </body>
                </html>`
    }
    else{
        return `<!DOCTYPE html>
                <html>
                <head>
                    <style>
                        .container {
                            font-family: Arial, sans-serif;
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                            border: 1px solid #e0e0e0;
                            border-radius: 8px;
                            background-color: #f9f9f9;
                        }
                        .header {
                            background-color: #d9534f;
                            color: #ffffff;
                            padding: 10px;
                            text-align: center;
                            border-radius: 8px 8px 0 0;
                        }
                        .content {
                            margin-top: 20px;
                        }
                        .footer {
                            margin-top: 30px;
                            text-align: center;
                            font-size: 12px;
                            color: #888888;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h2>Payment Failed</h2>
                        </div>
                        <div class="content">
                            <p>Dear User,</p>
                            <p>We regret to inform you that your payment for Order ID <strong>#${orderID}</strong> has failed.</p>
                            <p>Please try again or contact our support team for further assistance.</p>
                            <p>Thank you for your understanding.</p>
                        </div>
                        <div class="footer">
                            <p>&copy; 2024 Your Company. All Rights Reserved.</p>
                        </div>
                    </div>
                </body>
                </html>`
    }
}