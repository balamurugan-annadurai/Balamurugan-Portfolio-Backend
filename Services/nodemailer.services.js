import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config(); // Configure dotenv to load environment variables from a .env file


export const mail = (sendereName, senderEmail, senderMessage) => {

    // Create a transporter object
    const mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.User,
            pass: process.env.Pass
        }
    })

    // Email details
    const details = {
        from: process.env.User,
        to: "abalamurugan2003@gmail.com",
        subject: "Portfolio Messages",
        html: `
        <h4>Sender Name: ${sendereName}</h4>

        <h4>Sender Email Id: ${senderEmail}</h4>

        <p>Message: ${senderMessage}</p>`
    }

    // Send the email using the transporter
    mailTransporter.sendMail(details, (err) => {
        if (err) {
            console.log("Check credentials")
        }
        else {
            console.log("mail send successfully")
        }
    })
}