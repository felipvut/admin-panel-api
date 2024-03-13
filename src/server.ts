import "reflect-metadata";

import express from "express";
import cors from 'cors';
import "./database/index";
import AppDataSource from "./database/index";
import routes from "./routes";
const app = express()
const port= 3000

AppDataSource.initialize().then(() => {
    app.listen(port, () => {
        console.log("Server is running in port " + port)
    })
}).catch((e) => {
    console.log(e)
})

app.use(cors())

app.use(routes)