import express from "express"
import { sendMailToBala } from "../Controllers/user.controller.js";

const router = express.Router();

router.post("/sendmail", sendMailToBala)

export default router;