import { DataSource } from "typeorm";
import Client from "../entities/Client";
import Worker from "../entities/Worker";
import dotenv from "dotenv";
import User from "../entities/User";
dotenv.config()

const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    ssl: true,
    entities: [
        Client, Worker,
        User
    ],
    synchronize: false,
    logging: true,
})

export default AppDataSource
