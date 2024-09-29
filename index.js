import cors from "cors"
import express, { json } from "express"
import dotenv from "dotenv"
import userRouter from "./Routers/user.router.js"

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user", userRouter);

app.listen(process.env.PORT, () => {
    console.log("App is listening on PORT",process.env.PORT);
})