export default function msgForShippment (shippmentID:string, orderID:string, userID:string) {
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
                        background-color: #0275d8;
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
                        <h2>Shipment Dispatched</h2>
                    </div>
                    <div class="content">
                        <p>Dear User,</p>
                        <p>Good news! Your order with Order ID <strong>#${orderID}</strong> has been shipped and is on its way to you.</p>
                        <p>You can track your shipment using the following tracking number: <strong>${shippmentID}</strong>.</p>
                        <p>Thank you for shopping with us! We hope you enjoy your purchase.</p>
                    </div>
                    <div class="footer">
                        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
                    </div>
                </div>
            </body>
            </html>`
}