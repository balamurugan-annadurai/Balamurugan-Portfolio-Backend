import dotenv from "dotenv"
import { mail } from "../Services/nodemailer.services.js";

export const sendMailToBala = (req, res) => {
    try {
        const { userName, emailId, message } = req.body;
        mail(userName, emailId, message);
        res.status(200).json({ message: "mail send" })
    } catch (error) {
        console.log(error);
    }
}